import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Navigation, 
  Layers, 
  Maximize2 
} from 'lucide-react';

/**
 * Creates custom HTML Leaflet DivIcons with SVG styling
 */
function createDestinationIcon(title) {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div class="relative flex items-center justify-center">
        <div class="absolute -inset-2 bg-amber-400/40 rounded-full animate-ping"></div>
        <div class="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-white ring-2 ring-amber-400/80 cursor-pointer transform hover:scale-110 transition-transform">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
        <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-full bg-slate-900/90 text-amber-300 text-[10px] font-extrabold shadow-md border border-amber-400/40 pointer-events-none">
          📍 ${title.length > 20 ? title.substring(0, 18) + '...' : title}
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
}

function createHotelIcon(hotel, isHighlighted = false) {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div class="relative flex items-center justify-center">
        ${isHighlighted ? '<div class="absolute -inset-2 bg-sky-400/60 rounded-full animate-ping"></div>' : ''}
        <div class="relative w-8 h-8 rounded-xl ${isHighlighted ? 'bg-sky-500 ring-4 ring-sky-300 scale-125' : 'bg-gradient-to-tr from-sky-600 to-cyan-500 hover:bg-sky-500'} text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer transform hover:scale-115 transition-all">
          <svg class="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path d="M3 21h18M3 7v14M21 7v14M6 11h12M6 15h12M6 7h12"/>
          </svg>
        </div>
        <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.2 rounded-md bg-white text-slate-800 text-[9px] font-bold shadow border border-slate-200 pointer-events-none">
          ★ ${hotel.rating} • ${hotel.distanceFormatted}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
}

function createHospitalIcon(hospital, isHighlighted = false) {
  return L.divIcon({
    className: 'custom-leaflet-marker',
    html: `
      <div class="relative flex items-center justify-center">
        ${isHighlighted ? '<div class="absolute -inset-2 bg-rose-400/60 rounded-full animate-ping"></div>' : ''}
        <div class="relative w-8 h-8 rounded-xl ${isHighlighted ? 'bg-rose-600 ring-4 ring-rose-300 scale-125' : 'bg-gradient-to-tr from-rose-600 to-red-500 hover:bg-rose-500'} text-white flex items-center justify-center shadow-lg border-2 border-white cursor-pointer transform hover:scale-115 transition-all">
          <span class="text-sm font-black leading-none">✚</span>
        </div>
        <div class="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap px-1.5 py-0.2 rounded-md bg-rose-50 text-rose-800 text-[9px] font-extrabold shadow border border-rose-200 pointer-events-none">
          24×7 • ${hospital.distanceFormatted}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16]
  });
}

export default function NearbyPlacesMap({
  destination,
  hotels = [],
  hospitals = [],
  selectedPlaceId = null,
  onSelectPlace = null,
  filterType = 'all', // 'all' | 'hotels' | 'hospitals'
  onFilterChange = null
}) {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersLayerRef = useRef(null);
  const markerObjectsRef = useRef({});

  // Active Map Layer type ('street' | 'topo')
  const [mapStyle, setMapStyle] = useState('street');

  // Initialize or re-center map when destination changes
  useEffect(() => {
    if (!mapContainerRef.current || !destination) return;
    const lat = Number(destination.lat);
    const lng = Number(destination.lng);
    if (isNaN(lat) || isNaN(lng)) return;

    try {
      // Clean up previous instance if already attached
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (mapContainerRef.current._leaflet_id) {
        mapContainerRef.current._leaflet_id = null;
      }

      const map = L.map(mapContainerRef.current, {
        center: [lat, lng],
        zoom: 12,
        scrollWheelZoom: false, // Prevents accidental page scrolling hijacking
        zoomControl: false
      });

      // Add zoom control at bottom-right
      L.control.zoom({ position: 'bottom-right' }).addTo(map);

      // Layer Group for markers
      const markersLayer = L.layerGroup().addTo(map);
      markersLayerRef.current = markersLayer;
      mapInstanceRef.current = map;
      markerObjectsRef.current = {};

      const tileUrl = mapStyle === 'topo'
        ? 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
        : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

      const attribution = mapStyle === 'topo'
        ? '© OpenTopoMap contributors'
        : '© OpenStreetMap contributors';

      L.tileLayer(tileUrl, {
        maxZoom: 18,
        attribution
      }).addTo(map);

      const bounds = L.latLngBounds([]);

      // 1. Add Selected Destination Marker
      const destIcon = createDestinationIcon(destination.name || 'Tourist Place');
      const destMarker = L.marker([lat, lng], {
        icon: destIcon,
        zIndexOffset: 1000
      }).addTo(markersLayer);

      bounds.extend([lat, lng]);

      destMarker.bindPopup(`
        <div class="p-2 min-w-[200px]">
          <div class="flex items-center gap-1.5 mb-1">
            <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 uppercase tracking-wider">
              Selected Destination
            </span>
          </div>
          <h4 class="font-extrabold text-sm text-slate-900 leading-snug">${destination.name}</h4>
          <p class="text-[11px] text-slate-600 mt-0.5">${destination.district || 'Odisha'} District</p>
          <div class="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span class="text-slate-500 font-medium">Lat: ${lat.toFixed(4)}°</span>
            <span class="text-slate-500 font-medium">Lng: ${lng.toFixed(4)}°</span>
          </div>
        </div>
      `);

      markerObjectsRef.current[destination.id || 'destination'] = destMarker;

      // 2. Add Hotel Markers (if filter allows)
      if (filterType === 'all' || filterType === 'hotels') {
        hotels.forEach((hotel) => {
          if (typeof hotel.lat !== 'number' || typeof hotel.lng !== 'number') return;
          const isHighlighted = selectedPlaceId === hotel.id;
          const icon = createHotelIcon(hotel, isHighlighted);
          const marker = L.marker([hotel.lat, hotel.lng], { icon, zIndexOffset: 500 })
            .addTo(markersLayer);

          bounds.extend([hotel.lat, hotel.lng]);

          marker.bindPopup(`
            <div class="p-2 min-w-[220px]">
              <div class="flex items-center justify-between gap-1 mb-1">
                <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 uppercase">
                  🏨 Hotel / Stay
                </span>
                <span class="text-[11px] font-bold text-amber-600">★ ${hotel.rating}</span>
              </div>
              <h4 class="font-bold text-xs text-slate-900 leading-tight">${hotel.name}</h4>
              <div class="mt-1 flex items-center gap-2 text-[10px] text-slate-600">
                <span class="font-bold text-sky-700">📍 ${hotel.distanceFormatted}</span>
                <span>•</span>
                <span>${hotel.driveTimeText}</span>
              </div>
              ${hotel.priceRange ? `<div class="mt-1 text-[11px] font-extrabold text-emerald-700">${hotel.priceRange}</div>` : ''}
              <p class="text-[10px] text-slate-500 mt-1 line-clamp-1">${hotel.address}</p>
              <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2">
                <a 
                  href="${hotel.directionsUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex-1 py-1 px-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[10px] font-bold text-center transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Get Directions</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          `);

          marker.on('click', () => {
            if (onSelectPlace) onSelectPlace(hotel);
          });

          markerObjectsRef.current[hotel.id] = marker;
        });
      }

      // 3. Add Hospital Markers (if filter allows)
      if (filterType === 'all' || filterType === 'hospitals') {
        hospitals.forEach((hosp) => {
          if (typeof hosp.lat !== 'number' || typeof hosp.lng !== 'number') return;
          const isHighlighted = selectedPlaceId === hosp.id;
          const icon = createHospitalIcon(hosp, isHighlighted);
          const marker = L.marker([hosp.lat, hosp.lng], { icon, zIndexOffset: 600 })
            .addTo(markersLayer);

          bounds.extend([hosp.lat, hosp.lng]);

          marker.bindPopup(`
            <div class="p-2 min-w-[220px]">
              <div class="flex items-center justify-between gap-1 mb-1">
                <span class="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-rose-100 text-rose-800 uppercase flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-rose-600 animate-pulse"></span>
                  <span>🏥 Emergency Hospital</span>
                </span>
                <span class="text-[10px] font-bold text-rose-700">24×7</span>
              </div>
              <h4 class="font-bold text-xs text-slate-900 leading-tight">${hosp.name}</h4>
              <div class="mt-1 flex items-center gap-2 text-[10px] text-slate-600">
                <span class="font-bold text-rose-700">📍 ${hosp.distanceFormatted}</span>
                <span>•</span>
                <span>${hosp.driveTimeText}</span>
              </div>
              <p class="text-[10px] text-slate-500 mt-1 line-clamp-1">${hosp.address}</p>
              <div class="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-2">
                <a 
                  href="${hosp.directionsUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="flex-1 py-1 px-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[10px] font-bold text-center transition-colors flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Directions</span>
                  <span>↗</span>
                </a>
                ${hosp.phone ? `
                  <a 
                    href="tel:${hosp.phone.replace(/[^0-9+]/g, '')}" 
                    class="py-1 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-[10px] font-bold transition-colors"
                    title="Call Hospital Helpline"
                  >
                    📞 Call
                  </a>
                ` : ''}
              </div>
            </div>
          `);

          marker.on('click', () => {
            if (onSelectPlace) onSelectPlace(hosp);
          });

          markerObjectsRef.current[hosp.id] = marker;
        });
      }

      // Smoothly pan & fit bounds
      if (bounds.isValid()) {
        map.fitBounds(bounds, { padding: [35, 35], maxZoom: 14 });
      } else {
        map.setView([lat, lng], 12);
      }

      // Invalidate size once DOM settles
      const resizeTimer = setTimeout(() => {
        try {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        } catch {}
      }, 150);

      return () => clearTimeout(resizeTimer);

    } catch (err) {
      console.warn('Map initialization note:', err);
    }

    return () => {
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch {}
        mapInstanceRef.current = null;
      }
    };
  }, [destination?.id, destination?.lat, destination?.lng, hotels, hospitals, filterType, mapStyle]);

  // When selectedPlaceId changes externally (e.g., user clicked "View on Map"), pan to marker & open popup
  useEffect(() => {
    if (!selectedPlaceId || !mapInstanceRef.current) return;
    const targetMarker = markerObjectsRef.current[selectedPlaceId];
    if (targetMarker) {
      const map = mapInstanceRef.current;
      map.flyTo(targetMarker.getLatLng(), 14, { duration: 0.8 });
      targetMarker.openPopup();
    }
  }, [selectedPlaceId]);

  // Reset view to selected tourist destination center
  const handleRecenter = () => {
    if (!mapInstanceRef.current || !destination) return;
    mapInstanceRef.current.flyTo([destination.lat, destination.lng], 13, { duration: 0.8 });
  };

  // Fit all markers in view
  const handleFitAll = () => {
    if (!mapInstanceRef.current) return;
    const bounds = L.latLngBounds([]);
    if (destination) bounds.extend([destination.lat, destination.lng]);
    hotels.forEach(h => bounds.extend([h.lat, h.lng]));
    hospitals.forEach(h => bounds.extend([h.lat, h.lng]));
    if (bounds.isValid()) {
      mapInstanceRef.current.fitBounds(bounds, { padding: [35, 35] });
    }
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/90 bg-slate-900 group">
      
      {/* Top Map Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-[400] flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        
        {/* Destination Coordinate & Status Pill */}
        <div className="pointer-events-auto px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md text-white border border-white/20 text-xs font-semibold shadow-md flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="truncate max-w-[160px] sm:max-w-xs font-bold text-amber-300">
            {destination?.name}
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">
            ({destination?.lat?.toFixed(3)}°, {destination?.lng?.toFixed(3)}°)
          </span>
        </div>

        {/* Map Type & Control Buttons */}
        <div className="pointer-events-auto flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-md p-1 rounded-2xl border border-white/20 shadow-md">
          {/* Filter Pills */}
          <button
            onClick={() => onFilterChange && onFilterChange('all')}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer ${
              filterType === 'all' 
                ? 'bg-emerald-500 text-slate-950 shadow-xs' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            All Pins ({hotels.length + hospitals.length})
          </button>
          <button
            onClick={() => onFilterChange && onFilterChange('hotels')}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filterType === 'hotels' 
                ? 'bg-sky-500 text-white shadow-xs' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>🏨</span>
            <span className="hidden sm:inline">Hotels</span>
            <span>({hotels.length})</span>
          </button>
          <button
            onClick={() => onFilterChange && onFilterChange('hospitals')}
            className={`px-2.5 py-1 rounded-xl text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
              filterType === 'hospitals' 
                ? 'bg-rose-500 text-white shadow-xs' 
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <span>🏥</span>
            <span className="hidden sm:inline">Hospitals</span>
            <span>({hospitals.length})</span>
          </button>

          <span className="w-px h-4 bg-white/20 mx-0.5" />

          {/* Toggle Map View Style */}
          <button
            onClick={() => setMapStyle(prev => prev === 'street' ? 'topo' : 'street')}
            title={mapStyle === 'street' ? 'Switch to Terrain / Topo Map' : 'Switch to Street Map'}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>

          {/* Recenter on Tourist Destination */}
          <button
            onClick={handleRecenter}
            title="Recenter on Tourist Destination"
            className="p-1.5 rounded-lg text-amber-400 hover:text-amber-300 hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
          </button>

          {/* Fit All Bounds */}
          <button
            onClick={handleFitAll}
            title="View All Surrounding Points"
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Map Canvas Container */}
      <div 
        ref={mapContainerRef} 
        className="w-full h-72 sm:h-84 md:h-96 lg:h-[420px] xl:h-[460px] z-10" 
      />

      {/* Bottom Map Legend */}
      <div className="absolute bottom-2.5 left-3 right-3 z-[400] flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-white border border-white/10 text-[10px] font-medium flex flex-wrap items-center gap-2 sm:gap-3 shadow-md">
          <span className="flex items-center gap-1 text-amber-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Tourist Destination</span>
          </span>
          <span className="flex items-center gap-1 text-sky-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-sky-400"></span>
            <span>Nearby Hotels</span>
          </span>
          <span className="flex items-center gap-1 text-rose-300 font-bold">
            <span className="w-2 h-2 rounded-full bg-rose-400"></span>
            <span>Emergency Hospitals</span>
          </span>
        </div>
      </div>

    </div>
  );
}

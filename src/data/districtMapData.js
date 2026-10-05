import { DESTINATIONS } from './destinations';

export const ODISHA_REGIONS = [
  { id: 'all', label: 'All 30 Districts' },
  { id: 'coastal', label: '🌊 Coastal Odisha' },
  { id: 'northern', label: '🌲 Northern Highlands' },
  { id: 'western', label: '🌾 Western Heartland' },
  { id: 'southern', label: '⛰️ Southern Ghats' },
  { id: 'central', label: '🏛️ Central Heritage' }
];

export const DISTRICT_MAP_DATA = [
  // --- NORTHERN HIGHLANDS ---
  {
    name: 'Mayurbhanj',
    region: 'northern',
    regionLabel: 'Northern Highlands',
    mapX: 580,
    mapY: 110,
    tagline: 'Land of Royal Heritage, Waterfalls & Tiger Biosphere',
    highlights: ['Similipal National Park', 'Barehipani & Joranda Falls', 'Devkund Reservoir', 'Mayurbhanj Chhau Dance'],
    bestSeason: 'Oct - May',
    famousFor: 'Biosphere Reserve & Cascades',
    popularAttractionIds: ['barehipani-falls', 'similipal-national-park', 'devkund-waterfall']
  },
  {
    name: 'Sundargarh',
    region: 'northern',
    regionLabel: 'Northern Highlands',
    mapX: 310,
    mapY: 100,
    tagline: 'Steel City, Tribal Valleys & Roaring Waterfalls',
    highlights: ['Khandadhar Waterfall', 'Mandira Dam', 'Miriglotah Falls', 'Vaishno Devi Temple'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Khandadhar Falls & Forests',
    popularAttractionIds: ['khandadhar-falls']
  },
  {
    name: 'Keonjhar',
    region: 'northern',
    regionLabel: 'Northern Highlands',
    mapX: 470,
    mapY: 155,
    tagline: 'Mineral Heart, Ancient Rock Art & Sacred Turquoise Waters',
    highlights: ['Bhimkund Reservoir', 'Sanaghagara Falls', 'Badaghagara Falls', 'Sitabinji Fresco Painting'],
    bestSeason: 'Oct - Apr',
    famousFor: 'Bhimkund & Cascades',
    popularAttractionIds: ['bhimkund-reservoir']
  },
  {
    name: 'Deogarh',
    region: 'northern',
    regionLabel: 'Northern Highlands',
    mapX: 380,
    mapY: 180,
    tagline: 'Valley of Royal Fortresses & Cascading Springs',
    highlights: ['Pradhanpat Waterfall', 'Kurudkut Waterfall', 'Kailash Palace'],
    bestSeason: 'Nov - Feb',
    famousFor: 'Pradhanpat Falls'
  },

  // --- COASTAL ODISHA ---
  {
    name: 'Puri',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 520,
    mapY: 410,
    tagline: 'Spiritual Capital, UNESCO Sun Temple & Golden Shorelines',
    highlights: ['Shree Jagannath Temple', 'UNESCO Konark Sun Temple', 'Blue Flag Golden Beach', 'Chilika Satapada Dolphins', 'Raghurajpur Crafts Village'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Jagannath Dham & Konark',
    popularAttractionIds: ['konark-sun-temple', 'puri-beach', 'chilika-satapada', 'raghurajpur-village', 'astaranga-beach']
  },
  {
    name: 'Khurda',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 485,
    mapY: 345,
    tagline: 'Temple City Bhubaneswar, Ekamra Kshetra & Ancient Caves',
    highlights: ['Lingaraj Temple', 'Udayagiri & Khandagiri Caves', 'Dhauli Peace Pagoda', '64 Yogini Temple Hirapur'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Lingaraj & 64 Yogini',
    popularAttractionIds: ['lingaraj-temple', 'chausath-yogini-hirapur']
  },
  {
    name: 'Cuttack',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 510,
    mapY: 300,
    tagline: 'Millennium City of Silver Filigree & Historic River Citadel',
    highlights: ['Barabati Fort & Stadium', 'Netaji Birthplace Museum', 'Mahanadi Riverfront & Deer Park', 'Dhabaleswar Island Temple'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Silver Filigree & Barabati'
  },
  {
    name: 'Balasore',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 610,
    mapY: 190,
    tagline: 'Receding Sea Phenomenon, Mangroves & Sand Dunes',
    highlights: ['Chandipur Receding Beach', 'Bichitrapur Mangroves & Talsari Beach', 'Khirachora Gopinatha Temple', 'Kuldiha Wildlife Sanctuary'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Bichitrapur & Chandipur',
    popularAttractionIds: ['bichitrapur-mangroves']
  },
  {
    name: 'Bhadrak',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 580,
    mapY: 235,
    tagline: 'Sacred Shrines, Heritage Ports & Dhamra Coastline',
    highlights: ['Maa Bhadrakali Temple', 'Dhamra Port & Beach', 'Akhandalamani Temple Aradi', 'Biranchi Narayan Sun Temple'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Akhandalamani & Shrines'
  },
  {
    name: 'Kendrapara',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 585,
    mapY: 295,
    tagline: 'Tulasi Kshetra, Estuarine Crocodiles & Gahirmatha Turtles',
    highlights: ['Bhitarkanika National Park', 'Gahirmatha Marine Sanctuary', 'Baladevjew Temple', 'Hukitola Island Lighthouse'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Bhitarkanika & Turtles'
  },
  {
    name: 'Jagatsinghpur',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 565,
    mapY: 345,
    tagline: 'Deepwater Sea Gate, Maritime Legacy & Goddess Sarala',
    highlights: ['Maa Sarala Temple Jhankad', 'Paradip Sea Port & Beach', 'Siali Beach & Casuarina Groves'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Paradip Port & Sarala Temple'
  },
  {
    name: 'Ganjam',
    region: 'coastal',
    regionLabel: 'Coastal Odisha',
    mapX: 420,
    mapY: 450,
    tagline: 'Lighthouse Coasts, Olive Ridley Nesting & Eco-Lakes',
    highlights: ['Gopalpur-on-Sea & Lighthouse', 'Tampara Lake Eco-Promenade', 'Rushikulya River Mouth Turtle Rookery', 'Taratarini Hilltop Shrine'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Gopalpur & Tampara Lake',
    popularAttractionIds: ['gopalpur-on-sea', 'tampara-lake']
  },

  // --- SOUTHERN GHATS ---
  {
    name: 'Koraput',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 230,
    mapY: 530,
    tagline: 'Misty High Peaks, Thundering Duduma & Tribal Heartland',
    highlights: ['Deomali Mountain Peak (1,672m)', 'Duduma Waterfalls & Machkund Gorge', 'Gupteswar Limestone Caves', 'Koraput Tribal Museum', 'Kolab River Reservoir'],
    bestSeason: 'Sep - Mar',
    famousFor: 'Deomali, Duduma & Caves',
    popularAttractionIds: ['deomali-peak', 'duduma-falls', 'gupteswar-cave', 'koraput-tribal-museum']
  },
  {
    name: 'Kandhamal',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 350,
    mapY: 370,
    tagline: 'Kashmir of Odisha, Pine Forests & Cloud Plateaus',
    highlights: ['Daringbadi Hill Station & Pine Groves', 'Belghar Wildlife & Kutia Kondh Plateau', 'Midubanda Falls', 'Ludu Waterfall'],
    bestSeason: 'Oct - Apr',
    famousFor: 'Daringbadi & Belghar',
    popularAttractionIds: ['daringbadi-hill-station', 'belghar-plateau']
  },
  {
    name: 'Gajapati',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 385,
    mapY: 500,
    tagline: 'Tibetan Monastery, Palace Heritage & Mahendragiri Peak',
    highlights: ['Jiranga Padmasambhava Tibetan Monastery', 'Mahendragiri Mountain Peak (1,501m)', 'Gajapati Maharaja Palace Paralakhemundi', 'Khasada Waterfall'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Jiranga Monastery & Mahendragiri',
    popularAttractionIds: ['jiranga-monastery']
  },
  {
    name: 'Rayagada',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 290,
    mapY: 480,
    tagline: 'Suspension Bridges, Scenic Valleys & Dongria Kondh Trails',
    highlights: ['Chekaguda Suspension Bridge over Nagavali', 'Maa Majhighariani Temple', 'Chatikona Waterfalls & Tribal Market', 'Devagiri Cave Shrine'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Nagavali River & Waterfalls'
  },
  {
    name: 'Malkangiri',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 180,
    mapY: 590,
    tagline: 'Bonda Tribal Highlands, Balimela Blue Waters & Hanging Bridge',
    highlights: ['Balimela Reservoir & Backwaters', 'Satiguda Eco Dam', 'Ammakunda Natural Fish Pool', 'Bonda Hill Settlements'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Balimela & Eco Dam'
  },
  {
    name: 'Nabarangpur',
    region: 'southern',
    regionLabel: 'Southern Ghats',
    mapX: 210,
    mapY: 470,
    tagline: 'Forest Valleys, Lacquer Crafts & Indravati River',
    highlights: ['Khatiguda Indravati Reservoir', 'Maa Bhandargharani Shrine', 'Chandan Dhara Falls', 'Deer Park'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Indravati Dam & Lac Crafts'
  },

  // --- WESTERN HEARTLAND ---
  {
    name: 'Sambalpur',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 280,
    mapY: 220,
    tagline: 'World’s Longest Earthen Dam, Leaning Temple & Sambalpuri Weaves',
    highlights: ['Hirakud Dam & Reservoir', 'Huma Leaning Temple of Shiva', 'Samaleswari Temple', 'Debrigarh Wildlife Sanctuary'],
    bestSeason: 'Sep - Mar',
    famousFor: 'Hirakud & Leaning Temple'
  },
  {
    name: 'Bargarh',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 220,
    mapY: 235,
    tagline: 'World’s Largest Open Air Theatre & Debrigarh Sanctuary',
    highlights: ['Dhanu Yatra Open Air Stage', 'Debrigarh Ecotour Camp & Tiger Habitat', 'Gandhamardan Hills (Medicinal Plant Valley)', 'Nrusinghanath Temple'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Dhanu Yatra & Gandhamardan'
  },
  {
    name: 'Jharsuguda',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 280,
    mapY: 155,
    tagline: 'Deep Forest Caverns, Ancient Rock Paintings & Waterfalls',
    highlights: ['Koili Ghoghar Waterfall & Forest Shrine', 'Bikramkhol Prehistoric Rock Art', 'Ulapi Fort Ruins', 'Chandi Mandir Brajrajnagar'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Koili Ghoghar & Rock Art',
    popularAttractionIds: ['koili-ghoghar-falls']
  },
  {
    name: 'Balangir',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 235,
    mapY: 305,
    tagline: 'Ancient Tantric Shrines, Harishankar Cascades & Royal Palaces',
    highlights: ['Ranipur Jharial 64 Yogini Complex', 'Harishankar Waterfall & Gandhamardan Foothills', 'Sailashree Palace', 'Patneswari Temple'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Ranipur Jharial & Harishankar',
    popularAttractionIds: ['ranipur-jharial']
  },
  {
    name: 'Subarnapur',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 285,
    mapY: 290,
    tagline: 'Second Varanasi of India, Weaving Guilds & River Sanctums',
    highlights: ['Sureswari Temple', 'Subarnameru Temple', 'Pataneswari Shrine', 'Mahanadi-Tel River Confluence (Sangam)'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Temples & Sonepur Silk'
  },
  {
    name: 'Nuapada',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 180,
    mapY: 335,
    tagline: 'Sunabeda Wild Plateau, Waterfalls & Ancient Bird Sanctums',
    highlights: ['Sunabeda Wildlife Sanctuary & Tiger Basin', 'Patalganga Natural Spring', 'Beniabandh Bird Lake', 'Yogimunda Heritage Cave'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Sunabeda Wildlife Sanctuary'
  },
  {
    name: 'Kalahandi',
    region: 'western',
    regionLabel: 'Western Heartland',
    mapX: 220,
    mapY: 395,
    tagline: 'Ancient Asurgarh Fortress, Dokra Metal Crafts & Dokrichanchra',
    highlights: ['Dokrichanchra Waterfalls & Caves', 'Asurgarh 2000-Year Archaeological Fortress', 'Phurlijharan Waterfall', 'Manikeswari Temple Bhawanipatna'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Dokrichanchra & Asurgarh'
  },

  // --- CENTRAL HERITAGE ---
  {
    name: 'Angul',
    region: 'central',
    regionLabel: 'Central Heritage',
    mapX: 410,
    mapY: 260,
    tagline: 'Mighty Satkosia Tiger Gorge & Tikarpada Crocodile Canyon',
    highlights: ['Satkosia Gorge Sanctuary', 'Tikarpada Mahanadi River Canyon', 'Maa Budhi Thakurani Temple', 'Rengali Reservoir & Dam'],
    bestSeason: 'Oct - Apr',
    famousFor: 'Satkosia Gorge & Tikarpada',
    popularAttractionIds: ['satkosia-gorge']
  },
  {
    name: 'Dhenkanal',
    region: 'central',
    regionLabel: 'Central Heritage',
    mapX: 465,
    mapY: 260,
    tagline: 'Kapilash Hilltop Shrine, Mahima Alekha Peetha & Royal Palaces',
    highlights: ['Kapilash Temple & Deer Sanctuary (457m)', 'Joranda Gadi Mahima Dharma Seat', 'Saptasajya Eco Hills', 'Dhenkanal Royal Palace'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Kapilash & Joranda'
  },
  {
    name: 'Nayagarh',
    region: 'central',
    regionLabel: 'Central Heritage',
    mapX: 425,
    mapY: 360,
    tagline: 'Birthplace of Odia Sweet Chhena Poda & Forest Shrines',
    highlights: ['Kantilo Nilamadhav Temple on Mahanadi', 'Kuanria Eco Park & Deer Sanctuary', 'Sarankul Ladubaba Temple', 'Daspalla Valley'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Kantilo Nilamadhav & Chhena Poda'
  },
  {
    name: 'Boudh',
    region: 'central',
    regionLabel: 'Central Heritage',
    mapX: 335,
    mapY: 320,
    tagline: 'Ancient Buddhist Stupas, Star-Shaped Temples & Mahanadi Gorges',
    highlights: ['Buddha Statues of Boudh', 'Charisambhu Star-Shaped Temples', 'Mahanadi River Islands', 'Padmatola Sanctuary'],
    bestSeason: 'Oct - Feb',
    famousFor: 'Buddhist Stupas & Star Temples'
  },
  {
    name: 'Jajpur',
    region: 'central',
    regionLabel: 'Central Heritage',
    mapX: 535,
    mapY: 240,
    tagline: 'Shakti Peetha of Goddess Biraja & Buddhist Diamond Triangle',
    highlights: ['Biraja Temple & Nabhi Gaya', 'Ratnagiri Buddhist Monastery Complex', 'Udayagiri Buddhist Stupas', 'Lalitgiri Excavations'],
    bestSeason: 'Oct - Mar',
    famousFor: 'Biraja Temple & Diamond Triangle'
  }
];

export const DISTRICT_WEATHER_ROUTE_DATA = {
  Mayurbhanj: {
    weather: { temp: '25°C', condition: 'Misty Forest & Cascades', icon: '⛅', humidity: '68%', wind: '11 km/h', aqi: '32 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 240, time: '4h 45m', highway: 'NH-16 & NH-18', transit: 'AC Deluxe Express Bus / Baripada Intercity', scenicStop: 'Kuldiha Forests & Similipal Foothills' }
  },
  Sundargarh: {
    weather: { temp: '27°C', condition: 'Brisk Valley Breeze', icon: '☀️', humidity: '52%', wind: '12 km/h', aqi: '42 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 350, time: '6h 30m', highway: 'Biju Expressway & NH-520', transit: 'Rourkela Vande Bharat Exp / Rourkela Airport (RRK)', scenicStop: 'Brahmani River Gorge & Koira Iron Hills' }
  },
  Keonjhar: {
    weather: { temp: '24°C', condition: 'Pleasant Mountain Air', icon: '⛅', humidity: '60%', wind: '14 km/h', aqi: '35 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 220, time: '4h 15m', highway: 'NH-20 (Scenic Ghat Corridor)', transit: 'Direct Express Train / AC Tourist Bus', scenicStop: 'Ghatgaon Tarini Temple & Salandi Valley' }
  },
  Deogarh: {
    weather: { temp: '26°C', condition: 'Pleasant Foothills', icon: '☀️', humidity: '55%', wind: '10 km/h', aqi: '30 (Pure)' },
    route: { from: 'Bhubaneswar', distanceKm: 260, time: '5h 00m', highway: 'NH-55 & NH-49', transit: 'Inter-district Cruiser Bus / Private Cab', scenicStop: 'Rengali Dam Basin & Barkote Forests' }
  },
  Puri: {
    weather: { temp: '29°C', condition: 'Sunny Coastal Sea Breeze', icon: '🌊', humidity: '74%', wind: '18 km/h', aqi: '28 (Pristine Marine)' },
    route: { from: 'Bhubaneswar', distanceKm: 60, time: '1h 15m', highway: 'NH-316 (4-Lane Puri Expressway)', transit: 'Vande Bharat Express / OSRTC Volvo AC Bus', scenicStop: 'Dhauli Shanti Stupa & Pipili Applique Bazaar' }
  },
  Khurda: {
    weather: { temp: '31°C', condition: 'Bright Sunshine & Urban Comfort', icon: '☀️', humidity: '66%', wind: '13 km/h', aqi: '45 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 0, time: '0m', highway: 'State Gateway Hub (Janpath & NH-16)', transit: 'Biju Patnaik Int’l Airport (BBI) / Central Rail Terminal', scenicStop: 'Ekamra Heritage Circuit & Bindusagar Lake' }
  },
  Cuttack: {
    weather: { temp: '30°C', condition: 'Riverfront Breeze & Warm Sun', icon: '☀️', humidity: '70%', wind: '12 km/h', aqi: '48 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 28, time: '35m', highway: 'NH-16 (Twin City 6-Lane Expressway)', transit: 'Metro-link Buses / Frequent Local Trains', scenicStop: 'Mahanadi-Kathajodi River Bridges & Maritime Gate' }
  },
  Balasore: {
    weather: { temp: '28°C', condition: 'Tidal Breeze & Golden Sands', icon: '🌊', humidity: '72%', wind: '16 km/h', aqi: '36 (Clean Coastal)' },
    route: { from: 'Bhubaneswar', distanceKm: 205, time: '3h 45m', highway: 'NH-16 (Golden Quadrilateral)', transit: 'Vande Bharat / Howrah Shatabdi / OSRTC AC', scenicStop: 'Remuna Temple & Subarnarekha Estuary' }
  },
  Bhadrak: {
    weather: { temp: '29°C', condition: 'Warm Sunshine & River Mist', icon: '☀️', humidity: '70%', wind: '14 km/h', aqi: '38 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 130, time: '2h 30m', highway: 'NH-16 Corridor', transit: 'Superfast Trains / Direct Expressway Cabs', scenicStop: 'Baitarani River Ghats & Aradi Sanctum' }
  },
  Kendrapara: {
    weather: { temp: '27°C', condition: 'Mangrove Estuary Breeze', icon: '🍃', humidity: '78%', wind: '15 km/h', aqi: '30 (Pure Mangrove)' },
    route: { from: 'Bhubaneswar', distanceKm: 85, time: '1h 50m', highway: 'SH-9A & Cuttack-Chandbali Road', transit: 'OSRTC Deluxe Bus / Eco-Tour Cruiser Cabs', scenicStop: 'Brahmani River Marshes & Khola Entry Jetty' }
  },
  Jagatsinghpur: {
    weather: { temp: '29°C', condition: 'Maritime Breeze & Sun', icon: '🌊', humidity: '76%', wind: '17 km/h', aqi: '35 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 68, time: '1h 30m', highway: 'SH-42 & Cuttack-Paradip Expressway', transit: 'Direct Port Express Coaches & Cabs', scenicStop: 'Mahanadi Sea Confluence & Siali Dunes' }
  },
  Ganjam: {
    weather: { temp: '28°C', condition: 'Gentle Bay of Bengal Surf', icon: '🌊', humidity: '75%', wind: '19 km/h', aqi: '26 (Pure Maritime)' },
    route: { from: 'Bhubaneswar', distanceKm: 160, time: '2h 50m', highway: 'NH-16 (Scenic Coastal Stretch)', transit: 'Vande Bharat / Coromandel Express / Luxury AC Bus', scenicStop: 'Chilika Lake Western Banks & Rambha Bay' }
  },
  Koraput: {
    weather: { temp: '22°C', condition: 'Crisp Highland Clouds & Mist', icon: '🌫️', humidity: '62%', wind: '15 km/h', aqi: '19 (Crystal Pure)' },
    route: { from: 'Bhubaneswar', distanceKm: 510, time: '9h 45m', highway: 'NH-26 (Bhubaneswar-Rayagada-Koraput Ghats)', transit: 'Hirakhand Express (Overnight Vistadome) / Jeypore Flight (PYB)', scenicStop: 'Sunabeda Aero Township & Eastern Ghat Vistas' }
  },
  Kandhamal: {
    weather: { temp: '20°C', condition: 'Misty Pine Forest Chill', icon: '🌲', humidity: '58%', wind: '12 km/h', aqi: '16 (Pristine Mountain)' },
    route: { from: 'Bhubaneswar', distanceKm: 250, time: '5h 30m', highway: 'NH-57 & Daringbadi Scenic Ghat Road', transit: 'Eco-Tour AC Bus / Private Mountain SUV', scenicStop: 'Kalinga Ghat (Spine Road) & Coffee Plantations' }
  },
  Gajapati: {
    weather: { temp: '24°C', condition: 'Mountain Valley Breeze', icon: '⛅', humidity: '64%', wind: '14 km/h', aqi: '24 (Pure Air)' },
    route: { from: 'Bhubaneswar', distanceKm: 260, time: '5h 15m', highway: 'NH-16 & SH-17 Paralakhemundi Corridor', transit: 'Direct Intercity Express / OSRTC Bus', scenicStop: 'Vamsadhara River Valley & Jiranga Monasteries' }
  },
  Rayagada: {
    weather: { temp: '26°C', condition: 'Pleasant River Valley Sun', icon: '☀️', humidity: '58%', wind: '11 km/h', aqi: '25 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 390, time: '7h 45m', highway: 'NH-26 & SH-4', transit: 'Hirakhand Express / Samaleswari Express', scenicStop: 'Nagavali River Gorge & Niyamgiri Hills' }
  },
  Malkangiri: {
    weather: { temp: '27°C', condition: 'Reservoir Backwater Breeze', icon: '🍃', humidity: '60%', wind: '10 km/h', aqi: '22 (Pure)' },
    route: { from: 'Bhubaneswar', distanceKm: 620, time: '12h 00m', highway: 'NH-326 (via Jeypore & Govindapalli Ghat)', transit: 'Overnight Sleeper Bus / Train to Koraput + Taxi', scenicStop: 'Machkund River Vistas & Balimela Hydro Dam' }
  },
  Nabarangpur: {
    weather: { temp: '25°C', condition: 'Gentle Highland Winds', icon: '⛅', humidity: '60%', wind: '12 km/h', aqi: '22 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 510, time: '9h 30m', highway: 'NH-26 Corridor', transit: 'OSRTC AC Deluxe Bus / Train to Jeypore', scenicStop: 'Indravati River Basin & Lacquer Craft Hamlets' }
  },
  Sambalpur: {
    weather: { temp: '32°C', condition: 'Warm Sunshine & Reservoir Shore', icon: '☀️', humidity: '48%', wind: '13 km/h', aqi: '42 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 280, time: '5h 15m', highway: 'NH-55 (Bhubaneswar-Sambalpur 4-Lane)', transit: 'Sambalpur Vande Bharat / Intercity Express', scenicStop: 'Mahanadi River Basin & Hirakud Dyke Drive' }
  },
  Bargarh: {
    weather: { temp: '31°C', condition: 'Bright Heartland Sunshine', icon: '☀️', humidity: '46%', wind: '12 km/h', aqi: '36 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 330, time: '6h 00m', highway: 'NH-53 & Biju Expressway', transit: 'Superfast Trains / Direct AC Deluxe Buses', scenicStop: 'Gandhamardan Foothills & Nrusinghanath Falls' }
  },
  Jharsuguda: {
    weather: { temp: '30°C', condition: 'Clear Skies & Moderate Breeze', icon: '☀️', humidity: '50%', wind: '14 km/h', aqi: '44 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 330, time: '5h 45m', highway: 'NH-49 & Biju Expressway', transit: 'Veer Surendra Sai Airport (JRG) Flight / Vande Bharat', scenicStop: 'Ib River Valley & Belpahar Forests' }
  },
  Balangir: {
    weather: { temp: '29°C', condition: 'Gentle Foothill Sunshine', icon: '⛅', humidity: '52%', wind: '11 km/h', aqi: '30 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 310, time: '6h 00m', highway: 'NH-57 & Khurda-Balangir Railway', transit: 'Direct Express Trains / OSRTC Super Deluxe', scenicStop: 'Boudh River Belt & Harishankar Springs' }
  },
  Subarnapur: {
    weather: { temp: '30°C', condition: 'Sacred Confluence Breeze', icon: '☀️', humidity: '54%', wind: '12 km/h', aqi: '28 (Pure)' },
    route: { from: 'Bhubaneswar', distanceKm: 280, time: '5h 30m', highway: 'NH-57 & Mahanadi Belt Road', transit: 'Direct AC Coaches / Private Cab', scenicStop: 'Mahanadi-Tel River Confluence & Handloom Weavers' }
  },
  Nuapada: {
    weather: { temp: '28°C', condition: 'Wild Plateau Winds', icon: '🍃', humidity: '50%', wind: '13 km/h', aqi: '25 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 480, time: '8h 45m', highway: 'NH-353 Corridor', transit: 'Train to Khariar Road / Inter-district AC Bus', scenicStop: 'Jonk River Gorge & Sunabeda Canyons' }
  },
  Kalahandi: {
    weather: { temp: '29°C', condition: 'Valley Sun & Light Clouds', icon: '☀️', humidity: '53%', wind: '11 km/h', aqi: '26 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 430, time: '8h 00m', highway: 'NH-26 & SH-6 (Bhawanipatna)', transit: 'Junagarh Road Express / AC Deluxe Bus', scenicStop: 'Tel River Bridge & Dokra Metal Villages' }
  },
  Angul: {
    weather: { temp: '31°C', condition: 'Canyon Breezes & Warm Sun', icon: '☀️', humidity: '56%', wind: '12 km/h', aqi: '46 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 135, time: '2h 45m', highway: 'NH-55 (Cuttack-Angul Highway)', transit: 'Intercity Trains / AC Deluxe Buses', scenicStop: 'Mahanadi Valley & Tikarpada Eco-Camps' }
  },
  Dhenkanal: {
    weather: { temp: '29°C', condition: 'Hills Breeze & Mellow Sun', icon: '⛅', humidity: '62%', wind: '13 km/h', aqi: '35 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 75, time: '1h 30m', highway: 'NH-55 Corridor', transit: 'Local Passenger Trains / Cab Service', scenicStop: 'Kapilash Winding Hill Road & Saptasajya Forests' }
  },
  Nayagarh: {
    weather: { temp: '30°C', condition: 'Verdant Valley Breeze', icon: '☀️', humidity: '65%', wind: '12 km/h', aqi: '32 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 88, time: '1h 45m', highway: 'NH-57 Corridor', transit: 'Direct Nayagarh Passenger / Cruiser Buses', scenicStop: 'Kantilo River Cliff & Brass-bell Artisans' }
  },
  Boudh: {
    weather: { temp: '29°C', condition: 'Riverbank Mild Breeze', icon: '⛅', humidity: '58%', wind: '11 km/h', aqi: '28 (Pure)' },
    route: { from: 'Bhubaneswar', distanceKm: 230, time: '4h 30m', highway: 'NH-57 (Scenic Central Spine)', transit: 'Direct Express Coaches / Tour Cabs', scenicStop: 'Mahanadi Scenic Overlooks & Buddhist Ruins' }
  },
  Jajpur: {
    weather: { temp: '29°C', condition: 'Heritage Plain Sunshine', icon: '☀️', humidity: '68%', wind: '14 km/h', aqi: '40 (Good)' },
    route: { from: 'Bhubaneswar', distanceKm: 105, time: '2h 00m', highway: 'NH-16 (Bhubaneswar-Chandikhole-Jajpur)', transit: 'Direct Superfast Trains / Frequent Highway Buses', scenicStop: 'Baitarani River Bridges & Ratnagiri Monasteries' }
  }
};

/**
 * Helper to fetch weather and route data for a district
 */
export function getDistrictWeatherAndRoute(districtName) {
  const normName = districtName.trim();
  const matchedKey = Object.keys(DISTRICT_WEATHER_ROUTE_DATA).find(
    (k) => k.toLowerCase() === normName.toLowerCase()
  );
  if (matchedKey && DISTRICT_WEATHER_ROUTE_DATA[matchedKey]) {
    return DISTRICT_WEATHER_ROUTE_DATA[matchedKey];
  }
  return {
    weather: { temp: '28°C', condition: 'Pleasant & Sunny', icon: '☀️', humidity: '65%', wind: '12 km/h', aqi: '32 (Clean)' },
    route: { from: 'Bhubaneswar', distanceKm: 180, time: '3h 30m', highway: 'Odisha State Highway', transit: 'Express Bus / Train', scenicStop: 'Scenic Ghats & Foothills' }
  };
}

/**
 * Helper to fetch all catalog destinations matching a district,
 * plus supplementary highlights if catalog has fewer items, along with weather and route.
 */
export function getDistrictAttractions(districtName) {
  const matched = DESTINATIONS.filter(
    (d) => d.district.toLowerCase() === districtName.toLowerCase()
  );

  const districtInfo = DISTRICT_MAP_DATA.find(
    (d) => d.name.toLowerCase() === districtName.toLowerCase()
  ) || DISTRICT_MAP_DATA[4]; // Default to Puri if not found

  const meta = getDistrictWeatherAndRoute(districtName);

  return {
    district: {
      ...districtInfo,
      weather: meta.weather,
      route: meta.route
    },
    destinations: matched,
    hasCatalogDestinations: matched.length > 0,
    weather: meta.weather,
    route: meta.route
  };
}


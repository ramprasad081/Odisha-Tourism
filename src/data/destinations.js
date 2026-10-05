export const HERO_SLIDES = [
  {
    id: "mountains",
    categoryTag: "Misty Highlands & Peaks",
    title: "Crown of the Eastern Ghats",
    subtitle: "Soar above the cloud blanket at Deomali Peak and stroll through fragrant pine forests and coffee plantations in Daringbadi.",
    badge: "⛰️ Majestic Hills & Vistas",
    bgImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85",
    location: "Koraput & Kandhamal",
    highlight: "Highest Peak at 1,672m",
    color: "from-emerald-900/80 via-slate-900/60 to-black/70"
  },
  {
    id: "waterfalls",
    categoryTag: "Thundering Wild Cascades",
    title: "Untamed Living Waterfalls",
    subtitle: "Witness the sheer power of Barehipani's 399-meter twin drop inside Similipal and the dramatic Machkund gorge of Duduma.",
    badge: "💦 Pristine Waterfalls",
    bgImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=2000&q=85",
    location: "Mayurbhanj & Koraput",
    highlight: "India's 2nd Highest Waterfall",
    color: "from-sky-950/85 via-emerald-950/60 to-black/70"
  },
  {
    id: "beaches",
    categoryTag: "Golden Shores & Bay of Bengal",
    title: "Sun-Kissed Blue Flag Shores",
    subtitle: "Recharge along Puri's Blue Flag Golden Beach, watch magical sunrises at Chandrabhaga, and discover tranquil Gopalpur-on-Sea.",
    badge: "🌊 Azure Coastlines",
    bgImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85",
    location: "Puri & Ganjam Coast",
    highlight: "485 km Pristine Coastline",
    color: "from-cyan-950/80 via-slate-900/60 to-black/75"
  },
  {
    id: "temples",
    categoryTag: "Architectural Marvels & Spiritual Sanctum",
    title: "Timeless Stone Chariots & Shrines",
    subtitle: "Marvel at the 13th-century UNESCO Konark Sun Temple, bow at holy Shree Jagannath Dham, and explore thousand-year-old Kalinga temples.",
    badge: "🛕 Sacred Heritage",
    bgImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=2000&q=85",
    location: "Puri & Bhubaneswar",
    highlight: "UNESCO World Heritage Site",
    color: "from-amber-950/80 via-slate-900/60 to-black/80"
  }
];

export const CATEGORIES = [
  { id: "all", label: "All Destinations", icon: "Compass", count: 12 },
  { id: "Waterfalls", label: "Waterfalls", icon: "Droplets", count: 3 },
  { id: "Hills", label: "Hills", icon: "Mountain", count: 2 },
  { id: "Temples", label: "Temples", icon: "Landmark", count: 2 },
  { id: "Beaches", label: "Beaches", icon: "Palmtree", count: 2 },
  { id: "Wildlife", label: "Wildlife", icon: "Bird", count: 2 },
  { id: "Culture", label: "Culture", icon: "Sparkles", count: 1 }
];

export const DISTRICTS = [
  "All Districts",
  "Angul",
  "Balangir",
  "Balasore",
  "Bargarh",
  "Bhadrak",
  "Boudh",
  "Cuttack",
  "Deogarh",
  "Dhenkanal",
  "Gajapati",
  "Ganjam",
  "Jagatsinghpur",
  "Jajpur",
  "Jharsuguda",
  "Kalahandi",
  "Kandhamal",
  "Kendrapara",
  "Keonjhar",
  "Khurda",
  "Koraput",
  "Malkangiri",
  "Mayurbhanj",
  "Nabarangpur",
  "Nayagarh",
  "Nuapada",
  "Puri",
  "Rayagada",
  "Sambalpur",
  "Subarnapur",
  "Sundargarh"
];

export const DESTINATIONS = [
  {
    id: "barehipani-falls",
    title: "Barehipani Waterfall",
    district: "Mayurbhanj",
    category: "Waterfalls",
    rating: 4.9,
    reviews: 1420,
    shortDesc: "India's second highest waterfall, a majestic two-tiered cascade plunging 399 meters deep inside Similipal National Park.",
    fullDesc: "Barehipani is a awe-inspiring two-tiered waterfall located within the core area of Similipal Tiger Reserve in Mayurbhanj district. Originating from the Budhabalanga river, the water cascades gracefully down cliff faces over lush green Sal forests. The surrounding biosphere is home to royal Bengal tigers, wild elephants, and exotic Himalayan flora, offering an unparalleled eco-luxury wilderness experience.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["399m Drop", "Tiger Reserve", "Trekking", "Eco-Tourism"],
    bestTime: "October to April",
    weather: {
      season: "Autumn to Spring (Crisp & Clear)",
      temperature: "14°C - 26°C",
      sunrise: "05:42 AM",
      sunset: "05:38 PM"
    },
    nearestHub: "Baripada / Bhubaneswar (250 km)",
    entryFee: "₹100 (Forest Entry Permit)",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "High (Popular Classic)",
    companionPlace: { id: "devkund-waterfall", title: "Devkund Waterfall", relation: "Quiet natural pool alternative 60 km away" },
    altitude: "1,150 m"
  },
  {
    id: "deomali-peak",
    title: "Deomali Mountain Peak",
    district: "Koraput",
    category: "Hills",
    rating: 4.9,
    reviews: 1210,
    shortDesc: "Odisha's highest peak touching 1,672 meters, offering panoramic views of misty clouds, undulating green ridges, and tribal hamlets.",
    fullDesc: "Perched majestically in the heart of the Koraput valley, Deomali is the highest mountain peak in Odisha at 1,672 meters above sea level. It is acclaimed for its dramatic emerald green crests, glider-friendly airstreams, and vibrant tribal culture of the Kandha and Paraja tribes. Sunrise and sunset over the rolling misty horizons are among Eastern India's most breathtaking sights.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Highest Peak", "Cloud Trek", "Hang Gliding", "Tribal Culture"],
    bestTime: "September to March",
    weather: {
      season: "Winter & Post-Monsoon (Misty Highland)",
      temperature: "8°C - 22°C (Chilly Breezes)",
      sunrise: "05:35 AM",
      sunset: "05:45 PM"
    },
    nearestHub: "Semiliguda / Jeypore (40 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "High (State's Crown Peak)",
    companionPlace: { id: "belghar-wildlife-plateau", title: "Belghar Plateau", relation: "Peaceful virgin mist plateau twin" },
    altitude: "1,672 m"
  },
  {
    id: "konark-sun-temple",
    title: "Konark Sun Temple",
    district: "Puri",
    category: "Temples",
    rating: 4.9,
    reviews: 3840,
    shortDesc: "UNESCO World Heritage 13th-century stone chariot dedicated to Surya the Sun God, decorated with 24 carved wheels and celestial dancers.",
    fullDesc: "Conceived as a colossal chariot of the Sun God Surya with twelve pairs of elaborately carved wheels pulled by seven spirited horses, the Konark Sun Temple is a monumental triumph of medieval Kalinga architecture. Built in the 13th century by King Narasimhadeva I, the intricate erotic, martial, and celestial sculptures etched in Khondalite stone leave travelers utterly spellbound.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["UNESCO World Heritage", "13th Century", "Stone Carvings", "Light & Sound"],
    bestTime: "October to March",
    weather: {
      season: "Pleasant Coastal Winter",
      temperature: "16°C - 28°C",
      sunrise: "05:32 AM",
      sunset: "05:28 PM"
    },
    nearestHub: "Bhubaneswar Airport (65 km)",
    entryFee: "₹40 (Indian) / ₹600 (Foreign)",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "Very High (Global Tourism Magnet)",
    companionPlace: { id: "chausath-yogini-hirapur", title: "Chausath Yogini Hirapur", relation: "Quiet 9th-century tantric twin 50 km away" },
    altitude: "Sea level"
  },
  {
    id: "golden-beach-puri",
    title: "Golden Beach & Sacred Coast",
    district: "Puri",
    category: "Beaches",
    rating: 4.8,
    reviews: 2950,
    shortDesc: "Eco-certified Blue Flag beach with golden shimmering sands, azure waves of the Bay of Bengal, and evening holy arti on the shoreline.",
    fullDesc: "Golden Beach in Puri is renowned globally for its Blue Flag ecological certification, ensuring crystal clean waters, pristine sand cleanliness, eco-loungers, and superior safety. Located just minutes from the divine Shree Jagannath Temple, the beach is famous for majestic sunrise views, delicious seaside cashew treats, and sand art installations by celebrated local artists.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Blue Flag Certified", "Golden Sands", "Surfing", "Beach Boardwalk"],
    bestTime: "October to April",
    weather: {
      season: "Tropical Breeze & Golden Sun",
      temperature: "18°C - 29°C",
      sunrise: "05:30 AM",
      sunset: "05:29 PM"
    },
    nearestHub: "Puri Railway Station (3 km)",
    entryFee: "₹20 (Blue Flag Zone)",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "Very High (Vibrant Coastal Hub)",
    companionPlace: { id: "astaranga-beach", title: "Astaranga Sunset Beach", relation: "Crowd-free secluded alternative 60 km up the coast" },
    altitude: "Sea level"
  },
  {
    id: "daringbadi-valley",
    title: "Daringbadi - Kashmir of Odisha",
    district: "Kandhamal",
    category: "Hills",
    rating: 4.8,
    reviews: 1680,
    shortDesc: "A picturesque hill station celebrated for aromatic coffee plantations, pine forests, winter sub-zero frosts, and cascading rivers.",
    fullDesc: "Set at an elevation of 915 meters amidst the serene highlands of Kandhamal, Daringbadi is affectionately dubbed the 'Kashmir of Odisha'. It is the only place in the state where temperatures can dip to freezing in winter. Visitors can wander through expansive coffee gardens, pepper groves, and tranquil pine woodlands, as well as discover Hill View Point and Midubanda Waterfall.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Coffee Plantations", "Pine Woods", "Winter Frost", "Valley Views"],
    bestTime: "November to February",
    weather: {
      season: "Sub-Zero Winter Frost & Pine Mist",
      temperature: "2°C - 19°C (Chilled)",
      sunrise: "05:40 AM",
      sunset: "05:35 PM"
    },
    nearestHub: "Berhampur (120 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "High (Top Winter Destination)",
    companionPlace: { id: "belghar-wildlife-plateau", title: "Belghar Misty Plateau", relation: "Underrated virgin high-altitude plateau 110 km away" },
    altitude: "915 m"
  },
  {
    id: "duduma-waterfalls",
    title: "Duduma Waterfalls",
    district: "Koraput",
    category: "Waterfalls",
    rating: 4.8,
    reviews: 980,
    shortDesc: "A 175-meter roaring cascade on the Machkund river in the Eastern Ghats, revered by the ancient and indigenous Bonda tribe.",
    fullDesc: "Duduma Waterfall is a breathtaking 175-meter torrent roaring through a deep rocky ravine along the border of Koraput and Andhra Pradesh. Surrounded by dense primaeval deciduous forest, it forms the powerhouse of the Machkund Hydroelectric Project. The rugged cliffs and dramatic gorges are also the ancestral home to one of India's oldest indigenous communities, the Bonda tribe.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["175m Cascade", "Gorge Canyon", "Machkund River", "Indigenous Land"],
    bestTime: "September to March",
    weather: {
      season: "Gorge Mist & Roaring Rapids",
      temperature: "12°C - 24°C",
      sunrise: "05:38 AM",
      sunset: "05:44 PM"
    },
    nearestHub: "Jeypore (70 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: false,
    crowdLevel: "Moderate to High",
    companionPlace: { id: "gupteswar-cave-temple", title: "Gupteswar Cave Temple", relation: "Quiet limestone cave shrine nearby in Koraput" },
    altitude: "850 m"
  },
  {
    id: "gupteswar-cave-temple",
    title: "Gupteswar Cave Temple",
    district: "Koraput",
    category: "Temples",
    rating: 4.8,
    reviews: 890,
    shortDesc: "Ancient limestone cave temple enveloped in the dense Ramagiri forest, sheltering a natural self-formed Shiva Lingam.",
    fullDesc: "Gupteswar (meaning 'The Hidden Lord') is an ancient sacred cave shrine perched inside a scenic hillock of limestone surrounded by the lush green Ramagiri forest along the Kolab river in Koraput. The cave houses a massive natural Shiva Lingam that is believed to grow in size. Pilgrims trek through lush sal forests to perform rituals in the cool subterranean sanctum.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Limestone Caves", "Shiva Lingam", "Ramagiri Forest", "Ancient Shrine"],
    bestTime: "October to April",
    weather: {
      season: "Subterranean Cool & Forest Shade",
      temperature: "15°C - 27°C (Caves ~20°C)",
      sunrise: "05:40 AM",
      sunset: "05:46 PM"
    },
    nearestHub: "Jeypore (28 km) / Koraput (55 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Peaceful & Sacred",
    underratedReason: "Hidden deep inside subterranean limestone caves in the Ramagiri sal forest, offering ancient spiritual serenity with low tourist density.",
    companionPlace: { id: "deomali-peak", title: "Deomali Peak", relation: "Major famous peak in Koraput" },
    altitude: "680 m"
  },
  {
    id: "koraput-tribal-museum",
    title: "Koraput Tribal Museum",
    district: "Koraput",
    category: "Culture",
    rating: 4.8,
    reviews: 720,
    shortDesc: "Living cultural museum preserving authentic attire, weaponry, musical instruments, and arts of Koraput's indigenous tribes.",
    fullDesc: "Situated in Koraput near the hilltop Sabara Srikhetra Jagannath shrine, the Koraput Tribal Museum is a celebrated archive honoring the vibrant lifestyles of southern Odisha's indigenous communities, including the Bonda, Gadaba, Paraja, and Kandha tribes. It displays life-size authentic tribal dwellings, handwoven textiles, brass ornaments, hunting implements, and indigenous agricultural tools.",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Bonda & Paraja Heritage", "Living Artifacts", "Art & Textiles", "Cultural Archive"],
    bestTime: "All Year Round",
    weather: {
      season: "Year-Round Highland Mild",
      temperature: "14°C - 26°C",
      sunrise: "05:37 AM",
      sunset: "05:44 PM"
    },
    nearestHub: "Koraput Town Center (2 km)",
    entryFee: "₹20",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Serene & Unhurried",
    underratedReason: "An authentic, peaceful museum displaying authentic full-scale tribal dwellings and rare artifacts away from crowded commercial attractions.",
    companionPlace: { id: "deomali-peak", title: "Deomali Peak", relation: "Nearby famous peak in Koraput" },
    altitude: "870 m"
  },
  {
    id: "chilika-lake-satapada",
    title: "Chilika Lagoon & Satapada",
    district: "Puri",
    category: "Wildlife",
    rating: 4.9,
    reviews: 2430,
    shortDesc: "Asia's largest brackish water lagoon, a Ramsar wetland sheltering endangered Irrawaddy dolphins and a million migratory birds.",
    fullDesc: "Spanning over 1,100 square kilometers, Chilika Lake is Asia's largest brackish water wetland sanctuary. Satapada, on the southeastern edge, is famous for exhilarating boat safaris to glimpse playful Irrawaddy dolphins breaching the calm waters and the dramatic sea mouth opening into the Bay of Bengal. In winter, Nalabana Island transforms into a wonderland for over 225 species of migratory avian travelers.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Ramsar Wetland", "Irrawaddy Dolphins", "Boat Safari", "Bird Haven"],
    bestTime: "November to February",
    weather: {
      season: "Winter Migratory Bird Season",
      temperature: "15°C - 27°C",
      sunrise: "05:33 AM",
      sunset: "05:30 PM"
    },
    nearestHub: "Puri (50 km) / Bhubaneswar (110 km)",
    entryFee: "₹40 (Boat hire extra)",
    isFeatured: true,
    isUnderrated: false,
    crowdLevel: "Very High (Iconic Wildlife Hub)",
    companionPlace: { id: "bichitrapur-mangrove-talsari", title: "Bichitrapur Mangroves", relation: "Quiet mangrove boat safari alternative" },
    altitude: "Sea level"
  },
  {
    id: "similipal-tiger-reserve",
    title: "Similipal National Park",
    district: "Mayurbhanj",
    category: "Wildlife",
    rating: 4.8,
    reviews: 1540,
    shortDesc: "A UNESCO Biosphere Reserve boasting dense Sal forests, Royal Bengal Tigers, wild Asian elephants, and sparkling hill streams.",
    fullDesc: "Similipal is a massive 2,750-sq-km wilderness expanse taking its name from the vibrant red silk-cotton (Simul) trees. Recognized under UNESCO's Man and Biosphere program, it harbors the elusive Royal Bengal Tiger, wild elephants, leopards, and over 1,076 plant species. It is also celebrated for the twin waterfalls of Barehipani and Joranda.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Tiger Reserve", "UNESCO Biosphere", "Jungle Safari", "Eco Cottages"],
    bestTime: "November to June",
    weather: {
      season: "Sal Forest Canopied Cool",
      temperature: "11°C - 28°C",
      sunrise: "05:41 AM",
      sunset: "05:37 PM"
    },
    nearestHub: "Baripada (20 km)",
    entryFee: "₹100 (Safari extra)",
    isFeatured: false,
    isUnderrated: false,
    crowdLevel: "High (Famous Biosphere Reserve)",
    companionPlace: { id: "devkund-waterfall", title: "Devkund Waterfall", relation: "Quiet turquoise natural pool on the outer fringe" },
    altitude: "900 m"
  },
  {
    id: "raghurajpur-craft-village",
    title: "Raghurajpur Heritage Crafts Village",
    district: "Puri",
    category: "Culture",
    rating: 4.9,
    reviews: 1120,
    shortDesc: "Living heritage village of master Pattachitra painters, palm leaf engravers, stone sculptors, and Gotipua dancers.",
    fullDesc: "Raghurajpur is an enchanting heritage craft village nestled among lush coconut and betel groves just outside Puri. Every home here is an open art gallery where master artisans create intricate Pattachitra scroll paintings on treated cloth using natural vegetable and stone pigments. It is also the birthplace of legendary Odissi maestro Guru Kelucharan Mohapatra.",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Pattachitra Art", "Gotipua Dance", "Master Craftsmen", "Heritage Walk"],
    bestTime: "All Year Round",
    weather: {
      season: "Coconut Grove Tropical Climate",
      temperature: "17°C - 30°C",
      sunrise: "05:31 AM",
      sunset: "05:29 PM"
    },
    nearestHub: "Puri (14 km) / Bhubaneswar (50 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Peaceful & Artistic",
    underratedReason: "A serene artisanal commune with no commercial stores where every household produces ancient handmade scroll art in open verandahs.",
    companionPlace: { id: "golden-beach-puri", title: "Golden Beach Puri", relation: "Famous beach 14 km away" },
    altitude: "Sea level"
  },
  {
    id: "gopalpur-on-sea",
    title: "Gopalpur-on-Sea",
    district: "Ganjam",
    category: "Beaches",
    rating: 4.7,
    reviews: 1390,
    shortDesc: "A historic seaport town featuring quiet golden dunes, colonial lighthouse, cashew plantations, and soothing ocean breezes.",
    fullDesc: "Once a bustling maritime port during ancient Kalinga seafaring trade and British colonial era, Gopalpur-on-Sea is now an idyllic coastal sanctuary. The vintage red-and-white striped lighthouse offers 360-degree vistas of the sparkling coast and olive ridley turtle migration points. The beach is uncrowded, pristine, and renowned for fresh coastal seafood and relaxing beach resorts.",
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Colonial Lighthouse", "Quiet Retreat", "Olive Ridley Coast", "Beach Luxury"],
    bestTime: "October to March",
    weather: {
      season: "Balmy Bay of Bengal Breeze",
      temperature: "17°C - 28°C",
      sunrise: "05:36 AM",
      sunset: "05:34 PM"
    },
    nearestHub: "Berhampur Railway Station (16 km)",
    entryFee: "Free Entry (₹10 Lighthouse)",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Tranquil & Low Footfall",
    underratedReason: "Clean, peaceful vintage seaport shoreline with gentle dunes and virtually no commercial bustle compared to Puri.",
    companionPlace: { id: "golden-beach-puri", title: "Golden Beach Puri", relation: "Popular beach alternative 150 km north" },
    altitude: "Sea level"
  },
  {
    id: "lingaraj-temple",
    title: "Lingaraj Temple & Ekamra Kshetra",
    district: "Khurda",
    category: "Temples",
    rating: 4.8,
    reviews: 2890,
    shortDesc: "The 11th-century crown jewel of Kalinga architecture in Bhubaneswar, towering 55 meters in the ancient Ekamra Kshetra temple city.",
    fullDesc: "Lingaraj Temple is the grandest landmark in Bhubaneswar, dedicated to Lord Harihara (an amalgam of Shiva and Vishnu). Constructed by the Somavamsi dynasty, the sanctum spire dominates the historic skyline, surrounded by over 108 subsidiary shrines. The complex sits beside the sacred Bindusagar Lake, which is believed to contain holy drops from every sacred river and tank across India.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["11th Century", "Kalinga Spire", "Bindusagar Lake", "Temple City"],
    bestTime: "October to March",
    weather: {
      season: "Mild Winter in Temple City",
      temperature: "15°C - 29°C",
      sunrise: "05:34 AM",
      sunset: "05:31 PM"
    },
    nearestHub: "Bhubaneswar Airport (4 km)",
    entryFee: "Free Entry (Sanctum restricted to Hindus)",
    isFeatured: false,
    isUnderrated: false,
    crowdLevel: "Very High (State Spiritual Capital)",
    companionPlace: { id: "chausath-yogini-hirapur", title: "Chausath Yogini Hirapur", relation: "Mystical 9th-century tantric shrine 15 km away" },
    altitude: "45 m"
  },
  {
    id: "khandadhar-waterfall",
    title: "Khandadhar Waterfall",
    district: "Sundargarh",
    category: "Waterfalls",
    rating: 4.8,
    reviews: 870,
    shortDesc: "A gleaming sword-shaped waterfall plummeting 244 meters amidst dense virgin forests and rich mineral-rich mountains.",
    fullDesc: "Rising like a glistening silver sword from the forested cliffs of Sundargarh, Khandadhar (meaning 'Edge of a Sword') cascades 244 meters in a direct plunge. Surrounded by rich indigenous communities and whispering sal forests, the misty spray creates perpetual rainbows on sunny afternoons, offering an extraordinary destination for photographers and nature adventurers.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["244m Drop", "Rainbow Spray", "Forest Trek", "Sword Falls"],
    bestTime: "October to March",
    weather: {
      season: "Crisp Northern Forest Winter",
      temperature: "11°C - 25°C",
      sunrise: "05:43 AM",
      sunset: "05:36 PM"
    },
    nearestHub: "Rourkela (70 km)",
    entryFee: "₹30",
    isFeatured: false,
    isUnderrated: false,
    crowdLevel: "Moderate (Northern Scenic Icon)",
    companionPlace: { id: "koili-ghoghar-waterfall", title: "Koili Ghoghar Waterfall", relation: "Quiet step cascade in neighboring Jharsuguda" },
    altitude: "750 m"
  },
  {
    id: "devkund-waterfall",
    title: "Devkund Waterfall & Ambika Sanctum",
    district: "Mayurbhanj",
    category: "Waterfalls",
    rating: 4.9,
    reviews: 860,
    shortDesc: "A pristine natural turquoise-blue reservoir and cascading fall cradled deep in the forest under the Similipal hills, home to the sacred Maa Ambika shrine.",
    fullDesc: "Devkund (literally 'The Bathtub of Gods') is one of Odisha's most ethereal hidden gems. Originating from the Similipal hills, clean emerald-turquoise water falls from a height of 50 feet into a tranquil natural pool before flowing onwards. Perched on the rocky hillock right beside the falls is the ancient temple of Goddess Ambika, built by the royal family of Mayurbhanj in 1940. It offers visitors a meditative, crystal-clear swimming spot completely away from the crowded tourist trails.",
    image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Turquoise Pool", "Ambika Temple", "Hidden Cascade", "Underrated Gem"],
    bestTime: "October to March",
    weather: {
      season: "Pleasant Forest Cool",
      temperature: "13°C - 25°C",
      sunrise: "05:40 AM",
      sunset: "05:35 PM"
    },
    nearestHub: "Baripada (60 km) / Udala (28 km)",
    entryFee: "₹40 (Forest Pass)",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Serene & Untouched",
    underratedReason: "Untouched turquoise natural pool with sacred ambience and crystal clear waters, free from long safari queues.",
    companionPlace: { id: "similipal-tiger-reserve", title: "Similipal Tiger Reserve", relation: "Famous UNESCO park in same district" },
    altitude: "580 m"
  },
  {
    id: "chausath-yogini-hirapur",
    title: "Chausath (64) Yogini Temple, Hirapur",
    district: "Khurda",
    category: "Temples",
    rating: 4.9,
    reviews: 1140,
    shortDesc: "9th-century circular roofless hypaethral tantric sanctum nestled amidst quiet rural paddy fields, housing 64 black chlorite celestial Yoginis.",
    fullDesc: "Tucked away in the peaceful village of Hirapur just 15 km outside Bhubaneswar, this 9th-century open-air circular temple is one of only four surviving 64 Yogini temples in all of India. Built by Queen Hiradevi of the Bhauma-Kara dynasty, its circular sand-stone perimeter features 64 intricate, expressive black chlorite stone sculptures of female yoginis riding various mounts (vahanas). Open to the sky to absorb celestial cosmic energy, it remains an extraordinary, tranquil hidden jewel that receives only a fraction of Lingaraj's crowds.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["9th Century", "Circular Hypaethral", "Tantric Marvel", "Underrated Gem"],
    bestTime: "October to March",
    weather: {
      season: "Peaceful Village Breeze",
      temperature: "15°C - 28°C",
      sunrise: "05:33 AM",
      sunset: "05:32 PM"
    },
    nearestHub: "Bhubaneswar (15 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Quiet & Mystical",
    underratedReason: "One of only 4 hypaethral circular shrines in India, open to the blue sky in a tranquil village setting with zero commercial noise.",
    companionPlace: { id: "lingaraj-temple", title: "Lingaraj Temple", relation: "Famous temple in same city" },
    altitude: "42 m"
  },
  {
    id: "astaranga-beach",
    title: "Astaranga Sunset Beach & River Mouth",
    district: "Puri",
    category: "Beaches",
    rating: 4.8,
    reviews: 760,
    shortDesc: "A peaceful coastal paradise where the Devi river meets the Bay of Bengal, celebrated for ethereal fiery red sunsets and secluded sands.",
    fullDesc: "Named 'Asta-Ranga' (meaning 'Eight Colors of Sunset'), this quiet coastal haven sits at the mouth of the Devi river along the Bay of Bengal. Unlike the crowded beaches of Puri town, Astaranga offers endless serene shorelines, gentle sea breezes, swaying casuarina groves, and traditional wooden fishing smacks returning at twilight under dramatic crimson skies. It is also an active nesting site for Olive Ridley sea turtles and a paradise for nature photographers.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Fiery Sunset", "Devi River Mouth", "Secluded Beach", "Underrated Gem"],
    bestTime: "October to April",
    weather: {
      season: "Crimson Twilight & Sea Breeze",
      temperature: "18°C - 29°C",
      sunrise: "05:31 AM",
      sunset: "05:27 PM"
    },
    nearestHub: "Konark (35 km) / Puri (60 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Untouched & Quiet",
    underratedReason: "Pure untouched shoreline with kaleidoscopic red-orange sunsets, no noisy vendors, and gentle river estuary calm.",
    companionPlace: { id: "golden-beach-puri", title: "Golden Beach Puri", relation: "Famous beach 60 km away" },
    altitude: "Sea level"
  },
  {
    id: "bichitrapur-mangrove-talsari",
    title: "Bichitrapur Mangroves & Talsari Beach",
    district: "Balasore",
    category: "Wildlife",
    rating: 4.8,
    reviews: 890,
    shortDesc: "Secluded mangrove creek estuary where the Subarnarekha river meets the sea, famous for red ghost crab sands and tranquil boat safaris.",
    fullDesc: "Spreading over 563 hectares of tidal mangrove wetlands along the border of Odisha and Bengal, Bichitrapur is a virgin coastal ecosystem maintained by the Odisha Forest Department. Travelers navigate quiet motorized boats through dense mangrove creeks, spotting kingfishers, egrets, and mudskippers, before stepping out onto secluded white sandbars that turn brilliant crimson as millions of red ghost crabs scurry along the shoreline.",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Red Ghost Crabs", "Mangrove Boat Safari", "Virgin Sands", "Underrated Gem"],
    bestTime: "October to March",
    weather: {
      season: "Cool Estuary Breeze",
      temperature: "15°C - 27°C",
      sunrise: "05:37 AM",
      sunset: "05:26 PM"
    },
    nearestHub: "Jaleswar (45 km) / Balasore (85 km)",
    entryFee: "₹1,200 per 8-person Eco Boat",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Pure Wilderness & Quiet",
    underratedReason: "Spectacular carpets of red ghost crabs on secluded sand islands with peaceful creek boat rides.",
    companionPlace: { id: "chilika-lake-satapada", title: "Chilika Lagoon", relation: "Famous coastal wetland in Odisha" },
    altitude: "Sea level"
  },
  {
    id: "jiranga-monastery-chandragiri",
    title: "Jiranga Padmasambhava Tibetan Monastery",
    district: "Gajapati",
    category: "Culture",
    rating: 4.9,
    reviews: 1460,
    shortDesc: "South Asia's largest Tibetan Buddhist monastery inaugurated by the Dalai Lama, surrounded by misty Eastern Ghats hills and maize valleys.",
    fullDesc: "Known as the 'Mini Tibet of Odisha', Chandragiri in Gajapati district has been home to a flourishing Tibetan refugee settlement since 1963. The crowning glory is the Padmasambhava Mahavihara Monastery at Jiranga, a grand five-storeyed Tibetan architectural wonder featuring a 23-foot golden statue of Lord Buddha, intricately painted frescoes, traditional Tibetan prayer wheels, and serene Buddhist chanting resonating across mountain slopes.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Mini Tibet", "23ft Golden Buddha", "Eastern Ghats Mist", "Underrated Gem"],
    bestTime: "September to March",
    weather: {
      season: "Pleasant Mountain Winter",
      temperature: "12°C - 24°C",
      sunrise: "05:39 AM",
      sunset: "05:41 PM"
    },
    nearestHub: "Berhampur (80 km) / Paralakhemundi (45 km)",
    entryFee: "Free Entry",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Peaceful & Spiritual",
    underratedReason: "Unexpected Tibetan Buddhist enclave hidden in southern Odisha's green hills, offering unmatched peace and spiritual aura.",
    companionPlace: { id: "gopalpur-on-sea", title: "Gopalpur-on-Sea", relation: "Famous southern coast hub" },
    altitude: "650 m"
  },
  {
    id: "satkosia-tiger-gorge",
    title: "Satkosia Tiger Gorge & Tikarpada Canyon",
    district: "Angul",
    category: "Wildlife",
    rating: 4.9,
    reviews: 1580,
    shortDesc: "A dramatic 22-kilometer canyon sliced through the Eastern Ghats by the emerald Mahanadi river, offering tent camping and rare gharials.",
    fullDesc: "Where the mighty Mahanadi river cuts a dramatic 22-km narrow gorge through the dense hills of the Eastern Ghats, Satkosia Gorge is one of India's most breathtaking natural canyons. Designated as a Tiger Reserve and Ramsar wetland, it shelters endangered Gharials, mugger crocodiles, and hornbills. Travelers can stay in eco-tents on the sparkling river sandbanks, kayak on deep calm waters, and witness pristine starlit night skies.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["22km River Canyon", "Sandbar Camping", "Gharial Sanctuary", "Underrated Gem"],
    bestTime: "November to March",
    weather: {
      season: "Crisp River Canyon Breeze",
      temperature: "12°C - 26°C",
      sunrise: "05:38 AM",
      sunset: "05:34 PM"
    },
    nearestHub: "Angul (60 km) / Bhubaneswar (125 km)",
    entryFee: "₹50 (Eco-retreat booking separate)",
    isFeatured: true,
    isUnderrated: true,
    crowdLevel: "Serene & Eco-Luxury",
    underratedReason: "22-kilometer majestic river gorge with sandbar glamping, zero vehicular pollution, and breathtaking canyon boat cruises.",
    companionPlace: { id: "barehipani-falls", title: "Barehipani Waterfall", relation: "Famous northern reserve" },
    altitude: "180 m"
  },
  {
    id: "ranipur-jharial-64-yogini",
    title: "Ranipur Jharial 64 Yogini Sanctum",
    district: "Balangir",
    category: "Temples",
    rating: 4.8,
    reviews: 670,
    shortDesc: "Ancient 9th-century circular sandstone hypaethral shrine and 50+ monolithic temples situated on a massive granite rocky outcrop.",
    fullDesc: "Perched atop a sprawling granite rock outcrop in Balangir district, Ranipur Jharial is an extraordinary open-air museum of medieval Indian sacred architecture. It hosts one of the very few surviving hypaethral (roofless) circular 64 Yogini temples in the world, with Lord Nataraja dancing at the center surrounded by carved sandstone Yoginis. Beside it stands the 65-foot Someswar brick temple and numerous 9th-century stone shrines, virtually devoid of tourist crowds.",
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["9th-Century Tantric", "Roofless Circular Shrine", "Granite Outcrop", "Underrated Gem"],
    bestTime: "October to March",
    weather: {
      season: "Cool Western Plateau Breeze",
      temperature: "13°C - 27°C",
      sunrise: "05:43 AM",
      sunset: "05:42 PM"
    },
    nearestHub: "Titilagarh (30 km) / Balangir (80 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Untouched Archaeological Wonder",
    underratedReason: "Rare 9th-century roofless circular sandstone temple on a sweeping rocky plateau, untouched by modern commercialism.",
    companionPlace: { id: "konark-sun-temple", title: "Konark Sun Temple", relation: "Famous temple architecture of Odisha" },
    altitude: "240 m"
  },
  {
    id: "belghar-wildlife-plateau",
    title: "Belghar Misty Wildlife Plateau",
    district: "Kandhamal",
    category: "Hills",
    rating: 4.8,
    reviews: 520,
    shortDesc: "High-altitude misty plateau at 2,555 feet with wooden watchtowers, dense sal and bamboo forests, and the ancestral Kutia Kondha tribe.",
    fullDesc: "Set high up at 2,555 feet above sea level in southern Kandhamal, Belghar is a serene mountain wilderness of rolling hills, wild elephant corridors, and endemic mountain orchids. It is the ancestral sanctuary of the vulnerable Kutia Kondha indigenous tribe. The iconic colonial-era wooden forest resthouse and watchtower offer mesmerizing sunrise views over unbroken forest canopies, far away from the regular tourist routes of Daringbadi.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["2555ft Mist Ridge", "Kutia Kondha Tribes", "Wooden Watchtower", "Underrated Gem"],
    bestTime: "November to March",
    weather: {
      season: "Highland Pine Chill",
      temperature: "4°C - 18°C",
      sunrise: "05:41 AM",
      sunset: "05:38 PM"
    },
    nearestHub: "Baliguda (85 km) / Daringbadi (110 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Untamed Highland Solitude",
    underratedReason: "High-altitude virgin mountain plateau with dense elephant forests and rare indigenous culture, completely free from hotel clusters.",
    companionPlace: { id: "daringbadi-valley", title: "Daringbadi Valley", relation: "Famous hill station in same district" },
    altitude: "778 m (2,555 ft)"
  },
  {
    id: "koili-ghoghar-waterfall",
    title: "Koili Ghoghar Forest Waterfall & Cavern",
    district: "Jharsuguda",
    category: "Waterfalls",
    rating: 4.8,
    reviews: 740,
    shortDesc: "Enchanting step cascade on the Ahiraj rivulet flowing inside dense sal forests with a naturally submerged Shiva lingam inside a rocky cavern.",
    fullDesc: "Located in a tranquil forest valley between Jharsuguda and Sundargarh, Koili Ghoghar waterfall flows over stepped rocky basalt tiers into a deep, crystal-clear pool. Inside a rocky cavern beneath the cascade sits the sacred, submerged 'Maheswarnath' Shiva lingam. Shaded by towering trees and alive with birdsong, it is a serene oasis beloved by locals but rarely visited by mainstream tourists.",
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Submerged Lingam", "Step Cascade", "Sal Woodlands", "Underrated Gem"],
    bestTime: "October to March",
    weather: {
      season: "Cool Forest Canopy",
      temperature: "12°C - 26°C",
      sunrise: "05:44 AM",
      sunset: "05:40 PM"
    },
    nearestHub: "Jharsuguda (30 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Quiet & Sacred Nature",
    underratedReason: "Secret woodland step cascade with a holy submerged lingam in a deep cave, secluded from big crowds.",
    companionPlace: { id: "khandadhar-waterfall", title: "Khandadhar Waterfall", relation: "Famous northern waterfall" },
    altitude: "310 m"
  },
  {
    id: "bhimkund-natural-reservoir",
    title: "Bhimkund Sacred Turquoise Reservoir",
    district: "Keonjhar",
    category: "Waterfalls",
    rating: 4.8,
    reviews: 810,
    shortDesc: "Two-tiered natural turquoise rock pool formed by the Baitarani river, mythologically linked to the Pandavas and Bhima's mace.",
    fullDesc: "Bhimkund is a breathtaking geological natural wonder located where the Baitarani river cuts through colossal granite formations. The river plunges into a circular natural turquoise pool of seemingly bottomless depth before reappearing downstream. According to local folklore, Bhima struck the rock with his gada (mace) during the Pandavas' exile to find fresh drinking water for Draupadi. The crystalline turquoise color of the water is spellbinding.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Turquoise Abyss", "Baitarani Gorge", "Mahabharata Lore", "Underrated Gem"],
    bestTime: "October to April",
    weather: {
      season: "Misty River Valley",
      temperature: "14°C - 27°C",
      sunrise: "05:39 AM",
      sunset: "05:33 PM"
    },
    nearestHub: "Keonjhar (40 km) / Anandapur (28 km)",
    entryFee: "Free Entry",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Serene Geological Wonder",
    underratedReason: "Stunning, impossibly blue circular natural pool enclosed by granite gorge cliffs with ancient mythical lore.",
    companionPlace: { id: "barehipani-falls", title: "Barehipani Waterfall", relation: "Famous waterfall in neighboring district" },
    altitude: "410 m"
  },
  {
    id: "tampara-lake-promenade",
    title: "Tampara Lake Eco-Promenade",
    district: "Ganjam",
    category: "Wildlife",
    rating: 4.8,
    reviews: 920,
    shortDesc: "One of Odisha's largest and cleanest freshwater lakes, offering wooden boardwalks, gentle kayaking, and breezy casuarina groves.",
    fullDesc: "Stretching along the National Highway near Chhatrapur, Tampara is a pristine 300-hectare freshwater lake separated from the Bay of Bengal by a scenic ridge of casuarina and cashew plantations. Recently developed with eco-friendly timber promenades, quiet kayaking, and electric boats, Tampara is an idyllic, uncrowded watersport sanctuary just minutes from the coast.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
    ],
    tags: ["Freshwater Lagoon", "Kayaking", "Eco Boardwalk", "Underrated Gem"],
    bestTime: "October to April",
    weather: {
      season: "Gentle Coastal Breeze",
      temperature: "17°C - 28°C",
      sunrise: "05:35 AM",
      sunset: "05:32 PM"
    },
    nearestHub: "Berhampur (20 km) / Gopalpur (25 km)",
    entryFee: "Free Entry (Water sports extra)",
    isFeatured: false,
    isUnderrated: true,
    crowdLevel: "Peaceful Eco-Retreat",
    underratedReason: "Sparkling freshwaters with tranquil kayaking and breezy casuarina boardwalks, away from heavy coastal rush.",
    companionPlace: { id: "gopalpur-on-sea", title: "Gopalpur-on-Sea", relation: "Famous beach 25 km away" },
    altitude: "Sea level"
  }
];

export const CURATED_TRAILS = [
  {
    id: "golden-triangle",
    title: "The Golden Heritage & Spiritual Trail",
    route: "Bhubaneswar → Puri → Konark",
    duration: "4 Days / 3 Nights",
    category: "Culture & Spiritual",
    isFeatured: true,
    badge: "Featured",
    distance: "185 km Circuit",
    bestSeason: "Oct – Mar",
    stops: ["Bhubaneswar", "Dhauli Shanti Stupa", "Pipili Craft Village", "Puri Jagannath Dham", "Chandrabhaga Beach", "Konark Sun Temple"],
    highlights: ["11th-century Lingaraj Temple", "Holy Shree Jagannath Dham & Arti", "UNESCO 13th-century Konark Sun Temple", "Raghurajpur Pattachitra Craft Village"],
    dayPlan: [
      { day: "Day 1", title: "Temple City of Bhubaneswar", desc: "Arrival at BBI Airport. Tour of ancient Lingaraj Temple, Rajarani Temple, Mukteshvara, and evening Aarti at Bindusagar." },
      { day: "Day 2", title: "Spiritual Sanctum & Sacred Coast of Puri", desc: "Morning drive via Dhauli Peace Pagoda and Pipili applique village. VIP Darshan at Shree Jagannath Temple and sunset stroll at Blue Flag Golden Beach." },
      { day: "Day 3", title: "UNESCO Konark Chariot & Artisan Village", desc: "Dawn sunrise over the Bay of Bengal at Chandrabhaga. Guided architectural tour of Konark Sun Temple stone wheels and private heritage walk in Raghurajpur." },
      { day: "Day 4", title: "Crafts, Cuisine & Departure", desc: "Savor fresh authentic Chhena Poda and Khaja. Last-minute silver filigree shopping in Bhubaneswar before outbound flight." }
    ],
    image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    accent: "from-amber-500/20 to-emerald-500/10"
  },
  {
    id: "eastern-ghats-mist",
    title: "Highland Mist & Deomali Peak Expedition",
    route: "Daringbadi → Koraput → Deomali Summit",
    duration: "5 Days / 4 Nights",
    category: "Highlands & Peaks",
    isFeatured: true,
    badge: "Featured",
    distance: "420 km Mountain Loop",
    bestSeason: "Nov – Feb",
    stops: ["Daringbadi Pine Valley", "Midubanda Falls", "Rayagada Hills", "Koraput Tribal Hub", "Deomali Summit 1,672m", "Duduma Gorge"],
    highlights: ["Odisha's highest peak at 1,672m", "Sub-zero morning frost & pine woodlands in Daringbadi", "Roaring 175m Duduma Waterfall", "Bonda and Paraja indigenous weekly haats"],
    dayPlan: [
      { day: "Day 1", title: "Ascent to Kashmir of Odisha", desc: "Scenic hill climb to Daringbadi (915m). Walk through organic coffee plantations, pepper groves, and silent pine woodlands." },
      { day: "Day 2", title: "Hidden Cascades & Valley Overlooks", desc: "Visit Midubanda Waterfall, Hill View Watchtower, and scenic sunset over the Eastern Ghats valley." },
      { day: "Day 3", title: "Koraput Highlands & Tribal Heritage", desc: "Journey deeper into Koraput. Explore the ancient Jagannath Temple at Sabara Srikhetra and vibrant tribal handicrafts." },
      { day: "Day 4", title: "Deomali Peak Cloud Summit", desc: "Early morning summit hike up Deomali (1,672m), touching the cloud banks. Breathtaking panoramic ridge walks and paragliding vistas." },
      { day: "Day 5", title: "Duduma Machkund Gorge & Return", desc: "Descend past the majestic 175-meter Duduma Waterfall on the Machkund River before transfer to Jeypore or Visakhapatnam." }
    ],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    accent: "from-emerald-500/20 to-sky-500/10"
  },
  {
    id: "wild-waterfalls-safari",
    title: "Untamed Cascades & Similipal Tiger Safari",
    route: "Baripada → Similipal Biosphere → Barehipani",
    duration: "4 Days / 3 Nights",
    category: "Waterfalls & Biosphere",
    isFeatured: true,
    badge: "Featured",
    distance: "290 km Biosphere Circuit",
    bestSeason: "Nov – Apr",
    stops: ["Baripada Palace", "Pithabata Gate", "Barehipani 399m Falls", "Joranda Cascade", "Chahala Core Range"],
    highlights: ["Barehipani 2-tiered 399m plunge", "Royal Bengal Tiger & Asian Elephant habitats", "UNESCO Biosphere Reserve Sal jungle", "Eco-cottage night stay in forest canopy"],
    dayPlan: [
      { day: "Day 1", title: "Gateway to Royal Mayurbhanj", desc: "Arrive in Baripada. Visit Mayurbhanj Palace and local Chhau martial dance troupe performance." },
      { day: "Day 2", title: "Heart of Similipal & Barehipani Falls", desc: "4x4 jungle safari entering Similipal Reserve. Stand in awe before Barehipani Falls plummeting 399 meters over rugged cliffs." },
      { day: "Day 3", title: "Joranda Cascades & Elephant Watch", desc: "Witness Joranda's sheer 150m plunge. Evening birdwatching and wildlife spotting near Chahala salt lick." },
      { day: "Day 4", title: "Eco-Retreat & Departure", desc: "Morning nature trail with tribal naturalist guides. Return drive towards Bhubaneswar." }
    ],
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    accent: "from-teal-500/20 to-emerald-500/10"
  },
  {
    id: "azure-coastal-odyssey",
    title: "Sun-Kissed Blue Flag & Dolphin Lagoon Trail",
    route: "Puri → Satapada (Chilika) → Gopalpur-on-Sea",
    duration: "4 Days / 3 Nights",
    category: "Beaches & Coastal Lagoon",
    isFeatured: true,
    badge: "Featured",
    distance: "230 km Coastal Route",
    bestSeason: "Oct – Apr",
    stops: ["Puri Blue Flag Beach", "Satapada Sea Mouth", "Chilika Dolphin Sanctuary", "Tampara Lake", "Gopalpur Vintage Beach"],
    highlights: ["Rare Irrawaddy dolphin boat cruise in Chilika", "Blue Flag pristine Golden Beach luxury loungers", "Charming Gopalpur colonial lighthouse & golden dunes", "Fresh Bay of Bengal seafood gastronomy"],
    dayPlan: [
      { day: "Day 1", title: "Blue Flag Sands & Sunset Puri", desc: "Check-in to beachfront luxury resort. Afternoon water sports and peaceful sunset meditation on certified eco-beach." },
      { day: "Day 2", title: "Chilika Lagoon & Dolphin Encounter", desc: "Private boat excursion at Satapada. Watch endangered Irrawaddy dolphins breach the waters where the lagoon meets the open sea." },
      { day: "Day 3", title: "Historic Gopalpur-on-Sea", desc: "Scenic coastal highway drive south to Gopalpur. Climb the historic striped lighthouse and unwind in tranquil coastal serenity." },
      { day: "Day 4", title: "Tampara Lake Kayaking & Farewell", desc: "Morning kayaking and water sports at pristine Tampara Lake before departure from Berhampur railway station." }
    ],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    accent: "from-sky-500/20 to-amber-500/10"
  }
];

export const QUICK_STATS = [
  { value: "485+", unit: "Kilometers", label: "Pristine Bay Coastline", icon: "Waves" },
  { value: "30+", unit: "Cascades", label: "Majestic Forest Waterfalls", icon: "Droplets" },
  { value: "1,000+", unit: "Temples", label: "Sacred Kalinga Shrines", icon: "Landmark" },
  { value: "15+", unit: "Hidden Gems", label: "Underrated Escapes", icon: "Sparkles" },
  { value: "62", unit: "Tribes", label: "Living Indigenous Cultures", icon: "Users" },
  { value: "4.9 ★", unit: "Global Rating", label: "Traveler Satisfaction", icon: "Star" }
];

export const NEARBY_HUBS = [
  {
    "id": "koraput",
    "name": "Koraput",
    "region": "Southern Odisha",
    "tagline": "Highland peaks, deep waterfalls, limestone caves & tribal heritage",
    "description": "Perched high in the Eastern Ghats at 870m, Koraput acts as the strategic basecamp to explore misty cloud peaks, sacred cave sanctums, and indigenous traditions.",
    "cover": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "deomali-peak",
        "name": "Deomali Peak",
        "type": "Mountain Summit (1,672 m)",
        "distance": "42 km from Koraput",
        "driveTime": "1 hr 15 min",
        "rating": 4.9,
        "reviews": 1210,
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.6744,
          "lng": 82.9867
        },
        "altitude": "1,672 m (Highest in Odisha)",
        "entryFee": "Free Entry / Eco Pass ₹20",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Highest mountain peak in Odisha with rolling green ridges, cloud walks, and panoramic hang-gliding vistas."
      },
      {
        "id": "duduma-waterfalls",
        "name": "Duduma Waterfall",
        "type": "175 m Gorge Cascade",
        "distance": "68 km from Koraput",
        "driveTime": "1 hr 45 min",
        "rating": 4.8,
        "reviews": 980,
        "image": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.5137,
          "lng": 82.4168
        },
        "altitude": "540 m Canyon Base",
        "entryFee": "₹30 per visitor",
        "isUnderrated": true,
        "bestTime": "August to February",
        "highlight": "Thunderous 175-meter cascade roaring into the deep Machkund canyon near the ancestral home of Bonda tribe."
      },
      {
        "id": "gupteswar-cave-temple",
        "name": "Gupteswar Cave Temple",
        "type": "Sacred Limestone Shrine",
        "distance": "55 km from Koraput",
        "driveTime": "1 hr 20 min",
        "rating": 4.8,
        "reviews": 890,
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.8252,
          "lng": 82.1643
        },
        "altitude": "620 m Forest Cavern",
        "entryFee": "Free Entry / Temple Donation",
        "isUnderrated": true,
        "bestTime": "October to March (Shivaratri)",
        "highlight": "Naturally formed growing Shiva Lingam ensconced in ancient subterranean limestone caves in Ramagiri Forest."
      },
      {
        "id": "koraput-tribal-museum",
        "name": "Koraput Tribal Museum",
        "type": "Indigenous Culture & Lore",
        "distance": "Town Center (Koraput)",
        "driveTime": "5 min drive",
        "rating": 4.8,
        "reviews": 720,
        "image": "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.8135,
          "lng": 82.7126
        },
        "altitude": "870 m Plateau Town",
        "entryFee": "₹20 (Adults) / ₹10 (Kids)",
        "isUnderrated": false,
        "bestTime": "All Year Round (10 AM - 5 PM)",
        "highlight": "Authentic living archive featuring full-scale tribal huts, musical instruments, weaponry, and jewelry of Bonda & Paraja tribes."
      }
    ]
  },
  {
    "id": "puri",
    "name": "Puri",
    "region": "Coastal Odisha",
    "tagline": "Holy Jagannath Dham, UNESCO Konark chariot, & Blue Flag sands",
    "description": "The spiritual coastal heart of Odisha, connecting certified eco-beaches, ancient Sun temple architecture, and artisanal craft colonies.",
    "cover": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "golden-beach-puri",
        "name": "Golden Beach Puri",
        "type": "Blue Flag Eco Beach",
        "distance": "Puri Coastal Promenade",
        "driveTime": "5 min",
        "rating": 4.9,
        "reviews": 2950,
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.7983,
          "lng": 85.8249
        },
        "altitude": "Sea Level",
        "entryFee": "₹20 (Blue Flag amenities pass)",
        "isUnderrated": false,
        "bestTime": "October to April",
        "highlight": "Pristine certified clean sands, safe swimming zones, loungers, and evening oceanfront Aarti."
      },
      {
        "id": "konark-sun-temple",
        "name": "Konark Sun Temple",
        "type": "UNESCO World Heritage",
        "distance": "35 km via Marine Drive",
        "driveTime": "40 min",
        "rating": 4.9,
        "reviews": 3840,
        "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.8876,
          "lng": 86.0945
        },
        "altitude": "Coastal Plain",
        "entryFee": "₹40 (Indians) / ₹600 (Foreigners)",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Colossal 13th-century stone chariot carved with 24 wheels and intricate celestial sculptures."
      },
      {
        "id": "raghurajpur-craft-village",
        "name": "Raghurajpur Heritage Village",
        "type": "Living Art & Gotipua",
        "distance": "14 km from Puri",
        "driveTime": "20 min",
        "rating": 4.9,
        "reviews": 1120,
        "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.8837,
          "lng": 85.8236
        },
        "altitude": "Heritage Hamlet",
        "entryFee": "Free Entry / Workshops available",
        "isUnderrated": true,
        "bestTime": "November to March",
        "highlight": "Every household is an artisan studio creating Pattachitra scrolls, palm-leaf carvings, and Gotipua dance."
      },
      {
        "id": "chilika-lake-satapada",
        "name": "Chilika Lagoon (Satapada)",
        "type": "Irrawaddy Dolphin Haven",
        "distance": "50 km from Puri",
        "driveTime": "1 hr 10 min",
        "rating": 4.8,
        "reviews": 2150,
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.6705,
          "lng": 85.4372
        },
        "altitude": "Brackish Lagoon",
        "entryFee": "OTDC Boat Pass ₹1,200 - ₹2,400",
        "isUnderrated": false,
        "bestTime": "November to February",
        "highlight": "Asia's largest brackish lagoon where endangered Irrawaddy dolphins breach beside sea mouth islands."
      }
    ]
  },
  {
    "id": "khurda",
    "name": "Khurda",
    "region": "Coastal Odisha",
    "tagline": "Temple city Bhubaneswar, Dhauli Peace Stupa & rock-cut Jain caves",
    "description": "The urban heart and state capital zone, where over 500 ancient sandstone shrines meet Mauryan rock edicts and bustling markets.",
    "cover": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "lingaraj-temple",
        "name": "Lingaraj Temple",
        "type": "11th-C. Kalinga Masterpiece",
        "distance": "Old Town, Bhubaneswar",
        "driveTime": "15 min",
        "rating": 4.9,
        "reviews": 3400,
        "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.2382,
          "lng": 85.8338
        },
        "altitude": "Temple City Spire",
        "entryFee": "Free Entry (Hindu sanctum)",
        "isUnderrated": false,
        "bestTime": "October to March (Shivaratri)",
        "highlight": "Majestic 55-meter deula spire honoring Harihara, surrounded by 108 subsidiary stone shrines."
      },
      {
        "id": "dhauli-shanti-stupa",
        "name": "Dhauli Shanti Stupa",
        "type": "Buddhist Peace Pagoda",
        "distance": "8 km south of Bhubaneswar",
        "driveTime": "20 min",
        "rating": 4.8,
        "reviews": 1850,
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.1925,
          "lng": 85.8394
        },
        "altitude": "Dhauli Hill Ridge",
        "entryFee": "Free Entry / Light & Sound Show ₹25",
        "isUnderrated": false,
        "bestTime": "October to March (Sunset)",
        "highlight": "White dome overlooking the Daya River where Emperor Ashoka renounced war after the bloody Kalinga War."
      },
      {
        "id": "udayagiri-khandagiri",
        "name": "Udayagiri & Khandagiri Caves",
        "type": "2nd-C. BCE Rock-Cut Caves",
        "distance": "6 km west of City Center",
        "driveTime": "15 min",
        "rating": 4.7,
        "reviews": 1670,
        "image": "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.2612,
          "lng": 85.7865
        },
        "altitude": "Twin Sandstone Hills",
        "entryFee": "₹25 (ASI entry pass)",
        "isUnderrated": true,
        "bestTime": "Morning & Sunset hours",
        "highlight": "33 monastic rock caves carved during King Kharavela's reign including the Queen's Palace and Elephant Cave."
      }
    ]
  },
  {
    "id": "mayurbhanj",
    "name": "Mayurbhanj",
    "region": "Northern Odisha",
    "tagline": "Similipal tiger forests, roaring Barehipani leaps & royal heritage",
    "description": "The emerald crown of North Odisha, holding UNESCO Biosphere sal forests, melanistic tigers, and cascading twin-tiered drops.",
    "cover": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "barehipani-falls",
        "name": "Barehipani Falls",
        "type": "399 m Two-Tiered Leap",
        "distance": "Core Similipal Reserve",
        "driveTime": "2 hr from Baripada",
        "rating": 4.9,
        "reviews": 1450,
        "image": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.9312,
          "lng": 86.3768
        },
        "altitude": "850 m Meghasani Canyon",
        "entryFee": "Similipal Forest Pass ₹100",
        "isUnderrated": false,
        "bestTime": "November to May",
        "highlight": "India's 2nd highest waterfall cascading down red cliffs surrounded by ancient sal canopies."
      },
      {
        "id": "similipal-tiger-reserve",
        "name": "Similipal Tiger Reserve",
        "type": "UNESCO Biosphere Reserve",
        "distance": "Baripada Gateway",
        "driveTime": "45 min to gate",
        "rating": 4.8,
        "reviews": 2100,
        "image": "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.8492,
          "lng": 86.3475
        },
        "altitude": "Plateau Wilderness",
        "entryFee": "Safari Vehicle Pass ₹2,500 - ₹3,500",
        "isUnderrated": false,
        "bestTime": "November to Mid-June",
        "highlight": "World's only wild home to rare melanistic pseudo-black tigers, Asiatic elephants, and 1,000+ floral species."
      }
    ]
  },
  {
    "id": "kandhamal",
    "name": "Kandhamal",
    "region": "Southern Odisha",
    "tagline": "Kashmir of Odisha, pine tree valleys, coffee plantations & frost mornings",
    "description": "High highland plateau over 3,000 ft above sea level known for coffee estates, winter sub-zero frost, and dense hill tribe valleys.",
    "cover": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "daringbadi-valley",
        "name": "Daringbadi Valley",
        "type": "High-Altitude Hill Station (915 m)",
        "distance": "Phulbani Central Hub",
        "driveTime": "2 hr drive",
        "rating": 4.9,
        "reviews": 2400,
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.9113,
          "lng": 84.1332
        },
        "altitude": "915 m Pine Ridge",
        "entryFee": "Free Entry / Eco Garden ₹20",
        "isUnderrated": false,
        "bestTime": "October to February (Winter chills)",
        "highlight": "Odisha's premier hill station with rolling pine hills, fragrant coffee plantations, and winter ice dew."
      },
      {
        "id": "midubanda-waterfall",
        "name": "Midubanda Waterfall",
        "type": "Secluded Forest Falls",
        "distance": "16 km from Daringbadi",
        "driveTime": "30 min",
        "rating": 4.7,
        "reviews": 780,
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.882,
          "lng": 84.184
        },
        "altitude": "Forest Ravine",
        "entryFee": "Eco Trail Pass ₹10",
        "isUnderrated": true,
        "bestTime": "September to February",
        "highlight": "Hidden multi-step forest cascade enclosed by steep emerald jungle walls and pristine bathing pools."
      }
    ]
  },
  {
    "id": "ganjam",
    "name": "Ganjam",
    "region": "Southern Odisha",
    "tagline": "Historic Gopalpur port beach, Tampara sweetwater lake & Tara Tarini",
    "description": "Where maritime heritage meets serene sweetwater lagoons and holy twin goddess hilltops along the southern coastline.",
    "cover": "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "gopalpur-on-sea",
        "name": "Gopalpur-on-Sea",
        "type": "Historic Lighthouse Beach",
        "distance": "15 km from Berhampur",
        "driveTime": "25 min",
        "rating": 4.8,
        "reviews": 2180,
        "image": "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.2608,
          "lng": 84.9083
        },
        "altitude": "Sea Coast",
        "entryFee": "Free Entry / Lighthouse ₹15",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Old colonial seafaring port with tranquil sands, red-striped lighthouse, and gentle casuarina groves."
      },
      {
        "id": "tampara-lake",
        "name": "Tampara Freshwater Lake",
        "type": "300-Hectare Eco Lake",
        "distance": "22 km from Berhampur (Chatrapur)",
        "driveTime": "30 min",
        "rating": 4.7,
        "reviews": 950,
        "image": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.3516,
          "lng": 84.9782
        },
        "altitude": "Coastal Freshwater Basin",
        "entryFee": "Free Entry / Water Sports from ₹100",
        "isUnderrated": true,
        "bestTime": "October to April",
        "highlight": "Large scenic sweetwater lake with speedboating, jet skis, and wooden sunset promenades."
      },
      {
        "id": "tara-tarini-temple",
        "name": "Maa Tara Tarini Temple",
        "type": "Hilltop Adi Shakti Peetha",
        "distance": "30 km from Berhampur",
        "driveTime": "45 min",
        "rating": 4.9,
        "reviews": 2600,
        "image": "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.4932,
          "lng": 84.9011
        },
        "altitude": "Purnagiri Hill (999 Steps)",
        "entryFee": "Free Entry / Ropeway ₹60",
        "isUnderrated": false,
        "bestTime": "October to April (Chaitra Yatra)",
        "highlight": "Ancient Tantric Shakti Peetha perched on Tarini hill with modern cable car ropeway and Rushikulya views."
      }
    ]
  },
  {
    "id": "sundargarh",
    "name": "Sundargarh",
    "region": "Western Odisha",
    "tagline": "Khandadhar plunge falls, Mandira dam & tribal iron ranges",
    "description": "Rugged tribal heartland in northwestern Odisha, home to immense waterfalls, tranquil river dams, and rich mineral plateaus.",
    "cover": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "khandadhar-waterfall",
        "name": "Khandadhar Falls",
        "type": "244 m Sword-Blade Plunge",
        "distance": "65 km from Rourkela",
        "driveTime": "1 hr 30 min",
        "rating": 4.8,
        "reviews": 1560,
        "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.7583,
          "lng": 84.9125
        },
        "altitude": "720 m Ridge",
        "entryFee": "Eco Pass ₹30",
        "isUnderrated": false,
        "bestTime": "September to February",
        "highlight": "Gleaming vertical plunge waterfall shaped like a shimmering sword blade cutting through deep forests."
      },
      {
        "id": "mandira-dam",
        "name": "Mandira Eco Dam",
        "type": "Sankh River Reservoir",
        "distance": "25 km from Rourkela",
        "driveTime": "40 min",
        "rating": 4.6,
        "reviews": 640,
        "image": "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 22.2854,
          "lng": 84.6642
        },
        "altitude": "River Valley",
        "entryFee": "Vehicle Pass ₹20",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Picturesque dam nestled among green hills, popular for peaceful boat rides, sunset photography, and picnics."
      }
    ]
  },
  {
    "id": "sambalpur",
    "name": "Sambalpur",
    "region": "Western Odisha",
    "tagline": "World's longest Hirakud Dam, Maa Samaleswari & Debrigarh sanctuary",
    "description": "Cultural capital of Western Odisha, famed for Sambalpuri handloom ikat, the historic Mahanadi reservoir, and wildlife sanctuaries.",
    "cover": "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "hirakud-dam",
        "name": "Hirakud Dam & Reservoir",
        "type": "Longest Earthen Dam (25.8 km)",
        "distance": "15 km from Sambalpur",
        "driveTime": "25 min",
        "rating": 4.8,
        "reviews": 3100,
        "image": "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.5284,
          "lng": 83.8712
        },
        "altitude": "192 m Crest Elevation",
        "entryFee": "Gandhi Minar Entry ₹10",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Vast engineering marvel over Mahanadi with revolving observation towers Gandhi Minar and Nehru Minar."
      },
      {
        "id": "samaleswari-temple",
        "name": "Maa Samaleswari Temple",
        "type": "16th-Century Presiding Shrine",
        "distance": "Town Center, Sambalpur",
        "driveTime": "10 min",
        "rating": 4.9,
        "reviews": 2900,
        "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.4669,
          "lng": 83.9812
        },
        "altitude": "Riverbank Sanctum",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "All Year (Nuakhai festival)",
        "highlight": "Ancient sanctum built by Chauhans along the Mahanadi riverbank, central to western Odisha's cultural ethos."
      },
      {
        "id": "debrigarh-wildlife",
        "name": "Debrigarh Wildlife Sanctuary",
        "type": "Hirakud Lakeshore Safari",
        "distance": "40 km from Sambalpur",
        "driveTime": "1 hr",
        "rating": 4.8,
        "reviews": 1320,
        "image": "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.5832,
          "lng": 83.6645
        },
        "altitude": "Barapahad Ridge",
        "entryFee": "Entry Pass ₹50 / Vehicle Safari ₹1,500",
        "isUnderrated": true,
        "bestTime": "October to April",
        "highlight": "Ecotourism haven with lakeside cottages, gaurs, leopards, and four-horned antelopes along Hirakud backwaters."
      }
    ]
  },
  {
    "id": "kendrapara",
    "name": "Kendrapara",
    "region": "Coastal Odisha",
    "tagline": "Bhitarkanika mangrove channels & Gahirmatha turtle nursery",
    "description": "Coastal delta wonderland hosting India's 2nd largest mangrove ecosystem and prime nesting grounds of giant saltwater crocodiles.",
    "cover": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "bhitarkanika-mangroves",
        "name": "Bhitarkanika National Park",
        "type": "Saltwater Crocodile Delta",
        "distance": "50 km from Kendrapara",
        "driveTime": "1 hr 15 min",
        "rating": 4.9,
        "reviews": 2100,
        "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.7225,
          "lng": 86.8683
        },
        "altitude": "Tidal Delta",
        "entryFee": "Park Pass ₹40 / Motorboat ₹2,000 - ₹3,500",
        "isUnderrated": false,
        "bestTime": "October to March",
        "highlight": "Boat safaris through mangrove creeks spotting 20-foot saltwater crocodiles, kingfishers, and spotted deer."
      },
      {
        "id": "gahirmatha-marine",
        "name": "Gahirmatha Turtle Sanctuary",
        "type": "Marine Sanctuary",
        "distance": "Via Dangamal boat jetty",
        "driveTime": "Boat journey 1.5 hr",
        "rating": 4.8,
        "reviews": 840,
        "image": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.7412,
          "lng": 87.0125
        },
        "altitude": "Marine Coast",
        "entryFee": "Forest Permit Required",
        "isUnderrated": true,
        "bestTime": "December to April (Arribada nesting)",
        "highlight": "World's most critical mass nesting site (Arribada) where half a million Olive Ridley turtles lay eggs simultaneously."
      }
    ]
  },
  {
    "id": "cuttack",
    "name": "Cuttack",
    "region": "Coastal Odisha",
    "tagline": "Silver City, Barabati medieval ramparts & Mahanadi maritime docks",
    "description": "The thousand-year-old former capital on the Mahanadi-Kathajodi delta, renowned for silver filigree (Tarakasi) and historic fortresses.",
    "cover": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "barabati-fort",
        "name": "Barabati Fort & Moat",
        "type": "14th-Century Ganga Citadel",
        "distance": "Mahanadi Bank, Cuttack",
        "driveTime": "10 min",
        "rating": 4.7,
        "reviews": 1890,
        "image": "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.4812,
          "lng": 85.8643
        },
        "altitude": "Delta Citadel",
        "entryFee": "Free Entry / Moat Garden ₹15",
        "isUnderrated": false,
        "bestTime": "October to March (Bali Yatra)",
        "highlight": "Ancient stone ramparts and majestic 9-story citadel ruins surrounded by deep defensive moats on Mahanadi river."
      },
      {
        "id": "odisha-maritime-museum",
        "name": "Odisha Maritime Museum",
        "type": "Naval Heritage Center",
        "distance": "Jobra Barrage, Cuttack",
        "driveTime": "12 min",
        "rating": 4.8,
        "reviews": 1420,
        "image": "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.4725,
          "lng": 85.8924
        },
        "altitude": "Riverfront Docks",
        "entryFee": "Museum Entry ₹20 / 4D Show ₹30",
        "isUnderrated": true,
        "bestTime": "All Year (10 AM - 5 PM)",
        "highlight": "Built inside 19th-century colonial maritime workshops, tracing Sadhabas maritime trade expeditions to Bali & Java."
      }
    ]
  },
  {
    "id": "balasore",
    "name": "Balasore",
    "region": "Northern Odisha",
    "tagline": "Chandipur vanishing sea, Kuldiha wildlife & Panchalingeswar",
    "description": "Northern coastal gateway where sea tides recede up to 5 km twice a day, neighboring elephant-rich wildlife hills.",
    "cover": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "chandipur-beach",
        "name": "Chandipur Vanishing Beach",
        "type": "Hide-and-Seek Tidal Shore",
        "distance": "16 km from Balasore",
        "driveTime": "25 min",
        "rating": 4.8,
        "reviews": 2450,
        "image": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.4697,
          "lng": 87.0145
        },
        "altitude": "Intertidal Mudflats",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "October to March",
        "highlight": "Unique natural wonder where the sea water recedes 1 to 5 kilometers daily during low tide, allowing visitors to walk on the ocean bed."
      },
      {
        "id": "kuldiha-wildlife",
        "name": "Kuldiha Wildlife Sanctuary",
        "type": "Elephant Corridor & Sal Forest",
        "distance": "40 km from Balasore",
        "driveTime": "1 hr",
        "rating": 4.7,
        "reviews": 930,
        "image": "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.4124,
          "lng": 86.6854
        },
        "altitude": "Chhotanagpur Foothills",
        "entryFee": "Forest Pass ₹40",
        "isUnderrated": true,
        "bestTime": "November to April",
        "highlight": "Dense sal forest canopy housing Asian elephants, Indian giant squirrels, and leopards with hilltop forest resthouses."
      }
    ]
  },
  {
    "id": "keonjhar",
    "name": "Keonjhar",
    "region": "Northern Odisha",
    "tagline": "Sanaghagara falls, Bhimkund blue pool & Gonasika river origin",
    "description": "Mineral-rich plateaus, roaring waterfalls, sacred river sources, and ancient Juang tribal highlands.",
    "cover": "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "sanaghagara-waterfall",
        "name": "Sanaghagara Waterfall",
        "type": "Eco Park Cascade",
        "distance": "5 km from Keonjhar town",
        "driveTime": "10 min",
        "rating": 4.8,
        "reviews": 1780,
        "image": "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.6143,
          "lng": 85.5521
        },
        "altitude": "590 m Hillside",
        "entryFee": "₹20 (Eco Park ticket)",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Serene stepped waterfall flowing through landscaped botanical gardens, rope bridges, and picnic zones."
      },
      {
        "id": "gonasika-temple",
        "name": "Gonasika & Baitarani Source",
        "type": "Origin of Holy Baitarani",
        "distance": "30 km from Keonjhar",
        "driveTime": "45 min",
        "rating": 4.7,
        "reviews": 820,
        "image": "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.5218,
          "lng": 85.4526
        },
        "altitude": "Brahmeswar Hills",
        "entryFee": "Free Entry",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Sacred source of the Baitarani River emerging through cow-nostril-shaped rock formations beside ancient Brahmeswar temple."
      }
    ]
  },
  {
    "id": "angul",
    "name": "Angul",
    "region": "Central Odisha",
    "tagline": "Satkosia tiger gorge, Tikarpada gharial sanctuary & deep gorges",
    "description": "The geographical heart of Odisha, famous for the magnificent 22-km Satkosia gorge where Mahanadi carves through dense hills.",
    "cover": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "satkosia-gorge",
        "name": "Satkosia Tiger Gorge",
        "type": "22 km River Canyon",
        "distance": "60 km from Angul",
        "driveTime": "1 hr 30 min",
        "rating": 4.9,
        "reviews": 2140,
        "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.5795,
          "lng": 84.8465
        },
        "altitude": "Deep River Gorge",
        "entryFee": "Forest Entry ₹50 / Boat Safari ₹1,500",
        "isUnderrated": false,
        "bestTime": "November to April",
        "highlight": "Awe-inspiring 22-kilometer canyon where the turquoise Mahanadi flows between steep green cliffs of the Eastern Ghats."
      },
      {
        "id": "tikarpada-sanctuary",
        "name": "Tikarpada Eco-Retreat",
        "type": "Gharial Breeding Sanctuary",
        "distance": "Riverbank at Gorge Mouth",
        "driveTime": "15 min from Gorge entrance",
        "rating": 4.8,
        "reviews": 1210,
        "image": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.5891,
          "lng": 84.8512
        },
        "altitude": "Gorge Shoreline",
        "entryFee": "Breeding Center Pass ₹20",
        "isUnderrated": true,
        "bestTime": "November to March",
        "highlight": "State gharial conservation sanctuary with eco-tents, river rafting, and sunbathing freshwater crocodiles on sand spits."
      }
    ]
  },
  {
    "id": "jajpur",
    "name": "Jajpur",
    "region": "Coastal Odisha",
    "tagline": "Diamond Triangle Buddhist ruins of Ratnagiri & Maa Biraja Peetha",
    "description": "Odisha's ancient Buddhist cradle and celebrated Shakti Peetha on the Vaitarani river, home to monolithic monasteries.",
    "cover": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "ratnagiri-monastery",
        "name": "Ratnagiri Buddhist Complex",
        "type": "Mahavihara Monastic Ruins",
        "distance": "40 km from Jajpur Town",
        "driveTime": "50 min",
        "rating": 4.8,
        "reviews": 1390,
        "image": "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.6412,
          "lng": 86.3354
        },
        "altitude": "Buddhist Hill Complex",
        "entryFee": "₹25 (ASI Pass)",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Magnificent 5th-century Mahavihara featuring a masterfully carved green chlorite stone doorway and colossal Buddha statues."
      },
      {
        "id": "maa-biraja-temple",
        "name": "Maa Biraja Temple",
        "type": "Ancient Nabhi Gaya Peetha",
        "distance": "Jajpur Town Center",
        "driveTime": "5 min",
        "rating": 4.9,
        "reviews": 2750,
        "image": "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8504,
          "lng": 86.3377
        },
        "altitude": "River Plain",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "September to March (Navaratri Rath)",
        "highlight": "One of the 51 Shakti Peethas where Goddess Durga is worshipped in her unique two-armed Mahishasuramardini form."
      }
    ]
  },
  {
    "id": "dhenkanal",
    "name": "Dhenkanal",
    "region": "Central Odisha",
    "tagline": "Kapilash mountain temple, Saptasajya seven hills & royal palaces",
    "description": "Misty hill ranges crowned by centuries-old Shiva shrines, holy streams, and forested trails where monks meditate.",
    "cover": "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "kapilash-temple",
        "name": "Kapilash Mountain Temple",
        "type": "Kailash of Odisha (682 m)",
        "distance": "26 km from Dhenkanal",
        "driveTime": "40 min",
        "rating": 4.8,
        "reviews": 2150,
        "image": "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.6892,
          "lng": 85.7612
        },
        "altitude": "682 m Peak (1,352 steps)",
        "entryFee": "Free Entry / Ghat road ₹30",
        "isUnderrated": false,
        "bestTime": "October to March (Maha Shivaratri)",
        "highlight": "Ancient temple of Lord Chandrasekhar atop Kapilash mountain, accessible via 1,352 stone stairs or a winding ghat road."
      },
      {
        "id": "saptasajya-forest",
        "name": "Saptasajya Forest Hills",
        "type": "Mythological Seven-Bed Hills",
        "distance": "12 km from Dhenkanal",
        "driveTime": "25 min",
        "rating": 4.7,
        "reviews": 1100,
        "image": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.5912,
          "lng": 85.5421
        },
        "altitude": "Seven Hill Sanctuary",
        "entryFee": "Free Entry",
        "isUnderrated": true,
        "bestTime": "September to February",
        "highlight": "Serene mountain sanctuary with perpetual natural cold springs, Lord Rama temple, and peaceful forest trekking paths."
      }
    ]
  },
  {
    "id": "kalahandi",
    "name": "Kalahandi",
    "region": "Western Odisha",
    "tagline": "Phurlijharan rainbow falls, Karlapat wildlife sanctuary & cloud peaks",
    "description": "Rich plateau of dense sal wilderness, multi-colored spray waterfalls, and the historic Asurgarh archaeological fortress.",
    "cover": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "phurlijharan-waterfall",
        "name": "Phurlijharan Waterfall",
        "type": "16 m Rainbow Mist Fall",
        "distance": "15 km from Bhawanipatna",
        "driveTime": "25 min",
        "rating": 4.8,
        "reviews": 1420,
        "image": "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.8643,
          "lng": 83.1235
        },
        "altitude": "Forest Foothills",
        "entryFee": "Eco Pass ₹15",
        "isUnderrated": false,
        "bestTime": "August to February",
        "highlight": "Perennial cascade whose water spray refracts sunlight into dazzling multi-colored rainbow prisms across surrounding rocks."
      },
      {
        "id": "karlapat-wildlife",
        "name": "Karlapat Wildlife Sanctuary",
        "type": "High-Altitude Wilderness",
        "distance": "35 km from Bhawanipatna",
        "driveTime": "50 min",
        "rating": 4.7,
        "reviews": 730,
        "image": "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.7421,
          "lng": 83.0854
        },
        "altitude": "High Plateau Valley",
        "entryFee": "Forest Permit ₹40",
        "isUnderrated": true,
        "bestTime": "October to April",
        "highlight": "Dense deciduous valley sheltering leopards, barking deer, wild dogs, and rare medicinal orchids along Jakham river."
      }
    ]
  },
  {
    "id": "bargarh",
    "name": "Bargarh",
    "region": "Western Odisha",
    "tagline": "Nrusinghanath healing stream, Gandhamardan hills & Dhanu Yatra",
    "description": "Famous for hosting Dhanu Yatra (world's largest open-air theater) and the sacred herbal biodiversity of Gandhamardan mountain.",
    "cover": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "nrusinghanath-temple",
        "name": "Nrusinghanath Temple",
        "type": "14th-Century Stream Shrine",
        "distance": "110 km from Bargarh (Paikmal)",
        "driveTime": "2 hr",
        "rating": 4.9,
        "reviews": 2300,
        "image": "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.9125,
          "lng": 82.8543
        },
        "altitude": "Northern Gandhamardan Base",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "October to March (Nrusingha Chaturdashi)",
        "highlight": "Medieval stone temple dedicated to Lord Nrusinghanath (feline-human form) flanked by perennial healing medicinal streams."
      },
      {
        "id": "gandhamardan-hills",
        "name": "Gandhamardan Mountain Range",
        "type": "Ayurvedic Herbal Sanctuary",
        "distance": "Paikmal Basecamp",
        "driveTime": "Trek route starts from temple",
        "rating": 4.8,
        "reviews": 950,
        "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8912,
          "lng": 82.8341
        },
        "altitude": "1,060 m Ridge",
        "entryFee": "Free Trekking Access",
        "isUnderrated": true,
        "bestTime": "September to February",
        "highlight": "Legendary medicinal mountain from Ramayana lore housing over 500 rare therapeutic plants and pristine ridge treks."
      }
    ]
  },
  {
    "id": "rayagada",
    "name": "Rayagada",
    "region": "Southern Odisha",
    "tagline": "Nagavali suspension bridge, Maa Majhighariani & Dongria Kondh hills",
    "description": "Surrounded by cloud-capped Niyamgiri peaks, roaring river gorges, and vibrant weekly tribal haats of Dongria Kondh communities.",
    "cover": "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "nagavali-hanging-bridge",
        "name": "Nagavali River Suspension Bridge",
        "type": "151 m Cable Suspension Walk",
        "distance": "5 km from Rayagada town",
        "driveTime": "10 min",
        "rating": 4.8,
        "reviews": 1650,
        "image": "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.1625,
          "lng": 83.4214
        },
        "altitude": "Nagavali River Bank",
        "entryFee": "Free Walkway Pass",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Impressive 151-meter pedestrian suspension bridge swaying gently over the boulder-strewn Nagavali river to Chekaguda."
      },
      {
        "id": "majhighariani-temple",
        "name": "Maa Majhighariani Temple",
        "type": "Famous Southern Shakti Shrine",
        "distance": "Town Center, Rayagada",
        "driveTime": "5 min",
        "rating": 4.9,
        "reviews": 3100,
        "image": "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.1717,
          "lng": 83.4163
        },
        "altitude": "Valley Town",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "All Year (Chaitra Festival)",
        "highlight": "Extremely revered goddess shrine drawing pilgrims from Odisha, Andhra Pradesh, and Chhattisgarh for safe voyages."
      }
    ]
  },
  {
    "id": "gajapati",
    "name": "Gajapati",
    "region": "Southern Odisha",
    "tagline": "Mahendragiri 1,501m summit, Jiranga Tibetan Monastery & Khasada falls",
    "description": "Misty highlands where Eastern India's largest Tibetan Buddhist settlement coexists with the sacred summit of Mahendragiri.",
    "cover": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "mahendragiri-peak",
        "name": "Mahendragiri Summit (1,501 m)",
        "type": "Sacred Eastern Ghats Summit",
        "distance": "60 km from Paralakhemundi",
        "driveTime": "2 hr",
        "rating": 4.9,
        "reviews": 1480,
        "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.9682,
          "lng": 84.3645
        },
        "altitude": "1,501 m Mountain Peak",
        "entryFee": "Free Trekking Pass",
        "isUnderrated": true,
        "bestTime": "October to March (Shivaratri)",
        "highlight": "Mythological peak associated with Lord Parashurama featuring 5th-century stone Pandava temples overlooking Bay of Bengal."
      },
      {
        "id": "jiranga-buddhist-monastery",
        "name": "Jiranga Padmasambhava Monastery",
        "type": "Tibetan Buddhist Mahavihara",
        "distance": "35 km from Paralakhemundi (Chandragiri)",
        "driveTime": "50 min",
        "rating": 4.9,
        "reviews": 2320,
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.3478,
          "lng": 84.2562
        },
        "altitude": "600 m Valley",
        "entryFee": "Free Entry / Camera ₹20",
        "isUnderrated": false,
        "bestTime": "October to March (Tibetan New Year)",
        "highlight": "Inaugurated by the Dalai Lama, the 5-story monastery houses a 23-ft bronze Buddha statue and exquisite Tibetan frescoes."
      }
    ]
  },
  {
    "id": "bhadrak",
    "name": "Bhadrak",
    "region": "Coastal Odisha",
    "tagline": "Baba Akhandalamani shrine on Baitarani river & Dhamra coast",
    "description": "Historic pilgrimage and coastal estuary district where the sacred Baitarani flows into deep blue marine waters.",
    "cover": "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "akhandalamani-temple",
        "name": "Baba Akhandalamani Shrine",
        "type": "Famous Shaivite Sanctum",
        "distance": "40 km from Bhadrak (Aradi)",
        "driveTime": "55 min",
        "rating": 4.8,
        "reviews": 2450,
        "image": "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8924,
          "lng": 86.6854
        },
        "altitude": "Baitarani Riverbank",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "October to March (Shivaratri Jaagaram)",
        "highlight": "Revered self-manifested Shiva Lingam at Aradi where pilgrims bathe in the river and seek miraculous healing."
      },
      {
        "id": "dhamra-coast",
        "name": "Dhamra Port & Marine Estuary",
        "type": "Estuarine Marine Coast",
        "distance": "60 km from Bhadrak",
        "driveTime": "1 hr 15 min",
        "rating": 4.6,
        "reviews": 690,
        "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8124,
          "lng": 86.9542
        },
        "altitude": "Sea Port",
        "entryFee": "Free Coastal View",
        "isUnderrated": true,
        "bestTime": "November to March",
        "highlight": "Deep-water maritime estuary where Brahmani and Baitarani merge before joining the ocean, offering panoramic horizon views."
      }
    ]
  },
  {
    "id": "jharsuguda",
    "name": "Jharsuguda",
    "region": "Western Odisha",
    "tagline": "Koili Ghoghar ravine waterfall, Chandi shrine & Ib river valley",
    "description": "Known as the industrial power hub of Western Odisha, holding ancient rock river gorges and cavern shrines.",
    "cover": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "koili-ghoghar-waterfall",
        "name": "Koili Ghoghar Waterfall",
        "type": "River Ravine Cascade",
        "distance": "30 km from Jharsuguda (Belpahar)",
        "driveTime": "40 min",
        "rating": 4.8,
        "reviews": 1390,
        "image": "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.9421,
          "lng": 83.8436
        },
        "altitude": "Ahiraj Forest Ravine",
        "entryFee": "Eco Pass ₹15",
        "isUnderrated": true,
        "bestTime": "August to February",
        "highlight": "Ahiraj river plunge through a stepped sandstone canyon falling into a natural pool with submerged Shiva Lingam."
      }
    ]
  },
  {
    "id": "balangir",
    "name": "Balangir",
    "region": "Western Odisha",
    "tagline": "Harishankar sacred perennial spring & Ranipur Jharial 64 Yogini",
    "description": "Land of royal Chauhan heritage, ancient tantric open-air circular hypaethral shrines, and healing southern Gandhamardan streams.",
    "cover": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "harishankar-waterfall",
        "name": "Harishankar Waterfall & Temple",
        "type": "Medicinal Stream & Shrine",
        "distance": "80 km from Balangir (Lathor)",
        "driveTime": "1 hr 45 min",
        "rating": 4.9,
        "reviews": 2180,
        "image": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.7321,
          "lng": 82.8942
        },
        "altitude": "Southern Gandhamardan Slopes",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "September to March",
        "highlight": "Perennial spring cascading over smooth granite rocks where Vishnu and Shiva are worshipped in unison."
      },
      {
        "id": "ranipur-jharial",
        "name": "Ranipur Jharial 64 Yogini Temple",
        "type": "9th-Century Hypaethral Tantric Shrine",
        "distance": "105 km from Balangir",
        "driveTime": "2 hr",
        "rating": 4.8,
        "reviews": 840,
        "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.2925,
          "lng": 82.9734
        },
        "altitude": "Granite Rock Outcrop",
        "entryFee": "Free Entry / ASI Site",
        "isUnderrated": true,
        "bestTime": "October to February",
        "highlight": "Rare open-air circular sandstone temple dedicated to 64 Yoginis perched on a massive rocky promontory."
      }
    ]
  },
  {
    "id": "malkangiri",
    "name": "Malkangiri",
    "region": "Southern Odisha",
    "tagline": "Balimela emerald backwaters, Satiguda eco dam & Bonda hills",
    "description": "Odisha's southernmost frontier of azure hydro reservoirs, tranquil islands, and dense Eastern Ghats forests.",
    "cover": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "balimela-reservoir",
        "name": "Balimela Dam & Backwaters",
        "type": "Hydro-Electric Lake & Islands",
        "distance": "35 km from Malkangiri",
        "driveTime": "50 min",
        "rating": 4.8,
        "reviews": 870,
        "image": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.2435,
          "lng": 82.1245
        },
        "altitude": "Reservoir Basin",
        "entryFee": "Free / Boat passes available",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Expansive turquoise water reservoir dotted with wooded hills, offering breathtaking speedboating and sunset vistas."
      },
      {
        "id": "satiguda-eco-dam",
        "name": "Satiguda Eco Dam",
        "type": "Eco Park & Boating Lake",
        "distance": "8 km from Malkangiri town",
        "driveTime": "15 min",
        "rating": 4.7,
        "reviews": 610,
        "image": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 18.3712,
          "lng": 81.9324
        },
        "altitude": "Valley Lake",
        "entryFee": "Entry Pass ₹10",
        "isUnderrated": true,
        "bestTime": "October to April",
        "highlight": "Peaceful reservoir encircled by mist-clad hillocks, boating facilities, and scenic shoreline gardens."
      }
    ]
  },
  {
    "id": "nabarangpur",
    "name": "Nabarangpur",
    "region": "Southern Odisha",
    "tagline": "Chandan Dhara waterfall, Indravati forest riverbanks & tribal haats",
    "description": "Lush tribal heartland bordering Chhattisgarh, known for maize farming, serene forest cascades, and Indravati river rapids.",
    "cover": "https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "chandan-dhara-falls",
        "name": "Chandan Dhara Waterfall",
        "type": "Tel River Rock Cascade",
        "distance": "90 km from Nabarangpur (Jharigam)",
        "driveTime": "1 hr 45 min",
        "rating": 4.7,
        "reviews": 790,
        "image": "https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1498855926480-d98e83099315?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 19.6845,
          "lng": 82.3512
        },
        "altitude": "Forest River Valley",
        "entryFee": "Eco Pass ₹10",
        "isUnderrated": true,
        "bestTime": "August to January",
        "highlight": "Natural cascade of the Tel river tumbling over stepped black granite boulders amid dense sal forests."
      }
    ]
  },
  {
    "id": "nuapada",
    "name": "Nuapada",
    "region": "Western Odisha",
    "tagline": "Patora dam, Yogeswar temple & Godhas forest falls",
    "description": "Western gateway nestled against Chhattisgarh hills, famed for the Jonk river reservoir and secluded valley waterfalls.",
    "cover": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "patora-dam",
        "name": "Patora Dam & Yogeswar Temple",
        "type": "Jonk River Reservoir Park",
        "distance": "18 km from Nuapada",
        "driveTime": "30 min",
        "rating": 4.8,
        "reviews": 1120,
        "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.7845,
          "lng": 82.4812
        },
        "altitude": "River Reservoir",
        "entryFee": "Entry Pass ₹15",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Expansive dam with manicured botanical gardens, fountain walks, and the historic Yogeswar Shiva temple."
      },
      {
        "id": "godhas-waterfall",
        "name": "Godhas Waterfall",
        "type": "Forest Gorge Cascade",
        "distance": "30 km from Nuapada",
        "driveTime": "45 min",
        "rating": 4.7,
        "reviews": 620,
        "image": "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.6512,
          "lng": 82.5924
        },
        "altitude": "Ghats Forest Gorge",
        "entryFee": "Free Entry",
        "isUnderrated": true,
        "bestTime": "September to February",
        "highlight": "Hidden wilderness waterfall dropping into a crystal clear forest lagoon surrounded by dramatic stone bluffs."
      }
    ]
  },
  {
    "id": "deogarh",
    "name": "Deogarh",
    "region": "Northern Odisha",
    "tagline": "Pradhanpat multi-tier royal falls & botanical sanctuaries",
    "description": "Former princely state of Bamra, where Odisha's first hydro-electric plant operated beside the roaring Pradhanpat cascade.",
    "cover": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "pradhanpat-falls",
        "name": "Pradhanpat Waterfall",
        "type": "Royal Multi-Tiered Cascade",
        "distance": "1 km from Deogarh Town",
        "driveTime": "5 min",
        "rating": 4.8,
        "reviews": 1290,
        "image": "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 21.5369,
          "lng": 84.7369
        },
        "altitude": "Forest Foothills",
        "entryFee": "Eco Pass ₹15",
        "isUnderrated": true,
        "bestTime": "September to March",
        "highlight": "Majestic multi-tiered waterfall cascading down sheer rock precipices, surrounded by rare botanical flora."
      }
    ]
  },
  {
    "id": "subarnapur",
    "name": "Subarnapur (Sonepur)",
    "region": "Western Odisha",
    "tagline": "City of Gold Temples, Tel-Mahanadi confluence & Bomkai handloom",
    "description": "The historical City of Gold (Subarnapura) nestled at the sacred confluence of the Tel and Mahanadi rivers.",
    "cover": "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "subarnameru-temple",
        "name": "Subarnameru Temple",
        "type": "Sacred Confluence Shrine",
        "distance": "Tel-Mahanadi River Sangam",
        "driveTime": "5 min",
        "rating": 4.8,
        "reviews": 980,
        "image": "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8394,
          "lng": 83.9168
        },
        "altitude": "River Confluence",
        "entryFee": "Free Entry",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Ancient temple of Lord Shiva situated on the Tel riverbank where golden coins were said to have washed ashore in ancient times."
      }
    ]
  },
  {
    "id": "boudh",
    "name": "Boudh",
    "region": "Central Odisha",
    "tagline": "8th-Century star-shaped Ramanath temples & Buddha statues",
    "description": "Centuries-old heritage hub along the Mahanadi river, famous for unique star-shaped Kalinga architecture and giant seated Buddhas.",
    "cover": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "ramanath-temple",
        "name": "Ramanath Star-Shaped Temples",
        "type": "8-Sided Tantric Sandstone Temples",
        "distance": "Boudh Town Center",
        "driveTime": "5 min",
        "rating": 4.8,
        "reviews": 790,
        "image": "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.8397,
          "lng": 84.3267
        },
        "altitude": "Mahanadi Plain",
        "entryFee": "Free Entry / ASI Site",
        "isUnderrated": true,
        "bestTime": "October to March",
        "highlight": "Cluster of three 9th-century Bhanja dynasty temples built on unique 8-pointed star plans with intricate carvings."
      }
    ]
  },
  {
    "id": "nayagarh",
    "name": "Nayagarh",
    "region": "Central Odisha",
    "tagline": "Kantilo Nilamadhab hilltop temple & Kuanria deer park",
    "description": "Spiritual cradle of Jagannath worship where the mythical blue jewel image of Nilamadhab was originally discovered in Brahamani hills.",
    "cover": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "kantilo-nilamadhab",
        "name": "Kantilo Nilamadhab Temple",
        "type": "Ancestral Source of Jagannath Lore",
        "distance": "33 km from Nayagarh",
        "driveTime": "40 min",
        "rating": 4.9,
        "reviews": 2850,
        "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.3541,
          "lng": 85.1842
        },
        "altitude": "Brahamani Hilltop",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "October to March (Magha Saptami)",
        "highlight": "Exquisite stone temple on twin hills overlooking the vast Mahanadi river sandbars, venerating the blue stone Nilamadhab."
      },
      {
        "id": "kuanria-dam",
        "name": "Kuanria Eco Deer Park & Dam",
        "type": "Eco Reservoir & Wildlife Park",
        "distance": "50 km from Nayagarh (Dasapalla)",
        "driveTime": "1 hr",
        "rating": 4.6,
        "reviews": 670,
        "image": "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.3125,
          "lng": 84.8512
        },
        "altitude": "Eco Forest Foothills",
        "entryFee": "Park Pass ₹15",
        "isUnderrated": true,
        "bestTime": "October to April",
        "highlight": "Tranquil irrigation reservoir with a sprawling captive deer rehabilitation center and serene botanical picnic woods."
      }
    ]
  },
  {
    "id": "jagatsinghpur",
    "name": "Jagatsinghpur",
    "region": "Coastal Odisha",
    "tagline": "Paradeep deep sea beach, lighthouse & Maa Sarala temple",
    "description": "Odisha's bustling maritime deep-water seaport combined with rich medieval literary shrines in the coastal delta.",
    "cover": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    "places": [
      {
        "id": "paradeep-sea-beach",
        "name": "Paradeep Sea Beach & Light House",
        "type": "Deep-Sea Harbor Beach",
        "distance": "40 km from Jagatsinghpur",
        "driveTime": "50 min",
        "rating": 4.8,
        "reviews": 2600,
        "image": "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.2612,
          "lng": 86.6854
        },
        "altitude": "Deep Water Coast",
        "entryFee": "Free Entry / Lighthouse ₹20",
        "isUnderrated": false,
        "bestTime": "October to March",
        "highlight": "Scenic coastline where Mahanadi merges with the sea, featuring large ships on the horizon, rock sea-walls, and lighthouse."
      },
      {
        "id": "maa-sarala-temple",
        "name": "Maa Sarala Shrine (Jhankad)",
        "type": "Historic Literary Shakti Sanctum",
        "distance": "18 km from Jagatsinghpur (Kanakpur)",
        "driveTime": "25 min",
        "rating": 4.9,
        "reviews": 2300,
        "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "gallery": [
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=85",
          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85"
        ],
        "coordinates": {
          "lat": 20.2573,
          "lng": 86.1668
        },
        "altitude": "Coastal Delta Plain",
        "entryFee": "Free Entry",
        "isUnderrated": false,
        "bestTime": "September to March (Pana Sankranti)",
        "highlight": "Ancient Shakti shrine where the legendary 15th-century poet Sarala Das was blessed with divine inspiration to compose the Odia Mahabharata."
      }
    ]
  }
];



export const FAMOUS_VS_HIDDEN_PAIRS = [
  {
    id: "puri-vs-astaranga",
    theme: "Coastal Sands & Sunset",
    distanceBetween: "60 km apart along Bay of Bengal",
    famous: {
      id: "golden-beach-puri",
      title: "Golden Beach Puri",
      district: "Puri",
      category: "Beaches",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 World Famous Blue Flag",
      crowdLevel: "High Crowd & Pilgrims",
      badgeText: "Iconic Tourist Magnet",
      feature: "Bustling promenade, certified eco-beach, sacred evening ocean arti."
    },
    hidden: {
      id: "astaranga-beach",
      title: "Astaranga Sunset Beach",
      district: "Puri",
      category: "Beaches",
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Secluded & Zero Crowds",
      badgeText: "Crowd-Free Alternative",
      feature: "Breathtaking multi-colored crimson sunsets, quiet river mouth & turtle sands."
    },
    reasonToVisitTwin: "When Puri's Golden Beach is crowded with pilgrim footfall, head 60 km east to Astaranga for pristine serenity, local fishing smacks, and an unforgettable 8-color sunset."
  },
  {
    id: "konark-vs-hirapur",
    theme: "Sacred Ancient Architecture",
    distanceBetween: "55 km via Pipili Route",
    famous: {
      id: "konark-sun-temple",
      title: "Konark Sun Temple",
      district: "Puri",
      category: "Temples",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 UNESCO World Heritage",
      crowdLevel: "Heavy Tour Bus Rush",
      badgeText: "Colossal Sun Chariot",
      feature: "13th-century colossal chariot wheels and intricate stone carvings."
    },
    hidden: {
      id: "chausath-yogini-hirapur",
      title: "Chausath Yogini Temple",
      district: "Khurda",
      category: "Temples",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Quiet & Mystical",
      badgeText: "Rare 9th-Century Hypaethral",
      feature: "Circular roofless tantric shrine open to the sky with 64 black chlorite goddesses."
    },
    reasonToVisitTwin: "Experience a completely different side of ancient Kalinga spirituality—roofless open-sky tantric meditation in a sleepy rural village with zero commercial stalls."
  },
  {
    id: "similipal-vs-devkund",
    theme: "Wild Forest Cascades",
    distanceBetween: "50 km within Mayurbhanj",
    famous: {
      id: "similipal-tiger-reserve",
      title: "Similipal Tiger Reserve",
      district: "Mayurbhanj",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 Massive Biosphere",
      crowdLevel: "Permit Lines & Safari Jeeps",
      badgeText: "Tiger & Elephant Reserve",
      feature: "Extensive 2,750 sq km jungle requiring prior permits and 4x4 safaris."
    },
    hidden: {
      id: "devkund-waterfall",
      title: "Devkund Waterfall & Pool",
      district: "Mayurbhanj",
      category: "Waterfalls",
      image: "https://images.unsplash.com/photo-1518457607834-6e8d80c183c5?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Serene & Refreshing",
      badgeText: "Turquoise God's Bathtub",
      feature: "Naturally carved turquoise swimming pool with hilltop Goddess Ambika shrine."
    },
    reasonToVisitTwin: "Skip the long safari booking queues and take a refreshing dip into Devkund's crystal-clear sacred turquoise basin nestled in the outer foothills."
  },
  {
    id: "daringbadi-vs-belghar",
    theme: "Misty Mountain Highlands",
    distanceBetween: "110 km mountain loop",
    famous: {
      id: "daringbadi-valley",
      title: "Daringbadi Valley",
      district: "Kandhamal",
      category: "Hills",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 Kashmir of Odisha",
      crowdLevel: "Popular Tourist Resort",
      badgeText: "Commercial Coffee Hub",
      feature: "Bustling hill station with coffee plantations, hotels, and tourist viewpoints."
    },
    hidden: {
      id: "belghar-wildlife-plateau",
      title: "Belghar Wildlife Plateau",
      district: "Kandhamal",
      category: "Hills",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Untouched Solitude",
      badgeText: "2,555 ft Kutia Kondha Sanctuary",
      feature: "High-altitude misty plateau, heritage wooden watchtower, wild elephants, and pure silence."
    },
    reasonToVisitTwin: "Travel beyond Daringbadi's hotels into true raw mountain wilderness at 2,555 ft, where you can watch mist swirl over dense virgin valleys from a wooden watchtower."
  },
  {
    id: "chilika-vs-bichitrapur",
    theme: "Wetlands & Mangrove Safaris",
    distanceBetween: "Coastal Odisha circuits",
    famous: {
      id: "chilika-lake-satapada",
      title: "Chilika Lagoon (Satapada)",
      district: "Puri",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 Asia's Largest Lagoon",
      crowdLevel: "High Tourist & Boat Traffic",
      badgeText: "Dolphin Jet Safari",
      feature: "Thronging boat jetties, dolphin sightings, and huge winter birdwatchers."
    },
    hidden: {
      id: "bichitrapur-mangrove-talsari",
      title: "Bichitrapur Mangroves",
      district: "Balasore",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Wild & Undiscovered",
      badgeText: "Red Ghost Crab Estuary",
      feature: "Quiet motorboat journeys through pristine mangrove creeks onto beaches carpeted by red crabs."
    },
    reasonToVisitTwin: "Looking for an eco-safari without engine noise and tourist crowds? Bichitrapur gives you a private mangrove creek odyssey and surreal red crab beaches."
  },
  {
    id: "lingaraj-vs-ranipur",
    theme: "Stone Spire vs Open-Air Sanctum",
    distanceBetween: "Historical Kalinga & Somavamsi Trail",
    famous: {
      id: "lingaraj-temple",
      title: "Lingaraj Temple",
      district: "Khurda",
      category: "Temples",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 Urban Temple Icon",
      crowdLevel: "Crowded City Center",
      badgeText: "55m Kalinga Tower",
      feature: "Monumental stone tower in Bhubaneswar Old Town with hundreds of priests and devotees."
    },
    hidden: {
      id: "ranipur-jharial-64-yogini",
      title: "Ranipur Jharial 64 Yogini",
      district: "Balangir",
      category: "Temples",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Completely Peaceful",
      badgeText: "Rock Plateau Open Museum",
      feature: "Circular sandstone 64 Yogini temple and 50+ monolithic stone shrines on a giant granite outcrop."
    },
    reasonToVisitTwin: "Wander through a sweeping open-air granite rock plateau containing 50+ medieval stone shrines and a rare circular tantric temple with virtually zero other tourists."
  },
  {
    id: "cuttack-vs-satkosia",
    theme: "Mahanadi River Experiences",
    distanceBetween: "115 km along Mahanadi River",
    famous: {
      id: "gopalpur-on-sea",
      title: "Gopalpur Beach Coast",
      district: "Ganjam",
      category: "Beaches",
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&w=800&q=80",
      tag: "🔥 Colonial Coastline",
      crowdLevel: "Moderate Resort Crowds",
      badgeText: "Colonial Lighthouse Beach",
      feature: "Classic coastal resort with seafood shacks and historical lighthouse."
    },
    hidden: {
      id: "satkosia-tiger-gorge",
      title: "Satkosia Tiger River Canyon",
      district: "Angul",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      tag: "💎 Hidden Underrated Twin",
      crowdLevel: "Eco-Glamping Solitude",
      badgeText: "22km River Gorge Canyon",
      feature: "Luxury sandbar camping, endangered Gharials, and boat rides through 22km towering canyon cliffs."
    },
    reasonToVisitTwin: "Swap standard beach sands for luxury riverside tent glamping on pure white sandbars inside a 22-km dramatic river canyon surrounded by wild nature."
  }
];

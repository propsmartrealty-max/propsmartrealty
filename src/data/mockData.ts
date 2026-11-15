import { Builder, Project, Locality } from '../types';

export const LOCATIONS: Locality[] = [
  {
    "id": "hinjewadi",
    "name": "Hinjewadi",
    "slug": "hinjewadi",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/hinjewadi.svg",
    "projectCount": 64,
    "avgPriceSqft": 7800,
    "appreciation_rate": 8.5,
    "tagline": "Pune Silicon Valley & Metro Line 3 Hub",
    "description": "Prime Hinjewadi Pune IT corridor with 8.5% annual capital appreciation and upcoming Metro Line 3."
  },
  {
    "id": "baner",
    "name": "Baner",
    "slug": "baner",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/baner.svg",
    "projectCount": 52,
    "avgPriceSqft": 10500,
    "appreciation_rate": 9.2,
    "tagline": "High-Street Retail, Dining & Luxury High-Rises",
    "description": "Prime Baner Pune investment corridor with 9.2% annual capital appreciation and premium residential towers."
  },
  {
    "id": "balewadi",
    "name": "Balewadi",
    "slug": "balewadi",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/balewadi.svg",
    "projectCount": 38,
    "avgPriceSqft": 9800,
    "appreciation_rate": 8.9,
    "tagline": "Balewadi High Street & Sports City Enclave",
    "description": "Prime Balewadi corridor famous for Balewadi High Street, sports stadium, and high rental yields."
  },
  {
    "id": "wakad",
    "name": "Wakad",
    "slug": "wakad",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/wakad.svg",
    "projectCount": 46,
    "avgPriceSqft": 8200,
    "appreciation_rate": 8.1,
    "tagline": "Expressway Gateway & Cosmopolitan Urban Hub",
    "description": "Prime Wakad corridor adjacent to Hinjewadi with premier schools, healthcare, and retail infrastructure."
  },
  {
    "id": "punawale",
    "name": "Punawale",
    "slug": "punawale",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/punawale.svg",
    "projectCount": 32,
    "avgPriceSqft": 6900,
    "appreciation_rate": 8.4,
    "tagline": "High-Growth Expressway Corridor & Modern Townships",
    "description": "Fastest-growing residential node off the Mumbai-Pune Expressway with modern gated communities."
  },
  {
    "id": "tathawade",
    "name": "Tathawade",
    "slug": "tathawade",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/tathawade.svg",
    "projectCount": 34,
    "avgPriceSqft": 7500,
    "appreciation_rate": 8.4,
    "tagline": "Prime Education Hub & Expressway Residential Corridor",
    "description": "Prominent education and IT residential hub neighboring Wakad and Hinjewadi with stellar connectivity."
  },
  {
    "id": "aundh",
    "name": "Aundh",
    "slug": "aundh",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/aundh.svg",
    "projectCount": 22,
    "avgPriceSqft": 12800,
    "appreciation_rate": 8.8,
    "tagline": "Heritage Residential Luxury & Westend Mall Corridor",
    "description": "Established upscale suburb with tree-lined avenues, Westend Mall, and elite social infrastructure."
  },
  {
    "id": "pashan",
    "name": "Pashan",
    "slug": "pashan",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/pashan.svg",
    "projectCount": 24,
    "avgPriceSqft": 9400,
    "appreciation_rate": 8.0,
    "tagline": "Scenic Pashan Lake & Western Bio-Park Reserve",
    "description": "Peaceful residential sanctuary known for Pashan Lake, lush green hills, and direct Baner connectivity."
  },
  {
    "id": "bavdhan",
    "name": "Bavdhan",
    "slug": "bavdhan",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/bavdhan.svg",
    "projectCount": 28,
    "avgPriceSqft": 8900,
    "appreciation_rate": 7.8,
    "tagline": "Scenic NDA Valley & Western Ring Road Corridor",
    "description": "Picturesque hills, NDA corridor, and seamless connectivity to Kothrud, Hinjewadi, and Mumbai bypass."
  },
  {
    "id": "mahalunge",
    "name": "Mahalunge",
    "slug": "mahalunge",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/mahalunge.svg",
    "projectCount": 36,
    "avgPriceSqft": 7200,
    "appreciation_rate": 10.1,
    "tagline": "PMRDA Hi-Tech Smart City & Riverfront Township Belt",
    "description": "First PMRDA Hi-Tech Smart City with master-planned riverfront township developments."
  },
  {
    "id": "bhugaon",
    "name": "Bhugaon",
    "slug": "bhugaon",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": true,
    "image": "/images/localities/bhugaon.svg",
    "projectCount": 18,
    "avgPriceSqft": 7600,
    "appreciation_rate": 8.2,
    "tagline": "Manas Lake Waterfront & Luxury Hilltop Villa Corridor",
    "description": "Scenic retreat at Manas Lake with panoramic valley estates, luxury villas, and Kothrud extension access."
  },
  {
    "id": "ravet",
    "name": "Ravet",
    "slug": "ravet",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/ravet.svg",
    "projectCount": 30,
    "avgPriceSqft": 7300,
    "appreciation_rate": 8.2,
    "tagline": "Expressway Gateway & BRTS Connectivity Hub",
    "description": "Strategic gateway of the Mumbai-Pune Expressway with rapid infra developments."
  },
  {
    "id": "mamurdi",
    "name": "Mamurdi",
    "slug": "mamurdi",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/mamurdi.svg",
    "projectCount": 20,
    "avgPriceSqft": 6800,
    "appreciation_rate": 8.3,
    "tagline": "Expressway Greenfield Township & Cricket Stadium Belt",
    "description": "Lush residential corridor hosting township developments near MCA International Cricket Stadium."
  },
  {
    "id": "kiwale",
    "name": "Kiwale",
    "slug": "kiwale",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/kiwale.svg",
    "projectCount": 16,
    "avgPriceSqft": 6500,
    "appreciation_rate": 7.9,
    "tagline": "Expressway Northern Entry & Connectivity Hub",
    "description": "Emerging node connecting PCMC, Nigdi, and the Expressway with affordable modern homes."
  },
  {
    "id": "pimple-nilakh",
    "name": "Pimple Nilakh",
    "slug": "pimple-nilakh",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/pimple-nilakh.svg",
    "projectCount": 20,
    "avgPriceSqft": 9200,
    "appreciation_rate": 8.1,
    "tagline": "Elite Mula Riverfront & Aundh-Baner Bridge Node",
    "description": "Peaceful, upscale residential neighbourhood right across the river from Baner and Aundh."
  },
  {
    "id": "pimple-saudagar",
    "name": "Pimple Saudagar",
    "slug": "pimple-saudagar",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/pimple-saudagar.svg",
    "projectCount": 28,
    "avgPriceSqft": 8400,
    "appreciation_rate": 7.6,
    "tagline": "Established Cosmopolitan Hub with Linear Gardens",
    "description": "Mature urban destination with linear public parks, dining high-streets, and family amenities."
  },
  {
    "id": "sus",
    "name": "Sus",
    "slug": "sus",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/sus.svg",
    "projectCount": 22,
    "avgPriceSqft": 7100,
    "appreciation_rate": 8.0,
    "tagline": "Baner-Sus Valley & Scenic Hillside Enclave",
    "description": "Natural hillscape sanctuary bordering Baner and Pashan with contemporary high-rises."
  },
  {
    "id": "pirangut",
    "name": "Pirangut",
    "slug": "pirangut",
    "city": "Pune",
    "zone": "West Pune",
    "isFeatured": false,
    "image": "/images/localities/pirangut.svg",
    "projectCount": 15,
    "avgPriceSqft": 5400,
    "appreciation_rate": 7.3,
    "tagline": "Western Foothills & Industrial Gated Estates",
    "description": "Scenic western hills location along Paud Road offering gated communities and peaceful valley views."
  },
  {
    "id": "kharadi",
    "name": "Kharadi",
    "slug": "kharadi",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": true,
    "image": "/images/localities/kharadi.svg",
    "projectCount": 48,
    "avgPriceSqft": 9600,
    "appreciation_rate": 9.5,
    "tagline": "EON Free Zone, WTC Pune & Cyber City Corridor",
    "description": "Eastern IT engine of Pune featuring EON IT Park, World Trade Center, and high-end residential towers."
  },
  {
    "id": "viman-nagar",
    "name": "Viman Nagar",
    "slug": "viman-nagar",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": true,
    "image": "/images/localities/viman-nagar.svg",
    "projectCount": 32,
    "avgPriceSqft": 11800,
    "appreciation_rate": 8.6,
    "tagline": "Airport Gateway, Phoenix Marketcity & Commercial Hub",
    "description": "Premier cosmopolitan location hosting Pune Airport, Phoenix Marketcity, and Symbiosis campus."
  },
  {
    "id": "kalyani-nagar",
    "name": "Kalyani Nagar",
    "slug": "kalyani-nagar",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": true,
    "image": "/images/localities/kalyani-nagar.svg",
    "projectCount": 24,
    "avgPriceSqft": 14200,
    "appreciation_rate": 9.0,
    "tagline": "Elite Koregaon Park Extension & Riverside Tech Parks",
    "description": "Prestigious riverside district hosting Cerebrum IT Park, fine-dining bistros, and ultra-luxury apartments."
  },
  {
    "id": "koregaon-park",
    "name": "Koregaon Park",
    "slug": "koregaon-park",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": true,
    "image": "/images/localities/koregaon-park.svg",
    "projectCount": 26,
    "avgPriceSqft": 15800,
    "appreciation_rate": 9.3,
    "tagline": "Pune Heritage Luxury, Tree-Lined Lanes & Fine Dining",
    "description": "The most prestigious address in Pune with heritage bungalows, high-end nightlife, and lush tree cover."
  },
  {
    "id": "magarpatta-city",
    "name": "Magarpatta City",
    "slug": "magarpatta-city",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": true,
    "image": "/images/localities/magarpatta-city.svg",
    "projectCount": 35,
    "avgPriceSqft": 9400,
    "appreciation_rate": 7.5,
    "tagline": "Pioneering 400-Acre Cybercity & Eco-Township",
    "description": "Famous 400-acre walk-to-work integrated eco-city featuring Cybercity, Aditi Gardens, and top schools."
  },
  {
    "id": "hadapsar",
    "name": "Hadapsar",
    "slug": "hadapsar",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/hadapsar.svg",
    "projectCount": 44,
    "avgPriceSqft": 8400,
    "appreciation_rate": 7.9,
    "tagline": "SP Infocity, Solapur Highway & Corporate Enclave",
    "description": "Corporate hub hosting SP Infocity, Magarpatta, and well-connected transit routes."
  },
  {
    "id": "wagholi",
    "name": "Wagholi",
    "slug": "wagholi",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/wagholi.svg",
    "projectCount": 42,
    "avgPriceSqft": 6400,
    "appreciation_rate": 7.4,
    "tagline": "Nagar Road Educational Belt & High-Growth Residential",
    "description": "High-growth corridor on Pune-Nagar highway offering immense value for first-time homebuyers."
  },
  {
    "id": "keshavnagar",
    "name": "Keshav Nagar",
    "slug": "keshavnagar",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/keshavnagar.svg",
    "projectCount": 25,
    "avgPriceSqft": 7900,
    "appreciation_rate": 8.6,
    "tagline": "Mundhwa-Kharadi Bridge Riverfront Belt",
    "description": "High-demand riverside enclave connecting Koregaon Park and Kharadi with new lifestyle towers."
  },
  {
    "id": "mundhwa",
    "name": "Mundhwa",
    "slug": "mundhwa",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/mundhwa.svg",
    "projectCount": 26,
    "avgPriceSqft": 9100,
    "appreciation_rate": 8.8,
    "tagline": "Koregaon Park East & Mula-Mutha Riverfront",
    "description": "Vibrant riverside location minutes from Koregaon Park, Kalyani Nagar, and Kharadi."
  },
  {
    "id": "dhanori",
    "name": "Dhanori",
    "slug": "dhanori",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/dhanori.svg",
    "projectCount": 28,
    "avgPriceSqft": 6800,
    "appreciation_rate": 8.1,
    "tagline": "Airport Connectivity & Emerging Residential Corridor",
    "description": "Fast-growing residential pocket just north of Viman Nagar and Pune Airport."
  },
  {
    "id": "lohegaon",
    "name": "Lohegaon",
    "slug": "lohegaon",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/lohegaon.svg",
    "projectCount": 20,
    "avgPriceSqft": 6100,
    "appreciation_rate": 7.8,
    "tagline": "Pune Airport Northern Enclave & Tech Residences",
    "description": "Emerging eastern suburb near the international airport terminal and DY Patil University."
  },
  {
    "id": "wadgaon-sheri",
    "name": "Wadgaon Sheri",
    "slug": "wadgaon-sheri",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/wadgaon-sheri.svg",
    "projectCount": 22,
    "avgPriceSqft": 8700,
    "appreciation_rate": 8.1,
    "tagline": "Kalyani Nagar Annex & Commercial Corridor",
    "description": "Strategic link between Kalyani Nagar, Viman Nagar, and Kharadi with robust rental demand."
  },
  {
    "id": "shewalewadi",
    "name": "Shewalewadi",
    "slug": "shewalewadi",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/shewalewadi.svg",
    "projectCount": 18,
    "avgPriceSqft": 6700,
    "appreciation_rate": 7.6,
    "tagline": "Hadapsar East & Solapur Highway Corridor",
    "description": "Thriving expansion zone bordering Hadapsar with major highway connectivity."
  },
  {
    "id": "manjri",
    "name": "Manjri",
    "slug": "manjri",
    "city": "Pune",
    "zone": "East Pune",
    "isFeatured": false,
    "image": "/images/localities/manjri.svg",
    "projectCount": 24,
    "avgPriceSqft": 6300,
    "appreciation_rate": 8.0,
    "tagline": "Godrej Riverfront Townships & Green Belt",
    "description": "Serene riverbank township destination hosting premier developments by Godrej and Shapoorji."
  },
  {
    "id": "kothrud",
    "name": "Kothrud",
    "slug": "kothrud",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": true,
    "image": "/images/localities/kothrud.svg",
    "projectCount": 34,
    "avgPriceSqft": 12800,
    "appreciation_rate": 8.7,
    "tagline": "Cultural Epicenter, Vanaz Metro & Established Living",
    "description": "Cultural heartbeat of Pune featuring Vanaz Metro station, premier educational institutions, and heritage parks."
  },
  {
    "id": "senapati-bapat-road",
    "name": "Senapati Bapat Road",
    "slug": "senapati-bapat-road",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": true,
    "image": "/images/localities/senapati-bapat-road.svg",
    "projectCount": 16,
    "avgPriceSqft": 16500,
    "appreciation_rate": 8.9,
    "tagline": "ICC Tech Park, JW Marriott & Central Prestige Corridor",
    "description": "Pune central luxury boulevard hosting the International Convention Centre (ICC) and Symbiosis."
  },
  {
    "id": "nibm",
    "name": "NIBM Road",
    "slug": "nibm",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": true,
    "image": "/images/localities/nibm.svg",
    "projectCount": 28,
    "avgPriceSqft": 8900,
    "appreciation_rate": 8.2,
    "tagline": "South Pune Luxury Ridge & International Schools",
    "description": "Upscale South Pune hill enclave famous for Corinthian Club, Delhi Public School, and green ridges."
  },
  {
    "id": "mohammed-wadi",
    "name": "Mohammed Wadi",
    "slug": "mohammed-wadi",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/mohammed-wadi.svg",
    "projectCount": 22,
    "avgPriceSqft": 7400,
    "appreciation_rate": 7.7,
    "tagline": "Scenic Hilltops & Corinthian Club Enclave",
    "description": "Serene hillside locale surrounded by protected forest reserves and luxury gated residences."
  },
  {
    "id": "undri",
    "name": "Undri",
    "slug": "undri",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/undri.svg",
    "projectCount": 30,
    "avgPriceSqft": 6600,
    "appreciation_rate": 7.5,
    "tagline": "South Pune Greenfield Residential Township Belt",
    "description": "Rapidly transforming South Pune neighborhood with top-tier ICSE/IB schools and scenic greenery."
  },
  {
    "id": "kondhwa",
    "name": "Kondhwa",
    "slug": "kondhwa",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/kondhwa.svg",
    "projectCount": 26,
    "avgPriceSqft": 7100,
    "appreciation_rate": 7.4,
    "tagline": "Established South Pune Commercial & Urban Node",
    "description": "Strategic central south location linking Camp, NIBM, and Market Yard."
  },
  {
    "id": "wanowrie",
    "name": "Wanowrie",
    "slug": "wanowrie",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/wanowrie.svg",
    "projectCount": 20,
    "avgPriceSqft": 9300,
    "appreciation_rate": 7.8,
    "tagline": "Cantonment Green Gateway & High-Street Retail",
    "description": "Mature green residential enclave neighboring the Southern Command cantonment."
  },
  {
    "id": "katraj",
    "name": "Katraj",
    "slug": "katraj",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/katraj.svg",
    "projectCount": 24,
    "avgPriceSqft": 6900,
    "appreciation_rate": 7.6,
    "tagline": "Mumbai-Bangalore Highway & Lake Zoo Recreation",
    "description": "Gateway to South Pune featuring Katraj Lake, Rajiv Gandhi Zoological Park, and highway access."
  },
  {
    "id": "sinhagad-road",
    "name": "Sinhagad Road",
    "slug": "sinhagad-road",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/sinhagad-road.svg",
    "projectCount": 26,
    "avgPriceSqft": 7800,
    "appreciation_rate": 7.7,
    "tagline": "Mutha Riverfront & Sinhagad Fort Foothills",
    "description": "Scenic riverfront corridor linking the city centre to Sinhagad Fort and Khadakwasla Dam."
  },
  {
    "id": "camp",
    "name": "Camp",
    "slug": "camp",
    "city": "Pune",
    "zone": "South & Central",
    "isFeatured": false,
    "image": "/images/localities/camp.svg",
    "projectCount": 14,
    "avgPriceSqft": 13500,
    "appreciation_rate": 8.0,
    "tagline": "Pune Cantonment Heritage, MG Road & Colonial Charm",
    "description": "Historical retail and heritage core of Pune with iconic restaurants and colonial charm."
  },
  {
    "id": "pimpri-chinchwad",
    "name": "Pimpri Chinchwad",
    "slug": "pimpri-chinchwad",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/pimpri-chinchwad.svg",
    "projectCount": 36,
    "avgPriceSqft": 7800,
    "appreciation_rate": 7.8,
    "tagline": "Industrial & Automotive Metro Corridor",
    "description": "Thriving twin city with robust civic infrastructure, metro rail, and commercial powerhouses."
  },
  {
    "id": "moshi",
    "name": "Moshi",
    "slug": "moshi",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/moshi.svg",
    "projectCount": 28,
    "avgPriceSqft": 6200,
    "appreciation_rate": 8.0,
    "tagline": "Pune International Exhibition Centre & Alandi Road",
    "description": "Planned node hosting the International Exhibition Center, wide boulevards, and upcoming riverfronts."
  },
  {
    "id": "charholi",
    "name": "Charholi",
    "slug": "charholi",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/charholi.svg",
    "projectCount": 24,
    "avgPriceSqft": 6000,
    "appreciation_rate": 8.2,
    "tagline": "Pune Ring Road & Emerging Smart Township Corridor",
    "description": "Strategic intersection of Pune Ring Road and PCMC with integrated smart township projects."
  },
  {
    "id": "chakan",
    "name": "Chakan",
    "slug": "chakan",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/chakan.svg",
    "projectCount": 22,
    "avgPriceSqft": 5200,
    "appreciation_rate": 7.6,
    "tagline": "Automotive & Logistics Capital of Western India",
    "description": "Global automobile manufacturing hub hosting Mercedes-Benz, Volkswagen, and Bajaj Auto."
  },
  {
    "id": "bhosari",
    "name": "Bhosari",
    "slug": "bhosari",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/bhosari.svg",
    "projectCount": 20,
    "avgPriceSqft": 6500,
    "appreciation_rate": 7.2,
    "tagline": "MIDC Manufacturing & Engineering Tech Hub",
    "description": "Established industrial and engineering corridor with great connectivity to Old Mumbai Highway."
  },
  {
    "id": "talegaon-dabhade",
    "name": "Talegaon Dabhade",
    "slug": "talegaon-dabhade",
    "city": "Pune",
    "zone": "North Pune (PCMC)",
    "isFeatured": false,
    "image": "/images/localities/talegaon-dabhade.svg",
    "projectCount": 25,
    "avgPriceSqft": 4900,
    "appreciation_rate": 7.1,
    "tagline": "Pleasant Hill Station Climate & Auto Corridor",
    "description": "Breezy highland location on the expressway midway between Pune and Lonavala."
  },
  {
    "id": "versova-andheri-west",
    "name": "Versova, Andheri West",
    "slug": "versova-andheri-west",
    "city": "Mumbai",
    "zone": "Western Suburbs",
    "isFeatured": true,
    "image": "/images/localities/baner.svg",
    "projectCount": 12,
    "avgPriceSqft": 32000,
    "appreciation_rate": 9.2,
    "tagline": "Boutique Coastal Promenade & Metro Line 1 & 2A",
    "description": "Prestigious coastal suburb in Andheri West featuring beachfront boulevards, vibrant cafe culture, and high connectivity to Western Express Highway and Metro."
  },
  {
    "id": "goregaon-west",
    "name": "Goregaon West",
    "slug": "goregaon-west",
    "city": "Mumbai",
    "zone": "Western Suburbs",
    "isFeatured": true,
    "image": "/images/localities/wakad.svg",
    "projectCount": 18,
    "avgPriceSqft": 28500,
    "appreciation_rate": 8.8,
    "tagline": "Prime Western Suburb & Link Road Commercial Corridor",
    "description": "Fast-growing lifestyle corridor in Bangur Nagar and Link Road, home to premium retail malls, Mindspace IT hub, and Metro Line 2A."
  },
  {
    "id": "santacruz-east",
    "name": "Santacruz East",
    "slug": "santacruz-east",
    "city": "Mumbai",
    "zone": "Central Mumbai",
    "isFeatured": true,
    "image": "/images/localities/aundh.svg",
    "projectCount": 15,
    "avgPriceSqft": 26000,
    "appreciation_rate": 8.2,
    "tagline": "Kalina BKC Gateway & Domestic Airport Node",
    "description": "Strategic Mumbai intersection linking Bandra Kurla Complex (BKC), Western Express Highway, and University of Mumbai campus."
  },
  {
    "id": "navi-mumbai",
    "name": "Navi Mumbai",
    "slug": "navi-mumbai",
    "city": "Mumbai",
    "zone": "Navi Mumbai",
    "isFeatured": true,
    "image": "/images/localities/hinjewadi.svg",
    "projectCount": 24,
    "avgPriceSqft": 21500,
    "appreciation_rate": 10.5,
    "tagline": "MTHL Atal Setu & Navi Mumbai International Airport Hub",
    "description": "High-growth planned metropolis directly connected to South Mumbai via Atal Setu sea bridge and upcoming international airport."
  },
  {
    "id": "bandra-west",
    "name": "Bandra West",
    "slug": "bandra-west",
    "city": "Mumbai",
    "zone": "Western Suburbs",
    "isFeatured": true,
    "image": "/images/localities/balewadi.svg",
    "projectCount": 20,
    "avgPriceSqft": 55000,
    "appreciation_rate": 7.5,
    "tagline": "Queen of Suburbs & Sea Link Promenade",
    "description": "Mumbai's most elite address featuring sea-facing penthouses, historic bungalows, Bandra-Worli Sea Link, and luxury lifestyle."
  },
  {
    "id": "worli",
    "name": "Worli",
    "slug": "worli",
    "city": "Mumbai",
    "zone": "South Mumbai",
    "isFeatured": true,
    "image": "/images/localities/kharadi.svg",
    "projectCount": 16,
    "avgPriceSqft": 52000,
    "appreciation_rate": 8.0,
    "tagline": "South Mumbai Luxury Skyline & Coastal Road Gateway",
    "description": "Skyline of billionaires featuring ultra-luxury sea-view towers, commercial headquarters, and direct access to Mumbai Coastal Road."
  },
  {
    "id": "powai",
    "name": "Powai",
    "slug": "powai",
    "city": "Mumbai",
    "zone": "Central Suburbs",
    "isFeatured": true,
    "image": "/images/localities/viman-nagar.svg",
    "projectCount": 14,
    "avgPriceSqft": 27000,
    "appreciation_rate": 7.8,
    "tagline": "Powai Lake & Hiranandani Tech Ecosystem",
    "description": "Self-contained European-styled township surrounding serene Powai Lake, IIT Bombay, and premier multinational corporate parks."
  }
];

export const BUILDERS: Builder[] = [
  {
    "id": "b-godrej",
    "name": "Godrej Properties",
    "slug": "godrej-properties",
    "logo": "/images/builders/godrej.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "description": "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the Pune real estate industry with iconic township and residential landmarks.",
    "establishedYear": 1990,
    "totalProjects": 85,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Mahalunge",
      "Hinjewadi"
    ]
  },
  {
    "id": "b-kolte-patil",
    "name": "Kolte-Patil Developers",
    "slug": "kolte-patil-developers",
    "logo": "/images/builders/kolte-patil.svg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17630446171899594771.png",
    "description": "Kolte-Patil Developers Ltd. is a publicly listed premier real estate company with dominant presence across Pune and Mumbai. With over 30 years of excellence, Kolte-Patil is celebrated for iconic integrated townships like Life Republic in Hinjewadi and luxury landmarks under the prestigious 24K brand.",
    "establishedYear": 1991,
    "totalProjects": 60,
    "ongoingProjects": 26,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Pimple Nilakh",
      "Bavdhan",
      "Sinhagad Road",
      "Bhugaon",
      "Wagholi",
      "Kiwale",
      "Wakad",
      "Undri",
      "Versova, Andheri West",
      "Goregaon West",
      "Santacruz East",
      "Navi Mumbai"
    ]
  },
  {
    "id": "b-vtp",
    "name": "VTP Realty",
    "slug": "vtp-realty",
    "logo": "/images/builders/vtp-realty.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "description": "VTP Realty is Pune\u2019s leading real estate brand celebrated for Maximum Livable Area (MLA) homes, township developments, and high construction velocity across Kharadi, Hinjewadi, and Mahalunge.",
    "establishedYear": 2011,
    "totalProjects": 42,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Kharadi",
      "Bavdhan"
    ]
  },
  {
    "id": "b-lodha",
    "name": "Lodha Group",
    "slug": "lodha-group",
    "logo": "/images/builders/lodha.svg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "description": "Lodha Group (Macrotech Developers) is one of India\u2019s largest real estate developers delivering world-class residences, luxury amenities, and grand master-planned developments in Pune.",
    "establishedYear": 1980,
    "totalProjects": 90,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Wagholi",
      "Hinjewadi",
      "Mohammed Wadi"
    ]
  },
  {
    "id": "b-panchshil",
    "name": "Panchshil Realty",
    "slug": "panchshil-realty",
    "logo": "/images/builders/panchshil.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "description": "Panchshil Realty is Pune\u2019s pinnacle of luxury real estate, introducing world brands including Trump Towers, YOO Pune, World Trade Center Pune, and EON Free Zone.",
    "establishedYear": 2002,
    "totalProjects": 35,
    "ongoingProjects": 5,
    "trustScore": 9.8,
    "isVerified": true,
    "locations": [
      "Kharadi"
    ]
  },
  {
    "id": "b-rohan",
    "name": "Rohan Builders",
    "slug": "rohan-builders",
    "logo": "/images/builders/rohan.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "description": "Rohan Builders is celebrated for pioneering the PLUS Home concept in Pune \u2014 focusing on Perfect Ventilation, Lively Light, Utmost Privacy, and Smart Space design.",
    "establishedYear": 1993,
    "totalProjects": 48,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Balewadi",
      "Bhugaon"
    ]
  },
  {
    "id": "b-vilas-javdekar",
    "name": "Vilas Javdekar Developers",
    "slug": "vilas-javdekar-developers",
    "logo": "/images/builders/vilas-javdekar.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp",
    "description": "Vilas Javdekar Developers stands for Trust and Design Excellence in Pune, known for the landmark Yashwin series and timely customer-centric delivery.",
    "establishedYear": 1981,
    "totalProjects": 40,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Pashan",
      "Kharadi",
      "Wagholi"
    ]
  },
  {
    "id": "b-pride-purple",
    "name": "Pride Purple Group",
    "slug": "pride-purple-group",
    "logo": "/images/builders/pride-purple.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/pyfCcZQGbXLGoumWmHpNJZu7lOdvBE2m8hqD7GBs.webp",
    "description": "Pride Purple Group has shaped Pune\u2019s skyline across Hinjewadi, Wakad, and Baner with over two decades of customer trust, commercial IT towers, and premium lifestyle communities.",
    "establishedYear": 2001,
    "totalProjects": 38,
    "ongoingProjects": 5,
    "trustScore": 9.2,
    "isVerified": true,
    "locations": [
      "Ravet",
      "Hinjewadi",
      "Pimpri Chinchwad"
    ]
  },
  {
    "id": "b-nyati",
    "name": "Nyati Group",
    "slug": "nyati-group",
    "logo": "/images/builders/nyati.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/CU1K5TMPY5iB90KqfJVmfosGCK6HiAnidy5Rb9Xd.webp",
    "description": "Nyati Group is an ISO-certified Pune developer committed to architectural grandeur, structural integrity, and contemporary lifestyle spaces across East and West Pune.",
    "establishedYear": 1996,
    "totalProjects": 50,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Wadgaon Sheri",
      "Baner",
      "Undri"
    ]
  },
  {
    "id": "b-gera",
    "name": "Gera Developments",
    "slug": "gera-developments",
    "logo": "/images/builders/gera.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Clv6QVczOiJD0bNhVQSdUoYvHCzVM92HasWLD3ET.webp",
    "description": "Gera Developments is India\u2019s pioneer of ChildCentric\u00ae Homes with an unprecedented 7-Year Warranty, delivering landmark projects across Kharadi and Hinjewadi.",
    "establishedYear": 1970,
    "totalProjects": 55,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Bhosari"
    ]
  },
  {
    "id": "b-kasturi",
    "name": "Kasturi Housing",
    "slug": "kasturi-housing",
    "logo": "/images/builders/kasturi.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "description": "Kasturi Housing is Pune\u2019s premier bespoke luxury developer, famed for The Balmoral collection and minimalist architecture with global engineering standards.",
    "establishedYear": 1999,
    "totalProjects": 22,
    "ongoingProjects": 5,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Balewadi"
    ]
  },
  {
    "id": "b-mahindra",
    "name": "Mahindra Lifespaces",
    "slug": "mahindra-lifespaces",
    "logo": "/images/builders/mahindra.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/7R1KntHtZGpJcf1ID73ZhW6Bmbi6t69x1dDPXrCk.webp",
    "description": "Mahindra Lifespace Developers brings Mahindra Group\u2019s trust and green building expertise to Pune with IGBC Net-Zero energy and sustainable homes.",
    "establishedYear": 1994,
    "totalProjects": 45,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Tathawade",
      "Pimpri Chinchwad",
      "Kharadi"
    ]
  },
  {
    "id": "b-kumar",
    "name": "Kumar Properties",
    "slug": "kumar-properties",
    "logo": "/images/builders/kumar.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/ByYt4cju0mAa243xiYGkSFBnG4OPoJfO0NqnVL4K.webp",
    "description": "Kumar Properties has delivered over 35,000 happy families in Pune over five decades, establishing timeless communities across Baner, Hadapsar, and Mundhwa.",
    "establishedYear": 1966,
    "totalProjects": 80,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Baner",
      "Undri",
      "Hinjewadi"
    ]
  },
  {
    "id": "b-bramhacorp",
    "name": "BramhaCorp",
    "slug": "bramhacorp",
    "logo": "/images/builders/bramhacorp.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/e1Yisy3QN19cU13poeL9foZvCwjxU3tEAiuqtDxW.webp",
    "description": "BramhaCorp is Pune\u2019s pioneer in bringing world hospitality and branded residences, including Sheraton Grand, Le Meridien, and F-Residences.",
    "establishedYear": 1982,
    "totalProjects": 30,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Camp",
      "Balewadi",
      "Kalyani Nagar"
    ]
  },
  {
    "id": "b-amanora",
    "name": "Amanora Park Town",
    "slug": "amanora-park-town",
    "logo": "/images/builders/amanora.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "description": "Amanora Park Town by City Corporation is Maharashtra\u2019s first accredited 400-acre smart township in Hadapsar Pune, featuring Gateway Towers and Future Towers.",
    "establishedYear": 2007,
    "totalProjects": 20,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Kothrud"
    ]
  },
  {
    "id": "b-joyville",
    "name": "Joyville by Shapoorji Pallonji",
    "slug": "joyville-shapoorji-pallonji",
    "logo": "/images/builders/joyville.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "description": "Joyville is the aspirational residential housing platform by 150-year-old engineering titan Shapoorji Pallonji, creating biophilic homes in Hinjewadi and Hadapsar.",
    "establishedYear": 2016,
    "totalProjects": 25,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hadapsar",
      "Shewalewadi",
      "Hinjewadi"
    ]
  },
  {
    "id": "b-kohinoor",
    "name": "Kohinoor Group",
    "slug": "kohinoor-group",
    "logo": "/images/builders/kohinoor.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dRkDonPR1eXndCLucTp17YruBhz2634DUGQ5X3YG.webp",
    "description": "Kohinoor Group Pune is renowned for its Sada Sukhi Raho philosophy, delivering over 40 landmark projects across Kharadi, Hinjewadi, and Pimpri.",
    "establishedYear": 1983,
    "totalProjects": 45,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Kharadi",
      "Pimpri Chinchwad",
      "Hinjewadi"
    ]
  },
  {
    "id": "b-kalpataru",
    "name": "Kalpataru",
    "slug": "kalpataru",
    "logo": "/images/builders/kalpataru.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "description": "Kalpataru is one of India\u2019s most awarded real estate companies, creating luxury landmark gated estates in Baner and Bavdhan Pune.",
    "establishedYear": 1969,
    "totalProjects": 70,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Baner",
      "Anand Nagar"
    ]
  },
  {
    "id": "b-sobha",
    "name": "Sobha Limited",
    "slug": "sobha-limited",
    "logo": "/images/builders/sobha.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "description": "Sobha Limited is India\u2019s only backward integrated real estate giant, renowned for unparalleled German-standard build quality in Kothrud Pune.",
    "establishedYear": 1995,
    "totalProjects": 60,
    "ongoingProjects": 5,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Kothrud"
    ]
  },
  {
    "id": "b-tata",
    "name": "Tata Housing",
    "slug": "tata-housing",
    "logo": "/images/builders/tata.svg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "description": "Tata Housing represents the 150-year legacy of Tata Group, delivering master-planned sustainable community housing across Pune.",
    "establishedYear": 1984,
    "totalProjects": 50,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Ravet",
      "Talegaon Dabhade"
    ]
  },
  {
    "id": "b-shapoorji",
    "name": "Shapoorji Pallonji Real Estate",
    "slug": "shapoorji-pallonji-real-estate",
    "logo": "/images/builders/shapoorji.svg",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "description": "Shapoorji Pallonji Real Estate (SPRE) is the 155+ year old real estate division of the Shapoorji Pallonji Group, delivering iconic landmarks, luxury high-rises, and master-planned townships across Pune and Mumbai.",
    "establishedYear": 1865,
    "totalProjects": 65,
    "ongoingProjects": 18,
    "trustScore": 9.8,
    "isVerified": true,
    "locations": [
      "Hadapsar",
      "Shewalewadi",
      "Bavdhan",
      "Hinjewadi",
      "Bandra East",
      "Marine Drive",
      "Powai",
      "Thane West",
      "Mahalaxmi",
      "Sewri",
      "Virar West",
      "Santacruz West"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    "id": "p-godrej-hillside-3",
    "title": "Godrej Hillside 3",
    "slug": "godrej-hillside-3",
    "builderId": "b-godrej",
    "location": "Mahalunge",
    "priceRange": "\u20b981.00 L - \u20b91.06 Cr",
    "exactPrice": "\u20b981.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "lat": 18.563,
    "lng": 73.742,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp",
      "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "description": "Godrej Hillside 3 by Godrej Properties represents modern residential excellence in Mahalunge, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b981.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Club house, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100050939, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gated Society",
      "Lift",
      "Parking",
      "Power Back Up"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Mahalunge near Metro station and IT corridors",
      "Official MahaRERA verified project P52100050939",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100050939",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Godrej Hillside 3 Mahalunge",
      "Godrej Hillside 3 Pune price",
      "Godrej Hillside 3 floor plan",
      "Godrej Hillside 3 MahaRERA P52100050939",
      "Godrej Properties projects in Mahalunge",
      "flats in Mahalunge Pune",
      "buy 2 BHK in Mahalunge",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Godrej Hillside 3, Mahalunge Pune by Godrej Properties. Price starts \u20b981.00 L. 100% Zero Brokerage. Verified MahaRERA P52100050939. Floor pl",
    "advancedConfigurations": [
      {
        "id": "cfg-godrej-hillside-3-1",
        "projectId": "p-godrej-hillside-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 665,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 8100000.0,
        "pricePerSqft": 12180.45,
        "infraCharges": 243000.0,
        "clubhouseCharges": 162000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp"
      },
      {
        "id": "cfg-godrej-hillside-3-2",
        "projectId": "p-godrej-hillside-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 665,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 8100000.0,
        "pricePerSqft": 12180.45,
        "infraCharges": 243000.0,
        "clubhouseCharges": 162000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-godrej-hillside-3-3",
        "projectId": "p-godrej-hillside-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 680,
        "balconyArea": 54,
        "bathrooms": 2,
        "basePrice": 8300000.0,
        "pricePerSqft": 12205.88,
        "infraCharges": 249000.0,
        "clubhouseCharges": 166000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      },
      {
        "id": "cfg-godrej-hillside-3-4",
        "projectId": "p-godrej-hillside-3",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 902,
        "balconyArea": 72,
        "bathrooms": 3,
        "basePrice": 10600000.0,
        "pricePerSqft": 11751.66,
        "infraCharges": 318000.0,
        "clubhouseCharges": 212000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Godrej Hillside 3 located?",
        "answer": "Godrej Hillside 3 is located at road, Mahalunge, Pune."
      },
      {
        "question": "What is the price of Godrej Hillside 3?",
        "answer": "Prices at Godrej Hillside 3 range from \u20b9 81.00 Lac \u2013 1.06 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Godrej Hillside 3?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 665 \u2013 902 sq.ft."
      },
      {
        "question": "What is the RERA number of Godrej Hillside 3?",
        "answer": "The RERA registration number of Godrej Hillside 3 is P52100050939, P52100022099, P52100022153."
      },
      {
        "question": "When is the possession of Godrej Hillside 3?",
        "answer": "Possession is expected by Feb 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Godrej Hillside 3?",
        "answer": "Godrej Hillside 3 is developed by Godrej Properties. The developer has been in real estate since 1897."
      },
      {
        "question": "How many floors does Godrej Hillside 3 have?",
        "answer": "The project has 28 floors. It is spread across 3 acres."
      },
      {
        "question": "What amenities does Godrej Hillside 3 offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Club house, Gym, Jogging Track, Kids Play Area, Party Lawn, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Godrej Hillside 3?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Godrej Hillside 3?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "brochureUrl": "https://keystoneliv.com/public/uploads/property/k8efs8EX0zH9s8tNGzPxbgUNGd6YGNIzWlWGvWOL.pdf",
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3782.2145105194018!2d73.73430237486002!3d18.564365382537687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGodrej%20Hillside%203%2C%207%2F8%20near%20Godrej%20river%20hills%20nande%2C%20road%2C%20Mahalunge%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1688044662580!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 28 floors. It is spread across 3 acres.",
    "city": "Pune"
  },
  {
    "id": "p-godrej-river-royale",
    "title": "Godrej River Royale",
    "slug": "godrej-river-royale",
    "builderId": "b-godrej",
    "location": "Mahalunge",
    "priceRange": "\u20b954.00 L - \u20b975.60 L",
    "exactPrice": "\u20b954.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "lat": 18.563,
    "lng": 73.742,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/sk7FyGScerfdwSXPmZkNYGxMsPJf0x63qGejfDTU.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp",
      "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp"
    ],
    "description": "Godrej River Royale by Godrej Properties represents modern residential excellence in Mahalunge, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b954.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Cafeteria, Kids Play Area, Library, Sports Courts, Swimming Pool. Verified under MahaRERA registration P52100052957, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Cafeteria",
      "Kids Play Area",
      "Library",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Mahalunge near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052957",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100052957",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Godrej River Royale Mahalunge",
      "Godrej River Royale Pune price",
      "Godrej River Royale floor plan",
      "Godrej River Royale MahaRERA P52100052957",
      "Godrej Properties projects in Mahalunge",
      "flats in Mahalunge Pune",
      "buy 2 BHK in Mahalunge",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Godrej River Royale, Mahalunge Pune by Godrej Properties. Price starts \u20b954.00 L. 100% Zero Brokerage. Verified MahaRERA P52100052957. Floor ",
    "advancedConfigurations": [
      {
        "id": "cfg-godrej-river-royale-1",
        "projectId": "p-godrej-river-royale",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 5400000,
        "pricePerSqft": 7200,
        "infraCharges": 162000.0,
        "clubhouseCharges": 108000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp"
      },
      {
        "id": "cfg-godrej-river-royale-2",
        "projectId": "p-godrej-river-royale",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 7560000,
        "pricePerSqft": 7200,
        "infraCharges": 226800.0,
        "clubhouseCharges": 151200.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Godrej River Royale located?",
        "answer": "Godrej River Royale is located at Godrej River Royale, Sector R9, Nande - Balewadi Rd, off Hinjewadi, behind Balewadi Stadium, Mahalunge, Pune, Maharashtra 411045."
      },
      {
        "question": "What is the price of Godrej River Royale?",
        "answer": "Prices at Godrej River Royale range from \u20b9 2.60 Cr \u2013 3.60 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Godrej River Royale?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,688 \u2013 2,304 sq.ft."
      },
      {
        "question": "What is the RERA number of Godrej River Royale?",
        "answer": "The RERA registration number of Godrej River Royale is P52100052957."
      },
      {
        "question": "When is the possession of Godrej River Royale?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Godrej River Royale?",
        "answer": "Godrej River Royale is developed by Godrej Properties. The developer has been in real estate since 1897."
      },
      {
        "question": "How many floors does Godrej River Royale have?",
        "answer": "The project has 38 floors. It is spread across 4.37 acres."
      },
      {
        "question": "What amenities does Godrej River Royale offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Kids Play Area, Library, Sports Courts, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Godrej River Royale?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Godrej River Royale?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0887583531326!2d73.7337243739744!3d18.57003676766372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9786692480b%3A0x7802359c7ecbca66!2sGodrej%20River%20Royale%2C%20Baner%20-%20Hinjewadi%20Road%2C%20Pune!5e0!3m2!1sen!2sin!4v1698314164857!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 38 floors. It is spread across 4.37 acres.",
    "city": "Pune"
  },
  {
    "id": "p-godrej-eden-estate-phase-2",
    "title": "Godrej Eden Estate Phase 2",
    "slug": "godrej-eden-estate-phase-2",
    "builderId": "b-godrej",
    "location": "Hinjewadi",
    "priceRange": "\u20b958.50 L - \u20b981.90 L",
    "exactPrice": "\u20b958.50 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/HlZPHQBAei2owiayJmxJZhkdXYVI8emWvLduM451.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/HlZPHQBAei2owiayJmxJZhkdXYVI8emWvLduM451.webp",
      "https://keystoneliv.com/public/uploads/property/po0ncOmSUgj95n9merVfb98wcEMwAyJXM6JuRxN4.webp",
      "https://keystoneliv.com/public/uploads/property/B8lLrgp8K9glD4SfUoFNPgGs2hgPvixeAczdfTfR.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
    ],
    "description": "Godrej Eden Estate Phase 2 by Godrej Properties represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b958.50 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100054190, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Internet / WiFi",
      "Lift",
      "Municipal Corporation",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100054190",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100054190",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Godrej Eden Estate Phase 2 Hinjewadi",
      "Godrej Eden Estate Phase 2 Pune price",
      "Godrej Eden Estate Phase 2 floor plan",
      "Godrej Eden Estate Phase 2 MahaRERA P52100054190",
      "Godrej Properties projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Godrej Eden Estate Phase 2, Hinjewadi Pune by Godrej Properties. Price starts \u20b958.50 L. 100% Zero Brokerage. Verified MahaRERA P52100054190.",
    "advancedConfigurations": [
      {
        "id": "cfg-godrej-eden-estate-phase-2-1",
        "projectId": "p-godrej-eden-estate-phase-2",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 5850000,
        "pricePerSqft": 7800,
        "infraCharges": 175500.0,
        "clubhouseCharges": 117000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp"
      },
      {
        "id": "cfg-godrej-eden-estate-phase-2-2",
        "projectId": "p-godrej-eden-estate-phase-2",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 8190000,
        "pricePerSqft": 7800,
        "infraCharges": 245700.0,
        "clubhouseCharges": 163800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Godrej Eden Estate Phase 2 located?",
        "answer": "Godrej Eden Estate Phase 2 is located at Near Hinjawadi Rajiv Gandhi Infotech Park, Phase 1."
      },
      {
        "question": "What is the price of Godrej Eden Estate Phase 2?",
        "answer": "Prices at Godrej Eden Estate Phase 2 range from \u20b9 2.39 Cr \u2013 3.04 Cr (agreement value). Homes are available as 1 BHK Plot."
      },
      {
        "question": "Which configurations are available at Godrej Eden Estate Phase 2?",
        "answer": "The project offers 1 BHK Plot homes. Carpet areas range from 2,000 \u2013 2,700 sq.ft."
      },
      {
        "question": "What is the RERA number of Godrej Eden Estate Phase 2?",
        "answer": "The RERA registration number of Godrej Eden Estate Phase 2 is P52100054190, P52100054326."
      },
      {
        "question": "When is the possession of Godrej Eden Estate Phase 2?",
        "answer": "Possession is expected by Jun 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Godrej Eden Estate Phase 2?",
        "answer": "Godrej Eden Estate Phase 2 is developed by Godrej Properties. The developer has been in real estate since 1897."
      },
      {
        "question": "What amenities does Godrej Eden Estate Phase 2 offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for Godrej Eden Estate Phase 2?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Godrej Eden Estate Phase 2?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3781.9375723479006!2d73.7247759!3d18.576853!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb98dbb20c51%3A0x423fca08f1fafae3!2sGodrej%20Eden%20Estate%20Phase%201%20%26%202!5e0!3m2!1sen!2sin!4v1706698008844!5m2!1sen!2sin",
    "city": "Pune"
  },
  {
    "id": "p-vtp-bellissimo",
    "title": "VTP Bellissimo",
    "slug": "vtp-bellissimo",
    "builderId": "b-vtp",
    "location": "Hinjewadi",
    "priceRange": "\u20b984.00 L - \u20b993.00 L",
    "exactPrice": "\u20b984.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/yDwMknCek35yZxmMXjayGU9f3YNISUbtB2byb3jE.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/ONtlHyITcqbuIMJqeKNTTJxOUkd4FbrTj28o7hh9.webp",
      "https://keystoneliv.com/public/uploads/property/3PxeuRrw4eYgQ0cWzgG2Kgbdw4BwwSRi226tv5os.webp",
      "https://keystoneliv.com/public/uploads/property/jgs1mOU4egapqUjeXah0vUaNx8ekQVg0pBq8ZQkR.webp",
      "https://keystoneliv.com/public/uploads/property/DUlnXQzjx5Pmekfng8ii6PNlJHlAP8CA9oi4Rc27.webp"
    ],
    "description": "VTP Bellissimo by VTP Realty represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b984.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100033888, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Lift",
      "Parking",
      "Power Back Up",
      "Washroom"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033888",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100033888",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VTP Bellissimo Hinjewadi",
      "VTP Bellissimo Pune price",
      "VTP Bellissimo floor plan",
      "VTP Bellissimo MahaRERA P52100033888",
      "VTP Realty projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in VTP Bellissimo, Hinjewadi Pune by VTP Realty. Price starts \u20b984.00 L. 100% Zero Brokerage. Verified MahaRERA P52100033888. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-vtp-bellissimo-1",
        "projectId": "p-vtp-bellissimo",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 722,
        "balconyArea": 57,
        "bathrooms": 2,
        "basePrice": 8400000.0,
        "pricePerSqft": 11634.35,
        "infraCharges": 252000.0,
        "clubhouseCharges": 168000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp"
      },
      {
        "id": "cfg-vtp-bellissimo-2",
        "projectId": "p-vtp-bellissimo",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 722,
        "balconyArea": 57,
        "bathrooms": 2,
        "basePrice": 8400000.0,
        "pricePerSqft": 11634.35,
        "infraCharges": 252000.0,
        "clubhouseCharges": 168000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ONtlHyITcqbuIMJqeKNTTJxOUkd4FbrTj28o7hh9.webp"
      },
      {
        "id": "cfg-vtp-bellissimo-3",
        "projectId": "p-vtp-bellissimo",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 757,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 11624.83,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/3PxeuRrw4eYgQ0cWzgG2Kgbdw4BwwSRi226tv5os.webp"
      },
      {
        "id": "cfg-vtp-bellissimo-4",
        "projectId": "p-vtp-bellissimo",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 800,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 9300000.0,
        "pricePerSqft": 11625.0,
        "infraCharges": 279000.0,
        "clubhouseCharges": 186000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/jgs1mOU4egapqUjeXah0vUaNx8ekQVg0pBq8ZQkR.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is VTP Bellissimo located?",
        "answer": "VTP Bellissimo is located at Infosys Circle Phase 1 Hinjewadi."
      },
      {
        "question": "What is the price of VTP Bellissimo?",
        "answer": "Prices at VTP Bellissimo range from \u20b9 84.00 Lac \u2013 93.00 Lac (agreement value). Homes are available as 2 BHK."
      },
      {
        "question": "Which configurations are available at VTP Bellissimo?",
        "answer": "The project offers 2 BHK homes. Carpet areas range from 722 \u2013 800 sq.ft."
      },
      {
        "question": "What is the RERA number of VTP Bellissimo?",
        "answer": "The RERA registration number of VTP Bellissimo is P52100033888, P52100047246, P52100048331."
      },
      {
        "question": "When is the possession of VTP Bellissimo?",
        "answer": "Possession is expected by Mar 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VTP Bellissimo?",
        "answer": "VTP Bellissimo is developed by VTP Realty. The developer has been in real estate since 1985."
      },
      {
        "question": "How many floors does VTP Bellissimo have?",
        "answer": "The project has G + 29 floors. It is spread across 10 acres."
      },
      {
        "question": "What amenities does VTP Bellissimo offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for VTP Bellissimo?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VTP Bellissimo?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8028492796034!2d73.72617217584524!3d18.582924967265285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb3b9fc3d7df%3A0x85da1b572aa2e1fc!2sVTP%20Bellissimo%20Official!5e0!3m2!1sen!2sin!4v1698227991596!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G + 29 floors. It is spread across 10 acres.",
    "city": "Pune"
  },
  {
    "id": "p-vtp-dolce-vita",
    "title": "VTP Dolce Vita",
    "slug": "vtp-dolce-vita",
    "builderId": "b-vtp",
    "location": "Kharadi",
    "priceRange": "\u20b977.65 L - \u20b91.32 Cr",
    "exactPrice": "\u20b977.65 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/hgiRTenojaVcHglxBXqRVHfjihUs6wuNa8Yl46OW.png",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/evR9QMKWYPJ7mfXswMgWcM03r9vtzVYrhTLN1Yn2.png",
      "https://keystoneliv.com/public/uploads/property/zozJl3E2HhxQbEpe9Q90xFiPbJv4yhBg3pHXhqC9.png",
      "https://keystoneliv.com/public/uploads/property/CxlM9uIBn5S8zj7R50udJEA2xUAIgmgd0mDLOHo9.png",
      "https://keystoneliv.com/public/uploads/property/hgiRTenojaVcHglxBXqRVHfjihUs6wuNa8Yl46OW.png",
      "https://keystoneliv.com/public/uploads/property/YP4OQJPcaC2gOy7ZO0ZJZzsACXg8fiey3I7EZTMD.png",
      "https://keystoneliv.com/public/uploads/property/GygLc1rdjQ06VlpY0H6SSeiwGPlGQOAaiXpk2BXx.png",
      "https://keystoneliv.com/public/uploads/property/00vie3iYOaGLV16hty7Kp1mKKReoxp9eJUKP6zte.png",
      "https://keystoneliv.com/public/uploads/property/ct7duPh6zz77Wvsn62itR449WOXD0T4CtO4CTCtL.png"
    ],
    "description": "VTP Dolce Vita by VTP Realty represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b977.65 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jacuzzi, Jogging Track. Verified under MahaRERA registration P52100051819, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jacuzzi",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Reflexology",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Office Cabins",
      "Parking",
      "Power Back Up",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051819",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100051819",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VTP Dolce Vita Kharadi",
      "VTP Dolce Vita Pune price",
      "VTP Dolce Vita floor plan",
      "VTP Dolce Vita MahaRERA P52100051819",
      "VTP Realty projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in VTP Dolce Vita, Kharadi Pune by VTP Realty. Price starts \u20b977.65 L. 100% Zero Brokerage. Verified MahaRERA P52100051819. Floor plans & brochu",
    "advancedConfigurations": [
      {
        "id": "cfg-vtp-dolce-vita-1",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 674,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 7765000.000000001,
        "pricePerSqft": 11520.77,
        "infraCharges": 232950.0,
        "clubhouseCharges": 155300.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp"
      },
      {
        "id": "cfg-vtp-dolce-vita-2",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 674,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 7765000.000000001,
        "pricePerSqft": 11520.77,
        "infraCharges": 232950.0,
        "clubhouseCharges": 155300.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/LW8ofJLVdcWXF1ixxVLZJIS7lmzcBGIFY3WSZJ6X.webp"
      },
      {
        "id": "cfg-vtp-dolce-vita-3",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 756,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8700000.0,
        "pricePerSqft": 11507.94,
        "infraCharges": 261000.0,
        "clubhouseCharges": 174000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/evR9QMKWYPJ7mfXswMgWcM03r9vtzVYrhTLN1Yn2.png"
      },
      {
        "id": "cfg-vtp-dolce-vita-4",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 756,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8700000.0,
        "pricePerSqft": 11507.94,
        "infraCharges": 261000.0,
        "clubhouseCharges": 174000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/zozJl3E2HhxQbEpe9Q90xFiPbJv4yhBg3pHXhqC9.png"
      },
      {
        "id": "cfg-vtp-dolce-vita-5",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 850,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 12100000.0,
        "pricePerSqft": 14235.29,
        "infraCharges": 363000.0,
        "clubhouseCharges": 242000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/CxlM9uIBn5S8zj7R50udJEA2xUAIgmgd0mDLOHo9.png"
      },
      {
        "id": "cfg-vtp-dolce-vita-6",
        "projectId": "p-vtp-dolce-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 857,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 12200000.0,
        "pricePerSqft": 14235.71,
        "infraCharges": 366000.0,
        "clubhouseCharges": 244000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/hgiRTenojaVcHglxBXqRVHfjihUs6wuNa8Yl46OW.png"
      },
      {
        "id": "cfg-vtp-dolce-vita-7",
        "projectId": "p-vtp-dolce-vita",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 840,
        "balconyArea": 67,
        "bathrooms": 3,
        "basePrice": 11900000.0,
        "pricePerSqft": 14166.67,
        "infraCharges": 357000.0,
        "clubhouseCharges": 238000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/YP4OQJPcaC2gOy7ZO0ZJZzsACXg8fiey3I7EZTMD.png"
      },
      {
        "id": "cfg-vtp-dolce-vita-8",
        "projectId": "p-vtp-dolce-vita",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 928,
        "balconyArea": 74,
        "bathrooms": 3,
        "basePrice": 13200000.0,
        "pricePerSqft": 14224.14,
        "infraCharges": 396000.0,
        "clubhouseCharges": 264000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/GygLc1rdjQ06VlpY0H6SSeiwGPlGQOAaiXpk2BXx.png"
      }
    ],
    "faqs": [
      {
        "question": "Where is VTP Dolce Vita located?",
        "answer": "VTP Dolce Vita is located at Manjari Khurd, Kharadi, Pune."
      },
      {
        "question": "What is the price of VTP Dolce Vita?",
        "answer": "Prices at VTP Dolce Vita range from \u20b9 77.65 Lac \u2013 2.07 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at VTP Dolce Vita?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 674 \u2013 1,457 sq.ft."
      },
      {
        "question": "What is the RERA number of VTP Dolce Vita?",
        "answer": "The RERA registration number of VTP Dolce Vita is P52100051819, P52100055405, P52100055407, P52100055619."
      },
      {
        "question": "When is the possession of VTP Dolce Vita?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VTP Dolce Vita?",
        "answer": "VTP Dolce Vita is developed by VTP Realty. The developer has been in real estate since 1985."
      },
      {
        "question": "How many floors does VTP Dolce Vita have?",
        "answer": "The project has 32 floors. It is spread across 9 acres."
      },
      {
        "question": "What amenities does VTP Dolce Vita offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jacuzzi, Jogging Track, Kids Play Area, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for VTP Dolce Vita?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VTP Dolce Vita?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.815653879847!2d73.97889127584443!3d18.537230868663926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3b4103c2a39%3A0x8665cce9de413082!2sVTP%20Dolce%20Vita%20-%20New%20Kharadi!5e0!3m2!1sen!2sin!4v1698239319933!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 32 floors. It is spread across 9 acres.",
    "city": "Pune"
  },
  {
    "id": "p-vtp-naturescape",
    "title": "VTP Naturescape",
    "slug": "vtp-naturescape",
    "builderId": "b-vtp",
    "location": "Bavdhan",
    "priceRange": "\u20b988.00 L - \u20b91.28 Cr",
    "exactPrice": "\u20b988.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "lat": 18.5135,
    "lng": 73.7699,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/OrO96DlQ1BdtwMK7CAwta4xb2E56lGlQ1N3qwfrF.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/qXM8HRWxsHzEqzzkejOkuF5OA14I5dxYYMPiCfKC.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Oz85QLYWtUPkHjRU5N2NHLOOg2Z4WBzI9bJT6qeD.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/exhSgArl0N19cHeHrRvHQotueHATJf80h9wEJBu6.webp"
    ],
    "description": "VTP Naturescape by VTP Realty represents modern residential excellence in Bavdhan, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b988.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library. Verified under MahaRERA registration P52100056310, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "RWH",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Bavdhan near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056310",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100056310",
    "pricePerSqft": 8900,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VTP Naturescape Bavdhan",
      "VTP Naturescape Pune price",
      "VTP Naturescape floor plan",
      "VTP Naturescape MahaRERA P52100056310",
      "VTP Realty projects in Bavdhan",
      "flats in Bavdhan Pune",
      "buy 2 BHK in Bavdhan",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in VTP Naturescape, Bavdhan Pune by VTP Realty. Price starts \u20b988.00 L. 100% Zero Brokerage. Verified MahaRERA P52100056310. Floor plans & broch",
    "advancedConfigurations": [
      {
        "id": "cfg-vtp-naturescape-1",
        "projectId": "p-vtp-naturescape",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 760,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 11578.95,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp"
      },
      {
        "id": "cfg-vtp-naturescape-2",
        "projectId": "p-vtp-naturescape",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 760,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 11578.95,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/qXM8HRWxsHzEqzzkejOkuF5OA14I5dxYYMPiCfKC.webp"
      },
      {
        "id": "cfg-vtp-naturescape-3",
        "projectId": "p-vtp-naturescape",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 800,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 10100000.0,
        "pricePerSqft": 12625.0,
        "infraCharges": 303000.0,
        "clubhouseCharges": 202000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Oz85QLYWtUPkHjRU5N2NHLOOg2Z4WBzI9bJT6qeD.webp"
      },
      {
        "id": "cfg-vtp-naturescape-4",
        "projectId": "p-vtp-naturescape",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 855,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 10800000.0,
        "pricePerSqft": 12631.58,
        "infraCharges": 324000.0,
        "clubhouseCharges": 216000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp"
      },
      {
        "id": "cfg-vtp-naturescape-5",
        "projectId": "p-vtp-naturescape",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 975,
        "balconyArea": 78,
        "bathrooms": 3,
        "basePrice": 12800000.0,
        "pricePerSqft": 13128.21,
        "infraCharges": 384000.0,
        "clubhouseCharges": 256000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/exhSgArl0N19cHeHrRvHQotueHATJf80h9wEJBu6.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is VTP Naturescape located?",
        "answer": "VTP Naturescape is located at Bavdhan, Pune, Maharashtra."
      },
      {
        "question": "What is the price of VTP Naturescape?",
        "answer": "Prices at VTP Naturescape range from \u20b9 88.00 Lac \u2013 2.43 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at VTP Naturescape?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 760 \u2013 1,750 sq.ft."
      },
      {
        "question": "What is the RERA number of VTP Naturescape?",
        "answer": "The RERA registration number of VTP Naturescape is P52100056310."
      },
      {
        "question": "When is the possession of VTP Naturescape?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VTP Naturescape?",
        "answer": "VTP Naturescape is developed by VTP Realty. The developer has been in real estate since 1985."
      },
      {
        "question": "How many floors does VTP Naturescape have?",
        "answer": "The project has 22 floors. It is spread across 3.5 acres."
      },
      {
        "question": "What amenities does VTP Naturescape offer?",
        "answer": "Amenities include Amphitheater, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library, Open Gym, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for VTP Naturescape?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VTP Naturescape?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.558350523803!2d73.76855947519121!3d18.50365388258664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd1ea3e6727%3A0x79c35d30e4e47452!2sVTP%20NatureScape!5e0!3m2!1sen!2sin!4v1698239302788!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 22 floors. It is spread across 3.5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-lodha-giardino",
    "title": "Lodha Giardino",
    "slug": "lodha-giardino",
    "builderId": "b-lodha",
    "location": "Wagholi",
    "priceRange": "\u20b995.83 L - \u20b91.30 Cr",
    "exactPrice": "\u20b995.83 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "lat": 18.5815,
    "lng": 73.9806,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/dUBwkAaG7EfnFh6NDymuNR5UNLD1e3QTLxUcN08I.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tUBr7yI4J0rcf1m7F6WmNhcMFvrZvPOrpLkLA0xd.webp",
      "https://keystoneliv.com/public/uploads/property/N8h0pFp4t9iPbyC01tcUgFFE2sNIrbMiZg3aekTp.webp",
      "https://keystoneliv.com/public/uploads/property/9bazfJfHebPTWOPKZhvlI5uteXcmfF57aTBYkICe.webp",
      "https://keystoneliv.com/public/uploads/property/uqOD7mlgMLBjjrzWsFb4eCL82f0hldUzEuA03gyR.webp",
      "https://keystoneliv.com/public/uploads/property/dUBwkAaG7EfnFh6NDymuNR5UNLD1e3QTLxUcN08I.webp",
      "https://keystoneliv.com/public/uploads/property/H6VFHKV0W11g8lU1zZ673X0MpRc8hR1uyGujlBwz.webp",
      "https://keystoneliv.com/public/uploads/property/PGlvfFmgy2VHokL2QsHGliY2jw1aMvsk3u0b9uB8.webp"
    ],
    "description": "Lodha Giardino by Lodha Group represents modern residential excellence in Wagholi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b995.83 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner. Verified under MahaRERA registration P52100047587, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Conference Room",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Open Gym",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Escalator",
      "Gas Pipeline",
      "Gated Society",
      "High Ceiling Height",
      "Intercom",
      "Lift",
      "Modular Kitchen",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System",
      "Washroom"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Wagholi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047587",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100047587",
    "pricePerSqft": 6400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Lodha Giardino Wagholi",
      "Lodha Giardino Pune price",
      "Lodha Giardino floor plan",
      "Lodha Giardino MahaRERA P52100047587",
      "Lodha Group projects in Wagholi",
      "flats in Wagholi Pune",
      "buy 2 BHK in Wagholi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Lodha Giardino, Wagholi Pune by Lodha Group. Price starts \u20b995.83 L. 100% Zero Brokerage. Verified MahaRERA P52100047587. Floor plans & broch",
    "advancedConfigurations": [
      {
        "id": "cfg-lodha-giardino-1",
        "projectId": "p-lodha-giardino",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 807,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 9583000.0,
        "pricePerSqft": 11874.85,
        "infraCharges": 287490.0,
        "clubhouseCharges": 191660.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp"
      },
      {
        "id": "cfg-lodha-giardino-2",
        "projectId": "p-lodha-giardino",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 807,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 9583000.0,
        "pricePerSqft": 11874.85,
        "infraCharges": 287490.0,
        "clubhouseCharges": 191660.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/tUBr7yI4J0rcf1m7F6WmNhcMFvrZvPOrpLkLA0xd.webp"
      },
      {
        "id": "cfg-lodha-giardino-3",
        "projectId": "p-lodha-giardino",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 822,
        "balconyArea": 65,
        "bathrooms": 2,
        "basePrice": 12200000.0,
        "pricePerSqft": 14841.85,
        "infraCharges": 366000.0,
        "clubhouseCharges": 244000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/N8h0pFp4t9iPbyC01tcUgFFE2sNIrbMiZg3aekTp.webp"
      },
      {
        "id": "cfg-lodha-giardino-4",
        "projectId": "p-lodha-giardino",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 855,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 12600000.0,
        "pricePerSqft": 14736.84,
        "infraCharges": 378000.0,
        "clubhouseCharges": 252000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/9bazfJfHebPTWOPKZhvlI5uteXcmfF57aTBYkICe.webp"
      },
      {
        "id": "cfg-lodha-giardino-5",
        "projectId": "p-lodha-giardino",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 938,
        "balconyArea": 75,
        "bathrooms": 3,
        "basePrice": 13000000.0,
        "pricePerSqft": 13859.28,
        "infraCharges": 390000.0,
        "clubhouseCharges": 260000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/uqOD7mlgMLBjjrzWsFb4eCL82f0hldUzEuA03gyR.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Lodha Giardino located?",
        "answer": "Lodha Giardino is located at Upper Kharadi Main Rd, Wagholi, Pune."
      },
      {
        "question": "What is the price of Lodha Giardino?",
        "answer": "Prices at Lodha Giardino range from \u20b9 95.83 Lac \u2013 2.57 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Lodha Giardino?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 807 \u2013 1,885 sq.ft."
      },
      {
        "question": "What is the RERA number of Lodha Giardino?",
        "answer": "The RERA registration number of Lodha Giardino is P52100047587."
      },
      {
        "question": "When is the possession of Lodha Giardino?",
        "answer": "Possession is expected by Dec 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Lodha Giardino?",
        "answer": "Lodha Giardino is developed by Lodha Group. The developer has been in real estate since 1980."
      },
      {
        "question": "How many floors does Lodha Giardino have?",
        "answer": "The project has 14 floors. It is spread across 14 acres."
      },
      {
        "question": "What amenities does Lodha Giardino offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner, Gym, Jogging Track and more."
      },
      {
        "question": "Which banks give home loans for Lodha Giardino?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Lodha Giardino?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "brochureUrl": "https://keystoneliv.com/public/uploads/property/b2eVj6hR92MtZSySsAoiTD7Jp7kHjxEzQ0hTKpXI.pdf",
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15128.96702392734!2d73.9635498!3d18.5631364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3c191c3f637%3A0xe2514090c62e997f!2sLodha%20Giardino%2C%20Kharadi!5e0!3m2!1sen!2sin!4v1688108216789!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 14 floors. It is spread across 14 acres.",
    "city": "Pune"
  },
  {
    "id": "p-lodha-panache",
    "title": "Lodha Panache",
    "slug": "lodha-panache",
    "builderId": "b-lodha",
    "location": "Hinjewadi",
    "priceRange": "\u20b91.15 Cr - \u20b91.20 Cr",
    "exactPrice": "\u20b91.15 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp",
      "https://keystoneliv.com/public/uploads/property/qS0wzqMbjuPWrp8xgOFuPecPubkwlqnM7z4ThESz.webp",
      "https://keystoneliv.com/public/uploads/property/UPzmG4euaO1BOdmqRNMXOBWt8x0Bj8yXV84daLnk.webp",
      "https://keystoneliv.com/public/uploads/property/C7tGVItVivBs5A9pu9JJNlJuIKchaxzhMmg9UhjV.webp",
      "https://keystoneliv.com/public/uploads/property/DqZiV2LxEwtgObiiMdb3ecrNCjeh3UtIWNZLlTtx.webp",
      "https://keystoneliv.com/public/uploads/property/zmj4n4TECfiXjZQ6PK1OM0lDjNqeGFoqs5NMDueV.webp",
      "https://keystoneliv.com/public/uploads/property/ZB60bzT16gilDe2dmK9WOO14yoeSLG7CJOFpK5KQ.webp"
    ],
    "description": "Lodha Panache by Lodha Group represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.15 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Gym, Jogging Track. Verified under MahaRERA registration P52100050124, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Party Lawn",
      "Pet Park",
      "Reflexology",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "High Ceiling Height",
      "Internet / WiFi",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "RWH",
      "Security System",
      "Waste Disposal",
      "Workstations"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100050124",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100050124",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Lodha Panache Hinjewadi",
      "Lodha Panache Pune price",
      "Lodha Panache floor plan",
      "Lodha Panache MahaRERA P52100050124",
      "Lodha Group projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Lodha Panache, Hinjewadi Pune by Lodha Group. Price starts \u20b91.15 Cr. 100% Zero Brokerage. Verified MahaRERA P52100050124. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-lodha-panache-1",
        "projectId": "p-lodha-panache",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 862,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 11499999.999999998,
        "pricePerSqft": 13341.07,
        "infraCharges": 345000.0,
        "clubhouseCharges": 230000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp"
      },
      {
        "id": "cfg-lodha-panache-2",
        "projectId": "p-lodha-panache",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 862,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 11499999.999999998,
        "pricePerSqft": 13341.07,
        "infraCharges": 345000.0,
        "clubhouseCharges": 230000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Mc9E5NBWOsI1NtldSLZmgKPoYKU0CWl7tF5vDeCQ.webp"
      },
      {
        "id": "cfg-lodha-panache-3",
        "projectId": "p-lodha-panache",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 883,
        "balconyArea": 70,
        "bathrooms": 2,
        "basePrice": 12000000.0,
        "pricePerSqft": 13590.03,
        "infraCharges": 360000.0,
        "clubhouseCharges": 240000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ZFDoKn37rtVLsZOWJoU75TT8J0yMCPmXyqNMqFYh.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Lodha Panache located?",
        "answer": "Lodha Panache is located at Hinjawadi, Pune, Maharashtra.."
      },
      {
        "question": "What is the price of Lodha Panache?",
        "answer": "Prices at Lodha Panache range from \u20b9 1.15 Cr \u2013 2.80 Cr (agreement value). Homes are available as 2, 3, 4, 5 BHK."
      },
      {
        "question": "Which configurations are available at Lodha Panache?",
        "answer": "The project offers 2, 3, 4, 5 BHK homes. Carpet areas range from 862 \u2013 3,800 sq.ft."
      },
      {
        "question": "What is the RERA number of Lodha Panache?",
        "answer": "The RERA registration number of Lodha Panache is P52100050124 P52100051257 P52100051280."
      },
      {
        "question": "When is the possession of Lodha Panache?",
        "answer": "Possession is expected by Jul 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Lodha Panache?",
        "answer": "Lodha Panache is developed by Lodha Group. The developer has been in real estate since 1980."
      },
      {
        "question": "How many floors does Lodha Panache have?",
        "answer": "The project has 30 floors. It is spread across 6 acres."
      },
      {
        "question": "What amenities does Lodha Panache offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Gym, Jogging Track, Kids Play Area, Library and more."
      },
      {
        "question": "Which banks give home loans for Lodha Panache?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Lodha Panache?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.918353729581!2d73.74223769999999!3d18.577719300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe51db52659%3A0x6d7f2edc6c921355!2sLodha%20Hinjewadi%20Sales%20Gallery!5e0!3m2!1sen!2sin!4v1720522062145!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 30 floors. It is spread across 6 acres.",
    "city": "Pune"
  },
  {
    "id": "p-lodha-bella-vita",
    "title": "Lodha Bella Vita",
    "slug": "lodha-bella-vita",
    "builderId": "b-lodha",
    "location": "Mohammed Wadi",
    "priceRange": "\u20b91.05 Cr",
    "exactPrice": "\u20b91.05 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Jlp88hAaeNuplnxEs8TQo4teuwJ1SbAKL03dxJnu.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Jlp88hAaeNuplnxEs8TQo4teuwJ1SbAKL03dxJnu.webp",
    "lat": 18.4826,
    "lng": 73.9142,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/image (40).webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image (37).webp",
      "https://keystoneliv.com/public/uploads/property/image (38).webp",
      "https://keystoneliv.com/public/uploads/property/image (39).webp",
      "https://keystoneliv.com/public/uploads/property/image (40).webp",
      "https://keystoneliv.com/public/uploads/property/5B0NFyf2tlJWnCP759YniOd8I3OZlx9Rs0kgNfvg.webp"
    ],
    "description": "Lodha Bella Vita by Lodha Group represents modern residential excellence in Mohammed Wadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.05 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Gym, Jogging Track, Kids Play Area, Party Lawn. Verified under MahaRERA registration P52100024215, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Mohammed Wadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100024215",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100024215",
    "pricePerSqft": 7400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Lodha Bella Vita Mohammed Wadi",
      "Lodha Bella Vita Pune price",
      "Lodha Bella Vita floor plan",
      "Lodha Bella Vita MahaRERA P52100024215",
      "Lodha Group projects in Mohammed Wadi",
      "flats in Mohammed Wadi Pune",
      "buy 2 BHK in Mohammed Wadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Lodha Bella Vita, Mohammed Wadi Pune by Lodha Group. Price starts \u20b91.05 Cr. 100% Zero Brokerage. Verified MahaRERA P52100024215. Floor plans & broc",
    "advancedConfigurations": [
      {
        "id": "cfg-lodha-bella-vita-1",
        "projectId": "p-lodha-bella-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 811,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 10500000.0,
        "pricePerSqft": 12946.98,
        "infraCharges": 315000.0,
        "clubhouseCharges": 210000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Jlp88hAaeNuplnxEs8TQo4teuwJ1SbAKL03dxJnu.webp"
      },
      {
        "id": "cfg-lodha-bella-vita-2",
        "projectId": "p-lodha-bella-vita",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 811,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 10500000.0,
        "pricePerSqft": 12946.98,
        "infraCharges": 315000.0,
        "clubhouseCharges": 210000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/5B0NFyf2tlJWnCP759YniOd8I3OZlx9Rs0kgNfvg.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Lodha Bella Vita located?",
        "answer": "Lodha Bella Vita is located at Lodha Sales Gallery, off NIBM Road, Mohammed Wadi, Pune, Maharashtra."
      },
      {
        "question": "What is the price of Lodha Bella Vita?",
        "answer": "Prices at Lodha Bella Vita range from \u20b9 1.05 Cr \u2013 1.67 Cr (agreement value). Homes are available as 2, 3, 3.5 BHK."
      },
      {
        "question": "Which configurations are available at Lodha Bella Vita?",
        "answer": "The project offers 2, 3, 3.5 BHK homes. Carpet areas range from 811 \u2013 1,196 sq.ft."
      },
      {
        "question": "What is the RERA number of Lodha Bella Vita?",
        "answer": "The RERA registration number of Lodha Bella Vita is P52100024215, P52100035060, P52100045768, P52100046081, P52100034751."
      },
      {
        "question": "When is the possession of Lodha Bella Vita?",
        "answer": "Possession is expected by Jun 2024, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Lodha Bella Vita?",
        "answer": "Lodha Bella Vita is developed by Lodha Group. The developer has been in real estate since 1980."
      },
      {
        "question": "How many floors does Lodha Bella Vita have?",
        "answer": "The project has G+27 floors. It is spread across 13 acres."
      },
      {
        "question": "What amenities does Lodha Bella Vita offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Gym, Jogging Track, Kids Play Area, Party Lawn, Sports Courts, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Lodha Bella Vita?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Lodha Bella Vita?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2966597767036!2d73.9116755101464!3d18.47021687063922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebcdb68c9b29%3A0xaee7838a5b9159e4!2sLodha%20Bella%20Vita!5e0!3m2!1sen!2sin!4v1697611800171!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+27 floors. It is spread across 13 acres.",
    "city": "Pune"
  },
  {
    "id": "p-panchshil-eon-waterfront",
    "title": "Panchshil Eon Waterfront",
    "slug": "panchshil-eon-waterfront",
    "builderId": "b-panchshil",
    "location": "Kharadi",
    "priceRange": "\u20b972.00 L - \u20b91.01 Cr",
    "exactPrice": "\u20b972.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/c5iyPCgaCqPe2H7UgjtMuIlxz0gkapjWv7U5nlzE.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/2RHyNsHcYFRyG4DosoTGOT7S7A6JMuulvZb7D2kQ.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
      "https://keystoneliv.com/public/uploads/property/iTt80ob6Q847pdqJo6QxQYX9jjyINihAoQvfFwpB.webp",
      "https://keystoneliv.com/public/uploads/property/Oz85QLYWtUPkHjRU5N2NHLOOg2Z4WBzI9bJT6qeD.webp"
    ],
    "description": "Panchshil Eon Waterfront by Panchshil Realty represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b972.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym. Verified under MahaRERA registration P52100004202, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100004202",
      "Allotment directly from Panchshil Realty developer inventory"
    ],
    "reraId": "P52100004202",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Panchshil Eon Waterfront Kharadi",
      "Panchshil Eon Waterfront Pune price",
      "Panchshil Eon Waterfront floor plan",
      "Panchshil Eon Waterfront MahaRERA P52100004202",
      "Panchshil Realty projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Panchshil Eon Waterfront, Kharadi Pune by Panchshil Realty. Price starts \u20b972.00 L. 100% Zero Brokerage. Verified MahaRERA P52100004202. Floo",
    "advancedConfigurations": [
      {
        "id": "cfg-panchshil-eon-waterfront-1",
        "projectId": "p-panchshil-eon-waterfront",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 7200000,
        "pricePerSqft": 9600,
        "infraCharges": 216000.0,
        "clubhouseCharges": 144000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp"
      },
      {
        "id": "cfg-panchshil-eon-waterfront-2",
        "projectId": "p-panchshil-eon-waterfront",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 10080000,
        "pricePerSqft": 9600,
        "infraCharges": 302400.0,
        "clubhouseCharges": 201600.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Panchshil Eon Waterfront located?",
        "answer": "Panchshil Eon Waterfront is located at Kharadi, Pune."
      },
      {
        "question": "What is the price of Panchshil Eon Waterfront?",
        "answer": "Prices at Panchshil Eon Waterfront range from \u20b9 4.90 Cr \u2013 6.58 Cr (agreement value). Homes are available as 4 BHK."
      },
      {
        "question": "Which configurations are available at Panchshil Eon Waterfront?",
        "answer": "The project offers 4 BHK homes. Carpet areas range from 4,000 \u2013 5,375 sq.ft."
      },
      {
        "question": "What is the RERA number of Panchshil Eon Waterfront?",
        "answer": "The RERA registration number of Panchshil Eon Waterfront is P52100004202."
      },
      {
        "question": "When is the possession of Panchshil Eon Waterfront?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Panchshil Eon Waterfront?",
        "answer": "Panchshil Eon Waterfront is developed by Panchshil Realty. The developer has been in real estate since 2002."
      },
      {
        "question": "How many floors does Panchshil Eon Waterfront have?",
        "answer": "The project has 20 floors. It is spread across 4.16 acres."
      },
      {
        "question": "What amenities does Panchshil Eon Waterfront offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Panchshil Eon Waterfront?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Panchshil Eon Waterfront?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5619914121007!2d73.95433609999999!3d18.5486854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c304d3f3504d%3A0x155856205dddf7b6!2sEon%20Waterfront%20Phase-1!5e0!3m2!1sen!2sin!4v1750408177770!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 20 floors. It is spread across 4.16 acres.",
    "city": "Pune"
  },
  {
    "id": "p-panchshil-towers",
    "title": "Panchshil Towers",
    "slug": "panchshil-towers",
    "builderId": "b-panchshil",
    "location": "Kharadi",
    "priceRange": "\u20b972.00 L - \u20b91.01 Cr",
    "exactPrice": "\u20b972.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/iTt80ob6Q847pdqJo6QxQYX9jjyINihAoQvfFwpB.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
      "https://keystoneliv.com/public/uploads/property/iTt80ob6Q847pdqJo6QxQYX9jjyINihAoQvfFwpB.webp",
      "https://keystoneliv.com/public/uploads/property/Oz85QLYWtUPkHjRU5N2NHLOOg2Z4WBzI9bJT6qeD.webp",
      "https://keystoneliv.com/public/uploads/property/c5iyPCgaCqPe2H7UgjtMuIlxz0gkapjWv7U5nlzE.webp"
    ],
    "description": "Panchshil Towers by Panchshil Realty represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b972.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Gym, Swimming Pool, 24*7 Water, Lift, Parking, Waste Disposal. Verified under MahaRERA registration P52100002528, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Gym",
      "Swimming Pool",
      "24*7 Water",
      "Lift",
      "Parking",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100002528",
      "Allotment directly from Panchshil Realty developer inventory"
    ],
    "reraId": "P52100002528",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Panchshil Towers Kharadi",
      "Panchshil Towers Pune price",
      "Panchshil Towers floor plan",
      "Panchshil Towers MahaRERA P52100002528",
      "Panchshil Realty projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Panchshil Towers, Kharadi Pune by Panchshil Realty. Price starts \u20b972.00 L. 100% Zero Brokerage. Verified MahaRERA P52100002528. Floor plans ",
    "advancedConfigurations": [
      {
        "id": "cfg-panchshil-towers-1",
        "projectId": "p-panchshil-towers",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 7200000,
        "pricePerSqft": 9600,
        "infraCharges": 216000.0,
        "clubhouseCharges": 144000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp"
      },
      {
        "id": "cfg-panchshil-towers-2",
        "projectId": "p-panchshil-towers",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 10080000,
        "pricePerSqft": 9600,
        "infraCharges": 302400.0,
        "clubhouseCharges": 201600.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Panchshil Towers located?",
        "answer": "Panchshil Towers is located at Kharadi Pune East."
      },
      {
        "question": "What is the price of Panchshil Towers?",
        "answer": "Prices at Panchshil Towers range from \u20b9 4.25 Cr \u2013 8.50 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Panchshil Towers?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,700 \u2013 3,400 sq.ft."
      },
      {
        "question": "What is the RERA number of Panchshil Towers?",
        "answer": "The RERA registration number of Panchshil Towers is P52100002528."
      },
      {
        "question": "When is the possession of Panchshil Towers?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Panchshil Towers?",
        "answer": "Panchshil Towers is developed by Panchshil Realty. The developer has been in real estate since 2002."
      },
      {
        "question": "How many floors does Panchshil Towers have?",
        "answer": "The project has 32 floors. It is spread across 4 acres."
      },
      {
        "question": "What amenities does Panchshil Towers offer?",
        "answer": "Amenities include Gym, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Panchshil Towers?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Panchshil Towers?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.1349620803708!2d73.95892957519244!3d18.553258682546677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3b847d710c7%3A0xa934efd828e6e0ad!2sPanchshil%20Towers!5e1!3m2!1sen!2sin!4v1757939160534!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 32 floors. It is spread across 4 acres.",
    "city": "Pune"
  },
  {
    "id": "p-rohan-ekam-balewadi",
    "title": "Rohan Ekam Balewadi",
    "slug": "rohan-ekam-balewadi",
    "builderId": "b-rohan",
    "location": "Balewadi",
    "priceRange": "\u20b91.33 Cr",
    "exactPrice": "\u20b91.33 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "lat": 18.5772,
    "lng": 73.7715,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/pkJxGd1gHFGu7mmQK9QruOkJwCN6UjcR7yv24TqQ.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/in85nexdwWHGTBugbmHouxJBznVFcjkEU4SOl2Qj.webp",
      "https://keystoneliv.com/public/uploads/property/JRdpFkkMaBqWUV91UsxTA5PmT4jrWULe6bfbdGr3.webp",
      "https://keystoneliv.com/public/uploads/property/EqFhQWfr3lRMA1nua2t6lHamZuSarVQj6Xo2TWu5.webp",
      "https://keystoneliv.com/public/uploads/property/pkJxGd1gHFGu7mmQK9QruOkJwCN6UjcR7yv24TqQ.webp"
    ],
    "description": "Rohan Ekam Balewadi by Rohan Builders represents modern residential excellence in Balewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.33 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track. Verified under MahaRERA registration P52100052298, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gated Society",
      "Intercom",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052298",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100052298",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Rohan Ekam Balewadi Balewadi",
      "Rohan Ekam Balewadi Pune price",
      "Rohan Ekam Balewadi floor plan",
      "Rohan Ekam Balewadi MahaRERA P52100052298",
      "Rohan Builders projects in Balewadi",
      "flats in Balewadi Pune",
      "buy 2 BHK in Balewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Rohan Ekam Balewadi, Balewadi Pune by Rohan Builders. Price starts \u20b91.33 Cr. 100% Zero Brokerage. Verified MahaRERA P52100052298. Floor plans & bro",
    "advancedConfigurations": [
      {
        "id": "cfg-rohan-ekam-balewadi-1",
        "projectId": "p-rohan-ekam-balewadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 890,
        "balconyArea": 71,
        "bathrooms": 2,
        "basePrice": 13300000.0,
        "pricePerSqft": 14943.82,
        "infraCharges": 399000.0,
        "clubhouseCharges": 266000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp"
      },
      {
        "id": "cfg-rohan-ekam-balewadi-2",
        "projectId": "p-rohan-ekam-balewadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 890,
        "balconyArea": 71,
        "bathrooms": 2,
        "basePrice": 13300000.0,
        "pricePerSqft": 14943.82,
        "infraCharges": 399000.0,
        "clubhouseCharges": 266000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/in85nexdwWHGTBugbmHouxJBznVFcjkEU4SOl2Qj.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Rohan Ekam Balewadi located?",
        "answer": "Rohan Ekam Balewadi is located at Balewadi, Pune."
      },
      {
        "question": "What is the price of Rohan Ekam Balewadi?",
        "answer": "Prices at Rohan Ekam Balewadi range from \u20b9 1.33 Cr \u2013 3.28 Cr (agreement value). Homes are available as 2, 3, 4, 4.5 BHK."
      },
      {
        "question": "Which configurations are available at Rohan Ekam Balewadi?",
        "answer": "The project offers 2, 3, 4, 4.5 BHK homes. Carpet areas range from 890 \u2013 2,158 sq.ft."
      },
      {
        "question": "What is the RERA number of Rohan Ekam Balewadi?",
        "answer": "The RERA registration number of Rohan Ekam Balewadi is P52100052298."
      },
      {
        "question": "When is the possession of Rohan Ekam Balewadi?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Rohan Ekam Balewadi?",
        "answer": "Rohan Ekam Balewadi is developed by Rohan Ekam. The developer has been in real estate since 1993."
      },
      {
        "question": "How many floors does Rohan Ekam Balewadi have?",
        "answer": "The project has 7P+32 Floors floors. It is spread across 13 acres."
      },
      {
        "question": "What amenities does Rohan Ekam Balewadi offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Rohan Ekam Balewadi?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Rohan Ekam Balewadi?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8252152149926!2d73.77446417438523!3d18.581917067299056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5757409bc1%3A0xe1948544e41d7e2e!2sRohan%20Ekam!5e0!3m2!1sen!2sin!4v1708360592697!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 7P+32 Floors floors. It is spread across 13 acres.",
    "city": "Pune"
  },
  {
    "id": "p-rohan-saroha",
    "title": "Rohan Saroha",
    "slug": "rohan-saroha",
    "builderId": "b-rohan",
    "location": "Bhugaon",
    "priceRange": "\u20b987.00 L",
    "exactPrice": "\u20b987.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/8jc5QT6quqef9ftDCKWF9whFNXYnqsn8HFcXlNK6.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/8jc5QT6quqef9ftDCKWF9whFNXYnqsn8HFcXlNK6.webp",
    "lat": 18.5028,
    "lng": 73.7381,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/YVe9jtDGWda8R0Ge3bKO03qEKIGzAJFW1G7BDEtw.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/pirypefnig5fwwJs1ZORGcWJCujCXhNjv6Pp3UFP.webp",
      "https://keystoneliv.com/public/uploads/property/MYNRWw1OSwd2X1WWRiMv87vVJVGLKllnZ77rKHEk.webp",
      "https://keystoneliv.com/public/uploads/property/OAo4YmYPmmyE1TN8Y277HTfgyaoUnd0QkfD4TMnW.webp",
      "https://keystoneliv.com/public/uploads/property/8lAcBNDewOYfTjyKmGo4zq7iwXSRfAQb5i4Z406J.webp",
      "https://keystoneliv.com/public/uploads/property/PQOSV63FDT8y9apBXRIl6aZLDwOZYNUPLn6Axz9r.webp",
      "https://keystoneliv.com/public/uploads/property/b5oceIMtghaxSSAiO2E5Dt4oVI3a7Uc6uRakqvre.webp",
      "https://keystoneliv.com/public/uploads/property/NnpqoFF2OBg3Qewfk5tD4GWzugUz51BlL7UtQrsU.webp",
      "https://keystoneliv.com/public/uploads/property/9hVlJaZ6meEGYLipoMd0CHIZi7NEU4ceqU1F8rCu.webp"
    ],
    "description": "Rohan Saroha by Rohan Builders represents modern residential excellence in Bhugaon, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b987.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym. Verified under MahaRERA registration P52100076652, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Mini-Theater",
      "Party Lawn",
      "Reflexology",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "Intercom",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Bhugaon near Metro station and IT corridors",
      "Official MahaRERA verified project P52100076652",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100076652",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Rohan Saroha Bhugaon",
      "Rohan Saroha Pune price",
      "Rohan Saroha floor plan",
      "Rohan Saroha MahaRERA P52100076652",
      "Rohan Builders projects in Bhugaon",
      "flats in Bhugaon Pune",
      "buy 2 BHK in Bhugaon",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Rohan Saroha, Bhugaon Pune by Rohan Builders. Price starts \u20b987.00 L. 100% Zero Brokerage. Verified MahaRERA P52100076652. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-rohan-saroha-1",
        "projectId": "p-rohan-saroha",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 836,
        "balconyArea": 66,
        "bathrooms": 2,
        "basePrice": 8700000.0,
        "pricePerSqft": 10406.7,
        "infraCharges": 261000.0,
        "clubhouseCharges": 174000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/8jc5QT6quqef9ftDCKWF9whFNXYnqsn8HFcXlNK6.webp"
      },
      {
        "id": "cfg-rohan-saroha-2",
        "projectId": "p-rohan-saroha",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 836,
        "balconyArea": 66,
        "bathrooms": 2,
        "basePrice": 8700000.0,
        "pricePerSqft": 10406.7,
        "infraCharges": 261000.0,
        "clubhouseCharges": 174000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/9hVlJaZ6meEGYLipoMd0CHIZi7NEU4ceqU1F8rCu.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Rohan Saroha located?",
        "answer": "Rohan Saroha is located at Bhugaon, Mulshi, Pune."
      },
      {
        "question": "What is the price of Rohan Saroha?",
        "answer": "Prices at Rohan Saroha range from \u20b9 87.00 Lac \u2013 1.66 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Rohan Saroha?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 836 \u2013 1,535 sq.ft."
      },
      {
        "question": "What is the RERA number of Rohan Saroha?",
        "answer": "The RERA registration number of Rohan Saroha is P52100076652."
      },
      {
        "question": "When is the possession of Rohan Saroha?",
        "answer": "Possession is expected by Sep 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Rohan Saroha?",
        "answer": "Rohan Saroha is developed by Rohan Builders. The developer has been in real estate since 1993."
      },
      {
        "question": "How many floors does Rohan Saroha have?",
        "answer": "The project has 15 floors. It is spread across 5.76 acres."
      },
      {
        "question": "What amenities does Rohan Saroha offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Rohan Saroha?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Rohan Saroha?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4694.809050120558!2d73.74672557519136!3d18.509244282582163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfd99c052b27%3A0x228fe57ce20b13b6!2sRohan%20Saroha!5e1!3m2!1sen!2sin!4v1733549744657!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 15 floors. It is spread across 5.76 acres.",
    "city": "Pune"
  },
  {
    "id": "p-rohan-ekam",
    "title": "Rohan Ekam",
    "slug": "rohan-ekam",
    "builderId": "b-rohan",
    "location": "Balewadi",
    "priceRange": "\u20b91.18 Cr - \u20b91.31 Cr",
    "exactPrice": "\u20b91.18 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/9oCa9AZdSciAEF6lPemC0vhHm2BvHEJKiFxNCHri.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/9oCa9AZdSciAEF6lPemC0vhHm2BvHEJKiFxNCHri.webp",
    "lat": 18.5772,
    "lng": 73.7715,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/pkJxGd1gHFGu7mmQK9QruOkJwCN6UjcR7yv24TqQ.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/in85nexdwWHGTBugbmHouxJBznVFcjkEU4SOl2Qj.webp",
      "https://keystoneliv.com/public/uploads/property/JRdpFkkMaBqWUV91UsxTA5PmT4jrWULe6bfbdGr3.webp",
      "https://keystoneliv.com/public/uploads/property/EqFhQWfr3lRMA1nua2t6lHamZuSarVQj6Xo2TWu5.webp",
      "https://keystoneliv.com/public/uploads/property/AmV8a2CDk62VDd4gHjwZ5FxR4LQjjMFKM5NLCqsW.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/6lN0t0aJLQXabFeZvjKRhyOJBLJZtpLhYMKi5Xm6.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/eRICUaL6M4d6iePTlnAtNe9LM01U0TUNFYcI6jom.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/7qHeB3yzfOJKGDwmXzmh3BJZ92BlzvkRJ2h6DNuD.webp"
    ],
    "description": "Rohan Ekam by Rohan Builders represents modern residential excellence in Balewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.18 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Pet Park. Verified under MahaRERA registration P52100052298, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Pet Park",
      "Swimming Pool",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052298",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100052298",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Rohan Ekam Balewadi",
      "Rohan Ekam Pune price",
      "Rohan Ekam floor plan",
      "Rohan Ekam MahaRERA P52100052298",
      "Rohan Builders projects in Balewadi",
      "flats in Balewadi Pune",
      "buy 2 BHK in Balewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Rohan Ekam, Balewadi Pune by Rohan Builders. Price starts \u20b91.18 Cr. 100% Zero Brokerage. Verified MahaRERA P52100052298. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-rohan-ekam-1",
        "projectId": "p-rohan-ekam",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 890,
        "balconyArea": 71,
        "bathrooms": 2,
        "basePrice": 11800000.0,
        "pricePerSqft": 13258.43,
        "infraCharges": 354000.0,
        "clubhouseCharges": 236000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/9oCa9AZdSciAEF6lPemC0vhHm2BvHEJKiFxNCHri.webp"
      },
      {
        "id": "cfg-rohan-ekam-2",
        "projectId": "p-rohan-ekam",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 890,
        "balconyArea": 71,
        "bathrooms": 2,
        "basePrice": 11800000.0,
        "pricePerSqft": 13258.43,
        "infraCharges": 354000.0,
        "clubhouseCharges": 236000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/AmV8a2CDk62VDd4gHjwZ5FxR4LQjjMFKM5NLCqsW.webp"
      },
      {
        "id": "cfg-rohan-ekam-3",
        "projectId": "p-rohan-ekam",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 987,
        "balconyArea": 78,
        "bathrooms": 2,
        "basePrice": 13100000.0,
        "pricePerSqft": 13272.54,
        "infraCharges": 393000.0,
        "clubhouseCharges": 262000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/6lN0t0aJLQXabFeZvjKRhyOJBLJZtpLhYMKi5Xm6.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Rohan Ekam Balewadi located?",
        "answer": "Rohan Ekam Balewadi is located at Balewadi, Pune."
      },
      {
        "question": "What is the price of Rohan Ekam Balewadi?",
        "answer": "Prices at Rohan Ekam Balewadi range from \u20b9 1.33 Cr \u2013 3.28 Cr (agreement value). Homes are available as 2, 3, 4, 4.5 BHK."
      },
      {
        "question": "Which configurations are available at Rohan Ekam Balewadi?",
        "answer": "The project offers 2, 3, 4, 4.5 BHK homes. Carpet areas range from 890 \u2013 2,158 sq.ft."
      },
      {
        "question": "What is the RERA number of Rohan Ekam Balewadi?",
        "answer": "The RERA registration number of Rohan Ekam Balewadi is P52100052298."
      },
      {
        "question": "When is the possession of Rohan Ekam Balewadi?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Rohan Ekam Balewadi?",
        "answer": "Rohan Ekam Balewadi is developed by Rohan Ekam. The developer has been in real estate since 1993."
      },
      {
        "question": "How many floors does Rohan Ekam Balewadi have?",
        "answer": "The project has 7P+32 Floors floors. It is spread across 13 acres."
      },
      {
        "question": "What amenities does Rohan Ekam Balewadi offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Rohan Ekam Balewadi?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Rohan Ekam Balewadi?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8252152149926!2d73.77446417438523!3d18.581917067299056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5757409bc1%3A0xe1948544e41d7e2e!2sRohan%20Ekam!5e0!3m2!1sen!2sin!4v1708360592697!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 7P+32 Floors floors. It is spread across 13 acres.",
    "city": "Pune"
  },
  {
    "id": "p-vj-indilife",
    "title": "VJ IndiLife",
    "slug": "vj-indilife",
    "builderId": "b-vilas-javdekar",
    "location": "Pashan",
    "priceRange": "\u20b969.00 L - \u20b996.60 L",
    "exactPrice": "\u20b969.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp",
    "lat": 18.5412,
    "lng": 73.7925,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/56RUcH2FcTi4nhHkw0gG3jrlWip1SBX7GquQbPQ9.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/aePrJFSWXCrLzUuIElRa833tORaxTtYAjSNM78Sh.webp",
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-19T152500.769.webp",
      "https://keystoneliv.com/public/uploads/property/NdXJ20cXwaIEvbNcLMqICBTXnHFUDHwqN8v3pGx2.png",
      "https://keystoneliv.com/public/uploads/property/aJ0jJdFO8iraawNzChzm5yfRSs4FcBR0vdbLakJy.png",
      "https://keystoneliv.com/public/uploads/property/8y0bsfk2BnzfvvWUEvZvcnihuUcAp0sSkh93J6zo.png",
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-19T152510.033.webp"
    ],
    "description": "VJ IndiLife by Vilas Javdekar Developers represents modern residential excellence in Pashan, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b969.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Conference Room, Gym, Jogging Track, Kids Play Area, Open Gym. Verified under MahaRERA registration P52100028030, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Conference Room",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Reflexology",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Internet / WiFi",
      "Lift",
      "Low Density Society",
      "Modular Kitchen",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Pashan near Metro station and IT corridors",
      "Official MahaRERA verified project P52100028030",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100028030",
    "pricePerSqft": 9200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VJ IndiLife Pashan",
      "VJ IndiLife Pune price",
      "VJ IndiLife floor plan",
      "VJ IndiLife MahaRERA P52100028030",
      "Vilas Javdekar Developers projects in Pashan",
      "flats in Pashan Pune",
      "buy 2 BHK in Pashan",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in VJ IndiLife, Pashan Pune by Vilas Javdekar Developers. Price starts \u20b969.00 L. 100% Zero Brokerage. Verified MahaRERA P52100028030. Floor pla",
    "advancedConfigurations": [
      {
        "id": "cfg-vj-indilife-1",
        "projectId": "p-vj-indilife",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 6900000,
        "pricePerSqft": 9200,
        "infraCharges": 207000.0,
        "clubhouseCharges": 138000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp"
      },
      {
        "id": "cfg-vj-indilife-2",
        "projectId": "p-vj-indilife",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 9660000,
        "pricePerSqft": 9200,
        "infraCharges": 289800.0,
        "clubhouseCharges": 193200.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is VJ IndiLife located?",
        "answer": "VJ IndiLife is located at VJ IndiLife, Pashan - Old Sr. No. 128/1B/1, Pashan - Sus Rd, Pashan, Pune, Maharashtra.."
      },
      {
        "question": "What is the price of VJ IndiLife?",
        "answer": "Prices at VJ IndiLife range from \u20b9 25.95 Lac \u2013 48.50 Lac (agreement value). Homes are available as Studio BHK."
      },
      {
        "question": "Which configurations are available at VJ IndiLife?",
        "answer": "The project offers Studio BHK homes. Carpet areas range from 184 \u2013 397 sq.ft."
      },
      {
        "question": "What is the RERA number of VJ IndiLife?",
        "answer": "The RERA registration number of VJ IndiLife is P52100028030."
      },
      {
        "question": "When is the possession of VJ IndiLife?",
        "answer": "Possession is expected by Sep 2024, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VJ IndiLife?",
        "answer": "VJ IndiLife is developed by Vilas Javdekar Developers. The developer has been in real estate since 2016."
      },
      {
        "question": "How many floors does VJ IndiLife have?",
        "answer": "The project has 17 floors. It is spread across 1.05 acres."
      },
      {
        "question": "What amenities does VJ IndiLife offer?",
        "answer": "Amenities include Amphitheater, Conference Room, Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn, Pet Park and more."
      },
      {
        "question": "Which banks give home loans for VJ IndiLife?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VJ IndiLife?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7565.295457879271!2d73.77912157468334!3d18.54481454957932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf640c853341%3A0x9533f4f039258adb!2sVJ%20Indilife!5e0!3m2!1sen!2sin!4v1688198610806!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 17 floors. It is spread across 1.05 acres.",
    "city": "Pune"
  },
  {
    "id": "p-vj-pkc-central",
    "title": "VJ PKC Central",
    "slug": "vj-pkc-central",
    "builderId": "b-vilas-javdekar",
    "location": "Kharadi",
    "priceRange": "\u20b91.10 Cr - \u20b91.24 Cr",
    "exactPrice": "\u20b91.10 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Zer51XQI5ojyaQkJzALaQDh3PUsVuRYsoTIvuyGp.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Zer51XQI5ojyaQkJzALaQDh3PUsVuRYsoTIvuyGp.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/Oz85QLYWtUPkHjRU5N2NHLOOg2Z4WBzI9bJT6qeD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/8L6yo8fke1Wz7a9c7D8pNIZ2pR09E2Yl5a6H2JkU.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/3K1d5aSB23mtWUwKhqAuWcReKd3jpS1SygdeiM9N.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/xbbi8BCVsBCZzTjFyouxPMWqZ8HZFkhR4L7m1EyR.webp",
      "https://keystoneliv.com/public/uploads/property/iTt80ob6Q847pdqJo6QxQYX9jjyINihAoQvfFwpB.webp"
    ],
    "description": "VJ PKC Central by Vilas Javdekar Developers represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.10 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100077759, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Air Conditioned",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Washroom"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077759",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100077759",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VJ PKC Central Kharadi",
      "VJ PKC Central Pune price",
      "VJ PKC Central floor plan",
      "VJ PKC Central MahaRERA P52100077759",
      "Vilas Javdekar Developers projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in VJ PKC Central, Kharadi Pune by Vilas Javdekar Developers. Price starts \u20b91.10 Cr. 100% Zero Brokerage. Verified MahaRERA P52100077759. Floor plans ",
    "advancedConfigurations": [
      {
        "id": "cfg-vj-pkc-central-1",
        "projectId": "p-vj-pkc-central",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 756,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 11000000.000000002,
        "pricePerSqft": 14550.26,
        "infraCharges": 330000.0,
        "clubhouseCharges": 220000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Zer51XQI5ojyaQkJzALaQDh3PUsVuRYsoTIvuyGp.webp"
      },
      {
        "id": "cfg-vj-pkc-central-2",
        "projectId": "p-vj-pkc-central",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 756,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 11000000.000000002,
        "pricePerSqft": 14550.26,
        "infraCharges": 330000.0,
        "clubhouseCharges": 220000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/8L6yo8fke1Wz7a9c7D8pNIZ2pR09E2Yl5a6H2JkU.webp"
      },
      {
        "id": "cfg-vj-pkc-central-3",
        "projectId": "p-vj-pkc-central",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 825,
        "balconyArea": 66,
        "bathrooms": 2,
        "basePrice": 12400000.0,
        "pricePerSqft": 15030.3,
        "infraCharges": 372000.0,
        "clubhouseCharges": 248000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/3K1d5aSB23mtWUwKhqAuWcReKd3jpS1SygdeiM9N.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is VJ PKC Central located?",
        "answer": "VJ PKC Central is located at Pratik Nagar, Kharadi, Pune, Maharashtra 411014."
      },
      {
        "question": "What is the price of VJ PKC Central?",
        "answer": "Prices at VJ PKC Central range from \u20b9 1.10 Cr \u2013 1.90 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at VJ PKC Central?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 756 \u2013 1,320 sq.ft."
      },
      {
        "question": "What is the RERA number of VJ PKC Central?",
        "answer": "The RERA registration number of VJ PKC Central is P52100077759."
      },
      {
        "question": "When is the possession of VJ PKC Central?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VJ PKC Central?",
        "answer": "VJ PKC Central is developed by Vilas Javdekar Developers. The developer has been in real estate since 2016."
      },
      {
        "question": "How many floors does VJ PKC Central have?",
        "answer": "The project has G+22 floors. It is spread across 2 acres."
      },
      {
        "question": "What amenities does VJ PKC Central offer?",
        "answer": "Amenities include Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for VJ PKC Central?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VJ PKC Central?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4693.4820141334385!2d73.93485547595725!3d18.557559968041836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c31a4bbf5c75%3A0xec03cd5dfb007e86!2sVJ%20Palladio%20Kharadi%20Central!5e1!3m2!1sen!2sin!4v1743167664970!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 2 acres.",
    "city": "Pune"
  },
  {
    "id": "p-vj-yashwin-enchante",
    "title": "VJ Yashwin Enchante",
    "slug": "vj-yashwin-enchante",
    "builderId": "b-vilas-javdekar",
    "location": "Wagholi",
    "priceRange": "\u20b995.85 L - \u20b91.14 Cr",
    "exactPrice": "\u20b995.85 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/nzNTueMEEy7klzyMvsAZKbQvi18BTc9IP4Lf94GE.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/nzNTueMEEy7klzyMvsAZKbQvi18BTc9IP4Lf94GE.webp",
    "lat": 18.5815,
    "lng": 73.9806,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/P8QVGC64Hk3A8KQdGVAySetrgtwaNp3vYfH4zEou.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/EVDSKyNRMmSSf7oqrNNRpKJnAT7ktaXYDp3VM2Yf.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/3K1d5aSB23mtWUwKhqAuWcReKd3jpS1SygdeiM9N.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/xbbi8BCVsBCZzTjFyouxPMWqZ8HZFkhR4L7m1EyR.webp",
      "https://keystoneliv.com/public/uploads/property/gu9bQayoV6LdnMMIPWE4YCnur8rK2HqDUWUnOUJr.webp"
    ],
    "description": "VJ Yashwin Enchante by Vilas Javdekar Developers represents modern residential excellence in Wagholi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b995.85 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym. Verified under MahaRERA registration P52100046510, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jacuzzi",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Reflexology",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Wagholi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046510",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100046510",
    "pricePerSqft": 6400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "VJ Yashwin Enchante Wagholi",
      "VJ Yashwin Enchante Pune price",
      "VJ Yashwin Enchante floor plan",
      "VJ Yashwin Enchante MahaRERA P52100046510",
      "Vilas Javdekar Developers projects in Wagholi",
      "flats in Wagholi Pune",
      "buy 2 BHK in Wagholi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in VJ Yashwin Enchante, Wagholi Pune by Vilas Javdekar Developers. Price starts \u20b995.85 L. 100% Zero Brokerage. Verified MahaRERA P52100046510. ",
    "advancedConfigurations": [
      {
        "id": "cfg-vj-yashwin-enchante-1",
        "projectId": "p-vj-yashwin-enchante",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 771,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 11399999.999999998,
        "pricePerSqft": 14785.99,
        "infraCharges": 342000.0,
        "clubhouseCharges": 228000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/nzNTueMEEy7klzyMvsAZKbQvi18BTc9IP4Lf94GE.webp"
      },
      {
        "id": "cfg-vj-yashwin-enchante-2",
        "projectId": "p-vj-yashwin-enchante",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 771,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 11399999.999999998,
        "pricePerSqft": 14785.99,
        "infraCharges": 342000.0,
        "clubhouseCharges": 228000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/EVDSKyNRMmSSf7oqrNNRpKJnAT7ktaXYDp3VM2Yf.webp"
      },
      {
        "id": "cfg-vj-yashwin-enchante-3",
        "projectId": "p-vj-yashwin-enchante",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 639,
        "balconyArea": 51,
        "bathrooms": 3,
        "basePrice": 9585000.0,
        "pricePerSqft": 15000.0,
        "infraCharges": 287550.0,
        "clubhouseCharges": 191700.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/3K1d5aSB23mtWUwKhqAuWcReKd3jpS1SygdeiM9N.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is VJ Yashwin Enchante located?",
        "answer": "VJ Yashwin Enchante is located at Wagholi, Pune, Maharashtra."
      },
      {
        "question": "What is the price of VJ Yashwin Enchante?",
        "answer": "Prices at VJ Yashwin Enchante range from \u20b9 77.06 Lac \u2013 2.14 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at VJ Yashwin Enchante?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 613 \u2013 1,426 sq.ft."
      },
      {
        "question": "What is the RERA number of VJ Yashwin Enchante?",
        "answer": "The RERA registration number of VJ Yashwin Enchante is P52100046510, P52100077455."
      },
      {
        "question": "When is the possession of VJ Yashwin Enchante?",
        "answer": "Possession is expected by Jun 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of VJ Yashwin Enchante?",
        "answer": "VJ Yashwin Enchante is developed by Vilas Javdekar Developers. The developer has been in real estate since 2016."
      },
      {
        "question": "How many floors does VJ Yashwin Enchante have?",
        "answer": "The project has 21 floors. It is spread across 4 acres."
      },
      {
        "question": "What amenities does VJ Yashwin Enchante offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jacuzzi, Jogging Track and more."
      },
      {
        "question": "Which banks give home loans for VJ Yashwin Enchante?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to VJ Yashwin Enchante?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.423258351953!2d73.9715317!3d18.5719071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c34a84356017%3A0x17e240cefa2bef98!2sVilas%20Javdekar%20yahwin%20enchante%20sales%20office%20-%20Wagholi!5e1!3m2!1sen!2sin!4v1744268968056!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 21 floors. It is spread across 4 acres.",
    "city": "Pune"
  },
  {
    "id": "p-gt-pride",
    "title": "GT Pride",
    "slug": "gt-pride",
    "builderId": "b-pride-purple",
    "location": "Ravet",
    "priceRange": "\u20b953.00 L - \u20b978.00 L",
    "exactPrice": "\u20b953.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/jbCsemSHSujdotJecRohojPLWmeJoue0QDRZzz4U.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/jbCsemSHSujdotJecRohojPLWmeJoue0QDRZzz4U.webp",
    "lat": 18.6496,
    "lng": 73.7441,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/3nwgH4M3KYSuaKfXTtDhRqNLtwWRw8zijkrDpzRL.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/7pu992x8lSATxJVYLOahMD6OwofO5QT9Pp2c33Xj.webp",
      "https://keystoneliv.com/public/uploads/property/iqVoBiHDpdvdvsAeUBS5ADhwZqAsUDAkhxfT9DhM.webp",
      "https://keystoneliv.com/public/uploads/property/7TCmWAKkzKZL9nyvyDYsuMU5uJp9pN9T1g859POe.webp",
      "https://keystoneliv.com/public/uploads/property/iQeFKSkfJMsMn9Q736Gsy56RUc1DUApUpYlXsjXI.webp",
      "https://keystoneliv.com/public/uploads/property/3nwgH4M3KYSuaKfXTtDhRqNLtwWRw8zijkrDpzRL.webp"
    ],
    "description": "GT Pride by Pride Purple Group represents modern residential excellence in Ravet, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b953.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Sports Courts. Verified under MahaRERA registration P52100048595, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Parking",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Ravet near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048595",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100048595",
    "pricePerSqft": 7300,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "GT Pride Ravet",
      "GT Pride Pune price",
      "GT Pride floor plan",
      "GT Pride MahaRERA P52100048595",
      "Pride Purple Group projects in Ravet",
      "flats in Ravet Pune",
      "buy 2 BHK in Ravet",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in GT Pride, Ravet Pune by Pride Purple Group. Price starts \u20b953.00 L. 100% Zero Brokerage. Verified MahaRERA P52100048595. Floor plans & brochu",
    "advancedConfigurations": [
      {
        "id": "cfg-gt-pride-1",
        "projectId": "p-gt-pride",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 688,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 5300000.0,
        "pricePerSqft": 7703.49,
        "infraCharges": 159000.0,
        "clubhouseCharges": 106000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/jbCsemSHSujdotJecRohojPLWmeJoue0QDRZzz4U.webp"
      },
      {
        "id": "cfg-gt-pride-2",
        "projectId": "p-gt-pride",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 688,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 5300000.0,
        "pricePerSqft": 7703.49,
        "infraCharges": 159000.0,
        "clubhouseCharges": 106000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/iqVoBiHDpdvdvsAeUBS5ADhwZqAsUDAkhxfT9DhM.webp"
      },
      {
        "id": "cfg-gt-pride-3",
        "projectId": "p-gt-pride",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 988,
        "balconyArea": 79,
        "bathrooms": 3,
        "basePrice": 7800000.0,
        "pricePerSqft": 7894.74,
        "infraCharges": 234000.0,
        "clubhouseCharges": 156000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/7TCmWAKkzKZL9nyvyDYsuMU5uJp9pN9T1g859POe.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is GT Pride located?",
        "answer": "GT Pride is located at Ravet, Pimpri - Chinchwad, Pune, Maharashtra."
      },
      {
        "question": "What is the price of GT Pride?",
        "answer": "Prices at GT Pride range from \u20b9 53.00 Lac \u2013 78.00 Lac (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at GT Pride?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 688 \u2013 988 sq.ft."
      },
      {
        "question": "What is the RERA number of GT Pride?",
        "answer": "The RERA registration number of GT Pride is P52100048595."
      },
      {
        "question": "When is the possession of GT Pride?",
        "answer": "Possession is expected by May 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of GT Pride?",
        "answer": "GT Pride is developed by GT Associates Promoters & Builders. The developer has been in real estate since 2021."
      },
      {
        "question": "How many floors does GT Pride have?",
        "answer": "The project has 7 floors. It is spread across 1 acres."
      },
      {
        "question": "What amenities does GT Pride offer?",
        "answer": "Amenities include Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Sports Courts, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for GT Pride?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to GT Pride?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.202672707972!2d73.7309476!3d18.6548991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bba09ac1ab5f%3A0x6eee7e13184ecd37!2sGT%20PRIDE!5e0!3m2!1sen!2sin!4v1691753103758!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 7 floors. It is spread across 1 acres.",
    "city": "Pune"
  },
  {
    "id": "p-pride-park-connect",
    "title": "Pride Park Connect",
    "slug": "pride-park-connect",
    "builderId": "b-pride-purple",
    "location": "Hinjewadi",
    "priceRange": "\u20b966.85 L - \u20b91.12 Cr",
    "exactPrice": "\u20b966.85 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/pyfCcZQGbXLGoumWmHpNJZu7lOdvBE2m8hqD7GBs.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/pyfCcZQGbXLGoumWmHpNJZu7lOdvBE2m8hqD7GBs.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/yJYYgN6FjHg8otXKZFYokqMcDsDOaiin6tPyDHNW.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/FI0pRYe4YtQiDClNaJlsXItZMlHcOGiWSdLu8YJw.webp",
      "https://keystoneliv.com/public/uploads/property/BdOHFAflcjgXwOB8Bd1Rh03LxMxYzglkJcavsSBS.webp",
      "https://keystoneliv.com/public/uploads/property/aosfObh9Vvdv8aZgQlzOvwbck4sVAjkctSkrwgox.webp",
      "https://keystoneliv.com/public/uploads/property/b8feIUVDt3lYstN0BMwcKjsjQarsPnZ4QBTS8zNj.webp"
    ],
    "description": "Pride Park Connect by Pride Purple Group represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b966.85 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym. Verified under MahaRERA registration P52100020766, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Reflexology",
      "Sports Courts",
      "Yoga Zone",
      "24*7 Water",
      "Gated Society",
      "High Ceiling Height",
      "Intercom",
      "Lift",
      "Low Density Society",
      "Municipal Corporation",
      "Natural Light",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Waste Disposal",
      "Workstations"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020766",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100020766",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Pride Park Connect Hinjewadi",
      "Pride Park Connect Pune price",
      "Pride Park Connect floor plan",
      "Pride Park Connect MahaRERA P52100020766",
      "Pride Purple Group projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Pride Park Connect, Hinjewadi Pune by Pride Purple Group. Price starts \u20b966.85 L. 100% Zero Brokerage. Verified MahaRERA P52100020766. Floor ",
    "advancedConfigurations": [
      {
        "id": "cfg-pride-park-connect-1",
        "projectId": "p-pride-park-connect",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 546,
        "balconyArea": 43,
        "bathrooms": 2,
        "basePrice": 6684999.999999999,
        "pricePerSqft": 12243.59,
        "infraCharges": 200550.0,
        "clubhouseCharges": 133700.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/pyfCcZQGbXLGoumWmHpNJZu7lOdvBE2m8hqD7GBs.webp"
      },
      {
        "id": "cfg-pride-park-connect-2",
        "projectId": "p-pride-park-connect",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 546,
        "balconyArea": 43,
        "bathrooms": 2,
        "basePrice": 6684999.999999999,
        "pricePerSqft": 12243.59,
        "infraCharges": 200550.0,
        "clubhouseCharges": 133700.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/FI0pRYe4YtQiDClNaJlsXItZMlHcOGiWSdLu8YJw.webp"
      },
      {
        "id": "cfg-pride-park-connect-3",
        "projectId": "p-pride-park-connect",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 577,
        "balconyArea": 46,
        "bathrooms": 2,
        "basePrice": 7065000.000000001,
        "pricePerSqft": 12244.37,
        "infraCharges": 211950.0,
        "clubhouseCharges": 141300.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/BdOHFAflcjgXwOB8Bd1Rh03LxMxYzglkJcavsSBS.webp"
      },
      {
        "id": "cfg-pride-park-connect-4",
        "projectId": "p-pride-park-connect",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 663,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 8118000.000000001,
        "pricePerSqft": 12244.34,
        "infraCharges": 243540.0,
        "clubhouseCharges": 162360.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/aosfObh9Vvdv8aZgQlzOvwbck4sVAjkctSkrwgox.webp"
      },
      {
        "id": "cfg-pride-park-connect-5",
        "projectId": "p-pride-park-connect",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 756,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 9256000.0,
        "pricePerSqft": 12243.39,
        "infraCharges": 277680.0,
        "clubhouseCharges": 185120.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/b8feIUVDt3lYstN0BMwcKjsjQarsPnZ4QBTS8zNj.webp"
      },
      {
        "id": "cfg-pride-park-connect-6",
        "projectId": "p-pride-park-connect",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 796,
        "balconyArea": 63,
        "bathrooms": 3,
        "basePrice": 9746000.0,
        "pricePerSqft": 12243.72,
        "infraCharges": 292380.0,
        "clubhouseCharges": 194920.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/yJYYgN6FjHg8otXKZFYokqMcDsDOaiin6tPyDHNW.webp"
      },
      {
        "id": "cfg-pride-park-connect-7",
        "projectId": "p-pride-park-connect",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 913,
        "balconyArea": 73,
        "bathrooms": 3,
        "basePrice": 11200000.000000002,
        "pricePerSqft": 12267.25,
        "infraCharges": 336000.0,
        "clubhouseCharges": 224000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/AGux2KTqcK6w1EClyVamf2E28S9cCEnCxpkBfOoc.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Pride Park Connect located?",
        "answer": "Pride Park Connect is located at Hinjawadi, Pimpri-Chinchwad, Maharashtra."
      },
      {
        "question": "What is the price of Pride Park Connect?",
        "answer": "Prices at Pride Park Connect range from \u20b9 66.85 Lac \u2013 1.12 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Pride Park Connect?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 546 \u2013 913 sq.ft."
      },
      {
        "question": "What is the RERA number of Pride Park Connect?",
        "answer": "The RERA registration number of Pride Park Connect is P52100020766."
      },
      {
        "question": "When is the possession of Pride Park Connect?",
        "answer": "Possession is expected by Dec 2024, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Pride Park Connect?",
        "answer": "Pride Park Connect is developed by Pride Purple Group. The developer has been in real estate since 2000."
      },
      {
        "question": "How many floors does Pride Park Connect have?",
        "answer": "The project has G+17 floors. It is spread across 2 acres."
      },
      {
        "question": "What amenities does Pride Park Connect offer?",
        "answer": "Amenities include Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn, Pet Park and more."
      },
      {
        "question": "Which banks give home loans for Pride Park Connect?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Pride Park Connect?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4496.848046291115!2d73.72162725054598!3d18.601817205332917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb7d6a9132d%3A0x2ab76cd01ee7f5d!2sPark%20Connect%2C%20Phase%201%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1692186175898!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+17 floors. It is spread across 2 acres.",
    "city": "Pune"
  },
  {
    "id": "p-codename-pride-of-chinchwad",
    "title": "Codename Pride Of Chinchwad",
    "slug": "codename-pride-of-chinchwad",
    "builderId": "b-pride-purple",
    "location": "Pimpri Chinchwad",
    "priceRange": "\u20b958.50 L - \u20b981.90 L",
    "exactPrice": "\u20b958.50 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/bJRlpzPdNm0DR1MkR1sH6rYnsTdUtDSgBdDHbkM5.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/bJRlpzPdNm0DR1MkR1sH6rYnsTdUtDSgBdDHbkM5.webp",
    "lat": 18.6298,
    "lng": 73.7997,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/9mQcxr2kQwdxOjKHIxo2zEp9jrfIGuIrQfIHkK7o.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-28T164722.576.webp",
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-28T164728.254.webp",
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-28T164742.622.webp",
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-28T164746.759.webp"
    ],
    "description": "Codename Pride Of Chinchwad by Pride Purple Group represents modern residential excellence in Pimpri Chinchwad, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b958.50 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn, Sports Courts. Verified under MahaRERA registration P52100064090, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gas Stove",
      "Intercom",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100064090",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100064090",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Codename Pride Of Chinchwad Pimpri Chinchwad",
      "Codename Pride Of Chinchwad Pune price",
      "Codename Pride Of Chinchwad floor plan",
      "Codename Pride Of Chinchwad MahaRERA P52100064090",
      "Pride Purple Group projects in Pimpri Chinchwad",
      "flats in Pimpri Chinchwad Pune",
      "buy 2 BHK in Pimpri Chinchwad",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Codename Pride Of Chinchwad, Pimpri Chinchwad Pune by Pride Purple Group. Price starts \u20b958.50 L. 100% Zero Brokerage. Verified MahaRERA P521",
    "advancedConfigurations": [
      {
        "id": "cfg-codename-pride-of-chinchwad-1",
        "projectId": "p-codename-pride-of-chinchwad",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 5850000,
        "pricePerSqft": 7800,
        "infraCharges": 175500.0,
        "clubhouseCharges": 117000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/bJRlpzPdNm0DR1MkR1sH6rYnsTdUtDSgBdDHbkM5.webp"
      },
      {
        "id": "cfg-codename-pride-of-chinchwad-2",
        "projectId": "p-codename-pride-of-chinchwad",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 8190000,
        "pricePerSqft": 7800,
        "infraCharges": 245700.0,
        "clubhouseCharges": 163800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/bJRlpzPdNm0DR1MkR1sH6rYnsTdUtDSgBdDHbkM5.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Codename Pride Of Chinchwad located?",
        "answer": "Codename Pride Of Chinchwad is located at Sno 192A, Udyog Nagar, Pimpri-Chinchwad, Pune.."
      },
      {
        "question": "What is the price of Codename Pride Of Chinchwad?",
        "answer": "Prices at Codename Pride Of Chinchwad range from \u20b9 1.49 Cr \u2013 2.18 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Codename Pride Of Chinchwad?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,199 \u2013 1,736 sq.ft."
      },
      {
        "question": "When is the possession of Codename Pride Of Chinchwad?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Codename Pride Of Chinchwad?",
        "answer": "Codename Pride Of Chinchwad is developed by Saheel Properties Group. The developer has been in real estate since 2008."
      },
      {
        "question": "How many floors does Codename Pride Of Chinchwad have?",
        "answer": "The project has B+G+20 floors floors. It is spread across 2 acres."
      },
      {
        "question": "What amenities does Codename Pride Of Chinchwad offer?",
        "answer": "Amenities include Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn, Sports Courts, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Codename Pride Of Chinchwad?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Codename Pride Of Chinchwad?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60488.36244432715!2d73.71631972167968!3d18.640528199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b93b2f4be265%3A0x10a99f9c1ab9cd6b!2sITrend%20by%20Saheel%20Properties!5e0!3m2!1sen!2sin!4v1708689371250!5m2!1sen!2sin",
    "floorsAndAcres": "The project has B+G+20 floors floors. It is spread across 2 acres.",
    "city": "Pune"
  },
  {
    "id": "p-nyati-evoque",
    "title": "Nyati Evoque",
    "slug": "nyati-evoque",
    "builderId": "b-nyati",
    "location": "Wadgaon Sheri",
    "priceRange": "\u20b965.25 L - \u20b991.35 L",
    "exactPrice": "\u20b965.25 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/irWHREpB4Bu9lyPddtSq6rmlhF56vKg7o60Jna7N.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/irWHREpB4Bu9lyPddtSq6rmlhF56vKg7o60Jna7N.webp",
    "lat": 18.5528,
    "lng": 73.9234,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/erVeCsyBq9xP98CDIxaoBvpB9TucxbfYYskXd5u8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/BvTZeUCeXNM68BIMHLlqJbvYdggPCaAGorJHvwi8.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/1IAsKZHyaxzSfBPCgvdIdkzBf7UfcdS5Poo7eN5K.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/j6Wb9cOhThHs5G5EODyVRF8nmtjnP9T0wBWO4MqP.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/8KKQNl9pXNBZ6numJWe8UNpGknzVelIS0Qg1KIWp.webp"
    ],
    "description": "Nyati Evoque by Nyati Group represents modern residential excellence in Wadgaon Sheri, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b965.25 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Gym, Jogging Track, Kids Play Area, Mini-Theater, Swimming Pool, 24*7 Water. Verified under MahaRERA registration P52100056152, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Mini-Theater",
      "Swimming Pool",
      "24*7 Water",
      "Gas Pipeline",
      "Lift",
      "Parking",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Wadgaon Sheri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056152",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100056152",
    "pricePerSqft": 8700,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Nyati Evoque Wadgaon Sheri",
      "Nyati Evoque Pune price",
      "Nyati Evoque floor plan",
      "Nyati Evoque MahaRERA P52100056152",
      "Nyati Group projects in Wadgaon Sheri",
      "flats in Wadgaon Sheri Pune",
      "buy 2 BHK in Wadgaon Sheri",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Nyati Evoque, Wadgaon Sheri Pune by Nyati Group. Price starts \u20b965.25 L. 100% Zero Brokerage. Verified MahaRERA P52100056152. Floor plans & b",
    "advancedConfigurations": [
      {
        "id": "cfg-nyati-evoque-1",
        "projectId": "p-nyati-evoque",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 6525000,
        "pricePerSqft": 8700,
        "infraCharges": 195750.0,
        "clubhouseCharges": 130500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/irWHREpB4Bu9lyPddtSq6rmlhF56vKg7o60Jna7N.webp"
      },
      {
        "id": "cfg-nyati-evoque-2",
        "projectId": "p-nyati-evoque",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 9135000,
        "pricePerSqft": 8700,
        "infraCharges": 274050.0,
        "clubhouseCharges": 182700.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/irWHREpB4Bu9lyPddtSq6rmlhF56vKg7o60Jna7N.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Nyati Evoque located?",
        "answer": "Nyati Evoque is located at Wadgaon Sheri, Pune."
      },
      {
        "question": "What is the price of Nyati Evoque?",
        "answer": "Prices at Nyati Evoque range from \u20b9 3.57 Cr \u2013 4.33 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Nyati Evoque?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,519 \u2013 1,836 sq.ft."
      },
      {
        "question": "What is the RERA number of Nyati Evoque?",
        "answer": "The RERA registration number of Nyati Evoque is P52100056152."
      },
      {
        "question": "When is the possession of Nyati Evoque?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Nyati Evoque?",
        "answer": "Nyati Evoque is developed by NYATI GROUP. The developer has been in real estate since 1997."
      },
      {
        "question": "How many floors does Nyati Evoque have?",
        "answer": "The project has 27 floors."
      },
      {
        "question": "What amenities does Nyati Evoque offer?",
        "answer": "Amenities include Gym, Jogging Track, Kids Play Area, Mini-Theater, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Nyati Evoque?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Nyati Evoque?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.660477834084!2d73.91528199999999!3d18.5442389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1007a073eb7%3A0x6ae5de1bd37039ba!2sNyati%20Evoque!5e0!3m2!1sen!2sin!4v1746887393270!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 27 floors.",
    "city": "Pune"
  },
  {
    "id": "p-nyati-emerald",
    "title": "Nyati Emerald",
    "slug": "nyati-emerald",
    "builderId": "b-nyati",
    "location": "Baner",
    "priceRange": "\u20b91.18 Cr",
    "exactPrice": "\u20b91.18 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/CU1K5TMPY5iB90KqfJVmfosGCK6HiAnidy5Rb9Xd.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/CU1K5TMPY5iB90KqfJVmfosGCK6HiAnidy5Rb9Xd.webp",
    "lat": 18.559,
    "lng": 73.7868,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/qARqJM3G0vCdoeKlLfAh7OECZd5lY3HUYD7T9pmW.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/UHNyjEwyLNQy9PeMbK3JWfFARipTf9vfWKRwdV5z.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/1IAsKZHyaxzSfBPCgvdIdkzBf7UfcdS5Poo7eN5K.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/j6Wb9cOhThHs5G5EODyVRF8nmtjnP9T0wBWO4MqP.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/8KKQNl9pXNBZ6numJWe8UNpGknzVelIS0Qg1KIWp.webp"
    ],
    "description": "Nyati Emerald by Nyati Group represents modern residential excellence in Baner, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.18 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Pet Park. Verified under MahaRERA registration P52100051235, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Pet Park",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051235",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100051235",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Nyati Emerald Baner",
      "Nyati Emerald Pune price",
      "Nyati Emerald floor plan",
      "Nyati Emerald MahaRERA P52100051235",
      "Nyati Group projects in Baner",
      "flats in Baner Pune",
      "buy 2 BHK in Baner",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Nyati Emerald, Baner Pune by Nyati Group. Price starts \u20b91.18 Cr. 100% Zero Brokerage. Verified MahaRERA P52100051235. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-nyati-emerald-1",
        "projectId": "p-nyati-emerald",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 838,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 11800000.0,
        "pricePerSqft": 14081.15,
        "infraCharges": 354000.0,
        "clubhouseCharges": 236000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/CU1K5TMPY5iB90KqfJVmfosGCK6HiAnidy5Rb9Xd.webp"
      },
      {
        "id": "cfg-nyati-emerald-2",
        "projectId": "p-nyati-emerald",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 838,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 11800000.0,
        "pricePerSqft": 14081.15,
        "infraCharges": 354000.0,
        "clubhouseCharges": 236000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/UHNyjEwyLNQy9PeMbK3JWfFARipTf9vfWKRwdV5z.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Nyati Emerald located?",
        "answer": "Nyati Emerald is located at Baner, Pune."
      },
      {
        "question": "What is the price of Nyati Emerald?",
        "answer": "Prices at Nyati Emerald range from \u20b9 1.18 Cr \u2013 1.65 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Nyati Emerald?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 838 \u2013 1,213 sq.ft."
      },
      {
        "question": "What is the RERA number of Nyati Emerald?",
        "answer": "The RERA registration number of Nyati Emerald is P52100051235."
      },
      {
        "question": "When is the possession of Nyati Emerald?",
        "answer": "Possession is expected by Feb 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Nyati Emerald?",
        "answer": "Nyati Emerald is developed by NYATI GROUP. The developer has been in real estate since 1997."
      },
      {
        "question": "How many floors does Nyati Emerald have?",
        "answer": "The project has 29 floors. It is spread across 15 acres."
      },
      {
        "question": "What amenities does Nyati Emerald offer?",
        "answer": "Amenities include Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Pet Park, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Nyati Emerald?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Nyati Emerald?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.486478220268!2d73.76621170000001!3d18.552094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bebe9fd39bf1%3A0x9a2e05ea4256096d!2sNyati%20Emerald!5e0!3m2!1sen!2sin!4v1747043793362!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 29 floors. It is spread across 15 acres.",
    "city": "Pune"
  },
  {
    "id": "p-nyati-esteban-2",
    "title": "Nyati Esteban 2",
    "slug": "nyati-esteban-2",
    "builderId": "b-nyati",
    "location": "Undri",
    "priceRange": "\u20b984.00 L",
    "exactPrice": "\u20b984.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/q5AHQmgzPmHHJpiGmkjETlcn8wnVNDWB11vSWkcy.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/q5AHQmgzPmHHJpiGmkjETlcn8wnVNDWB11vSWkcy.webp",
    "lat": 18.4608,
    "lng": 73.9099,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/MePjpM2o9KQjJ6xTMr6aFlHFsoAzGOb15Qt42xOo.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tJoMXAcz93Q3AzNSRbGl2rqXifgKmka5ixZgZ61W.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/1IAsKZHyaxzSfBPCgvdIdkzBf7UfcdS5Poo7eN5K.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/j6Wb9cOhThHs5G5EODyVRF8nmtjnP9T0wBWO4MqP.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/8KKQNl9pXNBZ6numJWe8UNpGknzVelIS0Qg1KIWp.webp"
    ],
    "description": "Nyati Esteban 2 by Nyati Group represents modern residential excellence in Undri, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b984.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Pet Park. Verified under MahaRERA registration P52100053440, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Pet Park",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Undri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100053440",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100053440",
    "pricePerSqft": 6600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Nyati Esteban 2 Undri",
      "Nyati Esteban 2 Pune price",
      "Nyati Esteban 2 floor plan",
      "Nyati Esteban 2 MahaRERA P52100053440",
      "Nyati Group projects in Undri",
      "flats in Undri Pune",
      "buy 2 BHK in Undri",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Nyati Esteban 2, Undri Pune by Nyati Group. Price starts \u20b984.00 L. 100% Zero Brokerage. Verified MahaRERA P52100053440. Floor plans & brochure.",
    "advancedConfigurations": [
      {
        "id": "cfg-nyati-esteban-2-1",
        "projectId": "p-nyati-esteban-2",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 838,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 8400000.0,
        "pricePerSqft": 10023.87,
        "infraCharges": 252000.0,
        "clubhouseCharges": 168000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/q5AHQmgzPmHHJpiGmkjETlcn8wnVNDWB11vSWkcy.webp"
      },
      {
        "id": "cfg-nyati-esteban-2-2",
        "projectId": "p-nyati-esteban-2",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 838,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 8400000.0,
        "pricePerSqft": 10023.87,
        "infraCharges": 252000.0,
        "clubhouseCharges": 168000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/tJoMXAcz93Q3AzNSRbGl2rqXifgKmka5ixZgZ61W.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Nyati Esteban 2 located?",
        "answer": "Nyati Esteban 2 is located at Undri, Pune."
      },
      {
        "question": "What is the price of Nyati Esteban 2?",
        "answer": "Prices at Nyati Esteban 2 range from \u20b9 84.00 Lac \u2013 1.22 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Nyati Esteban 2?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 838 \u2013 1,214 sq.ft."
      },
      {
        "question": "What is the RERA number of Nyati Esteban 2?",
        "answer": "The RERA registration number of Nyati Esteban 2 is P52100053440."
      },
      {
        "question": "When is the possession of Nyati Esteban 2?",
        "answer": "Possession is expected by Sep 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Nyati Esteban 2?",
        "answer": "Nyati Esteban 2 is developed by NYATI GROUP. The developer has been in real estate since 1997."
      },
      {
        "question": "How many floors does Nyati Esteban 2 have?",
        "answer": "The project has 30 floors. It is spread across 5.04 acres."
      },
      {
        "question": "What amenities does Nyati Esteban 2 offer?",
        "answer": "Amenities include Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Pet Park, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Nyati Esteban 2?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Nyati Esteban 2?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.595358632626!2d73.9176876!3d18.4566726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb5444285d63%3A0xf0ce2364f73e1c51!2sNyati%20Esteban%20I%20%26%20II!5e0!3m2!1sen!2sin!4v1747324956194!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 30 floors. It is spread across 5.04 acres.",
    "city": "Pune"
  },
  {
    "id": "p-gera-hinjewadi-phase-3",
    "title": "Gera Hinjewadi Phase 3 \u2013 0",
    "slug": "gera-hinjewadi-phase-3",
    "builderId": "b-gera",
    "location": "Hinjewadi",
    "priceRange": "\u20b983.40 L - \u20b91.03 Cr",
    "exactPrice": "\u20b983.40 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Vrt23jt5LSfa41TChYsDPZdCGlEn8UCmlZ3CgxZH.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Vrt23jt5LSfa41TChYsDPZdCGlEn8UCmlZ3CgxZH.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/Ptw9XmFBU5IeYvADN8ruLftUvTCTToYOMifOkh2x.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/5tGVdoBmlNYzErLGfVKOK1iX1OZIqyzJ17rTGkJ7.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/HTDeJtXzkfygVbiRVz95ojkcuQKU5PXVfRQ9NN4R.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/ImDiujOwFBjJL4Fonv1zzS6x5tRznB71FrHLlhmt.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Re1pQnaMMOCbS4ph0DQTOvgYzMeNJKjA3J8utYWQ.webp"
    ],
    "description": "Gera Hinjewadi Phase 3 \u2013 0 by Gera Developments represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b983.40 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Swimming Pool. Verified under MahaRERA registration P52100077635, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077635",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100077635",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Gera Hinjewadi Phase 3 \u2013 0 Hinjewadi",
      "Gera Hinjewadi Phase 3 \u2013 0 Pune price",
      "Gera Hinjewadi Phase 3 \u2013 0 floor plan",
      "Gera Hinjewadi Phase 3 \u2013 0 MahaRERA P52100077635",
      "Gera Developments projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Gera Hinjewadi Phase 3 \u2013 0, Hinjewadi Pune by Gera Developments. Price starts \u20b983.40 L. 100% Zero Brokerage. Verified MahaRERA P52100077635. Floor ",
    "advancedConfigurations": [
      {
        "id": "cfg-gera-hinjewadi-phase-3-1",
        "projectId": "p-gera-hinjewadi-phase-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8340000.000000001,
        "pricePerSqft": 11120.0,
        "infraCharges": 250200.0,
        "clubhouseCharges": 166800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Vrt23jt5LSfa41TChYsDPZdCGlEn8UCmlZ3CgxZH.webp"
      },
      {
        "id": "cfg-gera-hinjewadi-phase-3-2",
        "projectId": "p-gera-hinjewadi-phase-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8340000.000000001,
        "pricePerSqft": 11120.0,
        "infraCharges": 250200.0,
        "clubhouseCharges": 166800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/5tGVdoBmlNYzErLGfVKOK1iX1OZIqyzJ17rTGkJ7.webp"
      },
      {
        "id": "cfg-gera-hinjewadi-phase-3-3",
        "projectId": "p-gera-hinjewadi-phase-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 850,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 9240000.0,
        "pricePerSqft": 10870.59,
        "infraCharges": 277200.0,
        "clubhouseCharges": 184800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/HTDeJtXzkfygVbiRVz95ojkcuQKU5PXVfRQ9NN4R.webp"
      },
      {
        "id": "cfg-gera-hinjewadi-phase-3-4",
        "projectId": "p-gera-hinjewadi-phase-3",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 895,
        "balconyArea": 71,
        "bathrooms": 2,
        "basePrice": 10300000.0,
        "pricePerSqft": 11508.38,
        "infraCharges": 309000.0,
        "clubhouseCharges": 206000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/ImDiujOwFBjJL4Fonv1zzS6x5tRznB71FrHLlhmt.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Gera Hinjewadi Phase 3 \u2013 0 located?",
        "answer": "Gera Hinjewadi Phase 3 \u2013 0 is located at Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad.."
      },
      {
        "question": "What is the price of Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "Prices at Gera Hinjewadi Phase 3 \u2013 0 range from \u20b9 83.40 Lac \u2013 1.47 Cr (agreement value). Homes are available as 2, 3 BHK, Duplex."
      },
      {
        "question": "Which configurations are available at Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "The project offers 2, 3 BHK, Duplex homes. Carpet areas range from 750 \u2013 1,215 sq.ft."
      },
      {
        "question": "What is the RERA number of Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "The RERA registration number of Gera Hinjewadi Phase 3 \u2013 0 is P52100077635."
      },
      {
        "question": "When is the possession of Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "Gera Hinjewadi Phase 3 \u2013 0 is developed by Gera Developers. The developer has been in real estate since 1970."
      },
      {
        "question": "How many floors does Gera Hinjewadi Phase 3 \u2013 0 have?",
        "answer": "The project has 3P+33 floors floors. It is spread across 10.75 acres."
      },
      {
        "question": "What amenities does Gera Hinjewadi Phase 3 \u2013 0 offer?",
        "answer": "Amenities include Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Gera Hinjewadi Phase 3 \u2013 0?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30253.972971752486!2d73.64989183096901!3d18.585458588066782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1709536313556!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 3P+33 floors floors. It is spread across 10.75 acres.",
    "city": "Pune"
  },
  {
    "id": "p-gera-imperium-gateway",
    "title": "Gera Imperium Gateway \u2013 A",
    "slug": "gera-imperium-gateway",
    "builderId": "b-gera",
    "location": "Bhosari",
    "priceRange": "\u20b948.75 L - \u20b968.25 L",
    "exactPrice": "\u20b948.75 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Yr5BwDRbFNIiqwBjWtCMNhRsmIHKZenfXV5IfERK.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Yr5BwDRbFNIiqwBjWtCMNhRsmIHKZenfXV5IfERK.webp",
    "lat": 18.625,
    "lng": 73.8441,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/LRk6ujgc4OZvne3hIg9Oy1w5Ybq2LhGzE9FyFTTw.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/WXLSiuxx5fhXPZX1QpedbFnlyRpgRuoSXei0y7sC.webp",
      "https://keystoneliv.com/public/uploads/property/lGMpicIgBVZBLm3qEAG033NSla0IUbsJLAF3tVpF.webp",
      "https://keystoneliv.com/public/uploads/property/SH7H8dxS80mn8MREYklIjIfomkd46PAdSgIPEBpM.webp",
      "https://keystoneliv.com/public/uploads/property/TZsdhaVnvOXVsKJ354KwYxoNAXi3JGPoJKcuFYvN.webp"
    ],
    "description": "Gera Imperium Gateway \u2013 A by Gera Developments represents modern residential excellence in Bhosari, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b948.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Conference Room, Fitness Corner, Sports Courts, 24*7 Water, Airy Rooms, Gated Society. Verified under MahaRERA registration P52100030184, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Conference Room",
      "Fitness Corner",
      "Sports Courts",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Bhosari near Metro station and IT corridors",
      "Official MahaRERA verified project P52100030184",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100030184",
    "pricePerSqft": 6500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Gera Imperium Gateway \u2013 A Bhosari",
      "Gera Imperium Gateway \u2013 A Pune price",
      "Gera Imperium Gateway \u2013 A floor plan",
      "Gera Imperium Gateway \u2013 A MahaRERA P52100030184",
      "Gera Developments projects in Bhosari",
      "flats in Bhosari Pune",
      "buy 2 BHK in Bhosari",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Gera Imperium Gateway \u2013 A, Bhosari Pune by Gera Developments. Price starts \u20b948.75 L. 100% Zero Brokerage. Verified MahaRERA P52100030184. Fl",
    "advancedConfigurations": [
      {
        "id": "cfg-gera-imperium-gateway-1",
        "projectId": "p-gera-imperium-gateway",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 4875000,
        "pricePerSqft": 6500,
        "infraCharges": 146250.0,
        "clubhouseCharges": 97500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Yr5BwDRbFNIiqwBjWtCMNhRsmIHKZenfXV5IfERK.webp"
      },
      {
        "id": "cfg-gera-imperium-gateway-2",
        "projectId": "p-gera-imperium-gateway",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 6825000,
        "pricePerSqft": 6500,
        "infraCharges": 204750.0,
        "clubhouseCharges": 136500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Yr5BwDRbFNIiqwBjWtCMNhRsmIHKZenfXV5IfERK.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Gera Imperium Gateway \u2013 A located?",
        "answer": "Gera Imperium Gateway \u2013 A is located at Bhosari, Pune."
      },
      {
        "question": "What is the price of Gera Imperium Gateway \u2013 A?",
        "answer": "Prices at Gera Imperium Gateway \u2013 A range from \u20b9 65.64 Lac \u2013 3.50 Cr (agreement value). Homes are available as Commercial Office."
      },
      {
        "question": "Which configurations are available at Gera Imperium Gateway \u2013 A?",
        "answer": "The project offers Commercial Office homes. Carpet areas range from 414 \u2013 1,400 sq.ft."
      },
      {
        "question": "What is the RERA number of Gera Imperium Gateway \u2013 A?",
        "answer": "The RERA registration number of Gera Imperium Gateway \u2013 A is P52100030184 P52100030167."
      },
      {
        "question": "When is the possession of Gera Imperium Gateway \u2013 A?",
        "answer": "Possession is expected by Mar 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Gera Imperium Gateway \u2013 A?",
        "answer": "Gera Imperium Gateway \u2013 A is developed by Gera Developers. The developer has been in real estate since 1970."
      },
      {
        "question": "How many floors does Gera Imperium Gateway \u2013 A have?",
        "answer": "The project has G+35 floors. It is spread across 1.8 acres."
      },
      {
        "question": "What amenities does Gera Imperium Gateway \u2013 A offer?",
        "answer": "Amenities include Conference Room, Fitness Corner, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for Gera Imperium Gateway \u2013 A?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Gera Imperium Gateway \u2013 A?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.199415224838!2d73.81750377519381!3d18.61009828250088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9b5631828cb%3A0x6370d884949e3645!2sGera",
    "floorsAndAcres": "The project has G+35 floors. It is spread across 1.8 acres.",
    "city": "Pune"
  },
  {
    "id": "p-gera-joy-on-treetop",
    "title": "Gera Joy On Treetop",
    "slug": "gera-joy-on-treetop",
    "builderId": "b-gera",
    "location": "Hinjewadi",
    "priceRange": "\u20b985.90 L - \u20b994.90 L",
    "exactPrice": "\u20b985.90 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Clv6QVczOiJD0bNhVQSdUoYvHCzVM92HasWLD3ET.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Clv6QVczOiJD0bNhVQSdUoYvHCzVM92HasWLD3ET.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/Ptw9XmFBU5IeYvADN8ruLftUvTCTToYOMifOkh2x.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/FmsooXsys3CQEXObVELeVcFw0pG4tD91LIBWTvhT.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/HTDeJtXzkfygVbiRVz95ojkcuQKU5PXVfRQ9NN4R.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/ImDiujOwFBjJL4Fonv1zzS6x5tRznB71FrHLlhmt.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Re1pQnaMMOCbS4ph0DQTOvgYzMeNJKjA3J8utYWQ.webp"
    ],
    "description": "Gera Joy On Treetop by Gera Developments represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b985.90 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner. Verified under MahaRERA registration P52100077635, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Conference Room",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Mini-Theater",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077635",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100077635",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Gera Joy On Treetop Hinjewadi",
      "Gera Joy On Treetop Pune price",
      "Gera Joy On Treetop floor plan",
      "Gera Joy On Treetop MahaRERA P52100077635",
      "Gera Developments projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Gera Joy On Treetop, Hinjewadi Pune by Gera Developments. Price starts \u20b985.90 L. 100% Zero Brokerage. Verified MahaRERA P52100077635. Floor plans &",
    "advancedConfigurations": [
      {
        "id": "cfg-gera-joy-on-treetop-1",
        "projectId": "p-gera-joy-on-treetop",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 753,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8590000.0,
        "pricePerSqft": 11407.7,
        "infraCharges": 257700.0,
        "clubhouseCharges": 171800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Clv6QVczOiJD0bNhVQSdUoYvHCzVM92HasWLD3ET.webp"
      },
      {
        "id": "cfg-gera-joy-on-treetop-2",
        "projectId": "p-gera-joy-on-treetop",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 753,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 8590000.0,
        "pricePerSqft": 11407.7,
        "infraCharges": 257700.0,
        "clubhouseCharges": 171800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/FmsooXsys3CQEXObVELeVcFw0pG4tD91LIBWTvhT.webp"
      },
      {
        "id": "cfg-gera-joy-on-treetop-3",
        "projectId": "p-gera-joy-on-treetop",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 855,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 9490000.0,
        "pricePerSqft": 11099.42,
        "infraCharges": 284700.0,
        "clubhouseCharges": 189800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/HTDeJtXzkfygVbiRVz95ojkcuQKU5PXVfRQ9NN4R.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Gera Joy On Treetop located?",
        "answer": "Gera Joy On Treetop is located at Hinjewadi Phase 3, Pimpri-Chinchwad, Pune, Maharashtra.."
      },
      {
        "question": "What is the price of Gera Joy On Treetop?",
        "answer": "Prices at Gera Joy On Treetop range from \u20b9 85.90 Lac \u2013 1.38 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Gera Joy On Treetop?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 753 \u2013 1,215 sq.ft."
      },
      {
        "question": "What is the RERA number of Gera Joy On Treetop?",
        "answer": "The RERA registration number of Gera Joy On Treetop is P52100077635."
      },
      {
        "question": "When is the possession of Gera Joy On Treetop?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Gera Joy On Treetop?",
        "answer": "Gera Joy On Treetop is developed by Gera Developers. The developer has been in real estate since 1970."
      },
      {
        "question": "How many floors does Gera Joy On Treetop have?",
        "answer": "The project has G+3P+33 floors. It is spread across 10.7 acres."
      },
      {
        "question": "What amenities does Gera Joy On Treetop offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner, Gym, Jogging Track and more."
      },
      {
        "question": "Which banks give home loans for Gera Joy On Treetop?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Gera Joy On Treetop?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35415.90523139877!2d73.66268659504249!3d18.585448142709588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb12c2bca185%3A0xb3879fc3627adcf4!2sPhase%203%2C%20Hinjawadi%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Hinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411057!5e0!3m2!1sen!2sin!4v1729593615491!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+3P+33 floors. It is spread across 10.7 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kasturi-apostrophe",
    "title": "Kasturi Apostrophe",
    "slug": "kasturi-apostrophe",
    "builderId": "b-kasturi",
    "location": "Hinjewadi",
    "priceRange": "\u20b988.00 L",
    "exactPrice": "\u20b988.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Kc9WrFfiUHLEzOWKPwF0yAt4AFwu6yogpoLOfgi1.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Kc9WrFfiUHLEzOWKPwF0yAt4AFwu6yogpoLOfgi1.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/kLEnSzR22c9MFpgzW1q1VBKhcmnWujmwF6wocGF3.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/6muqAWdRxTJUTEwNXQRGeBfgVIluqwTW2aig5Gly.webp",
      "https://keystoneliv.com/public/uploads/property/image (75).webp",
      "https://keystoneliv.com/public/uploads/property/kLEnSzR22c9MFpgzW1q1VBKhcmnWujmwF6wocGF3.webp",
      "https://keystoneliv.com/public/uploads/property/z1Cl4amxzGL9angDNIWfxgIYIvfKxamUuEWGUPd0.webp"
    ],
    "description": "Kasturi Apostrophe by Kasturi Housing represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b988.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100031595, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Cafeteria",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100031595",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100031595",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kasturi Apostrophe Hinjewadi",
      "Kasturi Apostrophe Pune price",
      "Kasturi Apostrophe floor plan",
      "Kasturi Apostrophe MahaRERA P52100031595",
      "Kasturi Housing projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kasturi Apostrophe, Hinjewadi Pune by Kasturi Housing. Price starts \u20b988.00 L. 100% Zero Brokerage. Verified MahaRERA P52100031595. Floor plans & br",
    "advancedConfigurations": [
      {
        "id": "cfg-kasturi-apostrophe-1",
        "projectId": "p-kasturi-apostrophe",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 710,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 12394.37,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Kc9WrFfiUHLEzOWKPwF0yAt4AFwu6yogpoLOfgi1.webp"
      },
      {
        "id": "cfg-kasturi-apostrophe-2",
        "projectId": "p-kasturi-apostrophe",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 710,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 12394.37,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (75).webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kasturi Apostrophe located?",
        "answer": "Kasturi Apostrophe is located at Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad."
      },
      {
        "question": "What is the price of Kasturi Apostrophe?",
        "answer": "Prices at Kasturi Apostrophe range from \u20b9 88.00 Lac (agreement value). Homes are available as 2 BHK."
      },
      {
        "question": "Which configurations are available at Kasturi Apostrophe?",
        "answer": "The project offers 2 BHK homes. Carpet areas range from 710 sq.ft."
      },
      {
        "question": "What is the RERA number of Kasturi Apostrophe?",
        "answer": "The RERA registration number of Kasturi Apostrophe is P52100031595."
      },
      {
        "question": "When is the possession of Kasturi Apostrophe?",
        "answer": "Possession is expected by Dec 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kasturi Apostrophe?",
        "answer": "Kasturi Apostrophe is developed by Kasturi. The developer has been in real estate since 1999."
      },
      {
        "question": "How many floors does Kasturi Apostrophe have?",
        "answer": "The project has G+22 floors. It is spread across 5.5 acres."
      },
      {
        "question": "What amenities does Kasturi Apostrophe offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Pet Park and more."
      },
      {
        "question": "Which banks give home loans for Kasturi Apostrophe?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kasturi Apostrophe?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.80929133927!2d73.68933347438524!3d18.582634667277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb206a8c98eb%3A0xa7f7de605c373e64!2sApostrophe%20Hinjawadi%20By%20Kasturi!5e0!3m2!1sen!2sin!4v1708362071754!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 5.5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kasturi-eon-homes",
    "title": "Kasturi Eon Homes",
    "slug": "kasturi-eon-homes",
    "builderId": "b-kasturi",
    "location": "Hinjewadi",
    "priceRange": "\u20b91.10 Cr - \u20b91.30 Cr",
    "exactPrice": "\u20b91.10 Cr",
    "configurations": [
      "2 BHK",
      "5 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/hktier2sHXP4K72r1KJuALKWEkO0q8C2EMl3ZeVO.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/hktier2sHXP4K72r1KJuALKWEkO0q8C2EMl3ZeVO.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/3dehuUq2Po5NML9mJlmIQO5xPl9IF2CTVSuFPjDO.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/EFCbCMcwQX5lBHlxlb1G1NTULKb5MjiKSxeS3S9s.webp",
      "https://keystoneliv.com/public/uploads/property/LlTxJHtDg73ynmCPMzwDQD1pDvn5dQpm7OIdijJ7.webp",
      "https://keystoneliv.com/public/uploads/property/CDMAPe6qKsbaiZoY5bJY1as78VedvW5RfxaRbaLD.webp",
      "https://keystoneliv.com/public/uploads/property/EUGfJFJxGbOyjIhZSzCYMF3RNiNiqBdv63H9ECdy.webp"
    ],
    "description": "Kasturi Eon Homes by Kasturi Housing represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 5 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.10 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Sports Courts. Verified under MahaRERA registration P52100026429, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Internet / WiFi",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100026429",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100026429",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kasturi Eon Homes Hinjewadi",
      "Kasturi Eon Homes Pune price",
      "Kasturi Eon Homes floor plan",
      "Kasturi Eon Homes MahaRERA P52100026429",
      "Kasturi Housing projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 5 BHK in Kasturi Eon Homes, Hinjewadi Pune by Kasturi Housing. Price starts \u20b91.10 Cr. 100% Zero Brokerage. Verified MahaRERA P52100026429. Floor plan",
    "advancedConfigurations": [
      {
        "id": "cfg-kasturi-eon-homes-1",
        "projectId": "p-kasturi-eon-homes",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 840,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 11000000.000000002,
        "pricePerSqft": 13095.24,
        "infraCharges": 330000.0,
        "clubhouseCharges": 220000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/hktier2sHXP4K72r1KJuALKWEkO0q8C2EMl3ZeVO.webp"
      },
      {
        "id": "cfg-kasturi-eon-homes-2",
        "projectId": "p-kasturi-eon-homes",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 840,
        "balconyArea": 67,
        "bathrooms": 2,
        "basePrice": 11000000.000000002,
        "pricePerSqft": 13095.24,
        "infraCharges": 330000.0,
        "clubhouseCharges": 220000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/EFCbCMcwQX5lBHlxlb1G1NTULKb5MjiKSxeS3S9s.webp"
      },
      {
        "id": "cfg-kasturi-eon-homes-3",
        "projectId": "p-kasturi-eon-homes",
        "name": "5 BHK Luxury Unit",
        "carpetArea": 973,
        "balconyArea": 77,
        "bathrooms": 4,
        "basePrice": 13000000.0,
        "pricePerSqft": 13360.74,
        "infraCharges": 390000.0,
        "clubhouseCharges": 260000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/LlTxJHtDg73ynmCPMzwDQD1pDvn5dQpm7OIdijJ7.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kasturi Eon Homes located?",
        "answer": "Kasturi Eon Homes is located at Pune, Maharashtra.."
      },
      {
        "question": "What is the price of Kasturi Eon Homes?",
        "answer": "Prices at Kasturi Eon Homes range from \u20b9 1.10 Cr \u2013 1.79 Cr (agreement value). Homes are available as 2, 2.5, 3 BHK."
      },
      {
        "question": "Which configurations are available at Kasturi Eon Homes?",
        "answer": "The project offers 2, 2.5, 3 BHK homes. Carpet areas range from 840 \u2013 1,150 sq.ft."
      },
      {
        "question": "What is the RERA number of Kasturi Eon Homes?",
        "answer": "The RERA registration number of Kasturi Eon Homes is P52100026429, P52100046679, P52100024680, P52100030732, P52100048176, P52100080318, P52100013714."
      },
      {
        "question": "When is the possession of Kasturi Eon Homes?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kasturi Eon Homes?",
        "answer": "Kasturi Eon Homes is developed by Kasturi. The developer has been in real estate since 1999."
      },
      {
        "question": "How many floors does Kasturi Eon Homes have?",
        "answer": "The project has 2B+P+22 floors. It is spread across 22 acres."
      },
      {
        "question": "What amenities does Kasturi Eon Homes offer?",
        "answer": "Amenities include Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Sports Courts, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Kasturi Eon Homes?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kasturi Eon Homes?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d484236.13917022356!2d73.862967!3d18.524616!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727432976396!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 2B+P+22 floors. It is spread across 22 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kasturi-the-balmoral-towers",
    "title": "Kasturi The Balmoral Towers",
    "slug": "kasturi-the-balmoral-towers",
    "builderId": "b-kasturi",
    "location": "Balewadi",
    "priceRange": "\u20b973.50 L - \u20b91.03 Cr",
    "exactPrice": "\u20b973.50 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "lat": 18.5772,
    "lng": 73.7715,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/f9GMlttRsqc66dOt6VQurFR4i48juAfzCiUaFmOs.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/YTtsmyn6nPe5Hzq7tFVwCPJn8iJkuXEa1g8tpTMs.webp",
      "https://keystoneliv.com/public/uploads/property/yiPGuOJ5Fhyx0YB3EzGkjiPFft7mIQsii4HFZdjW.webp",
      "https://keystoneliv.com/public/uploads/property/f9GMlttRsqc66dOt6VQurFR4i48juAfzCiUaFmOs.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/yiPGuOJ5Fhyx0YB3EzGkjiPFft7mIQsii4HFZdjW.webp"
    ],
    "description": "Kasturi The Balmoral Towers by Kasturi Housing represents modern residential excellence in Balewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b973.50 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym. Verified under MahaRERA registration P52100047008, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Washroom"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047008",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100047008",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kasturi The Balmoral Towers Balewadi",
      "Kasturi The Balmoral Towers Pune price",
      "Kasturi The Balmoral Towers floor plan",
      "Kasturi The Balmoral Towers MahaRERA P52100047008",
      "Kasturi Housing projects in Balewadi",
      "flats in Balewadi Pune",
      "buy 2 BHK in Balewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kasturi The Balmoral Towers, Balewadi Pune by Kasturi Housing. Price starts \u20b973.50 L. 100% Zero Brokerage. Verified MahaRERA P52100047008. F",
    "advancedConfigurations": [
      {
        "id": "cfg-kasturi-the-balmoral-towers-1",
        "projectId": "p-kasturi-the-balmoral-towers",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 7350000,
        "pricePerSqft": 9800,
        "infraCharges": 220500.0,
        "clubhouseCharges": 147000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp"
      },
      {
        "id": "cfg-kasturi-the-balmoral-towers-2",
        "projectId": "p-kasturi-the-balmoral-towers",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 10290000,
        "pricePerSqft": 9800,
        "infraCharges": 308700.0,
        "clubhouseCharges": 205800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kasturi The Balmoral Towers located?",
        "answer": "Kasturi The Balmoral Towers is located at Balewadi, Pune."
      },
      {
        "question": "What is the price of Kasturi The Balmoral Towers?",
        "answer": "Prices at Kasturi The Balmoral Towers range from \u20b9 2.03 Cr \u2013 7.51 Cr (agreement value). Homes are available as 3, 4, 4.5, 5.5 BHK."
      },
      {
        "question": "Which configurations are available at Kasturi The Balmoral Towers?",
        "answer": "The project offers 3, 4, 4.5, 5.5 BHK homes. Carpet areas range from 1,246 \u2013 3,742 sq.ft."
      },
      {
        "question": "What is the RERA number of Kasturi The Balmoral Towers?",
        "answer": "The RERA registration number of Kasturi The Balmoral Towers is P52100047008."
      },
      {
        "question": "When is the possession of Kasturi The Balmoral Towers?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kasturi The Balmoral Towers?",
        "answer": "Kasturi The Balmoral Towers is developed by Kasturi Builders. The developer has been in real estate since 1999."
      },
      {
        "question": "How many floors does Kasturi The Balmoral Towers have?",
        "answer": "The project has 2B+G+P+37 floors. It is spread across 5 acres."
      },
      {
        "question": "What amenities does Kasturi The Balmoral Towers offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Kasturi The Balmoral Towers?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kasturi The Balmoral Towers?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.8259493671694!2d73.77265187519316!3d18.581883982523642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b939b8fba43d%3A0xa83eaa1b934d907e!2sKasturi%20Balmoral%20Towers%2C%20Balewadi%2C%20Pune%2C%20Maharashtra%20411045!5e0!3m2!1sen!2sin!4v1750233936157!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 2B+G+P+37 floors. It is spread across 5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-mahindra-happinest",
    "title": "Mahindra Happinest \u2013 D,E,F,G",
    "slug": "mahindra-happinest",
    "builderId": "b-mahindra",
    "location": "Tathawade",
    "priceRange": "\u20b956.25 L - \u20b978.75 L",
    "exactPrice": "\u20b956.25 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/430sCsigr3Ej6G1NbTk8XPOQtxzzglMt7g2T8AOD.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/430sCsigr3Ej6G1NbTk8XPOQtxzzglMt7g2T8AOD.webp",
    "lat": 18.6186,
    "lng": 73.7533,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/AEV4Alkp45KgjGoLG3i2wOtoKOjfuY7T0aplVMNP.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/V4wSzfgdN4fSren4jb95rT0vdd4KSV49tNN9ZgvF.webp",
      "https://keystoneliv.com/public/uploads/property/image (2).webp",
      "https://keystoneliv.com/public/uploads/property/aU0av4R1IIxdmArOOo0urjB7axIHKZzbIOiGbl5G.webp",
      "https://keystoneliv.com/public/uploads/property/G8iCil7CfCUQv3jH8sFJxdrhZovPC6sPFiRqwXjG.webp",
      "https://keystoneliv.com/public/uploads/property/AEV4Alkp45KgjGoLG3i2wOtoKOjfuY7T0aplVMNP.webp"
    ],
    "description": "Mahindra Happinest \u2013 D,E,F,G by Mahindra Lifespaces represents modern residential excellence in Tathawade, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b956.25 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100028049, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "High Ceiling Height",
      "Intercom",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Pantry Area",
      "Parking",
      "Power Back Up",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Tathawade near Metro station and IT corridors",
      "Official MahaRERA verified project P52100028049",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100028049",
    "pricePerSqft": 7500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Mahindra Happinest \u2013 D,E,F,G Tathawade",
      "Mahindra Happinest \u2013 D,E,F,G Pune price",
      "Mahindra Happinest \u2013 D,E,F,G floor plan",
      "Mahindra Happinest \u2013 D,E,F,G MahaRERA P52100028049",
      "Mahindra Lifespaces projects in Tathawade",
      "flats in Tathawade Pune",
      "buy 2 BHK in Tathawade",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Mahindra Happinest \u2013 D,E,F,G, Tathawade Pune by Mahindra Lifespaces. Price starts \u20b956.25 L. 100% Zero Brokerage. Verified MahaRERA P52100028",
    "advancedConfigurations": [
      {
        "id": "cfg-mahindra-happinest-1",
        "projectId": "p-mahindra-happinest",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 5625000,
        "pricePerSqft": 7500,
        "infraCharges": 168750.0,
        "clubhouseCharges": 112500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/430sCsigr3Ej6G1NbTk8XPOQtxzzglMt7g2T8AOD.webp"
      },
      {
        "id": "cfg-mahindra-happinest-2",
        "projectId": "p-mahindra-happinest",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 7875000,
        "pricePerSqft": 7500,
        "infraCharges": 236250.0,
        "clubhouseCharges": 157500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/430sCsigr3Ej6G1NbTk8XPOQtxzzglMt7g2T8AOD.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Mahindra Happinest \u2013 D,E,F,G located?",
        "answer": "Mahindra Happinest \u2013 D,E,F,G is located at Tathawade, Pimpri-Chinchwad, Maharashtra."
      },
      {
        "question": "What is the price of Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "Prices at Mahindra Happinest \u2013 D,E,F,G range from \u20b9 45.00 Lac (agreement value). Homes are available as 1 BHK."
      },
      {
        "question": "Which configurations are available at Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "The project offers 1 BHK homes. Carpet areas range from 470 sq.ft."
      },
      {
        "question": "What is the RERA number of Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "The RERA registration number of Mahindra Happinest \u2013 D,E,F,G is P52100028049/P52100045388."
      },
      {
        "question": "When is the possession of Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "Possession is expected by Jun 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "Mahindra Happinest \u2013 D,E,F,G is developed by Mahindra Lifespaces. The developer has been in real estate since 1994."
      },
      {
        "question": "How many floors does Mahindra Happinest \u2013 D,E,F,G have?",
        "answer": "The project has B+G+22 floors. It is spread across 7 acres."
      },
      {
        "question": "What amenities does Mahindra Happinest \u2013 D,E,F,G offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Mahindra Happinest \u2013 D,E,F,G?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.7743944062513!2d73.7433101!3d18.6292145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b996a82dc273%3A0x4bd01fabf83d5cf7!2sMahindra%20Happinest%20Tathawade%20%E2%80%93%20by%20Mahindra%20Lifespaces!5e0!3m2!1sen!2sin!4v1695033408261!5m2!1sen!2sin",
    "floorsAndAcres": "The project has B+G+22 floors. It is spread across 7 acres.",
    "city": "Pune"
  },
  {
    "id": "p-mahindra-citadel",
    "title": "Mahindra Citadel",
    "slug": "mahindra-citadel",
    "builderId": "b-mahindra",
    "location": "Pimpri Chinchwad",
    "priceRange": "\u20b988.00 L - \u20b91.21 Cr",
    "exactPrice": "\u20b988.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/7R1KntHtZGpJcf1ID73ZhW6Bmbi6t69x1dDPXrCk.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/7R1KntHtZGpJcf1ID73ZhW6Bmbi6t69x1dDPXrCk.webp",
    "lat": 18.6298,
    "lng": 73.7997,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/k0DKtRzvGyo3jMbyF5lDnXQFFY421WAIwDkXgXvJ.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image - 2026-06-02T151837.150.webp",
      "https://keystoneliv.com/public/uploads/property/image - 2026-06-02T151842.182.webp",
      "https://keystoneliv.com/public/uploads/property/k0DKtRzvGyo3jMbyF5lDnXQFFY421WAIwDkXgXvJ.webp",
      "https://keystoneliv.com/public/uploads/property/ljCflOeKdGaCwzeaJCHwGzZzLQOn3TbJUc7voNB7.webp"
    ],
    "description": "Mahindra Citadel by Mahindra Lifespaces represents modern residential excellence in Pimpri Chinchwad, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b988.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100047656, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Pantry Area",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047656",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100047656",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Mahindra Citadel Pimpri Chinchwad",
      "Mahindra Citadel Pune price",
      "Mahindra Citadel floor plan",
      "Mahindra Citadel MahaRERA P52100047656",
      "Mahindra Lifespaces projects in Pimpri Chinchwad",
      "flats in Pimpri Chinchwad Pune",
      "buy 2 BHK in Pimpri Chinchwad",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Mahindra Citadel, Pimpri Chinchwad Pune by Mahindra Lifespaces. Price starts \u20b988.00 L. 100% Zero Brokerage. Verified MahaRERA P52100047656. ",
    "advancedConfigurations": [
      {
        "id": "cfg-mahindra-citadel-1",
        "projectId": "p-mahindra-citadel",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 731,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 12038.3,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/7R1KntHtZGpJcf1ID73ZhW6Bmbi6t69x1dDPXrCk.webp"
      },
      {
        "id": "cfg-mahindra-citadel-2",
        "projectId": "p-mahindra-citadel",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 731,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 8800000.0,
        "pricePerSqft": 12038.3,
        "infraCharges": 264000.0,
        "clubhouseCharges": 176000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image - 2026-06-02T151837.150.webp"
      },
      {
        "id": "cfg-mahindra-citadel-3",
        "projectId": "p-mahindra-citadel",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 978,
        "balconyArea": 78,
        "bathrooms": 3,
        "basePrice": 12100000.0,
        "pricePerSqft": 12372.19,
        "infraCharges": 363000.0,
        "clubhouseCharges": 242000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image - 2026-06-02T151842.182.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Mahindra Citadel located?",
        "answer": "Mahindra Citadel is located at JR87+M88 CTS 4854, next to ICC Tech Park, Vallabh Nagar, Pimpri Colony, Pune, Maharashtra."
      },
      {
        "question": "What is the price of Mahindra Citadel?",
        "answer": "Prices at Mahindra Citadel range from \u20b9 88.00 Lac \u2013 1.21 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Mahindra Citadel?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 731 \u2013 978 sq.ft."
      },
      {
        "question": "What is the RERA number of Mahindra Citadel?",
        "answer": "The RERA registration number of Mahindra Citadel is P52100047656."
      },
      {
        "question": "When is the possession of Mahindra Citadel?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Mahindra Citadel?",
        "answer": "Mahindra Citadel is developed by Mahindra Lifespaces. The developer has been in real estate since 1994."
      },
      {
        "question": "How many floors does Mahindra Citadel have?",
        "answer": "The project has 6 Level Parking : + 22 Floor floors. It is spread across 11.5 acres."
      },
      {
        "question": "What amenities does Mahindra Citadel offer?",
        "answer": "Amenities include Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library, Open Gym and more."
      },
      {
        "question": "Which banks give home loans for Mahindra Citadel?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Mahindra Citadel?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0567159034736!2d73.813239!3d18.616518599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b97395ba9695%3A0x9f96b3b1facf7ca7!2sMahindra%20Citadel!5e0!3m2!1sen!2sin!4v1695036573003!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 6 Level Parking : + 22 Floor floors. It is spread across 11.5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-mahindra-kharadi",
    "title": "Mahindra Kharadi",
    "slug": "mahindra-kharadi",
    "builderId": "b-mahindra",
    "location": "Kharadi",
    "priceRange": "\u20b998.00 L - \u20b91.10 Cr",
    "exactPrice": "\u20b998.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/3msy8g3YfuGeOTEPUH6aUTf87xT71BtV95I63SR5.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3msy8g3YfuGeOTEPUH6aUTf87xT71BtV95I63SR5.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/iTt80ob6Q847pdqJo6QxQYX9jjyINihAoQvfFwpB.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/T2hW8rsrM5jiIRNVy8F3OvaLwxpanGya500Zymno.webp",
      "https://keystoneliv.com/public/uploads/property/10EDARqP5amjPabTAp0nc33Wef1F7CrMp37tQhSP.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/CRFwCIeZDlS2wIt2FCjHtVPHQkc9Bh2S4PO5qe0k.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/QbhYUbAfFrqgKArEMujIovb4jaOm9oYk4M7GmYWA.webp"
    ],
    "description": "Mahindra Kharadi by Mahindra Lifespaces represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b998.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100055161, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Internet / WiFi",
      "Lift",
      "Municipal Corporation",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Private Garden/ Terrace",
      "RWH",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100055161",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100055161",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Mahindra Kharadi Kharadi",
      "Mahindra Kharadi Pune price",
      "Mahindra Kharadi floor plan",
      "Mahindra Kharadi MahaRERA P52100055161",
      "Mahindra Lifespaces projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Mahindra Kharadi, Kharadi Pune by Mahindra Lifespaces. Price starts \u20b998.00 L. 100% Zero Brokerage. Verified MahaRERA P52100055161. Floor plans & br",
    "advancedConfigurations": [
      {
        "id": "cfg-mahindra-kharadi-1",
        "projectId": "p-mahindra-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 769,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 9800000.0,
        "pricePerSqft": 12743.82,
        "infraCharges": 294000.0,
        "clubhouseCharges": 196000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/3msy8g3YfuGeOTEPUH6aUTf87xT71BtV95I63SR5.webp"
      },
      {
        "id": "cfg-mahindra-kharadi-2",
        "projectId": "p-mahindra-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 769,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 9800000.0,
        "pricePerSqft": 12743.82,
        "infraCharges": 294000.0,
        "clubhouseCharges": 196000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/T2hW8rsrM5jiIRNVy8F3OvaLwxpanGya500Zymno.webp"
      },
      {
        "id": "cfg-mahindra-kharadi-3",
        "projectId": "p-mahindra-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 867,
        "balconyArea": 69,
        "bathrooms": 2,
        "basePrice": 11000000.000000002,
        "pricePerSqft": 12687.43,
        "infraCharges": 330000.0,
        "clubhouseCharges": 220000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/10EDARqP5amjPabTAp0nc33Wef1F7CrMp37tQhSP.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Mahindra Kharadi located?",
        "answer": "Mahindra Kharadi is located at Kharadi, Pune, Maharashtra.."
      },
      {
        "question": "What is the price of Mahindra Kharadi?",
        "answer": "Prices at Mahindra Kharadi range from \u20b9 98.00 Lac \u2013 2.12 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Mahindra Kharadi?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 769 \u2013 1,599 sq.ft."
      },
      {
        "question": "What is the RERA number of Mahindra Kharadi?",
        "answer": "The RERA registration number of Mahindra Kharadi is P52100055161, P52100055162, P52100078592."
      },
      {
        "question": "When is the possession of Mahindra Kharadi?",
        "answer": "Possession is expected by Dec 2029, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Mahindra Kharadi?",
        "answer": "Mahindra Kharadi is developed by Mahindra Lifespaces. The developer has been in real estate since 1994."
      },
      {
        "question": "How many floors does Mahindra Kharadi have?",
        "answer": "The project has 32 floors. It is spread across 5.4 acres."
      },
      {
        "question": "What amenities does Mahindra Kharadi offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for Mahindra Kharadi?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Mahindra Kharadi?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6140167791295!2d73.96832737423802!3d18.546336668388612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c30016a18a23%3A0xd5b654801aaa6334!2sMahindra%20Lifespace%20Kharadi!5e0!3m2!1sen!2sin!4v1706871796923!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 32 floors. It is spread across 5.4 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kumar-parth-tower",
    "title": "Kumar Parth Tower",
    "slug": "kumar-parth-tower",
    "builderId": "b-kumar",
    "location": "Baner",
    "priceRange": "\u20b91.04 Cr",
    "exactPrice": "\u20b91.04 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/zoLAkypqIHabTujIT7jLRaHsLqSvtkc6H9LUm5nB.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/zoLAkypqIHabTujIT7jLRaHsLqSvtkc6H9LUm5nB.webp",
    "lat": 18.559,
    "lng": 73.7868,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/1hrp8Z2H37hCLmuwIlHXP5eaxifc5wiCotUH5cVM.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/1hrp8Z2H37hCLmuwIlHXP5eaxifc5wiCotUH5cVM.webp",
      "https://keystoneliv.com/public/uploads/property/3sc0FvlkSeRB8AoYR0SxcEtb6SinhQcIhFDRcaiY.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Ti87vi13I6M0IRd0wREubyKxdc8T4Nkn8g7wE844.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/AyxlzWYoKGc6CUULimaJkjmBUMC6UAe7CwEFP02O.webp"
    ],
    "description": "Kumar Parth Tower by Kumar Properties represents modern residential excellence in Baner, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.04 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Cafeteria, Fitness Corner, Jogging Track, Kids Play Area, Party Lawn, Pet Park. Verified under MahaRERA registration P52100047987, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Cafeteria",
      "Fitness Corner",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gas Stove",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "Parking",
      "Pet Friendly",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047987",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100047987",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kumar Parth Tower Baner",
      "Kumar Parth Tower Pune price",
      "Kumar Parth Tower floor plan",
      "Kumar Parth Tower MahaRERA P52100047987",
      "Kumar Properties projects in Baner",
      "flats in Baner Pune",
      "buy 2 BHK in Baner",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kumar Parth Tower, Baner Pune by Kumar Properties. Price starts \u20b91.04 Cr. 100% Zero Brokerage. Verified MahaRERA P52100047987. Floor plans & brochu",
    "advancedConfigurations": [
      {
        "id": "cfg-kumar-parth-tower-1",
        "projectId": "p-kumar-parth-tower",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 774,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 10400000.0,
        "pricePerSqft": 13436.69,
        "infraCharges": 312000.0,
        "clubhouseCharges": 208000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/zoLAkypqIHabTujIT7jLRaHsLqSvtkc6H9LUm5nB.webp"
      },
      {
        "id": "cfg-kumar-parth-tower-2",
        "projectId": "p-kumar-parth-tower",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 774,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 10400000.0,
        "pricePerSqft": 13436.69,
        "infraCharges": 312000.0,
        "clubhouseCharges": 208000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/1hrp8Z2H37hCLmuwIlHXP5eaxifc5wiCotUH5cVM.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kumar Parth Tower located?",
        "answer": "Kumar Parth Tower is located at Baner, Pune."
      },
      {
        "question": "What is the price of Kumar Parth Tower?",
        "answer": "Prices at Kumar Parth Tower range from \u20b9 1.04 Cr \u2013 1.90 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Kumar Parth Tower?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 774 \u2013 1,500 sq.ft."
      },
      {
        "question": "What is the RERA number of Kumar Parth Tower?",
        "answer": "The RERA registration number of Kumar Parth Tower is P52100047987."
      },
      {
        "question": "When is the possession of Kumar Parth Tower?",
        "answer": "Possession is expected by Mar 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kumar Parth Tower?",
        "answer": "Kumar Parth Tower is developed by Kumar Properties. The developer has been in real estate since 1966."
      },
      {
        "question": "How many floors does Kumar Parth Tower have?",
        "answer": "The project has G+22 floors. It is spread across 2 acres."
      },
      {
        "question": "What amenities does Kumar Parth Tower offer?",
        "answer": "Amenities include Cafeteria, Fitness Corner, Jogging Track, Kids Play Area, Party Lawn, Pet Park, Sports Courts, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Kumar Parth Tower?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kumar Parth Tower?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.761554596447!2d73.75052225011335!3d18.554174146367494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe9172c216d%3A0xd9b43426a82a33f1!2sKumar%20Parth%20Towers!5e0!3m2!1sen!2sin!4v1708360772924!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 2 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kumar-palmspring-towers",
    "title": "Kumar Palmspring Towers",
    "slug": "kumar-palmspring-towers",
    "builderId": "b-kumar",
    "location": "Undri",
    "priceRange": "\u20b982.38 L - \u20b991.77 L",
    "exactPrice": "\u20b982.38 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/ByYt4cju0mAa243xiYGkSFBnG4OPoJfO0NqnVL4K.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/ByYt4cju0mAa243xiYGkSFBnG4OPoJfO0NqnVL4K.webp",
    "lat": 18.4608,
    "lng": 73.9099,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/8KKQNl9pXNBZ6numJWe8UNpGknzVelIS0Qg1KIWp.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/uROGhbrnCt3JOwg4l6nWrWbJXNmwQf1k5AM7ItuC.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Ti87vi13I6M0IRd0wREubyKxdc8T4Nkn8g7wE844.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/AyxlzWYoKGc6CUULimaJkjmBUMC6UAe7CwEFP02O.webp",
      "https://keystoneliv.com/public/uploads/property/MePjpM2o9KQjJ6xTMr6aFlHFsoAzGOb15Qt42xOo.webp"
    ],
    "description": "Kumar Palmspring Towers by Kumar Properties represents modern residential excellence in Undri, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b982.38 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100048329, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Cafeteria",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "FAN",
      "Gas Pipeline",
      "Gas Stove",
      "Gated Society",
      "Lift",
      "Parking",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Undri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048329",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100048329",
    "pricePerSqft": 6600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kumar Palmspring Towers Undri",
      "Kumar Palmspring Towers Pune price",
      "Kumar Palmspring Towers floor plan",
      "Kumar Palmspring Towers MahaRERA P52100048329",
      "Kumar Properties projects in Undri",
      "flats in Undri Pune",
      "buy 2 BHK in Undri",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kumar Palmspring Towers, Undri Pune by Kumar Properties. Price starts \u20b982.38 L. 100% Zero Brokerage. Verified MahaRERA P52100048329. Floor plans & ",
    "advancedConfigurations": [
      {
        "id": "cfg-kumar-palmspring-towers-1",
        "projectId": "p-kumar-palmspring-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 763,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 8238000.0,
        "pricePerSqft": 10796.85,
        "infraCharges": 247140.0,
        "clubhouseCharges": 164760.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ByYt4cju0mAa243xiYGkSFBnG4OPoJfO0NqnVL4K.webp"
      },
      {
        "id": "cfg-kumar-palmspring-towers-2",
        "projectId": "p-kumar-palmspring-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 763,
        "balconyArea": 61,
        "bathrooms": 2,
        "basePrice": 8238000.0,
        "pricePerSqft": 10796.85,
        "infraCharges": 247140.0,
        "clubhouseCharges": 164760.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/uROGhbrnCt3JOwg4l6nWrWbJXNmwQf1k5AM7ItuC.webp"
      },
      {
        "id": "cfg-kumar-palmspring-towers-3",
        "projectId": "p-kumar-palmspring-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 850,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 9177000.0,
        "pricePerSqft": 10796.47,
        "infraCharges": 275310.0,
        "clubhouseCharges": 183540.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Ti87vi13I6M0IRd0wREubyKxdc8T4Nkn8g7wE844.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kumar Palmspring Towers located?",
        "answer": "Kumar Palmspring Towers is located at NIBM Rd, Undri, Pune."
      },
      {
        "question": "What is the price of Kumar Palmspring Towers?",
        "answer": "Prices at Kumar Palmspring Towers range from \u20b9 82.38 Lac \u2013 1.19 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Kumar Palmspring Towers?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 763 \u2013 1,103 sq.ft."
      },
      {
        "question": "What is the RERA number of Kumar Palmspring Towers?",
        "answer": "The RERA registration number of Kumar Palmspring Towers is P52100048329."
      },
      {
        "question": "When is the possession of Kumar Palmspring Towers?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kumar Palmspring Towers?",
        "answer": "Kumar Palmspring Towers is developed by Kumar Properties. The developer has been in real estate since 1966."
      },
      {
        "question": "How many floors does Kumar Palmspring Towers have?",
        "answer": "The project has G+35 floors. It is spread across 9.5 acres."
      },
      {
        "question": "What amenities does Kumar Palmspring Towers offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Kumar Palmspring Towers?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kumar Palmspring Towers?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.452370525493!2d73.90478987519027!3d18.463157482619305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb330ed0269f%3A0x6098e1c4bf1c5b2e!2sKumar%20Palmspring%20Towers!5e0!3m2!1sen!2sin!4v1710328946764!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+35 floors. It is spread across 9.5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kumar-codename-centrestage",
    "title": "Kumar Codename Centrestage \u2013 0",
    "slug": "kumar-codename-centrestage",
    "builderId": "b-kumar",
    "location": "Hinjewadi",
    "priceRange": "\u20b964.00 L",
    "exactPrice": "\u20b964.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/9QSvdpBVQcRA9ABgjNfHXdLD8GpbbzQXsW9OlEb7.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/9QSvdpBVQcRA9ABgjNfHXdLD8GpbbzQXsW9OlEb7.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/vX15hcMcA7HmLsjKOvGMFWIWDMSWoPEmMPAAVkXy.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/kQtc9sF6Owjfz21mFq09aaMEMBhYacxWFpT43wfC.webp",
      "https://keystoneliv.com/public/uploads/property/Ptw9XmFBU5IeYvADN8ruLftUvTCTToYOMifOkh2x.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Ptw9XmFBU5IeYvADN8ruLftUvTCTToYOMifOkh2x.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/Tj3y8qp05piS5DyKdZNR5CmqntpkgK0jXLq6DkBE.webp"
    ],
    "description": "Kumar Codename Centrestage \u2013 0 by Kumar Properties represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b964.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library. Verified under MahaRERA registration P52100052912, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052912",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100052912",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kumar Codename Centrestage \u2013 0 Hinjewadi",
      "Kumar Codename Centrestage \u2013 0 Pune price",
      "Kumar Codename Centrestage \u2013 0 floor plan",
      "Kumar Codename Centrestage \u2013 0 MahaRERA P52100052912",
      "Kumar Properties projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kumar Codename Centrestage \u2013 0, Hinjewadi Pune by Kumar Properties. Price starts \u20b964.00 L. 100% Zero Brokerage. Verified MahaRERA P52100052912. Flo",
    "advancedConfigurations": [
      {
        "id": "cfg-kumar-codename-centrestage-1",
        "projectId": "p-kumar-codename-centrestage",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 658,
        "balconyArea": 52,
        "bathrooms": 2,
        "basePrice": 6400000.0,
        "pricePerSqft": 9726.44,
        "infraCharges": 192000.0,
        "clubhouseCharges": 128000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/9QSvdpBVQcRA9ABgjNfHXdLD8GpbbzQXsW9OlEb7.webp"
      },
      {
        "id": "cfg-kumar-codename-centrestage-2",
        "projectId": "p-kumar-codename-centrestage",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 658,
        "balconyArea": 52,
        "bathrooms": 2,
        "basePrice": 6400000.0,
        "pricePerSqft": 9726.44,
        "infraCharges": 192000.0,
        "clubhouseCharges": 128000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/kQtc9sF6Owjfz21mFq09aaMEMBhYacxWFpT43wfC.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kumar Codename Centrestage \u2013 0 located?",
        "answer": "Kumar Codename Centrestage \u2013 0 is located at Phase 3, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra.."
      },
      {
        "question": "What is the price of Kumar Codename Centrestage \u2013 0?",
        "answer": "Prices at Kumar Codename Centrestage \u2013 0 range from \u20b9 64.00 Lac (agreement value). Homes are available as 2 BHK."
      },
      {
        "question": "Which configurations are available at Kumar Codename Centrestage \u2013 0?",
        "answer": "The project offers 2 BHK homes. Carpet areas range from 658 sq.ft."
      },
      {
        "question": "What is the RERA number of Kumar Codename Centrestage \u2013 0?",
        "answer": "The RERA registration number of Kumar Codename Centrestage \u2013 0 is P52100052912."
      },
      {
        "question": "When is the possession of Kumar Codename Centrestage \u2013 0?",
        "answer": "Possession is expected by Dec 2029, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kumar Codename Centrestage \u2013 0?",
        "answer": "Kumar Codename Centrestage \u2013 0 is developed by Kumar Realty & Mega Polis. The developer has been in real estate since 1966."
      },
      {
        "question": "How many floors does Kumar Codename Centrestage \u2013 0 have?",
        "answer": "The project has 20 floors. It is spread across 2.18 acres."
      },
      {
        "question": "What amenities does Kumar Codename Centrestage \u2013 0 offer?",
        "answer": "Amenities include Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Library, Party Lawn, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for Kumar Codename Centrestage \u2013 0?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kumar Codename Centrestage \u2013 0?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9367278504596!2d73.6847895739372!3d18.576891067453865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb3289264bb7%3A0x874c9604997814ff!2sKumar%20Codename%20Centrestage%20-%20Megapolis!5e0!3m2!1sen!2sin!4v1719315122854!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 20 floors. It is spread across 2.18 acres.",
    "city": "Pune"
  },
  {
    "id": "p-bramhacorp-hues-of-sky",
    "title": "Bramhacorp Hues Of Sky",
    "slug": "bramhacorp-hues-of-sky",
    "builderId": "b-bramhacorp",
    "location": "Camp",
    "priceRange": "\u20b91.56 Cr - \u20b91.92 Cr",
    "exactPrice": "\u20b91.56 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/e1Yisy3QN19cU13poeL9foZvCwjxU3tEAiuqtDxW.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/e1Yisy3QN19cU13poeL9foZvCwjxU3tEAiuqtDxW.webp",
    "lat": 18.5133,
    "lng": 73.8798,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/V81P09pIBB1Q3TvXBzhzsky9XZxJ856qFhhVs6Ai.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/0Z27YlfNSec1eITGBHLNBI0TyDkXT9a9CEJJh9g0.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/AfsSTe0EQ7zfqS2GArpbdZatnkAy4aZEzuTs16Jd.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/erVeCsyBq9xP98CDIxaoBvpB9TucxbfYYskXd5u8.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/8bVjxHl1Pm4gu6j8jiPOrVTXerCTsKss9eG2yUak.webp"
    ],
    "description": "Bramhacorp Hues Of Sky by BramhaCorp represents modern residential excellence in Camp, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.56 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Fitness Corner, Gym, Jogging Track, Kids Play Area, Mini-Theater. Verified under MahaRERA registration P52100051537, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Mini-Theater",
      "Pet Park",
      "Reflexology",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Camp near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051537",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100051537",
    "pricePerSqft": 13500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Bramhacorp Hues Of Sky Camp",
      "Bramhacorp Hues Of Sky Pune price",
      "Bramhacorp Hues Of Sky floor plan",
      "Bramhacorp Hues Of Sky MahaRERA P52100051537",
      "BramhaCorp projects in Camp",
      "flats in Camp Pune",
      "buy 2 BHK in Camp",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Bramhacorp Hues Of Sky, Camp Pune by BramhaCorp. Price starts \u20b91.56 Cr. 100% Zero Brokerage. Verified MahaRERA P52100051537. Floor plans & brochure",
    "advancedConfigurations": [
      {
        "id": "cfg-bramhacorp-hues-of-sky-1",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 700,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 15600000.0,
        "pricePerSqft": 22285.71,
        "infraCharges": 468000.0,
        "clubhouseCharges": 312000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/e1Yisy3QN19cU13poeL9foZvCwjxU3tEAiuqtDxW.webp"
      },
      {
        "id": "cfg-bramhacorp-hues-of-sky-2",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 700,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 15600000.0,
        "pricePerSqft": 22285.71,
        "infraCharges": 468000.0,
        "clubhouseCharges": 312000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/0Z27YlfNSec1eITGBHLNBI0TyDkXT9a9CEJJh9g0.webp"
      },
      {
        "id": "cfg-bramhacorp-hues-of-sky-3",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 729,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 16200000.0,
        "pricePerSqft": 22222.22,
        "infraCharges": 486000.0,
        "clubhouseCharges": 324000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/AfsSTe0EQ7zfqS2GArpbdZatnkAy4aZEzuTs16Jd.webp"
      },
      {
        "id": "cfg-bramhacorp-hues-of-sky-4",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 735,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 16400000.0,
        "pricePerSqft": 22312.93,
        "infraCharges": 492000.0,
        "clubhouseCharges": 328000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/erVeCsyBq9xP98CDIxaoBvpB9TucxbfYYskXd5u8.webp"
      },
      {
        "id": "cfg-bramhacorp-hues-of-sky-5",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 736,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 16400000.0,
        "pricePerSqft": 22282.61,
        "infraCharges": 492000.0,
        "clubhouseCharges": 328000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/8bVjxHl1Pm4gu6j8jiPOrVTXerCTsKss9eG2yUak.webp"
      },
      {
        "id": "cfg-bramhacorp-hues-of-sky-6",
        "projectId": "p-bramhacorp-hues-of-sky",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 861,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 19200000.0,
        "pricePerSqft": 22299.65,
        "infraCharges": 576000.0,
        "clubhouseCharges": 384000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/V81P09pIBB1Q3TvXBzhzsky9XZxJ856qFhhVs6Ai.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Bramhacorp Hues Of Sky located?",
        "answer": "Bramhacorp Hues Of Sky is located at Camp, Pune."
      },
      {
        "question": "What is the price of Bramhacorp Hues Of Sky?",
        "answer": "Prices at Bramhacorp Hues Of Sky range from \u20b9 1.56 Cr \u2013 4.17 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Bramhacorp Hues Of Sky?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 700 \u2013 1,901 sq.ft."
      },
      {
        "question": "What is the RERA number of Bramhacorp Hues Of Sky?",
        "answer": "The RERA registration number of Bramhacorp Hues Of Sky is P52100051537."
      },
      {
        "question": "When is the possession of Bramhacorp Hues Of Sky?",
        "answer": "Possession is expected by Dec 2029, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Bramhacorp Hues Of Sky?",
        "answer": "Bramhacorp Hues Of Sky is developed by BramhaCorp Limited. The developer has been in real estate since 2012."
      },
      {
        "question": "How many floors does Bramhacorp Hues Of Sky have?",
        "answer": "The project has 35 floors. It is spread across 2 acres."
      },
      {
        "question": "What amenities does Bramhacorp Hues Of Sky offer?",
        "answer": "Amenities include Amphitheater, Fitness Corner, Gym, Jogging Track, Kids Play Area, Mini-Theater, Pet Park, Reflexology and more."
      },
      {
        "question": "Which banks give home loans for Bramhacorp Hues Of Sky?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Bramhacorp Hues Of Sky?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.034485271487!2d73.87617589999999!3d18.5273437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1e28f227645%3A0x769b8fc7fa7fd5fc!2sHues%20of%20Sky%20by%20BramhaCorp!5e0!3m2!1sen!2sin!4v1747127208668!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 35 floors. It is spread across 2 acres.",
    "city": "Pune"
  },
  {
    "id": "p-bramhacorp-townhouse",
    "title": "Bramhacorp Townhouse",
    "slug": "bramhacorp-townhouse",
    "builderId": "b-bramhacorp",
    "location": "Balewadi",
    "priceRange": "\u20b973.50 L - \u20b91.03 Cr",
    "exactPrice": "\u20b973.50 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp",
    "lat": 18.5772,
    "lng": 73.7715,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/yiPGuOJ5Fhyx0YB3EzGkjiPFft7mIQsii4HFZdjW.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/Vz9ORh5u4GK56Sv3npOGctyGF11WSrX1fY8kE3UC.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/cfRu71vAvcCfj79N64dTM20dXnH55jXdd9LunD32.webp",
      "https://keystoneliv.com/public/uploads/property/yiPGuOJ5Fhyx0YB3EzGkjiPFft7mIQsii4HFZdjW.webp",
      "https://keystoneliv.com/public/uploads/property/f9GMlttRsqc66dOt6VQurFR4i48juAfzCiUaFmOs.webp"
    ],
    "description": "Bramhacorp Townhouse by BramhaCorp represents modern residential excellence in Balewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b973.50 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Jogging Track, Kids Play Area, 24*7 Water, Gas Pipeline, Lift, Parking. Verified under MahaRERA registration P52100045228, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Jogging Track",
      "Kids Play Area",
      "24*7 Water",
      "Gas Pipeline",
      "Lift",
      "Parking"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100045228",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100045228",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Bramhacorp Townhouse Balewadi",
      "Bramhacorp Townhouse Pune price",
      "Bramhacorp Townhouse floor plan",
      "Bramhacorp Townhouse MahaRERA P52100045228",
      "BramhaCorp projects in Balewadi",
      "flats in Balewadi Pune",
      "buy 2 BHK in Balewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Bramhacorp Townhouse, Balewadi Pune by BramhaCorp. Price starts \u20b973.50 L. 100% Zero Brokerage. Verified MahaRERA P52100045228. Floor plans &",
    "advancedConfigurations": [
      {
        "id": "cfg-bramhacorp-townhouse-1",
        "projectId": "p-bramhacorp-townhouse",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 7350000,
        "pricePerSqft": 9800,
        "infraCharges": 220500.0,
        "clubhouseCharges": 147000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp"
      },
      {
        "id": "cfg-bramhacorp-townhouse-2",
        "projectId": "p-bramhacorp-townhouse",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 10290000,
        "pricePerSqft": 9800,
        "infraCharges": 308700.0,
        "clubhouseCharges": 205800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Bramhacorp Townhouse located?",
        "answer": "Bramhacorp Townhouse is located at Balewadi, Pune."
      },
      {
        "question": "What is the price of Bramhacorp Townhouse?",
        "answer": "Prices at Bramhacorp Townhouse range from \u20b9 35.00 Lac (agreement value). Homes are available as 1, 1 RK BHK."
      },
      {
        "question": "Which configurations are available at Bramhacorp Townhouse?",
        "answer": "The project offers 1, 1 RK BHK homes. Carpet areas range from 203 \u2013 351 sq.ft."
      },
      {
        "question": "What is the RERA number of Bramhacorp Townhouse?",
        "answer": "The RERA registration number of Bramhacorp Townhouse is P52100045228, P52100045518."
      },
      {
        "question": "When is the possession of Bramhacorp Townhouse?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Bramhacorp Townhouse?",
        "answer": "Bramhacorp Townhouse is developed by Bramhacorp Builders. The developer has been in real estate since 1982."
      },
      {
        "question": "How many floors does Bramhacorp Townhouse have?",
        "answer": "The project has 5 floors. It is spread across 0.37 acres."
      },
      {
        "question": "What amenities does Bramhacorp Townhouse offer?",
        "answer": "Amenities include Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Bramhacorp Townhouse?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Bramhacorp Townhouse?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7951703253043!2d73.7637369!3d18.583271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91633c77d83%3A0x2aae9ac6df6194fe!2sTownHouse%20by%20BramhaCorp!5e0!3m2!1sen!2sin!4v1754571528144!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 5 floors. It is spread across 0.37 acres.",
    "city": "Pune"
  },
  {
    "id": "p-bramhacorp-august-towers",
    "title": "Bramhacorp August Towers",
    "slug": "bramhacorp-august-towers",
    "builderId": "b-bramhacorp",
    "location": "Kalyani Nagar",
    "priceRange": "\u20b957.70 L - \u20b957.90 L",
    "exactPrice": "\u20b957.70 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/cfRu71vAvcCfj79N64dTM20dXnH55jXdd9LunD32.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/cfRu71vAvcCfj79N64dTM20dXnH55jXdd9LunD32.webp",
    "lat": 18.5484,
    "lng": 73.9025,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/gu9bQayoV6LdnMMIPWE4YCnur8rK2HqDUWUnOUJr.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/YH1pP1UAcemKGCEerJi9kTbgFzEbhLPsQgDgzJmR.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp",
      "https://keystoneliv.com/public/uploads/property/NS4WdVkoynSB2vYI9ZOVKqtmDrrNMzNEok3Twc3f.webp",
      "https://keystoneliv.com/public/uploads/property/goBwy7cz2g5PqAH9tZTLyxfBkF71AqkrMWUZNNAw.webp"
    ],
    "description": "Bramhacorp August Towers by BramhaCorp represents modern residential excellence in Kalyani Nagar, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b957.70 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Gym, Jogging Track, Kids Play Area, Swimming Pool. Verified under MahaRERA registration P52100048195, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Swimming Pool",
      "Yoga Zone",
      "Gated Society",
      "Lift",
      "Parking",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kalyani Nagar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048195",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100048195",
    "pricePerSqft": 14000,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Bramhacorp August Towers Kalyani Nagar",
      "Bramhacorp August Towers Pune price",
      "Bramhacorp August Towers floor plan",
      "Bramhacorp August Towers MahaRERA P52100048195",
      "BramhaCorp projects in Kalyani Nagar",
      "flats in Kalyani Nagar Pune",
      "buy 2 BHK in Kalyani Nagar",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Bramhacorp August Towers, Kalyani Nagar Pune by BramhaCorp. Price starts \u20b957.70 L. 100% Zero Brokerage. Verified MahaRERA P52100048195. Floor plans",
    "advancedConfigurations": [
      {
        "id": "cfg-bramhacorp-august-towers-1",
        "projectId": "p-bramhacorp-august-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 484,
        "balconyArea": 38,
        "bathrooms": 2,
        "basePrice": 5770000.0,
        "pricePerSqft": 11921.49,
        "infraCharges": 173100.0,
        "clubhouseCharges": 115400.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/cfRu71vAvcCfj79N64dTM20dXnH55jXdd9LunD32.webp"
      },
      {
        "id": "cfg-bramhacorp-august-towers-2",
        "projectId": "p-bramhacorp-august-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 577,
        "balconyArea": 46,
        "bathrooms": 2,
        "basePrice": 5770000.0,
        "pricePerSqft": 10000.0,
        "infraCharges": 173100.0,
        "clubhouseCharges": 115400.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/YH1pP1UAcemKGCEerJi9kTbgFzEbhLPsQgDgzJmR.webp"
      },
      {
        "id": "cfg-bramhacorp-august-towers-3",
        "projectId": "p-bramhacorp-august-towers",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 579,
        "balconyArea": 46,
        "bathrooms": 2,
        "basePrice": 5790000.0,
        "pricePerSqft": 10000.0,
        "infraCharges": 173700.0,
        "clubhouseCharges": 115800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/k9Cpqd4cLxkrt0r65YKq9o0IWCPpqcToOcSn1QD4.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Bramhacorp August Towers located?",
        "answer": "Bramhacorp August Towers is located at Kalyani Nagar, Pune."
      },
      {
        "question": "What is the price of Bramhacorp August Towers?",
        "answer": "Prices at Bramhacorp August Towers range from \u20b9 57.70 Lac \u2013 57.90 Lac (agreement value). Homes are available as 2 BHK."
      },
      {
        "question": "Which configurations are available at Bramhacorp August Towers?",
        "answer": "The project offers 2 BHK homes. Carpet areas range from 484 \u2013 579 sq.ft."
      },
      {
        "question": "What is the RERA number of Bramhacorp August Towers?",
        "answer": "The RERA registration number of Bramhacorp August Towers is P52100048195."
      },
      {
        "question": "When is the possession of Bramhacorp August Towers?",
        "answer": "Possession is expected by Dec 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Bramhacorp August Towers?",
        "answer": "Bramhacorp August Towers is developed by Bramhacorp Builders. The developer has been in real estate since 1982."
      },
      {
        "question": "How many floors does Bramhacorp August Towers have?",
        "answer": "The project has 34 floors."
      },
      {
        "question": "What amenities does Bramhacorp August Towers offer?",
        "answer": "Amenities include Banquet Hall, Club house, Gym, Jogging Track, Kids Play Area, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Bramhacorp August Towers?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Bramhacorp August Towers?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6231174170243!2d73.91781171081593!3d18.545925782479824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c167ab02cf05%3A0x94a92d1dc9f8816e!2sAugust%20Towers%20by%20BramhaCorp!5e0!3m2!1sen!2sin!4v1756986658660!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 34 floors.",
    "city": "Pune"
  },
  {
    "id": "p-amanora-city-rise",
    "title": "Amanora City Rise",
    "slug": "amanora-city-rise",
    "builderId": "b-amanora",
    "location": "Kothrud",
    "priceRange": "\u20b993.75 L - \u20b91.31 Cr",
    "exactPrice": "\u20b993.75 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/ozTB4XODdBQeqGDmSjJ9UEPdq2M8vHjJj5zZK3pB.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/ozTB4XODdBQeqGDmSjJ9UEPdq2M8vHjJj5zZK3pB.webp",
    "lat": 18.5074,
    "lng": 73.8077,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/ozTB4XODdBQeqGDmSjJ9UEPdq2M8vHjJj5zZK3pB.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/y23eQolQreeZxbOCvNAmA6XXJRnsVLTyeeJxCyN9.webp",
      "https://keystoneliv.com/public/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp"
    ],
    "description": "Amanora City Rise by Amanora Park Town represents modern residential excellence in Kothrud, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b993.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Gym, Kids Play Area, Swimming Pool, Yoga Zone, Gated Society, Security System. Verified under MahaRERA registration P52100051462, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Gym",
      "Kids Play Area",
      "Swimming Pool",
      "Yoga Zone",
      "Gated Society",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051462",
      "Allotment directly from Amanora Park Town developer inventory"
    ],
    "reraId": "P52100051462",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Amanora City Rise Kothrud",
      "Amanora City Rise Pune price",
      "Amanora City Rise floor plan",
      "Amanora City Rise MahaRERA P52100051462",
      "Amanora Park Town projects in Kothrud",
      "flats in Kothrud Pune",
      "buy 2 BHK in Kothrud",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Amanora City Rise, Kothrud Pune by Amanora Park Town. Price starts \u20b993.75 L. 100% Zero Brokerage. Verified MahaRERA P52100051462. Floor plan",
    "advancedConfigurations": [
      {
        "id": "cfg-amanora-city-rise-1",
        "projectId": "p-amanora-city-rise",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 9375000,
        "pricePerSqft": 12500,
        "infraCharges": 281250.0,
        "clubhouseCharges": 187500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ozTB4XODdBQeqGDmSjJ9UEPdq2M8vHjJj5zZK3pB.webp"
      },
      {
        "id": "cfg-amanora-city-rise-2",
        "projectId": "p-amanora-city-rise",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 13125000,
        "pricePerSqft": 12500,
        "infraCharges": 393750.0,
        "clubhouseCharges": 262500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ozTB4XODdBQeqGDmSjJ9UEPdq2M8vHjJj5zZK3pB.webp"
      }
    ],
    "city": "Pune"
  },
  {
    "id": "p-joyville-annexe",
    "title": "Joyville Hadapsar Annexe",
    "slug": "joyville-annexe",
    "builderId": "b-shapoorji",
    "location": "Hadapsar",
    "priceRange": "\u20b946.50 L - \u20b91.06 Cr",
    "exactPrice": "\u20b946.50 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/naU6Ftht3sLHPndXJ1BDOd0MBFugUyMu0B32FZyO.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/naU6Ftht3sLHPndXJ1BDOd0MBFugUyMu0B32FZyO.webp",
    "lat": 18.5089,
    "lng": 73.9259,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/c9W9pcE1Zsuj3kbjYK3vVR94GONg6rObDY6jLi2f.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/Fb2rGxFdFT1LLFje4Aj4P3GzmiJzikdzBYMoWc5d.webp",
      "https://keystoneliv.com/public/uploads/property/image (17).webp",
      "https://keystoneliv.com/public/uploads/property/image (18).webp",
      "https://keystoneliv.com/public/uploads/property/image (19).webp",
      "https://keystoneliv.com/public/uploads/property/image (20).webp",
      "https://keystoneliv.com/public/uploads/property/image (21).webp",
      "https://keystoneliv.com/public/uploads/property/HNvTc3nVkYmFjSbMvb2D2yLmiDCkAwa79zcs9svU.webp",
      "https://keystoneliv.com/public/uploads/property/bS9eQ4haaMridWuxHQiTNBS2XRx3BSSXIqsk3oVh.webp"
    ],
    "description": "Joyville annexe by Joyville by Shapoorji Pallonji represents modern residential excellence in Hadapsar, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 1 BHK, 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b946.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100026785, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hadapsar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100026785",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100026785",
    "pricePerSqft": 8400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Joyville annexe Hadapsar",
      "Joyville annexe Pune price",
      "Joyville annexe floor plan",
      "Joyville annexe MahaRERA P52100026785",
      "Joyville by Shapoorji Pallonji projects in Hadapsar",
      "flats in Hadapsar Pune",
      "buy 2 BHK in Hadapsar",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK, 3 BHK in Joyville annexe, Hadapsar Pune by Joyville by Shapoorji Pallonji. Price starts \u20b946.00 L. 100% Zero Brokerage. Verified MahaRERA P5210",
    "advancedConfigurations": [
      {
        "id": "cfg-joyville-annexe-1",
        "projectId": "p-joyville-annexe",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 393,
        "balconyArea": 31,
        "bathrooms": 1,
        "basePrice": 4600000.0,
        "pricePerSqft": 11704.83,
        "infraCharges": 138000.0,
        "clubhouseCharges": 92000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/naU6Ftht3sLHPndXJ1BDOd0MBFugUyMu0B32FZyO.webp"
      },
      {
        "id": "cfg-joyville-annexe-2",
        "projectId": "p-joyville-annexe",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 393,
        "balconyArea": 31,
        "bathrooms": 1,
        "basePrice": 4600000.0,
        "pricePerSqft": 11704.83,
        "infraCharges": 138000.0,
        "clubhouseCharges": 92000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/HNvTc3nVkYmFjSbMvb2D2yLmiDCkAwa79zcs9svU.webp"
      },
      {
        "id": "cfg-joyville-annexe-3",
        "projectId": "p-joyville-annexe",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 589,
        "balconyArea": 47,
        "bathrooms": 2,
        "basePrice": 6600000.0,
        "pricePerSqft": 11205.43,
        "infraCharges": 198000.0,
        "clubhouseCharges": 132000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/bS9eQ4haaMridWuxHQiTNBS2XRx3BSSXIqsk3oVh.webp"
      },
      {
        "id": "cfg-joyville-annexe-4",
        "projectId": "p-joyville-annexe",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 670,
        "balconyArea": 53,
        "bathrooms": 2,
        "basePrice": 8600000.0,
        "pricePerSqft": 12835.82,
        "infraCharges": 258000.0,
        "clubhouseCharges": 172000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (17).webp"
      },
      {
        "id": "cfg-joyville-annexe-5",
        "projectId": "p-joyville-annexe",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 815,
        "balconyArea": 65,
        "bathrooms": 3,
        "basePrice": 10600000.0,
        "pricePerSqft": 13006.13,
        "infraCharges": 318000.0,
        "clubhouseCharges": 212000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (18).webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Joyville annexe located?",
        "answer": "Joyville annexe is located at Near Shewalewadi, Solapur - Pune Hwy, Hadapsar, Pune, Maharashtra."
      },
      {
        "question": "What is the price of Joyville annexe?",
        "answer": "Prices at Joyville annexe range from \u20b9 46.00 Lac \u2013 1.30 Cr (agreement value). Homes are available as 1, 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Joyville annexe?",
        "answer": "The project offers 1, 2, 3 BHK homes. Carpet areas range from 393 \u2013 1,043 sq.ft."
      },
      {
        "question": "What is the RERA number of Joyville annexe?",
        "answer": "The RERA registration number of Joyville annexe is P52100026785."
      },
      {
        "question": "When is the possession of Joyville annexe?",
        "answer": "Possession is expected by Dec 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Joyville annexe?",
        "answer": "Joyville annexe is developed by Shapoorji Pallonji Group. The developer has been in real estate since 1865."
      },
      {
        "question": "How many floors does Joyville annexe have?",
        "answer": "The project has 2 Level Park+ 22 Floors floors. It is spread across 21 acres."
      },
      {
        "question": "What amenities does Joyville annexe offer?",
        "answer": "Amenities include Amphitheater, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for Joyville annexe?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Joyville annexe?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.721582136912!2d73.96605381014707!3d18.49626636984484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3e3be3a9e55%3A0x42a0d369b2fda6a5!2sJoyville%20Hadapsar!5e0!3m2!1sen!2sin!4v1696577320793!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 2 Level Park+ 22 Floors floors. It is spread across 21 acres.",
    "city": "Pune"
  },
  {
    "id": "p-joyville-celestia",
    "title": "Joyville Celestia",
    "slug": "joyville-celestia",
    "builderId": "b-shapoorji",
    "location": "Shewalewadi",
    "priceRange": "\u20b977.00 L - \u20b91.16 Cr",
    "exactPrice": "\u20b977.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/DHi0IYRMCmrf7yoxp0cK8Vp96P1ccxV3V6g85gdz.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/DHi0IYRMCmrf7yoxp0cK8Vp96P1ccxV3V6g85gdz.webp",
    "lat": 18.495,
    "lng": 73.961,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/QUSiXbX1yIv3u1F0efgnLHyJgKsJfu0DIDG1r7Wi.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/I5MMUKviSMXlXfrqof2dWrQiVvLepViAgf0WOxpJ.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/CSQsZy9Fpj5xj4HayoHzAI3hgUTUYgJL0S4owv16.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/RWIi7BIWUPzANdMmWgQwl2LXS8AnA1T678vBPvo7.webp",
      "https://keystoneliv.com/public/uploads/property/nWQwPeaSVaBSmMahbWW0cXS3uJVKN70QzqslX4fM.webp"
    ],
    "description": "Joyville Celestia by Joyville by Shapoorji Pallonji represents modern residential excellence in Shewalewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b977.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track. Verified under MahaRERA registration P52100053165, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Internet / WiFi",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System",
      "Waste Disposal",
      "Water purifier"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Shewalewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100053165",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100053165",
    "pricePerSqft": 6700,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Joyville Celestia Shewalewadi",
      "Joyville Celestia Pune price",
      "Joyville Celestia floor plan",
      "Joyville Celestia MahaRERA P52100053165",
      "Joyville by Shapoorji Pallonji projects in Shewalewadi",
      "flats in Shewalewadi Pune",
      "buy 2 BHK in Shewalewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Joyville Celestia, Shewalewadi Pune by Joyville by Shapoorji Pallonji. Price starts \u20b977.00 L. 100% Zero Brokerage. Verified MahaRERA P521000",
    "advancedConfigurations": [
      {
        "id": "cfg-joyville-celestia-1",
        "projectId": "p-joyville-celestia",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 589,
        "balconyArea": 47,
        "bathrooms": 2,
        "basePrice": 7700000.0,
        "pricePerSqft": 13073.01,
        "infraCharges": 231000.0,
        "clubhouseCharges": 154000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/DHi0IYRMCmrf7yoxp0cK8Vp96P1ccxV3V6g85gdz.webp"
      },
      {
        "id": "cfg-joyville-celestia-2",
        "projectId": "p-joyville-celestia",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 589,
        "balconyArea": 47,
        "bathrooms": 2,
        "basePrice": 7700000.0,
        "pricePerSqft": 13073.01,
        "infraCharges": 231000.0,
        "clubhouseCharges": 154000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/I5MMUKviSMXlXfrqof2dWrQiVvLepViAgf0WOxpJ.webp"
      },
      {
        "id": "cfg-joyville-celestia-3",
        "projectId": "p-joyville-celestia",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 593,
        "balconyArea": 47,
        "bathrooms": 2,
        "basePrice": 7700000.0,
        "pricePerSqft": 12984.82,
        "infraCharges": 231000.0,
        "clubhouseCharges": 154000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/CSQsZy9Fpj5xj4HayoHzAI3hgUTUYgJL0S4owv16.webp"
      },
      {
        "id": "cfg-joyville-celestia-4",
        "projectId": "p-joyville-celestia",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 602,
        "balconyArea": 48,
        "bathrooms": 2,
        "basePrice": 7800000.0,
        "pricePerSqft": 12956.81,
        "infraCharges": 234000.0,
        "clubhouseCharges": 156000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/RWIi7BIWUPzANdMmWgQwl2LXS8AnA1T678vBPvo7.webp"
      },
      {
        "id": "cfg-joyville-celestia-5",
        "projectId": "p-joyville-celestia",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 707,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 9000000.0,
        "pricePerSqft": 12729.84,
        "infraCharges": 270000.0,
        "clubhouseCharges": 180000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/nWQwPeaSVaBSmMahbWW0cXS3uJVKN70QzqslX4fM.webp"
      },
      {
        "id": "cfg-joyville-celestia-6",
        "projectId": "p-joyville-celestia",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 936,
        "balconyArea": 74,
        "bathrooms": 3,
        "basePrice": 11599999.999999998,
        "pricePerSqft": 12393.16,
        "infraCharges": 348000.0,
        "clubhouseCharges": 232000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/QUSiXbX1yIv3u1F0efgnLHyJgKsJfu0DIDG1r7Wi.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Joyville Celestia located?",
        "answer": "Joyville Celestia is located at Sky - Luxe Edition Village: Shevalwadi, Taluka."
      },
      {
        "question": "What is the price of Joyville Celestia?",
        "answer": "Prices at Joyville Celestia range from \u20b9 77.00 Lac \u2013 1.76 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Joyville Celestia?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 589 \u2013 1,270 sq.ft."
      },
      {
        "question": "What is the RERA number of Joyville Celestia?",
        "answer": "The RERA registration number of Joyville Celestia is P52100053165."
      },
      {
        "question": "When is the possession of Joyville Celestia?",
        "answer": "Possession is expected by Mar 2028, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Joyville Celestia?",
        "answer": "Joyville Celestia is developed by Shapoorji Pallonji Group. The developer has been in real estate since 1865."
      },
      {
        "question": "How many floors does Joyville Celestia have?",
        "answer": "The project has G+20 floors. It is spread across 9 acres."
      },
      {
        "question": "What amenities does Joyville Celestia offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for Joyville Celestia?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Joyville Celestia?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10493.454172925729!2d73.95253674499257!3d18.49364602652375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3a5659c8057%3A0x1e6795c701631bc0!2sJoyville%20Celestia%20by%20Shapoorji%20Pallonji!5e0!3m2!1sen!2sin!4v1708527089942!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+20 floors. It is spread across 9 acres.",
    "city": "Pune"
  },
  {
    "id": "p-joyville-sensorium",
    "title": "Joyville Sensorium",
    "slug": "joyville-sensorium",
    "builderId": "b-shapoorji",
    "location": "Hinjewadi",
    "priceRange": "\u20b976.00 L - \u20b91.29 Cr",
    "exactPrice": "\u20b976.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nmPzChK44V7G0iiNdq6UHi8c9Yqa7WJWDA6qDGUb.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image (85).webp",
      "https://keystoneliv.com/public/uploads/property/image (86).webp",
      "https://keystoneliv.com/public/uploads/property/image (87).webp",
      "https://keystoneliv.com/public/uploads/property/nmPzChK44V7G0iiNdq6UHi8c9Yqa7WJWDA6qDGUb.webp"
    ],
    "description": "Joyville Sensorium by Joyville by Shapoorji Pallonji represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b990.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100049547, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Cafeteria",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Pet Park",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gas Stove",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Waste Disposal",
      "Water purifier"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100049547",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100027234",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Joyville Sensorium Hinjewadi",
      "Joyville Sensorium Pune price",
      "Joyville Sensorium floor plan",
      "Joyville Sensorium MahaRERA P52100049547",
      "Joyville by Shapoorji Pallonji projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Joyville Sensorium, Hinjewadi Pune by Joyville by Shapoorji Pallonji. Price starts \u20b990.00 L. 100% Zero Brokerage. Verified MahaRERA P5210004",
    "advancedConfigurations": [
      {
        "id": "cfg-joyville-sensorium-1",
        "projectId": "p-joyville-sensorium",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 697,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 9000000.0,
        "pricePerSqft": 12912.48,
        "infraCharges": 270000.0,
        "clubhouseCharges": 180000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp"
      },
      {
        "id": "cfg-joyville-sensorium-2",
        "projectId": "p-joyville-sensorium",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 697,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 9000000.0,
        "pricePerSqft": 12912.48,
        "infraCharges": 270000.0,
        "clubhouseCharges": 180000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (85).webp"
      },
      {
        "id": "cfg-joyville-sensorium-3",
        "projectId": "p-joyville-sensorium",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 715,
        "balconyArea": 57,
        "bathrooms": 2,
        "basePrice": 9500000.0,
        "pricePerSqft": 13286.71,
        "infraCharges": 285000.0,
        "clubhouseCharges": 190000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (86).webp"
      },
      {
        "id": "cfg-joyville-sensorium-4",
        "projectId": "p-joyville-sensorium",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 973,
        "balconyArea": 77,
        "bathrooms": 3,
        "basePrice": 12900000.0,
        "pricePerSqft": 13257.97,
        "infraCharges": 387000.0,
        "clubhouseCharges": 258000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (87).webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Joyville Sensorium located?",
        "answer": "Joyville Sensorium is located at 101,Phase, Joyville Shapoorji Housing Pvt. Ltd (Plot 2 Survey Nos 98,99 and, 2, Road, off Maan Road, Hinjawadi, Pune, Maharashtra.."
      },
      {
        "question": "What is the price of Joyville Sensorium?",
        "answer": "Prices at Joyville Sensorium range from \u20b9 90.00 Lac \u2013 2.33 Cr (agreement value). Homes are available as 2, 3, 5, 4 BHK."
      },
      {
        "question": "Which configurations are available at Joyville Sensorium?",
        "answer": "The project offers 2, 3, 5, 4 BHK homes. Carpet areas range from 697 \u2013 1,756 sq.ft."
      },
      {
        "question": "What is the RERA number of Joyville Sensorium?",
        "answer": "The RERA registration number of Joyville Sensorium is P52100049547."
      },
      {
        "question": "When is the possession of Joyville Sensorium?",
        "answer": "Possession is expected by Jun 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Joyville Sensorium?",
        "answer": "Joyville Sensorium is developed by Shapoorji Pallonji Group. The developer has been in real estate since 1865."
      },
      {
        "question": "How many floors does Joyville Sensorium have?",
        "answer": "The project has G+22 floors. It is spread across 10.9 acres."
      },
      {
        "question": "What amenities does Joyville Sensorium offer?",
        "answer": "Amenities include Banquet Hall, Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Pet Park and more."
      },
      {
        "question": "Which banks give home loans for Joyville Sensorium?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Joyville Sensorium?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.075208380779!2d73.71930637438493!3d18.57064776764426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb602855eb8b%3A0xdff2ff146b3bb55d!2sSensorium%20by%20Joyville%2C%20Shapoorji%20Pallonji!5e0!3m2!1sen!2sin!4v1708529717548!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 10.9 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kohinoor-kharadi",
    "title": "Kohinoor Kharadi \u2013 5",
    "slug": "kohinoor-kharadi",
    "builderId": "b-kohinoor",
    "location": "Kharadi",
    "priceRange": "\u20b999.00 L - \u20b91.25 Cr",
    "exactPrice": "\u20b999.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/azNbmpmBCobhupU4s5tfh6nAZzKEPgYRISRlQhNa.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/azNbmpmBCobhupU4s5tfh6nAZzKEPgYRISRlQhNa.webp",
    "lat": 18.5514,
    "lng": 73.9349,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/ugU2mSy6BbqdiWgd8BB1RXRyQnRK5gqL2KtUlB81.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/3heONbZszM6nV1D5cGGWNerwu18xb77gy1pOfeUA.webp",
      "https://keystoneliv.com/public/uploads/property/Yh0MhqcWjQpkHVPH3DjAEWr0zVrTSWadIZUjfemG.webp",
      "https://keystoneliv.com/public/uploads/property/ugU2mSy6BbqdiWgd8BB1RXRyQnRK5gqL2KtUlB81.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/MzzWe9NoesjKW5vXHcTkKqIpofYGW80l6x5m4rGA.webp"
    ],
    "description": "Kohinoor Kharadi \u2013 5 by Kohinoor Group represents modern residential excellence in Kharadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b999.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Conference Room, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100065519, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Conference Room",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "Municipal Corporation",
      "No open drainage around",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Private Garden/ Terrace",
      "RWH",
      "Security System",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100065519",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100065519",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kohinoor Kharadi \u2013 5 Kharadi",
      "Kohinoor Kharadi \u2013 5 Pune price",
      "Kohinoor Kharadi \u2013 5 floor plan",
      "Kohinoor Kharadi \u2013 5 MahaRERA P52100065519",
      "Kohinoor Group projects in Kharadi",
      "flats in Kharadi Pune",
      "buy 2 BHK in Kharadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kohinoor Kharadi \u2013 5, Kharadi Pune by Kohinoor Group. Price starts \u20b999.00 L. 100% Zero Brokerage. Verified MahaRERA P52100065519. Floor plan",
    "advancedConfigurations": [
      {
        "id": "cfg-kohinoor-kharadi-1",
        "projectId": "p-kohinoor-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 730,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 9900000.0,
        "pricePerSqft": 13561.64,
        "infraCharges": 297000.0,
        "clubhouseCharges": 198000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/azNbmpmBCobhupU4s5tfh6nAZzKEPgYRISRlQhNa.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-2",
        "projectId": "p-kohinoor-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 730,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 9900000.0,
        "pricePerSqft": 13561.64,
        "infraCharges": 297000.0,
        "clubhouseCharges": 198000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ugU2mSy6BbqdiWgd8BB1RXRyQnRK5gqL2KtUlB81.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-3",
        "projectId": "p-kohinoor-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 10300000.0,
        "pricePerSqft": 13733.33,
        "infraCharges": 309000.0,
        "clubhouseCharges": 206000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/3heONbZszM6nV1D5cGGWNerwu18xb77gy1pOfeUA.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-4",
        "projectId": "p-kohinoor-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 800,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 10900000.000000002,
        "pricePerSqft": 13625.0,
        "infraCharges": 327000.0,
        "clubhouseCharges": 218000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Yh0MhqcWjQpkHVPH3DjAEWr0zVrTSWadIZUjfemG.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-5",
        "projectId": "p-kohinoor-kharadi",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 820,
        "balconyArea": 65,
        "bathrooms": 2,
        "basePrice": 11100000.000000002,
        "pricePerSqft": 13536.59,
        "infraCharges": 333000.0,
        "clubhouseCharges": 222000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/MzzWe9NoesjKW5vXHcTkKqIpofYGW80l6x5m4rGA.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-6",
        "projectId": "p-kohinoor-kharadi",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 880,
        "balconyArea": 70,
        "bathrooms": 3,
        "basePrice": 12000000.0,
        "pricePerSqft": 13636.36,
        "infraCharges": 360000.0,
        "clubhouseCharges": 240000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/sq9UXhpZWpFavb6sZTY5JiP6bAJWQXymSdDXjV4e.webp"
      },
      {
        "id": "cfg-kohinoor-kharadi-7",
        "projectId": "p-kohinoor-kharadi",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 910,
        "balconyArea": 72,
        "bathrooms": 3,
        "basePrice": 12500000.0,
        "pricePerSqft": 13736.26,
        "infraCharges": 375000.0,
        "clubhouseCharges": 250000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/9fgd1dc8OsLM6h4q6lT60MbRpIA4vwCadScNvqMA.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kohinoor Kharadi \u2013 5 located?",
        "answer": "Kohinoor Kharadi \u2013 5 is located at Kharadi , Pune.."
      },
      {
        "question": "What is the price of Kohinoor Kharadi \u2013 5?",
        "answer": "Prices at Kohinoor Kharadi \u2013 5 range from \u20b9 99.00 Lac \u2013 1.42 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Kohinoor Kharadi \u2013 5?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 730 \u2013 1,050 sq.ft."
      },
      {
        "question": "What is the RERA number of Kohinoor Kharadi \u2013 5?",
        "answer": "The RERA registration number of Kohinoor Kharadi \u2013 5 is A09200023052."
      },
      {
        "question": "When is the possession of Kohinoor Kharadi \u2013 5?",
        "answer": "Possession is expected by Jul 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kohinoor Kharadi \u2013 5?",
        "answer": "Kohinoor Kharadi \u2013 5 is developed by Kohinoor Group. The developer has been in real estate since 1992."
      },
      {
        "question": "How many floors does Kohinoor Kharadi \u2013 5 have?",
        "answer": "The project has 27 floors. It is spread across 5 acres."
      },
      {
        "question": "What amenities does Kohinoor Kharadi \u2013 5 offer?",
        "answer": "Amenities include Banquet Hall, Club house, Conference Room, Gym, Jogging Track, Kids Play Area, Open Gym, Party Lawn and more."
      },
      {
        "question": "Which banks give home loans for Kohinoor Kharadi \u2013 5?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kohinoor Kharadi \u2013 5?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.036578619302!2d73.96836537393715!3d18.572389567591774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3093399ff03%3A0xace789327cddabd5!2sKohinoor%20Kaleido%20-%20New%20Kharadi!5e0!3m2!1sen!2sin!4v1707118259502!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 27 floors. It is spread across 5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kohinoor-shangrila",
    "title": "Kohinoor Shangrila",
    "slug": "kohinoor-shangrila",
    "builderId": "b-kohinoor",
    "location": "Pimpri Chinchwad",
    "priceRange": "\u20b995.53 L - \u20b91.05 Cr",
    "exactPrice": "\u20b995.53 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/btjPpfNMHbOIxRQfCF21p9nMLhQHiuzRce3XKq9N.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/btjPpfNMHbOIxRQfCF21p9nMLhQHiuzRce3XKq9N.webp",
    "lat": 18.6298,
    "lng": 73.7997,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/APk42V9TjCaPnBVvOLDnR7iyoKZq3cs68aY7ykXZ.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/GcpcnUI99erftS3CNypd2i5txdra0VlJzf8WCtWN.webp",
      "https://keystoneliv.com/public/uploads/property/image (94).webp",
      "https://keystoneliv.com/public/uploads/property/image (95).webp",
      "https://keystoneliv.com/public/uploads/property/image (96).webp",
      "https://keystoneliv.com/public/uploads/property/APk42V9TjCaPnBVvOLDnR7iyoKZq3cs68aY7ykXZ.webp"
    ],
    "description": "Kohinoor Shangrila by Kohinoor Group represents modern residential excellence in Pimpri Chinchwad, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b995.53 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym. Verified under MahaRERA registration P52100030688, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gas Stove",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System",
      "Washroom"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100030688",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100030688",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kohinoor Shangrila Pimpri Chinchwad",
      "Kohinoor Shangrila Pune price",
      "Kohinoor Shangrila floor plan",
      "Kohinoor Shangrila MahaRERA P52100030688",
      "Kohinoor Group projects in Pimpri Chinchwad",
      "flats in Pimpri Chinchwad Pune",
      "buy 2 BHK in Pimpri Chinchwad",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kohinoor Shangrila, Pimpri Chinchwad Pune by Kohinoor Group. Price starts \u20b995.53 L. 100% Zero Brokerage. Verified MahaRERA P52100030688. Floor plan",
    "advancedConfigurations": [
      {
        "id": "cfg-kohinoor-shangrila-1",
        "projectId": "p-kohinoor-shangrila",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 706,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 9553000.0,
        "pricePerSqft": 13531.16,
        "infraCharges": 286590.0,
        "clubhouseCharges": 191060.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/btjPpfNMHbOIxRQfCF21p9nMLhQHiuzRce3XKq9N.webp"
      },
      {
        "id": "cfg-kohinoor-shangrila-2",
        "projectId": "p-kohinoor-shangrila",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 706,
        "balconyArea": 56,
        "bathrooms": 2,
        "basePrice": 9553000.0,
        "pricePerSqft": 13531.16,
        "infraCharges": 286590.0,
        "clubhouseCharges": 191060.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (94).webp"
      },
      {
        "id": "cfg-kohinoor-shangrila-3",
        "projectId": "p-kohinoor-shangrila",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 776,
        "balconyArea": 62,
        "bathrooms": 2,
        "basePrice": 10500000.0,
        "pricePerSqft": 13530.93,
        "infraCharges": 315000.0,
        "clubhouseCharges": 210000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (95).webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kohinoor Shangrila located?",
        "answer": "Kohinoor Shangrila is located at 201/1, PCMC Link Rd, Bhat Nagar, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411017."
      },
      {
        "question": "What is the price of Kohinoor Shangrila?",
        "answer": "Prices at Kohinoor Shangrila range from \u20b9 95.53 Lac \u2013 1.45 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Kohinoor Shangrila?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 706 \u2013 1,210 sq.ft."
      },
      {
        "question": "What is the RERA number of Kohinoor Shangrila?",
        "answer": "The RERA registration number of Kohinoor Shangrila is P52100030688."
      },
      {
        "question": "When is the possession of Kohinoor Shangrila?",
        "answer": "Possession is expected by Dec 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kohinoor Shangrila?",
        "answer": "Kohinoor Shangrila is developed by Kohinoor Group. The developer has been in real estate since 1992."
      },
      {
        "question": "How many floors does Kohinoor Shangrila have?",
        "answer": "The project has G+22 floors. It is spread across 3.92 acres."
      },
      {
        "question": "What amenities does Kohinoor Shangrila offer?",
        "answer": "Amenities include Banquet Hall, Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Pet Park, Sports Courts and more."
      },
      {
        "question": "Which banks give home loans for Kohinoor Shangrila?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kohinoor Shangrila?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.817037666211!2d73.79681017519422!3d18.627297382487097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b90989b0f33f%3A0x37b820a8056086cd!2sKohinoor%20Shangrila%20Phase%20-II!5e0!3m2!1sen!2sin!4v1708773652582!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 3.92 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kohinoor-central-park",
    "title": "Kohinoor Central Park \u2013 0",
    "slug": "kohinoor-central-park",
    "builderId": "b-kohinoor",
    "location": "Hinjewadi",
    "priceRange": "\u20b980.50 L - \u20b91.03 Cr",
    "exactPrice": "\u20b980.50 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/dRkDonPR1eXndCLucTp17YruBhz2634DUGQ5X3YG.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dRkDonPR1eXndCLucTp17YruBhz2634DUGQ5X3YG.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/9fgd1dc8OsLM6h4q6lT60MbRpIA4vwCadScNvqMA.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/0BgGeUEWnpaENDzgtjJ9AphTNfjVqgQpmqF57pB9.webp",
      "https://keystoneliv.com/public/uploads/property/TAsZoKbJdyjSNYsDTppGHd3eG82J2a61bC8y9CHD.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/MzzWe9NoesjKW5vXHcTkKqIpofYGW80l6x5m4rGA.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/sq9UXhpZWpFavb6sZTY5JiP6bAJWQXymSdDXjV4e.webp"
    ],
    "description": "Kohinoor Central Park \u2013 0 by Kohinoor Group represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b980.50 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area. Verified under MahaRERA registration P52100056358, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "Low Density Society",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "RWH",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056358",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100056358",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kohinoor Central Park \u2013 0 Hinjewadi",
      "Kohinoor Central Park \u2013 0 Pune price",
      "Kohinoor Central Park \u2013 0 floor plan",
      "Kohinoor Central Park \u2013 0 MahaRERA P52100056358",
      "Kohinoor Group projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kohinoor Central Park \u2013 0, Hinjewadi Pune by Kohinoor Group. Price starts \u20b980.50 L. 100% Zero Brokerage. Verified MahaRERA P52100056358. Flo",
    "advancedConfigurations": [
      {
        "id": "cfg-kohinoor-central-park-1",
        "projectId": "p-kohinoor-central-park",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 725,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 8050000.0,
        "pricePerSqft": 11103.45,
        "infraCharges": 241500.0,
        "clubhouseCharges": 161000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/dRkDonPR1eXndCLucTp17YruBhz2634DUGQ5X3YG.webp"
      },
      {
        "id": "cfg-kohinoor-central-park-2",
        "projectId": "p-kohinoor-central-park",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 725,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 8050000.0,
        "pricePerSqft": 11103.45,
        "infraCharges": 241500.0,
        "clubhouseCharges": 161000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/0BgGeUEWnpaENDzgtjJ9AphTNfjVqgQpmqF57pB9.webp"
      },
      {
        "id": "cfg-kohinoor-central-park-3",
        "projectId": "p-kohinoor-central-park",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 796,
        "balconyArea": 63,
        "bathrooms": 2,
        "basePrice": 8600000.0,
        "pricePerSqft": 10804.02,
        "infraCharges": 258000.0,
        "clubhouseCharges": 172000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/TAsZoKbJdyjSNYsDTppGHd3eG82J2a61bC8y9CHD.webp"
      },
      {
        "id": "cfg-kohinoor-central-park-4",
        "projectId": "p-kohinoor-central-park",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 803,
        "balconyArea": 64,
        "bathrooms": 2,
        "basePrice": 8690000.0,
        "pricePerSqft": 10821.92,
        "infraCharges": 260700.0,
        "clubhouseCharges": 173800.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/MzzWe9NoesjKW5vXHcTkKqIpofYGW80l6x5m4rGA.webp"
      },
      {
        "id": "cfg-kohinoor-central-park-5",
        "projectId": "p-kohinoor-central-park",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 894,
        "balconyArea": 71,
        "bathrooms": 3,
        "basePrice": 9700000.0,
        "pricePerSqft": 10850.11,
        "infraCharges": 291000.0,
        "clubhouseCharges": 194000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/sq9UXhpZWpFavb6sZTY5JiP6bAJWQXymSdDXjV4e.webp"
      },
      {
        "id": "cfg-kohinoor-central-park-6",
        "projectId": "p-kohinoor-central-park",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 955,
        "balconyArea": 76,
        "bathrooms": 3,
        "basePrice": 10300000.0,
        "pricePerSqft": 10785.34,
        "infraCharges": 309000.0,
        "clubhouseCharges": 206000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/9fgd1dc8OsLM6h4q6lT60MbRpIA4vwCadScNvqMA.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kohinoor Central Park \u2013 0 located?",
        "answer": "Kohinoor Central Park \u2013 0 is located at 280, Hinjawadi Phase II, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pimpri-Chinchwad, Pune, Maharashtra."
      },
      {
        "question": "What is the price of Kohinoor Central Park \u2013 0?",
        "answer": "Prices at Kohinoor Central Park \u2013 0 range from \u20b9 80.50 Lac \u2013 1.18 Cr (agreement value). Homes are available as 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Kohinoor Central Park \u2013 0?",
        "answer": "The project offers 2, 3 BHK homes. Carpet areas range from 725 \u2013 1,071 sq.ft."
      },
      {
        "question": "What is the RERA number of Kohinoor Central Park \u2013 0?",
        "answer": "The RERA registration number of Kohinoor Central Park \u2013 0 is P52100056358."
      },
      {
        "question": "When is the possession of Kohinoor Central Park \u2013 0?",
        "answer": "Possession is expected by Dec 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kohinoor Central Park \u2013 0?",
        "answer": "Kohinoor Central Park \u2013 0 is developed by Kohinoor Group. The developer has been in real estate since 1992."
      },
      {
        "question": "How many floors does Kohinoor Central Park \u2013 0 have?",
        "answer": "The project has G+25 floors. It is spread across 13.5 acres."
      },
      {
        "question": "What amenities does Kohinoor Central Park \u2013 0 offer?",
        "answer": "Amenities include Banquet Hall, Club house, Fitness Corner, Gym, Jogging Track, Kids Play Area, Sports Courts, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Kohinoor Central Park \u2013 0?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kohinoor Central Park \u2013 0?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6148073365607!2d73.70114002393764!3d18.59139681700946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb00478dad69%3A0xb9fbaf268c44e3ef!2sKohinoor%20Central%20Park%20Hinjewadi%20Ph-2!5e0!3m2!1sen!2sin!4v1719311769234!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+25 floors. It is spread across 13.5 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kalpataru-jade-skyline",
    "title": "Kalpataru Jade Skyline \u2013 5",
    "slug": "kalpataru-jade-skyline",
    "builderId": "b-kalpataru",
    "location": "Baner",
    "priceRange": "\u20b91.84 Cr",
    "exactPrice": "\u20b91.84 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Q39esXojW09bMJ6Mdrck23emKYk4oMPhiZEBA16j.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Q39esXojW09bMJ6Mdrck23emKYk4oMPhiZEBA16j.webp",
    "lat": 18.559,
    "lng": 73.7868,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/pFuOfY6ZtpCFIT2RdAIOSb2psuUgeLUKT5aP7Txd.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/XGMa0APm2vdRMg166IyrD4znH90asS2Zm2efpcGP.webp",
      "https://keystoneliv.com/public/uploads/property/QujUjJZ0G5zvpoujbJlR7mziw17Whp3rqma1HfW4.webp",
      "https://keystoneliv.com/public/uploads/property/CmDFE12nnFIgAUpMaBjxRl9fnigcnkgzhwmPsgEZ.webp",
      "https://keystoneliv.com/public/uploads/property/xXL3bwTTQW80NCNFqMl5F3FP7Yu22pdeIS7r5Z39.webp",
      "https://keystoneliv.com/public/uploads/property/NP2lL1RMSOai3XmYdaQdzhOJxWvDzVFYB2q9WRGl.webp"
    ],
    "description": "Kalpataru Jade Skyline \u2013 5 by Kalpataru represents modern residential excellence in Baner, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.84 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Club house, Conference Room, Fitness Corner, Gym. Verified under MahaRERA registration P52100033791, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Club house",
      "Conference Room",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Mini-Theater",
      "Open Gym",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Internet / WiFi",
      "Lift",
      "Natural Light",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Private Garden/ Terrace",
      "Security System",
      "Washroom",
      "Waste Disposal"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033791",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100033791",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kalpataru Jade Skyline \u2013 5 Baner",
      "Kalpataru Jade Skyline \u2013 5 Pune price",
      "Kalpataru Jade Skyline \u2013 5 floor plan",
      "Kalpataru Jade Skyline \u2013 5 MahaRERA P52100033791",
      "Kalpataru projects in Baner",
      "flats in Baner Pune",
      "buy 2 BHK in Baner",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kalpataru Jade Skyline \u2013 5, Baner Pune by Kalpataru. Price starts \u20b91.84 Cr. 100% Zero Brokerage. Verified MahaRERA P52100033791. Floor plans & broc",
    "advancedConfigurations": [
      {
        "id": "cfg-kalpataru-jade-skyline-1",
        "projectId": "p-kalpataru-jade-skyline",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 780,
        "balconyArea": 62,
        "bathrooms": 2,
        "basePrice": 18400000.0,
        "pricePerSqft": 23589.74,
        "infraCharges": 552000.0,
        "clubhouseCharges": 368000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Q39esXojW09bMJ6Mdrck23emKYk4oMPhiZEBA16j.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kalpataru Jade Skyline \u2013 5 located?",
        "answer": "Kalpataru Jade Skyline \u2013 5 is located at pan card club road, Baner, Pune.."
      },
      {
        "question": "What is the price of Kalpataru Jade Skyline \u2013 5?",
        "answer": "Prices at Kalpataru Jade Skyline \u2013 5 range from \u20b9 1.84 Cr (agreement value). Homes are available as 3, 2 BHK."
      },
      {
        "question": "Which configurations are available at Kalpataru Jade Skyline \u2013 5?",
        "answer": "The project offers 3, 2 BHK homes. Carpet areas range from 780 \u2013 1,190 sq.ft."
      },
      {
        "question": "What is the RERA number of Kalpataru Jade Skyline \u2013 5?",
        "answer": "The RERA registration number of Kalpataru Jade Skyline \u2013 5 is P52100033791."
      },
      {
        "question": "When is the possession of Kalpataru Jade Skyline \u2013 5?",
        "answer": "Possession is expected by Dec 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kalpataru Jade Skyline \u2013 5?",
        "answer": "Kalpataru Jade Skyline \u2013 5 is developed by Kalpataru Group. The developer has been in real estate since 1969."
      },
      {
        "question": "How many floors does Kalpataru Jade Skyline \u2013 5 have?",
        "answer": "The project has 8P+21 Floors floors. It is spread across 3 acres."
      },
      {
        "question": "What amenities does Kalpataru Jade Skyline \u2013 5 offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Club house, Conference Room, Fitness Corner, Gym, Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Kalpataru Jade Skyline \u2013 5?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kalpataru Jade Skyline \u2013 5?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.3943035028183!2d73.78168987393663!3d18.55625386808585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf37f6c3be51%3A0x63b013e34cb1c6c9!2sKalpataru%20Jade%20Skyline!5e0!3m2!1sen!2sin!4v1707309905874!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 8P+21 Floors floors. It is spread across 3 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kalpataru-jade-residences",
    "title": "Kalpataru Jade Residences \u2013 Tower -H",
    "slug": "kalpataru-jade-residences",
    "builderId": "b-kalpataru",
    "location": "Baner",
    "priceRange": "\u20b978.75 L - \u20b91.10 Cr",
    "exactPrice": "\u20b978.75 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "lat": 18.559,
    "lng": 73.7868,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/jw5ukbRlHKoZR35S8lb9oHfirlSVu9uEbKjZ96Fr.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/pliB773ywyiq6gouzMfqh80mTXjNcrEm9jmjmD0R.webp",
      "https://keystoneliv.com/public/uploads/property/ASPT99t1jPi71AYCgeAfhAvxZA42TDK7ect7a9AC.webp",
      "https://keystoneliv.com/public/uploads/property/jw5ukbRlHKoZR35S8lb9oHfirlSVu9uEbKjZ96Fr.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/vnZB3D3Ho8r6BgTj66J5pckjMQ7uPXSYg2C2kPcm.webp"
    ],
    "description": "Kalpataru Jade Residences \u2013 Tower -H by Kalpataru represents modern residential excellence in Baner, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b978.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn. Verified under MahaRERA registration P52100046423, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Cafeteria",
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Party Lawn",
      "Sports Courts",
      "Swimming Pool",
      "24*7 Water",
      "Airy Rooms",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Lift",
      "Natural Light",
      "Parking",
      "Pet Friendly",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046423",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100046423",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kalpataru Jade Residences \u2013 Tower -H Baner",
      "Kalpataru Jade Residences \u2013 Tower -H Pune price",
      "Kalpataru Jade Residences \u2013 Tower -H floor plan",
      "Kalpataru Jade Residences \u2013 Tower -H MahaRERA P52100046423",
      "Kalpataru projects in Baner",
      "flats in Baner Pune",
      "buy 2 BHK in Baner",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kalpataru Jade Residences \u2013 Tower -H, Baner Pune by Kalpataru. Price starts \u20b978.75 L. 100% Zero Brokerage. Verified MahaRERA P52100046423. F",
    "advancedConfigurations": [
      {
        "id": "cfg-kalpataru-jade-residences-1",
        "projectId": "p-kalpataru-jade-residences",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 7875000,
        "pricePerSqft": 10500,
        "infraCharges": 236250.0,
        "clubhouseCharges": 157500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp"
      },
      {
        "id": "cfg-kalpataru-jade-residences-2",
        "projectId": "p-kalpataru-jade-residences",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 11025000,
        "pricePerSqft": 10500,
        "infraCharges": 330750.0,
        "clubhouseCharges": 220500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kalpataru Jade Residences \u2013 Tower -H located?",
        "answer": "Kalpataru Jade Residences \u2013 Tower -H is located at Kalpataru Jade, Pan card club Rd, Baner, Pune."
      },
      {
        "question": "What is the price of Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "Prices at Kalpataru Jade Residences \u2013 Tower -H range from \u20b9 3.09 Cr \u2013 4.59 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,750 \u2013 2,598 sq.ft."
      },
      {
        "question": "What is the RERA number of Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "The RERA registration number of Kalpataru Jade Residences \u2013 Tower -H is P52100046423."
      },
      {
        "question": "When is the possession of Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "Possession is expected by Feb 2025, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "Kalpataru Jade Residences \u2013 Tower -H is developed by Kalpataru Group. The developer has been in real estate since 1969."
      },
      {
        "question": "How many floors does Kalpataru Jade Residences \u2013 Tower -H have?",
        "answer": "The project has G+22 floors. It is spread across 9.36 acres."
      },
      {
        "question": "What amenities does Kalpataru Jade Residences \u2013 Tower -H offer?",
        "answer": "Amenities include Cafeteria, Fitness Corner, Gym, Jogging Track, Kids Play Area, Party Lawn, Sports Courts, Swimming Pool and more."
      },
      {
        "question": "Which banks give home loans for Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kalpataru Jade Residences \u2013 Tower -H?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4295612686706!2d73.78354402519254!3d18.554662782545517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1d606edc9d%3A0xaf13eaa6e1cdaa03!2sKalpataru%20Jade%20Baner!5e0!3m2!1sen!2sin!4v1709020673678!5m2!1sen!2sin",
    "floorsAndAcres": "The project has G+22 floors. It is spread across 9.36 acres.",
    "city": "Pune"
  },
  {
    "id": "p-kalpataru-blossoms",
    "title": "Kalpataru Blossoms",
    "slug": "kalpataru-blossoms",
    "builderId": "b-kalpataru",
    "location": "Anand Nagar",
    "priceRange": "\u20b91.56 Cr - \u20b91.70 Cr",
    "exactPrice": "\u20b91.56 Cr",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/ATBSWRDRKSRmbyRoiopB8HwrRQIgzAkuoILwvdpl.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/ATBSWRDRKSRmbyRoiopB8HwrRQIgzAkuoILwvdpl.webp",
    "lat": 18.4831,
    "lng": 73.8211,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/hvefx7bXrk6FCEkGym0Gml4vZ9eOhBAuaWiOfohq.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/aZDFJSOJKOLyvcMQp6Y7bsA73qTJkHiSzjiwwS9Q.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/vnZB3D3Ho8r6BgTj66J5pckjMQ7uPXSYg2C2kPcm.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/5e7ymEkZGYztA1gQgHtHN8r5SiHG3A5Er84IsIij.webp",
      "https://keystoneliv.com/public/uploads/property/OCn2152ubIWYsNscRoF5YYxsHbSz1zNbLdTEKCEn.webp"
    ],
    "description": "Kalpataru Blossoms by Kalpataru represents modern residential excellence in Anand Nagar, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b91.56 Cr, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Mini-Theater. Verified under MahaRERA registration P52100077659, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Mini-Theater",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Lift",
      "Parking",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Anand Nagar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077659",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100077659",
    "pricePerSqft": 8600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Kalpataru Blossoms Anand Nagar",
      "Kalpataru Blossoms Pune price",
      "Kalpataru Blossoms floor plan",
      "Kalpataru Blossoms MahaRERA P52100077659",
      "Kalpataru projects in Anand Nagar",
      "flats in Anand Nagar Pune",
      "buy 2 BHK in Anand Nagar",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kalpataru Blossoms, Anand Nagar Pune by Kalpataru. Price starts \u20b91.56 Cr. 100% Zero Brokerage. Verified MahaRERA P52100077659. Floor plans & brochu",
    "advancedConfigurations": [
      {
        "id": "cfg-kalpataru-blossoms-1",
        "projectId": "p-kalpataru-blossoms",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 877,
        "balconyArea": 70,
        "bathrooms": 2,
        "basePrice": 15600000.0,
        "pricePerSqft": 17787.91,
        "infraCharges": 468000.0,
        "clubhouseCharges": 312000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/ATBSWRDRKSRmbyRoiopB8HwrRQIgzAkuoILwvdpl.webp"
      },
      {
        "id": "cfg-kalpataru-blossoms-2",
        "projectId": "p-kalpataru-blossoms",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 877,
        "balconyArea": 70,
        "bathrooms": 2,
        "basePrice": 15600000.0,
        "pricePerSqft": 17787.91,
        "infraCharges": 468000.0,
        "clubhouseCharges": 312000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/aZDFJSOJKOLyvcMQp6Y7bsA73qTJkHiSzjiwwS9Q.webp"
      },
      {
        "id": "cfg-kalpataru-blossoms-3",
        "projectId": "p-kalpataru-blossoms",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 930,
        "balconyArea": 74,
        "bathrooms": 2,
        "basePrice": 17000000.0,
        "pricePerSqft": 18279.57,
        "infraCharges": 510000.0,
        "clubhouseCharges": 340000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/vnZB3D3Ho8r6BgTj66J5pckjMQ7uPXSYg2C2kPcm.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kalpataru Blossoms located?",
        "answer": "Kalpataru Blossoms is located at Sinhgad Road, Vadgoan."
      },
      {
        "question": "What is the price of Kalpataru Blossoms?",
        "answer": "Prices at Kalpataru Blossoms range from \u20b9 1.56 Cr \u2013 5.25 Cr (agreement value). Homes are available as 2, 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Kalpataru Blossoms?",
        "answer": "The project offers 2, 3, 4 BHK homes. Carpet areas range from 877 \u2013 2,622 sq.ft."
      },
      {
        "question": "What is the RERA number of Kalpataru Blossoms?",
        "answer": "The RERA registration number of Kalpataru Blossoms is P52100077659."
      },
      {
        "question": "When is the possession of Kalpataru Blossoms?",
        "answer": "Possession is expected by Mar 2029, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Kalpataru Blossoms?",
        "answer": "Kalpataru Blossoms is developed by Kalpataru Group. The developer has been in real estate since 1969."
      },
      {
        "question": "How many floors does Kalpataru Blossoms have?",
        "answer": "The project has 18 floors. It is spread across 1.44 acres."
      },
      {
        "question": "What amenities does Kalpataru Blossoms offer?",
        "answer": "Amenities include Amphitheater, Club house, Gym, Jogging Track, Kids Play Area, Mini-Theater, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Kalpataru Blossoms?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Kalpataru Blossoms?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.269730213492!2d73.8205625!3d18.4714375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295026ce702b3%3A0xf592c9047c190964!2sKalpataru%20Blossoms!5e0!3m2!1sen!2sin!4v1747033483788!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 18 floors. It is spread across 1.44 acres.",
    "city": "Pune"
  },
  {
    "id": "p-sobha-nesara",
    "title": "Sobha Nesara",
    "slug": "sobha-nesara",
    "builderId": "b-sobha",
    "location": "Kothrud",
    "priceRange": "\u20b993.75 L - \u20b91.31 Cr",
    "exactPrice": "\u20b993.75 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp",
    "lat": 18.5074,
    "lng": 73.8077,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/fx4tJjRmJedaJ69GSAzp9y1Po3iHhu7xv951qJNV.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
      "https://keystoneliv.com/public/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp"
    ],
    "description": "Sobha Nesara by Sobha Limited represents modern residential excellence in Kothrud, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b993.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Gym, Jogging Track, Kids Play Area, Pet Park, Swimming Pool, Yoga Zone. Verified under MahaRERA registration P52100020057, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Pet Park",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020057",
      "Allotment directly from Sobha Limited developer inventory"
    ],
    "reraId": "P52100020057",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Sobha Nesara Kothrud",
      "Sobha Nesara Pune price",
      "Sobha Nesara floor plan",
      "Sobha Nesara MahaRERA P52100020057",
      "Sobha Limited projects in Kothrud",
      "flats in Kothrud Pune",
      "buy 2 BHK in Kothrud",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Sobha Nesara, Kothrud Pune by Sobha Limited. Price starts \u20b993.75 L. 100% Zero Brokerage. Verified MahaRERA P52100020057. Floor plans & broch",
    "advancedConfigurations": [
      {
        "id": "cfg-sobha-nesara-1",
        "projectId": "p-sobha-nesara",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 9375000,
        "pricePerSqft": 12500,
        "infraCharges": 281250.0,
        "clubhouseCharges": 187500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp"
      },
      {
        "id": "cfg-sobha-nesara-2",
        "projectId": "p-sobha-nesara",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 13125000,
        "pricePerSqft": 12500,
        "infraCharges": 393750.0,
        "clubhouseCharges": 262500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Sobha Nesara located?",
        "answer": "Sobha Nesara is located at Kothrud, Pune."
      },
      {
        "question": "What is the price of Sobha Nesara?",
        "answer": "Prices at Sobha Nesara range from \u20b9 2.77 Cr \u2013 4.76 Cr (agreement value). Homes are available as 3, 4 BHK."
      },
      {
        "question": "Which configurations are available at Sobha Nesara?",
        "answer": "The project offers 3, 4 BHK homes. Carpet areas range from 1,449 \u2013 2,431 sq.ft."
      },
      {
        "question": "What is the RERA number of Sobha Nesara?",
        "answer": "The RERA registration number of Sobha Nesara is P52100020057."
      },
      {
        "question": "When is the possession of Sobha Nesara?",
        "answer": "Possession is expected by Mar 2026, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Sobha Nesara?",
        "answer": "Sobha Nesara is developed by Sobha Limited. The developer has been in real estate since 1995."
      },
      {
        "question": "How many floors does Sobha Nesara have?",
        "answer": "The project has 23 floors. It is spread across 3 acres."
      },
      {
        "question": "What amenities does Sobha Nesara offer?",
        "answer": "Amenities include Gym, Jogging Track, Kids Play Area, Pet Park, Swimming Pool, Yoga Zone and more."
      },
      {
        "question": "Which banks give home loans for Sobha Nesara?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Sobha Nesara?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3783.4725402013!2d73.78536892519135!3d18.50753633258347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSobha%20Nesara!5e0!3m2!1sen!2sin!4v1747126048135!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 23 floors. It is spread across 3 acres.",
    "city": "Pune"
  },
  {
    "id": "p-sobha-nesara-block-3",
    "title": "Sobha Nesara Block 3",
    "slug": "sobha-nesara-block-3",
    "builderId": "b-sobha",
    "location": "Kothrud",
    "priceRange": "\u20b993.75 L - \u20b91.31 Cr",
    "exactPrice": "\u20b993.75 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "lat": 18.5074,
    "lng": 73.8077,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/aWnxy62MDO1QX60oMsN6OrORW8XJAf2mAMh9MAgQ.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/XuDMBetWz7JMao7EtAKipFvMdJLCxZvvdmU1XTf4.webp",
      "https://keystoneliv.com/public/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/hBhWq7z67MCde6MvvhDvmu4lEKeJpH2zLkqJlrml.webp"
    ],
    "description": "Sobha Nesara Block 3 by Sobha Limited represents modern residential excellence in Kothrud, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b993.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym. Verified under MahaRERA registration P52100020062, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Fitness Corner",
      "Gym",
      "Jacuzzi",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Open Gym",
      "Party Lawn",
      "Reflexology",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "No open drainage around",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020062",
      "Allotment directly from Sobha Limited developer inventory"
    ],
    "reraId": "P52100020062",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Sobha Nesara Block 3 Kothrud",
      "Sobha Nesara Block 3 Pune price",
      "Sobha Nesara Block 3 floor plan",
      "Sobha Nesara Block 3 MahaRERA P52100020062",
      "Sobha Limited projects in Kothrud",
      "flats in Kothrud Pune",
      "buy 2 BHK in Kothrud",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Sobha Nesara Block 3, Kothrud Pune by Sobha Limited. Price starts \u20b993.75 L. 100% Zero Brokerage. Verified MahaRERA P52100020062. Floor plans",
    "advancedConfigurations": [
      {
        "id": "cfg-sobha-nesara-block-3-1",
        "projectId": "p-sobha-nesara-block-3",
        "name": "2 BHK Premium",
        "carpetArea": 750,
        "balconyArea": 60,
        "bathrooms": 2,
        "basePrice": 9375000,
        "pricePerSqft": 12500,
        "infraCharges": 281250.0,
        "clubhouseCharges": 187500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp"
      },
      {
        "id": "cfg-sobha-nesara-block-3-2",
        "projectId": "p-sobha-nesara-block-3",
        "name": "3 BHK Royale",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 13125000,
        "pricePerSqft": 12500,
        "infraCharges": 393750.0,
        "clubhouseCharges": 262500.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Sobha Nesara Block 3 located?",
        "answer": "Sobha Nesara Block 3 is located at Kothrud."
      },
      {
        "question": "What is the price of Sobha Nesara Block 3?",
        "answer": "Prices at Sobha Nesara Block 3 range from \u20b9 2.81 Cr \u2013 4.10 Cr (agreement value). Homes are available as 3, 3.5, 4, 4.5 BHK."
      },
      {
        "question": "Which configurations are available at Sobha Nesara Block 3?",
        "answer": "The project offers 3, 3.5, 4, 4.5 BHK homes. Carpet areas range from 2,048 \u2013 2,987 sq.ft."
      },
      {
        "question": "What is the RERA number of Sobha Nesara Block 3?",
        "answer": "The RERA registration number of Sobha Nesara Block 3 is P52100020062."
      },
      {
        "question": "When is the possession of Sobha Nesara Block 3?",
        "answer": "Possession is expected by Mar 2027, as per the RERA registration."
      },
      {
        "question": "Who is the developer of Sobha Nesara Block 3?",
        "answer": "Sobha Nesara Block 3 is developed by Sobha Limited. The developer has been in real estate since 1995."
      },
      {
        "question": "How many floors does Sobha Nesara Block 3 have?",
        "answer": "The project has 23 floors. It is spread across 1 acres."
      },
      {
        "question": "What amenities does Sobha Nesara Block 3 offer?",
        "answer": "Amenities include Amphitheater, Banquet Hall, Cafeteria, Club house, Fitness Corner, Gym, Jacuzzi, Jogging Track and more."
      },
      {
        "question": "Which banks give home loans for Sobha Nesara Block 3?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Sobha Nesara Block 3?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.493466587116!2d73.78630369999999!3d18.506589599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0338ae36ab%3A0xb3e42315f3b26a4e!2sSOBHA%20Nesara!5e0!3m2!1sen!2sin!4v1751040727860!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 23 floors. It is spread across 1 acres.",
    "city": "Pune"
  },
  {
    "id": "p-prasiddhi-tatavam-residency",
    "title": "Prasiddhi Tatavam Residency",
    "slug": "prasiddhi-tatavam-residency",
    "builderId": "b-tata",
    "location": "Ravet",
    "priceRange": "\u20b957.96 L - \u20b995.00 L",
    "exactPrice": "\u20b957.96 L",
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/9pvXyW2GJ03250xBWLfGckCuaopvViEXcNd2j0GO.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/9pvXyW2GJ03250xBWLfGckCuaopvViEXcNd2j0GO.webp",
    "lat": 18.6496,
    "lng": 73.7441,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/elwH47XcqSfm9Wr8ZOTnPUJV0L8hZ3Mzc0A6AnnL.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/J9Ip37z2Wzgx196NQyLrRvd22LBOy1PXHkFuPfuN.webp",
      "https://keystoneliv.com/public/uploads/property/elwH47XcqSfm9Wr8ZOTnPUJV0L8hZ3Mzc0A6AnnL.webp",
      "https://keystoneliv.com/public/uploads/property/GTXvNp63rizbi7PzyGamBctpuR6TT5eK393FsUXB.webp",
      "https://keystoneliv.com/public/uploads/property/aMobBGd7Ut8Rx6KGpdkdEhct7heEo0dv5pyVzWik.webp"
    ],
    "description": "Prasiddhi Tatavam Residency by Tata Housing represents modern residential excellence in Ravet, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 1 BHK, 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b957.96 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Jogging Track, Kids Play Area, 24*7 Water, Gas Pipeline, Gated Society, Lift. Verified under MahaRERA registration P52100046041, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Jogging Track",
      "Kids Play Area",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Lift",
      "Parking",
      "Power Back Up",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Ravet near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046041",
      "Allotment directly from Tata Housing developer inventory"
    ],
    "reraId": "P52100046041",
    "pricePerSqft": 7300,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Prasiddhi Tatavam Residency Ravet",
      "Prasiddhi Tatavam Residency Pune price",
      "Prasiddhi Tatavam Residency floor plan",
      "Prasiddhi Tatavam Residency MahaRERA P52100046041",
      "Tata Housing projects in Ravet",
      "flats in Ravet Pune",
      "buy 2 BHK in Ravet",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK in Prasiddhi Tatavam Residency, Ravet Pune by Tata Housing. Price starts \u20b957.96 L. 100% Zero Brokerage. Verified MahaRERA P52100046041. Floor p",
    "advancedConfigurations": [
      {
        "id": "cfg-prasiddhi-tatavam-residency-1",
        "projectId": "p-prasiddhi-tatavam-residency",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 483,
        "balconyArea": 38,
        "bathrooms": 1,
        "basePrice": 5796000.0,
        "pricePerSqft": 12000.0,
        "infraCharges": 173880.0,
        "clubhouseCharges": 115920.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/9pvXyW2GJ03250xBWLfGckCuaopvViEXcNd2j0GO.webp"
      },
      {
        "id": "cfg-prasiddhi-tatavam-residency-2",
        "projectId": "p-prasiddhi-tatavam-residency",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 483,
        "balconyArea": 38,
        "bathrooms": 1,
        "basePrice": 5796000.0,
        "pricePerSqft": 12000.0,
        "infraCharges": 173880.0,
        "clubhouseCharges": 115920.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/J9Ip37z2Wzgx196NQyLrRvd22LBOy1PXHkFuPfuN.webp"
      },
      {
        "id": "cfg-prasiddhi-tatavam-residency-3",
        "projectId": "p-prasiddhi-tatavam-residency",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 796,
        "balconyArea": 63,
        "bathrooms": 2,
        "basePrice": 9500000.0,
        "pricePerSqft": 11934.67,
        "infraCharges": 285000.0,
        "clubhouseCharges": 190000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/elwH47XcqSfm9Wr8ZOTnPUJV0L8hZ3Mzc0A6AnnL.webp"
      }
    ],
    "faqs": [
      {
        "question": "Where is Prasiddhi Tatavam Residency located?",
        "answer": "Prasiddhi Tatavam Residency is located at Ravet, Pune."
      },
      {
        "question": "What is the price of Prasiddhi Tatavam Residency?",
        "answer": "Prices at Prasiddhi Tatavam Residency range from \u20b9 57.96 Lac \u2013 1.39 Cr (agreement value). Homes are available as 1, 2, 3 BHK."
      },
      {
        "question": "Which configurations are available at Prasiddhi Tatavam Residency?",
        "answer": "The project offers 1, 2, 3 BHK homes. Carpet areas range from 483 \u2013 1,161 sq.ft."
      },
      {
        "question": "What is the RERA number of Prasiddhi Tatavam Residency?",
        "answer": "The RERA registration number of Prasiddhi Tatavam Residency is P52100046041."
      },
      {
        "question": "When is the possession of Prasiddhi Tatavam Residency?",
        "answer": "Prasiddhi Tatavam Residency is ready to move in."
      },
      {
        "question": "Who is the developer of Prasiddhi Tatavam Residency?",
        "answer": "Prasiddhi Tatavam Residency is developed by Prasiddhi Group Pune. The developer has been in real estate since 2004."
      },
      {
        "question": "How many floors does Prasiddhi Tatavam Residency have?",
        "answer": "The project has 11 floors. It is spread across 0.3 acres."
      },
      {
        "question": "What amenities does Prasiddhi Tatavam Residency offer?",
        "answer": "Amenities include Jogging Track, Kids Play Area and more."
      },
      {
        "question": "Which banks give home loans for Prasiddhi Tatavam Residency?",
        "answer": "Home loans are available from Aditya Birla Capital, Axis Bank Home Loan, Bajaj Finserv, Bank of Baroda, Citi Bank, among others. Our team can help you compare offers."
      },
      {
        "question": "How do I book a site visit to Prasiddhi Tatavam Residency?",
        "answer": "Use \"Schedule Site Visit\" on this page or call +91 93108 63636. PROPSMART REALTY arranges a free guided visit, with pick-up on request."
      }
    ],
    "mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.039807074337!2d73.747708!3d18.6622096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1000fb97dd5%3A0xdd1c8b392d8ac007!2sTatvam%20Residency!5e0!3m2!1sen!2sin!4v1752253385417!5m2!1sen!2sin",
    "floorsAndAcres": "The project has 11 floors. It is spread across 0.3 acres.",
    "city": "Pune"
  },
  {
    "id": "p-sense-66-by-tata-value-homes",
    "title": "Sense 66 By TATA Value Homes",
    "slug": "sense-66-by-tata-value-homes",
    "builderId": "b-tata",
    "location": "Talegaon Dabhade",
    "priceRange": "\u20b927.00 L - \u20b960.00 L",
    "exactPrice": "\u20b927.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/elqlVrqhkL41pdaytkeF0xK9oc0oitS9ZctMJKZz.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/elqlVrqhkL41pdaytkeF0xK9oc0oitS9ZctMJKZz.webp",
    "lat": 18.7303,
    "lng": 73.6767,
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/2ocDxHCTXWnA2CnIKGCGcSwin1rTir1eCXkoMNzB.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/TvBBvQvs52hmuvOVumr3HhUSxLMtk2rFCDVnxua0.webp",
      "https://keystoneliv.com/public/uploads/property/cu7T1exp3WjBAuIjjcAQclhBnDwVt0x1lCTQkwlS.webp",
      "https://keystoneliv.com/public/uploads/property/2ocDxHCTXWnA2CnIKGCGcSwin1rTir1eCXkoMNzB.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/cu7T1exp3WjBAuIjjcAQclhBnDwVt0x1lCTQkwlS.webp"
    ],
    "description": "Sense 66 By TATA Value Homes by Tata Housing represents modern residential excellence in Talegaon Dabhade, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 1 BHK, 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b927.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Banquet Hall, Club house, Gym, Jogging Track, Kids Play Area, Swimming Pool. Verified under MahaRERA registration P52100033265, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Banquet Hall",
      "Club house",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gated Society",
      "Lift",
      "Natural Light",
      "Security System"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles"
      },
      {
        "label": "Electrical",
        "value": "Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct builder partner",
      "Prime connectivity in Talegaon Dabhade near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033265",
      "Allotment directly from Tata Housing developer inventory"
    ],
    "reraId": "P52100033265",
    "pricePerSqft": 4900,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Sense 66 By TATA Value Homes Talegaon Dabhade",
      "Sense 66 By TATA Value Homes Pune price",
      "Sense 66 By TATA Value Homes floor plan",
      "Sense 66 By TATA Value Homes MahaRERA P52100033265",
      "Tata Housing projects in Talegaon Dabhade",
      "flats in Talegaon Dabhade Pune",
      "buy 2 BHK in Talegaon Dabhade",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK in Sense 66 By TATA Value Homes, Talegaon Dabhade Pune by Tata Housing. Price starts \u20b927.00 L. 100% Zero Brokerage. Verified MahaRERA P52100033",
    "advancedConfigurations": [
      {
        "id": "cfg-sense-66-by-tata-value-homes-1",
        "projectId": "p-sense-66-by-tata-value-homes",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 458,
        "balconyArea": 36,
        "bathrooms": 1,
        "basePrice": 2700000.0,
        "pricePerSqft": 5895.2,
        "infraCharges": 81000.0,
        "clubhouseCharges": 54000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/elqlVrqhkL41pdaytkeF0xK9oc0oitS9ZctMJKZz.webp"
      },
      {
        "id": "cfg-sense-66-by-tata-value-homes-2",
        "projectId": "p-sense-66-by-tata-value-homes",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 458,
        "balconyArea": 36,
        "bathrooms": 1,
        "basePrice": 2700000.0,
        "pricePerSqft": 5895.2,
        "infraCharges": 81000.0,
        "clubhouseCharges": 54000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/TvBBvQvs52hmuvOVumr3HhUSxLMtk2rFCDVnxua0.webp"
      },
      {
        "id": "cfg-sense-66-by-tata-value-homes-3",
        "projectId": "p-sense-66-by-tata-value-homes",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 736,
        "balconyArea": 58,
        "bathrooms": 2,
        "basePrice": 6000000.0,
        "pricePerSqft": 8152.17,
        "infraCharges": 180000.0,
        "clubhouseCharges": 120000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/cu7T1exp3WjBAuIjjcAQclhBnDwVt0x1lCTQkwlS.webp"
      }
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-camelot-kharadi",
    "title": "Lodha Camelot",
    "slug": "lodha-camelot-kharadi",
    "builderId": "b-lodha",
    "location": "Kharadi, Pune",
    "priceRange": "\u20b91.45 Cr - \u20b92.85 Cr",
    "exactPrice": "\u20b91.45 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "lat": 18.5529,
    "lng": 73.9416,
    "reraId": "P52100052981",
    "totalAcres": "11.5 Acres Planned",
    "totalFloors": "4 Towers (G+32 Floors)",
    "floorsAndAcres": "11.5 Acres Planned \u2022 4 Towers (G+32 Floors)",
    "description": "Lodha Camelot in Upper Kharadi Pune brings an elite royal lifestyle featuring panoramic river and greenery views, grand palace-inspired clubhouses, and bespoke 3 & 4 BHK residences.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Camelot?",
        "answer": "Lodha Camelot is fully approved by MahaRERA under registration number P52100052981. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Camelot?",
        "answer": "Lodha Camelot offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b91.45 Cr up to \u20b91.45 Cr - \u20b92.85 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Camelot?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Camelot?",
        "answer": "The scheduled possession for Lodha Camelot is Dec 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-camelot-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5529,73.9416&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-altero-wakad",
    "title": "Lodha Altero",
    "slug": "lodha-altero-wakad",
    "builderId": "b-lodha",
    "location": "Wakad, Pune",
    "priceRange": "\u20b91.15 Cr - \u20b91.75 Cr",
    "exactPrice": "\u20b91.15 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/1980265094_Lodha_Wakad_Website_Images_Spotlight_SC_1903x800px.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/1980265094_Lodha_Wakad_Website_Images_Spotlight_SC_1903x800px.jpg",
    "lat": 18.5987,
    "lng": 73.7684,
    "reraId": "P52100054112",
    "totalAcres": "7.2 Acres Planned",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "7.2 Acres Planned \u2022 G+28 Floors",
    "description": "Lodha Altero in Wakad Pune provides futuristic luxury living with intelligent home automation, sprawling podium amenities, and high-speed access to the Hinjewadi IT Park and Pune-Mumbai Expressway.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Altero?",
        "answer": "Lodha Altero is fully approved by MahaRERA under registration number P52100054112. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Altero?",
        "answer": "Lodha Altero offers 2 BHK, 3 BHK typologies starting from an exact direct-partner pricing of \u20b91.15 Cr up to \u20b91.15 Cr - \u20b91.75 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Altero?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Altero?",
        "answer": "The scheduled possession for Lodha Altero is June 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-altero-wakad-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5987,73.7684&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-estilo-kharadi",
    "title": "Lodha Estilo",
    "slug": "lodha-estilo-kharadi",
    "builderId": "b-lodha",
    "location": "Kharadi, Pune",
    "priceRange": "\u20b92.20 Cr - \u20b94.50 Cr",
    "exactPrice": "\u20b92.20 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Estilo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Estilo_1903X800_0.jpg",
    "lat": 18.5534,
    "lng": 73.9482,
    "reraId": "P52100051234",
    "totalAcres": "8.5 Acres",
    "totalFloors": "3 Iconic Towers (G+30 Floors)",
    "floorsAndAcres": "8.5 Acres \u2022 3 Iconic Towers (G+30 Floors)",
    "description": "Lodha Estilo is Kharadi's crowning jewel of luxury residences, with expansive sundecks, Italian marble finishes, private elevator lobbies, and a lavish 25,000 sq.ft. clubhouse.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Estilo?",
        "answer": "Lodha Estilo is fully approved by MahaRERA under registration number P52100051234. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Estilo?",
        "answer": "Lodha Estilo offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b92.20 Cr up to \u20b92.20 Cr - \u20b94.50 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Estilo?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Estilo?",
        "answer": "The scheduled possession for Lodha Estilo is Dec 2026, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-estilo-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5534,73.9482&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-belmondo",
    "title": "Lodha Belmondo",
    "slug": "lodha-belmondo",
    "builderId": "b-lodha",
    "location": "Pune Expressway, Gahunje",
    "priceRange": "\u20b91.80 Cr - \u20b96.50 Cr",
    "exactPrice": "\u20b91.80 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK",
      "Golf Villa"
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "lat": 18.6833,
    "lng": 73.6989,
    "reraId": "P52100000287",
    "totalAcres": "100+ Acres Golf Township",
    "totalFloors": "Low-Rise & High-Rise G+24",
    "floorsAndAcres": "100+ Acres Golf Township \u2022 Low-Rise & High-Rise G+24",
    "description": "Lodha Belmondo is a spectacular 100+ acre riverside golf township designed around a 45-hole Greg Norman golf course along the Pavana River, with 50,000 sq.ft. luxury resort clubhouse.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Belmondo?",
        "answer": "Lodha Belmondo is fully approved by MahaRERA under registration number P52100000287. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Belmondo?",
        "answer": "Lodha Belmondo offers 2 BHK, 3 BHK, 4 BHK, Golf Villa typologies starting from an exact direct-partner pricing of \u20b91.80 Cr up to \u20b91.80 Cr - \u20b96.50 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Belmondo?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Belmondo?",
        "answer": "The scheduled possession for Lodha Belmondo is Ready to Move, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-belmondo-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.6833,73.6989&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Lonavala"
  },
  {
    "id": "p-lodha-magnus-hinjewadi",
    "title": "Lodha Magnus",
    "slug": "lodha-magnus-hinjewadi",
    "builderId": "b-lodha",
    "location": "Hinjewadi Phase 1, Pune",
    "priceRange": "\u20b91.25 Cr - \u20b91.95 Cr",
    "exactPrice": "\u20b91.25 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Magnus_1903x800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Magnus_1903x800.jpg",
    "lat": 18.5913,
    "lng": 73.7389,
    "reraId": "P52100053890",
    "totalAcres": "9.0 Acres",
    "totalFloors": "G+31 Floors",
    "floorsAndAcres": "9.0 Acres \u2022 G+31 Floors",
    "description": "Lodha Magnus brings grand executive residences to Hinjewadi Phase 1 with infinity lap pools, sky lounges, and pedestrian-first landscape architecture next to major IT campuses.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Magnus?",
        "answer": "Lodha Magnus is fully approved by MahaRERA under registration number P52100053890. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Magnus?",
        "answer": "Lodha Magnus offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b91.25 Cr up to \u20b91.25 Cr - \u20b91.95 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Magnus?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Magnus?",
        "answer": "The scheduled possession for Lodha Magnus is Dec 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-magnus-hinjewadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5913,73.7389&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-massimo-baner",
    "title": "Lodha Massimo",
    "slug": "lodha-massimo-baner",
    "builderId": "b-lodha",
    "location": "Baner, Pune",
    "priceRange": "\u20b91.65 Cr - \u20b92.95 Cr",
    "exactPrice": "\u20b91.65 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2028",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight%20v2.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight%20v2.jpg",
    "lat": 18.559,
    "lng": 73.7868,
    "reraId": "P52100055412",
    "totalAcres": "6.8 Acres Planned",
    "totalFloors": "G+29 Floors",
    "floorsAndAcres": "6.8 Acres Planned \u2022 G+29 Floors",
    "description": "Lodha Massimo in Baner Pune offers high-street luxury living adjacent to Baner Hill, featuring double-height entrance lobbies, private deck balconies, and full Olympic amenities.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Massimo?",
        "answer": "Lodha Massimo is fully approved by MahaRERA under registration number P52100055412. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Massimo?",
        "answer": "Lodha Massimo offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b91.65 Cr up to \u20b91.65 Cr - \u20b92.95 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Massimo?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Massimo?",
        "answer": "The scheduled possession for Lodha Massimo is March 2028, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-massimo-baner-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.559,73.7868&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-one-bund-garden",
    "title": "Lodha One",
    "slug": "lodha-one-bund-garden",
    "builderId": "b-lodha",
    "location": "Bund Garden, Pune",
    "priceRange": "\u20b94.50 Cr - \u20b912.00 Cr",
    "exactPrice": "\u20b94.50 Cr",
    "configurations": [
      "4 BHK",
      "5 BHK",
      "Penthouse"
    ],
    "status": "New Launch",
    "type": "Residential",
    "possessionDate": "Dec 2028",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Desktop_Lodha-One_1903x800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Desktop_Lodha-One_1903x800.jpg",
    "lat": 18.5362,
    "lng": 73.8797,
    "reraId": "P52100056123",
    "totalAcres": "4.5 Acres Ultra-Luxury",
    "totalFloors": "Iconic G+35 Towers",
    "floorsAndAcres": "4.5 Acres Ultra-Luxury \u2022 Iconic G+35 Towers",
    "description": "Lodha One at Bund Garden is Pune's most prestigious super-luxury address, providing ultra-exclusive sprawling floor-plate residences with personal concierge and private club services.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha One?",
        "answer": "Lodha One is fully approved by MahaRERA under registration number P52100056123. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha One?",
        "answer": "Lodha One offers 4 BHK, 5 BHK, Penthouse typologies starting from an exact direct-partner pricing of \u20b94.50 Cr up to \u20b94.50 Cr - \u20b912.00 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha One?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha One?",
        "answer": "The scheduled possession for Lodha One is Dec 2028, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-one-bund-garden-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5362,73.8797&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-palais-kothrud",
    "title": "Lodha Palais",
    "slug": "lodha-palais-kothrud",
    "builderId": "b-lodha",
    "location": "Kothrud, Pune",
    "priceRange": "\u20b93.80 Cr - \u20b97.20 Cr",
    "exactPrice": "\u20b93.80 Cr",
    "configurations": [
      "4 BHK",
      "5 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Kothrud_1903x800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Kothrud_1903x800.jpg",
    "lat": 18.5074,
    "lng": 73.8077,
    "reraId": "P52100054321",
    "totalAcres": "5.0 Acres Prime Land",
    "totalFloors": "G+26 Floors",
    "floorsAndAcres": "5.0 Acres Prime Land \u2022 G+26 Floors",
    "description": "Lodha Palais in Kothrud Pune offers French palace-inspired bespoke architecture with lavish high ceilings, private sundecks, and handcrafted leisure facilities.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Palais?",
        "answer": "Lodha Palais is fully approved by MahaRERA under registration number P52100054321. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Palais?",
        "answer": "Lodha Palais offers 4 BHK, 5 BHK typologies starting from an exact direct-partner pricing of \u20b93.80 Cr up to \u20b93.80 Cr - \u20b97.20 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Palais?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Palais?",
        "answer": "The scheduled possession for Lodha Palais is Dec 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-palais-kothrud-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5074,73.8077&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-sylvan-hinjewadi",
    "title": "Lodha Sylvan",
    "slug": "lodha-sylvan-hinjewadi",
    "builderId": "b-lodha",
    "location": "Hinjewadi Phase 3, Pune",
    "priceRange": "\u20b985.00 L - \u20b91.35 Cr",
    "exactPrice": "\u20b985.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/2519491749_Lodha-Hinjewadi-phase-3-_1903x800_Spotlight-Banner.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/2519491749_Lodha-Hinjewadi-phase-3-_1903x800_Spotlight-Banner.jpg",
    "lat": 18.5833,
    "lng": 73.698,
    "reraId": "P52100054881",
    "totalAcres": "12.0 Acres Planned",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "12.0 Acres Planned \u2022 G+28 Floors",
    "description": "Lodha Sylvan in Hinjewadi Phase 3 combines tranquil forest living with urban convenience, boasting over 1,000 trees, an organic farm, and multi-tier club zones.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Pune",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Sylvan?",
        "answer": "Lodha Sylvan is fully approved by MahaRERA under registration number P52100054881. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Sylvan?",
        "answer": "Lodha Sylvan offers 2 BHK, 3 BHK typologies starting from an exact direct-partner pricing of \u20b985.00 L up to \u20b985.00 L - \u20b91.35 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Sylvan?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Sylvan?",
        "answer": "The scheduled possession for Lodha Sylvan is June 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-sylvan-hinjewadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5833,73.698&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Pune"
  },
  {
    "id": "p-lodha-elise-worli",
    "title": "Lodha Elise",
    "slug": "lodha-elise-worli",
    "builderId": "b-lodha",
    "location": "Worli, South Mumbai",
    "priceRange": "\u20b95.50 Cr - \u20b912.50 Cr",
    "exactPrice": "\u20b95.50 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "lat": 19.0176,
    "lng": 72.8188,
    "reraId": "P51900052119",
    "totalAcres": "5.5 Acres",
    "totalFloors": "G+45 Floors",
    "floorsAndAcres": "5.5 Acres \u2022 G+45 Floors",
    "description": "Lodha Elise at Worli Mumbai offers uninterrupted Arabian Sea views, bespoke interior styling by world-renowned designers, and private sky lounges overlooking South Mumbai.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Mumbai",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Elise?",
        "answer": "Lodha Elise is fully approved by MahaRERA under registration number P51900052119. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Elise?",
        "answer": "Lodha Elise offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b95.50 Cr up to \u20b95.50 Cr - \u20b912.50 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Elise?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Elise?",
        "answer": "The scheduled possession for Lodha Elise is Dec 2027, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-elise-worli-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.0176,72.8188&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-lodha-altamount",
    "title": "Lodha Altamount",
    "slug": "lodha-altamount",
    "builderId": "b-lodha",
    "location": "Altamount Road, Billionaires Row, Mumbai",
    "priceRange": "\u20b925.00 Cr - \u20b960.00 Cr",
    "exactPrice": "\u20b925.00 Cr",
    "configurations": [
      "4 BHK",
      "5 BHK",
      "Duplex"
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Desktop_Lodha-Altamount_1903x800.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Desktop_Lodha-Altamount_1903x800.jpg",
    "lat": 18.9667,
    "lng": 72.8083,
    "reraId": "P51900000001",
    "totalAcres": "Bespoke Landmark Tower",
    "totalFloors": "G+43 Floors",
    "floorsAndAcres": "Bespoke Landmark Tower \u2022 G+43 Floors",
    "description": "Lodha Altamount on Mumbai's iconic Billionaire's Row is India's most coveted residential skyscraper, featuring black glass curtain walls and ultra-exclusive residences.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Mumbai",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Altamount?",
        "answer": "Lodha Altamount is fully approved by MahaRERA under registration number P51900000001. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Altamount?",
        "answer": "Lodha Altamount offers 4 BHK, 5 BHK, Duplex typologies starting from an exact direct-partner pricing of \u20b925.00 Cr up to \u20b925.00 Cr - \u20b960.00 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Altamount?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Altamount?",
        "answer": "The scheduled possession for Lodha Altamount is Ready to Move, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-altamount-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.9667,72.8083&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-lodha-bellevue-mahalaxmi",
    "title": "Lodha Bellevue",
    "slug": "lodha-bellevue-mahalaxmi",
    "builderId": "b-lodha",
    "location": "Mahalaxmi, South Mumbai",
    "priceRange": "\u20b94.85 Cr - \u20b99.20 Cr",
    "exactPrice": "\u20b94.85 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Bellevue_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Bellevue_1903X800_0.jpg",
    "lat": 18.9826,
    "lng": 72.8242,
    "reraId": "P51900048234",
    "totalAcres": "5.0 Acres Grand Urban Oasis",
    "totalFloors": "2 Towers (G+56 Floors)",
    "floorsAndAcres": "5.0 Acres Grand Urban Oasis \u2022 2 Towers (G+56 Floors)",
    "description": "Lodha Bellevue in Mahalaxmi offers mesmerizing views of the Mahalaxmi Racecourse and Arabian Sea, paired with two 56-storey architectural marvels.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Mumbai",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Bellevue?",
        "answer": "Lodha Bellevue is fully approved by MahaRERA under registration number P51900048234. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Bellevue?",
        "answer": "Lodha Bellevue offers 3 BHK, 4 BHK typologies starting from an exact direct-partner pricing of \u20b94.85 Cr up to \u20b94.85 Cr - \u20b99.20 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Bellevue?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Bellevue?",
        "answer": "The scheduled possession for Lodha Bellevue is Dec 2026, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-bellevue-mahalaxmi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.9826,72.8242&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-lodha-amara-thane",
    "title": "Lodha Amara",
    "slug": "lodha-amara-thane",
    "builderId": "b-lodha",
    "location": "Kolshet Road, Thane (MMR)",
    "priceRange": "\u20b978.00 L - \u20b91.85 Cr",
    "exactPrice": "\u20b978.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move & Ongoing",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_LodhaAmara_1903x800.webp",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_LodhaAmara_1903x800.webp",
    "lat": 19.2312,
    "lng": 72.9868,
    "reraId": "P51700020088",
    "totalAcres": "40+ Acres Forest Township",
    "totalFloors": "Multiple G+30 Towers",
    "floorsAndAcres": "40+ Acres Forest Township \u2022 Multiple G+30 Towers",
    "description": "Lodha Amara is Thane's premier 40-acre residential township with a 2-acre private forest, 6 clubhouses, 5,000 sq.ft. sports arenas, and thousands of trees.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Mumbai",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Amara?",
        "answer": "Lodha Amara is fully approved by MahaRERA under registration number P51700020088. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Amara?",
        "answer": "Lodha Amara offers 1 BHK, 2 BHK, 3 BHK typologies starting from an exact direct-partner pricing of \u20b978.00 L up to \u20b978.00 L - \u20b91.85 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Amara?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Amara?",
        "answer": "The scheduled possession for Lodha Amara is Ready to Move & Ongoing, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-amara-thane-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.2312,72.9868&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-lodha-upper-thane",
    "title": "Lodha Upper Thane",
    "slug": "lodha-upper-thane",
    "builderId": "b-lodha",
    "location": "Upper Thane / Anjur, Thane (MMR)",
    "priceRange": "\u20b952.00 L - \u20b91.15 Cr",
    "exactPrice": "\u20b952.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Upper-Thane_1903x800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Upper-Thane_1903x800_0.jpg",
    "lat": 19.2789,
    "lng": 73.0412,
    "reraId": "P51700020275",
    "totalAcres": "200+ Acres Integrated Township",
    "totalFloors": "G+14 & G+22 Mid-Rise Towers",
    "floorsAndAcres": "200+ Acres Integrated Township \u2022 G+14 & G+22 Mid-Rise Towers",
    "description": "Lodha Upper Thane is a 200+ acre mega-township offering world-class ICSE school, grand 50,000 sq.ft. clubhouse, retail high street, and cricket ground.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "Zero Brokerage Direct Builder Sales Partner",
      "Pre-Sanctioned MahaRERA Approved Project",
      "Iconic Lodha Luxury Living in Mumbai",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living/Dining, 800x800mm Vitrified in Bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Platform with SS Sink, Water Purifier, Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Premium CP & Sanitaryware with Concealed Diverters"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Schneider Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Designer Laminated Flush Doors and Powder Coated Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA registration number for Lodha Upper Thane?",
        "answer": "Lodha Upper Thane is fully approved by MahaRERA under registration number P51700020275. All sanctions and land titles are verified."
      },
      {
        "question": "What are the available apartment configurations and prices at Lodha Upper Thane?",
        "answer": "Lodha Upper Thane offers 1 BHK, 2 BHK, 3 BHK typologies starting from an exact direct-partner pricing of \u20b952.00 L up to \u20b952.00 L - \u20b91.15 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage on Lodha Upper Thane?",
        "answer": "No. PROPSMART REALTY is a 100% Brokerage-Free Direct Builder Sales Partner. You pay \u20b90 brokerage and get transparent builder inventory with complete documentation support."
      },
      {
        "question": "When is the possession date for Lodha Upper Thane?",
        "answer": "The scheduled possession for Lodha Upper Thane is Dec 2026, built according to sanctioned delivery timelines."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-upper-thane-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.2789,73.0412&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-godrej-meadows-mahalunge",
    "title": "Godrej Meadows",
    "slug": "godrej-meadows-mahalunge",
    "builderId": "b-godrej",
    "location": "Mahalunge, Pune",
    "priceRange": "\u20b972.00 L - \u20b91.18 Cr",
    "exactPrice": "\u20b972.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "lat": 18.563,
    "lng": 73.742,
    "reraId": "P52100030580",
    "totalAcres": "10.0 Acres Enclave",
    "totalFloors": "G+31 Floors",
    "floorsAndAcres": "10.0 Acres Enclave \u2022 G+31 Floors",
    "description": "Godrej Meadows at Riverhills Mahalunge Pune is a wellness-focused residential community with a 3,000 sq.ft. health club, tranquil nature views, and direct connectivity to the Hinjewadi IT corridor.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Meadows?",
        "answer": "Godrej Meadows is sanctioned under MahaRERA registration number P52100030580. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Meadows?",
        "answer": "Godrej Meadows configurations start from \u20b972.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Meadows?",
        "answer": "Godrej Meadows features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Meadows?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-meadows-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.563,73.742&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Pune"
  },
  {
    "id": "p-godrej-park-springs-manjari",
    "title": "Godrej Park Springs",
    "slug": "godrej-park-springs-manjari",
    "builderId": "b-godrej",
    "location": "Manjari, Pune",
    "priceRange": "\u20b968.00 L - \u20b91.05 Cr",
    "exactPrice": "\u20b968.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2027",
    "image": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp",
    "lat": 18.5204,
    "lng": 73.9872,
    "reraId": "P52100032145",
    "totalAcres": "9.5 Acres",
    "totalFloors": "G+26 Floors",
    "floorsAndAcres": "9.5 Acres \u2022 G+26 Floors",
    "description": "Godrej Park Springs in Manjari Pune is an expansive green-themed development featuring scenic natural springs, skywalk trails, and quick access to Hadapsar and Kharadi.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Park Springs?",
        "answer": "Godrej Park Springs is sanctioned under MahaRERA registration number P52100032145. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Park Springs?",
        "answer": "Godrej Park Springs configurations start from \u20b968.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Park Springs?",
        "answer": "Godrej Park Springs features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Park Springs?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-park-springs-manjari-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5204,73.9872&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Pune"
  },
  {
    "id": "p-godrej-serene-mamurdi",
    "title": "Godrej Serene",
    "slug": "godrej-serene-mamurdi",
    "builderId": "b-godrej",
    "location": "Mamurdi, Pune",
    "priceRange": "\u20b955.00 L - \u20b988.00 L",
    "exactPrice": "\u20b955.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp",
    "lat": 18.6723,
    "lng": 73.7145,
    "reraId": "P52100029871",
    "totalAcres": "12.0 Acres",
    "totalFloors": "G+24 Floors",
    "floorsAndAcres": "12.0 Acres \u2022 G+24 Floors",
    "description": "Godrej Serene in Mamurdi Pune is designed around holistic lifestyle amenities with 1+ acre central park, grand clubhouse, and immediate access to the Pune-Mumbai Expressway.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Serene?",
        "answer": "Godrej Serene is sanctioned under MahaRERA registration number P52100029871. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Serene?",
        "answer": "Godrej Serene configurations start from \u20b955.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Serene?",
        "answer": "Godrej Serene features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Serene?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-serene-mamurdi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.6723,73.7145&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Pune"
  },
  {
    "id": "p-godrej-green-cove-mahalunge",
    "title": "Godrej Green Cove",
    "slug": "godrej-green-cove-mahalunge",
    "builderId": "b-godrej",
    "location": "Mahalunge, Pune",
    "priceRange": "\u20b962.00 L - \u20b995.00 L",
    "exactPrice": "\u20b962.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "lat": 18.5635,
    "lng": 73.743,
    "reraId": "P52100026875",
    "totalAcres": "8.0 Acres",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "8.0 Acres \u2022 G+28 Floors",
    "description": "Godrej Green Cove is part of the 100+ acre Godrej Riverhills Township in Mahalunge, offering lush riverfront views, cycling tracks, and an integrated high-street retail zone.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Green Cove?",
        "answer": "Godrej Green Cove is sanctioned under MahaRERA registration number P52100026875. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Green Cove?",
        "answer": "Godrej Green Cove configurations start from \u20b962.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Green Cove?",
        "answer": "Godrej Green Cove features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Green Cove?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-green-cove-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5635,73.743&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Pune"
  },
  {
    "id": "p-godrej-park-greens-mamurdi",
    "title": "Godrej Park Greens",
    "slug": "godrej-park-greens-mamurdi",
    "builderId": "b-godrej",
    "location": "Mamurdi, Pune",
    "priceRange": "\u20b954.00 L - \u20b982.00 L",
    "exactPrice": "\u20b954.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "lat": 18.671,
    "lng": 73.713,
    "reraId": "P52100019639",
    "totalAcres": "10.5 Acres",
    "totalFloors": "G+22 Floors",
    "floorsAndAcres": "10.5 Acres \u2022 G+22 Floors",
    "description": "Godrej Park Greens offers over 1,100 trees, tree houses, and reflexology paths in Mamurdi, making it one of Pune's most nature-blessed residential communities.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Park Greens?",
        "answer": "Godrej Park Greens is sanctioned under MahaRERA registration number P52100019639. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Park Greens?",
        "answer": "Godrej Park Greens configurations start from \u20b954.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Park Greens?",
        "answer": "Godrej Park Greens features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Park Greens?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-park-greens-mamurdi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.671,73.713&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Pune"
  },
  {
    "id": "p-godrej-hillview-estate-expressway",
    "title": "Godrej Hillview Estate",
    "slug": "godrej-hillview-estate-expressway",
    "builderId": "b-godrej",
    "location": "Khalapur, Pune-Mumbai Expressway",
    "priceRange": "\u20b945.00 L - \u20b91.20 Cr",
    "exactPrice": "\u20b945.00 L",
    "configurations": [
      "Villa Plot",
      "Resort Villa"
    ],
    "status": "New Launch",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "lat": 18.825,
    "lng": 73.284,
    "reraId": "P52000052341",
    "totalAcres": "100+ Acres Hillside Estate",
    "totalFloors": "G+1 Luxury Villas",
    "floorsAndAcres": "100+ Acres Hillside Estate \u2022 G+1 Luxury Villas",
    "description": "Godrej Hillview Estate is an exclusive branded plotted development nestled against the Sahyadri hills off the Pune-Mumbai Expressway, featuring custom villa layouts.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Pune with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Hillview Estate?",
        "answer": "Godrej Hillview Estate is sanctioned under MahaRERA registration number P52000052341. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Hillview Estate?",
        "answer": "Godrej Hillview Estate configurations start from \u20b945.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Hillview Estate?",
        "answer": "Godrej Hillview Estate features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Hillview Estate?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-hillview-estate-expressway-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.825,73.284&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Lonavala"
  },
  {
    "id": "p-godrej-nurture-bhandup",
    "title": "Godrej Nurture",
    "slug": "godrej-nurture-bhandup",
    "builderId": "b-godrej",
    "location": "Bhandup West, Mumbai",
    "priceRange": "\u20b91.45 Cr - \u20b92.65 Cr",
    "exactPrice": "\u20b91.45 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "lat": 19.1524,
    "lng": 72.9372,
    "reraId": "P51800023412",
    "totalAcres": "6.5 Acres",
    "totalFloors": "G+33 Floors",
    "floorsAndAcres": "6.5 Acres \u2022 G+33 Floors",
    "description": "Godrej Nurture in Bhandup Mumbai is a child-development-focused community with dedicated academies for sports, music, languages, and modern science.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Nurture?",
        "answer": "Godrej Nurture is sanctioned under MahaRERA registration number P51800023412. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Nurture?",
        "answer": "Godrej Nurture configurations start from \u20b91.45 Cr with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Nurture?",
        "answer": "Godrej Nurture features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Nurture?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-nurture-bhandup-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.1524,72.9372&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-godrej-urban-park-chandivali",
    "title": "Godrej Urban Park",
    "slug": "godrej-urban-park-chandivali",
    "builderId": "b-godrej",
    "location": "Chandivali, Powai Extension, Mumbai",
    "priceRange": "\u20b91.55 Cr - \u20b92.85 Cr",
    "exactPrice": "\u20b91.55 Cr",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2027",
    "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "lat": 19.1136,
    "lng": 72.8953,
    "reraId": "P51800028364",
    "totalAcres": "7.0 Acres",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "7.0 Acres \u2022 G+28 Floors",
    "description": "Godrej Urban Park near Powai Mumbai features rooftop amenities, sky cinema, jogging loops, and proximity to corporate hubs in BKC, SEEPZ, and Powai.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Urban Park?",
        "answer": "Godrej Urban Park is sanctioned under MahaRERA registration number P51800028364. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Urban Park?",
        "answer": "Godrej Urban Park configurations start from \u20b91.55 Cr with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Urban Park?",
        "answer": "Godrej Urban Park features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Urban Park?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-urban-park-chandivali-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.1136,72.8953&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-godrej-bandra-bay",
    "title": "Godrej Bandra Bay",
    "slug": "godrej-bandra-bay",
    "builderId": "b-godrej",
    "location": "Bandra West, Mumbai",
    "priceRange": "\u20b99.50 Cr - \u20b924.00 Cr",
    "exactPrice": "\u20b99.50 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK",
      "Penthouse"
    ],
    "status": "New Launch",
    "type": "Residential",
    "possessionDate": "Dec 2028",
    "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "lat": 19.0596,
    "lng": 72.8295,
    "reraId": "P51800054390",
    "totalAcres": "3.5 Acres Seafront",
    "totalFloors": "G+42 Iconic Towers",
    "floorsAndAcres": "3.5 Acres Seafront \u2022 G+42 Iconic Towers",
    "description": "Godrej Bandra Bay is an architectural trophy residence overlooking Bandra Bay with private infinity edge pools, personal elevators, and 5-star hotel concierge.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Bandra Bay?",
        "answer": "Godrej Bandra Bay is sanctioned under MahaRERA registration number P51800054390. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Bandra Bay?",
        "answer": "Godrej Bandra Bay configurations start from \u20b99.50 Cr with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Bandra Bay?",
        "answer": "Godrej Bandra Bay features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Bandra Bay?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-bandra-bay-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.0596,72.8295&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-golf-crest-godrej-city-panvel",
    "title": "Godrej City Panvel",
    "slug": "golf-crest-godrej-city-panvel",
    "builderId": "b-godrej",
    "location": "Panvel, Navi Mumbai",
    "priceRange": "\u20b958.00 L - \u20b91.25 Cr",
    "exactPrice": "\u20b958.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "lat": 18.9894,
    "lng": 73.1175,
    "reraId": "P52000018146",
    "totalAcres": "150+ Acres Golf Township",
    "totalFloors": "G+32 Towers",
    "floorsAndAcres": "150+ Acres Golf Township \u2022 G+32 Towers",
    "description": "Godrej City Panvel is a 150-acre integrated mega-township featuring a 9-hole golf course, high-street retail, international school, and close access to the Navi Mumbai International Airport.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej City Panvel?",
        "answer": "Godrej City Panvel is sanctioned under MahaRERA registration number P52000018146. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej City Panvel?",
        "answer": "Godrej City Panvel configurations start from \u20b958.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej City Panvel?",
        "answer": "Godrej City Panvel features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej City Panvel?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/golf-crest-godrej-city-panvel-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.9894,73.1175&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-godrej-upavan-thane-extension",
    "title": "Godrej Upavan",
    "slug": "godrej-upavan-thane-extension",
    "builderId": "b-godrej",
    "location": "Thane Extension, Kalyan-Bhiwandi Road",
    "priceRange": "\u20b942.00 L - \u20b975.00 L",
    "exactPrice": "\u20b942.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "lat": 19.2612,
    "lng": 73.1023,
    "reraId": "P51700027436",
    "totalAcres": "11.0 Acres",
    "totalFloors": "G+33 Floors",
    "floorsAndAcres": "11.0 Acres \u2022 G+33 Floors",
    "description": "Godrej Upavan features 2+ hectares of greens, 50+ lifestyle amenities, and round-the-clock convenience in the rapidly appreciating Thane Extension belt.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Upavan?",
        "answer": "Godrej Upavan is sanctioned under MahaRERA registration number P51700027436. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Upavan?",
        "answer": "Godrej Upavan configurations start from \u20b942.00 L with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Upavan?",
        "answer": "Godrej Upavan features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Upavan?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-upavan-thane-extension-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.2612,73.1023&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-godrej-prime-chembur",
    "title": "Godrej Prime",
    "slug": "godrej-prime-chembur",
    "builderId": "b-godrej",
    "location": "Chembur, Central Mumbai",
    "priceRange": "\u20b91.65 Cr - \u20b93.10 Cr",
    "exactPrice": "\u20b91.65 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "lat": 19.0626,
    "lng": 72.8994,
    "reraId": "P51800000519",
    "totalAcres": "6.0 Acres",
    "totalFloors": "G+15 Floors",
    "floorsAndAcres": "6.0 Acres \u2022 G+15 Floors",
    "description": "Godrej Prime in Chembur connects Central Mumbai, BKC, and South Mumbai seamlessly via the Eastern Freeway and SCLR, featuring rooftop gardens and clubhouse.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
      "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Godrej Properties Brand Assurance & Green Living",
      "Prime Location in Mumbai with Fast Appreciation",
      "Bank Approved Home Loans by SBI, HDFC, ICICI"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining & Bedrooms, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Kitchen Counter with Stainless Steel Sink and Exhaust Provision"
      },
      {
        "label": "Bathrooms",
        "value": "Jaquar / Kohler Premium CP & Sanitary Fittings with Solar Water Provision"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows with Mosquito Net"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Prime?",
        "answer": "Godrej Prime is sanctioned under MahaRERA registration number P51800000519. All legal clearances and construction milestones are compliant."
      },
      {
        "question": "What is the starting price for Godrej Prime?",
        "answer": "Godrej Prime configurations start from \u20b91.65 Cr with direct partner terms and no brokerage fee."
      },
      {
        "question": "What amenities are available at Godrej Prime?",
        "answer": "Godrej Prime features resort-style amenities including an Olympic-length swimming pool, fully equipped clubhouse, fitness center, kids play area, and lush green gardens."
      },
      {
        "question": "How to arrange a site visit for Godrej Prime?",
        "answer": "You can arrange a free builder-accompanied site visit with PROPSMART REALTY by clicking 'Schedule Site Visit' or calling our Pune & Mumbai team directly."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-prime-chembur-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=19.0626,72.8994&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Bank of Baroda"
    ],
    "city": "Mumbai"
  },
  {
    "id": "p-earth-one-by-vtp-luxe-mahalunge",
    "title": "Earth One by VTP Luxe",
    "slug": "earth-one-by-vtp-luxe-mahalunge",
    "builderId": "b-vtp",
    "location": "Mahalunge, Pune",
    "city": "Pune",
    "priceRange": "\u20b982.00 L - \u20b91.85 Cr",
    "exactPrice": "\u20b982.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Luxury",
        "carpetArea": "765 - 820 sq.ft",
        "priceRange": "\u20b982.00 L - \u20b992.00 L"
      },
      {
        "type": "3 BHK Premium",
        "carpetArea": "1045 - 1180 sq.ft",
        "priceRange": "\u20b91.15 Cr - \u20b91.35 Cr"
      },
      {
        "type": "4 BHK Grand Luxe",
        "carpetArea": "1580 - 1850 sq.ft",
        "priceRange": "\u20b91.65 Cr - \u20b91.85 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "lat": 18.563,
    "lng": 73.742,
    "reraId": "P5210005182",
    "totalAcres": "10.0 Acres Riverfront Township",
    "totalFloors": "5 Iconic Towers (G+34 Floors)",
    "floorsAndAcres": "10.0 Acres Riverfront Township \u2022 5 Iconic Towers (G+34 Floors)",
    "description": "Earth One by VTP Luxe in Mahalunge Pune offers riverside architectural excellence, maximum livable area (MLA) layouts, 5-tier club indulgence, and seamless transit to Hinjewadi Phase 1.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Earth One by VTP Luxe?",
        "answer": "Earth One by VTP Luxe is approved under MahaRERA registration number P5210005182. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Earth One by VTP Luxe?",
        "answer": "Earth One by VTP Luxe offers 2 BHK, 3 BHK, 4 BHK with carpet sizes ranging across 765 - 820 sq.ft and starting at an exact price of \u20b982.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Earth One by VTP Luxe?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Earth One by VTP Luxe?",
        "answer": "The scheduled possession date for Earth One by VTP Luxe is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/earth-one-by-vtp-luxe-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.563,73.742&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-monarque-hinjawadi",
    "title": "VTP Monarque",
    "slug": "vtp-monarque-hinjawadi",
    "builderId": "b-vtp",
    "location": "Hinjewadi Phase 1, Pune",
    "city": "Pune",
    "priceRange": "\u20b978.00 L - \u20b91.55 Cr",
    "exactPrice": "\u20b978.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Smart",
        "carpetArea": "745 - 790 sq.ft",
        "priceRange": "\u20b978.00 L - \u20b986.00 L"
      },
      {
        "type": "3 BHK Grand",
        "carpetArea": "1025 - 1150 sq.ft",
        "priceRange": "\u20b91.10 Cr - \u20b91.28 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "reraId": "P5210004984",
    "totalAcres": "7.5 Acres",
    "totalFloors": "4 Towers (G+32 Floors)",
    "floorsAndAcres": "7.5 Acres \u2022 4 Towers (G+32 Floors)",
    "description": "Monarque by VTP Luxe in Hinjewadi Phase 1 offers royal high-rise homes right next to Infosys Circle with smart-home automation and Olympic-scale sporting amenities.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-monarque-hinjawadi-pune/Monarque_Master_Plan_27199f1f86.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Monarque?",
        "answer": "VTP Monarque is approved under MahaRERA registration number P5210004984. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Monarque?",
        "answer": "VTP Monarque offers 2 BHK, 3 BHK with carpet sizes ranging across 745 - 790 sq.ft and starting at an exact price of \u20b978.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Monarque?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Monarque?",
        "answer": "The scheduled possession date for VTP Monarque is June 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-monarque-hinjawadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5913,73.7389&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-aurelia-kharadi",
    "title": "VTP Aurelia",
    "slug": "vtp-aurelia-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b989.00 L - \u20b91.65 Cr",
    "exactPrice": "\u20b989.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK MLA",
        "carpetArea": "775 - 830 sq.ft",
        "priceRange": "\u20b989.00 L - \u20b998.00 L"
      },
      {
        "type": "3 BHK MLA",
        "carpetArea": "1080 - 1240 sq.ft",
        "priceRange": "\u20b91.25 Cr - \u20b91.45 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "lat": 18.5529,
    "lng": 73.9416,
    "reraId": "P5210005540",
    "totalAcres": "6.8 Acres",
    "totalFloors": "G+30 Floors",
    "floorsAndAcres": "6.8 Acres \u2022 G+30 Floors",
    "description": "VTP Aurelia at Township Codename Pegasus in Kharadi is a benchmark in high-end living with heated swimming pools, grand clubhouse, and quick access to EON Free Zone.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aurelia-kharadi-pune/Aurelia_Master_Plan_0a37b12d7c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Aurelia?",
        "answer": "VTP Aurelia is approved under MahaRERA registration number P5210005540. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Aurelia?",
        "answer": "VTP Aurelia offers 2 BHK, 3 BHK with carpet sizes ranging across 775 - 830 sq.ft and starting at an exact price of \u20b989.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Aurelia?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Aurelia?",
        "answer": "The scheduled possession date for VTP Aurelia is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-aurelia-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5529,73.9416&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-altamira-kharadi",
    "title": "VTP Altamira",
    "slug": "vtp-altamira-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b985.00 L - \u20b91.48 Cr",
    "exactPrice": "\u20b985.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "750 - 810 sq.ft",
        "priceRange": "\u20b985.00 L - \u20b994.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1040 - 1160 sq.ft",
        "priceRange": "\u20b91.18 Cr - \u20b91.35 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/LW8ofJLVdcWXF1ixxVLZJIS7lmzcBGIFY3WSZJ6X.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/LW8ofJLVdcWXF1ixxVLZJIS7lmzcBGIFY3WSZJ6X.webp",
    "lat": 18.5535,
    "lng": 73.9425,
    "reraId": "P5210005181",
    "totalAcres": "5.5 Acres",
    "totalFloors": "G+29 Floors",
    "floorsAndAcres": "5.5 Acres \u2022 G+29 Floors",
    "description": "VTP Altamira brings Spanish-inspired elegance to Kharadi Pune with high-ceiling residences, landscaped central courtyard, and designer podium amenities.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altamira-kharadi-pune/Altamira_Master_Plan_166b88523c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Altamira?",
        "answer": "VTP Altamira is approved under MahaRERA registration number P5210005181. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Altamira?",
        "answer": "VTP Altamira offers 2 BHK, 3 BHK with carpet sizes ranging across 750 - 810 sq.ft and starting at an exact price of \u20b985.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Altamira?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Altamira?",
        "answer": "The scheduled possession date for VTP Altamira is June 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-altamira-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5535,73.9425&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-velvet-villas-by-vtp-luxe-kharadi",
    "title": "Velvet Villas by VTP Luxe",
    "slug": "velvet-villas-by-vtp-luxe-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b93.50 Cr - \u20b96.80 Cr",
    "exactPrice": "\u20b93.50 Cr",
    "configurations": [
      "4 BHK Villa",
      "5 BHK Villa"
    ],
    "configurationDetails": [
      {
        "type": "4 BHK Signature Villa",
        "carpetArea": "3200 - 3800 sq.ft",
        "priceRange": "\u20b93.50 Cr - \u20b94.50 Cr"
      },
      {
        "type": "5 BHK Imperial Villa",
        "carpetArea": "4500 - 5400 sq.ft",
        "priceRange": "\u20b95.20 Cr - \u20b96.80 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://keystoneliv.com/public/uploads/property/8jc5QT6quqef9ftDCKWF9whFNXYnqsn8HFcXlNK6.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/8jc5QT6quqef9ftDCKWF9whFNXYnqsn8HFcXlNK6.webp",
    "lat": 18.554,
    "lng": 73.945,
    "reraId": "P5210005241",
    "totalAcres": "12.0 Acres Gated Villa Enclave",
    "totalFloors": "G+2 Private Villas with Lift",
    "floorsAndAcres": "12.0 Acres Gated Villa Enclave \u2022 G+2 Private Villas with Lift",
    "description": "Velvet Villas by VTP Luxe is Pune's ultimate private sanctuary offering custom luxury villas with personal elevators, private swimming pools, and manicured lawns in Kharadi.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/velvet-villas-by-vtp-luxe-kharadi-pune/Velvet_Villas_Master_Plan_8c72834b1a.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Velvet Villas by VTP Luxe?",
        "answer": "Velvet Villas by VTP Luxe is approved under MahaRERA registration number P5210005241. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Velvet Villas by VTP Luxe?",
        "answer": "Velvet Villas by VTP Luxe offers 4 BHK Villa, 5 BHK Villa with carpet sizes ranging across 3200 - 3800 sq.ft and starting at an exact price of \u20b93.50 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Velvet Villas by VTP Luxe?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Velvet Villas by VTP Luxe?",
        "answer": "The scheduled possession date for Velvet Villas by VTP Luxe is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/velvet-villas-by-vtp-luxe-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.554,73.945&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-volare-hinjawadi",
    "title": "VTP Volare",
    "slug": "vtp-volare-hinjawadi",
    "builderId": "b-vtp",
    "location": "Hinjewadi Phase 1, Pune",
    "city": "Pune",
    "priceRange": "\u20b975.00 L - \u20b91.35 Cr",
    "exactPrice": "\u20b975.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "720 - 785 sq.ft",
        "priceRange": "\u20b975.00 L - \u20b984.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "990 - 1120 sq.ft",
        "priceRange": "\u20b91.05 Cr - \u20b91.22 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "lat": 18.5905,
    "lng": 73.737,
    "reraId": "P5210004737",
    "totalAcres": "6.0 Acres",
    "totalFloors": "G+30 Floors",
    "floorsAndAcres": "6.0 Acres \u2022 G+30 Floors",
    "description": "VTP Volare in Hinjewadi Phase 1 provides state-of-the-art tech living for IT executives, featuring smart digital locks, home automation, and 24x7 fitness zones.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Volare?",
        "answer": "VTP Volare is approved under MahaRERA registration number P5210004737. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Volare?",
        "answer": "VTP Volare offers 2 BHK, 3 BHK with carpet sizes ranging across 720 - 785 sq.ft and starting at an exact price of \u20b975.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Volare?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Volare?",
        "answer": "The scheduled possession date for VTP Volare is June 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-volare-hinjawadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5905,73.737&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-verve-baner-sus",
    "title": "VTP Verve",
    "slug": "vtp-verve-baner-sus",
    "builderId": "b-vtp",
    "location": "Baner-Sus Road, Pune",
    "city": "Pune",
    "priceRange": "\u20b988.00 L - \u20b91.52 Cr",
    "exactPrice": "\u20b988.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "760 - 825 sq.ft",
        "priceRange": "\u20b988.00 L - \u20b996.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1050 - 1200 sq.ft",
        "priceRange": "\u20b91.22 Cr - \u20b91.40 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "lat": 18.558,
    "lng": 73.765,
    "reraId": "P5210004731",
    "totalAcres": "5.0 Acres",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "5.0 Acres \u2022 G+28 Floors",
    "description": "VTP Verve on Baner-Sus Road combines picturesque hill views with modern urban comfort, featuring high-speed elevators, infinity swimming pool, and sky observation deck.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-verve-baner-sus-pune/Verve_Master_Plan_4b72183c9a.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Verve?",
        "answer": "VTP Verve is approved under MahaRERA registration number P5210004731. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Verve?",
        "answer": "VTP Verve offers 2 BHK, 3 BHK with carpet sizes ranging across 760 - 825 sq.ft and starting at an exact price of \u20b988.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Verve?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Verve?",
        "answer": "The scheduled possession date for VTP Verve is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-verve-baner-sus-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.558,73.765&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-cielo-bavdhan",
    "title": "VTP Cielo",
    "slug": "vtp-cielo-bavdhan",
    "builderId": "b-vtp",
    "location": "Bavdhan, Pune",
    "city": "Pune",
    "priceRange": "\u20b995.00 L - \u20b91.95 Cr",
    "exactPrice": "\u20b995.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "780 - 840 sq.ft",
        "priceRange": "\u20b995.00 L - \u20b91.05 Cr"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1120 - 1280 sq.ft",
        "priceRange": "\u20b91.35 Cr - \u20b91.55 Cr"
      },
      {
        "type": "4 BHK",
        "carpetArea": "1650 - 1880 sq.ft",
        "priceRange": "\u20b91.80 Cr - \u20b91.95 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2027",
    "image": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "lat": 18.5134,
    "lng": 73.7742,
    "reraId": "P5210004584",
    "totalAcres": "6.2 Acres",
    "totalFloors": "G+27 Floors",
    "floorsAndAcres": "6.2 Acres \u2022 G+27 Floors",
    "description": "VTP Cielo in Bavdhan is nestled amidst lush green hills with clean air and great connectivity to Kothrud and the Pune-Bangalore Highway.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-cielo-bavdhan-pune/Cielo_Master_Plan_5a82741b2c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Cielo?",
        "answer": "VTP Cielo is approved under MahaRERA registration number P5210004584. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Cielo?",
        "answer": "VTP Cielo offers 2 BHK, 3 BHK, 4 BHK with carpet sizes ranging across 780 - 840 sq.ft and starting at an exact price of \u20b995.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Cielo?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Cielo?",
        "answer": "The scheduled possession date for VTP Cielo is March 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-cielo-bavdhan-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5134,73.7742&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-euphoria-kharadi",
    "title": "VTP Euphoria",
    "slug": "vtp-euphoria-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b958.00 L - \u20b91.15 Cr",
    "exactPrice": "\u20b958.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "480 - 520 sq.ft",
        "priceRange": "\u20b958.00 L - \u20b964.00 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "720 - 790 sq.ft",
        "priceRange": "\u20b978.00 L - \u20b988.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1010 - 1140 sq.ft",
        "priceRange": "\u20b91.05 Cr - \u20b91.15 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "lat": 18.552,
    "lng": 73.94,
    "reraId": "P5210003182",
    "totalAcres": "8.8 Acres",
    "totalFloors": "G+30 Floors",
    "floorsAndAcres": "8.8 Acres \u2022 G+30 Floors",
    "description": "VTP Euphoria in Kharadi offers vibrant community living with over 30 lifestyle amenities, a central sports arena, and kid-friendly learning zones.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-euphoria-kharadi-pune/Euphoria_Master_Plan_9c82613d4b.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Euphoria?",
        "answer": "VTP Euphoria is approved under MahaRERA registration number P5210003182. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Euphoria?",
        "answer": "VTP Euphoria offers 1 BHK, 2 BHK, 3 BHK with carpet sizes ranging across 480 - 520 sq.ft and starting at an exact price of \u20b958.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Euphoria?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Euphoria?",
        "answer": "The scheduled possession date for VTP Euphoria is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-euphoria-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.552,73.94&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-sierra-baner-sus",
    "title": "VTP Sierra",
    "slug": "vtp-sierra-baner-sus",
    "builderId": "b-vtp",
    "location": "Baner-Sus Road, Pune",
    "city": "Pune",
    "priceRange": "\u20b982.00 L - \u20b91.45 Cr",
    "exactPrice": "\u20b982.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "745 - 810 sq.ft",
        "priceRange": "\u20b982.00 L - \u20b990.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1020 - 1180 sq.ft",
        "priceRange": "\u20b91.15 Cr - \u20b91.35 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "lat": 18.5575,
    "lng": 73.764,
    "reraId": "P5210002677",
    "totalAcres": "6.5 Acres",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "6.5 Acres \u2022 G+28 Floors",
    "description": "VTP Sierra on Baner-Sus Road provides breathtaking mountain horizons, 3-tier clubhouse amenities, and quick transit to Balewadi High Street.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-sierra-baner-sus-pune/Sierra_Master_Plan_6b71829c3a.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Sierra?",
        "answer": "VTP Sierra is approved under MahaRERA registration number P5210002677. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Sierra?",
        "answer": "VTP Sierra offers 2 BHK, 3 BHK with carpet sizes ranging across 745 - 810 sq.ft and starting at an exact price of \u20b982.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Sierra?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Sierra?",
        "answer": "The scheduled possession date for VTP Sierra is June 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-sierra-baner-sus-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5575,73.764&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-flamante-by-vtp-luxe-kharadi",
    "title": "Flamante by VTP Luxe",
    "slug": "flamante-by-vtp-luxe-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b91.25 Cr - \u20b92.75 Cr",
    "exactPrice": "\u20b91.25 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Luxe",
        "carpetArea": "820 - 890 sq.ft",
        "priceRange": "\u20b91.25 Cr - \u20b91.40 Cr"
      },
      {
        "type": "3 BHK Luxe",
        "carpetArea": "1180 - 1350 sq.ft",
        "priceRange": "\u20b91.65 Cr - \u20b91.95 Cr"
      },
      {
        "type": "4 BHK Luxe",
        "carpetArea": "1720 - 2100 sq.ft",
        "priceRange": "\u20b92.30 Cr - \u20b92.75 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "lat": 18.5532,
    "lng": 73.943,
    "reraId": "P5210005631",
    "totalAcres": "7.0 Acres",
    "totalFloors": "G+33 Floors",
    "floorsAndAcres": "7.0 Acres \u2022 G+33 Floors",
    "description": "Flamante by VTP Luxe is an opulent address in Kharadi Pune featuring Italian marble flooring, high-end fittings, private decks, and a sky observatory.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/flamante-by-vtp-luxe-kharadi-pune/Flamante_Master_Plan_7a81294c5d.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Flamante by VTP Luxe?",
        "answer": "Flamante by VTP Luxe is approved under MahaRERA registration number P5210005631. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Flamante by VTP Luxe?",
        "answer": "Flamante by VTP Luxe offers 2 BHK, 3 BHK, 4 BHK with carpet sizes ranging across 820 - 890 sq.ft and starting at an exact price of \u20b91.25 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Flamante by VTP Luxe?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Flamante by VTP Luxe?",
        "answer": "The scheduled possession date for Flamante by VTP Luxe is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/flamante-by-vtp-luxe-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5532,73.943&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-aethereus-mahalunge",
    "title": "VTP Aethereus",
    "slug": "vtp-aethereus-mahalunge",
    "builderId": "b-vtp",
    "location": "Mahalunge, Pune",
    "city": "Pune",
    "priceRange": "\u20b969.00 L - \u20b91.28 Cr",
    "exactPrice": "\u20b969.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "710 - 775 sq.ft",
        "priceRange": "\u20b969.00 L - \u20b978.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "980 - 1110 sq.ft",
        "priceRange": "\u20b999.00 L - \u20b91.18 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "lat": 18.5638,
    "lng": 73.7435,
    "reraId": "P5210002837",
    "totalAcres": "8.0 Acres",
    "totalFloors": "G+31 Floors",
    "floorsAndAcres": "8.0 Acres \u2022 G+31 Floors",
    "description": "VTP Aethereus offers modern township living with an integrated high-street retail promenade, health spa, and riverside lifestyle amenities in Mahalunge.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aethereus-high-street-mahalunge-pune/Aethereus_Master_Plan_3b81729c1a.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Aethereus?",
        "answer": "VTP Aethereus is approved under MahaRERA registration number P5210002837. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Aethereus?",
        "answer": "VTP Aethereus offers 2 BHK, 3 BHK with carpet sizes ranging across 710 - 775 sq.ft and starting at an exact price of \u20b969.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Aethereus?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Aethereus?",
        "answer": "The scheduled possession date for VTP Aethereus is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-aethereus-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5638,73.7435&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-altitude-wakad",
    "title": "VTP Altitude",
    "slug": "vtp-altitude-wakad",
    "builderId": "b-vtp",
    "location": "Wakad, Pune",
    "city": "Pune",
    "priceRange": "\u20b982.00 L - \u20b91.80 Cr",
    "exactPrice": "\u20b982.00 L",
    "configurations": [
      "Commercial Offices",
      "Retail Shops"
    ],
    "configurationDetails": [
      {
        "type": "Grade A Office",
        "carpetArea": "450 - 950 sq.ft",
        "priceRange": "\u20b982.00 L - \u20b91.35 Cr"
      },
      {
        "type": "High Street Retail",
        "carpetArea": "600 - 1400 sq.ft",
        "priceRange": "\u20b91.20 Cr - \u20b91.80 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2026",
    "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
    "lat": 18.5985,
    "lng": 73.768,
    "reraId": "P5210003169",
    "totalAcres": "3.5 Acres Commercial Landmark",
    "totalFloors": "Iconic G+24 Commercial Tower",
    "floorsAndAcres": "3.5 Acres Commercial Landmark \u2022 Iconic G+24 Commercial Tower",
    "description": "VTP Altitude is Wakad's premier commercial high-rise tower offering Grade-A corporate offices, retail spaces, and conference facilities right on the Mumbai-Pune Expressway exit.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altitude-wakad-pune/Altitude_Master_Plan_2a71829c4d.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Altitude?",
        "answer": "VTP Altitude is approved under MahaRERA registration number P5210003169. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Altitude?",
        "answer": "VTP Altitude offers Commercial Offices, Retail Shops with carpet sizes ranging across 450 - 950 sq.ft and starting at an exact price of \u20b982.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Altitude?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Altitude?",
        "answer": "The scheduled possession date for VTP Altitude is June 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-altitude-wakad-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5985,73.768&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-bellissimo-hinjewadi",
    "title": "VTP Bellissimo",
    "slug": "vtp-bellissimo-hinjewadi",
    "builderId": "b-vtp",
    "location": "Hinjewadi Phase 1, Pune",
    "city": "Pune",
    "priceRange": "\u20b976.00 L - \u20b91.42 Cr",
    "exactPrice": "\u20b976.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "730 - 795 sq.ft",
        "priceRange": "\u20b976.00 L - \u20b985.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1015 - 1160 sq.ft",
        "priceRange": "\u20b91.10 Cr - \u20b91.28 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "lat": 18.591,
    "lng": 73.738,
    "reraId": "P5210002813",
    "totalAcres": "9.2 Acres",
    "totalFloors": "G+32 Floors",
    "floorsAndAcres": "9.2 Acres \u2022 G+32 Floors",
    "description": "VTP Bellissimo in Hinjewadi Phase 1 features 3-side open residences with uninterrupted hill views, heated lap pool, and walking proximity to Wipro and Quadron IT Park.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-bellissimo-hinjewadi-pune/Bellissimo_Master_Plan_1a82937c5f.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Bellissimo?",
        "answer": "VTP Bellissimo is approved under MahaRERA registration number P5210002813. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Bellissimo?",
        "answer": "VTP Bellissimo offers 2 BHK, 3 BHK with carpet sizes ranging across 730 - 795 sq.ft and starting at an exact price of \u20b976.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Bellissimo?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Bellissimo?",
        "answer": "The scheduled possession date for VTP Bellissimo is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-bellissimo-hinjewadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.591,73.738&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-hilife-wakad",
    "title": "VTP Hilife",
    "slug": "vtp-hilife-wakad",
    "builderId": "b-vtp",
    "location": "Wakad, Pune",
    "city": "Pune",
    "priceRange": "\u20b982.00 L - \u20b91.35 Cr",
    "exactPrice": "\u20b982.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "735 - 800 sq.ft",
        "priceRange": "\u20b982.00 L - \u20b991.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "1030 - 1150 sq.ft",
        "priceRange": "\u20b91.12 Cr - \u20b91.28 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/Zer51XQI5ojyaQkJzALaQDh3PUsVuRYsoTIvuyGp.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Zer51XQI5ojyaQkJzALaQDh3PUsVuRYsoTIvuyGp.webp",
    "lat": 18.599,
    "lng": 73.769,
    "reraId": "P52100018274",
    "totalAcres": "5.5 Acres",
    "totalFloors": "G+22 Floors",
    "floorsAndAcres": "5.5 Acres \u2022 G+22 Floors",
    "description": "VTP Hilife in Wakad is a ready-to-move-in lifestyle landmark featuring double-height club lounge, swimming pool, and prime location off Dange Chowk.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-hilife-wakad-pune/Hilife_Master_Plan_5c82917d3b.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Hilife?",
        "answer": "VTP Hilife is approved under MahaRERA registration number P52100018274. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Hilife?",
        "answer": "VTP Hilife offers 2 BHK, 3 BHK with carpet sizes ranging across 735 - 800 sq.ft and starting at an exact price of \u20b982.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Hilife?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Hilife?",
        "answer": "The scheduled possession date for VTP Hilife is Ready to Move."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-hilife-wakad-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.599,73.769&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-leonara-mahalunge",
    "title": "VTP Leonara",
    "slug": "vtp-leonara-mahalunge",
    "builderId": "b-vtp",
    "location": "Mahalunge, Pune",
    "city": "Pune",
    "priceRange": "\u20b965.00 L - \u20b91.10 Cr",
    "exactPrice": "\u20b965.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "465 - 510 sq.ft",
        "priceRange": "\u20b965.00 L - \u20b970.00 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "715 - 770 sq.ft",
        "priceRange": "\u20b978.00 L - \u20b986.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "985 - 1100 sq.ft",
        "priceRange": "\u20b998.00 L - \u20b91.10 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp",
    "lat": 18.562,
    "lng": 73.741,
    "reraId": "P52100019902",
    "totalAcres": "100+ Acre Bluewaters Township",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "100+ Acre Bluewaters Township \u2022 G+28 Floors",
    "description": "VTP Leonara is an established ready community within Township Codename Bluewaters in Mahalunge, offering lush river promenades and cricket academy.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Leonara?",
        "answer": "VTP Leonara is approved under MahaRERA registration number P52100019902. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Leonara?",
        "answer": "VTP Leonara offers 1 BHK, 2 BHK, 3 BHK with carpet sizes ranging across 465 - 510 sq.ft and starting at an exact price of \u20b965.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Leonara?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Leonara?",
        "answer": "The scheduled possession date for VTP Leonara is Ready to Move."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-leonara-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.562,73.741&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-belair-mahalunge",
    "title": "VTP Belair",
    "slug": "vtp-belair-mahalunge",
    "builderId": "b-vtp",
    "location": "Mahalunge, Pune",
    "city": "Pune",
    "priceRange": "\u20b962.00 L - \u20b91.05 Cr",
    "exactPrice": "\u20b962.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "470 - 515 sq.ft",
        "priceRange": "\u20b962.00 L - \u20b968.00 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "710 - 765 sq.ft",
        "priceRange": "\u20b975.00 L - \u20b984.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "970 - 1080 sq.ft",
        "priceRange": "\u20b995.00 L - \u20b91.05 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dllJJfjjSSZzKD4GqapaGnZYQXOspHGlmKMt9QUX.webp",
    "lat": 18.5625,
    "lng": 73.7415,
    "reraId": "P52100020331",
    "totalAcres": "7.8 Acres",
    "totalFloors": "G+26 Floors",
    "floorsAndAcres": "7.8 Acres \u2022 G+26 Floors",
    "description": "VTP Belair offers comfortable contemporary family residences surrounded by pristine river views and 75% open spaces in Mahalunge.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Belair?",
        "answer": "VTP Belair is approved under MahaRERA registration number P52100020331. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Belair?",
        "answer": "VTP Belair offers 1 BHK, 2 BHK, 3 BHK with carpet sizes ranging across 470 - 515 sq.ft and starting at an exact price of \u20b962.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Belair?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Belair?",
        "answer": "The scheduled possession date for VTP Belair is Ready to Move."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-belair-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5625,73.7415&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-alpine-mahalunge",
    "title": "VTP Alpine",
    "slug": "vtp-alpine-mahalunge",
    "builderId": "b-vtp",
    "location": "Mahalunge, Pune",
    "city": "Pune",
    "priceRange": "\u20b964.00 L - \u20b91.08 Cr",
    "exactPrice": "\u20b964.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "715 - 775 sq.ft",
        "priceRange": "\u20b964.00 L - \u20b974.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "980 - 1090 sq.ft",
        "priceRange": "\u20b996.00 L - \u20b91.08 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "lat": 18.5615,
    "lng": 73.7405,
    "reraId": "P52100020166",
    "totalAcres": "6.0 Acres",
    "totalFloors": "G+24 Floors",
    "floorsAndAcres": "6.0 Acres \u2022 G+24 Floors",
    "description": "VTP Alpine in Mahalunge Pune offers ready-possession homes with state-of-the-art gymnasium, multi-purpose hall, and jogging paths.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Alpine?",
        "answer": "VTP Alpine is approved under MahaRERA registration number P52100020166. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Alpine?",
        "answer": "VTP Alpine offers 2 BHK, 3 BHK with carpet sizes ranging across 715 - 775 sq.ft and starting at an exact price of \u20b964.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Alpine?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Alpine?",
        "answer": "The scheduled possession date for VTP Alpine is Ready to Move."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-alpine-mahalunge-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5615,73.7405&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-cygnus-kharadi",
    "title": "VTP Cygnus",
    "slug": "vtp-cygnus-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b972.00 L - \u20b91.28 Cr",
    "exactPrice": "\u20b972.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "725 - 785 sq.ft",
        "priceRange": "\u20b972.00 L - \u20b982.00 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "995 - 1120 sq.ft",
        "priceRange": "\u20b91.05 Cr - \u20b91.22 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready to Move",
    "image": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "lat": 18.5515,
    "lng": 73.939,
    "reraId": "P52100021609",
    "totalAcres": "6.5 Acres",
    "totalFloors": "G+28 Floors",
    "floorsAndAcres": "6.5 Acres \u2022 G+28 Floors",
    "description": "VTP Cygnus at Township Codename Pegasus in Kharadi is a fully integrated residential development with retail arcade and wellness club.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aurelia-kharadi-pune/Aurelia_Master_Plan_0a37b12d7c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Cygnus?",
        "answer": "VTP Cygnus is approved under MahaRERA registration number P52100021609. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Cygnus?",
        "answer": "VTP Cygnus offers 2 BHK, 3 BHK with carpet sizes ranging across 725 - 785 sq.ft and starting at an exact price of \u20b972.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Cygnus?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Cygnus?",
        "answer": "The scheduled possession date for VTP Cygnus is Ready to Move."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-cygnus-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5515,73.939&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-vtp-beaumonde-kharadi",
    "title": "VTP Beaumonde",
    "slug": "vtp-beaumonde-kharadi",
    "builderId": "b-vtp",
    "location": "Kharadi, Pune",
    "city": "Pune",
    "priceRange": "\u20b992.00 L - \u20b91.75 Cr",
    "exactPrice": "\u20b992.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Luxe",
        "carpetArea": "780 - 845 sq.ft",
        "priceRange": "\u20b992.00 L - \u20b91.02 Cr"
      },
      {
        "type": "3 BHK Luxe",
        "carpetArea": "1090 - 1260 sq.ft",
        "priceRange": "\u20b91.32 Cr - \u20b91.55 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/wwDg59UNik44EYQehyqKPr8KZ3pmLXeQ3ZDmJVj2.webp",
    "lat": 18.5525,
    "lng": 73.941,
    "reraId": "P5210002939",
    "totalAcres": "5.8 Acres",
    "totalFloors": "G+30 Floors",
    "floorsAndAcres": "5.8 Acres \u2022 G+30 Floors",
    "description": "VTP Beaumonde in Kharadi Pune delivers premier lifestyle residences with temperature-controlled swimming pool, indoor sports lounge, and business pods.",
    "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altamira-kharadi-pune/Altamira_Master_Plan_166b88523c.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Pune Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for VTP Beaumonde?",
        "answer": "VTP Beaumonde is approved under MahaRERA registration number P5210002939. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at VTP Beaumonde?",
        "answer": "VTP Beaumonde offers 2 BHK, 3 BHK with carpet sizes ranging across 780 - 845 sq.ft and starting at an exact price of \u20b992.00 L."
      },
      {
        "question": "Does PROPSMART charge any brokerage for VTP Beaumonde?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for VTP Beaumonde?",
        "answer": "The scheduled possession date for VTP Beaumonde is Dec 2026."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/vtp-beaumonde-kharadi-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.5525,73.941&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-lodha-villa-cerro-khopoli-lonavala",
    "title": "Lodha Villa Cerro",
    "slug": "lodha-villa-cerro-khopoli-lonavala",
    "builderId": "b-lodha",
    "location": "Khopoli Foothills, Lonavala",
    "city": "Lonavala",
    "priceRange": "\u20b92.85 Cr - \u20b96.50 Cr",
    "exactPrice": "\u20b92.85 Cr",
    "configurations": [
      "3 BHK Villa",
      "4 BHK Villa",
      "5 BHK Estate"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Valley Villa",
        "carpetArea": "2400 - 2800 sq.ft",
        "priceRange": "\u20b92.85 Cr - \u20b93.40 Cr"
      },
      {
        "type": "4 BHK Forest Villa",
        "carpetArea": "3200 - 3900 sq.ft",
        "priceRange": "\u20b93.80 Cr - \u20b94.60 Cr"
      },
      {
        "type": "5 BHK Private Estate",
        "carpetArea": "4800 - 6200 sq.ft",
        "priceRange": "\u20b95.20 Cr - \u20b96.50 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "lat": 18.7892,
    "lng": 73.3421,
    "reraId": "P52000054321",
    "totalAcres": "50+ Acres Mountain Sanctuary",
    "totalFloors": "G+1 Bespoke Valley Villas",
    "floorsAndAcres": "50+ Acres Mountain Sanctuary \u2022 G+1 Bespoke Valley Villas",
    "description": "Lodha Villa Cerro is an exclusive hill-station retreat nestled in the mist-clad Sahyadri valley between Lonavala and Khopoli, offering private plunge pools and valley terraces.",
    "masterLayout": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Lonavala Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Lodha Villa Cerro?",
        "answer": "Lodha Villa Cerro is approved under MahaRERA registration number P52000054321. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Lodha Villa Cerro?",
        "answer": "Lodha Villa Cerro offers 3 BHK Villa, 4 BHK Villa, 5 BHK Estate with carpet sizes ranging across 2400 - 2800 sq.ft and starting at an exact price of \u20b92.85 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Lodha Villa Cerro?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Lodha Villa Cerro?",
        "answer": "The scheduled possession date for Lodha Villa Cerro is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-villa-cerro-khopoli-lonavala-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.7892,73.3421&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-godrej-woodside-estate-lonavala",
    "title": "Godrej Woodside Estate",
    "slug": "godrej-woodside-estate-lonavala",
    "builderId": "b-godrej",
    "location": "Khalapur, Lonavala Corridor",
    "city": "Lonavala",
    "priceRange": "\u20b91.15 Cr - \u20b92.75 Cr",
    "exactPrice": "\u20b91.15 Cr",
    "configurations": [
      "Villa Plot",
      "Resort Villa"
    ],
    "configurationDetails": [
      {
        "type": "Villa Plot 1500 sq.ft",
        "carpetArea": "1500 - 2200 sq.ft",
        "priceRange": "\u20b91.15 Cr - \u20b91.65 Cr"
      },
      {
        "type": "Estate Plot 2500 sq.ft",
        "carpetArea": "2500 - 3800 sq.ft",
        "priceRange": "\u20b91.85 Cr - \u20b92.75 Cr"
      }
    ],
    "status": "New Launch",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "lat": 18.8123,
    "lng": 73.3105,
    "reraId": "P52000055123",
    "totalAcres": "100+ Acres Forested Estate",
    "totalFloors": "G+1 Plotted Villa Community",
    "floorsAndAcres": "100+ Acres Forested Estate \u2022 G+1 Plotted Villa Community",
    "description": "Godrej Woodside Estate along the Mumbai-Pune Expressway near Lonavala is an idyllic green township featuring a natural river stream, camping grounds, and grand clubhouse.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Lonavala Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Godrej Woodside Estate?",
        "answer": "Godrej Woodside Estate is approved under MahaRERA registration number P52000055123. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Godrej Woodside Estate?",
        "answer": "Godrej Woodside Estate offers Villa Plot, Resort Villa with carpet sizes ranging across 1500 - 2200 sq.ft and starting at an exact price of \u20b91.15 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Godrej Woodside Estate?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Godrej Woodside Estate?",
        "answer": "The scheduled possession date for Godrej Woodside Estate is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/godrej-woodside-estate-lonavala-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.8123,73.3105&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-lodha-alibaug-coastal-villas",
    "title": "Lodha Alibaug",
    "slug": "lodha-alibaug-coastal-villas",
    "builderId": "b-lodha",
    "location": "Awas Beach, Alibaug",
    "city": "Alibaug",
    "priceRange": "\u20b94.50 Cr - \u20b915.00 Cr",
    "exactPrice": "\u20b94.50 Cr",
    "configurations": [
      "3 BHK Beach Villa",
      "4 BHK Beach Villa",
      "5 BHK Royal Manor"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Coastal Villa",
        "carpetArea": "2600 - 3200 sq.ft",
        "priceRange": "\u20b94.50 Cr - \u20b95.80 Cr"
      },
      {
        "type": "4 BHK Royal Villa",
        "carpetArea": "3800 - 4600 sq.ft",
        "priceRange": "\u20b96.80 Cr - \u20b98.50 Cr"
      },
      {
        "type": "5 BHK Beachfront Manor",
        "carpetArea": "5500 - 7500 sq.ft",
        "priceRange": "\u20b910.50 Cr - \u20b915.00 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "lat": 18.7758,
    "lng": 72.8756,
    "reraId": "P52000051189",
    "totalAcres": "40+ Acres Beachside Sanctuary",
    "totalFloors": "G+1 Bespoke Beach Villas",
    "floorsAndAcres": "40+ Acres Beachside Sanctuary \u2022 G+1 Bespoke Beach Villas",
    "description": "Lodha Alibaug near Awas Beach is Mumbai's most prestigious coastal sanctuary, providing private pool villas, coconut groves, speedboat dock access, and 5-star concierge services.",
    "masterLayout": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Alibaug Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Lodha Alibaug?",
        "answer": "Lodha Alibaug is approved under MahaRERA registration number P52000051189. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Lodha Alibaug?",
        "answer": "Lodha Alibaug offers 3 BHK Beach Villa, 4 BHK Beach Villa, 5 BHK Royal Manor with carpet sizes ranging across 2600 - 3200 sq.ft and starting at an exact price of \u20b94.50 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Lodha Alibaug?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Lodha Alibaug?",
        "answer": "The scheduled possession date for Lodha Alibaug is Dec 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/lodha-alibaug-coastal-villas-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.7758,72.8756&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-abhinandan-lodha-alibaug-reserve",
    "title": "Abhinandan Lodha Alibaug Reserve",
    "slug": "abhinandan-lodha-alibaug-reserve",
    "builderId": "b-lodha",
    "location": "Mandwa Jetty Corridor, Alibaug",
    "city": "Alibaug",
    "priceRange": "\u20b91.45 Cr - \u20b93.80 Cr",
    "exactPrice": "\u20b91.45 Cr",
    "configurations": [
      "Coastal Villa Plot",
      "Beach Estate"
    ],
    "configurationDetails": [
      {
        "type": "Coastal Plot 1800 sq.ft",
        "carpetArea": "1800 - 2400 sq.ft",
        "priceRange": "\u20b91.45 Cr - \u20b91.95 Cr"
      },
      {
        "type": "Beach Estate 3000 sq.ft",
        "carpetArea": "3000 - 4500 sq.ft",
        "priceRange": "\u20b92.45 Cr - \u20b93.80 Cr"
      }
    ],
    "status": "New Launch",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Estilo_1903X800_0.jpg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Estilo_1903X800_0.jpg",
    "lat": 18.7905,
    "lng": 72.885,
    "reraId": "P52000053912",
    "totalAcres": "60+ Acres Gated Coastal Parkland",
    "totalFloors": "G+1 Custom Plotted Villas",
    "floorsAndAcres": "60+ Acres Gated Coastal Parkland \u2022 G+1 Custom Plotted Villas",
    "description": "The House of Abhinandan Lodha Alibaug Reserve offers prime 7-star branded land and villa estates just 15 minutes from the Mandwa RORO ferry terminal.",
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
      "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
    ],
    "features": [
      "Swimming Pool",
      "Clubhouse",
      "Gymnasium",
      "Kids Play Area",
      "Jogging Track",
      "Amphitheater",
      "Indoor Games",
      "Multipurpose Hall",
      "Landscaped Gardens",
      "24x7 Security",
      "CCTV Surveillance",
      "Intercom",
      "Power Backup",
      "Rainwater Harvesting",
      "Solar Water Heating",
      "Yoga Zone"
    ],
    "highlights": [
      "100% Brokerage Free Direct Builder Sales Partner",
      "Prime Alibaug Investment Opportunity",
      "Pre-Sanctioned MahaRERA Clear Title Project",
      "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"
      },
      {
        "label": "Doors Windows",
        "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"
      }
    ],
    "faqs": [
      {
        "question": "What is the MahaRERA number for Abhinandan Lodha Alibaug Reserve?",
        "answer": "Abhinandan Lodha Alibaug Reserve is approved under MahaRERA registration number P52000053912. Title certificates and layout approvals are fully sanctioned."
      },
      {
        "question": "What are the available configurations and carpet area at Abhinandan Lodha Alibaug Reserve?",
        "answer": "Abhinandan Lodha Alibaug Reserve offers Coastal Villa Plot, Beach Estate with carpet sizes ranging across 1800 - 2400 sq.ft and starting at an exact price of \u20b91.45 Cr."
      },
      {
        "question": "Does PROPSMART charge any brokerage for Abhinandan Lodha Alibaug Reserve?",
        "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay \u20b90 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
      },
      {
        "question": "When will possession be handed over for Abhinandan Lodha Alibaug Reserve?",
        "answer": "The scheduled possession date for Abhinandan Lodha Alibaug Reserve is June 2027."
      }
    ],
    "brochureUrl": "https://propsmart.co.in/brochures/abhinandan-lodha-alibaug-reserve-brochure.pdf",
    "mapEmbedUrl": "https://maps.google.com/maps?q=18.7905,72.885&z=15&output=embed",
    "approvedBanks": [
      "State Bank of India (SBI)",
      "HDFC Bank",
      "ICICI Bank",
      "Axis Bank",
      "Kotak Mahindra Bank"
    ]
  },
  {
    "id": "p-kolte-patil-life-republic-qrious",
    "title": "Kolte Patil Life Republic Qrious",
    "slug": "kolte-patil-life-republic-qrious",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b964.00 L - \u20b995.00 L",
    "exactPrice": "\u20b964.00 L",
    "pricePerSqft": 7200,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "725 - 785 sq.ft",
        "priceRange": "\u20b964 L - \u20b974 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "940 - 1,010 sq.ft",
        "priceRange": "\u20b982 L - \u20b995 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17630446171899594771.png",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17630446171899594771.png",
    "imageAlt": "Kolte Patil Life Republic Qrious Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Qrious High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100079623",
    "seoKeywords": [
      "Kolte Patil Life Republic Qrious Hinjewadi",
      "Kolte Patil Life Republic Qrious price",
      "Kolte Patil Life Republic Qrious floor plan",
      "Kolte Patil Life Republic Qrious MahaRERA P52100079623",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Life Republic Qrious, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b964.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100079623.",
    "description": "When you're living at Qrious by Life Republic \u2013 a new launch project offering 2 & 3 BHK flats in Hinjewadi, the very heart of Pune\u2019s future.\n\r\nHere, every day the next chapter unfolds, Future opportun\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100079623",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Qrious located?",
        "answer": "Kolte Patil Life Republic Qrious is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Qrious?",
        "answer": "Residences at Kolte Patil Life Republic Qrious start from \u20b964.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Qrious?",
        "answer": "Kolte Patil Life Republic Qrious offers 2 BHK, 3 BHK residences with spacious carpet layouts from 725 - 785 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Qrious?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Qrious is P52100079623. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Qrious?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100079623"
  },
  {
    "id": "p-kolte-patil-life-republic-canvas",
    "title": "Kolte Patil Life Republic Canvas",
    "slug": "kolte-patil-life-republic-canvas",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b91.18 Cr - \u20b92.10 Cr",
    "exactPrice": "\u20b91.18 Cr",
    "pricePerSqft": 8400,
    "configurations": [
      "3 BHK",
      "3.5 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK",
        "carpetArea": "1,120 - 1,280 sq.ft",
        "priceRange": "\u20b91.18 Cr - \u20b91.45 Cr"
      },
      {
        "type": "3.5 BHK",
        "carpetArea": "1,390 - 1,480 sq.ft",
        "priceRange": "\u20b91.52 Cr - \u20b91.72 Cr"
      },
      {
        "type": "4 BHK",
        "carpetArea": "1,650 - 1,850 sq.ft",
        "priceRange": "\u20b91.85 Cr - \u20b92.10 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2028",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1736838615597289150.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1736838615597289150.jpg",
    "imageAlt": "Kolte Patil Life Republic Canvas Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Canvas High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1728477684134798907.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1728477684130993331.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17284759001887960407.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17284759001651037730.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17284659891506445855.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1728465989381290610.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1728465957455076846.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1728465957321177475.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1728465939445672794.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17284659391446479583.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1728481601391614931.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1728481601112693375.jpg"
    ],
    "reraId": "P52100077008",
    "seoKeywords": [
      "Kolte Patil Life Republic Canvas Hinjewadi",
      "Kolte Patil Life Republic Canvas price",
      "Kolte Patil Life Republic Canvas floor plan",
      "Kolte Patil Life Republic Canvas MahaRERA P52100077008",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 3 BHK, 3.5 BHK, 4 BHK in Kolte Patil Life Republic Canvas, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b91.18 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100077008.",
    "description": "Enjoy the different colours of the sky with four high-rising towers offering luxurious 3 and 4 BHK apartments that overlook the township from an impressive altitude of ~120M.\n\nYou once pictured a life\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100077008",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Canvas located?",
        "answer": "Kolte Patil Life Republic Canvas is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Canvas?",
        "answer": "Residences at Kolte Patil Life Republic Canvas start from \u20b91.18 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Canvas?",
        "answer": "Kolte Patil Life Republic Canvas offers 3 BHK, 3.5 BHK, 4 BHK residences with spacious carpet layouts from 1,120 - 1,280 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Canvas?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Canvas is P52100077008. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Canvas?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100077008",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273289986522951.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328998919135856.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727328913560300981.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328913979788951.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17272693442140478152.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17272693441870156717.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727329223217406090.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727329223489752267.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727329197399462847.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/172732919785962869.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727329181343519433.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273291811462413613.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273291621831699962.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273291621313286942.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273291422043320802.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727329142790385746.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273291271731290971.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273291271599309707.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273291021260420393.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273291021473591332.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727329055723750251.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273290551960647408.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273290381137885034.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273290381419606443.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727329017336357880.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273290171029876777.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273289771508955548.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328977850850594.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727328961576421857.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328961789158981.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273289471152181947.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273289471064965537.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727328930423927932.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328930261462677.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273288991200020633.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273288991015490662.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273288771445705906.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727328877912341332.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1727328863612176472.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273288631591731497.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17273288231295415859.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17273288231405222070.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17272693081759975716.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1727269308808257565.jpg"
    ],
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-canvas-1",
        "projectId": "p-kolte-patil-life-republic-canvas",
        "name": "3 BHK Luxury Sky Suite",
        "carpetArea": 1120,
        "balconyArea": 95,
        "bathrooms": 3,
        "basePrice": 11800000.0,
        "pricePerSqft": 10535.71,
        "infraCharges": 350000.0,
        "clubhouseCharges": 250000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1728477684134798907.png"
      },
      {
        "id": "cfg-kolte-patil-canvas-2",
        "projectId": "p-kolte-patil-life-republic-canvas",
        "name": "3.5 BHK Grand Residence",
        "carpetArea": 1390,
        "balconyArea": 120,
        "bathrooms": 3,
        "basePrice": 15200000.0,
        "pricePerSqft": 10935.25,
        "infraCharges": 400000.0,
        "clubhouseCharges": 250000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/1728477684130993331.png"
      },
      {
        "id": "cfg-kolte-patil-canvas-3",
        "projectId": "p-kolte-patil-life-republic-canvas",
        "name": "4 BHK Imperial Penthouse",
        "carpetArea": 1650,
        "balconyArea": 160,
        "bathrooms": 4,
        "basePrice": 18500000.0,
        "pricePerSqft": 11212.12,
        "infraCharges": 500000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17284759001887960407.png"
      }
    ]
  },
  {
    "id": "p-kolte-patil-life-republic-aros",
    "title": "Kolte Patil Life Republic Aros",
    "slug": "kolte-patil-life-republic-aros",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b962.00 L - \u20b989.00 L",
    "exactPrice": "\u20b962.00 L",
    "pricePerSqft": 7100,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "715 - 770 sq.ft",
        "priceRange": "\u20b962 L - \u20b972 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "890 - 980 sq.ft",
        "priceRange": "\u20b978 L - \u20b989 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17371057642004803003.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17371057642004803003.jpg",
    "imageAlt": "Kolte Patil Life Republic Aros Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Aros High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1684245329977342120.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16842453291490461123.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16842409551257395540.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16842409551461585858.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16842409081778200113.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1684240908401913809.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16842408651386924750.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1684240865306798012.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1684239435908877360.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16842394352091891936.jpg"
    ],
    "reraId": "P52100047921",
    "seoKeywords": [
      "Kolte Patil Life Republic Aros Hinjewadi",
      "Kolte Patil Life Republic Aros price",
      "Kolte Patil Life Republic Aros floor plan",
      "Kolte Patil Life Republic Aros MahaRERA P52100047921",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Life Republic Aros, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b962.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100047921.",
    "description": "Rise above the mundane, everyday life and seek something extraordinary. This immersive and rejuvenating lifestyle at Aros, Life Republic, includes a thoughtfully designed 19,000 sq.ft. Club Aros, a me\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100047921",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Aros located?",
        "answer": "Kolte Patil Life Republic Aros is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Aros?",
        "answer": "Residences at Kolte Patil Life Republic Aros start from \u20b962.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Aros?",
        "answer": "Kolte Patil Life Republic Aros offers 2 BHK, 3 BHK residences with spacious carpet layouts from 715 - 770 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Aros?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Aros is P52100047921. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Aros?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100047921",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842415681541302970.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241568996197317.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1684241548785931673.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842415481089302225.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1684241525814659846.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842415251760300342.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842415041723146111.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241504296914564.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842414811779642506.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241481259679490.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842414541808127147.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241454896670475.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1684241433111120952.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842414331029338892.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842414142093730597.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842414141876863599.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842413931317021299.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241393465504122.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842413702121050775.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842413701408463234.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842413451340774859.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1684241345866229263.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16842393951418697056.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16842393951624072702.jpg"
    ]
  },
  {
    "id": "p-kolte-patil-life-republic-atmos",
    "title": "Kolte Patil Life Republic Atmos",
    "slug": "kolte-patil-life-republic-atmos",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b958.00 L - \u20b978.00 L",
    "exactPrice": "\u20b958.00 L",
    "pricePerSqft": 6950,
    "configurations": [
      "2 BHK",
      "2.5 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "685 - 740 sq.ft",
        "priceRange": "\u20b958 L - \u20b968 L"
      },
      {
        "type": "2.5 BHK",
        "carpetArea": "790 - 850 sq.ft",
        "priceRange": "\u20b969 L - \u20b978 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17368380161318147602.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17368380161318147602.jpg",
    "imageAlt": "Kolte Patil Life Republic Atmos Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Atmos High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/168803585650275619.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16880358561556615257.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16880358391983107732.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16880358391198400905.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16880357391530657074.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1688035739153130203.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1688036283675223285.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16880362831588698124.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16880362671836935383.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1688036267101676629.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16880362411012606642.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16880362411428051215.jpg"
    ],
    "reraId": "P52100051765",
    "seoKeywords": [
      "Kolte Patil Life Republic Atmos Hinjewadi",
      "Kolte Patil Life Republic Atmos price",
      "Kolte Patil Life Republic Atmos floor plan",
      "Kolte Patil Life Republic Atmos MahaRERA P52100051765",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK in Kolte Patil Life Republic Atmos, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b958.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100051765.",
    "description": "A multi-passionate modern family deserves a flexible atmosphere to explore and flourish in. A home that syncs with their aura. Atmos is a New Launch at Life Republic by Kolte Patil located near Hinjaw\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100051765",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Atmos located?",
        "answer": "Kolte Patil Life Republic Atmos is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Atmos?",
        "answer": "Residences at Kolte Patil Life Republic Atmos start from \u20b958.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Atmos?",
        "answer": "Kolte Patil Life Republic Atmos offers 2 BHK, 2.5 BHK residences with spacious carpet layouts from 685 - 740 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Atmos?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Atmos is P52100051765. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Atmos?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100051765",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1688035258691100925.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16880352581501527446.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1688035241416865134.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16880352411954059964.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1688035221110267107.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1688035221995782530.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1688035180865610291.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16880351801446442741.jpg"
    ]
  },
  {
    "id": "p-kolte-patil-life-republic-duet",
    "title": "Kolte Patil Life Republic Duet",
    "slug": "kolte-patil-life-republic-duet",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b954.00 L - \u20b966.00 L",
    "exactPrice": "\u20b954.00 L",
    "pricePerSqft": 6800,
    "configurations": [
      "2 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Compact",
        "carpetArea": "640 sq.ft",
        "priceRange": "\u20b954 L - \u20b959 L"
      },
      {
        "type": "2 BHK Luxury",
        "carpetArea": "720 sq.ft",
        "priceRange": "\u20b960 L - \u20b966 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Sept 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1756736086132321226.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1756736086132321226.jpg",
    "imageAlt": "Kolte Patil Life Republic Duet Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Duet High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100079424",
    "seoKeywords": [
      "Kolte Patil Life Republic Duet Hinjewadi",
      "Kolte Patil Life Republic Duet price",
      "Kolte Patil Life Republic Duet floor plan",
      "Kolte Patil Life Republic Duet MahaRERA P52100079424",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kolte Patil Life Republic Duet, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b954.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100079424.",
    "description": "Because while two hearts beat together and live together, they can have different expectations. So, here\u2019s one address that has everything needed to complete these two worlds that live together under\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100079424",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Duet located?",
        "answer": "Kolte Patil Life Republic Duet is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Duet?",
        "answer": "Residences at Kolte Patil Life Republic Duet start from \u20b954.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Duet?",
        "answer": "Kolte Patil Life Republic Duet offers 2 BHK residences with spacious carpet layouts from 640 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Duet?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Duet is P52100079424. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Duet?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100079424"
  },
  {
    "id": "p-kolte-patil-life-republic-echoes",
    "title": "Kolte Patil Life Republic Echoes",
    "slug": "kolte-patil-life-republic-echoes",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b959.00 L - \u20b979.00 L",
    "exactPrice": "\u20b959.00 L",
    "pricePerSqft": 7000,
    "configurations": [
      "2 BHK",
      "2.5 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "670 - 735 sq.ft",
        "priceRange": "\u20b959 L - \u20b969 L"
      },
      {
        "type": "2.5 BHK",
        "carpetArea": "780 - 840 sq.ft",
        "priceRange": "\u20b970 L - \u20b979 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17742511611639045753.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17742511611639045753.jpg",
    "imageAlt": "Kolte Patil Life Republic Echoes Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Life Republic Echoes High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100077382",
    "seoKeywords": [
      "Kolte Patil Life Republic Echoes Hinjewadi",
      "Kolte Patil Life Republic Echoes price",
      "Kolte Patil Life Republic Echoes floor plan",
      "Kolte Patil Life Republic Echoes MahaRERA P52100077382",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK in Kolte Patil Life Republic Echoes, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b959.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100077382.",
    "description": "At Kolte Patil Echoes, childhood is designed to be truly carefree, where play flows across open, thoughtfully planned spaces and everyday moments turn into lasting memories.\n\r\nSet within a secure town\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100077382",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Life Republic Echoes located?",
        "answer": "Kolte Patil Life Republic Echoes is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Life Republic Echoes?",
        "answer": "Residences at Kolte Patil Life Republic Echoes start from \u20b959.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Life Republic Echoes?",
        "answer": "Kolte Patil Life Republic Echoes offers 2 BHK, 2.5 BHK residences with spacious carpet layouts from 670 - 735 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Life Republic Echoes?",
        "answer": "The official MahaRERA registration number for Kolte Patil Life Republic Echoes is P52100077382. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Life Republic Echoes?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100077382"
  },
  {
    "id": "p-kolte-patil-24k-espada-at-life-republic",
    "title": "Kolte Patil 24K Espada at Life Republic",
    "slug": "kolte-patil-24k-espada-at-life-republic",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b92.85 Cr - \u20b94.50 Cr",
    "exactPrice": "\u20b92.85 Cr",
    "pricePerSqft": 11200,
    "configurations": [
      "4 BHK",
      "5 BHK"
    ],
    "configurationDetails": [
      {
        "type": "4 BHK Row House",
        "carpetArea": "2,450 - 2,850 sq.ft",
        "priceRange": "\u20b92.85 Cr - \u20b93.40 Cr"
      },
      {
        "type": "5 BHK Grand Villa",
        "carpetArea": "3,200 - 3,850 sq.ft",
        "priceRange": "\u20b93.80 Cr - \u20b94.50 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1739969532664397379.png",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1739969532664397379.png",
    "imageAlt": "Kolte Patil 24K Espada at Life Republic Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil 24K Espada at Life Republic High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100051876",
    "seoKeywords": [
      "Kolte Patil 24K Espada at Life Republic Hinjewadi",
      "Kolte Patil 24K Espada at Life Republic price",
      "Kolte Patil 24K Espada at Life Republic floor plan",
      "Kolte Patil 24K Espada at Life Republic MahaRERA P52100051876",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 4 BHK, 5 BHK in Kolte Patil 24K Espada at Life Republic, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b92.85 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100051876.",
    "description": "Welcome to 24K Espada, an urban cocoon of privacy and exclusivity. Located in well-connected Hinjawadi, it is part of a 400-acre integrated township. 24K Espada offers 4 & 5 bed premium row houses tha\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100051876",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil 24K Espada at Life Republic located?",
        "answer": "Kolte Patil 24K Espada at Life Republic is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil 24K Espada at Life Republic?",
        "answer": "Residences at Kolte Patil 24K Espada at Life Republic start from \u20b92.85 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil 24K Espada at Life Republic?",
        "answer": "Kolte Patil 24K Espada at Life Republic offers 4 BHK, 5 BHK residences with spacious carpet layouts from 2,450 - 2,850 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil 24K Espada at Life Republic?",
        "answer": "The official MahaRERA registration number for Kolte Patil 24K Espada at Life Republic is P52100051876. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil 24K Espada at Life Republic?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100051876"
  },
  {
    "id": "p-kolte-patil-universe-at-life-republic",
    "title": "Kolte Patil Universe at Life Republic",
    "slug": "kolte-patil-universe-at-life-republic",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b941.00 L - \u20b962.00 L",
    "exactPrice": "\u20b941.00 L",
    "pricePerSqft": 6900,
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "460 - 510 sq.ft",
        "priceRange": "\u20b941 L - \u20b948 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "620 - 695 sq.ft",
        "priceRange": "\u20b953 L - \u20b962 L"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17377879311754578076.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17377879311754578076.jpg",
    "imageAlt": "Kolte Patil Universe at Life Republic Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Universe at Life Republic High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100027629",
    "seoKeywords": [
      "Kolte Patil Universe at Life Republic Hinjewadi",
      "Kolte Patil Universe at Life Republic price",
      "Kolte Patil Universe at Life Republic floor plan",
      "Kolte Patil Universe at Life Republic MahaRERA P52100027629",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK in Kolte Patil Universe at Life Republic, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b941.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100027629.",
    "description": "The {U}niverse at Life Republic is the cradle of a digital lifestyle in Pune. Powered by smart living solutions, you will be ensconced at the heart of every activity here. The Planet App, a proprietar\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100027629",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Universe at Life Republic located?",
        "answer": "Kolte Patil Universe at Life Republic is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Universe at Life Republic?",
        "answer": "Residences at Kolte Patil Universe at Life Republic start from \u20b941.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Universe at Life Republic?",
        "answer": "Kolte Patil Universe at Life Republic offers 1 BHK, 2 BHK residences with spacious carpet layouts from 460 - 510 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Universe at Life Republic?",
        "answer": "The official MahaRERA registration number for Kolte Patil Universe at Life Republic is P52100027629. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Universe at Life Republic?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100027629"
  },
  {
    "id": "p-kolte-patil-oro-avenue-at-life-republic",
    "title": "Kolte Patil Oro Avenue at Life Republic",
    "slug": "kolte-patil-oro-avenue-at-life-republic",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b938.00 L - \u20b958.00 L",
    "exactPrice": "\u20b938.00 L",
    "pricePerSqft": 6800,
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "425 - 480 sq.ft",
        "priceRange": "\u20b938 L - \u20b944 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "585 - 650 sq.ft",
        "priceRange": "\u20b949 L - \u20b958 L"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/15728530931548913611.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/15728530931548913611.jpg",
    "imageAlt": "Kolte Patil Oro Avenue at Life Republic Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Oro Avenue at Life Republic High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100017116",
    "seoKeywords": [
      "Kolte Patil Oro Avenue at Life Republic Hinjewadi",
      "Kolte Patil Oro Avenue at Life Republic price",
      "Kolte Patil Oro Avenue at Life Republic floor plan",
      "Kolte Patil Oro Avenue at Life Republic MahaRERA P52100017116",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK in Kolte Patil Oro Avenue at Life Republic, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b938.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100017116.",
    "description": "Welcome to the finest sector of Pune - Life Republic Oro Avenue. A dream come true for the modernized minds who seek urban spaces for their family at luxurious 2 BHK flats in Hinjewadi. These apartmen\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100017116",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Oro Avenue at Life Republic located?",
        "answer": "Kolte Patil Oro Avenue at Life Republic is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Oro Avenue at Life Republic?",
        "answer": "Residences at Kolte Patil Oro Avenue at Life Republic start from \u20b938.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Oro Avenue at Life Republic?",
        "answer": "Kolte Patil Oro Avenue at Life Republic offers 1 BHK, 2 BHK residences with spacious carpet layouts from 425 - 480 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Oro Avenue at Life Republic?",
        "answer": "The official MahaRERA registration number for Kolte Patil Oro Avenue at Life Republic is P52100017116. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Oro Avenue at Life Republic?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100017116"
  },
  {
    "id": "p-kolte-patil-24k-atria",
    "title": "Kolte Patil 24K Atria",
    "slug": "kolte-patil-24k-atria",
    "builderId": "b-kolte-patil",
    "location": "Pimple Nilakh",
    "city": "Pune",
    "priceRange": "\u20b91.95 Cr - \u20b93.20 Cr",
    "exactPrice": "\u20b91.95 Cr",
    "pricePerSqft": 12500,
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Luxury",
        "carpetArea": "1,450 - 1,750 sq.ft",
        "priceRange": "\u20b91.95 Cr - \u20b92.40 Cr"
      },
      {
        "type": "4 BHK Sky Suite",
        "carpetArea": "1,980 - 2,250 sq.ft",
        "priceRange": "\u20b92.65 Cr - \u20b93.20 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/157121615478649281.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/157121615478649281.jpg",
    "imageAlt": "Kolte Patil 24K Atria Elevation by Kolte-Patil Developers in Pimple Nilakh, Pune",
    "heroImageAlt": "Kolte Patil 24K Atria High-Rise Building Architecture",
    "lat": 18.5833,
    "lng": 73.7833,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100000428",
    "seoKeywords": [
      "Kolte Patil 24K Atria Pimple Nilakh",
      "Kolte Patil 24K Atria price",
      "Kolte Patil 24K Atria floor plan",
      "Kolte Patil 24K Atria MahaRERA P52100000428",
      "Kolte Patil projects in Pimple Nilakh",
      "flats in Pimple Nilakh Pune"
    ],
    "metaDescription": "Buy 3 BHK, 4 BHK in Kolte Patil 24K Atria, Pimple Nilakh Pune by Kolte-Patil Developers. Prices from \u20b91.95 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100000428.",
    "description": "Beautifully crafted to complement your chic and aristocratic personality, our exclusively designed residences at 24K Atria by Kolte-Patil Developers let you explore the true joy of grandeur. These ult\n\nSituated in prime Pimple Nilakh, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Pimple Nilakh location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100000428",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil 24K Atria located?",
        "answer": "Kolte Patil 24K Atria is prime situated in Pimple Nilakh, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil 24K Atria?",
        "answer": "Residences at Kolte Patil 24K Atria start from \u20b91.95 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil 24K Atria?",
        "answer": "Kolte Patil 24K Atria offers 3 BHK, 4 BHK residences with spacious carpet layouts from 1,450 - 1,750 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil 24K Atria?",
        "answer": "The official MahaRERA registration number for Kolte Patil 24K Atria is P52100000428. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil 24K Atria?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000428"
  },
  {
    "id": "p-kolte-patil-24k-manor",
    "title": "Kolte Patil 24K Manor",
    "slug": "kolte-patil-24k-manor",
    "builderId": "b-kolte-patil",
    "location": "Pimple Nilakh",
    "city": "Pune",
    "priceRange": "\u20b92.35 Cr - \u20b93.90 Cr",
    "exactPrice": "\u20b92.35 Cr",
    "pricePerSqft": 13500,
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Palatial",
        "carpetArea": "1,650 - 1,950 sq.ft",
        "priceRange": "\u20b92.35 Cr - \u20b92.95 Cr"
      },
      {
        "type": "4 BHK Imperial",
        "carpetArea": "2,200 - 2,650 sq.ft",
        "priceRange": "\u20b93.20 Cr - \u20b93.90 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://www.koltepatil.com/assets/uploads/overview/16915632221413240699.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/16915632221413240699.jpg",
    "imageAlt": "Kolte Patil 24K Manor Elevation by Kolte-Patil Developers in Pimple Nilakh, Pune",
    "heroImageAlt": "Kolte Patil 24K Manor High-Rise Building Architecture",
    "lat": 18.5833,
    "lng": 73.7833,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100052151",
    "seoKeywords": [
      "Kolte Patil 24K Manor Pimple Nilakh",
      "Kolte Patil 24K Manor price",
      "Kolte Patil 24K Manor floor plan",
      "Kolte Patil 24K Manor MahaRERA P52100052151",
      "Kolte Patil projects in Pimple Nilakh",
      "flats in Pimple Nilakh Pune"
    ],
    "metaDescription": "Buy 3 BHK, 4 BHK in Kolte Patil 24K Manor, Pimple Nilakh Pune by Kolte-Patil Developers. Prices from \u20b92.35 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100052151.",
    "description": "At the intersection of architectural brilliance and lifestyle sophistication, 24K Manor stands tall, a beacon of exclusivity and grandeur. Every aspect of this unparalleled offering has been meticulou\n\nSituated in prime Pimple Nilakh, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Pimple Nilakh location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100052151",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil 24K Manor located?",
        "answer": "Kolte Patil 24K Manor is prime situated in Pimple Nilakh, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil 24K Manor?",
        "answer": "Residences at Kolte Patil 24K Manor start from \u20b92.35 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil 24K Manor?",
        "answer": "Kolte Patil 24K Manor offers 3 BHK, 4 BHK residences with spacious carpet layouts from 1,650 - 1,950 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil 24K Manor?",
        "answer": "The official MahaRERA registration number for Kolte Patil 24K Manor is P52100052151. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil 24K Manor?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100052151"
  },
  {
    "id": "p-kolte-patil-24k-opula",
    "title": "Kolte Patil 24K Opula",
    "slug": "kolte-patil-24k-opula",
    "builderId": "b-kolte-patil",
    "location": "Pimple Nilakh",
    "city": "Pune",
    "priceRange": "\u20b92.65 Cr - \u20b94.80 Cr",
    "exactPrice": "\u20b92.65 Cr",
    "pricePerSqft": 13800,
    "configurations": [
      "3 BHK",
      "4 BHK",
      "5 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Luxury",
        "carpetArea": "1,850 sq.ft",
        "priceRange": "\u20b92.65 Cr - \u20b92.95 Cr"
      },
      {
        "type": "4 BHK Sky Villa",
        "carpetArea": "2,450 sq.ft",
        "priceRange": "\u20b93.40 Cr - \u20b93.95 Cr"
      },
      {
        "type": "5 BHK Penthouse",
        "carpetArea": "3,400 sq.ft",
        "priceRange": "\u20b94.30 Cr - \u20b94.80 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/15712055551076523637.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/15712055551076523637.jpg",
    "imageAlt": "Kolte Patil 24K Opula Elevation by Kolte-Patil Developers in Pimple Nilakh, Pune",
    "heroImageAlt": "Kolte Patil 24K Opula High-Rise Building Architecture",
    "lat": 18.5833,
    "lng": 73.7833,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100000398",
    "seoKeywords": [
      "Kolte Patil 24K Opula Pimple Nilakh",
      "Kolte Patil 24K Opula price",
      "Kolte Patil 24K Opula floor plan",
      "Kolte Patil 24K Opula MahaRERA P52100000398",
      "Kolte Patil projects in Pimple Nilakh",
      "flats in Pimple Nilakh Pune"
    ],
    "metaDescription": "Buy 3 BHK, 4 BHK, 5 BHK in Kolte Patil 24K Opula, Pimple Nilakh Pune by Kolte-Patil Developers. Prices from \u20b92.65 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100000398.",
    "description": "Spread across 7.77 acres, each home at 24K Opula is built to perfection and adheres to the highest standards of quality and efficiency. The ongoing project in Pune by Kolte Patil Developers offers exc\n\nSituated in prime Pimple Nilakh, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Pimple Nilakh location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100000398",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil 24K Opula located?",
        "answer": "Kolte Patil 24K Opula is prime situated in Pimple Nilakh, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil 24K Opula?",
        "answer": "Residences at Kolte Patil 24K Opula start from \u20b92.65 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil 24K Opula?",
        "answer": "Kolte Patil 24K Opula offers 3 BHK, 4 BHK, 5 BHK residences with spacious carpet layouts from 1,850 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil 24K Opula?",
        "answer": "The official MahaRERA registration number for Kolte Patil 24K Opula is P52100000398. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil 24K Opula?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000398"
  },
  {
    "id": "p-kolte-patil-24k-stargaze",
    "title": "Kolte Patil 24K Stargaze",
    "slug": "kolte-patil-24k-stargaze",
    "builderId": "b-kolte-patil",
    "location": "Bavdhan",
    "city": "Pune",
    "priceRange": "\u20b91.65 Cr - \u20b92.75 Cr",
    "exactPrice": "\u20b91.65 Cr",
    "pricePerSqft": 11200,
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Valley View",
        "carpetArea": "1,350 - 1,650 sq.ft",
        "priceRange": "\u20b91.65 Cr - \u20b92.10 Cr"
      },
      {
        "type": "4 BHK Sky Villa",
        "carpetArea": "1,850 - 2,150 sq.ft",
        "priceRange": "\u20b92.30 Cr - \u20b92.75 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/16582369311871863705.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/16582369311871863705.jpg",
    "imageAlt": "Kolte Patil 24K Stargaze Elevation by Kolte-Patil Developers in Bavdhan, Pune",
    "heroImageAlt": "Kolte Patil 24K Stargaze High-Rise Building Architecture",
    "lat": 18.5158,
    "lng": 73.7686,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100018473",
    "seoKeywords": [
      "Kolte Patil 24K Stargaze Bavdhan",
      "Kolte Patil 24K Stargaze price",
      "Kolte Patil 24K Stargaze floor plan",
      "Kolte Patil 24K Stargaze MahaRERA P52100018473",
      "Kolte Patil projects in Bavdhan",
      "flats in Bavdhan Pune"
    ],
    "metaDescription": "Buy 3 BHK, 4 BHK in Kolte Patil 24K Stargaze, Bavdhan Pune by Kolte-Patil Developers. Prices from \u20b91.65 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P52100018473.",
    "description": "24K Stargaze by Kolte Patil, not only offers you a place to reside but a home where you\u2019ll enjoy every moment with your friends and family. Located in Bavdhan, which is just 5-kms away from Kothrud, t\n\nSituated in prime Bavdhan, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Bavdhan location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100018473",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil 24K Stargaze located?",
        "answer": "Kolte Patil 24K Stargaze is prime situated in Bavdhan, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil 24K Stargaze?",
        "answer": "Residences at Kolte Patil 24K Stargaze start from \u20b91.65 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil 24K Stargaze?",
        "answer": "Kolte Patil 24K Stargaze offers 3 BHK, 4 BHK residences with spacious carpet layouts from 1,350 - 1,650 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil 24K Stargaze?",
        "answer": "The official MahaRERA registration number for Kolte Patil 24K Stargaze is P52100018473. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil 24K Stargaze?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100018473"
  },
  {
    "id": "p-kolte-patil-crown",
    "title": "Kolte Patil Crown",
    "slug": "kolte-patil-crown",
    "builderId": "b-kolte-patil",
    "location": "Pimple Nilakh",
    "city": "Pune",
    "priceRange": "\u20b985.00 L - \u20b91.28 Cr",
    "exactPrice": "\u20b985.00 L",
    "pricePerSqft": 9800,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "780 - 850 sq.ft",
        "priceRange": "\u20b985 L - \u20b995 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "980 - 1,120 sq.ft",
        "priceRange": "\u20b91.10 Cr - \u20b91.28 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1606749190359803451.png",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1606749190359803451.png",
    "imageAlt": "Kolte Patil Crown Elevation by Kolte-Patil Developers in Pimple Nilakh, Pune",
    "heroImageAlt": "Kolte Patil Crown High-Rise Building Architecture",
    "lat": 18.5833,
    "lng": 73.7833,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100020471",
    "seoKeywords": [
      "Kolte Patil Crown Pimple Nilakh",
      "Kolte Patil Crown price",
      "Kolte Patil Crown floor plan",
      "Kolte Patil Crown MahaRERA P52100020471",
      "Kolte Patil projects in Pimple Nilakh",
      "flats in Pimple Nilakh Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Crown, Pimple Nilakh Pune by Kolte-Patil Developers. Prices from \u20b985.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100020471.",
    "description": "All its endearing charm and enduring greens, its strategic placement and pleasant peace, somehow felt incomplete. It craved for something that would add glitter to the greens and shimmer to the sunset\n\nSituated in prime Pimple Nilakh, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Pimple Nilakh location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100020471",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Crown located?",
        "answer": "Kolte Patil Crown is prime situated in Pimple Nilakh, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Crown?",
        "answer": "Residences at Kolte Patil Crown start from \u20b985.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Crown?",
        "answer": "Kolte Patil Crown offers 2 BHK, 3 BHK residences with spacious carpet layouts from 780 - 850 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Crown?",
        "answer": "The official MahaRERA registration number for Kolte Patil Crown is P52100020471. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Crown?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100020471"
  },
  {
    "id": "p-kolte-patil-the-reserve",
    "title": "Kolte Patil The Reserve",
    "slug": "kolte-patil-the-reserve",
    "builderId": "b-kolte-patil",
    "location": "Sinhagad Road",
    "city": "Pune",
    "priceRange": "\u20b974.00 L - \u20b91.15 Cr",
    "exactPrice": "\u20b974.00 L",
    "pricePerSqft": 8200,
    "configurations": [
      "2 BHK",
      "2.5 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Riverview",
        "carpetArea": "765 - 820 sq.ft",
        "priceRange": "\u20b974 L - \u20b983 L"
      },
      {
        "type": "2.5 BHK Riverside",
        "carpetArea": "880 - 945 sq.ft",
        "priceRange": "\u20b986 L - \u20b996 L"
      },
      {
        "type": "3 BHK Grand",
        "carpetArea": "1,050 - 1,180 sq.ft",
        "priceRange": "\u20b91.02 Cr - \u20b91.15 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17847862141319131306.jpg",
    "imageAlt": "Kolte Patil The Reserve Elevation by Kolte-Patil Developers in Sinhagad Road, Pune",
    "heroImageAlt": "Kolte Patil The Reserve High-Rise Building Architecture",
    "lat": 18.4716,
    "lng": 73.8184,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "PM1261012600748",
    "seoKeywords": [
      "Kolte Patil The Reserve Sinhagad Road",
      "Kolte Patil The Reserve price",
      "Kolte Patil The Reserve floor plan",
      "Kolte Patil The Reserve MahaRERA PM1261012600748",
      "Kolte Patil projects in Sinhagad Road",
      "flats in Sinhagad Road Pune"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK, 3 BHK in Kolte Patil The Reserve, Sinhagad Road Pune by Kolte-Patil Developers. Prices from \u20b974.00 L. 100% Zero Brokerage direct builder desk. MahaRERA PM1261012600748.",
    "description": "Spread across 21.03 acres of master development in a rare riverside setting at Vadgaon Khurd on Sinhgad Road, The Reserve by Kolte-Patil brings together river-facing greens, scenic NDA hill views and\n\nSituated in prime Sinhagad Road, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Sinhagad Road location with seamless arterial connectivity",
      "MahaRERA Registered Project: PM1261012600748",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil The Reserve located?",
        "answer": "Kolte Patil The Reserve is prime situated in Sinhagad Road, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil The Reserve?",
        "answer": "Residences at Kolte Patil The Reserve start from \u20b974.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil The Reserve?",
        "answer": "Kolte Patil The Reserve offers 2 BHK, 2.5 BHK, 3 BHK residences with spacious carpet layouts from 765 - 820 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil The Reserve?",
        "answer": "The official MahaRERA registration number for Kolte Patil The Reserve is PM1261012600748. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil The Reserve?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PM1261012600748"
  },
  {
    "id": "p-kolte-patil-the-winds",
    "title": "Kolte Patil The Winds",
    "slug": "kolte-patil-the-winds",
    "builderId": "b-kolte-patil",
    "location": "Bhugaon",
    "city": "Pune",
    "priceRange": "\u20b968.00 L - \u20b91.05 Cr",
    "exactPrice": "\u20b968.00 L",
    "pricePerSqft": 7800,
    "configurations": [
      "2 BHK",
      "2.5 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Hillview",
        "carpetArea": "720 - 780 sq.ft",
        "priceRange": "\u20b968 L - \u20b977 L"
      },
      {
        "type": "2.5 BHK Valley",
        "carpetArea": "840 - 910 sq.ft",
        "priceRange": "\u20b979 L - \u20b989 L"
      },
      {
        "type": "3 BHK Luxury",
        "carpetArea": "990 - 1,060 sq.ft",
        "priceRange": "\u20b994 L - \u20b91.05 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "March 2028",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1777879627665083408.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1777879627665083408.jpg",
    "imageAlt": "Kolte Patil The Winds Elevation by Kolte-Patil Developers in Bhugaon, Pune",
    "heroImageAlt": "Kolte Patil The Winds High-Rise Building Architecture",
    "lat": 18.5089,
    "lng": 73.7324,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "PR1261012600258",
    "seoKeywords": [
      "Kolte Patil The Winds Bhugaon",
      "Kolte Patil The Winds price",
      "Kolte Patil The Winds floor plan",
      "Kolte Patil The Winds MahaRERA PR1261012600258",
      "Kolte Patil projects in Bhugaon",
      "flats in Bhugaon Pune"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK, 3 BHK in Kolte Patil The Winds, Bhugaon Pune by Kolte-Patil Developers. Prices from \u20b968.00 L. 100% Zero Brokerage direct builder desk. MahaRERA PR1261012600258.",
    "description": "The Winds by Kolte-Patil is a thoughtfully designed residential development nestled in the natural valley of Bhugaon-where cleaner air, open greens, and seamless connectivity come together. Located mi\n\nSituated in prime Bhugaon, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Bhugaon location with seamless arterial connectivity",
      "MahaRERA Registered Project: PR1261012600258",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil The Winds located?",
        "answer": "Kolte Patil The Winds is prime situated in Bhugaon, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil The Winds?",
        "answer": "Residences at Kolte Patil The Winds start from \u20b968.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil The Winds?",
        "answer": "Kolte Patil The Winds offers 2 BHK, 2.5 BHK, 3 BHK residences with spacious carpet layouts from 720 - 780 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil The Winds?",
        "answer": "The official MahaRERA registration number for Kolte Patil The Winds is PR1261012600258. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil The Winds?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PR1261012600258"
  },
  {
    "id": "p-kolte-patil-springshire",
    "title": "Kolte Patil Springshire",
    "slug": "kolte-patil-springshire",
    "builderId": "b-kolte-patil",
    "location": "Wagholi",
    "city": "Pune",
    "priceRange": "\u20b956.00 L - \u20b984.00 L",
    "exactPrice": "\u20b956.00 L",
    "pricePerSqft": 6500,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "710 - 775 sq.ft",
        "priceRange": "\u20b956 L - \u20b965 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "920 - 1,020 sq.ft",
        "priceRange": "\u20b974 L - \u20b984 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1737032225375196551.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1737032225375196551.jpg",
    "imageAlt": "Kolte Patil Springshire Elevation by Kolte-Patil Developers in Wagholi, Pune",
    "heroImageAlt": "Kolte Patil Springshire High-Rise Building Architecture",
    "lat": 18.5808,
    "lng": 73.9787,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100076743",
    "seoKeywords": [
      "Kolte Patil Springshire Wagholi",
      "Kolte Patil Springshire price",
      "Kolte Patil Springshire floor plan",
      "Kolte Patil Springshire MahaRERA P52100076743",
      "Kolte Patil projects in Wagholi",
      "flats in Wagholi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Springshire, Wagholi Pune by Kolte-Patil Developers. Prices from \u20b956.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100076743.",
    "description": "Step into your personal outdoor oasis at Springshire, where style and comfort blend seamlessly with nature. Whether you\u2019re looking for 2 BHK flats in Wagholi, spacious 3 BHK flats in Wagholi Pune, or\n\nSituated in prime Wagholi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Wagholi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100076743",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Springshire located?",
        "answer": "Kolte Patil Springshire is prime situated in Wagholi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Springshire?",
        "answer": "Residences at Kolte Patil Springshire start from \u20b956.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Springshire?",
        "answer": "Kolte Patil Springshire offers 2 BHK, 3 BHK residences with spacious carpet layouts from 710 - 775 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Springshire?",
        "answer": "The official MahaRERA registration number for Kolte Patil Springshire is P52100076743. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Springshire?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100076743"
  },
  {
    "id": "p-kolte-patil-little-earth",
    "title": "Kolte Patil Little Earth",
    "slug": "kolte-patil-little-earth",
    "builderId": "b-kolte-patil",
    "location": "Kiwale",
    "city": "Pune",
    "priceRange": "\u20b948.00 L - \u20b972.00 L",
    "exactPrice": "\u20b948.00 L",
    "pricePerSqft": 6200,
    "configurations": [
      "2 BHK",
      "2.5 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "680 - 740 sq.ft",
        "priceRange": "\u20b948 L - \u20b956 L"
      },
      {
        "type": "2.5 BHK",
        "carpetArea": "790 - 850 sq.ft",
        "priceRange": "\u20b958 L - \u20b965 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "910 - 980 sq.ft",
        "priceRange": "\u20b965 L - \u20b972 L"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2026",
    "image": "https://www.koltepatil.com/assets/uploads/webp/canvas-new.png",
    "heroImage": "https://www.koltepatil.com/assets/uploads/webp/canvas-new.png",
    "imageAlt": "Kolte Patil Little Earth Elevation by Kolte-Patil Developers in Kiwale, Pune",
    "heroImageAlt": "Kolte Patil Little Earth High-Rise Building Architecture",
    "lat": 18.6653,
    "lng": 73.7256,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100047721",
    "seoKeywords": [
      "Kolte Patil Little Earth Kiwale",
      "Kolte Patil Little Earth price",
      "Kolte Patil Little Earth floor plan",
      "Kolte Patil Little Earth MahaRERA P52100047721",
      "Kolte Patil projects in Kiwale",
      "flats in Kiwale Pune"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK, 3 BHK in Kolte Patil Little Earth, Kiwale Pune by Kolte-Patil Developers. Prices from \u20b948.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100047721.",
    "description": "A finely crafted 2, 2.5 & 3 BHK home in Pune promises a lot more than just a good living. It\u2019s a bouquet of goodies! An enticing expanse of 25 acres, a gated community in Pune, serene environment, eye\n\nSituated in prime Kiwale, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Kiwale location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100047721",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Little Earth located?",
        "answer": "Kolte Patil Little Earth is prime situated in Kiwale, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Little Earth?",
        "answer": "Residences at Kolte Patil Little Earth start from \u20b948.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Little Earth?",
        "answer": "Kolte Patil Little Earth offers 2 BHK, 2.5 BHK, 3 BHK residences with spacious carpet layouts from 680 - 740 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Little Earth?",
        "answer": "The official MahaRERA registration number for Kolte Patil Little Earth is P52100047721. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Little Earth?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100047721"
  },
  {
    "id": "p-kolte-patil-western-avenue",
    "title": "Kolte Patil Western Avenue",
    "slug": "kolte-patil-western-avenue",
    "builderId": "b-kolte-patil",
    "location": "Wakad",
    "city": "Pune",
    "priceRange": "\u20b982.00 L - \u20b91.24 Cr",
    "exactPrice": "\u20b982.00 L",
    "pricePerSqft": 9500,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "740 - 810 sq.ft",
        "priceRange": "\u20b982 L - \u20b994 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "960 - 1,080 sq.ft",
        "priceRange": "\u20b91.08 Cr - \u20b91.24 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1737028466535989305.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1737028466535989305.jpg",
    "imageAlt": "Kolte Patil Western Avenue Elevation by Kolte-Patil Developers in Wakad, Pune",
    "heroImageAlt": "Kolte Patil Western Avenue High-Rise Building Architecture",
    "lat": 18.5987,
    "lng": 73.7645,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100000917",
    "seoKeywords": [
      "Kolte Patil Western Avenue Wakad",
      "Kolte Patil Western Avenue price",
      "Kolte Patil Western Avenue floor plan",
      "Kolte Patil Western Avenue MahaRERA P52100000917",
      "Kolte Patil projects in Wakad",
      "flats in Wakad Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Western Avenue, Wakad Pune by Kolte-Patil Developers. Prices from \u20b982.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100000917.",
    "description": "Spread over 16 acres of land, Western Avenue offers you holistic residential living in Wakad with 30+ lifestyle amenities\u2014specially curated for recreation, relaxation, and rejuvenation\u2014right in the he\n\nSituated in prime Wakad, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Wakad location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100000917",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Western Avenue located?",
        "answer": "Kolte Patil Western Avenue is prime situated in Wakad, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Western Avenue?",
        "answer": "Residences at Kolte Patil Western Avenue start from \u20b982.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Western Avenue?",
        "answer": "Kolte Patil Western Avenue offers 2 BHK, 3 BHK residences with spacious carpet layouts from 740 - 810 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Western Avenue?",
        "answer": "The official MahaRERA registration number for Kolte Patil Western Avenue is P52100000917. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Western Avenue?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000917"
  },
  {
    "id": "p-kolte-patil-centria",
    "title": "Kolte Patil Centria",
    "slug": "kolte-patil-centria",
    "builderId": "b-kolte-patil",
    "location": "Undri",
    "city": "Pune",
    "priceRange": "\u20b988.00 L - \u20b91.28 Cr",
    "exactPrice": "\u20b988.00 L",
    "pricePerSqft": 7200,
    "configurations": [
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "3 BHK Garden Luxury",
        "carpetArea": "1,050 - 1,220 sq.ft",
        "priceRange": "\u20b988 L - \u20b91.05 Cr"
      },
      {
        "type": "3 BHK Grand Suite",
        "carpetArea": "1,280 - 1,420 sq.ft",
        "priceRange": "\u20b91.10 Cr - \u20b91.28 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17370989851070907963.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17370989851070907963.jpg",
    "imageAlt": "Kolte Patil Centria Elevation by Kolte-Patil Developers in Undri, Pune",
    "heroImageAlt": "Kolte Patil Centria High-Rise Building Architecture",
    "lat": 18.4552,
    "lng": 73.9118,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100016567",
    "seoKeywords": [
      "Kolte Patil Centria Undri",
      "Kolte Patil Centria price",
      "Kolte Patil Centria floor plan",
      "Kolte Patil Centria MahaRERA P52100016567",
      "Kolte Patil projects in Undri",
      "flats in Undri Pune"
    ],
    "metaDescription": "Buy 3 BHK in Kolte Patil Centria, Undri Pune by Kolte-Patil Developers. Prices from \u20b988.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100016567.",
    "description": "A home, a haven\u2026 an abode of bliss! Welcome to Centria by Kolte-Patil, a thoughtfully designed residential project in Undri, Pune, located in one of the city\u2019s fastest-growing real estate corridors.\n\nSituated in prime Undri, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Undri location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100016567",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Centria located?",
        "answer": "Kolte Patil Centria is prime situated in Undri, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Centria?",
        "answer": "Residences at Kolte Patil Centria start from \u20b988.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Centria?",
        "answer": "Kolte Patil Centria offers 3 BHK residences with spacious carpet layouts from 1,050 - 1,220 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Centria?",
        "answer": "The official MahaRERA registration number for Kolte Patil Centria is P52100016567. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Centria?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100016567"
  },
  {
    "id": "p-kolte-patil-green-olive",
    "title": "Kolte Patil Green Olive",
    "slug": "kolte-patil-green-olive",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b962.00 L - \u20b988.00 L",
    "exactPrice": "\u20b962.00 L",
    "pricePerSqft": 7000,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK",
        "carpetArea": "720 - 790 sq.ft",
        "priceRange": "\u20b962 L - \u20b972 L"
      },
      {
        "type": "3 BHK",
        "carpetArea": "920 - 1,040 sq.ft",
        "priceRange": "\u20b978 L - \u20b988 L"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/15713898601510210700.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/15713898601510210700.jpg",
    "imageAlt": "Kolte Patil Green Olive Elevation by Kolte-Patil Developers in Hinjewadi, Pune",
    "heroImageAlt": "Kolte Patil Green Olive High-Rise Building Architecture",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100013526",
    "seoKeywords": [
      "Kolte Patil Green Olive Hinjewadi",
      "Kolte Patil Green Olive price",
      "Kolte Patil Green Olive floor plan",
      "Kolte Patil Green Olive MahaRERA P52100013526",
      "Kolte Patil projects in Hinjewadi",
      "flats in Hinjewadi Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Green Olive, Hinjewadi Pune by Kolte-Patil Developers. Prices from \u20b962.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100013526.",
    "description": "Spread across 6 acres of thoughtfully planned land, this residential project in Hinjewadi, Pune offers you a vibrant neighborhood right next to Rajiv Gandhi Infotech Park, India\u2019s largest IT hub.\n\nThe\n\nSituated in prime Hinjewadi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Hinjewadi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100013526",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Green Olive located?",
        "answer": "Kolte Patil Green Olive is prime situated in Hinjewadi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Green Olive?",
        "answer": "Residences at Kolte Patil Green Olive start from \u20b962.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Green Olive?",
        "answer": "Kolte Patil Green Olive offers 2 BHK, 3 BHK residences with spacious carpet layouts from 720 - 790 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Green Olive?",
        "answer": "The official MahaRERA registration number for Kolte Patil Green Olive is P52100013526. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Green Olive?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100013526"
  },
  {
    "id": "p-kolte-patil-ivy-estate",
    "title": "Kolte Patil Ivy Estate",
    "slug": "kolte-patil-ivy-estate",
    "builderId": "b-kolte-patil",
    "location": "Wagholi",
    "city": "Pune",
    "priceRange": "\u20b938.00 L - \u20b91.45 Cr",
    "exactPrice": "\u20b938.00 L",
    "pricePerSqft": 6100,
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "1 BHK",
        "carpetArea": "510 - 560 sq.ft",
        "priceRange": "\u20b938 L - \u20b944 L"
      },
      {
        "type": "2 BHK",
        "carpetArea": "710 - 820 sq.ft",
        "priceRange": "\u20b952 L - \u20b965 L"
      },
      {
        "type": "3 BHK / Row House",
        "carpetArea": "1,100 - 1,650 sq.ft",
        "priceRange": "\u20b988 L - \u20b91.45 Cr"
      }
    ],
    "status": "Ready to Move",
    "type": "Residential",
    "possessionDate": "Ready Possession",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1736854599399690020.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1736854599399690020.jpg",
    "imageAlt": "Kolte Patil Ivy Estate Elevation by Kolte-Patil Developers in Wagholi, Pune",
    "heroImageAlt": "Kolte Patil Ivy Estate High-Rise Building Architecture",
    "lat": 18.5808,
    "lng": 73.9787,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp",
      "https://keystoneliv.com/public/uploads/property/image (81).webp",
      "https://keystoneliv.com/public/uploads/property/image (82).webp",
      "https://keystoneliv.com/public/uploads/property/image (83).webp"
    ],
    "reraId": "P52100001066",
    "seoKeywords": [
      "Kolte Patil Ivy Estate Wagholi",
      "Kolte Patil Ivy Estate price",
      "Kolte Patil Ivy Estate floor plan",
      "Kolte Patil Ivy Estate MahaRERA P52100001066",
      "Kolte Patil projects in Wagholi",
      "flats in Wagholi Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK, 3 BHK in Kolte Patil Ivy Estate, Wagholi Pune by Kolte-Patil Developers. Prices from \u20b938.00 L. 100% Zero Brokerage direct builder desk. MahaRERA P52100001066.",
    "description": "Nestled in Wagholi, East Pune\u2019s fastest-growing investment hub, Kolte Patil IVY Estate offers the perfect balance of community living and green living. These spacious and efficiently planned 1, 2 & 3\n\nSituated in prime Wagholi, Pune, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Wagholi location with seamless arterial connectivity",
      "MahaRERA Registered Project: P52100001066",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Ivy Estate located?",
        "answer": "Kolte Patil Ivy Estate is prime situated in Wagholi, Pune, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Ivy Estate?",
        "answer": "Residences at Kolte Patil Ivy Estate start from \u20b938.00 L with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Ivy Estate?",
        "answer": "Kolte Patil Ivy Estate offers 1 BHK, 2 BHK, 3 BHK residences with spacious carpet layouts from 510 - 560 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Ivy Estate?",
        "answer": "The official MahaRERA registration number for Kolte Patil Ivy Estate is P52100001066. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Ivy Estate?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100001066"
  },
  {
    "id": "p-kolte-patil-serenova",
    "title": "Kolte Patil Serenova",
    "slug": "kolte-patil-serenova",
    "builderId": "b-kolte-patil",
    "location": "Versova, Andheri West",
    "city": "Mumbai",
    "priceRange": "\u20b92.75 Cr - \u20b94.50 Cr",
    "exactPrice": "\u20b92.75 Cr",
    "pricePerSqft": 32000,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Coastal Luxe",
        "carpetArea": "785 - 860 sq.ft",
        "priceRange": "\u20b92.75 Cr - \u20b93.25 Cr"
      },
      {
        "type": "3 BHK Sea Facing",
        "carpetArea": "1,050 - 1,220 sq.ft",
        "priceRange": "\u20b93.80 Cr - \u20b94.50 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2028",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17625868631642006009.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17625868631642006009.jpg",
    "imageAlt": "Kolte Patil Serenova Elevation by Kolte-Patil Developers in Versova, Andheri West, Mumbai",
    "heroImageAlt": "Kolte Patil Serenova High-Rise Building Architecture",
    "lat": 19.1319,
    "lng": 72.8164,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1761227063505755514.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1761227063802632599.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17612270411380067172.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17612270411126752854.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17612270221040895051.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17612270221382269185.png"
    ],
    "reraId": "PR1180002500850",
    "seoKeywords": [
      "Kolte Patil Serenova Versova, Andheri West",
      "Kolte Patil Serenova price",
      "Kolte Patil Serenova floor plan",
      "Kolte Patil Serenova MahaRERA PR1180002500850",
      "Kolte Patil projects in Versova, Andheri West",
      "flats in Versova, Andheri West Mumbai"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Serenova, Versova, Andheri West Mumbai by Kolte-Patil Developers. Prices from \u20b92.75 Cr. 100% Zero Brokerage direct builder desk. MahaRERA PR1180002500850.",
    "description": "Discover New Launch By Kolte Patil at Versova \u2013 a boutique residential address where Mumbai\u2019s pace gently slows down. With thoughtfully designed 2 & 3 Bed residences, private balconies, and elegant la\n\nSituated in prime Versova, Andheri West, Mumbai, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Versova, Andheri West location with seamless arterial connectivity",
      "MahaRERA Registered Project: PR1180002500850",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Serenova located?",
        "answer": "Kolte Patil Serenova is prime situated in Versova, Andheri West, Mumbai, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Serenova?",
        "answer": "Residences at Kolte Patil Serenova start from \u20b92.75 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Serenova?",
        "answer": "Kolte Patil Serenova offers 2 BHK, 3 BHK residences with spacious carpet layouts from 785 - 860 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Serenova?",
        "answer": "The official MahaRERA registration number for Kolte Patil Serenova is PR1180002500850. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Serenova?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PR1180002500850",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17625868161913530485.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17625868161612977153.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1761226956716895462.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17612269562138083432.png",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1761226942126551266.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1761226942523501026.png",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17612269261224882262.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1761226926580496050.png",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1761226899508526566.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1761226898418318371.png"
    ],
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-serenova-1",
        "projectId": "p-kolte-patil-serenova",
        "name": "2 BHK Coastal Luxe",
        "carpetArea": 785,
        "balconyArea": 65,
        "bathrooms": 2,
        "basePrice": 27500000.0,
        "pricePerSqft": 35031.84,
        "infraCharges": 500000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1761227063505755514.jpg"
      },
      {
        "id": "cfg-kolte-patil-serenova-2",
        "projectId": "p-kolte-patil-serenova",
        "name": "3 BHK Sea Facing Suite",
        "carpetArea": 1050,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 38000000.0,
        "pricePerSqft": 36190.47,
        "infraCharges": 700000.0,
        "clubhouseCharges": 450000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/1761227063802632599.png"
      }
    ]
  },
  {
    "id": "p-kolte-patil-vivere",
    "title": "Kolte Patil Vivere",
    "slug": "kolte-patil-vivere",
    "builderId": "b-kolte-patil",
    "location": "Goregaon West",
    "city": "Mumbai",
    "priceRange": "\u20b92.15 Cr - \u20b93.45 Cr",
    "exactPrice": "\u20b92.15 Cr",
    "pricePerSqft": 28500,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Modern",
        "carpetArea": "695 - 760 sq.ft",
        "priceRange": "\u20b92.15 Cr - \u20b92.55 Cr"
      },
      {
        "type": "3 BHK Premium",
        "carpetArea": "940 - 1,080 sq.ft",
        "priceRange": "\u20b92.95 Cr - \u20b93.45 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1773649285415334021.jpeg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1773649285415334021.jpeg",
    "imageAlt": "Kolte Patil Vivere Elevation by Kolte-Patil Developers in Goregaon West, Mumbai",
    "heroImageAlt": "Kolte Patil Vivere High-Rise Building Architecture",
    "lat": 19.1663,
    "lng": 72.8402,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774542867166283317.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17745428672075565255.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774542811945928505.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17745428111780275412.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17745426631079376366.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1774542663953090414.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774955181630535411.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17749551811162620999.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774955201693618606.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1774955201963424212.png",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1776692151219414725.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1776692151873809711.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17745433251655516424.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1774543325351788579.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774543293933333687.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17745432931171436448.jpg"
    ],
    "reraId": "PR1180002502702",
    "seoKeywords": [
      "Kolte Patil Vivere Goregaon West",
      "Kolte Patil Vivere price",
      "Kolte Patil Vivere floor plan",
      "Kolte Patil Vivere MahaRERA PR1180002502702",
      "Kolte Patil projects in Goregaon West",
      "flats in Goregaon West Mumbai"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Vivere, Goregaon West Mumbai by Kolte-Patil Developers. Prices from \u20b92.15 Cr. 100% Zero Brokerage direct builder desk. MahaRERA PR1180002502702.",
    "description": "Vivere by Kolte Patil Developers is a premium residential development in Bangur Nagar, Goregaon (W), thoughtfully designed for elevated urban living. With excellent connectivity to the Western Express\n\nSituated in prime Goregaon West, Mumbai, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Goregaon West location with seamless arterial connectivity",
      "MahaRERA Registered Project: PR1180002502702",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Vivere located?",
        "answer": "Kolte Patil Vivere is prime situated in Goregaon West, Mumbai, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Vivere?",
        "answer": "Residences at Kolte Patil Vivere start from \u20b92.15 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Vivere?",
        "answer": "Kolte Patil Vivere offers 2 BHK, 3 BHK residences with spacious carpet layouts from 695 - 760 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Vivere?",
        "answer": "The official MahaRERA registration number for Kolte Patil Vivere is PR1180002502702. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Vivere?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PR1180002502702",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355836413389943.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/177435583630218983.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355788262927718.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355788629945030.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743556971685069114.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355697852617786.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355612571403355.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355612314461442.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743555691469673521.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355569248753763.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355507334110307.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17743555071377129595.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355469362588919.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17743554691438163302.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743554162080237690.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355416317762693.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/177435533573760277.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355335487999409.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743552382061038238.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17743552382030492852.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355188656085216.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17743551881604015377.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774355057898842157.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774355057288282191.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774354999551065092.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774354999224557875.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1774354949195331832.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774354949683900968.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743548751974548780.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774354875967449555.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17743546881181813984.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1774354688576590220.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1773220259690388349.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1773220285815762681.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17733217911007292910.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17733218301782503731.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17733218151382509086.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17733217791278255333.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17733217541692095838.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1773220369524982203.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1773220315400918575.jpg"
    ],
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-vivere-1",
        "projectId": "p-kolte-patil-vivere",
        "name": "2 BHK Modern Urban",
        "carpetArea": 695,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 21500000.0,
        "pricePerSqft": 30935.25,
        "infraCharges": 450000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1774542867166283317.jpg"
      },
      {
        "id": "cfg-kolte-patil-vivere-2",
        "projectId": "p-kolte-patil-vivere",
        "name": "3 BHK Premium Suite",
        "carpetArea": 940,
        "balconyArea": 75,
        "bathrooms": 3,
        "basePrice": 29500000.0,
        "pricePerSqft": 31382.97,
        "infraCharges": 600000.0,
        "clubhouseCharges": 400000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/17745428672075565255.jpg"
      }
    ]
  },
  {
    "id": "p-kolte-patil-alora",
    "title": "Kolte Patil Alora",
    "slug": "kolte-patil-alora",
    "builderId": "b-kolte-patil",
    "location": "Santacruz East",
    "city": "Mumbai",
    "priceRange": "\u20b91.95 Cr - \u20b93.10 Cr",
    "exactPrice": "\u20b91.95 Cr",
    "pricePerSqft": 26000,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK City Suite",
        "carpetArea": "680 - 745 sq.ft",
        "priceRange": "\u20b91.95 Cr - \u20b92.30 Cr"
      },
      {
        "type": "3 BHK Grande",
        "carpetArea": "890 - 1,020 sq.ft",
        "priceRange": "\u20b92.65 Cr - \u20b93.10 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/17368379271110413328.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17368379271110413328.jpg",
    "imageAlt": "Kolte Patil Alora Elevation by Kolte-Patil Developers in Santacruz East, Mumbai",
    "heroImageAlt": "Kolte Patil Alora High-Rise Building Architecture",
    "lat": 19.0843,
    "lng": 72.855,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437419498181183.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437419434225824.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764373961659997462.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764373961297982927.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437373724578468.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437373178770571.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437348796564167.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437348380981470.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437291248393030.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437291336779625.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764372401249816501.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437240645194726.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/167643721815289486.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437218399319899.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16760094211897237858.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676009421784696928.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764377211558623195.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764377211198251907.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764376981463833531.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764376981430699028.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764376721442042055.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764376722054414457.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437625251825814.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764376251923061396.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437595134924226.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764375951689467383.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/16764375681105592794.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/16764375681720911222.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437496513882194.jpg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437496754730563.jpg"
    ],
    "reraId": "P51800049048",
    "seoKeywords": [
      "Kolte Patil Alora Santacruz East",
      "Kolte Patil Alora price",
      "Kolte Patil Alora floor plan",
      "Kolte Patil Alora MahaRERA P51800049048",
      "Kolte Patil projects in Santacruz East",
      "flats in Santacruz East Mumbai"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil Alora, Santacruz East Mumbai by Kolte-Patil Developers. Prices from \u20b91.95 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P51800049048.",
    "description": "Welcome to Alora by Kolte-Patil Developers, an inspired edifice that celebrates life. Leisure is the essence of living here at Alora. The collage of memories you\u2019ll create includes blissful moments li\n\nSituated in prime Santacruz East, Mumbai, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Santacruz East location with seamless arterial connectivity",
      "MahaRERA Registered Project: P51800049048",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil Alora located?",
        "answer": "Kolte Patil Alora is prime situated in Santacruz East, Mumbai, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil Alora?",
        "answer": "Residences at Kolte Patil Alora start from \u20b91.95 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil Alora?",
        "answer": "Kolte Patil Alora offers 2 BHK, 3 BHK residences with spacious carpet layouts from 680 - 745 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil Alora?",
        "answer": "The official MahaRERA registration number for Kolte Patil Alora is P51800049048. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil Alora?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800049048",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762889481750026689.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762889481254816871.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1676288965853508657.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762889651916328274.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1676288983544332850.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1676288983289735084.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762890921187806444.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1676289092758927099.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1676290046319160986.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762900461017885405.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762900611770783223.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1676290061232805390.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762889001518323473.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762889001986654752.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1676367838520015711.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1676367838995264767.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762889991535460527.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1676288999900390009.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16763678555906796.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16763678551707072792.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762890351231392593.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762890351605073089.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1676289058381783927.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762890581487657778.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/16762890751502886457.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/16762890751072378026.jpg"
    ],
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-alora-1",
        "projectId": "p-kolte-patil-alora",
        "name": "2 BHK City Suite",
        "carpetArea": 680,
        "balconyArea": 50,
        "bathrooms": 2,
        "basePrice": 19500000.0,
        "pricePerSqft": 28676.47,
        "infraCharges": 400000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1676437419498181183.jpg"
      },
      {
        "id": "cfg-kolte-patil-alora-2",
        "projectId": "p-kolte-patil-alora",
        "name": "3 BHK Grande",
        "carpetArea": 890,
        "balconyArea": 70,
        "bathrooms": 3,
        "basePrice": 26500000.0,
        "pricePerSqft": 29775.28,
        "infraCharges": 550000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 6.0,
        "registrationCharges": 30000,
        "layoutImage": "https://www.koltepatil.com/assets/uploads/project_floor_plan/1676437419434225824.jpg"
      }
    ]
  },
  {
    "id": "p-kolte-patil-la-vita",
    "title": "Kolte Patil La Vita",
    "slug": "kolte-patil-la-vita",
    "builderId": "b-kolte-patil",
    "location": "Navi Mumbai",
    "city": "Mumbai",
    "priceRange": "\u20b91.65 Cr - \u20b92.85 Cr",
    "exactPrice": "\u20b91.65 Cr",
    "pricePerSqft": 21500,
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "configurationDetails": [
      {
        "type": "2 BHK Waterfront",
        "carpetArea": "720 - 790 sq.ft",
        "priceRange": "\u20b91.65 Cr - \u20b91.95 Cr"
      },
      {
        "type": "3 BHK Luxury",
        "carpetArea": "980 - 1,150 sq.ft",
        "priceRange": "\u20b92.35 Cr - \u20b92.85 Cr"
      }
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2027",
    "image": "https://www.koltepatil.com/assets/uploads/overview/1736838699412805200.jpg",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/1736838699412805200.jpg",
    "imageAlt": "Kolte Patil La Vita Elevation by Kolte-Patil Developers in Navi Mumbai, Mumbai",
    "heroImageAlt": "Kolte Patil La Vita High-Rise Building Architecture",
    "lat": 19.076,
    "lng": 72.9986,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp",
    "floorPlans": [
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1734594123750942359.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/17345941231412469239.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17345940811463783492.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594081158089970.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1734594164312359922.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594164955974829.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/17345941441006008973.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594144718455031.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1734594038194008006.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594038492844200.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1734594060855707307.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594060428044806.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/base_image/1734594000266262849.jpeg",
      "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594000843776031.jpg"
    ],
    "reraId": "P51700077178",
    "seoKeywords": [
      "Kolte Patil La Vita Navi Mumbai",
      "Kolte Patil La Vita price",
      "Kolte Patil La Vita floor plan",
      "Kolte Patil La Vita MahaRERA P51700077178",
      "Kolte Patil projects in Navi Mumbai",
      "flats in Navi Mumbai Mumbai"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil La Vita, Navi Mumbai Mumbai by Kolte-Patil Developers. Prices from \u20b91.65 Cr. 100% Zero Brokerage direct builder desk. MahaRERA P51700077178.",
    "description": "Welcome to La Vita by Kolte-Patil Developers \u2013 Vashi\u2019s new landmark address of inspiration.\n\nLocated in the vibrant hub of Vashi, Navi Mumbai, La Vita offers seamless connectivity to premier shopping\n\nSituated in prime Navi Mumbai, Mumbai, this development by Kolte-Patil Developers delivers exceptional connectivity to transit corridors, commercial epicenters, and educational institutes. Book directly through PROPSMART REALTY for zero brokerage, developer-sanctioned pricing, and complete MahaRERA compliance.",
    "features": [
      "Grand Clubhouse",
      "Infinity Swimming Pool",
      "State-of-the-Art Gymnasium",
      "Landscaped Zen Gardens",
      "Jogging & Cycling Track",
      "Children's Adventure Play Area",
      "Multipurpose Sports Court",
      "Yoga & Meditation Deck",
      "Indoor Games Arcade",
      "Senior Citizen Gazebo",
      "Amphitheatre",
      "EV Charging Stations",
      "24/7 Multi-Tier Security",
      "High-Speed Elevators",
      "Rainwater Harvesting"
    ],
    "highlights": [
      "Prime Navi Mumbai location with seamless arterial connectivity",
      "MahaRERA Registered Project: P51700077178",
      "100% Brokerage Free direct developer allocation via PROPSMART REALTY",
      "Integrated lifestyle amenities spanning multi-level clubhouses",
      "Vastu-compliant architecture with maximum carpet efficiency"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake resistant RCC shear wall frame designed for seismic zone III"
      },
      {
        "label": "Flooring",
        "value": "800x800mm imported glazed vitrified tiles in living, dining and bedrooms"
      },
      {
        "label": "Kitchen",
        "value": "Granite platform with stainless steel sink and piped gas provision"
      },
      {
        "label": "Bathrooms",
        "value": "Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection"
      },
      {
        "label": "Electrical",
        "value": "Concealed copper wiring with Schneider / Legrand modular switches"
      },
      {
        "label": "Doors & Windows",
        "value": "Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh"
      }
    ],
    "faqs": [
      {
        "question": "Where is Kolte Patil La Vita located?",
        "answer": "Kolte Patil La Vita is prime situated in Navi Mumbai, Mumbai, offering superb access to business districts, schools, hospitals, and major transit corridors."
      },
      {
        "question": "What is the price of apartments in Kolte Patil La Vita?",
        "answer": "Residences at Kolte Patil La Vita start from \u20b91.65 Cr with direct builder inventory allocation and 100% Zero Brokerage through PROPSMART REALTY."
      },
      {
        "question": "What configurations are available in Kolte Patil La Vita?",
        "answer": "Kolte Patil La Vita offers 2 BHK, 3 BHK residences with spacious carpet layouts from 720 - 790 sq.ft."
      },
      {
        "question": "What is the MahaRERA number for Kolte Patil La Vita?",
        "answer": "The official MahaRERA registration number for Kolte Patil La Vita is P51700077178. Official certificates and sanctioned approvals can be verified on the MahaRERA portal."
      },
      {
        "question": "What amenities are provided at Kolte Patil La Vita?",
        "answer": "The project features 25+ world-class amenities including an infinity swimming pool, clubhouse, state-of-the-art fitness center, landscaped gardens, jogging track, and multi-tier security."
      }
    ],
    "verificationStatus": "Verified",
    "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51700077178",
    "images": [
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338114411377179563.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338114411626368367.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338114241492739608.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733811424489104248.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1733898309683530337.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733898309496898118.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1733898325882493227.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338983251742897581.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338091271842769035.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733809428213575422.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338988181791350586.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733898818522730005.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1733898900568547215.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733898900341572754.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1733811461104018142.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338114611923923709.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/1733898971552013502.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338989711226797711.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338990371445643202.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338990371111213177.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338990881867038957.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/1733899088734963345.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/base_image/17338991611384860974.jpg",
      "https://www.koltepatil.com/assets/uploads/gallery/17338991611268664826.jpg"
    ]
  },
  {
    "id": "p-shapoorji-wildernest-sp-kingstown",
    "title": "Shapoorji Pallonji Wildernest",
    "slug": "shapoorji-wildernest-sp-kingstown",
    "builderId": "b-shapoorji",
    "location": "Shewalewadi",
    "city": "Pune",
    "priceRange": "\u20b91.84 Cr - \u20b92.40 Cr",
    "exactPrice": "\u20b91.84 Cr",
    "configurations": [
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 18.4963459,
    "lng": 73.9695155,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-1.webp",
      "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-2.webp",
      "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-1.webp",
      "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-2.webp",
      "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-3.webp"
    ],
    "description": "Wildernest at SP Kingstown by Shapoorji Pallonji Real Estate represents ultra-luxury living on the Pune-Solapur Highway in Shewalewadi (Hadapsar Annexe), Pune. Nestled inside a massive 130+ acre master township, Wildernest offers low-density living with only 4 apartments per floor, east-west facing towers, 10-foot clear ceiling heights, and 8-foot tall panoramic windows with unhindered nature views.\n\nStarting from \u20b91.84 Cr, residences feature imported Italian marble flooring, pre-installed multi-split air conditioning, and premium sanitary fittings. Residents enjoy 50+ world-class lifestyle amenities including an infinity-edge swimming pool, rooftop pool in private villaments, open podium gym, central mango orchard, fireside lounge, and private sports arenas. Verified under MahaRERA registration P52100052683, this property is available with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Infinity Edge Pool",
      "Rooftop Pool in Villas",
      "Central Mango Orchard",
      "Open Podium Gym",
      "Clubhouse",
      "Fireside Charcha Lounge",
      "Cricket Pitch & Rink",
      "Putting Golf",
      "Jogging & Cycling Track",
      "Amphitheatre",
      "Mini Theatre",
      "Co-Working Lounges",
      "Kids Play Adventure Zone",
      "Senior Citizen Plaza"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Grade RCC Framed Structure"
      },
      {
        "label": "Flooring",
        "value": "Imported Italian Marble in Living, Dining & Master Bedroom; Laminated Wooden in Other Bedrooms"
      },
      {
        "label": "Air Conditioning",
        "value": "Pre-Installed High-Efficiency Multi-Split ACs in Living Room and All Bedrooms"
      },
      {
        "label": "Windows & Ceilings",
        "value": "8-Foot Tall Powder-Coated Aluminum Sliding Windows with Bug Mesh; 10-Foot Clear Ceiling Height"
      },
      {
        "label": "Kitchen",
        "value": "Premium Granite Countertop with Stainless Steel Sink, Piped Gas and Water Purifier Provisions"
      },
      {
        "label": "Bathrooms",
        "value": "Kohler / Grohe Grade Premium CP & Sanitary Ware with Thermostatic Diverters and Geysers"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized direct developer partner",
      "Part of 130+ Acre master-planned SP Kingstown integrated township in Hadapsar Annexe",
      "Official MahaRERA verified project P52100052683 (Mango Tree Villa Tower 1)",
      "Allotment directly from Shapoorji Pallonji Real Estate official developer inventory",
      "Exclusive Bajaj Housing Finance & ICICI Bank subvention schemes available"
    ],
    "reraId": "P52100052683",
    "pricePerSqft": 13295,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji Pallonji Wildernest",
      "Wildernest SP Kingstown",
      "Wildernest Hadapsar Annexe",
      "Shapoorji Pune projects",
      "3 BHK in Hadapsar Pune",
      "4 BHK in Shewalewadi",
      "MahaRERA P52100052683",
      "zero brokerage flats Pune"
    ],
    "metaDescription": "Buy 3 BHK, 4 BHK luxury residences in Wildernest at SP Kingstown, Hadapsar Annexe Pune by Shapoorji Pallonji Real Estate. Starting \u20b91.84 Cr. Verified MahaRERA P52100052683.",
    "advancedConfigurations": [
      {
        "id": "cfg-wildernest-1",
        "projectId": "p-shapoorji-wildernest-sp-kingstown",
        "name": "3 BHK Luxury Residence",
        "carpetArea": 1384,
        "balconyArea": 115,
        "bathrooms": 3,
        "basePrice": 18400000.0,
        "pricePerSqft": 13294.8,
        "infraCharges": 550000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-1.webp"
      },
      {
        "id": "cfg-wildernest-2",
        "projectId": "p-shapoorji-wildernest-sp-kingstown",
        "name": "3 BHK Grande Residence",
        "carpetArea": 1503,
        "balconyArea": 128,
        "bathrooms": 3,
        "basePrice": 19800000.0,
        "pricePerSqft": 13173.65,
        "infraCharges": 590000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-2.webp"
      },
      {
        "id": "cfg-wildernest-3",
        "projectId": "p-shapoorji-wildernest-sp-kingstown",
        "name": "4 BHK Royal Residence",
        "carpetArea": 1900,
        "balconyArea": 165,
        "bathrooms": 4,
        "basePrice": 24000000.0,
        "pricePerSqft": 12631.58,
        "infraCharges": 720000.0,
        "clubhouseCharges": 450000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-1.webp"
      },
      {
        "id": "cfg-wildernest-4",
        "projectId": "p-shapoorji-wildernest-sp-kingstown",
        "name": "4 BHK Imperial Villament",
        "carpetArea": 2460,
        "balconyArea": 240,
        "bathrooms": 5,
        "basePrice": 31500000.0,
        "pricePerSqft": 12804.88,
        "infraCharges": 950000.0,
        "clubhouseCharges": 500000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-2.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-vyomora-hinjewadi",
    "title": "Shapoorji Pallonji Vyomora",
    "slug": "shapoorji-vyomora-hinjewadi",
    "builderId": "b-shapoorji",
    "location": "Hinjewadi",
    "city": "Pune",
    "priceRange": "\u20b978.00 L - \u20b91.45 Cr",
    "exactPrice": "\u20b978.00 L",
    "configurations": [
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2028",
    "image": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "lat": 18.5912,
    "lng": 73.7194,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Shapoorji Pallonji Vyomora is a visionary 25-acre integrated residential development located strategically in Hinjawadi Phase 1, Pune. Designed around biophilic living and intelligent smart homes, Vyomora offers contemporary 2 BHK, 3 BHK residences and exclusive duplexes.\n\nStarting from \u20b978.00 L, the project features a massive 3-level clubhouse, Miyawaki urban forest, digital learning dome, temperature-controlled indoor pool, and direct signal-free access to major IT campuses. Verified under MahaRERA registration PR1260002600999 with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Biophilic Architecture",
      "Grand 3-Level Clubhouse",
      "Digital Learning Dome",
      "Miyawaki Forest Zone",
      "Swimming Pool",
      "Gymnasium",
      "Multipurpose Sports Courts",
      "Jogging Trail",
      "Kids Play Hub",
      "EV Charging Infrastructure"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant Aluminium Formwork RCC Construction"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Glazed Tiles in Living & Dining; Wooden Finish in Master Bedroom"
      },
      {
        "label": "Smart Home",
        "value": "App-controlled Smart Locks, Lighting and Sensor Provisions"
      },
      {
        "label": "Bathrooms",
        "value": "Grohe / American Standard CP Sanitary Fittings with Concealed Diverters"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized developer partner",
      "Prime location in Hinjawadi Phase 1 near Rajiv Gandhi Infotech Park & Metro Line 3",
      "Official MahaRERA verified project PR1260002600999",
      "Allotment directly from Shapoorji Pallonji developer inventory"
    ],
    "reraId": "PR1260002600999",
    "pricePerSqft": 11400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji Pallonji Vyomora",
      "Vyomora Hinjewadi Phase 1",
      "Shapoorji Hinjewadi Pune",
      "2 BHK in Hinjewadi",
      "3 BHK in Hinjewadi Phase 1",
      "MahaRERA PR1260002600999"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK smart homes in Shapoorji Pallonji Vyomora, Hinjewadi Phase 1 Pune. Price starts \u20b978.00 L. 100% Zero Brokerage. Verified MahaRERA PR1260002600999.",
    "advancedConfigurations": [
      {
        "id": "cfg-vyomora-1",
        "projectId": "p-shapoorji-vyomora-hinjewadi",
        "name": "2 BHK Smart Residence",
        "carpetArea": 684,
        "balconyArea": 52,
        "bathrooms": 2,
        "basePrice": 7800000.0,
        "pricePerSqft": 11403.5,
        "infraCharges": 250000.0,
        "clubhouseCharges": 150000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-vyomora-2",
        "projectId": "p-shapoorji-vyomora-hinjewadi",
        "name": "3 BHK Royale Residence",
        "carpetArea": 985,
        "balconyArea": 78,
        "bathrooms": 3,
        "basePrice": 11200000.0,
        "pricePerSqft": 11370.55,
        "infraCharges": 350000.0,
        "clubhouseCharges": 200000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-vanaha-golfland-bavdhan",
    "title": "Shapoorji Pallonji Vanaha Golfland",
    "slug": "shapoorji-vanaha-golfland-bavdhan",
    "builderId": "b-shapoorji",
    "location": "Bavdhan",
    "city": "Pune",
    "priceRange": "\u20b91.48 Cr - \u20b93.31 Cr",
    "exactPrice": "\u20b91.48 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "June 2027",
    "image": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "lat": 18.5158,
    "lng": 73.7684,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Vanaha Golfland by Shapoorji Pallonji Real Estate is an elite golf-front residential enclave situated adjacent to the Oxford Golf Resort in Bavdhan, Pune. Part of the 1,000-acre master township, Golfland offers panoramic views of the 18-hole championship golf course and surrounding Sahyadri hills.\n\nFeaturing luxury 2, 3, and 4 BHK residences and townhouses starting from \u20b91.48 Cr, the development provides expansive wrap-around decks, international-standard clubhouses, golf putting greens, and tranquil nature walks. Registered under MahaRERA P52100052376 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "18-Hole Championship Golf Course Views",
      "Vanaha Grand Clubhouse",
      "Putting Greens",
      "Temperature-Controlled Pool",
      "Tennis & Squash Courts",
      "Forest Trails & Zen Gardens",
      "Banquet Hall",
      "High-Speed Elevators"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Seismic Zone III Compliant RCC Shear Wall Structure"
      },
      {
        "label": "Flooring",
        "value": "Italian Marble in Foyer, Living and Dining; Wooden Laminate in Master Suite"
      },
      {
        "label": "Balcony",
        "value": "Glass Railing Balconies with Unobstructed Golf Views and Anti-Skid Ceramic Tiles"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized sales partner",
      "Direct fairway and golf course views in Bavdhan near Kothrud & Chandani Chowk",
      "Official MahaRERA verified project P52100052376 (Golfland I & II)",
      "Allotment directly from Shapoorji Pallonji Real Estate inventory"
    ],
    "reraId": "P52100052376",
    "pricePerSqft": 14640,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji Vanaha Golfland",
      "Vanaha Bavdhan Pune",
      "Golfland Bavdhan price",
      "luxury flats near Kothrud",
      "3 BHK in Bavdhan Pune",
      "MahaRERA P52100052376"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK, 4 BHK golf-view residences in Shapoorji Vanaha Golfland, Bavdhan Pune. Starting \u20b91.48 Cr. Verified MahaRERA P52100052376.",
    "advancedConfigurations": [
      {
        "id": "cfg-golfland-1",
        "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
        "name": "2 BHK Golf View Residence",
        "carpetArea": 1011,
        "balconyArea": 95,
        "bathrooms": 2,
        "basePrice": 14800000.0,
        "pricePerSqft": 14638.97,
        "infraCharges": 450000.0,
        "clubhouseCharges": 250000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-golfland-2",
        "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
        "name": "3 BHK Fairway Suite",
        "carpetArea": 1420,
        "balconyArea": 130,
        "bathrooms": 3,
        "basePrice": 19800000.0,
        "pricePerSqft": 13943.66,
        "infraCharges": 580000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      },
      {
        "id": "cfg-golfland-3",
        "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
        "name": "4 BHK Signature Residence",
        "carpetArea": 1980,
        "balconyArea": 180,
        "bathrooms": 4,
        "basePrice": 27500000.0,
        "pricePerSqft": 13888.88,
        "infraCharges": 750000.0,
        "clubhouseCharges": 400000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-vanaha-springs-bavdhan",
    "title": "Shapoorji Pallonji Vanaha Springs",
    "slug": "shapoorji-vanaha-springs-bavdhan",
    "builderId": "b-shapoorji",
    "location": "Bavdhan",
    "city": "Pune",
    "priceRange": "\u20b953.50 L - \u20b91.35 Cr",
    "exactPrice": "\u20b953.50 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Ready To Move",
    "type": "Residential",
    "possessionDate": "Ready / Handover",
    "image": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
    "lat": 18.5145,
    "lng": 73.7698,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Vanaha Springs by Shapoorji Pallonji is a serene hill-facing residential enclave located in Bavdhan, Pune, near Chandani Chowk and the Oxford Valley. Offering ready and near-possession 1, 2, and 3 BHK homes starting from \u20b953.50 L, Springs combines clean mountain air with rapid connectivity to Kothrud, Hinjewadi, and Mumbai-Pune Expressway.\n\nVerified under MahaRERA registration P52100030065 with complete peace of mind and 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Forest View Balconies",
      "Clubhouse & Gym",
      "Swimming Pool",
      "Landscaped Gardens",
      "Yoga Lawn",
      "Jogging Track",
      "24/7 Security"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Frame"
      },
      {
        "label": "Flooring",
        "value": "Double Charged Vitrified Tiles in All Rooms"
      },
      {
        "label": "Bathrooms",
        "value": "Branded CP & Sanitary Ware with Premium Concealed Plumbing"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Scenic hillside setting in Bavdhan just 10 mins from Kothrud",
      "Official MahaRERA verified project P52100030065",
      "Ready to move and near-possession homes"
    ],
    "reraId": "P52100030065",
    "pricePerSqft": 10800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Vanaha Springs Bavdhan",
      "Shapoorji Vanaha Springs",
      "flats in Bavdhan Pune",
      "1 BHK in Bavdhan",
      "2 BHK in Bavdhan Pune",
      "MahaRERA P52100030065"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK, 3 BHK homes in Shapoorji Vanaha Springs, Bavdhan Pune. Starting \u20b953.50 L. 100% Zero Brokerage. Verified MahaRERA P52100030065.",
    "advancedConfigurations": [
      {
        "id": "cfg-springs-1",
        "projectId": "p-shapoorji-vanaha-springs-bavdhan",
        "name": "1 BHK Nature Suite",
        "carpetArea": 495,
        "balconyArea": 42,
        "bathrooms": 1,
        "basePrice": 5350000.0,
        "pricePerSqft": 10808.08,
        "infraCharges": 180000.0,
        "clubhouseCharges": 100000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-springs-2",
        "projectId": "p-shapoorji-vanaha-springs-bavdhan",
        "name": "2 BHK Forest View",
        "carpetArea": 835,
        "balconyArea": 68,
        "bathrooms": 2,
        "basePrice": 8900000.0,
        "pricePerSqft": 10658.68,
        "infraCharges": 280000.0,
        "clubhouseCharges": 150000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-bkc-28-bandra-east",
    "title": "Shapoorji Pallonji BKC 28",
    "slug": "shapoorji-bkc-28-bandra-east",
    "builderId": "b-shapoorji",
    "location": "Bandra East",
    "city": "Mumbai",
    "priceRange": "\u20b92.23 Cr - \u20b94.65 Cr",
    "exactPrice": "\u20b92.23 Cr",
    "configurations": [
      "2 BHK",
      "4 BHK"
    ],
    "status": "Ready To Move",
    "type": "Residential",
    "possessionDate": "Ready / 2025",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 19.0607,
    "lng": 72.8524,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "BKC 28 by Shapoorji Pallonji Real Estate is an exclusive boutique high-rise development located in Kherwadi, Bandra East, Mumbai, minutes away from the Bandra-Kurla Complex (BKC) financial epicenter. Rising 22 storeys with only 4 apartments per floor, BKC 28 delivers smart, ultra-luxury 2 BHK homes and combined 4 BHK Jodi apartments.\n\nStarting from \u20b92.23 Cr, homes feature imported Italian marble flooring, full home automation, rooftop sky lounge, state-of-the-art gymnasium, and double-height entrance lobby. Registered under MahaRERA P51800028474 with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Rooftop Sky Lounge",
      "Double-Height Designer Lobby",
      "High-Tech Fitness Center",
      "Automated Multi-Level Parking",
      "Landscaped Terrace Garden",
      "CCTV Surveillance & Video Door Phone",
      "High-Speed Elevators"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant RCC Frame with Shear Wall Core"
      },
      {
        "label": "Flooring",
        "value": "Italian Marble in Living, Dining and Master Suite"
      },
      {
        "label": "Automation",
        "value": "Smart Home Automation for Lighting, AC, and Curtains"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Walking distance from BKC commercial hub and Western Express Highway",
      "Official MahaRERA verified project P51800028474",
      "Boutique low-density living with only 4 residences per floor"
    ],
    "reraId": "P51800028474",
    "pricePerSqft": 34900,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji BKC 28",
      "BKC 28 Bandra East",
      "flats in Bandra East Mumbai",
      "2 BHK near BKC",
      "Shapoorji Mumbai projects",
      "MahaRERA P51800028474"
    ],
    "metaDescription": "Buy 2 BHK, 4 BHK luxury residences in Shapoorji Pallonji BKC 28, Bandra East Mumbai. Starting \u20b92.23 Cr. Verified MahaRERA P51800028474.",
    "advancedConfigurations": [
      {
        "id": "cfg-bkc28-1",
        "projectId": "p-shapoorji-bkc-28-bandra-east",
        "name": "2 BHK Elite Residence",
        "carpetArea": 639,
        "balconyArea": 45,
        "bathrooms": 2,
        "basePrice": 22300000.0,
        "pricePerSqft": 34898.27,
        "infraCharges": 650000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-bkc28-2",
        "projectId": "p-shapoorji-bkc-28-bandra-east",
        "name": "2 BHK Signature Residence",
        "carpetArea": 712,
        "balconyArea": 52,
        "bathrooms": 2,
        "basePrice": 24900000.0,
        "pricePerSqft": 34971.91,
        "infraCharges": 720000.0,
        "clubhouseCharges": 350000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-the-odyssey-marine-drive",
    "title": "The Odyssey by Shapoorji Pallonji",
    "slug": "shapoorji-the-odyssey-marine-drive",
    "builderId": "b-shapoorji",
    "location": "Marine Drive",
    "city": "Mumbai",
    "priceRange": "\u20b914.49 Cr - \u20b931.50 Cr",
    "exactPrice": "\u20b914.49 Cr",
    "configurations": [
      "3 BHK",
      "3.5 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2028",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 18.9554,
    "lng": 72.8126,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "The Odyssey by Shapoorji Pallonji Real Estate is an ultra-luxury architectural masterpiece located off Marine Drive in Gamdevi, South Mumbai. Offering unobstructed panoramic vistas of the Arabian Sea and the Queen's Necklace, The Odyssey sets a new benchmark in bespoke high-rise luxury.\n\nFeaturing palatial 3 BHK, 3.5 BHK, and 4.5 BHK sea-facing sky suites starting from \u20b914.49 Cr, residences feature private elevator foyers, imported marble finishing, temperature-controlled sea-view infinity pool, luxury spa, and 24/7 concierge. Registered under MahaRERA P51900050998 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "Unobstructed Arabian Sea & Queen's Necklace Views",
      "Sea-Facing Infinity Pool",
      "Private Elevator Foyer",
      "Luxury Wellness Spa & Sauna",
      "Valet Parking & High-Security Access",
      "Concierge & Butler Services",
      "Private Screening Room"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Advanced High-Wind Resistant Shear Wall Engineering"
      },
      {
        "label": "Finishes",
        "value": "Imported European Marble, Handcrafted Wooden Accents"
      },
      {
        "label": "Glass Facade",
        "value": "Acoustic Double-Glazed Low-E Performance Glass"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty direct sales desk",
      "Prestigious South Mumbai address off Marine Drive & Gamdevi",
      "Official MahaRERA verified project P51900050998",
      "Ultra-exclusive low-density luxury high-rise"
    ],
    "reraId": "P51900050998",
    "pricePerSqft": 94500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "The Odyssey Shapoorji",
      "The Odyssey Marine Drive",
      "sea facing flats Marine Drive",
      "luxury flats South Mumbai",
      "MahaRERA P51900050998"
    ],
    "metaDescription": "Buy ultra-luxury sea-facing sky residences in The Odyssey by Shapoorji Pallonji, Marine Drive Gamdevi South Mumbai. Starting \u20b914.49 Cr. Verified MahaRERA P51900050998.",
    "advancedConfigurations": [
      {
        "id": "cfg-odyssey-1",
        "projectId": "p-shapoorji-the-odyssey-marine-drive",
        "name": "3 BHK Arabian Sea Vista",
        "carpetArea": 1533,
        "balconyArea": 140,
        "bathrooms": 3,
        "basePrice": 144900000.0,
        "pricePerSqft": 94520.54,
        "infraCharges": 3500000.0,
        "clubhouseCharges": 1500000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-odyssey-2",
        "projectId": "p-shapoorji-the-odyssey-marine-drive",
        "name": "3.5 BHK Queen's Necklace Suite",
        "carpetArea": 1797,
        "balconyArea": 165,
        "bathrooms": 4,
        "basePrice": 172500000.0,
        "pricePerSqft": 95993.32,
        "infraCharges": 4200000.0,
        "clubhouseCharges": 1500000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-vicinia-powai",
    "title": "Shapoorji Pallonji Vicinia",
    "slug": "shapoorji-vicinia-powai",
    "builderId": "b-shapoorji",
    "location": "Powai",
    "city": "Mumbai",
    "priceRange": "\u20b92.10 Cr - \u20b95.10 Cr",
    "exactPrice": "\u20b92.10 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "3.5 BHK"
    ],
    "status": "Ready To Move",
    "type": "Residential",
    "possessionDate": "Ready with OC",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 19.1176,
    "lng": 72.8984,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Shapoorji Pallonji Vicinia is a premier 6.7-acre residential landmark located in Chandivali, Powai, Mumbai. Designed to provide a serene sanctuary amidst the bustling city, Vicinia offers ready-to-move 2, 3, and 3.5 BHK luxury residences.\n\nStarting from \u20b92.10 Cr with Occupation Certificate (OC) received, the gated community boasts a 30,000 sq.ft luxury clubhouse, infinity pool, squash and badminton courts, senior citizen pavilions, and lush botanical gardens. Verified under MahaRERA P51800002564 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "30,000 Sq.Ft Grand Clubhouse",
      "Infinity Swimming Pool & Kids Pool",
      "Squash & Indoor Badminton Courts",
      "Gymnasium & Aerobics Studio",
      "Landscaped Central Greens",
      "Convenience Retail Plaza"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Grade RCC Construction"
      },
      {
        "label": "Flooring",
        "value": "Imported Vitrified Tiles in Living and Bedrooms"
      },
      {
        "label": "Fittings",
        "value": "Grohe / Kohler Sanitary Ware and CP Fittings"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Ready to Move with Full Occupation Certificate (OC Received) - Zero GST",
      "Prime Powai-Chandivali connectivity near international airport and JVLR",
      "Official MahaRERA verified project P51800002564"
    ],
    "reraId": "P51800002564",
    "pricePerSqft": 31300,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji Vicinia Powai",
      "Vicinia Chandivali Mumbai",
      "ready to move flats in Powai",
      "2 BHK in Powai Mumbai",
      "3 BHK in Chandivali",
      "MahaRERA P51800002564"
    ],
    "metaDescription": "Buy ready-to-move OC received 2 BHK, 3 BHK luxury residences in Shapoorji Pallonji Vicinia, Powai Chandivali Mumbai. Starting \u20b92.10 Cr. Verified MahaRERA P51800002564.",
    "advancedConfigurations": [
      {
        "id": "cfg-vicinia-1",
        "projectId": "p-shapoorji-vicinia-powai",
        "name": "2 BHK Hill View",
        "carpetArea": 671,
        "balconyArea": 50,
        "bathrooms": 2,
        "basePrice": 21000000.0,
        "pricePerSqft": 31296.57,
        "infraCharges": 580000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 0.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-vicinia-2",
        "projectId": "p-shapoorji-vicinia-powai",
        "name": "3 BHK Signature",
        "carpetArea": 1068,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 34500000.0,
        "pricePerSqft": 32303.37,
        "infraCharges": 850000.0,
        "clubhouseCharges": 400000.0,
        "gstRate": 0.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-northern-lights-thane",
    "title": "Northern Lights by Shapoorji Pallonji",
    "slug": "shapoorji-northern-lights-thane",
    "builderId": "b-shapoorji",
    "location": "Thane West",
    "city": "Mumbai",
    "priceRange": "\u20b91.35 Cr - \u20b93.25 Cr",
    "exactPrice": "\u20b91.35 Cr",
    "configurations": [
      "2 BHK",
      "3 BHK",
      "4 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 19.2183,
    "lng": 72.9644,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Northern Lights by Shapoorji Pallonji Real Estate is a landmark 4.8-acre luxury residential community located on prime Pokhran Road No. 2, Thane West. Featuring towering high-rises including the prestigious Skyraa tower, the project offers thoughtfully engineered 2, 3, and 4 BHK homes.\n\nStarting from \u20b91.35 Cr, Northern Lights provides 60+ curated amenities across multiple podium and rooftop recreation levels, including a sky lounge, heated pool, music room, and jogging trails. Verified under MahaRERA registration P51700019864 with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "60+ Curated Lifestyle Amenities",
      "Rooftop Sky Lounge (Skyraa Tower)",
      "Heated Swimming Pool",
      "Music & Performing Arts Studio",
      "Multi-Level Fitness Center",
      "Cricket Pitch & Badminton Courts",
      "Vehicle-Free Podium Garden"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Rise RCC Construction"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living and Bedrooms; Anti-Skid in Deck"
      },
      {
        "label": "Windows",
        "value": "Anodized Aluminum Sliding Windows with Bug Screen"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Prime Pokhran Road No. 2 location near Viviana Mall and Eastern Express Highway",
      "Official MahaRERA verified project P51700019864 (also P51700033243 Skyraa)",
      "Direct allotment from Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P51700019864",
    "pricePerSqft": 24700,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Shapoorji Northern Lights Thane",
      "Northern Lights Pokhran Road 2",
      "Skyraa Northern Lights",
      "flats in Thane West",
      "2 BHK in Thane",
      "3 BHK in Pokhran Road",
      "MahaRERA P51700019864"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK, 4 BHK luxury residences in Northern Lights by Shapoorji Pallonji, Pokhran Road 2 Thane West. Starting \u20b91.35 Cr. Verified MahaRERA P51700019864.",
    "advancedConfigurations": [
      {
        "id": "cfg-northern-1",
        "projectId": "p-shapoorji-northern-lights-thane",
        "name": "2 BHK Deck Residence",
        "carpetArea": 545,
        "balconyArea": 42,
        "bathrooms": 2,
        "basePrice": 13500000.0,
        "pricePerSqft": 24770.64,
        "infraCharges": 420000.0,
        "clubhouseCharges": 200000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-northern-2",
        "projectId": "p-shapoorji-northern-lights-thane",
        "name": "3 BHK Skyraa Tower",
        "carpetArea": 1085,
        "balconyArea": 85,
        "bathrooms": 3,
        "basePrice": 24500000.0,
        "pricePerSqft": 22580.64,
        "infraCharges": 650000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-the-minerva-mahalaxmi",
    "title": "The Minerva Mahalaxmi",
    "slug": "shapoorji-the-minerva-mahalaxmi",
    "builderId": "b-shapoorji",
    "location": "Mahalaxmi",
    "city": "Mumbai",
    "priceRange": "\u20b913.50 Cr - \u20b938.00 Cr",
    "exactPrice": "\u20b913.50 Cr",
    "configurations": [
      "3.5 BHK",
      "4 BHK",
      "Duplex"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 18.9827,
    "lng": 72.8258,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "The Minerva is one of India's tallest and most iconic residential skyscrapers, soaring above Mahalaxmi Racecourse in South Mumbai. Developed in strategic collaboration with Shapoorji Pallonji Real Estate, this architectural wonder offers palatial 3.5 BHK, 4 BHK, and duplex sky mansions.\n\nStarting from \u20b913.50 Cr, residences command unobstructed vistas of the Mahalaxmi Racecourse, Arabian Sea, and Mumbai skyline. Residents experience triple-height designer lobbies, high-altitude viewing observatories, temperature-controlled pools, private wellness centers, and multi-tier automated security. Verified under MahaRERA registration P51900008204 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "Unobstructed Mahalaxmi Racecourse & Sea Views",
      "Triple-Height Air-Conditioned Grand Lobby",
      "High-Altitude Observation Decks",
      "Temperature-Controlled Swimming Pool",
      "Squash & Multi-Purpose Sports Courts",
      "Automated Multi-Level Parking",
      "Private Butler & Concierge Services"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Super-Tall High-Rise Engineered Core RCC Structure"
      },
      {
        "label": "Interior",
        "value": "Italian Marble Flooring with Custom Millwork and Private Decks"
      },
      {
        "label": "Acoustics",
        "value": "Low-E Acoustic Performance Glazed Facade System"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty direct sales desk",
      "Iconic 90+ storey skyscraper facing Mahalaxmi Racecourse & Arabian Sea",
      "Official MahaRERA verified project P51900008204",
      "Ultra-exclusive high-altitude luxury living in South Mumbai"
    ],
    "reraId": "P51900008204",
    "pricePerSqft": 65600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "The Minerva Mahalaxmi",
      "Minerva Mumbai skyscraper",
      "luxury flats Mahalaxmi Racecourse",
      "4 BHK in Mahalaxmi",
      "Shapoorji Minerva Mumbai",
      "MahaRERA P51900008204"
    ],
    "metaDescription": "Buy ultra-luxury racecourse-facing sky mansions in The Minerva, Mahalaxmi South Mumbai with Shapoorji Pallonji. Starting \u20b913.50 Cr. Verified MahaRERA P51900008204.",
    "advancedConfigurations": [
      {
        "id": "cfg-minerva-1",
        "projectId": "p-shapoorji-the-minerva-mahalaxmi",
        "name": "3.5 BHK Sky Suite",
        "carpetArea": 2058,
        "balconyArea": 180,
        "bathrooms": 4,
        "basePrice": 135000000.0,
        "pricePerSqft": 65597.66,
        "infraCharges": 3500000.0,
        "clubhouseCharges": 1500000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-minerva-2",
        "projectId": "p-shapoorji-the-minerva-mahalaxmi",
        "name": "4 BHK Royal Vantage",
        "carpetArea": 2136,
        "balconyArea": 210,
        "bathrooms": 4,
        "basePrice": 158000000.0,
        "pricePerSqft": 73970.03,
        "infraCharges": 4200000.0,
        "clubhouseCharges": 1500000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-joyville-virar-mumbai",
    "title": "Joyville Virar",
    "slug": "joyville-virar-mumbai",
    "builderId": "b-shapoorji",
    "location": "Virar West",
    "city": "Mumbai",
    "priceRange": "\u20b942.00 L - \u20b977.00 L",
    "exactPrice": "\u20b942.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK"
    ],
    "status": "Ready To Move",
    "type": "Residential",
    "possessionDate": "Ready & Ongoing",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 19.4674,
    "lng": 72.8028,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "Joyville Virar by Shapoorji Pallonji Real Estate is a sprawling master-planned residential township located in Virar West in the Mumbai Metropolitan Region (MMR). Built with Shapoorji's legendary engineering standards, the project offers thoughtfully designed 1 and 2 BHK residences.\n\nStarting from \u20b942.00 L, residents enjoy access to a grand clubhouse, expansive swimming pool, sports arenas, children's parks, and landscaped gardens. Verified under MahaRERA registration P51900000444 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "Grand Gated Township",
      "Modern Clubhouse & Gym",
      "Swimming Pool",
      "Kids Play Park",
      "Senior Citizen Seating",
      "Jogging Tracks",
      "24x7 Multi-Tier Security"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Grade RCC Framed Structure"
      },
      {
        "label": "Flooring",
        "value": "Vitrified Tiles in Living, Dining and Bedrooms"
      },
      {
        "label": "Sanitary",
        "value": "Branded CP Fittings with Water Conservation Technology"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Master township with lush open spaces in Virar West",
      "Official MahaRERA verified project P51900000444",
      "Direct developer pricing with bank loan pre-approvals"
    ],
    "reraId": "P51900000444",
    "pricePerSqft": 10100,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "Joyville Virar",
      "Shapoorji Joyville Virar",
      "flats in Virar West",
      "1 BHK in Virar",
      "2 BHK in Virar West Mumbai",
      "MahaRERA P51900000444"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK homes in Joyville Virar Mumbai by Shapoorji Pallonji. Starting \u20b942.00 L. 100% Zero Brokerage. Verified MahaRERA P51900000444.",
    "advancedConfigurations": [
      {
        "id": "cfg-virar-1",
        "projectId": "p-joyville-virar-mumbai",
        "name": "1 BHK Palm Grove",
        "carpetArea": 415,
        "balconyArea": 35,
        "bathrooms": 1,
        "basePrice": 4200000.0,
        "pricePerSqft": 10120.48,
        "infraCharges": 150000.0,
        "clubhouseCharges": 100000.0,
        "gstRate": 1.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      },
      {
        "id": "cfg-virar-2",
        "projectId": "p-joyville-virar-mumbai",
        "name": "2 BHK Palm Breeze",
        "carpetArea": 644,
        "balconyArea": 55,
        "bathrooms": 2,
        "basePrice": 7000000.0,
        "pricePerSqft": 10869.56,
        "infraCharges": 250000.0,
        "clubhouseCharges": 150000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-the-canvas-residences-sewri",
    "title": "The Canvas Residences by Shapoorji Pallonji",
    "slug": "shapoorji-the-canvas-residences-sewri",
    "builderId": "b-shapoorji",
    "location": "Sewri",
    "city": "Mumbai",
    "priceRange": "\u20b92.15 Cr - \u20b93.40 Cr",
    "exactPrice": "\u20b92.15 Cr",
    "configurations": [
      "2 BHK",
      "2.5 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "Dec 2026",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 18.9982,
    "lng": 72.8558,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "The Canvas Residences by Shapoorji Pallonji (SD Corp) is an upscale harbour-facing residential tower located in Sewri West, South-Central Mumbai, right at the onset of the Mumbai Trans Harbour Link (Atal Setu). Offering premium 2 and 2.5 BHK residences with scenic views of the Arabian Sea and flamingos sanctuary.\n\nStarting from \u20b92.15 Cr, homes feature floor-to-ceiling glass windows, imported marble flooring, state-of-the-art gymnasium, infinity pool, and seamless transit to South Mumbai and Navi Mumbai. Verified under MahaRERA registration P51900000521 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "Arabian Sea Harbour & Flamingo Bay Views",
      "Infinity Swimming Pool",
      "Designer Clubhouse",
      "Hi-Tech Fitness Center",
      "Sky Deck Observatory",
      "Immediate Access to Atal Setu MTHL"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Rise RCC Framed Structure"
      },
      {
        "label": "Flooring",
        "value": "Imported Marble in Living and Dining; Wooden in Master Suite"
      },
      {
        "label": "Windows",
        "value": "Acoustic Double-Glazed Noise-Insulating Sliding Windows"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Direct connectivity via Mumbai Trans Harbour Link (Atal Setu) and Eastern Freeway",
      "Official MahaRERA verified project P51900000521",
      "Panoramic Eastern Waterfront and flamingo sanctuary views"
    ],
    "reraId": "P51900000521",
    "pricePerSqft": 33000,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "The Canvas Residences Sewri",
      "Shapoorji Sewri Mumbai",
      "flats near Atal Setu MTHL",
      "2 BHK in Sewri Mumbai",
      "MahaRERA P51900000521"
    ],
    "metaDescription": "Buy 2 BHK, 2.5 BHK harbour-view residences in The Canvas Residences by Shapoorji Pallonji, Sewri Mumbai. Starting \u20b92.15 Cr. Verified MahaRERA P51900000521.",
    "advancedConfigurations": [
      {
        "id": "cfg-canvas-1",
        "projectId": "p-shapoorji-the-canvas-residences-sewri",
        "name": "2 BHK Harbour Deck",
        "carpetArea": 650,
        "balconyArea": 50,
        "bathrooms": 2,
        "basePrice": 21500000.0,
        "pricePerSqft": 33076.92,
        "infraCharges": 580000.0,
        "clubhouseCharges": 300000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      }
    ]
  },
  {
    "id": "p-shapoorji-the-designate-santacruz",
    "title": "The Designate by Shapoorji Pallonji",
    "slug": "shapoorji-the-designate-santacruz",
    "builderId": "b-shapoorji",
    "location": "Santacruz West",
    "city": "Mumbai",
    "priceRange": "\u20b95.25 Cr - \u20b96.50 Cr",
    "exactPrice": "\u20b95.25 Cr",
    "configurations": [
      "3 BHK"
    ],
    "status": "Ready To Move",
    "type": "Residential",
    "possessionDate": "Ready with OC",
    "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "lat": 19.0833,
    "lng": 72.8367,
    "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
    ],
    "description": "The Designate by Shapoorji Pallonji Real Estate is an ultra-exclusive low-density luxury residence located in Khar West / Santacruz, Mumbai. Designed with only 2 private apartments per floor, The Designate offers bespoke 3 BHK luxury residences crafted for utmost privacy and distinction.\n\nStarting from \u20b95.25 Cr with full Occupation Certificate (OC received), homes feature Italian marble, 3.2-meter high ceilings, wrap-around balconies, private elevator access, and rooftop leisure deck. Registered under MahaRERA P51800001443 with 100% zero brokerage via PROPSMART REALTY.",
    "features": [
      "Only 2 Apartments per Floor (Maximum Privacy)",
      "Rooftop Sky Terrace & Lounge",
      "Double-Height Grand Entrance Foyer",
      "Private Elevator Access",
      "Hi-Tech Security & Concierge",
      "Multi-Tier Automated Parking"
    ],
    "specs": [
      {
        "label": "Structure",
        "value": "Earthquake Resistant High-Grade RCC Framed Structure"
      },
      {
        "label": "Flooring",
        "value": "Imported Italian Marble throughout Living, Dining and Bedrooms"
      },
      {
        "label": "Ceiling Height",
        "value": "3.2 Meter Clear Ceiling Heights"
      }
    ],
    "highlights": [
      "100% Zero Brokerage through Propsmart Realty authorized partner",
      "Ready to Move with Full Occupation Certificate (Zero GST)",
      "Prime Khar West / Santacruz elite residential neighborhood",
      "Official MahaRERA verified project P51800001443"
    ],
    "reraId": "P51800001443",
    "pricePerSqft": 44490,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Authorized Developer Partner",
    "seoKeywords": [
      "The Designate Shapoorji",
      "The Designate Santacruz",
      "flats in Khar West Mumbai",
      "3 BHK in Santacruz West",
      "MahaRERA P51800001443"
    ],
    "metaDescription": "Buy ready-to-move OC received bespoke 3 BHK luxury residences in The Designate by Shapoorji Pallonji, Santacruz Khar West Mumbai. Starting \u20b95.25 Cr. Verified MahaRERA P51800001443.",
    "advancedConfigurations": [
      {
        "id": "cfg-designate-1",
        "projectId": "p-shapoorji-the-designate-santacruz",
        "name": "3 BHK Private Residence",
        "carpetArea": 1180,
        "balconyArea": 110,
        "bathrooms": 3,
        "basePrice": 52500000.0,
        "pricePerSqft": 44491.52,
        "infraCharges": 1200000.0,
        "clubhouseCharges": 500000.0,
        "gstRate": 0.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
      }
    ]
  }
];

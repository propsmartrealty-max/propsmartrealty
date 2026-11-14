import { Builder, Project, Locality } from '../types';

export const LOCATIONS: Locality[] = [
  {
    "id": "1",
    "name": "Hinjewadi",
    "image": "/images/localities/hinjewadi.svg",
    "projectCount": 12,
    "avgPriceSqft": 7800,
    "appreciation_rate": 8.5,
    "description": "Prime Hinjewadi Pune investment corridor with 8.5% annual capital appreciation."
  },
  {
    "id": "2",
    "name": "Baner",
    "image": "/images/localities/baner.svg",
    "projectCount": 12,
    "avgPriceSqft": 10500,
    "appreciation_rate": 9.2,
    "description": "Prime Baner Pune investment corridor with 9.2% annual capital appreciation."
  },
  {
    "id": "3",
    "name": "Wakad",
    "image": "/images/localities/wakad.svg",
    "projectCount": 12,
    "avgPriceSqft": 8200,
    "appreciation_rate": 8.1,
    "description": "Prime Wakad Pune investment corridor with 8.1% annual capital appreciation."
  },
  {
    "id": "4",
    "name": "Kharadi",
    "image": "/images/localities/kharadi.svg",
    "projectCount": 12,
    "avgPriceSqft": 9600,
    "appreciation_rate": 9.5,
    "description": "Prime Kharadi Pune investment corridor with 9.5% annual capital appreciation."
  },
  {
    "id": "5",
    "name": "Balewadi",
    "image": "/images/localities/balewadi.svg",
    "projectCount": 12,
    "avgPriceSqft": 9800,
    "appreciation_rate": 8.9,
    "description": "Prime Balewadi Pune investment corridor with 8.9% annual capital appreciation."
  },
  {
    "id": "6",
    "name": "Mahalunge",
    "image": "/images/localities/mahalunge.svg",
    "projectCount": 12,
    "avgPriceSqft": 7200,
    "appreciation_rate": 10.1,
    "description": "Prime Mahalunge Pune investment corridor with 10.1% annual capital appreciation."
  },
  {
    "id": "7",
    "name": "Wagholi",
    "image": "/images/localities/wagholi.svg",
    "projectCount": 12,
    "avgPriceSqft": 6400,
    "appreciation_rate": 7.4,
    "description": "Prime Wagholi Pune investment corridor with 7.4% annual capital appreciation."
  },
  {
    "id": "8",
    "name": "Tathawade",
    "image": "/images/localities/tathawade.svg",
    "projectCount": 12,
    "avgPriceSqft": 7500,
    "appreciation_rate": 8.4,
    "description": "Prime Tathawade Pune investment corridor with 8.4% annual capital appreciation."
  },
  {
    "id": "9",
    "name": "Bavdhan",
    "image": "/images/localities/bavdhan.svg",
    "projectCount": 12,
    "avgPriceSqft": 8900,
    "appreciation_rate": 7.6,
    "description": "Prime Bavdhan Pune investment corridor with 7.6% annual capital appreciation."
  },
  {
    "id": "10",
    "name": "Hadapsar",
    "image": "/images/localities/hadapsar.svg",
    "projectCount": 12,
    "avgPriceSqft": 8400,
    "appreciation_rate": 7.9,
    "description": "Prime Hadapsar Pune investment corridor with 7.9% annual capital appreciation."
  },
  {
    "id": "11",
    "name": "Ravet",
    "image": "/images/localities/ravet.svg",
    "projectCount": 12,
    "avgPriceSqft": 7300,
    "appreciation_rate": 8.2,
    "description": "Prime Ravet Pune investment corridor with 8.2% annual capital appreciation."
  },
  {
    "id": "12",
    "name": "Pashan",
    "image": "/images/localities/pashan.svg",
    "projectCount": 12,
    "avgPriceSqft": 9200,
    "appreciation_rate": 8.0,
    "description": "Prime Pashan Pune investment corridor with 8.0% annual capital appreciation."
  },
  {
    "id": "13",
    "name": "Kothrud",
    "image": "/images/localities/kothrud.svg",
    "projectCount": 12,
    "avgPriceSqft": 12500,
    "appreciation_rate": 8.7,
    "description": "Prime Kothrud Pune investment corridor with 8.7% annual capital appreciation."
  },
  {
    "id": "14",
    "name": "Kalyani Nagar",
    "image": "/images/localities/kalyani-nagar.svg",
    "projectCount": 12,
    "avgPriceSqft": 14000,
    "appreciation_rate": 9.0,
    "description": "Prime Kalyani Nagar Pune investment corridor with 9.0% annual capital appreciation."
  },
  {
    "id": "15",
    "name": "Koregaon Park",
    "image": "/images/localities/koregaon-park.svg",
    "projectCount": 12,
    "avgPriceSqft": 15500,
    "appreciation_rate": 9.2,
    "description": "Prime Koregaon Park Pune investment corridor with 9.2% annual capital appreciation."
  },
  {
    "id": "16",
    "name": "Viman Nagar",
    "image": "/images/localities/viman-nagar.svg",
    "projectCount": 12,
    "avgPriceSqft": 11200,
    "appreciation_rate": 8.5,
    "description": "Prime Viman Nagar Pune investment corridor with 8.5% annual capital appreciation."
  },
  {
    "id": "17",
    "name": "Mamurdi",
    "image": "/images/localities/mamurdi.svg",
    "projectCount": 12,
    "avgPriceSqft": 6800,
    "appreciation_rate": 8.3,
    "description": "Prime Mamurdi Pune investment corridor with 8.3% annual capital appreciation."
  },
  {
    "id": "18",
    "name": "Pimpri Chinchwad",
    "image": "/images/localities/pimpri-chinchwad.svg",
    "projectCount": 12,
    "avgPriceSqft": 7800,
    "appreciation_rate": 7.8,
    "description": "Prime Pimpri Chinchwad Pune investment corridor with 7.8% annual capital appreciation."
  },
  {
    "id": "19",
    "name": "Mundhwa",
    "image": "/images/localities/mundhwa.svg",
    "projectCount": 12,
    "avgPriceSqft": 9100,
    "appreciation_rate": 8.8,
    "description": "Prime Mundhwa Pune investment corridor with 8.8% annual capital appreciation."
  },
  {
    "id": "20",
    "name": "Keshavnagar",
    "image": "/images/localities/keshavnagar.svg",
    "projectCount": 12,
    "avgPriceSqft": 7900,
    "appreciation_rate": 8.6,
    "description": "Prime Keshavnagar Pune investment corridor with 8.6% annual capital appreciation."
  },
  {
    "id": "21",
    "name": "Undri",
    "image": "/images/localities/undri.svg",
    "projectCount": 12,
    "avgPriceSqft": 6600,
    "appreciation_rate": 7.5,
    "description": "Prime Undri Pune investment corridor with 7.5% annual capital appreciation."
  },
  {
    "id": "22",
    "name": "Mohammed Wadi",
    "image": "/images/localities/mohammed-wadi.svg",
    "projectCount": 12,
    "avgPriceSqft": 7400,
    "appreciation_rate": 7.7,
    "description": "Prime Mohammed Wadi Pune investment corridor with 7.7% annual capital appreciation."
  },
  {
    "id": "23",
    "name": "Talegaon Dabhade",
    "image": "/images/localities/talegaon-dabhade.svg",
    "projectCount": 12,
    "avgPriceSqft": 4900,
    "appreciation_rate": 7.1,
    "description": "Prime Talegaon Dabhade Pune investment corridor with 7.1% annual capital appreciation."
  },
  {
    "id": "24",
    "name": "Camp",
    "image": "/images/localities/camp.svg",
    "projectCount": 12,
    "avgPriceSqft": 13500,
    "appreciation_rate": 8.0,
    "description": "Prime Camp Pune investment corridor with 8.0% annual capital appreciation."
  },
  {
    "id": "25",
    "name": "Anand Nagar",
    "image": "/images/localities/anand-nagar.svg",
    "projectCount": 12,
    "avgPriceSqft": 8600,
    "appreciation_rate": 7.8,
    "description": "Prime Anand Nagar Pune investment corridor with 7.8% annual capital appreciation."
  },
  {
    "id": "26",
    "name": "Bhosari",
    "image": "/images/localities/bhosari.svg",
    "projectCount": 12,
    "avgPriceSqft": 6500,
    "appreciation_rate": 7.2,
    "description": "Prime Bhosari Pune investment corridor with 7.2% annual capital appreciation."
  },
  {
    "id": "27",
    "name": "Wadgaon Sheri",
    "image": "/images/localities/wadgaon-sheri.svg",
    "projectCount": 12,
    "avgPriceSqft": 8700,
    "appreciation_rate": 8.1,
    "description": "Prime Wadgaon Sheri Pune investment corridor with 8.1% annual capital appreciation."
  },
  {
    "id": "28",
    "name": "Bhugaon",
    "image": "/images/localities/bhugaon.svg",
    "projectCount": 12,
    "avgPriceSqft": 7200,
    "appreciation_rate": 8.0,
    "description": "Prime Bhugaon Pune investment corridor with 8.0% annual capital appreciation."
  },
  {
    "id": "29",
    "name": "Shewalewadi",
    "image": "/images/localities/shewalewadi.svg",
    "projectCount": 12,
    "avgPriceSqft": 6700,
    "appreciation_rate": 7.6,
    "description": "Prime Shewalewadi Pune investment corridor with 7.6% annual capital appreciation."
  }
];

export const BUILDERS: Builder[] = [
  {
    "id": "b-godrej",
    "name": "Godrej Properties",
    "slug": "godrej-properties",
    "logo": "/images/builders/godrej.svg",
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=1200",
    "description": "Kolte-Patil Developers Ltd. is Pune\u2019s premier real estate developer with over 30 years of excellence, famous for integrated townships like Life Republic and luxury landmarks like 24K Opula.",
    "establishedYear": 1991,
    "totalProjects": 60,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Baner",
      "Mamurdi"
    ]
  },
  {
    "id": "b-vtp",
    "name": "VTP Realty",
    "slug": "vtp-realty",
    "logo": "/images/builders/vtp-realty.svg",
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
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
    "heroImage": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Mahalunge near Metro station and IT corridors",
      "Official MahaRERA verified project P52100050939",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100050939",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Mahalunge near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052957",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100052957",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100054190",
      "Allotment directly from Godrej Properties developer inventory"
    ],
    "reraId": "P52100054190",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
  },
  {
    "id": "p-kolte-patil-life-republic",
    "title": "Kolte Patil Life Republic",
    "slug": "kolte-patil-life-republic",
    "builderId": "b-kolte-patil",
    "location": "Hinjewadi",
    "priceRange": "\u20b936.00 L - \u20b985.00 L",
    "exactPrice": "\u20b936.00 L",
    "configurations": [
      "1 BHK",
      "2 BHK",
      "3 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "lat": 18.5913,
    "lng": 73.7389,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/image (81).webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/b0jK8LWuJUSOqaGRp8Twd7KIwK8bZW44yr8iBzPy.webp",
      "https://keystoneliv.com/public/uploads/property/XKyVxdTueAqnEbCtyhjSszBLqf2ycf6nRg0yhmgs.webp",
      "https://keystoneliv.com/public/uploads/property/r9E7NQbwJEHXtjb0SVNz1uBbAfn4xSMk7cAQrmhc.webp",
      "https://keystoneliv.com/public/uploads/property/2vHe2nZnwh2WEclT0BNCkE2g7B2c7VTd3FPogvCu.webp"
    ],
    "description": "Kolte Patil Life Republic by Kolte-Patil Developers represents modern residential excellence in Hinjewadi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 1 BHK, 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b936.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner. Verified under MahaRERA registration P52100087101, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Amphitheater",
      "Banquet Hall",
      "Cafeteria",
      "Club house",
      "Conference Room",
      "Fitness Corner",
      "Jogging Track",
      "Kids Play Area",
      "Library",
      "Mini-Theater",
      "Open Gym",
      "Party Lawn",
      "Reflexology",
      "Sports Courts",
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
      "Pantry Area",
      "Parking",
      "Pet Friendly",
      "Power Back Up",
      "Spacious Interiors",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100087101",
      "Allotment directly from Kolte-Patil Developers developer inventory"
    ],
    "reraId": "P52100087101",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
    "seoKeywords": [
      "Kolte Patil Life Republic Hinjewadi",
      "Kolte Patil Life Republic Pune price",
      "Kolte Patil Life Republic floor plan",
      "Kolte Patil Life Republic MahaRERA P52100087101",
      "Kolte-Patil Developers projects in Hinjewadi",
      "flats in Hinjewadi Pune",
      "buy 2 BHK in Hinjewadi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 1 BHK, 2 BHK, 3 BHK in Kolte Patil Life Republic, Hinjewadi Pune by Kolte-Patil Developers. Price starts \u20b936.00 L. 100% Zero Brokerage. Verified MahaRERA P5",
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-life-republic-1",
        "projectId": "p-kolte-patil-life-republic",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 367,
        "balconyArea": 29,
        "bathrooms": 1,
        "basePrice": 3600000.0,
        "pricePerSqft": 9809.26,
        "infraCharges": 108000.0,
        "clubhouseCharges": 72000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp"
      },
      {
        "id": "cfg-kolte-patil-life-republic-2",
        "projectId": "p-kolte-patil-life-republic",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 367,
        "balconyArea": 29,
        "bathrooms": 1,
        "basePrice": 3600000.0,
        "pricePerSqft": 9809.26,
        "infraCharges": 108000.0,
        "clubhouseCharges": 72000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/b0jK8LWuJUSOqaGRp8Twd7KIwK8bZW44yr8iBzPy.webp"
      },
      {
        "id": "cfg-kolte-patil-life-republic-3",
        "projectId": "p-kolte-patil-life-republic",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 414,
        "balconyArea": 33,
        "bathrooms": 1,
        "basePrice": 4000000.0,
        "pricePerSqft": 9661.84,
        "infraCharges": 120000.0,
        "clubhouseCharges": 80000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/XKyVxdTueAqnEbCtyhjSszBLqf2ycf6nRg0yhmgs.webp"
      },
      {
        "id": "cfg-kolte-patil-life-republic-4",
        "projectId": "p-kolte-patil-life-republic",
        "name": "1 BHK Luxury Unit",
        "carpetArea": 422,
        "balconyArea": 33,
        "bathrooms": 1,
        "basePrice": 4100000.0,
        "pricePerSqft": 9715.64,
        "infraCharges": 123000.0,
        "clubhouseCharges": 82000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/r9E7NQbwJEHXtjb0SVNz1uBbAfn4xSMk7cAQrmhc.webp"
      },
      {
        "id": "cfg-kolte-patil-life-republic-5",
        "projectId": "p-kolte-patil-life-republic",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 530,
        "balconyArea": 42,
        "bathrooms": 2,
        "basePrice": 5200000.0,
        "pricePerSqft": 9811.32,
        "infraCharges": 156000.0,
        "clubhouseCharges": 104000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/2vHe2nZnwh2WEclT0BNCkE2g7B2c7VTd3FPogvCu.webp"
      },
      {
        "id": "cfg-kolte-patil-life-republic-6",
        "projectId": "p-kolte-patil-life-republic",
        "name": "3 BHK Luxury Unit",
        "carpetArea": 822,
        "balconyArea": 65,
        "bathrooms": 3,
        "basePrice": 8500000.0,
        "pricePerSqft": 10340.63,
        "infraCharges": 255000.0,
        "clubhouseCharges": 170000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (81).webp"
      }
    ]
  },
  {
    "id": "p-kolte-patil-24k-altura",
    "title": "Kolte Patil 24K Altura",
    "slug": "kolte-patil-24k-altura",
    "builderId": "b-kolte-patil",
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
    "image": "https://keystoneliv.com/public/uploads/property/LgcjwvEED5QzuLQGfPvck5Aa89ZQLgs61tLHVi2z.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/LgcjwvEED5QzuLQGfPvck5Aa89ZQLgs61tLHVi2z.webp",
    "lat": 18.559,
    "lng": 73.7868,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/gAKiu07l2HrCUZHom4CLqKZ8T9GcBAOZgskO6R5v.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image (73).webp",
      "https://keystoneliv.com/public/uploads/property/image (74).webp",
      "https://keystoneliv.com/public/uploads/property/image (75).webp",
      "https://keystoneliv.com/public/uploads/property/23WzPt71bQ8955z0nO906uRr6OQwhG8vhfVhhhFQ.webp"
    ],
    "description": "Kolte Patil 24K Altura by Kolte-Patil Developers represents modern residential excellence in Baner, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK, 3 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b978.75 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Fitness Corner, Gym, Jogging Track, Kids Play Area, Open Gym, Pet Park. Verified under MahaRERA registration P52100051316, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
    "features": [
      "Fitness Corner",
      "Gym",
      "Jogging Track",
      "Kids Play Area",
      "Open Gym",
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
      "Natural Light",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051316",
      "Allotment directly from Kolte-Patil Developers developer inventory"
    ],
    "reraId": "P52100051316",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
    "seoKeywords": [
      "Kolte Patil 24K Altura Baner",
      "Kolte Patil 24K Altura Pune price",
      "Kolte Patil 24K Altura floor plan",
      "Kolte Patil 24K Altura MahaRERA P52100051316",
      "Kolte-Patil Developers projects in Baner",
      "flats in Baner Pune",
      "buy 2 BHK in Baner",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK, 3 BHK in Kolte Patil 24K Altura, Baner Pune by Kolte-Patil Developers. Price starts \u20b978.75 L. 100% Zero Brokerage. Verified MahaRERA P52100051316. Fl",
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-24k-altura-1",
        "projectId": "p-kolte-patil-24k-altura",
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
        "layoutImage": "https://keystoneliv.com/public/uploads/property/LgcjwvEED5QzuLQGfPvck5Aa89ZQLgs61tLHVi2z.webp"
      },
      {
        "id": "cfg-kolte-patil-24k-altura-2",
        "projectId": "p-kolte-patil-24k-altura",
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
        "layoutImage": "https://keystoneliv.com/public/uploads/property/LgcjwvEED5QzuLQGfPvck5Aa89ZQLgs61tLHVi2z.webp"
      }
    ]
  },
  {
    "id": "p-kolte-patil-little-earth",
    "title": "Kolte Patil Little Earth",
    "slug": "kolte-patil-little-earth",
    "builderId": "b-kolte-patil",
    "location": "Mamurdi",
    "priceRange": "\u20b970.00 L",
    "exactPrice": "\u20b970.00 L",
    "configurations": [
      "2 BHK"
    ],
    "status": "Under Construction",
    "type": "Residential",
    "possessionDate": "in 2027",
    "image": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp",
    "lat": 18.6738,
    "lng": 73.7142,
    "masterLayout": "https://keystoneliv.com/public/uploads/property/eX35zH58vFRd7U1uiwuEWiffMD6HgK0efJX59jfS.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image (25).webp",
      "https://keystoneliv.com/public/uploads/property/image (2).webp",
      "https://keystoneliv.com/public/uploads/property/mwg0HTzlNLGsgFGeA928cA6t4UxhNTW4yBluttCN.webp",
      "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/oRrp18Dqtxt3DIDQNFfy7w2vQ2mQpCzsjr2RG6Xh.webp"
    ],
    "description": "Kolte Patil Little Earth by Kolte-Patil Developers represents modern residential excellence in Mamurdi, Pune. Strategically located with direct access to Pune's prime business parks, tech hubs, and reputed educational institutions, this premium development offers meticulously designed 2 BHK residences with optimal natural light and cross ventilation.\n\nStarting from \u20b970.00 L, each apartment is crafted with superior structural engineering and imported fittings. Residents enjoy full access to world-class amenities including Amphitheater, Banquet Hall, Cafeteria, Club house, Conference Room, Fitness Corner. Verified under MahaRERA registration P52100048103, this property offers complete legal peace of mind with 100% zero brokerage through PROPSMART REALTY.",
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
      "Open Gym",
      "Party Lawn",
      "Pet Park",
      "Sports Courts",
      "Swimming Pool",
      "Yoga Zone",
      "24*7 Water",
      "Gas Pipeline",
      "Gated Society",
      "Intercom",
      "Lift",
      "Low Density Society",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Mamurdi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048103",
      "Allotment directly from Kolte-Patil Developers developer inventory"
    ],
    "reraId": "P52100048103",
    "pricePerSqft": 6800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
    "seoKeywords": [
      "Kolte Patil Little Earth Mamurdi",
      "Kolte Patil Little Earth Pune price",
      "Kolte Patil Little Earth floor plan",
      "Kolte Patil Little Earth MahaRERA P52100048103",
      "Kolte-Patil Developers projects in Mamurdi",
      "flats in Mamurdi Pune",
      "buy 2 BHK in Mamurdi",
      "zero brokerage property Pune"
    ],
    "metaDescription": "Buy 2 BHK in Kolte Patil Little Earth, Mamurdi Pune by Kolte-Patil Developers. Price starts \u20b970.00 L. 100% Zero Brokerage. Verified MahaRERA P52100048103. Floor",
    "advancedConfigurations": [
      {
        "id": "cfg-kolte-patil-little-earth-1",
        "projectId": "p-kolte-patil-little-earth",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 815,
        "balconyArea": 65,
        "bathrooms": 2,
        "basePrice": 7000000.0,
        "pricePerSqft": 8588.96,
        "infraCharges": 210000.0,
        "clubhouseCharges": 140000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp"
      },
      {
        "id": "cfg-kolte-patil-little-earth-2",
        "projectId": "p-kolte-patil-little-earth",
        "name": "2 BHK Luxury Unit",
        "carpetArea": 815,
        "balconyArea": 65,
        "bathrooms": 2,
        "basePrice": 7000000.0,
        "pricePerSqft": 8588.96,
        "infraCharges": 210000.0,
        "clubhouseCharges": 140000.0,
        "gstRate": 5.0,
        "stampDutyRate": 7.0,
        "registrationCharges": 30000,
        "layoutImage": "https://keystoneliv.com/public/uploads/property/image (25).webp"
      }
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033888",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100033888",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "https://keystoneliv.com/public/uploads/property/LW8ofJLVdcWXF1ixxVLZJIS7lmzcBGIFY3WSZJ6X.webp",
      "https://keystoneliv.com/public/uploads/property/evR9QMKWYPJ7mfXswMgWcM03r9vtzVYrhTLN1Yn2.png",
      "https://keystoneliv.com/public/uploads/property/zozJl3E2HhxQbEpe9Q90xFiPbJv4yhBg3pHXhqC9.png",
      "https://keystoneliv.com/public/uploads/property/CxlM9uIBn5S8zj7R50udJEA2xUAIgmgd0mDLOHo9.png"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051819",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100051819",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Bavdhan near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056310",
      "Allotment directly from VTP Realty developer inventory"
    ],
    "reraId": "P52100056310",
    "pricePerSqft": 8900,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "https://keystoneliv.com/public/uploads/property/uqOD7mlgMLBjjrzWsFb4eCL82f0hldUzEuA03gyR.webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Wagholi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047587",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100047587",
    "pricePerSqft": 6400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/zmj4n4TECfiXjZQ6PK1OM0lDjNqeGFoqs5NMDueV.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/Mc9E5NBWOsI1NtldSLZmgKPoYKU0CWl7tF5vDeCQ.webp",
      "https://keystoneliv.com/public/uploads/property/ZFDoKn37rtVLsZOWJoU75TT8J0yMCPmXyqNMqFYh.webp",
      "https://keystoneliv.com/public/uploads/property/C7tGVItVivBs5A9pu9JJNlJuIKchaxzhMmg9UhjV.webp",
      "https://keystoneliv.com/public/uploads/property/DqZiV2LxEwtgObiiMdb3ecrNCjeh3UtIWNZLlTtx.webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100050124",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100050124",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "https://keystoneliv.com/public/uploads/property/5B0NFyf2tlJWnCP759YniOd8I3OZlx9Rs0kgNfvg.webp",
      "https://keystoneliv.com/public/uploads/property/image (37).webp",
      "https://keystoneliv.com/public/uploads/property/image (38).webp",
      "https://keystoneliv.com/public/uploads/property/image (39).webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Mohammed Wadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100024215",
      "Allotment directly from Lodha Group developer inventory"
    ],
    "reraId": "P52100024215",
    "pricePerSqft": 7400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100004202",
      "Allotment directly from Panchshil Realty developer inventory"
    ],
    "reraId": "P52100004202",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100002528",
      "Allotment directly from Panchshil Realty developer inventory"
    ],
    "reraId": "P52100002528",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/jScgFqMxBVz064TlCIRcZyn7NcLN3uNGnz95bqTi.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052298",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100052298",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/PQOSV63FDT8y9apBXRIl6aZLDwOZYNUPLn6Axz9r.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/9hVlJaZ6meEGYLipoMd0CHIZi7NEU4ceqU1F8rCu.webp",
      "https://keystoneliv.com/public/uploads/property/DueMOMSvOrqkKdH0Nn6URdDTJS2nvZZ6nLJxFT4u.webp",
      "https://keystoneliv.com/public/uploads/property/JcMd0ITINpvvxezkKP8YYGDnM7BKMEaUdOn5MG9L.webp",
      "https://keystoneliv.com/public/uploads/property/k1OMgOvZDrwwhsCpM6DYwg0TeX6qDk3kwE7rft5E.webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Bhugaon near Metro station and IT corridors",
      "Official MahaRERA verified project P52100076652",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100076652",
    "pricePerSqft": 7200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/yiPGuOJ5Fhyx0YB3EzGkjiPFft7mIQsii4HFZdjW.webp",
    "floorPlans": [
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052298",
      "Allotment directly from Rohan Builders developer inventory"
    ],
    "reraId": "P52100052298",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/image - 2026-05-19T152510.033.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image - 2026-05-19T152500.769.webp",
      "https://keystoneliv.com/public/uploads/property/NdXJ20cXwaIEvbNcLMqICBTXnHFUDHwqN8v3pGx2.png",
      "https://keystoneliv.com/public/uploads/property/aJ0jJdFO8iraawNzChzm5yfRSs4FcBR0vdbLakJy.png",
      "https://keystoneliv.com/public/uploads/property/8y0bsfk2BnzfvvWUEvZvcnihuUcAp0sSkh93J6zo.png"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Pashan near Metro station and IT corridors",
      "Official MahaRERA verified project P52100028030",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100028030",
    "pricePerSqft": 9200,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077759",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100077759",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Wagholi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046510",
      "Allotment directly from Vilas Javdekar Developers developer inventory"
    ],
    "reraId": "P52100046510",
    "pricePerSqft": 6400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/7pu992x8lSATxJVYLOahMD6OwofO5QT9Pp2c33Xj.webp",
    "floorPlans": [
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Ravet near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048595",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100048595",
    "pricePerSqft": 7300,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020766",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100020766",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100064090",
      "Allotment directly from Pride Purple Group developer inventory"
    ],
    "reraId": "P52100064090",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Wadgaon Sheri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056152",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100056152",
    "pricePerSqft": 8700,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051235",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100051235",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Undri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100053440",
      "Allotment directly from Nyati Group developer inventory"
    ],
    "reraId": "P52100053440",
    "pricePerSqft": 6600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077635",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100077635",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Bhosari near Metro station and IT corridors",
      "Official MahaRERA verified project P52100030184",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100030184",
    "pricePerSqft": 6500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077635",
      "Allotment directly from Gera Developments developer inventory"
    ],
    "reraId": "P52100077635",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/hktier2sHXP4K72r1KJuALKWEkO0q8C2EMl3ZeVO.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/image (75).webp",
      "https://keystoneliv.com/public/uploads/property/kLEnSzR22c9MFpgzW1q1VBKhcmnWujmwF6wocGF3.webp",
      "https://keystoneliv.com/public/uploads/property/6muqAWdRxTJUTEwNXQRGeBfgVIluqwTW2aig5Gly.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100031595",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100031595",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100026429",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100026429",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047008",
      "Allotment directly from Kasturi Housing developer inventory"
    ],
    "reraId": "P52100047008",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/V4wSzfgdN4fSren4jb95rT0vdd4KSV49tNN9ZgvF.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/aU0av4R1IIxdmArOOo0urjB7axIHKZzbIOiGbl5G.webp",
      "https://keystoneliv.com/public/uploads/property/G8iCil7CfCUQv3jH8sFJxdrhZovPC6sPFiRqwXjG.webp",
      "https://keystoneliv.com/public/uploads/property/image (2).webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Tathawade near Metro station and IT corridors",
      "Official MahaRERA verified project P52100028049",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100028049",
    "pricePerSqft": 7500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/CRFwCIeZDlS2wIt2FCjHtVPHQkc9Bh2S4PO5qe0k.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047656",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100047656",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100055161",
      "Allotment directly from Mahindra Lifespaces developer inventory"
    ],
    "reraId": "P52100055161",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/qARqJM3G0vCdoeKlLfAh7OECZd5lY3HUYD7T9pmW.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100047987",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100047987",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Undri near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048329",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100048329",
    "pricePerSqft": 6600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100052912",
      "Allotment directly from Kumar Properties developer inventory"
    ],
    "reraId": "P52100052912",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Camp near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051537",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100051537",
    "pricePerSqft": 13500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Balewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100045228",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100045228",
    "pricePerSqft": 9800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kalyani Nagar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100048195",
      "Allotment directly from BramhaCorp developer inventory"
    ],
    "reraId": "P52100048195",
    "pricePerSqft": 14000,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100051462",
      "Allotment directly from Amanora Park Town developer inventory"
    ],
    "reraId": "P52100051462",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
  },
  {
    "id": "p-joyville-annexe",
    "title": "Joyville annexe",
    "slug": "joyville-annexe",
    "builderId": "b-joyville",
    "location": "Hadapsar",
    "priceRange": "\u20b946.00 L - \u20b91.06 Cr",
    "exactPrice": "\u20b946.00 L",
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/image (19).webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/HNvTc3nVkYmFjSbMvb2D2yLmiDCkAwa79zcs9svU.webp",
      "https://keystoneliv.com/public/uploads/property/bS9eQ4haaMridWuxHQiTNBS2XRx3BSSXIqsk3oVh.webp",
      "https://keystoneliv.com/public/uploads/property/image (17).webp",
      "https://keystoneliv.com/public/uploads/property/image (18).webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hadapsar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100026785",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100026785",
    "pricePerSqft": 8400,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
  },
  {
    "id": "p-joyville-celestia",
    "title": "Joyville Celestia",
    "slug": "joyville-celestia",
    "builderId": "b-joyville",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Shewalewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100053165",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100053165",
    "pricePerSqft": 6700,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
  },
  {
    "id": "p-joyville-sensorium",
    "title": "Joyville Sensorium",
    "slug": "joyville-sensorium",
    "builderId": "b-joyville",
    "location": "Hinjewadi",
    "priceRange": "\u20b990.00 L - \u20b91.29 Cr",
    "exactPrice": "\u20b990.00 L",
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/Hp5QymoO2ABUJ95Ntgq1OK86HTQWDyub48erpt1u.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100049547",
      "Allotment directly from Joyville by Shapoorji Pallonji developer inventory"
    ],
    "reraId": "P52100049547",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/sq9UXhpZWpFavb6sZTY5JiP6bAJWQXymSdDXjV4e.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/ugU2mSy6BbqdiWgd8BB1RXRyQnRK5gqL2KtUlB81.webp",
      "https://keystoneliv.com/public/uploads/property/3heONbZszM6nV1D5cGGWNerwu18xb77gy1pOfeUA.webp",
      "https://keystoneliv.com/public/uploads/property/Yh0MhqcWjQpkHVPH3DjAEWr0zVrTSWadIZUjfemG.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kharadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100065519",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100065519",
    "pricePerSqft": 9600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/uploads/property/GcpcnUI99erftS3CNypd2i5txdra0VlJzf8WCtWN.webp",
    "floorPlans": [
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Pimpri Chinchwad near Metro station and IT corridors",
      "Official MahaRERA verified project P52100030688",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100030688",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Hinjewadi near Metro station and IT corridors",
      "Official MahaRERA verified project P52100056358",
      "Allotment directly from Kohinoor Group developer inventory"
    ],
    "reraId": "P52100056358",
    "pricePerSqft": 7800,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "https://keystoneliv.com/public/uploads/property/xXL3bwTTQW80NCNFqMl5F3FP7Yu22pdeIS7r5Z39.webp",
      "https://keystoneliv.com/public/uploads/property/NP2lL1RMSOai3XmYdaQdzhOJxWvDzVFYB2q9WRGl.webp",
      "https://keystoneliv.com/public/uploads/property/QujUjJZ0G5zvpoujbJlR7mziw17Whp3rqma1HfW4.webp",
      "https://keystoneliv.com/public/uploads/property/CmDFE12nnFIgAUpMaBjxRl9fnigcnkgzhwmPsgEZ.webp"
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033791",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100033791",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
    "masterLayout": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/5e7ymEkZGYztA1gQgHtHN8r5SiHG3A5Er84IsIij.webp",
    "floorPlans": [
      "https://keystoneliv.com/public/uploads/property/ASPT99t1jPi71AYCgeAfhAvxZA42TDK7ect7a9AC.webp",
      "https://keystoneliv.com/public/uploads/property/jw5ukbRlHKoZR35S8lb9oHfirlSVu9uEbKjZ96Fr.webp",
      "https://keystoneliv.com/public/uploads/property/pliB773ywyiq6gouzMfqh80mTXjNcrEm9jmjmD0R.webp",
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Baner near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046423",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100046423",
    "pricePerSqft": 10500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Anand Nagar near Metro station and IT corridors",
      "Official MahaRERA verified project P52100077659",
      "Allotment directly from Kalpataru developer inventory"
    ],
    "reraId": "P52100077659",
    "pricePerSqft": 8600,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020057",
      "Allotment directly from Sobha Limited developer inventory"
    ],
    "reraId": "P52100020057",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Kothrud near Metro station and IT corridors",
      "Official MahaRERA verified project P52100020062",
      "Allotment directly from Sobha Limited developer inventory"
    ],
    "reraId": "P52100020062",
    "pricePerSqft": 12500,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Ravet near Metro station and IT corridors",
      "Official MahaRERA verified project P52100046041",
      "Allotment directly from Tata Housing developer inventory"
    ],
    "reraId": "P52100046041",
    "pricePerSqft": 7300,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
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
      "100% Zero Brokerage through Propsmart Realty direct builder sales mandate",
      "Prime connectivity in Talegaon Dabhade near Metro station and IT corridors",
      "Official MahaRERA verified project P52100033265",
      "Allotment directly from Tata Housing developer inventory"
    ],
    "reraId": "P52100033265",
    "pricePerSqft": 4900,
    "verificationStatus": "Verified",
    "verificationSource": "MahaRERA Direct Developer Mandate",
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
    ]
  }
];

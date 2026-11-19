import { Locality, Builder, Project } from '../types';

export const BUILDERS: Builder[] = [
  {
      "id": "b-nanded-city",
      "name": "Nanded City Development & Construction Co.",
      "slug": "nanded-city",
      "logo": "https://nandedcitypune.com/wp-content/themes/nandedcity/images/adr-logo.png",
      "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/11/Harmony_Apartments_Sales_Home_Banner-scaled.jpeg",
      "description": "Nanded City Development and Construction Company Ltd. (Magarpatta City Group) is the visionary master developer of Nanded City, a 700+ acre integrated township on Sinhagad Road, Pune. Renowned for pioneering sustainable township living, integrated education, destination retail centers, and eco-friendly infrastructure.",
      "establishedYear": 2008,
      "totalProjects": 24,
      "ongoingProjects": 6,
      "trustScore": 9.8,
      "locations": [
        "Sinhagad Road",
        "Pune"
      ]
  },
  {
    "id": "b-reputed",
    "name": "Reputed Builder",
    "slug": "reputed-builder",
    "logo": "/images/builders/a-reputed-west.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/51014204-43f0-496a-847a-05447110109f/gallery/mt5m03g2-6kzuic.webp",
    "description": "Reputed Developers and Consortiums delivering quality residential and commercial landmarks across prime growth corridors in Pune and Maharashtra.",
    "establishedYear": 2005,
    "totalProjects": 46,
    "ongoingProjects": 12,
    "trustScore": 9.4,
    "isVerified": true,
    "experience": 20,
    "locations": [
      "Pune",
      "Charholi Budruk",
      "Wakad",
      "Hinjewadi",
      "Kharadi"
    ]
  },
  {
    "id": "b-godrej",
    "name": "Godrej Properties",
    "slug": "godrej-properties",
    "logo": "/images/builders/godrej.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "description": "Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the Pune real estate industry with iconic township and residential landmarks.",
    "establishedYear": 1990,
    "totalProjects": 25,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Mahalunge",
      "Hinjewadi"
    ],
    "experience": 36,
    "website": "https://www.godrejproperties.com/"
  },
  {
    "id": "b-kolte-patil",
    "name": "Kolte-Patil Developers",
    "slug": "kolte-patil-developers",
    "logo": "/images/builders/kolte-patil-official.webp",
    "heroImage": "https://www.koltepatil.com/assets/uploads/overview/17630446171899594771.png",
    "description": "Kolte-Patil Developers Ltd. is a publicly listed premier real estate company with dominant presence across Pune and Mumbai. With over 30 years of excellence, Kolte-Patil is celebrated for iconic integrated townships like Life Republic in Hinjewadi and luxury landmarks under the prestigious 24K brand.",
    "establishedYear": 1991,
    "totalProjects": 27,
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
    ],
    "experience": 35,
    "website": "https://www.koltepatil.com/"
  },
  {
    "id": "b-vtp",
    "name": "VTP Realty",
    "slug": "vtp-realty",
    "logo": "/images/builders/vtp-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
    "description": "VTP Realty is Pune’s leading real estate brand celebrated for Maximum Livable Area (MLA) homes, township developments, and high construction velocity across Kharadi, Hinjewadi, and Mahalunge.",
    "establishedYear": 2011,
    "totalProjects": 26,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Kharadi",
      "Bavdhan"
    ],
    "experience": 15,
    "website": "https://vtprealty.com"
  },
  {
    "id": "b-lodha",
    "name": "Lodha Group",
    "slug": "lodha-group",
    "logo": "/images/builders/lodha-official.svg",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "description": "Lodha Group (Macrotech Developers) is one of India’s largest real estate developers delivering world-class residences, luxury amenities, and grand master-planned developments in Pune.",
    "establishedYear": 1980,
    "totalProjects": 25,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Wagholi",
      "Hinjewadi",
      "Mohammed Wadi"
    ],
    "experience": 46,
    "website": "https://www.lodhagroup.in"
  },
  {
    "id": "b-panchshil",
    "name": "Panchshil Realty",
    "slug": "panchshil-realty",
    "logo": "/images/builders/panchshil-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "description": "Panchshil Realty is Pune’s pinnacle of luxury real estate, introducing world brands including Trump Towers, YOO Pune, World Trade Center Pune, and EON Free Zone.",
    "establishedYear": 2002,
    "totalProjects": 4,
    "ongoingProjects": 5,
    "trustScore": 9.8,
    "isVerified": true,
    "locations": [
      "Kharadi"
    ],
    "experience": 24,
    "website": "https://www.pscl.in/"
  },
  {
    "id": "b-rohan",
    "name": "Rohan Builders",
    "slug": "rohan-builders",
    "logo": "/images/builders/rohan-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "description": "Rohan Builders is celebrated for pioneering the PLUS Home concept in Pune — focusing on Perfect Ventilation, Lively Light, Utmost Privacy, and Smart Space design.",
    "establishedYear": 1993,
    "totalProjects": 18,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Balewadi",
      "Bhugaon"
    ],
    "experience": 33,
    "website": "https://rohanbuilders.com"
  },
  {
    "id": "b-vilas-javdekar",
    "name": "Vilas Javdekar Developers",
    "slug": "vilas-javdekar-developers",
    "logo": "/images/builders/vilas-javdekar-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/tckPqBcVINZBVHdS5Bf2TEn7XG8BA2rNaM34RTIU.webp",
    "description": "Vilas Javdekar Developers stands for Trust and Design Excellence in Pune, known for the landmark Yashwin series and timely customer-centric delivery.",
    "establishedYear": 1981,
    "totalProjects": 19,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Pashan",
      "Kharadi",
      "Wagholi"
    ],
    "experience": 45,
    "website": "https://javdekars.com"
  },
  {
    "id": "b-pride-purple",
    "name": "Pride Purple Group",
    "slug": "pride-purple-group",
    "logo": "/images/builders/pride-purple-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/pyfCcZQGbXLGoumWmHpNJZu7lOdvBE2m8hqD7GBs.webp",
    "description": "Pride Purple Group has shaped Pune’s skyline across Hinjewadi, Wakad, and Baner with over two decades of customer trust, commercial IT towers, and premium lifestyle communities.",
    "establishedYear": 2001,
    "totalProjects": 21,
    "ongoingProjects": 5,
    "trustScore": 9.2,
    "isVerified": true,
    "locations": [
      "Ravet",
      "Hinjewadi",
      "Pimpri Chinchwad"
    ],
    "experience": 25,
    "website": "https://www.pridepurpleproperties.com"
  },
  {
    "id": "b-nyati",
    "name": "Nyati Group",
    "slug": "nyati-group",
    "logo": "/images/builders/nyati-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/CU1K5TMPY5iB90KqfJVmfosGCK6HiAnidy5Rb9Xd.webp",
    "description": "Nyati Group is an ISO-certified Pune developer committed to architectural grandeur, structural integrity, and contemporary lifestyle spaces across East and West Pune.",
    "establishedYear": 1996,
    "totalProjects": 7,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Wadgaon Sheri",
      "Baner",
      "Undri"
    ],
    "experience": 30,
    "website": "https://www.nyatigroup.com"
  },
  {
    "id": "b-gera",
    "name": "Gera Developments",
    "slug": "gera-developments",
    "logo": "/images/builders/gera-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Clv6QVczOiJD0bNhVQSdUoYvHCzVM92HasWLD3ET.webp",
    "description": "Gera Developments is India’s pioneer of ChildCentric® Homes with an unprecedented 7-Year Warranty, delivering landmark projects across Kharadi and Hinjewadi.",
    "establishedYear": 1970,
    "totalProjects": 7,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Bhosari"
    ],
    "experience": 56,
    "website": "https://gera.in/"
  },
  {
    "id": "b-kasturi",
    "name": "Kasturi Housing",
    "slug": "kasturi-housing",
    "logo": "/images/builders/kasturi.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "description": "Kasturi Housing is Pune’s premier bespoke luxury developer, famed for The Balmoral collection and minimalist architecture with global engineering standards.",
    "establishedYear": 1999,
    "totalProjects": 11,
    "ongoingProjects": 5,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Balewadi"
    ],
    "experience": 27,
    "website": "https://kasturi.com"
  },
  {
    "id": "b-mahindra",
    "name": "Mahindra Lifespaces",
    "slug": "mahindra-lifespaces",
    "logo": "/images/builders/mahindra-lifespaces-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/7R1KntHtZGpJcf1ID73ZhW6Bmbi6t69x1dDPXrCk.webp",
    "description": "Mahindra Lifespace Developers brings Mahindra Group’s trust and green building expertise to Pune with IGBC Net-Zero energy and sustainable homes.",
    "establishedYear": 1994,
    "totalProjects": 20,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Tathawade",
      "Pimpri Chinchwad",
      "Kharadi"
    ],
    "experience": 32,
    "website": "https://www.mahindralifespaces.com"
  },
  {
    "id": "b-kumar",
    "name": "Kumar Properties",
    "slug": "kumar-properties",
    "logo": "/images/builders/kumar-properties-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/ByYt4cju0mAa243xiYGkSFBnG4OPoJfO0NqnVL4K.webp",
    "description": "Kumar Properties has delivered over 35,000 happy families in Pune over five decades, establishing timeless communities across Baner, Hadapsar, and Mundhwa.",
    "establishedYear": 1966,
    "totalProjects": 3,
    "ongoingProjects": 5,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Baner",
      "Undri",
      "Hinjewadi"
    ],
    "experience": 60,
    "website": "https://www.kumarworld.com"
  },
  {
    "id": "b-bramhacorp",
    "name": "BramhaCorp",
    "slug": "bramhacorp",
    "logo": "/images/builders/bramhacorp-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/e1Yisy3QN19cU13poeL9foZvCwjxU3tEAiuqtDxW.webp",
    "description": "BramhaCorp is Pune’s pioneer in bringing world hospitality and branded residences, including Sheraton Grand, Le Meridien, and F-Residences.",
    "establishedYear": 1982,
    "totalProjects": 4,
    "ongoingProjects": 5,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Camp",
      "Balewadi",
      "Kalyani Nagar"
    ],
    "experience": 44,
    "website": "https://www.bramhacorp.in"
  },
  {
    "id": "b-amanora",
    "name": "Amanora Park Town",
    "slug": "amanora-park-town",
    "logo": "/images/builders/amanora.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp",
    "description": "Amanora Park Town by City Corporation is Maharashtra’s first accredited 400-acre smart township in Hadapsar Pune, featuring Gateway Towers and Future Towers.",
    "establishedYear": 2007,
    "totalProjects": 2,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Kothrud"
    ],
    "experience": 19,
    "website": "https://amanora.com"
  },
  {
    "id": "b-joyville",
    "name": "Joyville by Shapoorji Pallonji",
    "slug": "joyville-shapoorji-pallonji",
    "logo": "/images/builders/joyville.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
    "description": "Joyville is the aspirational residential housing platform by 150-year-old engineering titan Shapoorji Pallonji, creating biophilic homes in Hinjewadi and Hadapsar.",
    "establishedYear": 2016,
    "totalProjects": 4,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Hadapsar",
      "Shewalewadi",
      "Hinjewadi"
    ],
    "experience": 10,
    "website": "https://www.joyvillehomes.com"
  },
  {
    "id": "b-kohinoor",
    "name": "Kohinoor Group",
    "slug": "kohinoor-group",
    "logo": "/images/builders/kohinoor-official.webp",
    "heroImage": "https://iamkohinoor.com//media/68667c95d42d6_satori-overview-1.webp",
    "description": "Kohinoor Group Pune is renowned for its 42-year legacy and 'Sada Sukhi Raho' philosophy, delivering over 45 landmark residential and commercial projects across Pune's prime corridors.",
    "establishedYear": 1983,
    "totalProjects": 30,
    "ongoingProjects": 14,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Mahalunge",
      "Hinjewadi",
      "Kharadi",
      "Bhugaon",
      "Punawale",
      "Wakad",
      "Dhanori",
      "Wagholi",
      "Baner",
      "Mundhwa",
      "Pimpri Chinchwad"
    ],
    "experience": 43,
    "website": "https://iamkohinoor.com/"
  },
  {
    "id": "b-kalpataru",
    "name": "Kalpataru",
    "slug": "kalpataru",
    "logo": "/images/builders/kalpataru-official.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/Tma48Vkc54lmiZ0fVKe7BOE9Mekbtpx5PgEUl8pW.webp",
    "description": "Kalpataru is one of India’s most awarded real estate companies, creating luxury landmark gated estates in Baner and Bavdhan Pune.",
    "establishedYear": 1969,
    "totalProjects": 5,
    "ongoingProjects": 5,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Baner",
      "Anand Nagar"
    ],
    "experience": 57,
    "website": "https://www.kalpataru.com"
  },
  {
    "id": "b-sobha",
    "name": "Sobha Limited",
    "slug": "sobha-limited",
    "logo": "/images/builders/sobha-official.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/udgWlmoH6ofCgYL184zKnPq8Zexr2l7fEoztyewT.webp",
    "description": "Sobha Limited is India’s only backward integrated real estate giant, renowned for unparalleled German-standard build quality in Kothrud Pune.",
    "establishedYear": 1995,
    "totalProjects": 3,
    "ongoingProjects": 5,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Kothrud"
    ],
    "experience": 31,
    "website": "https://www.sobha.com"
  },
  {
    "id": "b-tata",
    "name": "Tata Housing",
    "slug": "tata-housing",
    "logo": "/images/builders/tata-official.webp",
    "heroImage": "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
    "description": "Tata Housing represents the 150-year legacy of Tata Group, delivering master-planned sustainable community housing across Pune.",
    "establishedYear": 1984,
    "totalProjects": 3,
    "ongoingProjects": 5,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Ravet",
      "Talegaon Dabhade"
    ],
    "experience": 42,
    "website": "https://www.tatahousings.com"
  },
  {
    "id": "b-shapoorji",
    "name": "Shapoorji Pallonji Real Estate",
    "slug": "shapoorji-pallonji-real-estate",
    "logo": "/images/builders/shapoorji.svg",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "description": "Shapoorji Pallonji Real Estate (SPRE) is the 155+ year old real estate division of the Shapoorji Pallonji Group, delivering iconic landmarks, luxury high-rises, and master-planned townships across Pune and Mumbai.",
    "establishedYear": 1865,
    "totalProjects": 11,
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
    ],
    "experience": 161,
    "website": "https://www.shapoorjipallonji.com"
  },
  {
    "id": "b-puravankara",
    "name": "Puravankara Limited",
    "slug": "puravankara",
    "logo": "/images/builders/puravankara.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
    "description": "Puravankara Limited is one of India's leading publicly listed real estate developers with over four decades of excellence across residential and commercial developments.",
    "establishedYear": 1975,
    "totalProjects": 2,
    "ongoingProjects": 18,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Mundhwa"
    ],
    "experience": 51,
    "website": "https://www.puravankara.com"
  },
  {
    "id": "b-goel-ganga",
    "name": "Goel Ganga Developments",
    "slug": "goel-ganga",
    "logo": "/images/builders/goel-ganga-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp",
    "description": "Goel Ganga Developments is a reputed Pune builder with landmark township and luxury developments across East, South, and Central Pune.",
    "establishedYear": 1983,
    "totalProjects": 6,
    "ongoingProjects": 12,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Bibwewadi",
      "Hadapsar"
    ],
    "experience": 43
  },
  {
    "id": "b-rama",
    "name": "Rama Group",
    "slug": "rama-group",
    "logo": "/images/builders/rama-group.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/2ocDxHCTXWnA2CnIKGCGcSwin1rTir1eCXkoMNzB.webp",
    "description": "Rama Group is a premier real estate conglomerate in PCMC and Pune, delivering mega residential townships with lifestyle amenities.",
    "establishedYear": 1991,
    "totalProjects": 1,
    "ongoingProjects": 10,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Ravet"
    ],
    "experience": 35
  },
  {
    "id": "b-magarpatta",
    "name": "Magarpatta Township Development",
    "slug": "magarpatta",
    "logo": "/images/builders/magarpatta.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "description": "Magarpatta Development is the pioneering creator of Magarpatta City and Nanded City, renowned for sustainable cyber cities and integrated townships.",
    "establishedYear": 1999,
    "totalProjects": 1,
    "ongoingProjects": 8,
    "trustScore": 9.8,
    "isVerified": true,
    "locations": [
      "Mundhwa"
    ],
    "experience": 27
  },
  {
    "id": "b-kundan",
    "name": "Kundan Spaces",
    "slug": "kundan-spaces",
    "logo": "/images/builders/kundan.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "description": "Kundan Spaces crafts bespoke luxury and boutique high-rise residences across Balewadi, Kondhwa, and Central Pune corridors.",
    "establishedYear": 2004,
    "totalProjects": 4,
    "ongoingProjects": 7,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Balewadi",
      "Kondhwa",
      "Ghorpadi"
    ],
    "experience": 22
  },
  {
    "id": "b-namrata",
    "name": "Namrata Group",
    "slug": "namrata-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrrp57ei-d5iyrw.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://keystoneliv.com/public/uploads/property/2SJGpjlntwj2andtbjO1IYDUMhnUXKFgMYyBz9cO.webp",
    "description": "Namrata Group has shaped Talegaon, Tathawade, and PCMC with trusted residential communities and high-growth investment projects.",
    "establishedYear": 1993,
    "totalProjects": 2,
    "ongoingProjects": 9,
    "trustScore": 9.4,
    "isVerified": true,
    "locations": [
      "Tathawade"
    ],
    "experience": 33
  },
  {
    "id": "b-krisala",
    "name": "Krisala Developers",
    "slug": "krisala",
    "logo": "/images/builders/krisala-official.webp",
    "heroImage": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
    "description": "Krisala Developers is a fast-growing developer focused on premium residential living across Tathawade, Punawale, and West Pune IT corridors.",
    "establishedYear": 2011,
    "totalProjects": 12,
    "ongoingProjects": 6,
    "trustScore": 9.3,
    "isVerified": true,
    "locations": [
      "Tathawade"
    ],
    "experience": 15,
    "website": "https://krisala.com/"
  },
  {
    "id": "b-amar",
    "name": "Amar Builders",
    "slug": "amar-builders",
    "logo": "/images/builders/amar-builders.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/0XOU0FPWX7DDG0G0jsLZKZMg3GaWP9p33quYv3LM.webp",
    "description": "Amar Builders is a symbol of ultra-luxury estates and premier Grade-A IT parks across Pashan, Kalyani Nagar, and Baner.",
    "establishedYear": 1978,
    "totalProjects": 1,
    "ongoingProjects": 8,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Pashan"
    ],
    "experience": 48
  },
  {
    "id": "b-pandit-javadekar",
    "name": "Pandit Javadekar",
    "slug": "pandit-javadekar",
    "logo": "/images/builders/pandit-javadekar.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/3PxeuRrw4eYgQ0cWzgG2Kgbdw4BwwSRi226tv5os.webp",
    "description": "Pandit Javadekar specializes in signature boutique residences and architectural landmarks across Shivaji Nagar, Prabhat Road, and Erandwane.",
    "establishedYear": 2002,
    "totalProjects": 1,
    "ongoingProjects": 7,
    "trustScore": 9.6,
    "isVerified": true,
    "locations": [
      "Shivaji Nagar"
    ],
    "experience": 24
  },
  {
    "id": "b-nirman",
    "name": "Nirman Developers",
    "slug": "nirman-developers",
    "logo": "/images/builders/nirman-developers.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/10EDARqP5amjPabTAp0nc33Wef1F7CrMp37tQhSP.webp",
    "description": "Nirman Developers builds high-quality residential communities and redevelopment high-rises across central and prime Pune nodes.",
    "establishedYear": 1995,
    "totalProjects": 3,
    "ongoingProjects": 8,
    "trustScore": 9.5,
    "isVerified": true,
    "locations": [
      "Sadashiv Peth",
      "Yerwada",
      "Shivaji Nagar"
    ],
    "experience": 31
  },
  {
    "id": "b-tulip-realty",
    "name": "Tulip Realty",
    "slug": "tulip-realty",
    "logo": "/images/builders/tulip-realty.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7e9be983-97fd-4deb-aced-9ee2824da745/gallery/mruxcc66-6m0qje.webp",
    "description": "Tulip Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-supreme-universal",
    "name": "Supreme Universal",
    "slug": "supreme-universal",
    "logo": "/images/builders/supreme.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9bf131e2-193e-4b27-b4cf-f1b812dec769/gallery/mvtqm8n6-ek1abx.webp",
    "description": "Supreme Universal is a premier luxury real estate developer with over 40 years of excellence across Mumbai, Pune, and Lonavala, renowned for architectural masterpieces, boutique luxury redevelopments, and landmark townships with 100% MahaRERA regulatory compliance.",
    "establishedYear": 1982,
    "totalProjects": 75,
    "ongoingProjects": 14,
    "locations": [
      "Pune",
      "Mumbai",
      "Lonavala"
    ],
    "experience": 42,
    "trustScore": 9.8,
    "isVerified": true,
    "website": "https://supremeuniversal.in/"
  },
  {
    "id": "b-sathe-gandhi-builders",
    "name": "Sathe Gandhi Builders",
    "slug": "sathe-gandhi-builders",
    "logo": "/images/builders/sathe-gandhi-builders.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1a3387cb-9d2b-44cb-9935-98aa9db7d093/gallery/mttxavd9-66pajv.webp",
    "description": "Sathe Gandhi Builders is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-the-skies-group",
    "name": "The Skies Group",
    "slug": "the-skies-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mwev2ro6-gfehx2.png?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a6dc0c88-7cbe-43d4-9bc3-4158339ebef6/gallery/mvghnbi8-2g2sm4.webp",
    "description": "The Skies Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 16,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-avani-housing",
    "name": "Avani Housing",
    "slug": "avani-housing",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvtitxfu-ebyssi.png?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f64dd8a4-68e0-46c6-aebf-1d8e29be3e5e/gallery/mvtitxir-2deba1.webp",
    "description": "Avani Housing is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-k-raheja-corp",
    "name": "K Raheja Corp",
    "slug": "k-raheja-corp",
    "logo": "/images/builders/k-raheja-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f6a3ff23-1594-4885-803c-779ac7881160/gallery/mvu15tc7-243ai.webp",
    "description": "K Raheja Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-privia-group",
    "name": "Privia Group",
    "slug": "privia-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/msvmu7ku-8aet6z.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/52142406-0fa2-45cb-9d60-c8bb6404417c/gallery/mumd4yga-7wpi5s.webp",
    "description": "Privia Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kesar-group",
    "name": "Kesar Group",
    "slug": "kesar-group",
    "logo": "/images/builders/kesar-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7e61c95f-602f-4601-b133-9770abb853e7/gallery/mvtpn3uf-bwnu6a.webp",
    "description": "Kesar Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vision-group",
    "name": "Vision Group",
    "slug": "vision-group",
    "logo": "/images/builders/vision-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8c495758-2bab-434b-bfe8-b7dc50ffdca6/gallery/mumj9ack-3vho0m.webp",
    "description": "Vision Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shreenidhi-developers",
    "name": "Shreenidhi Developers",
    "slug": "shreenidhi-developers",
    "logo": "/images/builders/shreenidhi-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3c41b097-0b1d-403a-aa12-8e604481316d/gallery/mtvftbrc-cmg6cv.webp",
    "description": "Shreenidhi Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-santiago-on-sector-7-road",
    "name": "Santiago On Sector 7 Road",
    "slug": "santiago-on-sector-7-road",
    "logo": "/images/builders/santiago-on-sector-7-road.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2be1e665-b28e-4bf5-a42f-348a3a0fa8ff/gallery/mvu2wo4q-g2u1r4.webp",
    "description": "Santiago On Sector 7 Road is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-konbil-group",
    "name": "Konbil Group",
    "slug": "konbil-group",
    "logo": "/images/builders/konbil-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1fb3b136-50b8-4324-8729-93f941e2b964/gallery/mvu3597y-eky877.webp",
    "description": "Konbil Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gaikwad-corp",
    "name": "Gaikwad Corp",
    "slug": "gaikwad-corp",
    "logo": "/images/builders/gaikwad-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e90f1de0-1d98-411c-b4ef-e535dce471e7/gallery/mv54jco0-7zkd55.webp",
    "description": "Gaikwad Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-zenone-developers",
    "name": "Zenone Developers",
    "slug": "zenone-developers",
    "logo": "/images/builders/zenone-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/30617edf-80e6-434b-adbb-2f306acea067/gallery/mtgwb4eh-bqushf.webp",
    "description": "Zenone Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-venkatesh-buildcon-on-old-mundhwa-road",
    "name": "Venkatesh Buildcon On Old Mundhwa Road",
    "slug": "venkatesh-buildcon-on-old-mundhwa-road",
    "logo": "/images/builders/venkatesh-buildcon-on-old-mundhwa-road.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6dcdd53e-530b-446c-a6c8-123ef894a217/gallery/mvu457zd-a1y6oz.webp",
    "description": "Venkatesh Buildcon On Old Mundhwa Road is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-pashankar-developers",
    "name": "Pashankar Developers",
    "slug": "pashankar-developers",
    "logo": "/images/builders/pashankar-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b93ed04d-dde2-433f-bb89-694ae6959151/gallery/mvu4n4xe-3dqfkr.webp",
    "description": "Pashankar Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-dream-works-realtors",
    "name": "Dream Works Realtors",
    "slug": "dream-works-realtors",
    "logo": "/images/builders/dream-works-realtors.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/efc5ccba-be62-4ab9-b3c3-5dd304d1bbc9/gallery/mvupv33n-92xe2v.webp",
    "description": "Dream Works Realtors is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sai-nisarg-landmark",
    "name": "Sai Nisarg Landmark",
    "slug": "sai-nisarg-landmark",
    "logo": "/images/builders/sai-nisarg-landmark.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/31cd26d0-3555-4bdf-8c1e-7a840afda71b/gallery/mvuiy6vl-a7nd8u.webp",
    "description": "Sai Nisarg Landmark is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 10,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-prapti-buildcon",
    "name": "Prapti Buildcon",
    "slug": "prapti-buildcon",
    "logo": "/images/builders/prapti-buildcon.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1c2a076f-5560-471a-b74d-4b10d2c36256/gallery/mvu4lfz8-ec7cds.webp",
    "description": "Prapti Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-skyway-builder-and-developers",
    "name": "Skyway Builder and Developers",
    "slug": "skyway-builder-and-developers",
    "logo": "/images/builders/skyway-builder-and-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bb0d8689-c959-429c-9ab4-183d2095c8a6/gallery/mv0nnnmq-37o9ge.webp",
    "description": "Skyway Builder and Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vtp-group",
    "name": "VTP Group",
    "slug": "vtp-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvhz6zy1-4yev0s.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3080c1b4-ff23-4ee0-8a58-455bad35d65d/gallery/mvhz2nod-wvqip.webp",
    "description": "VTP Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-four-pillars",
    "name": "Four Pillars",
    "slug": "four-pillars",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvu2edz4-d1ioy0.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6bc773eb-7656-403b-99d7-978a3cfe26e6/gallery/mvu2ee0x-d824tw.webp",
    "description": "Four Pillars is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-adi-realtors",
    "name": "Adi Realtors",
    "slug": "adi-realtors",
    "logo": "/images/builders/adi-realtors.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "description": "Adi Realtors is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nawani-developers",
    "name": "Nawani Developers",
    "slug": "nawani-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvuq5cij-5qvn57.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bdc6357f-5214-4ad0-83d5-d0ed962f20b4/gallery/mvuq5ckd-f5ryas.webp",
    "description": "Nawani Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-palladio-developers",
    "name": "Palladio Developers",
    "slug": "palladio-developers",
    "logo": "/images/builders/palladio-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/765c8240-3fed-4d70-b271-5ecbd6547ee4/gallery/mvv5vy43-31pt59.webp",
    "description": "Palladio Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vissionary-developers",
    "name": "Vissionary Developers",
    "slug": "vissionary-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mwevqiij-2bqhux.png?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/934ae67a-4206-4655-b43b-e446319056a8/gallery/mvuqeigv-choo9y.webp",
    "description": "Vissionary Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mittal-brothers-on-pan-card-club-road",
    "name": "Mittal Brothers On Pan Card Club Road",
    "slug": "mittal-brothers-on-pan-card-club-road",
    "logo": "/images/builders/mittal-brothers-on-pan-card-cluroad.svg",
    "heroImage": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "description": "Mittal Brothers On Pan Card Club Road is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-tejraj-group",
    "name": "Tejraj Group",
    "slug": "tejraj-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvwj57ky-7okfil.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/039e0489-632a-4fe2-9173-0fb7f39f299c/gallery/mvwj9k0v-1pknb2.webp",
    "description": "Tejraj Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-garve-group",
    "name": "Garve Group",
    "slug": "garve-group",
    "logo": "/images/builders/garve-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/eb5f46da-c60b-4969-834b-26d3f953ba50/gallery/msw2inrx-2gkm3l.webp",
    "description": "Garve Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-asap-spaces",
    "name": "ASAP Spaces",
    "slug": "asap-spaces",
    "logo": "/images/builders/asap-spaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6f179efc-b2df-49a3-b42b-b7335719d627/gallery/mvwhgwmc-fz80rc.webp",
    "description": "ASAP Spaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-excellaa-realty",
    "name": "Excellaa Realty",
    "slug": "excellaa-realty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvwk2rxi-ftm8f5.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1f3df788-7035-4e21-8487-a66424ab8f1f/gallery/mvwl1o7c-1x2u56.webp",
    "description": "Excellaa Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kuber-properties",
    "name": "Kuber Properties",
    "slug": "kuber-properties",
    "logo": "/images/builders/kuber-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a92fc5ac-8421-4852-af64-88fdc835cc3c/gallery/mvv3umst-naexw.webp",
    "description": "Kuber Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-prime-properties",
    "name": "Prime Properties",
    "slug": "prime-properties",
    "logo": "/images/builders/prime-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a3cccdc6-45e5-43ed-9364-4fc12208ec47/gallery/mwbwzfz9-39rbi.webp",
    "description": "Prime Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-pristine-properties",
    "name": "Pristine Properties",
    "slug": "pristine-properties",
    "logo": "/images/builders/pristine-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9e955491-de5d-45c8-a1e5-b959ff896266/gallery/mwbxwt43-7q82bw.webp",
    "description": "Pristine Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-uha-london",
    "name": "Uha London",
    "slug": "uha-london",
    "logo": "/images/builders/uha-london.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/fe3bba83-c3a1-4ebc-a7d3-38119f5f80bd/gallery/mwbxypu9-f14zae.webp",
    "description": "Uha London is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-unique-properties",
    "name": "Unique Properties",
    "slug": "unique-properties",
    "logo": "/images/builders/unique-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/991a2afa-8abc-43d8-a7a9-e2374e67d2b8/gallery/mwbvbhe8-d8o2s4.webp",
    "description": "Unique Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-krisna-nirmaan-skyscraper-llp",
    "name": "Krisna Nirmaan Skyscraper Llp",
    "slug": "krisna-nirmaan-skyscraper-llp",
    "logo": "/images/builders/krisna-nirmaan-skyscraper-llp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/cd6d53c1-cdb6-454a-b6d2-2a4fc40a4a86/gallery/mwbydpc9-6l1q7t.webp",
    "description": "Krisna Nirmaan Skyscraper Llp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-smruti-developers",
    "name": "Smruti Developers",
    "slug": "smruti-developers",
    "logo": "/images/builders/smruti-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2b8f970d-6ab2-4a1b-99dd-e5ca6ba33dd0/gallery/ms4ksnxm-c0g7p.webp",
    "description": "Smruti Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-stalwart-developers",
    "name": "Stalwart Developers",
    "slug": "stalwart-developers",
    "logo": "/images/builders/stalwart-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/edbd80d8-4bc4-41bc-8999-809af0344a9d/gallery/mtzmqeli-5bffdg.webp",
    "description": "Stalwart Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-38-developers",
    "name": "38 Developers",
    "slug": "38-developers",
    "logo": "/images/builders/38-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/060d4b73-861b-4946-a14a-f4cdbd228afb/gallery/mwc04zj6-7e49ma.webp",
    "description": "38 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ranawat-group",
    "name": "Ranawat Group",
    "slug": "ranawat-group",
    "logo": "/images/builders/ranawat-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/fe3ecf58-88a1-48db-8f0a-9127bff57588/gallery/mwc0rswd-7idamn.webp",
    "description": "Ranawat Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mangalam-landmarks",
    "name": "Mangalam Landmarks",
    "slug": "mangalam-landmarks",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvez0s1n-56n27t.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ee3d3709-ccba-444e-b44c-94c656b58362/gallery/mwbyso1b-ag04mv.webp",
    "description": "Mangalam Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-luxton-developers",
    "name": "Luxton Developers",
    "slug": "luxton-developers",
    "logo": "/images/builders/luxton-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bc16413d-ccb5-44a6-af16-228c1ca63cf9/gallery/mwc0gptg-11z3av.webp",
    "description": "Luxton Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-agarwal-and-bhondve-buildcon",
    "name": "Agarwal and Bhondve Buildcon",
    "slug": "agarwal-and-bhondve-buildcon",
    "logo": "/images/builders/agarwal-and-bhondve-buildcon.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d84e8031-0038-46c2-8600-bde888988008/gallery/mwc1qjyd-3efmmg.webp",
    "description": "Agarwal and Bhondve Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nirman-greens",
    "name": "Nirman Greens",
    "slug": "nirman-greens",
    "logo": "/images/builders/nirman-greens.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/24ca7459-95bd-4594-85b9-4b2d720268ff/gallery/mwc1i5m1-1nxgpq.webp",
    "description": "Nirman Greens is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-city-one",
    "name": "City one",
    "slug": "city-one",
    "logo": "/images/builders/city-one.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6afd9e53-566c-495c-8534-7ef6714229a9/gallery/mwbwamia-8f90y4.webp",
    "description": "City one is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 4,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-over-40-curated-lifestyle-amenities",
    "name": "Over 40 Curated Lifestyle Amenities",
    "slug": "over-40-curated-lifestyle-amenities",
    "logo": "/images/builders/over-40-curated-lifestyle-amenities.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f0b24c37-657e-4713-a35f-c1b0d9e96998/gallery/mrpbpbt9-5sv0q6.webp",
    "description": "Over 40 Curated Lifestyle Amenities is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-balaji-builders",
    "name": "Balaji Builders",
    "slug": "balaji-builders",
    "logo": "/images/builders/balaji-builders.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e0bddd57-1189-435c-9a61-82e7913baff8/gallery/mvhn571w-66kq18.jpg",
    "description": "Balaji Builders is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-legacy-lifespaces",
    "name": "Legacy Lifespaces",
    "slug": "legacy-lifespaces",
    "logo": "/images/builders/legacy-lifespaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8394e5dc-7d40-49e2-91d1-9e2213a3a9ed/gallery/mvcpkd09-iqw96.webp",
    "description": "Legacy Lifespaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-blue-pearl-group",
    "name": "Blue Pearl Group",
    "slug": "blue-pearl-group",
    "logo": "/images/builders/blue-pearl-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/84580f53-f3be-4a1b-94b5-c387737e5da0/gallery/mwc182b1-6xmrng.webp",
    "description": "Blue Pearl Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-three-lifts",
    "name": "Three Lifts",
    "slug": "three-lifts",
    "logo": "/images/builders/three-lifts.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/681ee323-40a2-43c6-aa6b-b1b628b41ded/gallery/mvv3sx8p-fro66f.webp",
    "description": "Three Lifts is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-binary-infrastructures",
    "name": "Binary infrastructures",
    "slug": "binary-infrastructures",
    "logo": "/images/builders/binary-infrastructures.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ccb891cd-2a8e-4ea7-be32-f82930b0bf1e/gallery/mryv0mv8-f5iven.webp",
    "description": "Binary infrastructures is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-santiago-realty",
    "name": "Santiago Realty",
    "slug": "santiago-realty",
    "logo": "/images/builders/santiago-realty.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a29ec45e-adb5-4102-8301-1359013fc422/gallery/mwbu7slc-a0l7qs.webp",
    "description": "Santiago Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-dasscon-realty",
    "name": "Dasscon Realty",
    "slug": "dasscon-realty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mwevqe60-583g08.png?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7544fa37-d446-4c0f-b468-f46524919acb/gallery/mwevqe85-503eob.webp",
    "description": "Dasscon Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-a-lift-and-a-fire-lift",
    "name": "A Lift And A Fire Lift",
    "slug": "a-lift-and-a-fire-lift",
    "logo": "/images/builders/a-lift-and-a-fire-lift.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3f30183c-dee9-474d-aa2e-283b5b964ca4/gallery/mwc1yu9z-32chh9.webp",
    "description": "A Lift And A Fire Lift is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-tayal-corp",
    "name": "Tayal Corp",
    "slug": "tayal-corp",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/ms3hgof1-1k0oq3.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6fea60cd-7889-4d14-94ee-e56af9f959a1/gallery/mweuxot5-2uipt2.webp",
    "description": "Tayal Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vtp-luxe",
    "name": "Vtp Luxe",
    "slug": "vtp-luxe",
    "logo": "/images/builders/vtp-luxe.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d19a8bbe-9e37-4dbf-a9fc-76590fd6a791/gallery/mvhz2yqd-eaboou.webp",
    "description": "Vtp Luxe is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vtop-spaces",
    "name": "VTOP Spaces",
    "slug": "vtop-spaces",
    "logo": "/images/builders/vtop-spaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e5f322d4-5af4-4386-95f4-9858807fdc3d/gallery/mwevqikj-7c7wfj.webp",
    "description": "VTOP Spaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gd-square-spaces",
    "name": "Gd Square Spaces",
    "slug": "gd-square-spaces",
    "logo": "/images/builders/gd-square-spaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e15cd083-ae07-4325-a450-25bf2e8a9fe5/gallery/mvgyqfx3-c7yqyo.webp",
    "description": "Gd Square Spaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rohit-infra",
    "name": "Rohit Infra",
    "slug": "rohit-infra",
    "logo": "/images/builders/rohit-infra.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/322d07a0-6385-4d77-8780-aeec2575abe7/gallery/msua2uw5-9cimze.webp",
    "description": "Rohit Infra is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-chandrarang-group",
    "name": "Chandrarang Group",
    "slug": "chandrarang-group",
    "logo": "/images/builders/chandrarang-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ef1f4368-50f7-47d6-9f9c-54729ba24adf/gallery/mrrrj96u-2995as.webp",
    "description": "Chandrarang Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-life-spaces-realty",
    "name": "Life Spaces Realty",
    "slug": "life-spaces-realty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mwevkidr-9mm3ue.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7961ad75-4a1a-477e-a5ef-29a8b2422b2c/gallery/mwevkifz-70hrok.webp",
    "description": "Life Spaces Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-estofa-realty",
    "name": "Estofa Realty",
    "slug": "estofa-realty",
    "logo": "/images/builders/estofa-realty.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/dbe6d4d7-22d8-411f-ac8e-0c297a741dec/gallery/mvj3dtph-e0p9h9.webp",
    "description": "Estofa Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gurukrupa-developers",
    "name": "Gurukrupa Developers",
    "slug": "gurukrupa-developers",
    "logo": "/images/builders/gurukrupa-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/900844af-b054-425d-8239-3c454aa794b9/gallery/mu9zjkju-3xkdey.webp",
    "description": "Gurukrupa Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-escala-developers",
    "name": "Escala Developers",
    "slug": "escala-developers",
    "logo": "/images/builders/escala-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a5446ba3-bd84-43ba-9078-c482ca87653f/gallery/mwc2g7zr-3i7hkc.webp",
    "description": "Escala Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shapoorji-pallonji",
    "name": "Shapoorji Pallonji",
    "slug": "shapoorji-pallonji",
    "logo": "/images/builders/shapoorji-pallonji.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3f50d75f-ca48-494b-946f-240dd8c3adf7/gallery/mwewan2f-5n6nc0.webp",
    "description": "Shapoorji Pallonji is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kunal-landmarks",
    "name": "Kunal Landmarks",
    "slug": "kunal-landmarks",
    "logo": "/images/builders/kunal-landmarks.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/06e74847-186b-4b70-886e-b1e9e8ea59c6/gallery/mvjcr8zz-3mph1i.webp",
    "description": "Kunal Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-anp-corp",
    "name": "ANP Corp",
    "slug": "anp-corp",
    "logo": "/images/builders/anp-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a6634267-49ad-49d9-957a-3053de1e1203/gallery/msqeqa47-83fc3u.webp",
    "description": "ANP Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 6,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mahalaxmi-group",
    "name": "Mahalaxmi Group",
    "slug": "mahalaxmi-group",
    "logo": "/images/builders/mahalaxmi-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3eba92fd-037c-4c0d-8138-adda9e82f72b/gallery/mrpbbfni-ezvifz.webp",
    "description": "Mahalaxmi Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nitaara-developers",
    "name": "Nitaara Developers",
    "slug": "nitaara-developers",
    "logo": "/images/builders/nitaara-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5e68d5f1-9feb-47fa-b46b-8c8c37bfa3a8/gallery/msd5hqri-179i32.webp",
    "description": "Nitaara Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-arkaay-developers",
    "name": "Arkaay Developers",
    "slug": "arkaay-developers",
    "logo": "/images/builders/arkaay-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/c8b7b2c5-d220-4557-b4d5-b02d2662c19c/gallery/mrqr33d9-b8r2m3.webp",
    "description": "Arkaay Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-arion-developers",
    "name": "Arion Developers",
    "slug": "arion-developers",
    "logo": "/images/builders/arion-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bc0ee393-91a5-411b-8c9e-15fc80797b1d/gallery/muwgu14e-36to9c.webp",
    "description": "Arion Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-silverise-group",
    "name": "SilveRise Group",
    "slug": "silverise-group",
    "logo": "/images/builders/silverise-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6225ea51-db39-4bd2-ba6c-36faf40655ef/gallery/mrwdlc7g-mk6mn.webp",
    "description": "SilveRise Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-truespace",
    "name": "Truespace",
    "slug": "truespace",
    "logo": "/images/builders/truespace.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/91e54192-3706-40ab-9bdd-76ae599d129d/gallery/muckf6xb-53r7zr.webp",
    "description": "Truespace is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-krishna-rrealty",
    "name": "Krishna Rrealty",
    "slug": "krishna-rrealty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvf8b6vs-55p4ul.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/92685a0d-2bbc-4399-bf68-87ff551065bc/gallery/mvfck3l0-9s42q5.webp",
    "description": "Krishna Rrealty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sukhwani-associates",
    "name": "Sukhwani associates",
    "slug": "sukhwani-associates",
    "logo": "/images/builders/sukhwani-associates.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a6634267-49ad-49d9-957a-3053de1e1203/gallery/msqeq4xg-4xkfh8.webp",
    "description": "Sukhwani associates is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mansion-creators",
    "name": "Mansion Creators",
    "slug": "mansion-creators",
    "logo": "/images/builders/mansion-creators.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/81c2c2a9-64be-4320-aa47-8f9e4cb5425d/gallery/mrs2cui8-5tomwi.webp",
    "description": "Mansion Creators is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-milleflori-developers",
    "name": "Milleflori Developers",
    "slug": "milleflori-developers",
    "logo": "/images/builders/milleflori-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b9096b94-5d0b-409b-9d81-f0ca2173d49f/gallery/mrpaw7gi-63m6i6.webp",
    "description": "Milleflori Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kamalraj-group",
    "name": "Kamalraj Group",
    "slug": "kamalraj-group",
    "logo": "/images/builders/kamalraj-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/951a2bb9-e10c-48cb-9bf3-99c455c5e238/gallery/msfujbzj-706kdg.webp",
    "description": "Kamalraj Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-drashti-developers",
    "name": "Drashti Developers",
    "slug": "drashti-developers",
    "logo": "/images/builders/drashti-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/033577c7-cde6-4c1d-acfd-995991176460/gallery/mtifivk9-afc26n.webp",
    "description": "Drashti Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sentosa-landmarks",
    "name": "Sentosa Landmarks",
    "slug": "sentosa-landmarks",
    "logo": "/images/builders/sentosa-landmarks.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ef1e189a-9218-43da-94aa-9535701986cc/gallery/muk19zsp-fwwy3j.webp",
    "description": "Sentosa Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-austin-realty",
    "name": "Austin Realty",
    "slug": "austin-realty",
    "logo": "/images/builders/austin-realty.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6a5fe380-4809-4829-b89d-7d8f4402804a/gallery/mtn4l78m-fntzk9.webp",
    "description": "Austin Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 4,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-croissance-buildcon",
    "name": "Croissance Buildcon",
    "slug": "croissance-buildcon",
    "logo": "/images/builders/croissance-buildcon.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3302b32c-7d28-4e95-8ff5-6f646428c415/gallery/mvgyqu7b-6afjkz.webp",
    "description": "Croissance Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-siyaram-developers",
    "name": "Siyaram Developers",
    "slug": "siyaram-developers",
    "logo": "/images/builders/siyaram-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a411bc50-3b7f-4951-9ae1-80c0863adb52/gallery/mvgyrjr4-c3kus9.webp",
    "description": "Siyaram Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-eh-developers",
    "name": "EH Developers",
    "slug": "eh-developers",
    "logo": "/images/builders/eh-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ade080ee-6bd8-4ea7-b8c7-66a937f7b80e/gallery/mttz63o6-30e3b.webp",
    "description": "EH Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-livience-lifespaces",
    "name": "Livience Lifespaces",
    "slug": "livience-lifespaces",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvu1ao88-8i47v8.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6565c818-1762-439b-a08e-025169ea5272/gallery/mt7hxg5c-4j78qj.webp",
    "description": "Livience Lifespaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-amberwood-developers",
    "name": "Amberwood Developers",
    "slug": "amberwood-developers",
    "logo": "/images/builders/amberwood-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/98e067af-424f-4cb4-a951-e3cc6019bad3/gallery/mtgx35jy-ew6od9.webp",
    "description": "Amberwood Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-adhira-developers",
    "name": "Adhira Developers",
    "slug": "adhira-developers",
    "logo": "/images/builders/adhira-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e2fa3cf8-05e9-4bd2-8a98-ec971184f31d/gallery/mv3pw5ns-a4mo46.webp",
    "description": "Adhira Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-december-2029",
    "name": "December 2029",
    "slug": "december-2029",
    "logo": "/images/builders/december-2029.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/45de421c-44fe-4268-af50-b309ffa7f1b6/gallery/ms0bzxch-c98x7p.webp",
    "description": "December 2029 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-arihant-developers",
    "name": "Arihant Developers",
    "slug": "arihant-developers",
    "logo": "/images/builders/arihant-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/67b56909-af22-4dee-8b51-64b0d14c3288/gallery/mt09ixxo-1bh3bg.webp",
    "description": "Arihant Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-new-developers",
    "name": "New Developers",
    "slug": "new-developers",
    "logo": "/images/builders/new-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1edaa53d-bf29-49fb-bbd4-a1388fd59928/gallery/ms4gyuat-d320b3.webp",
    "description": "New Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-51-developers",
    "name": "51 Developers",
    "slug": "51-developers",
    "logo": "/images/builders/51-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9b195edf-c20c-4111-994a-8f5bcf6ea104/gallery/mrysr25n-c3xe2z.webp",
    "description": "51 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nexus-group",
    "name": "Nexus Group",
    "slug": "nexus-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mt8gi73h-dwvbiu.jpg?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3f5cde23-0711-4d66-bf8a-15b8ed16d1d3/gallery/mvgypv2r-3xk6hd.webp",
    "description": "Nexus Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-skylish-bluediamond-innfrracon",
    "name": "Skylish Bluediamond Innfrracon",
    "slug": "skylish-bluediamond-innfrracon",
    "logo": "/images/builders/skylish-bluediamond-innfrracon.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f26fa0df-240e-434d-a8d3-5b906c62f914/gallery/mvgynds1-z2owo.webp",
    "description": "Skylish Bluediamond Innfrracon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ashirwad-enterprises",
    "name": "Ashirwad Enterprises",
    "slug": "ashirwad-enterprises",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrrpcr8s-27v62.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/cd8d7ef8-9ffe-45cc-8756-eb1507dd6c8b/gallery/mrrqryju-dmx6iw.webp",
    "description": "Ashirwad Enterprises is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sonigara-corp",
    "name": "Sonigara Corp",
    "slug": "sonigara-corp",
    "logo": "/images/builders/sonigara-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8b0cbcbc-bafa-4edd-8daf-bc0345a92fb0/gallery/ms4l9d4t-3a0rkn.webp",
    "description": "Sonigara Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ambrosia-developers",
    "name": "Ambrosia Developers",
    "slug": "ambrosia-developers",
    "logo": "/images/builders/ambrosia-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3ef14a0a-4b80-4f76-b6f2-eab72a9ca5a4/gallery/msvcd541-6sf26n.webp",
    "description": "Ambrosia Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-arise-developers",
    "name": "Arise Developers",
    "slug": "arise-developers",
    "logo": "/images/builders/arise-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8b90c69e-3eb1-4936-a613-d637d6da763d/gallery/mrwe0mp4-6rme71.webp",
    "description": "Arise Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-jhamtani-group",
    "name": "Jhamtani Group",
    "slug": "jhamtani-group",
    "logo": "/images/builders/jhamtani-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a7c1e982-9ff3-48d5-a23e-a4b95472c926/gallery/mryun1xh-ejxjkp.webp",
    "description": "Jhamtani Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rk-developers",
    "name": "RK Developers",
    "slug": "rk-developers",
    "logo": "/images/builders/rk-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1a7ea786-7a45-4de8-94ff-cb7a5120e313/gallery/mrtjxzzr-c2zjv0.webp",
    "description": "RK Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-road",
    "name": "Road",
    "slug": "road",
    "logo": "/images/builders/road.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/971a27a7-2ca1-49aa-ba47-7c19565a97c9/cover/mvgys14z-1gy57z.webp",
    "description": "Road is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-merak-developers",
    "name": "Merak Developers",
    "slug": "merak-developers",
    "logo": "/images/builders/merak-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f922d466-3cad-4f91-b178-a719f2d12f4a/gallery/mv3m472j-awlzz4.webp",
    "description": "Merak Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-elite-group",
    "name": "Elite Group",
    "slug": "elite-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mwc3colk-1osekx.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/17506f3d-4570-4491-940a-8e53076f3147/gallery/mrxe7nch-u35fu.webp",
    "description": "Elite Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-v-developers",
    "name": "V Developers",
    "slug": "v-developers",
    "logo": "/images/builders/v-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/34e1a7a3-da32-4ff4-b128-2a4e7a4e4dba/gallery/ms389nk0-3rrvzk.webp",
    "description": "V Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-march-2027",
    "name": "March 2027",
    "slug": "march-2027",
    "logo": "/images/builders/march-2027.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/689e361f-8e73-4017-b516-a5938945476d/gallery/mrwc477v-dwfcec.webp",
    "description": "March 2027 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-muktangan-developers",
    "name": "Muktangan Developers",
    "slug": "muktangan-developers",
    "logo": "/images/builders/muktangan-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9ec7dd8e-663f-46ec-8417-95f0d3543de8/gallery/mtmr3mdh-7j4vb6.webp",
    "description": "Muktangan Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-icon-group",
    "name": "ICON Group",
    "slug": "icon-group",
    "logo": "/images/builders/icon-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8f3a80d8-062b-4b96-abdd-8c9d4ace387c/gallery/mtwtazw8-padtx.webp",
    "description": "ICON Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-avis-group",
    "name": "AVIS Group",
    "slug": "avis-group",
    "logo": "/images/builders/avis-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5a8eacc1-bed9-4a3c-b415-2bbb35d962f2/gallery/mrytvdlm-9pl1vk.webp",
    "description": "AVIS Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vardhaman-properties",
    "name": "Vardhaman Properties",
    "slug": "vardhaman-properties",
    "logo": "/images/builders/vardhaman-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/cba33f94-0ced-4c4d-b487-943ecea5bfc6/gallery/msqd8hks-542thg.webp",
    "description": "Vardhaman Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-millefiori-developers",
    "name": "Millefiori Developers",
    "slug": "millefiori-developers",
    "logo": "/images/builders/millefiori-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/058bc5a5-6696-4f4b-a1a6-5cf87aa39ce5/gallery/mrtb5j80-eda8wv.webp",
    "description": "Millefiori Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nancy-developers",
    "name": "Nancy Developers",
    "slug": "nancy-developers",
    "logo": "/images/builders/nancy-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ab9177c3-e72f-4a60-bf98-5daa9077dbae/gallery/mtshghnd-8wewuu.webp",
    "description": "Nancy Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-abhinav-group",
    "name": "abhinav group",
    "slug": "abhinav-group",
    "logo": "/images/builders/abhinav-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ade9cb2c-2037-4201-8340-afe156a62f58/gallery/msg83yk3-esrzgm.webp",
    "description": "abhinav group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-platinum-buildcon",
    "name": "Platinum Buildcon",
    "slug": "platinum-buildcon",
    "logo": "/images/builders/platinum-buildcon.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/48611d1f-ff42-4e50-b233-ff28ff267b56/gallery/mrs4g8oe-3soz7l.webp",
    "description": "Platinum Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-prime-developers",
    "name": "Prime Developers",
    "slug": "prime-developers",
    "logo": "/images/builders/prime-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/848b9e71-e076-4683-ba26-f19b8a4d9c19/cover/mtr83uon-1vi659.webp",
    "description": "Prime Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-pk-group",
    "name": "PK Group",
    "slug": "pk-group",
    "logo": "/images/builders/pk-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/0b8cdabd-bf10-456b-990d-bb5003951810/gallery/mrqnwa0o-2i0li2.webp",
    "description": "PK Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ravima-ventures",
    "name": "Ravima Ventures",
    "slug": "ravima-ventures",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mryvoy8i-e9ig6b.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a0614d4f-2ac7-4c8f-b396-4d3797eca4bf/gallery/mryvtd6h-kfk7m.webp",
    "description": "Ravima Ventures is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rgs-realty",
    "name": "RGS Realty",
    "slug": "rgs-realty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrrjf9p2-99pf3l.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e9d4696f-89b3-4cd7-8770-7fd8b9e9059f/gallery/msek5hjv-9e6b5l.webp",
    "description": "RGS Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ramsa-developers",
    "name": "RamSa Developers",
    "slug": "ramsa-developers",
    "logo": "/images/builders/ramsa-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f3617d21-0df9-4450-b9bc-65424cd5106c/gallery/msyl37wy-am3g1o.webp",
    "description": "RamSa Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rahul-constructions",
    "name": "Rahul Constructions",
    "slug": "rahul-constructions",
    "logo": "/images/builders/rahul-constructions.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/787b453c-d317-43e5-bb50-f5264fa4899c/gallery/msykifjn-252gzg.jpg",
    "description": "Rahul Constructions is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-preet-promoter",
    "name": "Preet Promoter",
    "slug": "preet-promoter",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvv3sqoh-6snjcz.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/952b0965-d22a-4a32-9ac6-596edd404dfe/gallery/msyrrijj-58yi4p.webp",
    "description": "Preet Promoter is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sankla-buildcon",
    "name": "Sankla Buildcon",
    "slug": "sankla-buildcon",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvu2wo2r-9dbqgt.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2b32e733-dec7-4486-b4d7-e3db030fcc2f/gallery/mt8raaul-c6uyu2.webp",
    "description": "Sankla Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sankalp-group",
    "name": "Sankalp Group",
    "slug": "sankalp-group",
    "logo": "/images/builders/sankalp-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/24e8b4ba-f85b-4d56-9714-067e8e838fb0/gallery/msabb9qm-mhpib.webp",
    "description": "Sankalp Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-onkar-developers",
    "name": "Onkar Developers",
    "slug": "onkar-developers",
    "logo": "/images/builders/onkar-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/0cc7c1eb-b0b8-46a2-8135-af7b5aa30e87/gallery/msd1y5rp-5iy0o.webp",
    "description": "Onkar Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-bizzbay-developers",
    "name": "Bizzbay Developers",
    "slug": "bizzbay-developers",
    "logo": "/images/builders/bizzbay-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3dc1b420-f927-42eb-9b73-646a8b60bc78/gallery/mtzo6olh-8xlhqt.webp",
    "description": "Bizzbay Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-renuka-construction",
    "name": "Renuka Construction",
    "slug": "renuka-construction",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mryx1lpy-b8ta1q.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6cd703f1-29fd-4e79-974a-f66e627b5887/gallery/mt8qcwcb-b9m2g4.webp",
    "description": "Renuka Construction is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-t-developers",
    "name": "T Developers",
    "slug": "t-developers",
    "logo": "/images/builders/t-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/24d6ae25-a0ce-448a-b1e0-802f910a6444/gallery/mua3kvmu-504b36.webp",
    "description": "T Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-almal-is-a-4-bhk-residential-project",
    "name": "Almal Is A 4 Bhk Residential Project",
    "slug": "almal-is-a-4-bhk-residential-project",
    "logo": "/images/builders/almal-is-a-4-bhk-residential-project.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9b539eae-9101-4db6-8609-a0a1783bceab/gallery/munxv6ju-4rrct3.webp",
    "description": "Almal Is A 4 Bhk Residential Project is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-codename-developers",
    "name": "Codename Developers",
    "slug": "codename-developers",
    "logo": "/images/builders/codename-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/24d6ae25-a0ce-448a-b1e0-802f910a6444/gallery/mua3l5m3-9a3h3s.webp",
    "description": "Codename Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-tulip-group",
    "name": "Tulip Group",
    "slug": "tulip-group",
    "logo": "/images/builders/tulip-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/765110d3-cf60-4fb1-af72-fbed7d22491d/gallery/mvfc6xbx-17wr8.webp",
    "description": "Tulip Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-harivishva-developers",
    "name": "Harivishva Developers",
    "slug": "harivishva-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrvvi9eq-8uku93.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b22d8088-0c22-4d3d-88c7-5bd8a10c0946/gallery/ms4e6rnl-d2myhz.webp",
    "description": "Harivishva Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-yashada-realty",
    "name": "Yashada Realty",
    "slug": "yashada-realty",
    "logo": "https://punehome.in/storage/v1/object/public/project-media/developers/logos/mw9eiuvn-186jy0.webp",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/61ae461c-a73a-4c6f-9f18-8e1a8edf822e/gallery/msngjroc-84ytl0.webp",
    "description": "Yashada Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 6,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-feb-2026",
    "name": "Feb 2026",
    "slug": "feb-2026",
    "logo": "/images/builders/fe2026.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5113990c-0436-4a35-a9ac-b9802d21a448/gallery/mul2s7nm-3zipbp.webp",
    "description": "Feb 2026 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vj-developers",
    "name": "VJ Developers",
    "slug": "vj-developers",
    "logo": "/images/builders/vj-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/99ce3d8b-3910-41f2-be36-1e991b80692b/gallery/mtfqrpaw-70lfh1.webp",
    "description": "VJ Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-commercial-developers",
    "name": "Commercial Developers",
    "slug": "commercial-developers",
    "logo": "/images/builders/commercial-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/654bbb43-a80a-4cdb-a564-7d86a52df17c/gallery/mrytnodb-2izrb9.webp",
    "description": "Commercial Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mauli-developers",
    "name": "Mauli Developers",
    "slug": "mauli-developers",
    "logo": "/images/builders/mauli-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a6bb8368-42c5-433d-a743-63e4ade9e95c/gallery/mrrkvfqh-9gxwsy.webp",
    "description": "Mauli Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-park-developers",
    "name": "Park Developers",
    "slug": "park-developers",
    "logo": "/images/builders/park-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b6f7d828-1abf-42f9-80d8-454090539be2/gallery/mrxttsfz-gamp1q.webp",
    "description": "Park Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-the-developer",
    "name": "The Developer",
    "slug": "the-developer",
    "logo": "/images/builders/the-developer.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7c15740e-3e56-49b7-86ad-3f50e9c2761e/gallery/mvfc1lsm-5ci80s.webp",
    "description": "The Developer is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-maheshwaram-associates",
    "name": "Maheshwaram Associates",
    "slug": "maheshwaram-associates",
    "logo": "/images/builders/maheshwaram-associates.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/92c3cc6d-744b-4bad-9224-d1afb435a8bc/gallery/mtmsfjnr-ccc5t0.webp",
    "description": "Maheshwaram Associates is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-geo-developers",
    "name": "GEO Developers",
    "slug": "geo-developers",
    "logo": "/images/builders/geo-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8f9b342d-2355-4f8e-8bc9-93fd2e8bf50e/gallery/msg76i9z-9ekdyn.webp",
    "description": "GEO Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kunal-group",
    "name": "Kunal Group",
    "slug": "kunal-group",
    "logo": "/images/builders/kunal-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/951faf40-6acb-4fef-abd1-f5ef5cb26a99/gallery/mrtjk1pm-am367u.webp",
    "description": "Kunal Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-alpine-developers",
    "name": "ALPINE Developers",
    "slug": "alpine-developers",
    "logo": "/images/builders/alpine-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/34b209bd-d98f-40de-b735-24132e7edc0e/gallery/mrvu8nbp-9ls2yu.webp",
    "description": "ALPINE Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-newton-developers",
    "name": "Newton Developers",
    "slug": "newton-developers",
    "logo": "/images/builders/newton-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/79ad62b1-963d-43e6-92e9-7d2a50735dc5/gallery/mvhpt6ph-7h7vlt.webp",
    "description": "Newton Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-road-and-rail",
    "name": "Road And Rail",
    "slug": "road-and-rail",
    "logo": "/images/builders/road-and-rail.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/07f33567-595b-4aa8-943e-6640f90acc51/gallery/mupk5pl8-3ye1my.webp",
    "description": "Road And Rail is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nm-corp",
    "name": "NM Corp",
    "slug": "nm-corp",
    "logo": "/images/builders/nm-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/157b51b9-13b8-4ea8-851d-cb26fed69ee9/gallery/msg961nj-f6m04h.webp",
    "description": "NM Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-grd-infraprojects-private-limited",
    "name": "GRD Infraprojects Private Limited",
    "slug": "grd-infraprojects-private-limited",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrtgwaq7-dqyetw.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/c8016333-bd3a-410d-860f-c1949064dd27/gallery/msfqrm6d-8cvrt8.webp",
    "description": "GRD Infraprojects Private Limited is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gen1-developers",
    "name": "Gen1 Developers",
    "slug": "gen1-developers",
    "logo": "/images/builders/gen1-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/50692e8f-fea2-4b79-a477-99df56aa20c0/gallery/msw30lhj-begcd0.webp",
    "description": "Gen1 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-crestline-developers",
    "name": "Crestline Developers",
    "slug": "crestline-developers",
    "logo": "/images/builders/crestline-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/c68d7f2b-2386-4496-b1b2-d96371a7e8a6/gallery/mv53wbs0-75nfjl.webp",
    "description": "Crestline Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-aria-developers",
    "name": "Aria Developers",
    "slug": "aria-developers",
    "logo": "/images/builders/aria-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6c3ce846-af1c-4745-8f05-deb747f088ea/gallery/ms7gja99-51tdna.webp",
    "description": "Aria Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ag-developers",
    "name": "AG Developers",
    "slug": "ag-developers",
    "logo": "/images/builders/ag-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6d10e688-5927-4ea8-a4da-a454a1bbf4b8/gallery/msueedbq-8ttwk2.webp",
    "description": "AG Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gt-associates-promotors-and-builders",
    "name": "GT Associates Promotors and Builders",
    "slug": "gt-associates-promotors-and-builders",
    "logo": "/images/builders/gt-associates-promotors-and-builders.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/54dda84e-2a5d-4efa-908f-94c7289ebc77/gallery/mv55qn45-5bsru4.webp",
    "description": "GT Associates Promotors and Builders is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-heartland-developers",
    "name": "Heartland Developers",
    "slug": "heartland-developers",
    "logo": "/images/builders/heartland-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/34e1a7a3-da32-4ff4-b128-2a4e7a4e4dba/gallery/ms389rem-3jwcao.webp",
    "description": "Heartland Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shaligram-group",
    "name": "Shaligram Group",
    "slug": "shaligram-group",
    "logo": "/images/builders/shaligram-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d81320d5-fca4-4200-b78a-05a80ba67291/gallery/mrs2rfde-8lfvg3.webp",
    "description": "Shaligram Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-anand-developers",
    "name": "Anand Developers",
    "slug": "anand-developers",
    "logo": "/images/builders/anand-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2d319d68-1122-4d25-a483-b35c34a06912/gallery/mt048rlf-7htves.webp",
    "description": "Anand Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vishnu-housing",
    "name": "Vishnu Housing",
    "slug": "vishnu-housing",
    "logo": "/images/builders/vishnu-housing.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8006af67-6771-4e1b-853e-d355aac1f967/cover/mujnikbe-bfyrin.webp",
    "description": "Vishnu Housing is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-yoo-developers",
    "name": "Yoo Developers",
    "slug": "yoo-developers",
    "logo": "/images/builders/yoo-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ff00cd0f-2bf2-4bfe-9b1b-b7d43a00338a/gallery/ms8px5jp-9zal2u.webp",
    "description": "Yoo Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-nb-developers",
    "name": "NB Developers",
    "slug": "nb-developers",
    "logo": "/images/builders/ndevelopers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e45d7774-0437-43fb-a011-5451a160d9e1/gallery/msdcgfv6-aseeac.webp",
    "description": "NB Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shankeshwar-group",
    "name": "Shankeshwar Group",
    "slug": "shankeshwar-group",
    "logo": "/images/builders/shankeshwar-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a00dca02-b2fb-496f-9534-57318a5788d3/gallery/mtbhu914-7t4d2x.webp",
    "description": "Shankeshwar Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-hubtown",
    "name": "Hubtown",
    "slug": "hubtown",
    "logo": "/images/builders/hubtown.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b82f3be3-cd1a-4f2a-9003-0b7e915ec07c/gallery/mujgx5jd-b0arag.webp",
    "description": "Hubtown is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-gk-associates-promoters-builders",
    "name": "GK Associates Promoters & Builders",
    "slug": "gk-associates-promoters-builders",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvjfmkxa-e5s7gm.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bdd4f5fd-7713-4265-a7b4-171214876d05/gallery/mrxsigfu-33l9ng.webp",
    "description": "GK Associates Promoters & Builders is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-45-developers",
    "name": "45 Developers",
    "slug": "45-developers",
    "logo": "/images/builders/45-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5fc193db-5c08-409c-895c-e105fdeae0fe/gallery/muxzxux8-a18boo.webp",
    "description": "45 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-73-developers",
    "name": "73 Developers",
    "slug": "73-developers",
    "logo": "/images/builders/73-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d24fbac3-1f80-4607-a825-09126356f890/gallery/mv0tn4pa-2z51de.webp",
    "description": "73 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-cosmos-urban-realty",
    "name": "Cosmos Urban Realty",
    "slug": "cosmos-urban-realty",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvghn9l3-ayi2xi.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2084d602-4687-43b2-ace1-2af77bde7e3d/gallery/mv6hzkmf-74n8dr.webp",
    "description": "Cosmos Urban Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-excellent-connectivity",
    "name": "Excellent Connectivity",
    "slug": "excellent-connectivity",
    "logo": "/images/builders/excellent-connectivity.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3eaf88fb-9d78-4980-97b1-14bdbebeadc2/gallery/mtwr6asp-fb33pt.webp",
    "description": "Excellent Connectivity is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-emerald-developers",
    "name": "Emerald Developers",
    "slug": "emerald-developers",
    "logo": "/images/builders/emerald-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e4f4965c-c8a9-4daa-83c8-607c45dcadbb/gallery/mrqeru68-4lvvs7.webp",
    "description": "Emerald Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-arun-developers",
    "name": "Arun Developers",
    "slug": "arun-developers",
    "logo": "/images/builders/arun-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/2e69a6e3-1ce7-4c98-9e0a-727349288117/gallery/mtgzn229-161b8j.webp",
    "description": "Arun Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-audumbar-developers",
    "name": "Audumbar Developers",
    "slug": "audumbar-developers",
    "logo": "/images/builders/audumbar-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d07d0848-f239-4259-9fe2-94296d231351/gallery/mt0abz0r-4xmjh9.webp",
    "description": "Audumbar Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-wakadkar-associate",
    "name": "Wakadkar Associate",
    "slug": "wakadkar-associate",
    "logo": "/images/builders/wakadkar-associate.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/98204206-d13b-4b07-906b-eb11aaba666a/gallery/muxw567j-do2fjo.webp",
    "description": "Wakadkar Associate is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-aundh-developers",
    "name": "Aundh Developers",
    "slug": "aundh-developers",
    "logo": "/images/builders/aundh-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/40461eb8-5661-4748-b8ed-9686540b3bb5/gallery/mtps65l1-5mp9pf.webp",
    "description": "Aundh Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-morya-greens",
    "name": "MORYA GREENS",
    "slug": "morya-greens",
    "logo": "/images/builders/morya-greens.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/00789064-ebcf-4e95-99f3-6f00b908eae3/gallery/msob4dr4-28dyoq.webp",
    "description": "MORYA GREENS is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shree-venkatesh-buildcon-and-vikram-developers-and-promoters",
    "name": "Shree Venkatesh Buildcon and Vikram Developers and Promoters",
    "slug": "shree-venkatesh-buildcon-and-vikram-developers-and-promoters",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mw9lpzlc-8jwtm8.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a24b3a7c-640f-4663-8a56-e4d02d301816/gallery/mt77tevk-1m89vj.webp",
    "description": "Shree Venkatesh Buildcon and Vikram Developers and Promoters is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-empire-developers",
    "name": "EMPIRE Developers",
    "slug": "empire-developers",
    "logo": "/images/builders/empire-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7c996bc2-4657-4119-98bb-bf6f970f32ae/gallery/muclj1z0-2wxgqe.webp",
    "description": "EMPIRE Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kimaya-realities",
    "name": "Kimaya Realities",
    "slug": "kimaya-realities",
    "logo": "/images/builders/kimaya-realities.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/05a9a4ed-6dd6-4bef-8166-7a05a2139000/gallery/mrriv5rg-eegsiq.webp",
    "description": "Kimaya Realities is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kshitej-realtors",
    "name": "Kshitej Realtors",
    "slug": "kshitej-realtors",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvv4ky9b-3fk4mx.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a32719e9-86a5-4d6e-9057-8e4205c1fd74/gallery/msudikp7-7w0uv1.webp",
    "description": "Kshitej Realtors is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-aswani-associates",
    "name": "Aswani Associates",
    "slug": "aswani-associates",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrwba3wr-a6ciih.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f213716d-f8eb-4867-98dd-5db4e7362c9a/gallery/mrtirptb-w6pqk.webp",
    "description": "Aswani Associates is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vezdaa-developers",
    "name": "Vezdaa Developers",
    "slug": "vezdaa-developers",
    "logo": "/images/builders/vezdaa-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/408d9399-8f79-4443-bbe5-c388dae06c81/gallery/mszpiyh6-31suah.webp",
    "description": "Vezdaa Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kalp-developers",
    "name": "Kalp Developers",
    "slug": "kalp-developers",
    "logo": "/images/builders/kalp-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/271b55e4-1962-4221-8d1a-c0e975c2dcdd/gallery/ms32vmc7-3suj1m.webp",
    "description": "Kalp Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-akshay-skyscrapers",
    "name": "Akshay Skyscrapers",
    "slug": "akshay-skyscrapers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvwhgwk9-cvv476.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/881dd189-ee16-4cd3-bba5-c97887854b13/gallery/mt03if0h-2se7np.webp",
    "description": "Akshay Skyscrapers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-udyam-developers",
    "name": "Udyam Developers",
    "slug": "udyam-developers",
    "logo": "/images/builders/udyam-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5d62fa8a-eeaa-4f06-b87a-86eef01aa1a4/gallery/mruserwt-5ajriv.webp",
    "description": "Udyam Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-atrium-landmarks",
    "name": "Atrium Landmarks",
    "slug": "atrium-landmarks",
    "logo": "/images/builders/atrium-landmarks.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1cacab48-57d0-4e31-8ad8-cb73542425ac/gallery/mrtj7na9-6a7qwb.webp",
    "description": "Atrium Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-unite-developers",
    "name": "Unite Developers",
    "slug": "unite-developers",
    "logo": "/images/builders/unite-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/4050e2e5-684b-4d3b-9477-b5fbe03bebcb/gallery/ms37mbuy-4imre6.webp",
    "description": "Unite Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vivanta-developers",
    "name": "Vivanta Developers",
    "slug": "vivanta-developers",
    "logo": "/images/builders/vivanta-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d3b9ccda-f53f-4ea0-82e8-c2fe0cce3faa/gallery/ms4qg7vw-3wf6fu.webp",
    "description": "Vivanta Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kisana-developers",
    "name": "Kisana Developers",
    "slug": "kisana-developers",
    "logo": "/images/builders/kisana-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a1ac05b2-6c7e-48ac-bd00-48277dc98be5/gallery/mv6jrnt0-99g8id.webp",
    "description": "Kisana Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ajwani-developers",
    "name": "Ajwani Developers",
    "slug": "ajwani-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/1a154680cc6-7ae3cb4.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9caa7b33-d668-4189-b6bf-cf105a9ae1ed/gallery/mvf42mhg-2mrw30.webp",
    "description": "Ajwani Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-june-2027",
    "name": "June 2027",
    "slug": "june-2027",
    "logo": "/images/builders/june-2027.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/0638891f-fbf6-45b3-aa47-ddc0801191c0/gallery/mtwogjei-fgrycg.webp",
    "description": "June 2027 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-koral-developers",
    "name": "Koral Developers",
    "slug": "koral-developers",
    "logo": "/images/builders/koral-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/11e66687-a63a-4a5f-b79c-573433564fb2/gallery/mrxkq96a-f6i5kz.webp",
    "description": "Koral Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shitole-properties",
    "name": "Shitole Properties",
    "slug": "shitole-properties",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvfbfnub-3suj8a.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8f242be2-cc75-49c7-b614-a46cdf840e6a/gallery/mvfbfp93-aec27h.webp",
    "description": "Shitole Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-24-developers",
    "name": "24 Developers",
    "slug": "24-developers",
    "logo": "/images/builders/24-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/97f88402-cebb-4a65-8e90-1404397d3b14/gallery/mszvnaf9-edbwq3.webp",
    "description": "24 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-space-builders-group",
    "name": "Space Builders Group",
    "slug": "space-builders-group",
    "logo": "/images/builders/space-builders-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/62b6b3ff-c78a-4b7d-ad2b-fd5cd24f01e7/gallery/mv51tz1h-ahxao6.webp",
    "description": "Space Builders Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kumar-lifespaces",
    "name": "Kumar Lifespaces",
    "slug": "kumar-lifespaces",
    "logo": "/images/builders/kumar-lifespaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6db11a45-9947-4037-9561-15d5aeed339a/gallery/mtya4okq-muzq6.webp",
    "description": "Kumar Lifespaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kk-group",
    "name": "KK Group",
    "slug": "kk-group",
    "logo": "/images/builders/kk-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ab609199-bd97-4a85-934a-6b91c59d2cb3/gallery/mt43zv2s-25hor4.webp",
    "description": "KK Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-zolo-homes",
    "name": "Zolo Homes",
    "slug": "zolo-homes",
    "logo": "/images/builders/zolo-homes.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/79d0271e-267d-4ae7-9dfd-30eb2c6f9ccd/gallery/mtlfb0pf-36zkyk.webp",
    "description": "Zolo Homes is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-lenora-developers",
    "name": "Lenora Developers",
    "slug": "lenora-developers",
    "logo": "/images/builders/lenora-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1cf046a5-1b91-4fc2-ac07-26ec3e2f846e/gallery/mtlia5ly-7s8f2h.webp",
    "description": "Lenora Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-apex-developers",
    "name": "Apex Developers",
    "slug": "apex-developers",
    "logo": "/images/builders/apex-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/30cbdfff-e995-423b-b4d3-6728a30539b4/gallery/msxdvnj8-eewwqd.webp",
    "description": "Apex Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-majestique-landmarks",
    "name": "Majestique Landmarks",
    "slug": "majestique-landmarks",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvhs3y0x-ff2xhy.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/99be1981-dbfd-4c59-aee3-ae6cf167810b/gallery/mtqzv5ky-ahx3zv.webp",
    "description": "Majestique Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-amegh-group",
    "name": "Amegh Group",
    "slug": "amegh-group",
    "logo": "/images/builders/amegh-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/717b3806-d658-471f-959d-797f70e0653f/gallery/muuxj5u4-cwmsf4.webp",
    "description": "Amegh Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-midori-developers",
    "name": "Midori Developers",
    "slug": "midori-developers",
    "logo": "/images/builders/midori-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e48534a1-6f04-4a36-a0ee-4631131d8c22/gallery/ms8wdzi3-a4oka3.webp",
    "description": "Midori Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-goyal-properties",
    "name": "Goyal Properties",
    "slug": "goyal-properties",
    "logo": "/images/builders/goyal-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/33dcd66b-17e3-45d1-9b85-289549670757/gallery/mtppx9v0-7fopcl.webp",
    "description": "Goyal Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-aditya-builders",
    "name": "Aditya Builders",
    "slug": "aditya-builders",
    "logo": "/images/builders/aditya-builders.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6143bac3-2520-4813-be17-aba5d967132e/gallery/mt02ytg8-bkop0w.webp",
    "description": "Aditya Builders is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-meriton-developers",
    "name": "Meriton Developers",
    "slug": "meriton-developers",
    "logo": "/images/builders/meriton-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/16d4fb2e-a619-45d4-9fcc-42ab9cdb529d/gallery/mt8inz8k-7sp8ow.webp",
    "description": "Meriton Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-np-lifespaces",
    "name": "Np Lifespaces",
    "slug": "np-lifespaces",
    "logo": "/images/builders/np-lifespaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f87b81f3-4e01-402e-8750-96439fbe8951/gallery/mruixyww-crr91p.webp",
    "description": "Np Lifespaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-ar-realty",
    "name": "AR Realty",
    "slug": "ar-realty",
    "logo": "/images/builders/ar-realty.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/534a4875-d314-4b58-9aaa-4cded5c22efd/gallery/mtgyun1i-84p9je.webp",
    "description": "AR Realty is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-it-parks",
    "name": "It Parks",
    "slug": "it-parks",
    "logo": "/images/builders/it-parks.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f3321588-9b93-4a63-b13b-08ab09924e6b/gallery/ms0dvbce-21vacz.webp",
    "description": "It Parks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-a-reputed-west",
    "name": "A Reputed West",
    "slug": "a-reputed-west",
    "logo": "/images/builders/a-reputed-west.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/51014204-43f0-496a-847a-05447110109f/gallery/mt5m03g2-6kzuic.webp",
    "description": "A Reputed West is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-om-builders-developers",
    "name": "Om Builders & Developers",
    "slug": "om-builders-developers",
    "logo": "/images/builders/om-builders-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bcd2a79a-b7f3-4413-89da-3597e847c5b9/gallery/ms4fg9g9-dvfnem.webp",
    "description": "Om Builders & Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-que-developers",
    "name": "QUE Developers",
    "slug": "que-developers",
    "logo": "/images/builders/que-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a0f6cbc9-ffca-428e-9c11-b2767da64b4d/gallery/msxhob6a-dqdnv4.webp",
    "description": "QUE Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-matrix-developers",
    "name": "Matrix Developers",
    "slug": "matrix-developers",
    "logo": "/images/builders/matrix-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1d6b3128-b87a-4b5a-b287-87c39391c76a/gallery/mtbbd2ax-4t4hi.webp",
    "description": "Matrix Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-placidia-developers",
    "name": "Placidia Developers",
    "slug": "placidia-developers",
    "logo": "/images/builders/placidia-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8b54ce6d-9ca9-420e-81ad-1050f00a9815/gallery/mtpqvqmz-2mbz0m.webp",
    "description": "Placidia Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-pleroma-developers",
    "name": "Pleroma Developers",
    "slug": "pleroma-developers",
    "logo": "/images/builders/pleroma-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b94c8e51-0894-4925-87fe-7eb0c22b2f97/gallery/mrwbewaa-bulh1v.webp",
    "description": "Pleroma Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-royal-nisarg-ventures",
    "name": "Royal Nisarg Ventures",
    "slug": "royal-nisarg-ventures",
    "logo": "/images/builders/royal-nisarg-ventures.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/14bb74d4-520e-4469-b033-2667102b8521/gallery/mucnimxs-1lp6uw.webp",
    "description": "Royal Nisarg Ventures is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rutuja-developers",
    "name": "Rutuja Developers",
    "slug": "rutuja-developers",
    "logo": "/images/builders/rutuja-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e3bf98e0-903d-4ad4-983e-142d2cfb4d3c/gallery/mrx8yzqf-e5khl8.webp",
    "description": "Rutuja Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kiwale-realty-llp",
    "name": "Kiwale Realty LLP",
    "slug": "kiwale-realty-llp",
    "logo": "/images/builders/kiwale-realty-llp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b80dcfb1-9a8c-4126-8545-75666ce1fed6/gallery/mvfblt6r-667qht.webp",
    "description": "Kiwale Realty LLP is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-rachana-lifestyle",
    "name": "Rachana Lifestyle",
    "slug": "rachana-lifestyle",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/ms361aka-bmizey.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/d631a1fa-0e4b-42f8-af34-06f3e70167c2/gallery/mtsegmun-de8iyy.webp",
    "description": "Rachana Lifestyle is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-18-developers",
    "name": "18 Developers",
    "slug": "18-developers",
    "logo": "/images/builders/18-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/f461243b-2436-450b-983e-e08a92b46022/gallery/mszuqely-b4tiyj.webp",
    "description": "18 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-bhagawati-developers",
    "name": "Bhagawati Developers",
    "slug": "bhagawati-developers",
    "logo": "/images/builders/bhagawati-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b7cc03c1-3f41-4ade-ac54-b92c9f8479a2/gallery/mufc8n78-9g5uk0.webp",
    "description": "Bhagawati Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-thorve-developers",
    "name": "Thorve Developers",
    "slug": "thorve-developers",
    "logo": "/images/builders/thorve-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/0b425180-50fe-4279-8564-013467f49d00/gallery/mryn98yq-ex5s15.webp",
    "description": "Thorve Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-manggaldeep-group",
    "name": "Manggaldeep Group",
    "slug": "manggaldeep-group",
    "logo": "/images/builders/manggaldeep-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/024f288c-3946-4806-897f-57ab2e79ad6d/gallery/muxxc5h2-4aqyd.webp",
    "description": "Manggaldeep Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-garve-developers-is-a-2",
    "name": "Garve Developers Is A 2",
    "slug": "garve-developers-is-a-2",
    "logo": "/images/builders/garve-developers-is-a-2.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/340e4638-dc06-4c97-aac3-4a01555733ca/gallery/mvhtlfdp-amhhyv.webp",
    "description": "Garve Developers Is A 2 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-talreja-group",
    "name": "Talreja Group",
    "slug": "talreja-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvghowtz-4w3n1.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/10c3740f-6e27-4f29-8a05-d413d82016fd/gallery/mvghp3d6-fejg8r.webp",
    "description": "Talreja Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shree-samarth-developers",
    "name": "Shree Samarth Developers",
    "slug": "shree-samarth-developers",
    "logo": "/images/builders/shree-samarth-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e2c03437-2fdf-4d51-8f6a-1f999e5b0898/gallery/ms4gar5v-dvjab2.webp",
    "description": "Shree Samarth Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sentosa-developer",
    "name": "Sentosa Developer",
    "slug": "sentosa-developer",
    "logo": "/images/builders/sentosa-developer.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/fdfe6b42-b23c-49e2-af72-c67e82aa3cd6/gallery/mryz8bwa-fst5ju.webp",
    "description": "Sentosa Developer is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shankeshwar-homes",
    "name": "Shankeshwar Homes",
    "slug": "shankeshwar-homes",
    "logo": "/images/builders/shankeshwar-homes.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3191d2f5-e73c-4f44-87f2-f4979920665b/gallery/mrrhq70s-7agd8o.webp",
    "description": "Shankeshwar Homes is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-aakar-realties",
    "name": "Aakar Realties",
    "slug": "aakar-realties",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrymhb02-am8r9d.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a51af485-34d8-4827-bd48-e3390c8ca16b/gallery/mseumjfb-biuhl1.webp",
    "description": "Aakar Realties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-shubh-group",
    "name": "Shubh Group",
    "slug": "shubh-group",
    "logo": "/images/builders/shubh-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ee0dc753-8401-47f8-9797-872e630c10f9/gallery/mtwpiwvp-a3qade.webp",
    "description": "Shubh Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-sky-developers",
    "name": "Sky Developers",
    "slug": "sky-developers",
    "logo": "/images/builders/sky-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/dde4a6ce-f1b5-4b32-84c1-e8514171ca50/gallery/mtmpxi80-38i0gv.webp",
    "description": "Sky Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-vijayshree-developers",
    "name": "Vijayshree Developers",
    "slug": "vijayshree-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mtfqmgty-fb39c9.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/8e20ffc4-b52a-493b-9eea-ca1247cb0ced/gallery/mrymo1yh-4aw5fe.webp",
    "description": "Vijayshree Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-skyluxe-developers",
    "name": "Skyluxe Developers",
    "slug": "skyluxe-developers",
    "logo": "/images/builders/skyluxe-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/595b5fa2-9fc3-4b14-b19a-4df8b2c281e2/gallery/mumgvipb-edmpz0.webp",
    "description": "Skyluxe Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-solitaire-group",
    "name": "Solitaire Group",
    "slug": "solitaire-group",
    "logo": "/images/builders/solitaire-official.webp",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/92874b6e-7084-4b41-b070-0b4a8f90a3b5/gallery/mupe9jw0-4e36f2.webp",
    "description": "Solitaire Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-smk-group-llp",
    "name": "SMK Group LLP",
    "slug": "smk-group-llp",
    "logo": "/images/builders/smk-group-llp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3563ab94-43b1-420c-8d25-e772d40f62ff/gallery/mrtie0an-cv5gjo.webp",
    "description": "SMK Group LLP is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-wakad-developers",
    "name": "Wakad Developers",
    "slug": "wakad-developers",
    "logo": "/images/builders/wakad-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/4e1672fd-e504-4a05-8484-f47d00154b01/gallery/mrvosil1-48m2vb.webp",
    "description": "Wakad Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-skyfinia-developers",
    "name": "Skyfinia Developers",
    "slug": "skyfinia-developers",
    "logo": "/images/builders/skyfinia-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a251bfc9-bd37-4064-9b75-7b765ac83df7/gallery/msyyiy6n-1ebx58.webp",
    "description": "Skyfinia Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-asian-sleek",
    "name": "Asian Sleek",
    "slug": "asian-sleek",
    "logo": "/images/builders/asian-sleek.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/4f7bcab2-80fd-4317-b7bd-1c87cf827a62/gallery/mvhs3d3y-b0frjo.webp",
    "description": "Asian Sleek is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-trio-spaces",
    "name": "Trio Spaces",
    "slug": "trio-spaces",
    "logo": "/images/builders/trio-spaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a356658e-1a8c-47a5-a487-5f88c57b8d34/gallery/ms7khsm3-epqpr0.webp",
    "description": "Trio Spaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-tej-developers",
    "name": "Tej Developers",
    "slug": "tej-developers",
    "logo": "/images/builders/tej-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/302697b5-88a6-4d91-a6d9-fe1d449c9d0e/gallery/mtsispev-3abkwk.webp",
    "description": "Tej Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-wandering-developers",
    "name": "Wandering Developers",
    "slug": "wandering-developers",
    "logo": "/images/builders/wandering-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/6c440e25-da90-4dac-9a80-663cf7c823f2/gallery/mszu5nrj-ci3yfe.webp",
    "description": "Wandering Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-wisdom-developers",
    "name": "Wisdom Developers",
    "slug": "wisdom-developers",
    "logo": "/images/builders/wisdom-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/c4f74574-e06f-4d98-a51a-de126091a407/gallery/mrtgijji-erjfh.webp",
    "description": "Wisdom Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-westgate-developers",
    "name": "Westgate Developers",
    "slug": "westgate-developers",
    "logo": "/images/builders/westgate-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/1c6c9e25-e990-4b1d-a2bf-5986069e44c2/gallery/ms4pedoq-81arj8.webp",
    "description": "Westgate Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-wyce-developers",
    "name": "WYCE Developers",
    "slug": "wyce-developers",
    "logo": "/images/builders/wyce-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/55181032-9e3a-4450-b863-d94cca1464ba/gallery/mtvjk9dk-4oxftq.webp",
    "description": "WYCE Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-esson-landmarks",
    "name": "Esson Landmarks",
    "slug": "esson-landmarks",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvj3dwek-4x6jq6.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/a7275a64-251d-464a-b954-49ee29daad0f/gallery/ms8v0n4s-g5u2h3.webp",
    "description": "Esson Landmarks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 2,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-10-developers",
    "name": "10 Developers",
    "slug": "10-developers",
    "logo": "/images/builders/10-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/5b39be8d-439b-457e-9b64-9558de238ea0/gallery/msu92jcy-465ppd.webp",
    "description": "10 Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-five-developers",
    "name": "Five Developers",
    "slug": "five-developers",
    "logo": "/images/builders/five-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/eafaa8b1-5214-4cd1-ba41-e1f3d0c56f66/gallery/mugv55mh-2mt28h.webp",
    "description": "Five Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-crystal-creations",
    "name": "Crystal Creations",
    "slug": "crystal-creations",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/ms7ia9a6-avci1y.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/331b44e7-ae13-463a-9108-d6c8613fd4b2/gallery/ms7if5d1-4j48k6.webp",
    "description": "Crystal Creations is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-dolphin-group",
    "name": "Dolphin Group",
    "slug": "dolphin-group",
    "logo": "/images/builders/dolphin-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/640cc48b-3d8a-48b7-91cc-3200bb865618/gallery/msvkg0kp-5jzt8d.webp",
    "description": "Dolphin Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-parks",
    "name": "Parks",
    "slug": "parks",
    "logo": "/images/builders/parks.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/225a2888-ce60-4dd0-b64b-f9b858f1c056/gallery/mtlherfg-egzjcd.webp",
    "description": "Parks is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-alacarte-developers",
    "name": "Alacarte Developers",
    "slug": "alacarte-developers",
    "logo": "/images/builders/alacarte-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/39f072b4-5a09-418a-83fa-2072abaedb9a/gallery/mup91hoi-gbq5a6.webp",
    "description": "Alacarte Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-merlin-group",
    "name": "Merlin Group",
    "slug": "merlin-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/msac3749-arlg6t.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/aa651d02-b44e-4e3d-b6e3-6eefba383eb4/gallery/mrxtf0v5-6qdtni.webp",
    "description": "Merlin Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-mantra-properties",
    "name": "Mantra Properties",
    "slug": "mantra-properties",
    "logo": "/images/builders/mantra-properties.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b099037f-4fe0-4fb9-8bfd-94bc7b663dc4/gallery/mtob2l4o-7ivchz.webp",
    "description": "Mantra Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 3,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true,
    "website": "https://mantraproperties.in"
  },
  {
    "id": "b-miracle-group",
    "name": "Miracle Group",
    "slug": "miracle-group",
    "logo": "/images/builders/miracle-group.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/c04a63cf-adc8-429e-84ea-0caad482b842/gallery/mrylyr5e-czchbz.webp",
    "description": "Miracle Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-december-2027",
    "name": "December 2027",
    "slug": "december-2027",
    "logo": "/images/builders/december-2027.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/cd14a38f-5090-486d-9541-03cbec7e8492/gallery/msd3jaic-e5vsvt.webp",
    "description": "December 2027 is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-soham-shivam-developers",
    "name": "Soham Shivam Developers",
    "slug": "soham-shivam-developers",
    "logo": "/images/builders/soham-shivam-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b32492c8-62e0-4760-a1de-1288d4c6bdd0/gallery/mul4grn4-5nk7vr.webp",
    "description": "Soham Shivam Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-siddhashila-group",
    "name": "Siddhashila Group",
    "slug": "siddhashila-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mw9fbqjd-8rp1sp.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/b5973498-c136-4310-b59d-b0e70df36099/gallery/msyx9itl-8lj1w.webp",
    "description": "Siddhashila Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-studio-developers",
    "name": "Studio Developers",
    "slug": "studio-developers",
    "logo": "/images/builders/studio-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/db3c6bb2-ce3e-44f1-8f64-4f2e1fa7b989/gallery/mtsckboq-dbxgec.webp",
    "description": "Studio Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-star-developers",
    "name": "STAR Developers",
    "slug": "star-developers",
    "logo": "/images/builders/star-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/285ced3a-49ef-4e26-b2a8-abb183f4aefd/gallery/ms04b125-eu2dm8.webp",
    "description": "STAR Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-muktai-builders-developers",
    "name": "MUKTAI BUILDERS & DEVELOPERS",
    "slug": "muktai-builders-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrribvwe-3pswwn.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/ea7119ff-7a51-463c-8b39-8e4eb09a2d55/gallery/mt461bka-9jcyyl.webp",
    "description": "MUKTAI BUILDERS & DEVELOPERS is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-yoovie-developers",
    "name": "Yoovie Developers",
    "slug": "yoovie-developers",
    "logo": "/images/builders/yoovie-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/7871c9e5-cd0c-4b67-ad8e-cd38f37221ae/gallery/mtfpgnqu-awhbem.webp",
    "description": "Yoovie Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-neco-developers",
    "name": "Neco Developers",
    "slug": "neco-developers",
    "logo": "/images/builders/neco-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3c62297e-cf76-40e6-be1b-9863a18f21a4/gallery/mvhqtpdg-2wwccl.webp",
    "description": "Neco Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-kate-promoters-and-developers",
    "name": "Kate Promoters and Developers",
    "slug": "kate-promoters-and-developers",
    "logo": "/images/builders/kate-promoters-and-developers.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/3766f451-d050-4db0-a6f8-194ef4abaa3a/gallery/mvghrbu5-6gq1o0.webp",
    "description": "Kate Promoters and Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-pharande-spaces",
    "name": "Pharande Spaces",
    "slug": "pharande-spaces",
    "logo": "/images/builders/pharande-spaces.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/01d2e9f1-dad0-43fa-8906-61a24bfcd0dd/gallery/mvfc64td-5k9jp8.webp",
    "description": "Pharande Spaces is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true,
    "website": "https://pharandespaces.com"
  },
  {
    "id": "b-shaligram-buildcon",
    "name": "Shaligram Buildcon",
    "slug": "shaligram-buildcon",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mrvutyun-7v1c3k.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bed8b526-3c8c-426b-8e44-cf65c659dbbe/gallery/mvhovzr5-s99wh.webp",
    "description": "Shaligram Buildcon is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-viraj-corp",
    "name": "Viraj Corp",
    "slug": "viraj-corp",
    "logo": "/images/builders/viraj-corp.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/bfe0548a-333b-47f4-bf68-d1bebe86d984/gallery/mvghqa3t-4dghew.webp",
    "description": "Viraj Corp is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-saheel-properties",
    "name": "Saheel Properties",
    "slug": "saheel-properties",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvfbi57a-5iogdl.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/adc7420a-f087-4832-b5b6-aaff3c37a461/gallery/mvfbi877-8s23ib.webp",
    "description": "Saheel Properties is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true,
    "website": "https://saheelproperties.com"
  },
  {
    "id": "b-avirat-developers",
    "name": "Avirat Developers",
    "slug": "avirat-developers",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvhmreub-cuhlng.gif?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/17fc8bdb-26b0-4047-9313-5e050676841b/gallery/mvghw0ci-9m4jzc.webp",
    "description": "Avirat Developers is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-adi-group",
    "name": "ADI Group",
    "slug": "adi-group",
    "logo": "https://punehome.in/storage/v1/render/image/public/project-media/developers/logos/mvhmn39n-2b0bg.webp?width=192&quality=75&resize=contain",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/e40babf9-1772-489e-a6cb-625300ca3252/gallery/mvhmmyfa-azmrba.webp",
    "description": "ADI Group is a premier developer delivering landmark residential communities across Pune with MahaRERA regulatory compliance and trusted construction quality.",
    "establishedYear": 2005,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Pune"
    ],
    "experience": 20,
    "trustScore": 9.5,
    "isVerified": true
  },
  {
    "id": "b-paranjape",
    "name": "Paranjape Schemes",
    "slug": "paranjape-schemes",
    "logo": "/images/builders/paranjape-official.webp",
    "heroImage": "https://www.pscl.in/wp-content/uploads/2025/10/ANK440_7834a_LR.webp",
    "description": "Founded in 1987 by Shrikant and Shashank Paranjape, Paranjape Schemes (Construction) Ltd (PSCL) is one of Maharashtra's most pioneering real estate developers with over 200 delivered projects, 20,000+ satisfied families, iconic mega townships like Blue Ridge (Hinjewadi) and Forest Trails (Bhugaon), and pioneer senior citizen living communities under the Athashri brand across Pune and Mumbai MMR.",
    "establishedYear": 1987,
    "totalProjects": 18,
    "ongoingProjects": 25,
    "trustScore": 9.7,
    "isVerified": true,
    "locations": [
      "Hinjewadi",
      "Bavdhan",
      "Baner",
      "Khed Shivapur",
      "Karve Road",
      "Bandra East",
      "Andheri West",
      "Thane West",
      "Shrivardhan-Diveagar"
    ],
    "experience": 39,
    "website": "https://paranjape.com"
  },
  {
    "id": "b-hiranandani",
    "name": "Hiranandani Group",
    "slug": "hiranandani-group",
    "logo": "/images/builders/hiranandani-official.webp",
    "heroImage": "https://www.hiranandani.com/img/gallery/gallery-powai-castle-rock-a/01.jpg",
    "description": "Hiranandani Group is one of India's most prestigious real estate conglomerates, renowned for pioneering integrated mega-townships like Hiranandani Gardens Powai and Hiranandani Estate Thane. Founded in 1978 by Dr. Niranjan Hiranandani, the group has transformed urban living across Maharashtra with neoclassical architecture, world-class social infrastructure, lush green environments, and impeccable engineering.",
    "establishedYear": 1978,
    "totalProjects": 15,
    "ongoingProjects": 18,
    "locations": [
      "Powai",
      "Thane",
      "Panvel",
      "Kandivali",
      "Chembur",
      "Pune"
    ],
    "experience": 46,
    "trustScore": 4.9,
    "isVerified": true,
    "mobile": "+91-7744009295",
    "website": "https://www.hiranandani.com"
  },
  {
    "id": "b-della",
    "name": "Della Townships",
    "slug": "della-townships",
    "logo": "/images/builders/della-official.webp",
    "heroImage": "https://www.dellaresorts.com/new-updated-image/enclave-villa-resort.webp",
    "description": "Della Townships and Luxury Villas, conceptualized and designed by visionary architect Jimmy Mistry, represents the pinnacle of experiential hillside living and ultra-luxury second homes in Maharashtra. Spread across scenic hill slopes in Kunegaon, Lonavala and Khandala, Della offers fully serviced bespoke villas integrated with 24x7 5-star resort hospitality, private heated pools, fine-dining restaurants, and India's premier adventure sports park.",
    "establishedYear": 1996,
    "totalProjects": 4,
    "ongoingProjects": 5,
    "locations": [
      "Kunegaon",
      "Lonavala",
      "Khandala",
      "Sahyadri Hills"
    ],
    "experience": 28,
    "trustScore": 4.9,
    "isVerified": true,
    "mobile": "+91-7744009295"
  },
  {
    "id": "b-oberoi",
    "name": "Oberoi Realty",
    "slug": "oberoi-realty",
    "logo": "/images/builders/oberoi-realty.svg",
    "logoAlt": "Oberoi Realty Official Logo",
    "heroImage": "https://www.oberoirealty.com/assets/images/home-banner-desktop.jpg",
    "description": "Oberoi Realty is one of India's preeminent ultra-luxury real estate developers, renowned for iconic skyline landmarks, five-star hospitality finishes, and impeccable engineering in Mumbai & Thane.",
    "establishedYear": 1980,
    "totalProjects": 3,
    "ongoingProjects": 8,
    "locations": [
      "Goregaon East",
      "Borivali East",
      "Kolshet Road",
      "Mulund West",
      "Worli"
    ],
    "trustScore": 98,
    "isVerified": true,
    "experience": 46,
    "website": "https://www.oberoirealty.com"
  },
  {
    "id": "b-runwal",
    "name": "Runwal Group",
    "slug": "runwal-group",
    "logo": "/images/builders/runwal.svg",
    "logoAlt": "Runwal Group Official Logo",
    "heroImage": "https://www.runwal.com/images/banner.jpg",
    "description": "Established in 1978, Runwal Group has delivered over 50 landmark residential, commercial, and retail developments across South Mumbai, Central Suburbs, Western Suburbs, Thane, and Pune with a steadfast commitment to customer trust, architectural excellence, and lifestyle delivery.",
    "establishedYear": 1978,
    "totalProjects": 36,
    "ongoingProjects": 24,
    "locations": [
      "Malabar Hill",
      "Worli",
      "Mahalaxmi",
      "Napean Sea Road",
      "Andheri West",
      "Andheri East",
      "Kanjurmarg",
      "Mulund",
      "Chembur",
      "Ghatkopar",
      "Wadala",
      "BKC",
      "Thane",
      "PCMC Pune"
    ],
    "trustScore": 94,
    "isVerified": true,
    "experience": 48,
    "website": "https://runwalgroup.in"
  },
  {
    "id": "b-raymond",
    "name": "Raymond Realty",
    "slug": "raymond-realty",
    "logo": "/images/builders/raymond-realty.svg",
    "logoAlt": "Raymond Realty Official Logo",
    "heroImage": "https://www.raymondrealty.in/assets/images/banner.jpg",
    "description": "Raymond Realty brings the legendary 97-year trust of the Raymond Group into real estate, delivering pioneering design, expansive landscaped habitats, and precision engineering across Pokhran Road, Thane.",
    "establishedYear": 2019,
    "totalProjects": 2,
    "ongoingProjects": 6,
    "locations": [
      "Pokhran Road No. 1",
      "Pokhran Road No. 2",
      "Bandra East",
      "Thane West"
    ],
    "trustScore": 95,
    "isVerified": true,
    "experience": 7,
    "website": "https://raymondrealty.in"
  },
  {
    "id": "b-rustomjee",
    "name": "Rustomjee",
    "slug": "rustomjee",
    "logo": "/images/builders/rustomjee.svg",
    "logoAlt": "Rustomjee Official Logo",
    "heroImage": "https://www.rustomjee.com/images/banner.jpg",
    "description": "Rustomjee has transformed urban living across Mumbai and Thane with thoughtfully designed gated townships, commercial headquarters, and integrated mega-communities designed around family living.",
    "establishedYear": 1996,
    "totalProjects": 2,
    "ongoingProjects": 9,
    "locations": [
      "Majiwada",
      "BKC",
      "Bandra East",
      "Prabhadevi",
      "Thane West"
    ],
    "trustScore": 96,
    "isVerified": true,
    "experience": 30,
    "website": "https://www.rustomjee.com"
  },
  {
    "id": "b-piramal",
    "name": "Piramal Realty",
    "slug": "piramal-realty",
    "logo": "/images/builders/piramal-realty.svg",
    "logoAlt": "Piramal Realty Official Logo",
    "heroImage": "https://www.piramalrealty.com/images/banner.jpg",
    "description": "Piramal Realty, the real estate development arm of the Piramal Group, sets global benchmarks in architectural excellence, green sustainability, and gold-standard luxury across South Mumbai and Mulund.",
    "establishedYear": 2012,
    "totalProjects": 2,
    "ongoingProjects": 5,
    "locations": [
      "Mulund West",
      "Mahalaxmi",
      "Byculla",
      "Thane"
    ],
    "trustScore": 97,
    "isVerified": true,
    "experience": 14,
    "website": "https://www.piramalrealty.com"
  },
  {
    "id": "b-dosti",
    "name": "Dosti Realty",
    "slug": "dosti-realty",
    "logo": "/images/builders/dosti-realty.svg",
    "logoAlt": "Dosti Realty Official Logo",
    "heroImage": "https://www.dostirealty.com/images/banner.jpg",
    "description": "With over 4 decades of experience and more than 120 delivered properties, Dosti Realty is synonymous with value-driven community living, modern amenities, and timely delivery across Thane, Wadala, and Mumbai.",
    "establishedYear": 1980,
    "totalProjects": 2,
    "ongoingProjects": 14,
    "locations": [
      "Balkum",
      "Wadala",
      "Shilphata",
      "Thane West"
    ],
    "trustScore": 93,
    "isVerified": true,
    "experience": 46,
    "website": "https://www.dostirealty.com"
  },
  {
    "id": "b-peninsula-land",
    "name": "Peninsula Land Ltd",
    "slug": "peninsula-land",
    "logo": "/images/builders/peninsula-land.svg",
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    "description": "Peninsula Land Ltd (Ashok Piramal Group) is one of India's foremost corporate real estate developers, pioneering landmark towers like Ashok Towers and Peninsula Business Park in Mumbai, luxury second homes in Lonavala & Alibaug, and master townships in Pune.",
    "establishedYear": 1871,
    "experience": 155,
    "totalProjects": 16,
    "ongoingProjects": 6,
    "locations": [
      "Mumbai",
      "Pune",
      "Lonavala",
      "Alibaug",
      "Karjat"
    ],
    "trustScore": 4.8,
    "isVerified": true
  },
  {
    "id": "b-wadhwa",
    "name": "The Wadhwa Group",
    "slug": "wadhwa-group",
    "logo": "/images/builders/wadhwa-group.svg",
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "description": "With over 5 decades of trusted heritage, The Wadhwa Group is acclaimed for its proprietary 'Ventilit' design philosophy emphasizing optimal sunlight and cross-ventilation across Mumbai, Navi Mumbai, and Karjat.",
    "establishedYear": 1969,
    "experience": 57,
    "totalProjects": 2,
    "ongoingProjects": 5,
    "locations": [
      "Mumbai",
      "Navi Mumbai",
      "Karjat"
    ],
    "trustScore": 4.8,
    "isVerified": true,
    "website": "https://www.thewadhwagroup.com"
  },
  {
    "id": "b-pushpam",
    "name": "Pushpam Group",
    "slug": "pushpam-group",
    "logo": "/images/builders/pushpam-group.svg",
    "heroImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    "description": "Pushpam Group specializes in managed luxury resort homes and weekend holiday communities offering assured rental returns and lifestyle amenities in Karjat and Maharashtra's green belt.",
    "establishedYear": 2012,
    "experience": 14,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Karjat"
    ],
    "trustScore": 4.6,
    "isVerified": true
  },
  {
    "id": "b-usha-breco",
    "name": "Usha Breco Realty",
    "slug": "usha-breco",
    "logo": "/images/builders/usha-breco.svg",
    "heroImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    "description": "Usha Breco Realty is the real estate development arm of Usha Martin Group, delivering hillside second home communities and scenic villa developments in Karjat.",
    "establishedYear": 2008,
    "experience": 18,
    "totalProjects": 1,
    "ongoingProjects": 1,
    "locations": [
      "Karjat"
    ],
    "trustScore": 4.6,
    "isVerified": true
  },
  {
    "id": "b-nirvana-realty",
    "name": "Nirvana Realty",
    "slug": "nirvana-realty",
    "logo": "/images/builders/nirvana-realty.svg",
    "heroImage": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    "description": "Pioneers of thematic weekend home communities in Maharashtra, Nirvana Realty develops riverfront and forest villa estates in Karjat and Wada.",
    "establishedYear": 2006,
    "experience": 20,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Karjat"
    ],
    "trustScore": 4.6,
    "isVerified": true
  },
  {
    "id": "b-isprava",
    "name": "Isprava Luxury Villas",
    "slug": "isprava",
    "logo": "/images/builders/isprava.svg",
    "heroImage": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
    "description": "Isprava is India's leading luxury home company, crafting bespoke, fully furnished Portuguese and Mediterranean style private villas across Alibaug, Goa, and Coonoor.",
    "establishedYear": 2016,
    "experience": 10,
    "totalProjects": 1,
    "ongoingProjects": 4,
    "locations": [
      "Alibaug"
    ],
    "trustScore": 4.9,
    "isVerified": true
  },
  {
    "id": "b-xrbia",
    "name": "Xrbia Developers",
    "slug": "xrbia",
    "logo": "/images/builders/xrbia.svg",
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    "description": "Xrbia Developers develops large-scale smart master-planned townships with compact, efficient homes and riverfront green spaces across Karjat, Hinjewadi, and Talegaon.",
    "establishedYear": 2012,
    "experience": 14,
    "totalProjects": 1,
    "ongoingProjects": 3,
    "locations": [
      "Karjat",
      "Pune"
    ],
    "trustScore": 4.5,
    "isVerified": true
  },
  {
    "id": "b-sunstone",
    "name": "Sunstone Developers",
    "slug": "sunstone",
    "logo": "/images/builders/sunstone.svg",
    "heroImage": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    "description": "Sunstone Developers crafts boutique coastal residences, beach apartments, and private courtyard villas in Alibaug and Maharashtra's coastal belt.",
    "establishedYear": 2015,
    "experience": 11,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Alibaug"
    ],
    "trustScore": 4.6,
    "isVerified": true
  },
  {
    "id": "b-penta-realty",
    "name": "Penta Realty",
    "slug": "penta-realty",
    "logo": "/images/builders/penta-realty.svg",
    "heroImage": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    "description": "Penta Realty develops nature-integrated residential townships and hill-view second homes in the Karjat-Neral corridor.",
    "establishedYear": 2014,
    "experience": 12,
    "totalProjects": 1,
    "ongoingProjects": 1,
    "locations": [
      "Karjat"
    ],
    "trustScore": 4.5,
    "isVerified": true
  },
  {
    "id": "b-canvas-alibaug",
    "name": "The Canvas Alibaug",
    "slug": "canvas-alibaug",
    "logo": "/images/builders/canvas-alibaug.svg",
    "heroImage": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    "description": "The Canvas Alibaug develops exclusive private pool villas with curated concierge services and tropical landscaping in Zirad, Alibaug.",
    "establishedYear": 2018,
    "experience": 8,
    "totalProjects": 1,
    "ongoingProjects": 1,
    "locations": [
      "Alibaug"
    ],
    "trustScore": 4.7,
    "isVerified": true
  },
  {
    "id": "b-saffronstays",
    "name": "SaffronStays Estates",
    "slug": "saffronstays",
    "logo": "/images/builders/saffronstays.svg",
    "heroImage": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
    "description": "SaffronStays Estates curates luxury private vacation homes and serviced estates across Alibaug, Lonavala, and Karjat with world-class hospitality.",
    "establishedYear": 2015,
    "experience": 11,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Alibaug",
      "Lonavala",
      "Karjat"
    ],
    "trustScore": 4.8,
    "isVerified": true
  },
  {
    "id": "b-epitome",
    "name": "Epitome Developers",
    "slug": "epitome",
    "logo": "/images/builders/epitome.svg",
    "heroImage": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
    "description": "Epitome Developers creates premium waterfront estates, gated bayview residences, and bespoke beach homes in Mandwa and coastal Alibaug.",
    "establishedYear": 2011,
    "experience": 15,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Alibaug"
    ],
    "trustScore": 4.6,
    "isVerified": true
  },
  {
    "id": "b-alibaug-developers",
    "name": "Alibaug Luxury Estates",
    "slug": "alibaug-developers",
    "logo": "/images/builders/alibaug-developers.svg",
    "heroImage": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    "description": "Alibaug Luxury Estates develops gated residential enclaves, boutique apartments, and coastal plots in Alibaug Town and Varsoli.",
    "establishedYear": 2010,
    "experience": 16,
    "totalProjects": 1,
    "ongoingProjects": 2,
    "locations": [
      "Alibaug"
    ],
    "trustScore": 4.6,
    "isVerified": true
  }
];


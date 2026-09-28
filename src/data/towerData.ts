export interface TowerResidence {
  id: string;
  residenceNumber: string;
  floor: number;
  type: string;
  tagline: string;
  price: number;
  priceFormatted: string;
  bedrooms: number;
  bathrooms: number;
  powderRooms: number;
  interiorSqFt: number;
  exteriorSqFt?: number;
  exposure: string;
  ceilingHeight: string;
  imageHero: string;
  imageDetail: string;
  floorPlanUrl: string;
  description: string;
  keyFeatures: string[];
  location?: string;
  category?: 'Buy' | 'Rent' | 'Commercial' | 'Residential';
}

export interface BusinessService {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  scope: string;
  image: string;
  featurePoints: string[];
}

export const TOWER_RESIDENCES: TowerResidence[] = [
  {
    id: 'res-apartments-villas',
    residenceNumber: 'Apartments & Villas',
    floor: 1,
    type: 'Apartments & Luxury Villas',
    tagline: 'Comprehensive buying, selling, and rental guidance for premium residential homes in Hyderabad.',
    price: 0,
    priceFormatted: 'Consultation on Request',
    bedrooms: 3,
    bathrooms: 3,
    powderRooms: 0,
    interiorSqFt: 1850,
    exposure: 'East / North Facing Options',
    ceilingHeight: 'Optimal Height',
    imageHero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Expert advisory for clients seeking premium apartments, gated community villas, and independent residential living across prominent residential hubs in Hyderabad.',
    keyFeatures: [
      'Personalized property scouting matching family preferences',
      'End-to-end buying, selling, and leasing support',
      'Documentation review and legal due diligence guidance',
      'Assistance across high-demand residential sectors in Hyderabad',
      'Dedicated advisory from Smart Elite Realtors'
    ],
    location: 'Hyderabad, Telangana, India',
    category: 'Residential'
  },
  {
    id: 'res-plots-houses',
    residenceNumber: 'Plots & Independent Houses',
    floor: 1,
    type: 'Independent Houses & Plots',
    tagline: 'Clear-title residential plots and independent homes in prime growth corridors of Hyderabad.',
    price: 0,
    priceFormatted: 'Consultation on Request',
    bedrooms: 0,
    bathrooms: 0,
    powderRooms: 0,
    interiorSqFt: 2400,
    exposure: 'Wide Road / Corner Frontage',
    ceilingHeight: 'Open Layout',
    imageHero: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    description: 'Specialized consulting for residential land, clear-title plots, and independent houses across emerging and established corridors in Hyderabad, Telangana.',
    keyFeatures: [
      'Survey verification and boundary demarcation checks',
      'Clear legal title chain evaluation and documentation review',
      'Direct coordination for property visits and valuation',
      'Strategic locations with sound future appreciation potential',
      'Dedicated advisory from Smart Elite Realtors'
    ],
    location: 'Hyderabad, Telangana, India',
    category: 'Residential'
  },
  {
    id: 'res-commercial-offices',
    residenceNumber: 'Commercial Spaces & Offices',
    floor: 4,
    type: 'Commercial Spaces & Offices',
    tagline: 'Modern office suites and corporate spaces situated in Hyderabad’s premier business districts.',
    price: 0,
    priceFormatted: 'Consultation on Request',
    bedrooms: 0,
    bathrooms: 2,
    powderRooms: 0,
    interiorSqFt: 2800,
    exposure: 'Arterial Business Corridors',
    ceilingHeight: 'Commercial Grade',
    imageHero: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Corporate real estate consulting for companies, startups, and investors looking to lease or buy scalable office spaces and commercial properties in Hyderabad.',
    keyFeatures: [
      'Strategic locations near major IT and commercial business parks',
      'Modular floor configurations tailored for corporate workflows',
      'Lease structuring, commercial terms, and agreement assistance',
      'Inspection facilitation and market rate comparative assessment',
      'Dedicated advisory from Smart Elite Realtors'
    ],
    location: 'Hyderabad, Telangana, India',
    category: 'Commercial'
  },
  {
    id: 'res-commercial-shops',
    residenceNumber: 'Commercial Shops & Retail',
    floor: 1,
    type: 'Commercial Shops & Showrooms',
    tagline: 'High-footfall commercial shops and retail spaces across Hyderabad’s thriving shopping belts.',
    price: 0,
    priceFormatted: 'Consultation on Request',
    bedrooms: 0,
    bathrooms: 1,
    powderRooms: 0,
    interiorSqFt: 1200,
    exposure: 'Main Road Frontage',
    ceilingHeight: 'Retail Standard',
    imageHero: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Retail property consultancy connecting retail brands, franchisees, and commercial investors with prime retail shops and storefronts in Hyderabad.',
    keyFeatures: [
      'High-visibility retail locations with steady footfall',
      'Suitable for flagship stores, clinics, showrooms, and eateries',
      'Transparent buying and leasing support',
      'Paperwork coordination and legal verification assistance',
      'Dedicated advisory from Smart Elite Realtors'
    ],
    location: 'Hyderabad, Telangana, India',
    category: 'Commercial'
  },
  {
    id: 'res-investment-guidance',
    residenceNumber: 'Property Investment Guidance',
    floor: 1,
    type: 'Property Investment Guidance',
    tagline: 'Data-driven real estate investment advisory delivering long-term growth across Hyderabad.',
    price: 0,
    priceFormatted: 'Consultation on Request',
    bedrooms: 0,
    bathrooms: 0,
    powderRooms: 0,
    interiorSqFt: 3500,
    exposure: 'High-Growth Corridors',
    ceilingHeight: 'Advisory Asset',
    imageHero: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    imageDetail: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85',
    floorPlanUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    description: 'Comprehensive property investment guidance for residential and commercial assets, focusing on capital appreciation, rental yield, and risk mitigation in Hyderabad.',
    keyFeatures: [
      'Comparative market analysis and neighborhood growth forecasting',
      'Residential and commercial asset diversification strategies',
      'Rental yield analysis and tenant placement consultation',
      'Transparent advisory adhering to client investment goals',
      'Dedicated advisory from Smart Elite Realtors'
    ],
    location: 'Hyderabad, Telangana, India',
    category: 'Residential'
  }
];

export const PANORAMA_VIEWS = [
  {
    id: 'day',
    label: 'Morning Light',
    time: '09:30 AM',
    headline: 'Hyderabad Daylight & Growth Corridors',
    description: 'Expansive vistas stretching across Hyderabad’s western growth corridor, framed by progressive infrastructure and premier developments.',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'dusk',
    label: 'Golden Hour',
    time: '06:15 PM',
    headline: 'Warm Sunset Over Hyderabad Skyline',
    description: 'Golden sunlight illuminates the business corridors, vibrant residential enclaves, and arterial roads connecting Hyderabad.',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2200&q=90'
  },
  {
    id: 'night',
    label: 'Evening Citylights',
    time: '09:45 PM',
    headline: 'Vibrant Tech Hub & Living Corridors',
    description: 'The energetic evening atmosphere of Hyderabad comes alive with illuminated transit arteries, business towers, and peaceful residential communities.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90'
  }
];

export const SERVICES_DATA: BusinessService[] = [
  {
    id: 'service-1',
    title: 'Buying Assistance',
    subtitle: 'Service 01 • Acquisition Support',
    category: 'Buying Assistance',
    description: 'End-to-end guidance for buyers searching for residential apartments, villas, houses, plots, and commercial properties in Hyderabad.',
    scope: 'Requirement Analysis • Property Scouting • Negotiation Support',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Tailored property shortlisting based on budget and lifestyle',
      'Assistance with site inspections and physical walkthroughs',
      'Support with price negotiation and transaction structuring',
      'Dedicated guidance from Smart Elite Realtors'
    ]
  },
  {
    id: 'service-2',
    title: 'Property Selling Support',
    subtitle: 'Service 02 • Disposition & Liquidity',
    category: 'Property Selling Support',
    description: 'Strategic representation for property owners looking to sell residential and commercial assets at optimal market values.',
    scope: 'Valuation Guidance • Qualified Buyer Sourcing • Documentation',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Accurate market pricing and positioning strategy',
      'Targeted outreach to verified buyers and investors',
      'Assistance with sales deed documentation and transfer',
      'Transparent communication at every stage'
    ]
  },
  {
    id: 'service-3',
    title: 'Rental Assistance & Leasing',
    subtitle: 'Service 03 • Tenancy & Leasing',
    category: 'Rental Assistance',
    description: 'Seamless rental and leasing assistance for tenants, landlords, corporate occupiers, and commercial retail brands in Hyderabad.',
    scope: 'Tenant Screening • Lease Agreements • Property Handover',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Curated rental options across apartments, villas, and offices',
      'Verification and screening of prospective tenants',
      'Drafting of comprehensive rental and lease agreements',
      'Prompt assistance with renewals and handover formalities'
    ]
  },
  {
    id: 'service-4',
    title: 'Apartments & Villas',
    subtitle: 'Service 04 • Residential Living',
    category: 'Apartments & Villas',
    description: 'In-depth consultation for premium residential apartments, luxury condominiums, and gated community villas in Hyderabad.',
    scope: 'Gated Communities • Condominiums • Luxury Villas',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Curated options in top gated communities and townships',
      'Clear documentation and title transparency verification',
      'Proximity to reputed schools, hospitals, and transit hubs',
      'Personalized family consultation and site visits'
    ]
  },
  {
    id: 'service-5',
    title: 'Independent Houses & Plots',
    subtitle: 'Service 05 • Land & Independent Homes',
    category: 'Plots & Houses',
    description: 'Guidance on acquiring verified residential plots and independent houses with clear titles across growth corridors of Hyderabad.',
    scope: 'Residential Plots • Title Chain • Independent Homes',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Carefully surveyed plots with clear access roads',
      'Verified municipal records and title deed inspection',
      'Objective guidance tailored to buyer construction goals',
      'Direct facilitation from Smart Elite Realtors'
    ]
  },
  {
    id: 'service-6',
    title: 'Commercial Spaces, Offices & Shops',
    subtitle: 'Service 06 • Business Real Estate',
    category: 'Commercial Properties',
    description: 'Commercial advisory for corporate office suites, retail outlets, showrooms, and commercial spaces across Hyderabad.',
    scope: 'Corporate Offices • Retail Units • Commercial Spaces',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'High-traffic commercial belts and prominent business towers',
      'Support throughout commercial lease/sale negotiation',
      'Space efficiency analysis and infrastructure verification',
      'Clear documentation and business-aligned terms'
    ]
  },
  {
    id: 'service-7',
    title: 'Property Investment Guidance',
    subtitle: 'Service 07 • Wealth & Growth',
    category: 'Property Investment Guidance',
    description: 'Strategic market insights and advisory for individual and institutional investors looking to maximize returns in Hyderabad real estate.',
    scope: 'Yield Analysis • Capital Appreciation • Risk Mitigation',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
    featurePoints: [
      'Identification of high-potential growth nodes in Hyderabad',
      'Evaluation of rental yields and capital appreciation prospects',
      'Portfolio diversification across residential and commercial assets',
      'Transparent advisory focused strictly on client goals'
    ]
  }
];

export const NEIGHBORHOOD_DESTINATIONS = [
  {
    name: 'HITEC City & Cyber Towers',
    category: 'Major IT / Business Hub',
    distance: '5 Minutes',
    desc: 'Hyderabad’s premier global technology and financial epicenter, housing major international tech campuses and corporate headquarters.'
  },
  {
    name: 'Gachibowli Financial District',
    category: 'Financial & Corporate Center',
    distance: '10 Minutes',
    desc: 'Prime business hub featuring corporate towers, financial institutions, premium hospitality, and luxury residential enclaves.'
  },
  {
    name: 'Outer Ring Road (ORR) Interchange',
    category: 'Expressway Transit Spine',
    distance: '8 Minutes',
    desc: 'Multi-lane express corridor enabling seamless, rapid transit to all zones of Hyderabad and international airport connectivity.'
  },
  {
    name: 'Inorbit Mall & Durgam Cheruvu Corridor',
    category: 'Retail & Recreation',
    distance: '10 Minutes',
    desc: 'Premier lifestyle and retail shopping hub adjacent to the iconic Durgam Cheruvu cable bridge and lakefront promenade.'
  },
  {
    name: 'Hyderabad Metro Transit Corridor',
    category: 'Elevated Rapid Transit',
    distance: 'Nearby Access',
    desc: 'Fast, efficient elevated metro connectivity directly linking western business districts with central Hyderabad.'
  },
  {
    name: 'Rajiv Gandhi International Airport (RGIA)',
    category: 'International Airport',
    distance: 'Direct ORR Access',
    desc: 'Smooth high-speed expressway transit directly connecting through the Outer Ring Road to Shamshabad airport.'
  }
];

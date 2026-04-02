import { LocationData } from '../LocationPage';

const defaultIndustries = [
  { name: 'Plumbers', slug: 'plumbers', description: 'AI answering for plumbing emergencies, drain cleaning, water heater installs, and pipe repairs.' },
  { name: 'HVAC Companies', slug: 'hvac', description: 'AI receptionist for AC repair, heating service, duct cleaning, and system installations.' },
  { name: 'Electricians', slug: 'electricians', description: 'AI phone answering for electrical emergencies, panel upgrades, lighting, and EV charger installs.' },
  { name: 'Roofers', slug: 'roofing', description: 'AI call handling for storm damage inspections, roof repairs, and full replacements.' },
  { name: 'Pest Control', slug: 'pest-control', description: 'AI receptionist for termite inspections, pest treatments, and wildlife removal calls.' },
  { name: 'Landscapers', slug: 'landscaping', description: 'AI phone answering for lawn care, irrigation repair, and hardscaping estimates.' },
];

const defaultFaqs = (city: string, region: string): LocationData['faqs'] => [
  { question: `Does Jevus AI work for home service businesses in ${city}?`, answer: `Yes. Jevus AI works for any home service business in the ${region} area. We serve plumbers, HVAC techs, electricians, roofers, pest control companies, landscapers, and more across ${city} and surrounding areas.` },
  { question: `How quickly can a ${city} business get started?`, answer: `Most businesses are live in under 5 minutes. Simply forward your business phone to Jevus, set your service area to ${city} and surrounding zip codes, and start capturing every call immediately.` },
  { question: `Is Jevus based in ${region}?`, answer: `Yes! Jevus AI is headquartered in Largo, FL — right in the heart of ${region}. We built this product specifically for the home service businesses in our community before expanding nationally.` },
  { question: 'How much does Jevus AI cost?', answer: 'Plans start at $497/month. With the average missed call costing $1,200 in lost revenue, Jevus pays for itself with just one saved job per month.' },
];

const nearbyTampaBay = [
  { name: 'Tampa', slug: 'tampa' },
  { name: 'St. Petersburg', slug: 'st-petersburg' },
  { name: 'Clearwater', slug: 'clearwater' },
  { name: 'Largo', slug: 'largo' },
  { name: 'Seminole', slug: 'seminole' },
  { name: 'Treasure Island', slug: 'treasure-island' },
  { name: 'Pinellas Park', slug: 'pinellas-park' },
  { name: 'Dunedin', slug: 'dunedin' },
  { name: 'Palm Harbor', slug: 'palm-harbor' },
  { name: 'Safety Harbor', slug: 'safety-harbor' },
];

export const tampaBayData: LocationData = {
  slug: 'tampa-bay',
  city: 'Tampa Bay',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Tampa Bay's #1\nAI Voice Receptionist\nfor Home Services",
  subheadline: 'From Clearwater to Brandon, Jevus AI answers every call for Tampa Bay plumbers, HVAC techs, and electricians. Built right here in Largo, FL.',
  localDescription: "Tampa Bay is one of Florida's fastest-growing metro areas, with over 3 million residents driving massive demand for home services. Between the summer heat hammering AC units, tropical storms damaging roofs, and aging plumbing in older neighborhoods from St. Pete to Temple Terrace — contractors are busier than ever. But with that demand comes a problem: when you're on a job in South Tampa, you can't answer a call from a customer in Clearwater. Jevus AI solves that. We answer every call instantly, qualify the lead, book the appointment, and text you the details — so you never lose a $1,200 job to voicemail again.",
  industries: defaultIndustries,
  localStats: [
    { value: '3M+', label: 'Tampa Bay metro population' },
    { value: '12,000+', label: 'Home service businesses in the area' },
    { value: '$1,200', label: 'Average revenue per missed call' },
    { value: '27%', label: 'Calls that go unanswered' },
  ],
  neighborhoods: ['South Tampa', 'Westchase', 'Brandon', 'Riverview', 'Temple Terrace', 'Town n Country', 'Carrollwood', 'New Tampa', 'Wesley Chapel', 'Lutz', 'Ybor City', 'Hyde Park', 'Davis Islands', 'Channelside'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'tampa-bay'),
  faqs: defaultFaqs('Tampa Bay', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Tampa Bay Home Services | Jevus AI',
    description: 'Tampa Bay AI voice receptionist for plumbers, HVAC, and electricians. Jevus AI answers every call 24/7 — built in Largo, FL for local home service businesses.',
    keywords: 'AI receptionist Tampa Bay, answering service Tampa Bay, home service AI Tampa, Tampa plumber answering service, Tampa Bay HVAC answering',
  },
};

export const stPetersburgData: LocationData = {
  slug: 'st-petersburg',
  city: 'St. Petersburg',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "St. Pete Contractors:\nStop Losing Calls.\nStart Booking Jobs.",
  subheadline: 'Jevus AI answers every call for St. Petersburg plumbers, HVAC techs, and electricians — 24/7, while you focus on the job.',
  localDescription: "St. Petersburg's booming real estate market means more homeowners, more renovations, and more service calls than ever. With historic neighborhoods like Old Northeast, Kenwood, and Shore Acres full of older homes needing plumbing updates, electrical upgrades, and AC replacements — your phone should be ringing constantly. The problem? You're on a roof in Gulfport when a homeowner in Snell Isle needs an emergency plumber. Jevus AI answers that call instantly, books the job, and sends you the details before the customer has time to Google your competitor.",
  industries: defaultIndustries,
  localStats: [
    { value: '270K+', label: 'St. Pete population' },
    { value: '$1,400', label: 'Average home service job value' },
    { value: '35%', label: 'Calls missed during peak season' },
    { value: '24/7', label: 'Jevus coverage — no days off' },
  ],
  neighborhoods: ['Old Northeast', 'Snell Isle', 'Shore Acres', 'Kenwood', 'Gulfport', 'Pasadena', 'Tyrone', 'Jungle Terrace', 'Riviera Bay', 'Coquina Key', 'Bayway Isles', 'Historic Uptown'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'st-petersburg'),
  faqs: defaultFaqs('St. Petersburg', 'Tampa Bay'),
  seo: {
    title: 'AI Answering Service for St. Petersburg FL Contractors | Jevus AI',
    description: 'AI voice receptionist for St. Petersburg home service businesses. Jevus answers every call 24/7 for plumbers, HVAC, and electricians in St. Pete, FL.',
    keywords: 'answering service St Petersburg FL, AI receptionist St Pete, plumber answering service St Petersburg, HVAC answering St Pete Florida',
  },
};

export const clearwaterData: LocationData = {
  slug: 'clearwater',
  city: 'Clearwater',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Clearwater's Busiest\nContractors Never\nMiss a Call",
  subheadline: 'Jevus AI answers every call for Clearwater home service businesses — from beach condos to mainland homes, 24/7.',
  localDescription: "Clearwater's mix of beachfront condos, vacation rentals, and residential neighborhoods creates year-round demand for home services. Property managers need fast response times for their vacation rental plumbing emergencies. Homeowners in Countryside and East Clearwater need reliable HVAC service when the Florida heat hits. Jevus AI makes sure every one of those calls gets answered instantly — whether you're on a job in Clearwater Beach or driving to your next appointment in Safety Harbor.",
  industries: defaultIndustries,
  localStats: [
    { value: '117K+', label: 'Clearwater population' },
    { value: '$1,300', label: 'Average service call value' },
    { value: '40%+', label: 'Calls from vacation rental managers' },
    { value: '<5s', label: 'Jevus answer time' },
  ],
  neighborhoods: ['Clearwater Beach', 'Countryside', 'East Clearwater', 'North Clearwater', 'Belleair', 'Sand Key', 'Island Estates', 'Feather Sound'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'clearwater'),
  faqs: defaultFaqs('Clearwater', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Clearwater FL Home Services | Jevus AI',
    description: 'AI answering service for Clearwater FL plumbers, HVAC, and electricians. Never miss a call from beach condos to mainland homes. 24/7 coverage.',
    keywords: 'answering service Clearwater FL, AI receptionist Clearwater, plumber answering Clearwater Florida, HVAC answering service Clearwater',
  },
};

export const largoData: LocationData = {
  slug: 'largo',
  city: 'Largo',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Built in Largo.\nBuilt for Largo\nContractors.",
  subheadline: "Jevus AI is headquartered right here in Largo, FL. We built our AI voice receptionist for the home service businesses in our own backyard.",
  localDescription: "Largo is home to Jevus AI — and home to thousands of hardworking contractors who lose money every day to missed calls. As Pinellas County's third-largest city, Largo has a dense residential market with constant demand for plumbing, HVAC, electrical, and home repair services. We see it every day in our own community: contractors on jobs, phones ringing, customers going to voicemail and calling someone else. That's exactly why we built Jevus. We're not some Silicon Valley startup guessing at what contractors need — we built this from conversations with local plumbers, HVAC techs, and electricians right here in Largo.",
  industries: defaultIndustries,
  localStats: [
    { value: '84K+', label: 'Largo population' },
    { value: 'HQ', label: 'Jevus AI headquarters' },
    { value: '$1,200', label: 'Average revenue per missed call' },
    { value: '5 min', label: 'Setup time to go live' },
  ],
  neighborhoods: ['Largo Central', 'Belcher', 'Indian Rocks', 'Oakhurst', 'Ridgecrest', 'Largo Mall Area', 'East Bay', 'West Bay Drive'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'largo'),
  faqs: [
    ...defaultFaqs('Largo', 'Tampa Bay'),
    { question: 'Is Jevus AI really based in Largo?', answer: 'Yes! Jevus AI is headquartered in Largo, FL. We built our product right here in Pinellas County, working directly with local contractors to understand their needs. Supporting local businesses is at the core of what we do.' },
  ],
  seo: {
    title: 'AI Voice Receptionist in Largo FL | Built Here, Built for You | Jevus AI',
    description: 'Jevus AI is headquartered in Largo, FL. AI voice receptionist built for local plumbers, HVAC techs, and electricians. Never miss another call.',
    keywords: 'AI receptionist Largo FL, answering service Largo Florida, Largo plumber phone answering, HVAC answering service Largo',
  },
};

export const seminoleData: LocationData = {
  slug: 'seminole',
  city: 'Seminole',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Seminole Contractors:\nEvery Missed Call\nIs Money Lost",
  subheadline: 'Jevus AI answers every call for Seminole home service businesses — while you stay focused on the job site.',
  localDescription: "Seminole's established residential neighborhoods and growing commercial areas create steady demand for home services year-round. From older homes near Seminole City Center needing re-piping and panel upgrades, to newer builds in the outskirts needing AC maintenance — your phone is always ringing. Jevus AI makes sure every one of those calls gets answered, qualified, and booked, even when you're elbow-deep in a job across town.",
  industries: defaultIndustries,
  localStats: [
    { value: '18K+', label: 'Seminole population' },
    { value: '$1,100', label: 'Average service call value' },
    { value: '27%', label: 'Calls going to voicemail' },
    { value: '$62K+', label: 'Annual revenue at risk' },
  ],
  neighborhoods: ['Seminole City Center', 'Bay Pines', 'Bear Creek', 'Lake Seminole', 'Oakhurst'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'seminole'),
  faqs: defaultFaqs('Seminole', 'Tampa Bay'),
  seo: {
    title: 'AI Answering Service for Seminole FL Contractors | Jevus AI',
    description: 'AI voice receptionist for Seminole FL home service businesses. Stop losing calls and start booking more jobs with 24/7 AI phone answering.',
    keywords: 'answering service Seminole FL, AI receptionist Seminole Florida, plumber phone answering Seminole, contractor answering service Seminole',
  },
};

export const treasureIslandData: LocationData = {
  slug: 'treasure-island',
  city: 'Treasure Island',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Treasure Island\nContractors: Don't Let\nCalls Slip Away",
  subheadline: 'Jevus AI answers every call for Treasure Island home service businesses — from beachfront condos to vacation rentals.',
  localDescription: "Treasure Island's unique mix of full-time residents, vacation homeowners, and short-term rental properties creates unpredictable call patterns for local contractors. Property managers call at odd hours when a guest reports a plumbing issue. Snowbirds return in October and discover their AC isn't working. A beachfront condo has an electrical issue that needs immediate attention. Jevus AI handles all of it — answering instantly, qualifying the call, and booking the job — while you focus on serving the island community.",
  industries: defaultIndustries.slice(0, 4),
  localStats: [
    { value: '7K+', label: 'Treasure Island population' },
    { value: '60%+', label: 'Homes are rentals or seasonal' },
    { value: '$1,500', label: 'Average emergency call value' },
    { value: '24/7', label: 'Coverage for guest emergencies' },
  ],
  neighborhoods: ['Sunset Beach', 'Treasure Island Causeway', 'Isle of Capri', 'Paradise Island'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'treasure-island'),
  faqs: defaultFaqs('Treasure Island', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Treasure Island FL | Jevus AI',
    description: 'AI answering service for Treasure Island FL contractors. 24/7 call answering for plumbers, HVAC, and electricians serving beach condos and vacation rentals.',
    keywords: 'answering service Treasure Island FL, AI receptionist Treasure Island, contractor phone answering Treasure Island Florida',
  },
};

export const pinellasParkData: LocationData = {
  slug: 'pinellas-park',
  city: 'Pinellas Park',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Pinellas Park\nContractors Deserve\n24/7 Call Coverage",
  subheadline: 'Jevus AI answers every call for Pinellas Park home service businesses — so you can focus on the work.',
  localDescription: "Pinellas Park sits right in the center of Pinellas County, making it a hub for contractors who serve the entire Tampa Bay area. Whether you're running jobs in St. Pete, Clearwater, or right here in Pinellas Park, your phone doesn't stop ringing. Jevus AI makes sure every call gets answered and every lead gets booked — no matter where you are or what time it is.",
  industries: defaultIndustries,
  localStats: [
    { value: '53K+', label: 'Pinellas Park population' },
    { value: '$1,150', label: 'Average job value' },
    { value: '27%', label: 'Industry missed call rate' },
    { value: '<5s', label: 'Jevus pickup time' },
  ],
  neighborhoods: ['Mainlands', 'Gateway', 'Skyview', 'Park Boulevard', 'Bryan Dairy'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'pinellas-park'),
  faqs: defaultFaqs('Pinellas Park', 'Tampa Bay'),
  seo: {
    title: 'AI Answering Service for Pinellas Park FL | Jevus AI',
    description: 'AI voice receptionist for Pinellas Park home service businesses. 24/7 call answering for plumbers, HVAC techs, and electricians.',
    keywords: 'answering service Pinellas Park FL, AI receptionist Pinellas Park, contractor answering Pinellas Park Florida',
  },
};

export const dunedinData: LocationData = {
  slug: 'dunedin',
  city: 'Dunedin',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Dunedin's Best\nContractors Answer\nEvery Call",
  subheadline: 'Jevus AI provides 24/7 call answering for Dunedin home service businesses — from downtown to the causeway.',
  localDescription: "Dunedin's charming downtown, historic homes, and growing residential areas create consistent demand for skilled contractors. Older homes in the downtown core need regular plumbing and electrical updates, while newer developments bring AC installation and maintenance work. Jevus AI ensures that every call from a Dunedin homeowner gets a professional, immediate response — even when you're on a job in Clearwater or Palm Harbor.",
  industries: defaultIndustries,
  localStats: [
    { value: '36K+', label: 'Dunedin population' },
    { value: '$1,250', label: 'Average service call' },
    { value: '85%', label: 'Callers who won\'t leave voicemail' },
    { value: '5 min', label: 'Time to set up Jevus' },
  ],
  neighborhoods: ['Downtown Dunedin', 'Dunedin Causeway', 'Skinner Boulevard', 'Virginia Avenue'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'dunedin'),
  faqs: defaultFaqs('Dunedin', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Dunedin FL Home Services | Jevus AI',
    description: 'AI answering service for Dunedin FL contractors. 24/7 call coverage for plumbers, HVAC, and electricians serving Dunedin and North Pinellas.',
    keywords: 'answering service Dunedin FL, AI receptionist Dunedin Florida, plumber phone answering Dunedin',
  },
};

export const palmHarborData: LocationData = {
  slug: 'palm-harbor',
  city: 'Palm Harbor',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Palm Harbor\nHome Service Pros:\nNever Miss a Lead",
  subheadline: 'Jevus AI answers every call for Palm Harbor contractors — from Innisbrook to East Lake, 24 hours a day.',
  localDescription: "Palm Harbor's affluent residential communities, golf course neighborhoods around Innisbrook, and growing East Lake area generate high-value home service calls. These homeowners expect professional, immediate service — and they won't wait for a callback. Jevus AI ensures every call from Palm Harbor gets answered instantly with a professional, knowledgeable response that matches the service level your customers expect.",
  industries: defaultIndustries,
  localStats: [
    { value: '61K+', label: 'Palm Harbor population' },
    { value: '$1,600', label: 'Average job value (affluent area)' },
    { value: '27%', label: 'Calls going unanswered' },
    { value: '$78K+', label: 'Annual revenue at risk' },
  ],
  neighborhoods: ['Innisbrook', 'East Lake', 'Lansbrook', 'Palm Harbor Proper', 'Crystal Beach', 'Ozona'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'palm-harbor'),
  faqs: defaultFaqs('Palm Harbor', 'Tampa Bay'),
  seo: {
    title: 'AI Answering Service for Palm Harbor FL Contractors | Jevus AI',
    description: 'AI voice receptionist for Palm Harbor home service businesses. 24/7 call answering for plumbers, HVAC, and electricians in Palm Harbor and East Lake.',
    keywords: 'answering service Palm Harbor FL, AI receptionist Palm Harbor, contractor phone answering Palm Harbor Florida',
  },
};

export const safetyHarborData: LocationData = {
  slug: 'safety-harbor',
  city: 'Safety Harbor',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Safety Harbor\nContractors: Capture\nEvery Customer Call",
  subheadline: 'Jevus AI provides 24/7 AI phone answering for Safety Harbor home service businesses.',
  localDescription: "Safety Harbor's tight-knit community and mix of historic and modern homes create a steady stream of home service needs. Whether it's re-piping an older home on Main Street or installing a new AC system in a Philippe Park area residence, your customers expect quick, reliable service. Jevus AI makes sure you never miss a call from a Safety Harbor homeowner — answering instantly, booking the job, and keeping your schedule full.",
  industries: defaultIndustries.slice(0, 4),
  localStats: [
    { value: '18K+', label: 'Safety Harbor population' },
    { value: '$1,200', label: 'Average service call' },
    { value: '27%', label: 'Calls going unanswered' },
    { value: '24/7', label: 'Always-on coverage' },
  ],
  neighborhoods: ['Downtown Safety Harbor', 'Philippe Park Area', 'Marshall Street', 'Bayshore'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'safety-harbor'),
  faqs: defaultFaqs('Safety Harbor', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Safety Harbor FL | Jevus AI',
    description: 'AI answering service for Safety Harbor FL contractors. 24/7 call coverage for plumbers, HVAC, and electricians in Safety Harbor.',
    keywords: 'answering service Safety Harbor FL, AI receptionist Safety Harbor Florida, contractor phone answering Safety Harbor',
  },
};

export const tampaData: LocationData = {
  slug: 'tampa',
  city: 'Tampa',
  region: 'Tampa Bay',
  state: 'FL',
  headline: "Tampa's Top\nContractors Never\nMiss a Call",
  subheadline: 'Jevus AI answers every call for Tampa plumbers, HVAC techs, and electricians — from South Tampa to New Tampa, 24/7.',
  localDescription: "Tampa is the economic engine of Florida's Gulf Coast, with nearly 400,000 residents and one of the fastest-growing housing markets in the country. New construction in Wesley Chapel and Riverview means installation jobs. Aging infrastructure in South Tampa and Seminole Heights means repair calls. And the brutal Florida summer means your HVAC phone never stops ringing. Jevus AI handles every call — qualifying leads, booking appointments, and detecting emergencies — so you can focus on the $1,200 job you're already on instead of losing the next one to voicemail.",
  industries: defaultIndustries,
  localStats: [
    { value: '395K+', label: 'Tampa population' },
    { value: '$1,350', label: 'Average home service job' },
    { value: '15,000+', label: 'New homes built annually in area' },
    { value: '27%', label: 'Calls going to voicemail' },
  ],
  neighborhoods: ['South Tampa', 'Westchase', 'Carrollwood', 'New Tampa', 'Seminole Heights', 'Ybor City', 'Hyde Park', 'Channelside', 'Davis Islands', 'Bayshore', 'Palma Ceia', 'Town n Country', 'Brandon', 'Riverview', 'Temple Terrace', 'Lutz', 'Wesley Chapel'],
  nearbyAreas: nearbyTampaBay.filter(a => a.slug !== 'tampa'),
  faqs: defaultFaqs('Tampa', 'Tampa Bay'),
  seo: {
    title: 'AI Voice Receptionist for Tampa FL Home Services | Jevus AI',
    description: 'AI answering service for Tampa FL plumbers, HVAC, and electricians. 24/7 call answering from South Tampa to New Tampa. Never miss a call again.',
    keywords: 'AI receptionist Tampa FL, answering service Tampa Florida, Tampa plumber answering service, HVAC answering Tampa, electrician answering service Tampa',
  },
};

export const allLocations = [
  tampaBayData, tampaData, stPetersburgData, clearwaterData, largoData,
  seminoleData, treasureIslandData, pinellasParkData, dunedinData,
  palmHarborData, safetyHarborData,
];

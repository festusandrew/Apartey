export type ServiceContact = { phone: string; whatsapp: boolean; email: boolean };

export type Service = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  fullDescription?: string;
  location: string;
  rating: number;
  reviews: number;
  pricing: string;
  responseTime: string;
  contact: ServiceContact;
  verified: boolean;
  featured: boolean;
  tags: string[];
  certifications?: string;
  workingHours?: string;
  website?: string;
  yearsInBusiness?: number;
  jobsCompleted?: number;
  serviceReviews?: { author: string; rating: number; text: string; date: string }[];
};

export const SERVICES: Service[] = [
  {
    id: "s1", name: "FastFix Plumbing", category: "maintenance",
    tagline: "Emergency & planned plumbing across Lagos",
    description: "Licensed plumbers available 24/7 for burst pipes, leaks, installations, and bathroom fittings. Same-day response guaranteed.",
    fullDescription: "FastFix Plumbing has served Lagos residents for over 8 years. We cover everything from emergency burst pipe repairs to full bathroom installations. Our team of COREN-certified plumbers arrives fully equipped so jobs get done in one visit. We serve landlords, tenants, and property managers — and we work directly with Apartey-listed properties for priority booking.",
    location: "Lagos Island & Mainland", rating: 4.8, reviews: 62,
    pricing: "₦15,000 callout", responseTime: "Under 2 hours",
    contact: { phone: "+234 801 234 5678", whatsapp: true, email: false },
    verified: true, featured: true,
    tags: ["Emergency", "24/7", "Licensed"],
    certifications: "COREN Certified, CORAN Member",
    workingHours: "24 hours, 7 days a week",
    yearsInBusiness: 8, jobsCompleted: 1200,
    serviceReviews: [
      { author: "Amara K.", rating: 5, text: "Called at 11pm for a burst pipe. Chidi arrived within 90 minutes and had it sorted. Absolute lifesaver.", date: "Jan 2026" },
      { author: "Michael O.", rating: 5, text: "Fixed our boiler and replaced a leaking bathroom fitting. Professional, clean, and very fairly priced.", date: "Dec 2025" },
      { author: "Ngozi T.", rating: 4, text: "Good service, arrived on time. Slightly pricier than I expected but the quality was worth it.", date: "Nov 2025" },
    ],
  },
  {
    id: "s2", name: "ClearSpace Cleaning Co.", category: "cleaning",
    tagline: "Move-in, move-out & deep cleaning specialists",
    description: "Professional cleaning for end-of-tenancy, new move-ins, and regular maintenance. We bring all supplies. Eco-friendly products available.",
    fullDescription: "ClearSpace has completed over 2,000 cleans across Lagos. We specialise in the transitions that matter most — move-out cleans for departing tenants, move-in readiness for new ones. Homeowners and property managers book us on standing contracts for regular maintenance. All staff are background-checked and trained. Eco-friendly product lines available on request.",
    location: "Lekki, VI, Ikoyi", rating: 4.9, reviews: 118,
    pricing: "₦25,000 from", responseTime: "Next day booking",
    contact: { phone: "+234 802 345 6789", whatsapp: true, email: true },
    verified: true, featured: true,
    tags: ["Move-out clean", "Eco-friendly", "Insured"],
    certifications: "CAC Registered, Insured",
    workingHours: "Mon – Sat, 7am – 7pm",
    yearsInBusiness: 5, jobsCompleted: 2100,
    serviceReviews: [
      { author: "Fatima B.", rating: 5, text: "Booked for a move-out clean. The landlord was so impressed he asked for their number. Deposit returned in full.", date: "Feb 2026" },
      { author: "Chidi O.", rating: 5, text: "Used them 4 times now. Consistent quality. The team is fast, thorough and respectful of the space.", date: "Jan 2026" },
    ],
  },
  {
    id: "s3", name: "Adeyemi & Co. Solicitors", category: "legal",
    tagline: "Property law, tenancy agreements & conveyancing",
    description: "Specialist property solicitors handling tenancy agreements, lease reviews, dispute resolution, and title searches. Fixed-fee packages available.",
    fullDescription: "Adeyemi & Co. is a boutique property law firm with offices in Lagos and Abuja. We help landlords draft watertight tenancy agreements, advise tenants on their rights, and handle disputes through mediation before they reach court. Title searches and conveyancing completed in 5–10 working days. Remote consultation available via video call.",
    location: "Abuja & Lagos (Remote available)", rating: 4.7, reviews: 34,
    pricing: "₦50,000 from", responseTime: "48 hours",
    contact: { phone: "+234 803 456 7890", whatsapp: false, email: true },
    verified: true, featured: false,
    tags: ["Lease review", "Dispute resolution", "Remote"],
    certifications: "NBA Certified, FITC Trained",
    workingHours: "Mon – Fri, 9am – 5pm",
    yearsInBusiness: 12, jobsCompleted: 640,
    serviceReviews: [
      { author: "James O.", rating: 5, text: "Had a deposit dispute with my former landlord. Adeyemi & Co resolved it in 2 weeks without going to court. Outstanding.", date: "Jan 2026" },
      { author: "Sandra E.", rating: 4, text: "Very professional. Reviewed my lease and flagged 3 clauses that were unfair. Worth every kobo.", date: "Oct 2025" },
    ],
  },
  {
    id: "s4", name: "SwiftMove Logistics", category: "moving",
    tagline: "Reliable home removals with packing service",
    description: "Full-service moving company covering all major Nigerian cities. We handle packing, transport, and unpacking. Free quotes within 1 hour.",
    fullDescription: "SwiftMove has helped over 3,000 households move across Nigeria. We offer full-service relocations — our team packs, loads, transports, and unpacks at the destination. Fragile items wrapped in specialist materials. GPS tracking on all trucks. Transit insurance available. Free site surveys for large moves.",
    location: "Nationwide", rating: 4.6, reviews: 87,
    pricing: "₦80,000 from", responseTime: "Quote in 1 hour",
    contact: { phone: "+234 804 567 8901", whatsapp: true, email: true },
    verified: true, featured: false,
    tags: ["Packing included", "Nationwide", "Insurance"],
    certifications: "FIRS Registered, Transit Insurance Provided",
    workingHours: "Mon – Sat, 7am – 8pm",
    yearsInBusiness: 6, jobsCompleted: 3200,
    serviceReviews: [
      { author: "Yakubu A.", rating: 5, text: "Moved from Lagos to Abuja. Nothing broken, arrived on schedule, team was friendly and efficient.", date: "Feb 2026" },
      { author: "Emeka N.", rating: 4, text: "Good service overall. The quote was accurate and the move went smoothly. Would use again.", date: "Dec 2025" },
    ],
  },
  {
    id: "s5", name: "LensCraft Studios", category: "photography",
    tagline: "Property photography & virtual tours",
    description: "Professional real estate photography, drone footage, and interactive 3D virtual tours. Listings with our photos rent 40% faster.",
    fullDescription: "LensCraft is Lagos's leading property photography studio. Our real estate photographers are trained to capture properties at their best — wide-angle interiors, twilight exteriors, and aerial drone shots. Our 3D Matterport virtual tours let tenants walk through a property remotely. Turnaround: edited photos delivered within 24 hours of shoot.",
    location: "Lagos, Abuja, Port Harcourt", rating: 4.9, reviews: 156,
    pricing: "₦45,000 from", responseTime: "Book 3 days ahead",
    contact: { phone: "+234 805 678 9012", whatsapp: true, email: true },
    verified: true, featured: true,
    tags: ["Drone", "3D tours", "Same-week delivery"],
    certifications: "Matterport Certified, CAA Drone Licence",
    workingHours: "Mon – Sat, 8am – 6pm",
    yearsInBusiness: 4, jobsCompleted: 890,
    website: "https://lenscraftstudios.ng",
    serviceReviews: [
      { author: "Sarah O.", rating: 5, text: "The photos made my property look incredible. It was rented within 3 days of going live. Incredible ROI.", date: "Feb 2026" },
      { author: "David T.", rating: 5, text: "The 3D tour is a game-changer. Serious tenants view the property virtually first — no more time-wasters.", date: "Jan 2026" },
      { author: "Bola F.", rating: 5, text: "Fast, professional, and the results speak for themselves. Highly recommend for anyone listing a property.", date: "Nov 2025" },
    ],
  },
  {
    id: "s6", name: "VoltGuard Electrical", category: "maintenance",
    tagline: "Certified electricians for homes & commercial",
    description: "COREN-certified electrical contractors. Fault diagnosis, rewiring, generator installation, inverter systems, and safety inspections.",
    fullDescription: "VoltGuard provides safe, certified electrical work for residential and commercial properties across Lagos. From simple fault diagnosis to full rewiring and generator/inverter installation, our engineers carry full test equipment and issue completion certificates on all jobs. We also conduct electrical safety inspections for landlords ahead of new tenancies.",
    location: "Lagos", rating: 4.7, reviews: 49,
    pricing: "₦20,000 callout", responseTime: "Under 4 hours",
    contact: { phone: "+234 806 789 0123", whatsapp: true, email: false },
    verified: true, featured: false,
    tags: ["COREN certified", "Generator", "Emergency"],
    certifications: "COREN Certified, NEMSA Registered",
    workingHours: "Mon – Sat, 8am – 6pm, Emergency 24/7",
    yearsInBusiness: 7, jobsCompleted: 950,
    serviceReviews: [
      { author: "Amara K.", rating: 5, text: "Fixed a dangerous wiring fault quickly and safely. Very knowledgeable team.", date: "Jan 2026" },
      { author: "Tunde K.", rating: 4, text: "Installed our inverter system. Clean work, no mess left behind.", date: "Dec 2025" },
    ],
  },
  {
    id: "s7", name: "SecureNest Smart Homes", category: "security",
    tagline: "CCTV, smart locks & alarm systems",
    description: "Install and configure smart security systems — CCTV, video doorbells, smart locks, motion sensors, and 24/7 remote monitoring packages.",
    fullDescription: "SecureNest designs and installs smart home security systems tailored to Nigerian properties. Whether you're a landlord wanting to protect an empty property or a tenant wanting a video doorbell, we have a solution. All systems are app-controlled and work with 4G where WiFi is unavailable. 1-year maintenance warranty on all installations.",
    location: "Lagos, Abuja", rating: 4.8, reviews: 41,
    pricing: "₦120,000 from", responseTime: "Survey within 48 hrs",
    contact: { phone: "+234 807 890 1234", whatsapp: true, email: true },
    verified: false, featured: false,
    tags: ["Smart locks", "CCTV", "Remote monitoring"],
    workingHours: "Mon – Fri, 9am – 5pm",
    yearsInBusiness: 3, jobsCompleted: 280,
    serviceReviews: [
      { author: "James O.", rating: 5, text: "Installed CCTV and smart locks across 3 units. The app is brilliant — I can see everything from abroad.", date: "Jan 2026" },
    ],
  },
  {
    id: "s8", name: "Interiors by Zara", category: "interior",
    tagline: "Affordable staging & interior design consultation",
    description: "Transform empty properties into compelling spaces. Staging for sale/rent, full interior design packages, and virtual mood board consultations.",
    fullDescription: "Interiors by Zara turns empty shells into homes that renters and buyers fall in love with. Staged properties rent faster and command higher prices. We offer everything from a 2-hour virtual consultation (mood boards, furniture layout) to full physical staging with rented furniture. Specialised in the Lagos rental market — we know what tenants here are looking for.",
    location: "Lagos (Remote consultation nationwide)", rating: 4.9, reviews: 28,
    pricing: "₦60,000 consultation", responseTime: "Book 1 week ahead",
    contact: { phone: "+234 808 901 2345", whatsapp: true, email: true },
    verified: true, featured: false,
    tags: ["Staging", "Virtual consult", "Rental styling"],
    certifications: "Interior Design Society Nigeria Member",
    workingHours: "Mon – Fri, 10am – 6pm",
    yearsInBusiness: 3, jobsCompleted: 190,
    website: "https://interiorsbyzara.com",
    serviceReviews: [
      { author: "Ngozi T.", rating: 5, text: "Zara transformed my empty 3-bed into something from a magazine. Rented within a week at asking price.", date: "Feb 2026" },
    ],
  },
  {
    id: "s9", name: "QuickFibre Broadband", category: "utilities",
    tagline: "Fibre internet setup for new tenants",
    description: "Fast broadband installation packages designed for tenants and landlords. No long contracts. Same-week setup in covered areas.",
    fullDescription: "QuickFibre provides fibre broadband packages tailored to tenants — no 12-month lock-ins, no setup hassle. We work with landlords to pre-wire properties so new tenants can be connected on day one. Coverage maps available on request. Packages start at ₦15,000/month for 20Mbps symmetric. Business packages available for HMOs and short-let properties.",
    location: "Lagos Island, Lekki, Ikeja", rating: 4.5, reviews: 73,
    pricing: "₦15,000/month from", responseTime: "Setup within 3 days",
    contact: { phone: "+234 809 012 3456", whatsapp: false, email: true },
    verified: false, featured: false,
    tags: ["No long contract", "Tenant-friendly", "Fast setup"],
    workingHours: "Mon – Fri, 8am – 5pm",
    yearsInBusiness: 2, jobsCompleted: 540,
    serviceReviews: [
      { author: "Emeka N.", rating: 5, text: "Connected within 2 days of moving in. Speed is consistently good. No drama, no hidden fees.", date: "Jan 2026" },
      { author: "Sandra E.", rating: 4, text: "Good service. Had a minor outage once but support resolved it same day.", date: "Dec 2025" },
    ],
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  maintenance: "Maintenance & Repairs",
  cleaning: "Cleaning",
  legal: "Legal & Conveyancing",
  moving: "Moving & Logistics",
  photography: "Photography & Staging",
  security: "Security & Smart Home",
  utilities: "Utilities & Broadband",
  interior: "Interior Design",
};

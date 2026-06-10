// ────────────────────────────────────────────────────────────────────────────
//  Vertifex Technology — content data shared across all pages.
//  Sourced from the official Company Profile (Rev04) document.
// ────────────────────────────────────────────────────────────────────────────

export type AboutCard = {
  k: string;
  t: string;
  d: string | string[];
};

export const aboutCards: AboutCard[] = [
  {
    k: "// ABOUT",
    t: "About Us",
    d: "Vertifex Technology specializes in infrastructure modernization and industrial digitalization through integrated technologies and engineering expertise. We deliver practical, scalable, and future-ready solutions that support smarter infrastructure, connected operations, and sustainable development.",
  },
  {
    k: "// VISION",
    t: "Vision",
    d: "To become a leading regional partner in smart technologies, intelligent infrastructure, and sustainable transformation.",
  },
  {
    k: "// MISSION",
    t: "Mission",
    d: [
      "Empower smarter infrastructure and industrial operations.",
      "Accelerate digitalization and intelligent connectivity.",
      "Support sustainable and efficient operational environments.",
      "Deliver reliable expertise and responsive support.",
    ],
  },
];

export type Service = {
  code: string;
  slug: string;
  title: string;
  desc: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    code: "S.01",
    slug: "integrated-infrastructure",
    title: "Integrated Infrastructure Solutions",
    desc: "Connected platforms, control systems, and intelligent infrastructure technologies that unify operations across infrastructure and industrial environments.",
    capabilities: [
      "Centralized Management Systems",
      "Digital Twin Technologies",
      "Information & Communication Technology (ICT) Infrastructure",
      "Internet of Things (IoT) Systems",
      "Intelligent Detection & Sensing Technologies",
      "Extra Low Voltage (ELV) Systems",
      "CCTV & Surveillance Systems",
      "Access Control Systems",
      "Smart Building Solutions",
    ],
  },
  {
    code: "S.02",
    slug: "automation-scada",
    title: "Automation & SCADA Solutions",
    desc: "Industrial automation, SCADA, and process control technologies engineered for productive, monitored, and optimized operations.",
    capabilities: [
      "Automation Systems",
      "SCADA & Industrial Control Systems",
      "Robotics Integration",
      "Intelligent Monitoring Platforms",
      "Process Optimization Technologies",
    ],
  },
  {
    code: "S.03",
    slug: "energy",
    title: "Energy Solutions",
    desc: "Smart energy, storage, and green technologies that support sustainable development and efficient power environments.",
    capabilities: [
      "Battery Energy Storage Systems (BESS)",
      "Smart Energy Technologies",
      "Energy Monitoring Platforms",
      "Energy Optimization Solutions",
      "Sustainable & Green Technologies",
    ],
  },
  {
    code: "S.04",
    slug: "facility-maintenance",
    title: "Facility Maintenance Solutions",
    desc: "Preventive, corrective, and infrastructure support services that protect operational continuity and asset reliability.",
    capabilities: [
      "Preventive & Corrective Maintenance",
      "Facility Monitoring Systems",
      "Technical Support Services",
      "Infrastructure Support Solutions",
    ],
  },
  {
    code: "S.05",
    slug: "engineering-consultancy",
    title: "Engineering Consultancy & Advisory",
    desc: "Engineering and operational consultation that guides infrastructure decisions from planning to deployment.",
    capabilities: [
      "Infrastructure Planning",
      "Operational Assessments",
      "Technical Consultation",
      "Engineering Support Services",
    ],
  },
];

export type Capability = {
  index: string;
  title: string;
  description: string;
  items: string[];
  note: string;
  imageKey: "transport" | "city";
  alt: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    title: "Infrastructure Solutions",
    description:
      "Smart integration for transportation networks, utilities, public infrastructure, and energy systems — engineered for resilience, connectivity, and sustainability.",
    items: [
      "Transportation",
      "Utilities & Water Infrastructure",
      "Public Infrastructure",
      "Energy Infrastructure",
    ],
    note: "TRANSPORT // UTILITIES // PUBLIC // ENERGY",
    imageKey: "transport",
    alt: "Smart transportation corridor with holographic data overlays",
  },
  {
    index: "02",
    title: "Industrial & Commercial Solutions",
    description:
      "Connected operational technologies for industrial facilities, commercial buildings, smart buildings, and green city developments — built for productivity and long-term efficiency.",
    items: [
      "Industrial Facilities",
      "Commercial Buildings",
      "Smart Buildings",
      "Green City Developments",
    ],
    note: "INDUSTRY // COMMERCIAL // SMART BUILDINGS // GREEN CITY",
    imageKey: "city",
    alt: "Aerial view of smart city at twilight with floating data panels",
  },
];

export type Industry = { t: string; d: string };

export const industries: Industry[] = [
  {
    t: "Smart Transportation",
    d: "Rail and highway environments served by centralized management, intelligent detection and sensing, ICT and IoT integration, ELV systems, and engineering support — unified across mobility infrastructure.",
  },
  {
    t: "Smart Cities",
    d: "Centralized management, digital twin technologies, ICT and IoT integration, intelligent analytics, and connected operational technologies for sustainable urban environments.",
  },
  {
    t: "Government & Public Sector",
    d: "Digital platforms, command-and-control systems, operational monitoring, and integrated solutions supporting smarter and more efficient public-sector operations.",
  },
  {
    t: "Commercial & Smart Buildings",
    d: "Integrated building technologies, ICT infrastructure, surveillance and access control, and operational systems for modern commercial and smart-building environments.",
  },
  {
    t: "Energy & Utilities",
    d: "Smart energy technologies, energy optimization platforms, automation, ICT infrastructure, and engineering solutions for sustainable green energy and efficient utility operations.",
  },
  {
    t: "Industrial & Manufacturing",
    d: "Automation systems, robotics integration, industrial monitoring, ICT infrastructure, and IoT technologies for manufacturing and production environments.",
  },
];

export type WhyChoose = { n: string; t: string; d: string };

export const whyChoose: WhyChoose[] = [
  {
    n: "01",
    t: "Smart & Integrated Technologies",
    d: "Connected systems engineered as one operational layer — not as disconnected vendors stitched together at the end.",
  },
  {
    n: "02",
    t: "Innovation-Driven Solutions",
    d: "Technologies, integration models, and engineering practices kept current with how infrastructure and industry actually operate.",
  },
  {
    n: "03",
    t: "Reliable & Quality Implementations",
    d: "Designed, deployed, and commissioned to perform in mission-critical environments — supported by long-term technical capability.",
  },
  {
    n: "04",
    t: "Cost-Effective & Scalable Systems",
    d: "Future-ready platforms that grow with your operations — built to balance capital efficiency with operational performance.",
  },
  {
    n: "05",
    t: "Sustainable & Green Technologies",
    d: "Smart energy, green building, and efficient operational technologies supporting your sustainability commitments.",
  },
  {
    n: "06",
    t: "Open & Interoperable Platforms",
    d: "Standards-based integration that avoids vendor lock-in and keeps your data, controls, and decisions in your hands.",
  },
];

export type TechPillar = { code: string; title: string; items: string[] };

export const techPillars: TechPillar[] = [
  {
    code: "T.01",
    title: "Integrated Infrastructure",
    items: [
      "Centralized Management Systems",
      "Digital Twin Technologies",
      "Information & Communication Technology (ICT) Infrastructure",
      "Internet of Things (IoT) Systems",
    ],
  },
  {
    code: "T.02",
    title: "Sensing, Security & Buildings",
    items: [
      "Intelligent Detection & Sensing",
      "Extra Low Voltage (ELV) Systems",
      "CCTV & Surveillance Systems",
      "Access Control & Smart Building Solutions",
    ],
  },
  {
    code: "T.03",
    title: "Automation & SCADA",
    items: [
      "Automation Systems",
      "SCADA & Industrial Control Systems",
      "Robotics Integration",
      "Process Optimization & Monitoring",
    ],
  },
  {
    code: "T.04",
    title: "Energy & Sustainability",
    items: [
      "Battery Energy Storage Systems (BESS)",
      "Smart Energy Technologies",
      "Energy Monitoring & Optimization",
      "Sustainable & Green Technologies",
    ],
  },
];

export const contactDetails = {
  entity: "VERTIFEX TECHNOLOGY SDN. BHD.",
  email: "info@vertifextechnology.com",
  website: "www.vertifextechnology.com",
  linkedin: "https://www.linkedin.com/company/vertifex-technology/",
  address: "16-1, Jalan SS19/6, SS19, 47500 Subang Jaya, Selangor.",
  region: "MALAYSIA",
};

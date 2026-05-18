import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/vx-hero.jpg";
import roboticsImage from "@/assets/vx-robot-substation.jpg";
import smartImage from "@/assets/vx-controls.jpg";
import ictImage from "@/assets/vx-infrastructure.jpg";
import scadaDashboard from "@/assets/vx-scada-dashboard.jpg";
import substationImage from "@/assets/vx-substation-real.jpg";
import tunnelImage from "@/assets/vx-mine-tunnel.jpg";
import stairsImage from "@/assets/vx-robot-stairs.jpg";
import bessImage from "@/assets/vx-bess.jpg";
import fieldImage from "@/assets/vx-field.jpg";
import roboticsHeroImage from "@/assets/vx-robotics.jpg";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — Company Profile" },
      {
        name: "description",
        content:
          "Vertifex Technology Sdn. Bhd. — solution developer delivering integrated automation, engineering and operational technology solutions: energy systems, IT & IoT, smart infrastructure, robotics, and engineering consultancy for industrial and infrastructure environments.",
      },
      { property: "og:title", content: "Vertifex Technology — Company Profile" },
      {
        property: "og:description",
        content:
          "Official company profile of Vertifex Technology — integrated automation, engineering, energy, IT & IoT, smart infrastructure and robotics solutions.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const serviceTags = [
  "Solution Developer",
  "Integrated Systems",
  "Engineering Delivery",
  "Project Management",
  "Operational Support",
  "Technical Advisory",
  "Engineering Support",
  "Energy Solutions",
  "IT & IoT",
  "Smart Infrastructure",
  "Automation & Robotics",
  "ELV / Surveillance / Access",
  "SCADA Integration",
  "Testing & Commissioning",
  "Maintenance",
  "Specialist Services",
];

const aboutCards = [
  {
    k: "// ABOUT",
    t: "About Us",
    d: "Vertifex Technology specializes in industrial transformation through integrated robotics, smart solutions, ICT and IoT technologies — engineered as a unified operational ecosystem.",
  },
  {
    k: "// FOCUS",
    t: "Focus",
    d: "Delivering automation, engineering and operational technology solutions that enhance efficiency, connectivity and operational performance across industrial and infrastructure environments.",
  },
  {
    k: "// VISION",
    t: "Vision",
    d: "To become a trusted regional partner in industrial automation, integrated technology solutions and smart infrastructure transformation.",
  },
  {
    k: "// MISSION",
    t: "Mission",
    d: "Deliver integrated automation and engineering solutions, provide practical technologies that improve efficiency, support industrial transformation through smart solutions / ICT / IoT, and build long-term partnerships through reliable delivery and technical support.",
  },
];

const services = [
  {
    code: "S.01",
    title: "Integrated Systems Solutions",
    desc: "Integrating technologies, infrastructure and operational systems into unified, efficient operational environments.",
    capabilities: [
      "Industrial System Integration",
      "ICT & IoT Integration",
      "Infrastructure Connectivity",
      "Smart Monitoring Platforms",
      "Integrated Operational Systems",
    ],
  },
  {
    code: "S.02",
    title: "Engineering Delivery Solutions",
    desc: "Engineering design, deployment and commissioning solutions tailored for industrial and infrastructure projects.",
    capabilities: [
      "Engineering Design & Planning",
      "Infrastructure Deployment",
      "Testing & Commissioning",
      "System Configuration",
      "Technical Implementation",
    ],
  },
  {
    code: "S.03",
    title: "Project Delivery Management",
    desc: "Coordinating project execution, technical delivery and operational readiness across all project phases.",
    capabilities: [
      "Project Planning & Coordination",
      "Technical Project Management",
      "Site Coordination",
      "Deployment Scheduling",
      "Documentation & Reporting",
    ],
  },
  {
    code: "S.04",
    title: "Operational Support & Maintenance",
    desc: "Long-term operational reliability through maintenance, monitoring and technical support services.",
    capabilities: [
      "Preventive & Corrective Maintenance",
      "System Monitoring",
      "SLA Support",
      "Operational Support",
      "System Enhancement",
    ],
  },
  {
    code: "S.05",
    title: "Technical Advisory & Specialist Services",
    desc: "Technical consultation and specialized expertise for operational, infrastructure and project requirements.",
    capabilities: [
      "Technical Consultation",
      "Operational Assessments",
      "Infrastructure Advisory",
      "System Optimization",
      "Specialist Advisory Services",
    ],
  },
  {
    code: "S.06",
    title: "Engineering & Technical Support",
    desc: "Engineering and technical support solutions for operational environments and project activities.",
    capabilities: [
      "Engineering Support",
      "Technical Troubleshooting",
      "Field Support Services",
      "Technical Assistance",
      "Operational Technical Support",
    ],
  },
];

const capabilities = [
  {
    index: "01",
    title: "Robotics & Automation",
    description:
      "Autonomous and legged robotic platforms for inspection, monitoring and intervention — integrated with the mechanical, electrical and software stack from day one.",
    note: "AUTONOMOUS // INSPECTION",
    image: roboticsImage,
    alt: "Quadruped inspection robot operating in an industrial facility",
  },
  {
    index: "02",
    title: "Smart Solutions",
    description:
      "ELV, security, surveillance, energy and building intelligence delivered as one integrated layer — designed to interoperate, not to live as silos.",
    note: "ELV / SECURITY / ENERGY / SURVEILLANCE",
    image: smartImage,
    alt: "Industrial control panel and ELV systems with status indicators",
  },
  {
    index: "03",
    title: "ICT & IoT",
    description:
      "Networking, edge compute, sensor fabrics, SCADA integration and cloud-connected IoT platforms that turn field data into operational decisions.",
    note: "NETWORK / EDGE / CLOUD / SCADA",
    image: ictImage,
    alt: "Electrical substation infrastructure with control assets",
  },
];

const techPillars = [
  {
    code: "T.01",
    title: "Automation & Control",
    items: [
      "Industrial Automation",
      "Robotics Integration",
      "Control Systems",
      "Operational Technologies",
    ],
  },
  {
    code: "T.02",
    title: "ICT & IoT",
    items: [
      "ICT Infrastructure",
      "IoT Connectivity",
      "Network Integration",
      "Smart Devices & Sensors",
    ],
  },
  {
    code: "T.03",
    title: "Smart Infrastructure",
    items: [
      "ELV Systems",
      "Surveillance Systems",
      "Access Control Systems",
      "Smart Monitoring Platforms",
    ],
  },
  {
    code: "T.04",
    title: "Infrastructure & Operations",
    items: [
      "Centralized Management Systems",
      "Infrastructure Connectivity",
      "Operational Monitoring",
      "Technical Support Services",
    ],
  },
];

const industries = [
  {
    t: "Industrial & Manufacturing",
    d: "Automation systems, robotics integration, industrial monitoring, ICT infrastructure and IoT technologies for manufacturing and production environments.",
  },
  {
    t: "Infrastructure & Utilities",
    d: "Smart infrastructure, centralized monitoring platforms, ICT networks and operational technology solutions for critical infrastructure environments.",
  },
  {
    t: "Government & Public Sector",
    d: "Integrated technology platforms, ICT infrastructure, IoT monitoring, operational support technologies and technical services for public sector environments.",
  },
  {
    t: "Commercial & Corporate",
    d: "ICT infrastructure, smart solutions, security systems, IoT connectivity and operational technologies for commercial buildings and corporate facilities.",
  },
  {
    t: "Smart Buildings & Facilities",
    d: "Integrated ELV systems, surveillance, access control, smart monitoring, IoT connectivity and facility management technologies.",
  },
  {
    t: "Energy & Power Infrastructure",
    d: "Engineering consultation, operational technologies, energy monitoring platforms, ICT infrastructure, automation and technical support for power generation and energy infrastructure.",
  },
  {
    t: "Data Centres & Critical Facilities",
    d: "ICT systems, infrastructure monitoring, environmental control technologies, network connectivity and operational support solutions for mission-critical environments.",
  },
  {
    t: "Rail & Highway Infrastructure",
    d: "Integrated operational technologies, ICT, monitoring systems, smart surveillance, ELV and engineering support services for rail, highway and transportation infrastructure.",
  },
];

const whyChoose = [
  {
    n: "01",
    t: "Integrated Engineering Approach",
    d: "We deliver integrated systems and technologies as a unified operational solution rather than disconnected products.",
  },
  {
    n: "02",
    t: "End-to-End Project Delivery",
    d: "From consultation and design to implementation, commissioning and support, we manage the complete project lifecycle.",
  },
  {
    n: "03",
    t: "Industrial & Infrastructure Expertise",
    d: "We specialise in automation, engineering, ICT, IoT and smart infrastructure solutions for industrial and infrastructure environments.",
  },
  {
    n: "04",
    t: "Practical & Scalable Solutions",
    d: "We develop practical, reliable and scalable solutions aligned with real operational requirements.",
  },
  {
    n: "05",
    t: "Technical & Operational Support",
    d: "Responsive engineering, maintenance and technical support services that protect operational continuity and reliability.",
  },
  {
    n: "06",
    t: "Customer-Focused Collaboration",
    d: "We work closely with customers to understand operational challenges and deliver tailored solutions for their environment.",
  },
];

const deliverySteps: [string, string, string][] = [
  ["01", "Consultation & Requirement Study", "Understanding operational requirements, project objectives and site environments."],
  ["02", "Design & Engineering", "Developing system architecture, engineering design and implementation planning."],
  ["03", "Integration & Implementation", "System integration, deployment, configuration and infrastructure installation."],
  ["04", "Testing & Commissioning", "Conducting testing, validation, commissioning and operational verification."],
  ["05", "Training & Handover", "Operational training, documentation and system handover support."],
  ["06", "Support & Maintenance", "Technical support, monitoring, maintenance and system enhancement services."],
];

const sectors = industries.map((i) => i.t);

const challenges: [string, string, string][] = [
  ["01", "Hazardous Access", "Reduce human exposure to high-voltage, confined and toxic environments."],
  ["02", "Manual Inspection Error", "Replace slow, error-prone visual checks with consistent automated inspection."],
  ["03", "Data Overload", "Translate raw field data into actionable, structured operational insight."],
  ["04", "Reactive Maintenance", "Move from reactive to predictive scheduling with automated condition monitoring."],
];

const robotSpecs: [string, string][] = [
  ["WEIGHT", "59 KG"],
  ["RATED LOAD", "20 KG"],
  ["WALKING SPEED", "4 M/S"],
  ["GRADEABILITY", "45° SLOPE"],
  ["IP RATING", "IP67"],
  ["TEMP RANGE", "−20°C / 55°C"],
];

const bessSpecs: [string, string][] = [
  ["SYSTEM CAPACITY", "250 kW / 514.4576 kWh"],
  ["TOPOLOGY", "Modular, 2× 125 kW / 257.2288 kWh"],
  ["MODE", "Grid-tied · peak shaving · load shifting"],
  ["PEAK TARGET", "200 kW (Mon–Fri, 14:00–22:00)"],
  ["DEPTH OF DISCHARGE", "95%"],
  ["LIFE CYCLES", "6,000"],
  ["IP RATING", "IP55"],
  ["EFFICIENCY", "≥ 90%"],
];

const bessScope = [
  "Modular Battery Energy Storage System (BESS)",
  "Master EMS with microgrid controller",
  "SCADA, smart meters, 4G/5G router",
  "Cloud monitoring + mobile application",
  "Liquid cooling and battery management",
  "Fire detection, alarm and automatic extinguishing",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="relative border-b border-border">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative grid lg:min-h-[88vh] lg:grid-cols-12">
            <div className="flex flex-col justify-end border-b border-border p-6 sm:p-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-16">
              <div className="vx-reveal">
                <div className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-primary sm:text-base">
                  <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
                  <span>COMPANY_PROFILE / 2026 / REV.01</span>
                </div>
                <h1 className="mb-7 font-display text-[2.5rem] font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:mb-9 md:text-6xl lg:text-[4.25rem] xl:text-[5rem]">
                  Systems built
                  <br />
                  for <span className="vx-gradient-text">real</span>
                  <br />
                  operations.
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Vertifex Technology Sdn. Bhd. delivers integrated automation,
                  engineering and operational technology solutions — energy systems, IT &amp;
                  IoT, smart infrastructure, automation &amp; robotics, and engineering
                  consultancy — designed for industrial and infrastructure environments.
                </p>
                <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold uppercase">
                  <a
                    href="#contact"
                    className="vx-glow inline-flex items-center gap-2 bg-primary px-5 py-3 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Start a Project →
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 border border-border px-5 py-3 tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Explore Services
                  </a>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[440px] lg:col-span-7">
              <img
                src={heroImage}
                alt="Engineers inspecting industrial piping and infrastructure from above"
                width={1920}
                height={1080}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/35 via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-widest md:bottom-10 md:left-10 md:right-10">
                <span className="rounded-sm border border-primary/40 bg-card/85 px-3 py-2 text-primary backdrop-blur-md">
                  Empowering Integrated Digital &amp; Smart Systems
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <section className="overflow-hidden border-b border-border bg-card/60">
          <div className="relative">
            <div className="vx-marquee flex w-max gap-10 whitespace-nowrap px-6 py-5 text-sm font-bold uppercase text-muted-foreground">
              {[...serviceTags, ...serviceTags].map((item, idx) => (
                <span key={`${item}-${idx}`} className="inline-flex items-center gap-2">
                  <span className="text-primary">+</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 01 PROFILE */}
        <section id="profile" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="text-sm font-bold text-primary">// 01_PROFILE</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  About <span className="vx-gradient-text">Vertifex</span>.
                </h2>
                <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Solution developer for integrated automation, engineering and
                  operational technology — built around real industrial and infrastructure
                  workflows.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-primary">
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                  Solution Developer · Malaysia
                </div>
              </div>
              <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:col-span-8 md:grid-cols-2">
                {aboutCards.map((item) => (
                  <div key={item.t} className="bg-card p-6 md:p-8">
                    <div className="text-sm font-bold text-primary">{item.k}</div>
                    <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight">
                      {item.t}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 SERVICES */}
        <section id="services" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-primary">// 02_CORE_SERVICES</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Six service lines.<br />
                  <span className="vx-gradient-text">One delivery model.</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Engineering, integration, commissioning, and ongoing technical support — packaged so customers buy an outcome, not a stack of disconnected vendors.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.code} className="bg-card p-7 md:p-8">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-primary">[ {s.code} ]</div>
                    <div className="vx-gradient-bar h-px w-10" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-black uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-5 grid gap-2.5 border-t border-border pt-5 text-sm">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-2.5">
                        <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
                        <span className="text-foreground/85">{c}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 03 CAPABILITIES — three integrated layers + tech pillars */}
        <section id="capabilities" className="mx-auto max-w-[1440px] border-b border-border">
          <div className="border-b border-border px-4 py-12 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 text-sm font-bold text-primary">// 03_CAPABILITIES</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                One integrator. <span className="vx-gradient-text">Three connected layers.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Robotics on the edge of operations. Smart solutions across the building and asset
                layer. ICT and IoT tying them into a single, observable system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.index}
                className="group border-b border-border bg-card/40 p-6 md:border-r md:p-8 last:md:border-r-0"
              >
                <div className="mb-4 text-sm font-bold text-primary">[ {item.index} ]</div>
                <div className="mb-6 aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <h3 className="font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-8 border-t border-border pt-4 text-xs font-bold uppercase tracking-widest text-primary/80 md:text-sm">
                  {item.note}
                </div>
              </article>
            ))}
          </div>

          {/* Technology pillars */}
          <div className="border-t border-border px-4 py-12 sm:px-6 md:py-16">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <div className="text-sm font-bold text-primary">// TECHNOLOGY_&_INFRASTRUCTURE</div>
                <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight md:text-4xl">
                  The stack under the surface.
                </h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Supporting integrated operational environments through automation, ICT, IoT, smart
                  infrastructure and operational technology platforms.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {techPillars.map((p) => (
                <div key={p.code} className="bg-card p-7 md:p-8">
                  <div className="text-sm font-bold text-primary">[ {p.code} ]</div>
                  <h4 className="mt-3 font-display text-lg font-black uppercase tracking-tight md:text-xl">
                    {p.title}
                  </h4>
                  <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-start gap-2 border-b border-border/60 pb-2.5 last:border-b-0">
                        <span className="text-primary">+</span>
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sectors strip */}
          <div id="industries" className="grid border-t border-border lg:grid-cols-12">
            <div className="border-b border-border p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-10">
              <div className="text-sm font-bold text-primary">// 04_INDUSTRIES_WE_SUPPORT</div>
              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                Built for harsh, technical, live environments.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Eight sectors. The same engineered, integrated approach to every one.
              </p>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[320px] lg:col-span-8">
              <img
                src={substationImage}
                alt="High-voltage substation infrastructure under operation"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            </div>
          </div>

          <div className="grid gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {industries.map((s, idx) => (
              <div key={s.t} className="bg-card p-7 md:p-8">
                <div className="text-sm font-bold text-primary">[ I.{String(idx + 1).padStart(2, "0")} ]</div>
                <h4 className="mt-3 font-display text-lg font-black uppercase tracking-tight md:text-xl">
                  {s.t}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 05 PLATFORM — robotics flagship */}
        <section id="platform" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="text-sm font-bold text-primary">// 05_PLATFORM</div>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              Legged robot for <span className="vx-gradient-text">automated inspection</span>.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A field-ready quadruped platform engineered for remote and automated inspection in
              hazardous environments — substations, plants, tunnels and confined infrastructure.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1440px] border-t border-border lg:grid-cols-12">
            <div className="relative min-h-[300px] sm:min-h-[420px] border-b border-border lg:col-span-7 lg:border-b-0 lg:border-r">
              <img
                src={stairsImage}
                alt="Quadruped inspection robot navigating outdoor stairs"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-transparent" />
            </div>
            <div className="p-8 lg:col-span-5 lg:p-12">
              <div className="text-sm font-bold text-primary">// OPERATIONAL_PARAMETERS</div>
              <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {robotSpecs.map(([k, v]) => (
                  <div key={k} className="bg-card px-5 py-4">
                    <div className="text-xs font-bold text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display text-lg font-bold text-foreground">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-4 text-sm uppercase text-muted-foreground">
                Sensor stack: PTZ camera, infrared thermometry, gas sensor, acoustic imaging, 3D
                mapping, optional robotic arm.
              </div>
            </div>
          </div>

          {/* Robot product + software */}
          <div className="mx-auto grid max-w-[1440px] border-t border-border md:grid-cols-2">
            <div className="relative border-b border-border md:border-b-0 md:border-r">
              <img
                src={scadaDashboard}
                alt="SCADA visualised management dashboard with plant overview, KPIs and live feed"
                width={1536}
                height={1024}
                loading="lazy"
                className="aspect-square h-full w-full object-cover bg-card"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_45%,_oklch(0.99_0.003_240)_95%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-background via-background/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-background via-background/60 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="grid">
              <div className="border-b border-border bg-card p-7 md:p-9">
                <div className="text-sm font-bold text-primary">// SOFTWARE_LAYER</div>
                <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight">
                  SCADA + visualised management.
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Real-time inspection monitoring, structured result management, dashboards and
                  SCADA integration so robotic data is usable inside the operational stack you
                  already run.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2.5 text-sm text-muted-foreground">
                  {[
                    "SCADA integration",
                    "Visualised dashboard",
                    "Real-time monitoring",
                    "Result management",
                  ].map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="text-primary">+</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card p-7 md:p-9">
                <div className="text-sm font-bold text-primary">// CHALLENGES_ADDRESSED</div>
                <div className="mt-5 grid gap-4">
                  {challenges.map(([n, t, d]) => (
                    <div key={n} className="border-l-2 border-primary pl-4">
                      <div className="text-sm font-bold text-primary">[ {n} ]</div>
                      <div className="mt-1 font-display text-base font-black uppercase">{t}</div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 06 PORTFOLIO — BESS case */}
        <section id="portfolio" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="text-sm font-bold text-primary">// 06_PORTFOLIO</div>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              Selected <span className="vx-gradient-text">project</span>.
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-bold">
              <span className="border border-primary bg-primary/5 px-3 py-1.5 text-primary">[ FEATURED ]</span>
              <span className="text-muted-foreground">CASE_001 // ENERGY_STORAGE</span>
              <span className="text-muted-foreground">// 2026</span>
            </div>
            <h3 className="mt-6 font-display text-[1.65rem] font-black uppercase leading-[0.95] tracking-tight sm:text-3xl md:text-5xl">
              250 kW / 514.4576 kWh
              <br />
              Energy Storage System.
            </h3>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A grid-tied modular battery energy storage system engineered for an industrial client
              in Malaysia. Designed for peak shaving against the maximum demand window
              (Mon–Fri, 14:00–22:00), with self-consumption optimisation and load shifting handled
              by the master EMS.
            </p>
          </div>

          <div className="mx-auto grid max-w-[1440px] border-t border-border lg:grid-cols-12">
            <div className="relative min-h-[300px] sm:min-h-[420px] border-b border-border lg:col-span-7 lg:border-b-0 lg:border-r">
              <img
                src={bessImage}
                alt="Outdoor industrial battery energy storage system cabinets"
                width={1600}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div className="p-8 lg:col-span-5 lg:p-12">
              <div className="text-sm font-bold text-primary">// SYSTEM_SPECIFICATION</div>
              <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {bessSpecs.map(([k, v]) => (
                  <div key={k} className="bg-card px-5 py-4">
                    <div className="text-xs font-bold text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display text-base font-bold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-[1440px] gap-px border-t border-border bg-border lg:grid-cols-12">
            <div className="bg-card p-8 lg:col-span-5 lg:p-10">
              <div className="text-sm font-bold text-primary">// INTEGRATED_SCOPE</div>
              <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                {bessScope.map((s) => (
                  <li key={s} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card p-8 lg:col-span-7 lg:p-10">
              <div className="text-sm font-bold text-primary">// WARRANTY_TERMS</div>
              <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
                {[
                  ["BATTERY", "10 yrs / 6,000 cycles"],
                  ["PCS", "5 years"],
                  ["WHOLE SYSTEM (incl. EMS)", "2 years"],
                  ["REMOTE MAINTENANCE", "2× yearly"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-card px-5 py-4">
                    <div className="text-xs font-bold text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display text-base font-bold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-4 text-sm uppercase text-muted-foreground">
                Working logic delivered: load shifting · self-consumption optimisation · peak shaving.
              </div>
            </div>
          </div>

          {/* Field reference imagery */}
          <div className="relative h-[280px] border-t border-border md:h-[360px]">
            <img
              src={tunnelImage}
              alt="Field operator inside an underground operational tunnel"
              width={1920}
              height={1080}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1440px] px-6 py-6 text-sm font-bold uppercase text-foreground md:text-base">
              Field deployment // operational support across live infrastructure environments
            </div>
          </div>
        </section>

        {/* 07 WHY CHOOSE + DELIVERY APPROACH */}
        <section id="approach" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <div className="text-sm font-bold text-primary">// 07_WHY_CHOOSE_VERTIFEX</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Why teams pick <span className="vx-gradient-text">Vertifex</span>.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  An engineered, integrated and operationally-grounded approach — purpose-built for
                  the realities of industrial and infrastructure delivery.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {whyChoose.map((w) => (
                <article key={w.n} className="vx-glow group bg-card p-7 md:p-8 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-4xl font-black text-primary">{w.n}</div>
                    <div className="vx-gradient-bar h-px w-12" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-black uppercase tracking-tight">
                    {w.t}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{w.d}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <div className="text-sm font-bold text-primary">// PROJECT_DELIVERY_APPROACH</div>
                <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                  From requirement to operational handover.
                </h3>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                  Six structured phases — designed for predictable, traceable engineering delivery.
                </p>
              </div>
              <ol className="lg:col-span-8 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
                {deliverySteps.map(([n, t, d]) => (
                  <li key={n} className="bg-card p-7">
                    <div className="flex items-center gap-3">
                      <span className="font-display text-3xl font-black text-primary">{n}</span>
                      <span className="vx-gradient-bar h-px flex-1" />
                    </div>
                    <h4 className="mt-3 font-display text-base font-black uppercase tracking-tight md:text-lg">{t}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{d}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* 08 COMMITMENT */}
        <section className="relative border-b border-border bg-card/40">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-primary">// 08_OUR_COMMITMENT</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-[3.2rem]">
                  Practical. Reliable. <span className="vx-gradient-text">Integrated</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Vertifex Technology is committed to delivering practical, reliable and integrated
                  technology solutions that support operational efficiency, system reliability and
                  long-term customer success.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={fieldImage}
                    alt="Engineering team on site at an infrastructure project"
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/25" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09 CONTACT */}
        <section id="contact" className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-24">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 text-sm font-bold text-primary">// 09_CONTACT</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-6xl">
                Let's engineer the
                <br />
                <span className="vx-gradient-text">automation layer</span> properly.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Robotics deployment, ELV / security / surveillance package, energy storage system,
                or an ICT and IoT backbone — Vertifex can structure the solution from concept to
                operational delivery.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 text-sm font-bold uppercase">
                <a
                  href="mailto:info@vertifextechnology.com"
                  className="vx-glow inline-flex items-center gap-3 bg-primary px-7 py-4 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request Engagement →
                </a>
                <a
                  href="https://www.linkedin.com/company/vertifex-technology/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border border-border px-7 py-4 tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:col-span-5 text-sm">
              <div className="bg-card p-6">
                <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">ENTITY</span>
                  <span className="text-right font-bold">VERTIFEX TECHNOLOGY SDN. BHD.</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">ADDRESS</span>
                  <span className="text-right leading-relaxed">
                    16-1, Jalan SS19/6, SS19,
                    <br />
                    47500 Subang Jaya, Selangor.
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">SCOPE</span>
                  <span>INTEGRATE → DEPLOY</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">SPECIALTY</span>
                  <span>ROBOTICS / SMART / IOT</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">REGION</span>
                  <span>MALAYSIA</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">EMAIL</span>
                  <a href="mailto:info@vertifextechnology.com" className="text-primary">
                    info@vertifextechnology.com
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">WEB</span>
                  <span>www.vertifextechnology.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

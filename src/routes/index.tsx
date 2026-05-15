import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/vx-hero.jpg";
import roboticsImage from "@/assets/vx-robot-substation.jpg";
import smartImage from "@/assets/vx-controls.jpg";
import ictImage from "@/assets/vx-infrastructure.jpg";
import robotProduct from "@/assets/vx-robot-product.jpg";
import scadaDashboard from "@/assets/vx-scada-dashboard.jpg";
import substationImage from "@/assets/vx-substation-real.jpg";
import tunnelImage from "@/assets/vx-mine-tunnel.jpg";
import stairsImage from "@/assets/vx-robot-stairs.jpg";
import bessImage from "@/assets/vx-bess.jpg";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — Company Profile" },
      {
        name: "description",
        content:
          "Vertifex Technology Sdn. Bhd. — solution developer specialized in system integration, engineering, robotics, smart solutions (ELV, security, energy, surveillance), ICT, IoT, plus consultation, specialist and engineering support services for industrial automation.",
      },
      { property: "og:title", content: "Vertifex Technology — Company Profile" },
      {
        property: "og:description",
        content:
          "Official company profile of Vertifex Technology — solution developer for system integration, robotics, smart solutions, ICT, IoT, and engineering support services.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const serviceTags = [
  "Solution Developer",
  "System Integration",
  "Robotics Engineering",
  "Smart Solutions",
  "ELV Systems",
  "Security & Surveillance",
  "Energy Systems",
  "ICT Infrastructure",
  "IoT Platforms",
  "Control Panels",
  "Installation",
  "Testing & Commissioning",
  "Maintenance",
  "Consultation",
  "Specialist Services",
  "Engineering Support",
];

const services = [
  { code: "S.01", title: "System Integration", desc: "Integrating technologies, infrastructure and operational systems into unified, efficient solutions across industrial and infrastructure environments." },
  { code: "S.02", title: "Design & Implementation", desc: "Engineering design, solution implementation, deployment and commissioning for industrial and infrastructure environments." },
  { code: "S.03", title: "Project Management", desc: "Managing project execution, coordination, delivery and operational readiness across all project phases." },
  { code: "S.04", title: "Operations & Maintenance", desc: "Maintenance, monitoring and technical support services that ensure long-term operational reliability." },
  { code: "S.05", title: "Consultation & Specialist Services", desc: "Technical consultation and specialised expertise to support operational and project requirements." },
  { code: "S.06", title: "Engineering Support Services", desc: "Engineering and technical support services for operational environments and project activities." },
];

const industries = [
  { t: "Industrial & Manufacturing", d: "Automation, robotics integration, industrial monitoring and operational technologies for production environments." },
  { t: "Infrastructure & Utilities", d: "Smart infrastructure, centralised monitoring platforms, ICT infrastructure and operational support solutions." },
  { t: "Logistics & Transportation", d: "Operational monitoring, fleet tracking, surveillance and integrated operational platforms." },
  { t: "Government & Public Sector", d: "Integrated technology systems, operational infrastructure, monitoring platforms and technical support services." },
  { t: "Commercial & Corporate", d: "ICT systems, smart solutions, security and operational support technologies for commercial environments." },
  { t: "Smart Buildings & Facilities", d: "ELV, surveillance, access control, smart monitoring and integrated facility technologies." },
];

const deliverySteps = [
  ["01", "Consultation & Requirement Study", "Understanding operational requirements, project objectives and site environments."],
  ["02", "Design & Engineering", "Developing system architecture, engineering design and implementation planning."],
  ["03", "Integration & Implementation", "System integration, deployment, configuration and infrastructure installation."],
  ["04", "Testing & Commissioning", "Conducting testing, validation, commissioning and operational verification."],
  ["05", "Training & Handover", "Operational training, documentation and system handover support."],
  ["06", "Support & Maintenance", "Technical support, monitoring, maintenance and system enhancement services."],
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

const metrics = [
  ["DISCIPLINES", "06"],
  ["DELIVERY", "END-TO-END"],
  ["FOCUS", "AUTOMATION"],
  ["LAYERS", "ROBOT / SMART / IOT"],
];

const sectors = [
  "Industrial & Manufacturing",
  "Infrastructure & Utilities",
  "Logistics & Transportation",
  "Government & Public Sector",
  "Commercial & Corporate",
  "Smart Buildings & Facilities",
];

const challenges = [
  ["01", "Hazardous Access", "Reduce human exposure to high-voltage, confined and toxic environments."],
  ["02", "Manual Inspection Error", "Replace slow, error-prone visual checks with consistent automated inspection."],
  ["03", "Data Overload", "Translate raw field data into actionable, structured operational insight."],
  ["04", "Reactive Maintenance", "Move from reactive to predictive scheduling with automated condition monitoring."],
];

const robotSpecs = [
  ["WEIGHT", "59 KG"],
  ["RATED LOAD", "20 KG"],
  ["WALKING SPEED", "4 M/S"],
  ["GRADEABILITY", "45° SLOPE"],
  ["IP RATING", "IP67"],
  ["TEMP RANGE", "−20°C / 55°C"],
];

const bessSpecs = [
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
        <section className="border-b border-border">
          <div className="grid lg:min-h-[88vh] lg:grid-cols-12">
            <div className="flex flex-col justify-end border-b border-border p-6 sm:p-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-16">
              <div className="vx-reveal">
                <div className="mb-5 inline-flex items-center gap-2 text-xs text-primary sm:text-sm">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>COMPANY_PROFILE / 2026</span>
                </div>
                <h1 className="mb-6 font-display text-[2.5rem] font-black uppercase leading-[0.88] tracking-tight sm:text-5xl md:mb-8 md:text-7xl lg:text-8xl">
                  Systems built
                  <br />
                  for real
                  <br />
                  operations.
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Vertifex Technology Sdn. Bhd. is a solution developer specialized in system
                  integration, engineering and robotics for automation — extending into smart
                  solutions (ELV, security, energy, surveillance), ICT, IoT, and consultation,
                  specialist and engineering support services for industrial and infrastructure
                  environments.
                </p>
                <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="bg-background px-4 py-5">
                      <div className="text-[10px] text-muted-foreground">{label}</div>
                      <div className="mt-3 font-display text-2xl font-bold text-primary">{value}</div>
                    </div>
                  ))}
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
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 grid gap-px border-t border-border bg-border md:grid-cols-3">
                <div className="bg-background/92 px-5 py-4 backdrop-blur-sm">
                  <div className="text-[10px] text-muted-foreground">CORE_SCOPE</div>
                  <div className="mt-2 text-xs font-bold uppercase">Design / Integrate / Support</div>
                </div>
                <div className="bg-background/92 px-5 py-4 backdrop-blur-sm">
                  <div className="text-[10px] text-muted-foreground">PROJECT_MODEL</div>
                  <div className="mt-2 text-xs font-bold uppercase">Engineering to Commissioning</div>
                </div>
                <div className="bg-background/92 px-5 py-4 backdrop-blur-sm">
                  <div className="text-[10px] text-muted-foreground">APPLICATION</div>
                  <div className="mt-2 text-xs font-bold uppercase">Automation & Reliability</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <section className="overflow-hidden border-b border-border">
          <div className="flex gap-8 overflow-x-auto px-6 py-4 whitespace-nowrap text-[11px] text-muted-foreground">
            {serviceTags.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="text-primary">+</span>
                {item.toUpperCase()}
              </span>
            ))}
          </div>
        </section>

        {/* PROFILE */}
        <section id="profile" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="text-[10px] font-bold text-primary">// 01_PROFILE</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  About Vertifex.
                </h2>
              </div>
              <div className="grid gap-px border border-border bg-border lg:col-span-8 md:grid-cols-2">
                {[
                  {
                    k: "// ABOUT",
                    t: "About Us",
                    d: "Vertifex Technology specialises in industrial transformation through integrated robotics, smart solutions, ICT and IoT — engineered as a unified operational ecosystem.",
                  },
                  {
                    k: "// FOCUS",
                    t: "Focus",
                    d: "Delivering automation, system integration and engineering solutions that enhance efficiency, connectivity and operational performance across industrial and infrastructure environments.",
                  },
                  {
                    k: "// VISION",
                    t: "Vision",
                    d: "To become a trusted regional partner in industrial automation, integrated technology solutions and smart infrastructure transformation.",
                  },
                  {
                    k: "// MISSION",
                    t: "Mission",
                    d: "Deliver integrated automation and engineering solutions, provide practical technologies that improve efficiency and connectivity, support industrial transformation through smart solutions, ICT and IoT, and build long-term partnerships through reliable delivery and technical support.",
                  },
                ].map((item) => (
                  <div key={item.t} className="bg-background p-6 md:p-8">
                    <div className="text-[10px] font-bold text-primary">{item.k}</div>
                    <h3 className="mt-4 font-display text-xl font-black uppercase tracking-tight">
                      {item.t}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core services */}
            <div className="mt-16">
              <div className="text-[10px] font-bold text-primary">// CORE_SERVICES</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
                What we deliver.
              </h3>
              <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
                {services.map((s) => (
                  <div key={s.code} className="bg-background p-6">
                    <div className="text-[10px] font-bold text-primary">[ {s.code} ]</div>
                    <h4 className="mt-4 font-display text-lg font-bold uppercase tracking-tight">
                      {s.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section id="capabilities" className="mx-auto max-w-[1440px] border-b border-border">
          <div className="border-b border-border px-4 py-12 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 text-[10px] font-bold text-primary">// 02_CAPABILITIES</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                One integrator. Three connected layers.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Robotics on the edge of operations. Smart solutions across the building and asset
                layer. ICT and IoT tying them into a single, observable system.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            {capabilities.map((item) => (
              <article
                key={item.index}
                className="group border-b border-border p-6 md:border-r md:p-8 last:md:border-r-0"
              >
                <div className="mb-4 text-xs font-bold text-primary">[ {item.index} ]</div>
                <div className="mb-6 aspect-[4/3] overflow-hidden border border-border bg-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-8 border-t border-border pt-4 text-[10px] text-muted-foreground">
                  {item.note}
                </div>
              </article>
            ))}
          </div>

          {/* Sectors strip */}
          <div className="grid border-t border-border lg:grid-cols-12">
            <div className="border-b border-border p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// APPLICATION_ENVIRONMENTS</div>
              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                Built for harsh, technical, live environments.
              </h3>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {sectors.map((sector) => (
                  <li key={sector} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[240px] sm:min-h-[320px] lg:col-span-8">
              <img
                src={substationImage}
                alt="High-voltage substation infrastructure under operation"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
            </div>
          </div>
        </section>

        {/* PLATFORM — robotics flagship */}
        <section id="platform" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="text-[10px] font-bold text-primary">// 03_PLATFORM</div>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              Legged robot for automated inspection.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
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
            </div>
            <div className="p-8 lg:col-span-5 lg:p-12">
              <div className="text-[10px] font-bold text-primary">// OPERATIONAL_PARAMETERS</div>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 text-xs">
                {robotSpecs.map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-3">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display font-bold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-4 text-[11px] uppercase text-muted-foreground">
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
              {/* Edge gradient overlay — partially covers side stat panels */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_oklch(0.13_0_0)_92%)]" />
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-background via-background/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-[22%] bg-gradient-to-l from-background via-background/70 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-[12%] bg-gradient-to-b from-background to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14%] bg-gradient-to-t from-background to-transparent" />
            </div>
            <div className="grid">
              <div className="border-b border-border bg-background p-6 md:p-8">
                <div className="text-[10px] font-bold text-primary">// SOFTWARE_LAYER</div>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                  SCADA + visualised management.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Real-time inspection monitoring, structured result management, dashboards and
                  SCADA integration so robotic data is usable inside the operational stack you
                  already run.
                </p>
                <ul className="mt-6 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
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
              <div className="bg-background p-6 md:p-8">
                <div className="text-[10px] font-bold text-primary">// CHALLENGES_ADDRESSED</div>
                <div className="mt-4 grid gap-3">
                  {challenges.map(([n, t, d]) => (
                    <div key={n} className="border-l-2 border-primary pl-4">
                      <div className="text-[10px] font-bold text-primary">[ {n} ]</div>
                      <div className="mt-1 font-display text-sm font-bold uppercase">{t}</div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="text-[10px] font-bold text-primary">// 04_PORTFOLIO</div>
            <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              Selected project.
            </h2>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[10px] font-bold">
              <span className="border border-primary px-2 py-1 text-primary">[ FEATURED ]</span>
              <span className="text-muted-foreground">CASE_001 // ENERGY_STORAGE</span>
              <span className="text-muted-foreground">// 2026</span>
            </div>
            <h3 className="mt-6 font-display text-[1.65rem] font-black uppercase leading-[0.95] tracking-tight sm:text-3xl md:text-5xl">
              250 kW / 514.4576 kWh
              <br />
              Energy Storage System.
            </h3>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="p-8 lg:col-span-5 lg:p-12">
              <div className="text-[10px] font-bold text-primary">// SYSTEM_SPECIFICATION</div>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 text-xs">
                {bessSpecs.map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-3">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display font-bold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-[1440px] gap-px border-t border-border bg-border lg:grid-cols-12">
            <div className="bg-background p-8 lg:col-span-5 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// INTEGRATED_SCOPE</div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {bessScope.map((s) => (
                  <li key={s} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 lg:col-span-7 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// WARRANTY_TERMS</div>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 text-xs">
                {[
                  ["BATTERY", "10 yrs / 6,000 cycles"],
                  ["PCS", "5 years"],
                  ["WHOLE SYSTEM (incl. EMS)", "2 years"],
                  ["REMOTE MAINTENANCE", "2× yearly"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-4">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display font-bold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-4 text-[11px] uppercase text-muted-foreground">
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
            <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-[1440px] px-6 py-6 text-[11px] uppercase text-muted-foreground">
              Field deployment // operational support across live infrastructure environments
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-4 py-14 sm:px-6 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 text-[10px] font-bold text-primary">// 05_CONTACT</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-6xl">
                Let's engineer the automation layer properly.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Whether the scope is robotics deployment, an ELV / security / surveillance package,
                an energy storage system, or an ICT and IoT backbone — Vertifex can structure the
                solution from concept to operational delivery.
              </p>
              <a
                href="mailto:yc@vertifextechnology.com"
                className="mt-10 inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Engagement →
              </a>
            </div>

            <div className="grid gap-px border border-border bg-border lg:col-span-5 text-xs">
              <div className="bg-background p-5">
                <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">ENTITY</span>
                  <span className="text-right">VERTIFEX TECHNOLOGY SDN. BHD.</span>
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
                  <a href="mailto:yc@vertifextechnology.com" className="text-primary">yc@vertifextechnology.com</a>
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

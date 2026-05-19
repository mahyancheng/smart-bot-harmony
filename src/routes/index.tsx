import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/v2/hero-controlroom.png";
import transportImage from "@/assets/v2/cap-transport.png";
import cityImage from "@/assets/v2/cap-city.png";
import datacenterImage from "@/assets/v2/cap-datacenter.png";
import commitmentImage from "@/assets/v2/commitment.png";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — Company Profile" },
      {
        name: "description",
        content:
          "Vertifex Technology Sdn. Bhd. — solution developer delivering smart transportation, smart city, Information & Communication Technology (ICT) and Internet of Things (IoT), energy solutions, and integrated automation for infrastructure and industrial environments.",
      },
      { property: "og:title", content: "Vertifex Technology — Company Profile" },
      {
        property: "og:description",
        content:
          "Official company profile of Vertifex Technology — smart infrastructure, transportation, Information & Communication Technology (ICT) and Internet of Things (IoT), energy, and integrated automation solutions.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const serviceTags = [
  "Solution Developer",
  "Smart Transportation",
  "Smart City",
  "Information & Communication Technology (ICT) & Internet of Things (IoT)",
  "Energy Solutions",
  "Integrated Systems",
  "Engineering Delivery",
  "Project Management",
  "Operational Support",
  "Asset & Facility Management",
  "Automation & Robotics",
  "ELV / Surveillance / Access",
  "Digital Twin",
  "Testing & Commissioning",
  "Green Technology",
  "Smart Infrastructure",
];

const aboutCards = [
  {
    k: "// ABOUT",
    t: "About Us",
    d: "Vertifex Technology specializes in infrastructure modernization and industrial digitalization through integrated technologies and engineering expertise — delivering connected, intelligent, and efficient solutions for infrastructure and industrial environments.",
  },
  {
    k: "// FOCUS",
    t: "Focus",
    d: "Delivering integrated technology and engineering solutions that enhance connectivity, operational efficiency, infrastructure reliability, and sustainable development across infrastructure and industrial environments.",
  },
  {
    k: "// VISION",
    t: "Vision",
    d: "To become a leading regional partner in smart technologies, intelligent infrastructure, and sustainable green transformation.",
  },
  {
    k: "// MISSION",
    t: "Mission",
    d: [
      "Empower infrastructure and industrial environments through smart integration and operational technology solutions.",
      "Accelerate digital transformation through intelligent connectivity, automation, and innovative technologies.",
      "Optimize operational efficiency, infrastructure reliability, and sustainable green development through integrated solutions.",
      "Deliver reliable engineering expertise and long-term technical support that create lasting customer value.",
    ],
  },
];

const services = [
  {
    code: "S.01",
    title: "Integrated Systems Solutions",
    desc: "Delivering smart system integration solutions for infrastructure and industrial environments.",
    capabilities: [
      "Industrial System Integration",
      "Information & Communication Technology (ICT) and Internet of Things (IoT) Integration",
      "Infrastructure Connectivity",
      "Smart Monitoring Platforms",
      "Integrated Operational Systems",
    ],
  },
  {
    code: "S.02",
    title: "Engineering Delivery Solutions",
    desc: "Providing engineering design, deployment, and commissioning solutions for infrastructure and industrial projects.",
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
    desc: "Managing project execution, coordination, and operational readiness across all project phases.",
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
    desc: "Providing maintenance, monitoring, and technical support services to ensure operational continuity and infrastructure reliability.",
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
    title: "Energy Solutions",
    desc: "Delivering smart energy and green technology solutions that support sustainable development, operational efficiency, and infrastructure reliability.",
    capabilities: [
      "Smart Energy Platforms",
      "Energy Optimization",
      "Green Technology Integration",
      "Power Infrastructure Solutions",
      "Sustainable Energy Systems",
    ],
  },
  {
    code: "S.06",
    title: "Asset & Facility Management",
    desc: "Providing integrated asset and facility management solutions that improve operational visibility and infrastructure performance.",
    capabilities: [
      "Asset Monitoring & Tracking",
      "Facility Management Systems",
      "Operational Visibility Platforms",
      "Infrastructure Performance",
      "Lifecycle Management",
    ],
  },
];

const capabilities = [
  {
    index: "01",
    title: "Smart Transportation",
    description:
      "Rail and highway solutions integrating centralized management systems, Information & Communication Technology (ICT) and Internet of Things (IoT), intelligent detection, sensing & analytics, ELV systems, and engineering support — unified into a single operational layer.",
    note: "RAIL // HIGHWAY // INTELLIGENT DETECTION",
    image: transportImage,
    alt: "Smart city transportation corridor with holographic data overlays, highway, rail, and green energy",
  },
  {
    index: "02",
    title: "Smart City Solutions",
    description:
      "Centralized management systems, digital twin technologies, Information & Communication Technology (ICT) and Internet of Things (IoT) integration, intelligent analytics, and connected operational technologies for sustainable urban environments.",
    note: "DIGITAL TWIN // ANALYTICS // URBAN INTERNET OF THINGS (IoT)",
    image: cityImage,
    alt: "Aerial view of smart city at twilight with floating dark data surveillance panels",
  },
  {
    index: "03",
    title: "Information & Communication Technology (ICT) and Internet of Things (IoT) Infrastructure",
    description:
      "Networking, edge compute, sensor fabrics, SCADA integration, and cloud-connected Internet of Things (IoT) platforms that turn field data into operational decisions — built for mission-critical environments.",
    note: "NETWORK // EDGE // CLOUD // SCADA",
    image: datacenterImage,
    alt: "White data center corridor with floating cyan network topology and Internet of Things (IoT) sensor feed panels",
  },
];

const techPillars = [
  {
    code: "T.01",
    title: "Smart Transportation",
    items: [
      "Centralized Management Systems",
      "Intelligent Detection & Sensing",
      "Information & Communication Technology (ICT) and Internet of Things (IoT) for Transport",
      "ELV & Operational Systems",
    ],
  },
  {
    code: "T.02",
    title: "Smart City & Digital Twin",
    items: [
      "Digital Twin Technologies",
      "Urban Internet of Things (IoT) Platforms",
      "Intelligent Analytics",
      "Connected Infrastructure",
    ],
  },
  {
    code: "T.03",
    title: "Information & Communication Technology (ICT) and Internet of Things (IoT)",
    items: [
      "Information & Communication Technology (ICT) Infrastructure",
      "Internet of Things (IoT) Connectivity",
      "Network Integration",
      "Smart Devices & Sensors",
    ],
  },
  {
    code: "T.04",
    title: "Energy & Automation",
    items: [
      "Smart Energy Solutions",
      "Green Technology",
      "Industrial Automation",
      "Robotics Integration",
    ],
  },
];

const industries = [
  {
    t: "Smart Transportation Solutions",
    d: "Smart Transportation (Rail & Highway) solutions including centralized management systems, mobile application solutions, Information & Communication Technology (ICT) and Internet of Things (IoT) systems, intelligent detection, sensing & analytics technologies, ELV systems, operational technologies, and engineering support services for transportation environments.",
  },
  {
    t: "Smart City Solutions",
    d: "Smart city solutions including centralized management systems, digital twin technologies, Information & Communication Technology (ICT) and Internet of Things (IoT) systems, intelligent analytics, and integrated operational technologies for connected and sustainable urban environments.",
  },
  {
    t: "Government & Public Sector",
    d: "Digital platforms, command & control systems, operational monitoring technologies, and integrated solutions supporting smarter and more efficient public sector environments.",
  },
  {
    t: "Commercial Facilities & Corporate Environments",
    d: "Integrated building technologies, Information & Communication Technology (ICT) infrastructure, intelligent security systems, and operational solutions for modern commercial and corporate environments.",
  },
  {
    t: "Energy & Power Infrastructure",
    d: "Smart energy technologies, energy optimization platforms, automation systems, Information & Communication Technology (ICT) infrastructure, and engineering solutions supporting sustainable green energy and efficient power environments.",
  },
  {
    t: "Industrial & Manufacturing",
    d: "Automation systems, robotics integration, industrial monitoring, Information & Communication Technology (ICT) infrastructure, and Internet of Things (IoT) technologies for manufacturing and production environments.",
  },
];

const whyChoose = [
  {
    n: "01",
    t: "Practical & Scalable Solutions",
    d: "Developing reliable, scalable, and future-ready solutions aligned with operational and infrastructure requirements.",
  },
  {
    n: "02",
    t: "Responsive Customer Support",
    d: "Providing responsive technical support, maintenance services, and operational assistance to ensure system reliability and business continuity.",
  },
  {
    n: "03",
    t: "Customer-Centric Collaboration",
    d: "Working closely with customers to understand operational challenges, deliver tailored solutions, and build long-term trusted partnerships.",
  },
  {
    n: "04",
    t: "Long-Term Service Commitment",
    d: "Committed to continuous support, system enhancement, and reliable service delivery that support sustainable operational performance and customer success.",
  },
  {
    n: "05",
    t: "Reliable Engineering Expertise",
    d: "Combining engineering knowledge, operational technologies, and smart integration capabilities to deliver practical and effective solutions.",
  },
  {
    n: "06",
    t: "Trusted Technology Partnership",
    d: "Building strong customer relationships through transparency, responsiveness, reliable delivery, and long-term collaboration.",
  },
];


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="border-b border-border overflow-hidden">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2 lg:min-h-[92vh]">
            {/* Left: text on clean background */}
            <div className="relative flex flex-col justify-end px-6 pb-14 pt-20 sm:px-10 md:pb-20 lg:px-16">
              <div className="vx-grid pointer-events-none absolute inset-0 opacity-20" />
              <div className="relative vx-reveal">
                <div className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-primary sm:text-base">
                  <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
                  <span>COMPANY_PROFILE / 2026 / REV.02</span>
                </div>
                <h1 className="mb-7 font-display text-[3rem] font-black uppercase leading-[0.92] tracking-tight sm:text-6xl md:mb-9 md:text-7xl lg:text-[5.5rem]">
                  Smart systems
                  <br />
                  for <span className="vx-gradient-text">real</span>
                  <br />
                  infrastructure.
                </h1>
                <p className="w-full text-base leading-relaxed text-muted-foreground md:text-lg">
                  Vertifex Technology specializes in smart integration solutions for
                  infrastructure and industrial environments. We deliver smart infrastructure
                  solutions covering Smart Transportation (Rail &amp; Highway), Information &amp;
                  Communication Technology (ICT) and Internet of Things (IoT) systems,
                  automation &amp; robotics, industrial operational technologies, and energy
                  solutions, supported by engineering consultancy services that drive
                  digitalization, intelligent connectivity, operational optimization,
                  infrastructure reliability, and sustainable green ecosystems.
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
              <div className="relative mt-8">
                <span className="rounded-sm border border-primary/40 bg-card px-3 py-2 text-sm font-bold uppercase tracking-widest text-primary">
                  Empowering Businesses Through Integrated Digital Solutions &amp; Smart Systems
                </span>
              </div>
            </div>
            {/* Right: hero image — no overlay */}
            <div className="relative min-h-[50vh] order-first lg:order-last">
              <img
                src={heroImage}
                alt="Futuristic white control room with floating dark surveillance and analytics panels"
                width={1920}
                height={1080}
                className="absolute inset-0 h-full w-full object-cover"
              />
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
                  Solution developer for infrastructure modernization and industrial digitalization
                  — built around real connectivity, operational efficiency, and sustainable development.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border lg:col-span-8 md:grid-cols-2">
                {aboutCards.map((item) => (
                  <div key={item.t} className="bg-card p-6 md:p-8">
                    <div className="text-sm font-bold text-primary">{item.k}</div>
                    <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight">
                      {item.t}
                    </h3>
                    {Array.isArray(item.d) ? (
                      <div className="mt-4 space-y-3">
                        {item.d.map((line, i) => (
                          <p key={i} className="flex gap-2.5 text-base leading-relaxed text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            {line}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.d}</p>
                    )}
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

        {/* 03 CAPABILITIES */}
        <section id="capabilities" className="mx-auto max-w-[1440px] border-b border-border">
          <div className="border-b border-border px-4 py-12 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 text-sm font-bold text-primary">// 03_CAPABILITIES</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                One integrator. <span className="vx-gradient-text">Three connected layers.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Smart transportation at the edge of infrastructure. Smart city intelligence across
                the urban layer. Information & Communication Technology (ICT) and Internet of Things (IoT) tying them into a single, observable system.
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
                  Supporting integrated operational environments through smart transportation,
                  smart city, Information & Communication Technology (ICT) and Internet of Things (IoT), energy solutions, and automation platforms.
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

          {/* Industries strip */}
          <div id="industries" className="grid border-t border-border lg:grid-cols-12">
            <div className="border-b border-border p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-10">
              <div className="text-sm font-bold text-primary">// 04_INDUSTRIES_WE_SUPPORT</div>
              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                Built for complex, connected, live environments.
              </h3>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                Seven sectors. The same engineered, integrated approach to every one.
              </p>
            </div>
            <div className="relative min-h-[260px] sm:min-h-[320px] lg:col-span-8">
              <img
                src={cityImage}
                alt="Aerial smart city with floating data analytics panels at twilight"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-px border-t border-border bg-border md:grid-cols-2 lg:grid-cols-3">
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

        {/* 05 WHY CHOOSE */}
        <section id="approach" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <div className="text-sm font-bold text-primary">// 05_WHY_CHOOSE_VERTIFEX</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Why teams pick <span className="vx-gradient-text">Vertifex</span>.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  An engineered, integrated and operationally-grounded approach — purpose-built for
                  smart infrastructure, digitalization and sustainable development.
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
          </div>
        </section>

        {/* 06 COMMITMENT */}
        <section className="relative border-b border-border bg-card/40">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-primary">// 06_OUR_COMMITMENT</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl md:text-[3.2rem]">
                  Reliable. Future-ready. <span className="vx-gradient-text">Integrated</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Vertifex Technology is committed to delivering reliable and future-ready smart
                  integration solutions that support operational excellence, infrastructure
                  reliability, sustainable development, and long-term customer partnerships.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={commitmentImage}
                    alt="Engineers collaborating around a translucent holographic infrastructure diagnostics panel"
                    width={1280}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 CONTACT */}
        <section id="contact" className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-24">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 text-sm font-bold text-primary">// 07_CONTACT</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-6xl">
                Build smarter,
                <br />
                <span className="vx-gradient-text">more connected</span> infrastructure.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Partner with Vertifex Technology to build smarter, more connected, and sustainable
                infrastructure through integrated technologies, engineering expertise, and reliable
                operational solutions.
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
                  <span>SMART CITY / INFORMATION &amp; COMMUNICATION TECHNOLOGY (ICT) / INTERNET OF THINGS (IoT)</span>
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

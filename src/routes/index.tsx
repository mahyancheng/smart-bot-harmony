import { createFileRoute } from "@tanstack/react-router";
import { useRef, useEffect, useState } from "react";
import heroImage from "@/assets/v2/hero-controlroom.png";
import transportImage from "@/assets/v2/cap-transport.png";
import cityImage from "@/assets/v2/cap-city.png";
import commitmentImage from "@/assets/v2/commitment.png";
import { SiteNav, SiteFooter } from "@/components/site-chrome";

// (Strip-2/3 centrepiece PNGs are still referenced by /public/control-room.html;
//  they're no longer imported here because the homepage now embeds that page.)

// ── Types ──────────────────────────────────────────────────────────────────
type StripItem =
  | { type: 'img';    src: string; featured?: boolean }
  | { type: 'iframe'; panelId: string };

// ── IframePanel — scaled by stripPx measured at the ScrollStrip container ─
// Root cause of previous "not scaling" bug: `height:100%` on a flex item
// inside a `width:max-content` marquee div does NOT inherit the strip height
// reliably (the flex chain height resolves as content-driven, making
// offsetHeight loop back to ~scale*PANEL_H and stabilise at 0.85×).
// Fix: measure the outer strip container (explicit height: Xvh) and pass px.
const PANEL_W = 340, PANEL_H = 300;
function IframePanel({ panelId, stripPx }: { panelId: string; stripPx: number }) {
  const scale = stripPx > 0 ? stripPx / PANEL_H : 0.9;
  const px    = Math.round(PANEL_W * scale);
  return (
    <div className="flex-shrink-0 overflow-hidden" style={{ width: px, height: '100%' }}>
      <iframe
        src={`/command_center.html?p=${panelId}`}
        scrolling="no"
        style={{
          width: `${PANEL_W}px`,
          height: `${PANEL_H}px`,
          border: 'none',
          display: 'block',
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

// ── ScrollStrip — continuously scrolling video wall strip ──────────────────
function ScrollStrip({
  items,
  direction = 'left',
  duration = '35s',
  flexGrow = 1,
  height,
}: {
  items: StripItem[];
  direction?: 'left' | 'right';
  duration?: string;
  flexGrow?: number;
  height?: string;          // explicit CSS height — overrides flex when set
}) {
  // Measure the outer container (which has an explicit height in vh) so we
  // can pass real pixels to every IframePanel.  ResizeObserver is used so
  // the value stays correct across window resizes.
  const containerRef = useRef<HTMLDivElement>(null);
  const [stripPx, setStripPx] = useState(0);
  useEffect(() => {
    if (!containerRef.current) return;
    const update = () => {
      if (containerRef.current) setStripPx(containerRef.current.offsetHeight);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const doubled = [...items, ...items];
  return (
    <div ref={containerRef} className="overflow-hidden w-full" style={height ? { height, minHeight: height } : { flex: flexGrow }}>
      <div
        className={direction === 'right' ? 'vx-marquee-rev' : 'vx-marquee'}
        style={{ animationDuration: duration, display: 'flex', height: '100%', gap: 0, width: 'max-content' }}
      >
        {doubled.map((item, i) =>
          item.type === 'iframe' ? (
            <IframePanel key={i} panelId={item.panelId} stripPx={stripPx} />
          ) : (
            /* natural-width container — image drives the width, no letterbox gaps */
            <div
              key={i}
              className={`flex-shrink-0 overflow-hidden${item.featured ? ' ring-[1.5px] ring-inset ring-primary/40' : ''}`}
              style={{ height: '100%' }}
            >
              <img
                src={item.src}
                alt=""
                style={{
                  height: '100%',
                  width: item.featured ? '42vw' : 'auto',
                  maxWidth: item.featured ? '42vw' : 'none',
                  objectFit: item.featured ? 'cover' : undefined,
                  display: 'block',
                }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

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

// Five service lines mirror the PDF's "TYPES OF SOLUTIONS" section
const services = [
  {
    code: "S.01",
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

// Two deployment domains mirror the PDF's top-level "SOLUTIONS" categories
const capabilities = [
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
    image: transportImage,
    alt: "Smart city transportation corridor with holographic data overlays, highway, rail, and green energy",
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
    image: cityImage,
    alt: "Aerial view of smart city at twilight with floating dark data surveillance panels",
  },
];

// Four technology themes draw from the PDF's "TYPES OF SOLUTIONS" inventory
const techPillars = [
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

// Six target sectors, mirroring the PDF's "INDUSTRIES WE SUPPORT" list
const industries = [
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

// Six value propositions mirror the PDF's "WE OFFER" list
const whyChoose = [
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


function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="border-b border-border">

          {/* ── 3D Operations Control Centre — responsive height across all devices ── */}
          {/*
            Heights tuned per breakpoint so the 3D scene reads well on every viewport:
              < 640px (mobile portrait):  55vh, min 360px — short enough to leave room for the hero copy
              640–1023 (tablet / landscape phone): 65vh
              ≥ 1024px (laptop / desktop): 85vh, capped at 820px
            Camera-z inside the iframe adapts to its own aspect via computeIdealZ().
          */}
          <div
            className="relative w-full bg-[#f4f7ff] h-[55vh] min-h-[360px] sm:h-[65vh] lg:h-[85vh] lg:max-h-[820px]"
          >
            <iframe
              src="/control-room.html"
              title="Vertifex Operations Control Centre"
              loading="eager"
              className="absolute inset-0 block h-full w-full border-0"
            />
          </div>

          {/* ── Opening text ── */}
          <div className="bg-background px-6 py-12 sm:px-10 md:py-16 lg:px-16">
            <div className="mx-auto max-w-[1440px]">
              <div className="vx-reveal">
                <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
                  <span>COMPANY_PROFILE / 2026 / REV.02</span>
                </div>
                <h1 className="mb-6 font-display text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem]">
                  Systems built
                  <br />
                  for <span className="vx-gradient-text">real</span>
                  <br />
                  operations.
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Smart integration solutions for infrastructure and industrial environments —
                  integrated smart technologies, infrastructure systems, automation, and
                  engineering solutions for connected and sustainable operational environments.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase">
                  <a href="#contact" className="vx-glow inline-flex items-center gap-2 bg-primary px-5 py-3 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                    Start a Project →
                  </a>
                  <a href="#services" className="inline-flex items-center gap-2 border border-border px-5 py-3 tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary">
                    Explore Services
                  </a>
                </div>
              </div>
              <div className="mt-8 border-l-2 border-primary pl-4">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  Empowering Businesses Through Integrated Digital Solutions &amp; Smart Systems
                </p>
              </div>
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
                  Infrastructure modernization and industrial digitalization through integrated
                  technologies and engineering expertise — practical, scalable, and future-ready.
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
                <div className="text-sm font-bold text-primary">// 02_TYPES_OF_SOLUTIONS</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Five solution lines.<br />
                  <span className="vx-gradient-text">One delivery model.</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Integrated infrastructure, automation and SCADA, energy, facility maintenance, and engineering consultancy — engineered, integrated, and supported as a single outcome.
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

        {/* 03 CAPABILITIES — Where we deploy */}
        <section id="capabilities" className="mx-auto max-w-[1440px] border-b border-border">
          <div className="border-b border-border px-4 py-12 sm:px-6 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 text-sm font-bold text-primary">// 03_WHERE_WE_DEPLOY</div>
              <h2 className="font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                Two deployment domains. <span className="vx-gradient-text">One integrator.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Infrastructure for transportation, utilities, public, and energy environments —
                and integrated technologies for industrial facilities, commercial buildings, smart
                buildings, and green city developments.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {capabilities.map((item) => (
              <article
                key={item.index}
                className="group border-b border-border bg-card/40 p-6 md:border-r md:p-8 last:md:border-r-0"
              >
                <div className="mb-4 text-sm font-bold text-primary">[ {item.index} ]</div>
                <div className="mb-6 aspect-[16/9] overflow-hidden rounded-sm border border-border bg-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1920}
                    height={1080}
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
                <ul className="mt-6 grid gap-2.5 border-t border-border pt-5 text-sm sm:grid-cols-2">
                  {item.items.map((sub) => (
                    <li key={sub} className="flex items-start gap-2.5">
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
                      <span className="text-foreground/85">{sub}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-border pt-4 text-xs font-bold uppercase tracking-widest text-primary/80 md:text-sm">
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
                Six sectors. The same engineered, integrated approach to every one.
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
                <div className="text-sm font-bold text-primary">// 05_WHAT_WE_OFFER</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  What teams get with <span className="vx-gradient-text">Vertifex</span>.
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Smart, integrated, innovation-driven technologies delivered as cost-effective,
                  scalable, sustainable, and open systems — built around your operations, not your vendors.
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
                  Reliable. Practical. <span className="vx-gradient-text">Future-ready</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                  Committed to delivering reliable, practical, and future-ready solutions that
                  support sustainable operations and long-term customer success.
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
                <span className="vx-gradient-text">more sustainable</span> operations.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Partner with Vertifex Technology to build smarter and more sustainable operational
                environments through integrated technologies and engineering expertise.
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

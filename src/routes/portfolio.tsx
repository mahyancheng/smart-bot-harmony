import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import bessImage from "@/assets/vx-bess.jpg";
import substationImage from "@/assets/vx-substation-real.jpg";
import controlsImage from "@/assets/vx-controls.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Vertifex Technology" },
      {
        name: "description",
        content:
          "Selected Vertifex Technology projects across robotics, smart solutions, ICT, IoT and energy storage system integration.",
      },
      { property: "og:title", content: "Portfolio — Vertifex Technology" },
      {
        property: "og:description",
        content:
          "Selected projects: 250kW / 514.4576 kWh battery energy storage system integration and more.",
      },
      { property: "og:image", content: bessImage },
    ],
  }),
  component: PortfolioPage,
});

const deliverables = [
  ["01", "Technical Feasibility Study", "Simulation-driven feasibility report covering load profile and system behaviour."],
  ["02", "Financial Modelling", "CAPEX, OPEX, payback time and IRR analysis to validate economic case."],
  ["03", "Technical Design", "System architecture, single-line diagrams and engineering drawings."],
  ["04", "Equipment Selection", "BESS, PCS, EMS, smart meters, switchgear and supporting equipment specified."],
  ["05", "Manufacturing & Integration", "BESS units, microgrid controller, smart meters and solar interface integrated."],
  ["06", "Factory Testing (FAT)", "Predefined working logic tested at factory before shipment."],
  ["07", "Onsite Commissioning (SAT)", "Site acceptance testing and commissioning of the complete system."],
  ["08", "Online Monitoring", "Remote monitoring through cloud platform and mobile applications."],
  ["09", "After-Sales Support", "Local + remote O&M including scheduled remote maintenance."],
];

const specs = [
  ["SYSTEM CAPACITY", "250 kW / 514.4576 kWh"],
  ["TOPOLOGY", "Modular BESS, 2× 125 kW / 257.2288 kWh"],
  ["MODE", "Grid-tied, peak shaving + load shifting"],
  ["PEAK SHAVING TARGET", "200 kW (Mon–Fri, 14:00–22:00)"],
  ["DEPTH OF DISCHARGE", "95%"],
  ["LIFE CYCLES", "6,000"],
  ["IP RATING", "IP55"],
  ["SYSTEM EFFICIENCY", "≥ 90%"],
  ["COOLING", "Liquid cooling"],
  ["COMMS PROTOCOL", "MODBUS-RTU / MODBUS-TCP"],
];

const scope = [
  "Battery Energy Storage System (BESS) integration",
  "Master EMS with microgrid controller",
  "SCADA, smart meters, 4G/5G router",
  "Cloud monitoring + mobile application",
  "Fire detection, alarm and automatic extinguishing",
  "Liquid cooling and battery management",
];

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="pt-14">
        {/* Header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-6 py-16 md:py-20">
            <div className="text-[10px] font-bold text-primary">// PORTFOLIO_INDEX</div>
            <h1 className="mt-4 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
              Selected projects.
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Real engineered systems — designed, integrated, commissioned, and supported by
              Vertifex Technology across robotics, smart solutions, energy and IoT.
            </p>
          </div>
        </section>

        {/* Featured project */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-6 py-12">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold">
              <span className="border border-primary px-2 py-1 text-primary">[ FEATURED ]</span>
              <span className="text-muted-foreground">CASE_001 // ENERGY_STORAGE</span>
              <span className="text-muted-foreground">// 2026</span>
            </div>
            <h2 className="mt-6 font-display text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
              250 kW / 514.4576 kWh
              <br />
              Energy Storage System.
            </h2>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              A grid-tied modular battery energy storage system engineered for an industrial client
              in Malaysia. Designed for peak shaving against the maximum demand window
              (Mon–Fri, 14:00–22:00), with self-consumption optimisation and load shifting handled
              by the master EMS.
            </p>
          </div>

          <div className="grid lg:grid-cols-12">
            <div className="relative min-h-[420px] lg:col-span-7">
              <img
                src={bessImage}
                alt="Outdoor industrial battery energy storage system cabinets"
                width={1600}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
            <div className="border-t border-border p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12">
              <div className="text-[10px] font-bold text-primary">// SYSTEM_SPECIFICATION</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
                Technical parameters
              </h3>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 text-xs">
                {specs.map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-3">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display font-bold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scope + Deliverables */}
          <div className="mx-auto grid max-w-[1440px] gap-px border-t border-border bg-border lg:grid-cols-12">
            <div className="bg-background p-8 lg:col-span-4 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// SCOPE</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
                Integrated scope
              </h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-4 text-[10px] uppercase text-muted-foreground">
                Working logic: load shifting, self-consumption optimisation, peak shaving.
              </div>
            </div>

            <div className="bg-background lg:col-span-8 p-8 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// DELIVERABLES</div>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">
                Project deliverables
              </h3>
              <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
                {deliverables.map(([n, t, d]) => (
                  <div key={n} className="bg-background p-5">
                    <div className="text-[10px] font-bold text-primary">[ {n} ]</div>
                    <div className="mt-2 font-display text-sm font-bold uppercase tracking-tight">
                      {t}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Warranty */}
          <div className="mx-auto max-w-[1440px] border-t border-border px-6 py-12">
            <div className="text-[10px] font-bold text-primary">// WARRANTY_TERMS</div>
            <div className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 text-xs">
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
          </div>
        </section>

        {/* Other capability cases */}
        <section className="mx-auto max-w-[1440px] border-b border-border px-6 py-16 md:py-20">
          <div className="text-[10px] font-bold text-primary">// CAPABILITY_CASES</div>
          <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
            Beyond a single project.
          </h2>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">
            {[
              {
                t: "Substation Inspection",
                d: "Quadruped robotic inspection cells deployed around live electrical infrastructure to remove humans from hazardous routines.",
                k: "ROBOTICS / ELECTRICAL",
                img: substationImage,
              },
              {
                t: "Smart Surveillance & ELV",
                d: "Integrated ELV, security, and surveillance packages — designed as one converged operational layer.",
                k: "SMART / ELV / SECURITY",
                img: controlsImage,
              },
              {
                t: "IoT & SCADA Integration",
                d: "Edge gateways, sensor networks, and SCADA integration that turn field data into operational intelligence.",
                k: "ICT / IOT / SCADA",
                img: bessImage,
              },
            ].map((c) => (
              <article key={c.t} className="bg-background p-6 md:p-8">
                <div className="aspect-[4/3] overflow-hidden border border-border bg-card">
                  <img
                    src={c.img}
                    alt={c.t}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-[10px] font-bold text-primary">{c.k}</div>
                <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight">
                  {c.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-[1440px] px-6 py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
                Have a project to scope?
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Energy storage, robotics, smart solutions, ICT, IoT — talk to Vertifex about
                structuring it end-to-end.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <a
                href="mailto:enquiries@vertifex.tech"
                className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Proposal →
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 border border-border px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
              >
                Company Profile →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

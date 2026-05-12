import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import heroImage from "@/assets/vx-robot-stairs.jpg";
import inspectImage from "@/assets/vx-robot-substation.jpg";
import substationImage from "@/assets/vx-substation-real.jpg";
import tunnelImage from "@/assets/vx-mine-tunnel.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Company Profile — Vertifex Technology" },
      {
        name: "description",
        content:
          "Vertifex Technology Sdn. Bhd. is a system integrator delivering robotics, smart solutions, ICT and IoT for industrial automation, inspection, and infrastructure operations.",
      },
      { property: "og:title", content: "Company Profile — Vertifex Technology" },
      {
        property: "og:description",
        content:
          "About Vertifex Technology — system integrators specialized in robotics, smart solutions, ICT, and IoT for automation.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: AboutPage,
});

const services = [
  {
    code: "S.01",
    title: "System Integration",
    desc: "Bringing mechanical, electrical, software, controls, and networking together as one operating system.",
  },
  {
    code: "S.02",
    title: "Design & Implementation",
    desc: "Engineering the technical solution end-to-end — from concept and architecture to physical implementation.",
  },
  {
    code: "S.03",
    title: "Project Management",
    desc: "Structured delivery with clear scope, milestones, and stakeholder coordination across disciplines.",
  },
  {
    code: "S.04",
    title: "Operation & Maintenance",
    desc: "Long-term operational support, preventive maintenance, and remote monitoring after handover.",
  },
];

const verticals = [
  {
    code: "V.01",
    title: "Robotics for Automation",
    desc: "Legged and mobile robotics deployed for remote and automated inspection in hazardous and hard-to-reach environments.",
  },
  {
    code: "V.02",
    title: "Smart Solutions",
    desc: "ELV, security, surveillance, building intelligence and energy systems integrated as one connected layer.",
  },
  {
    code: "V.03",
    title: "ICT",
    desc: "Networking, structured cabling, edge compute and integrated communications backbones for operational sites.",
  },
  {
    code: "V.04",
    title: "IoT",
    desc: "Sensor fabrics, SCADA integration, edge gateways, cloud platforms and visualised management dashboards.",
  },
];

const challenges = [
  ["01", "Hazardous Access", "Reduce human exposure to high-voltage, confined, and toxic environments."],
  ["02", "Manual Inspection Error", "Replace slow, error-prone visual checks with consistent automated inspection."],
  ["03", "Data Overload", "Translate raw field data into actionable, structured operational insight."],
  ["04", "Reactive Maintenance", "Move from reactive to predictive scheduling with automated condition monitoring."],
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="pt-14">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="flex flex-col justify-end border-b border-border p-8 lg:col-span-6 lg:border-r lg:border-b-0 lg:p-16">
              <div className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
                COMPANY_PROFILE / 2026
              </div>
              <h1 className="font-display text-5xl font-black uppercase leading-[0.86] tracking-tight md:text-7xl">
                We integrate
                <br />
                the automation
                <br />
                layer.
              </h1>
              <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                Vertifex Technology Sdn. Bhd. is a system integrator specialized in system
                integration, engineering, and robotics for automation. We combine smart solutions,
                ICT and IoT to enhance safety, efficiency, and operational reliability across
                industrial and infrastructure environments.
              </p>

              <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
                {[
                  ["FOUNDED_AS", "INTEGRATOR"],
                  ["DOMAIN", "INDUSTRIAL"],
                  ["DELIVERY", "END-TO-END"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-5">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-3 font-display text-lg font-bold text-primary">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] lg:col-span-6">
              <img
                src={heroImage}
                alt="Quadruped inspection robot navigating real outdoor terrain"
                width={1920}
                height={1080}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
            </div>
          </div>
        </section>

        {/* About / Focus / Mission */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-px bg-border md:grid-cols-3">
            {[
              {
                k: "// ABOUT_US",
                t: "About Us",
                d: "Vertifex Technology specialises in industrial transformation through integrated robotics, smart solutions, ICT and IoT — delivered as one engineered system rather than disconnected products.",
              },
              {
                k: "// FOCUS",
                t: "Focus",
                d: "Make advanced technology accessible. Intuitive solutions that surface actionable insights for safer decisions, better productivity, and measurable operational outcomes.",
              },
              {
                k: "// MISSION",
                t: "Mission",
                d: "Deliver end-to-end smart industrial solutions — from customisation and deployment through long-term support — that improve operational efficiency at scale.",
              },
            ].map((item) => (
              <div key={item.t} className="bg-background p-8 md:p-10">
                <div className="text-[10px] font-bold text-primary">{item.k}</div>
                <h2 className="mt-5 font-display text-3xl font-black uppercase tracking-tight">
                  {item.t}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-[1440px] border-b border-border px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="text-[10px] font-bold text-primary">// CORE_SERVICES</div>
            <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
              What we deliver.
            </h2>
          </div>
          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.code} className="bg-background p-6 md:p-8">
                <div className="text-[10px] font-bold text-primary">[ {s.code} ]</div>
                <h3 className="mt-5 font-display text-xl font-bold uppercase tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Verticals */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="border-b border-border p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// VERTICALS</div>
              <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
                Four integrated capability layers.
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Each layer is delivered with the engineering discipline of a system integrator —
                designed to interoperate, not to live as silos.
              </p>
            </div>
            <div className="grid lg:col-span-8 md:grid-cols-2">
              {verticals.map((v, i) => (
                <div
                  key={v.code}
                  className={`border-border p-6 md:p-8 ${i % 2 === 0 ? "md:border-r" : ""} ${i < verticals.length - 2 ? "border-b" : ""} `}
                >
                  <div className="text-[10px] font-bold text-primary">[ {v.code} ]</div>
                  <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Robotics highlight */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="relative min-h-[360px] lg:col-span-7">
              <img
                src={inspectImage}
                alt="Inspection robot operating around industrial infrastructure"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="border-l-0 border-t border-border p-8 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12">
              <div className="text-[10px] font-bold text-primary">// FLAGSHIP_PLATFORM</div>
              <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
                Legged robot for automated inspection.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                A field-ready quadruped platform engineered for remote and automated inspection in
                hazardous environments — substations, plants, tunnels, and confined infrastructure.
              </p>
              <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2 text-xs">
                {[
                  ["WEIGHT", "59 KG"],
                  ["RATED LOAD", "20 KG"],
                  ["WALKING SPEED", "4 M/S"],
                  ["GRADEABILITY", "45° SLOPE"],
                  ["IP RATING", "IP67"],
                  ["TEMP RANGE", "−20°C / 55°C"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background px-4 py-3">
                    <div className="text-[10px] text-muted-foreground">{k}</div>
                    <div className="mt-2 font-display font-bold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-border pt-4 text-[10px] uppercase text-muted-foreground">
                Sensor stack: PTZ camera, infrared thermometry, gas sensor, acoustic imaging, 3D
                mapping, optional robotic arm.
              </div>
            </div>
          </div>
        </section>

        {/* Operational Challenges */}
        <section className="mx-auto max-w-[1440px] px-6 py-16 md:py-20 border-b border-border">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-[10px] font-bold text-primary">// WHY_AUTOMATE</div>
              <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
                Operational challenges we solve.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Traditional inspection and manual monitoring expose teams to risk, miss subtle
                failure signals, and create reactive maintenance cycles. Automation flips the
                equation.
              </p>
            </div>
            <div className="grid gap-px border border-border bg-border lg:col-span-7 sm:grid-cols-2">
              {challenges.map(([n, t, d]) => (
                <div key={n} className="bg-background p-6">
                  <div className="text-xs font-bold text-primary">[ {n} ]</div>
                  <div className="mt-3 font-display text-lg font-bold uppercase tracking-tight">{t}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software / Platform */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="border-b border-border p-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-12">
              <div className="text-[10px] font-bold text-primary">// SOFTWARE_LAYER</div>
              <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
                SCADA + visualised management.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Real-time inspection monitoring, structured result management, dashboards and SCADA
                integration so robotic data is usable inside the operational stack you already run.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {[
                  "SCADA integration",
                  "Visualised management platform",
                  "Real-time inspection monitoring",
                  "Inspection result management",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[320px] lg:col-span-7">
              <img
                src={tunnelImage}
                alt="Field operator inside an underground operational tunnel"
                width={1920}
                height={1080}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Contact band */}
        <section className="mx-auto max-w-[1440px] px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="text-[10px] font-bold text-primary">// CONTACT</div>
              <h2 className="mt-4 font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
                Talk to an integrator.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Vertifex Technology Sdn. Bhd. — Business Development. Reach out for technical
                briefings, scoping, or proposal walk-throughs.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:enquiries@vertifex.tech"
                  className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Email Vertifex →
                </a>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 border border-border px-6 py-4 text-xs font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  View Portfolio →
                </Link>
              </div>
            </div>
            <div className="grid gap-px border border-border bg-border lg:col-span-5 text-xs">
              <div className="bg-background p-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">ENTITY</span>
                  <span>VERTIFEX TECHNOLOGY SDN. BHD.</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">FUNCTION</span>
                  <span>BUSINESS DEVELOPMENT</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">EMAIL</span>
                  <span className="text-primary">enquiries@vertifex.tech</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-muted-foreground">REGION</span>
                  <span>MALAYSIA</span>
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

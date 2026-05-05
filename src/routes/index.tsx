import { createFileRoute } from "@tanstack/react-router";
import heroRobot from "@/assets/hero-robot.jpg";
import cap1 from "@/assets/capability-1.jpg";
import cap2 from "@/assets/capability-2.jpg";
import cap3 from "@/assets/capability-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — Robotics & Engineering Automation" },
      {
        name: "description",
        content:
          "Vertifex Technology delivers robotics, control systems, and engineering integration for smarter, safer, more efficient operating environments.",
      },
      { property: "og:title", content: "Vertifex Technology — Engineered Precision" },
      {
        property: "og:description",
        content:
          "Robotics, electrical, mechanical, software & control system integration for mission-critical infrastructure.",
      },
      { property: "og:image", content: heroRobot },
      { name: "twitter:image", content: heroRobot },
    ],
  }),
  component: Index,
});

const capabilities = [
  {
    n: "01",
    title: "Kinetic Integration",
    desc: "Multi-axis robotic systems engineered for sub-millimeter precision in high-velocity production environments.",
    meta: ["LATENCY: < 2MS", "OP_STABLE"],
    img: cap1,
  },
  {
    n: "02",
    title: "Control Logic",
    desc: "PLC and software architectures that synchronize electrical, mechanical, and digital subsystems into one fail-safe grid.",
    meta: ["KERNEL: VX_CORE", "ENCRYPTED"],
    img: cap2,
  },
  {
    n: "03",
    title: "Field Maintenance",
    desc: "Installation, testing, and predictive diagnostic support for large-scale infrastructure and energy systems.",
    meta: ["UPTIME: 99.998%", "GLOBAL_REP"],
    img: cap3,
  },
];

const stats = [
  ["SYSTEMS_DESIGN", "104"],
  ["DEPLOYMENTS", "812"],
  ["ACTIVE_UNITS", "14k"],
  ["FAILURE_RATE", "0.01"],
  ["MTBF_HOURS", "48k"],
  ["TECH_TIER", "S++"],
];

const services = [
  "System Design",
  "Integration",
  "Installation",
  "Testing",
  "Maintenance",
  "Project Support",
  "Robotics",
  "Electrical",
  "Mechanical",
  "Software",
  "Control Systems",
  "Diagnostics",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 h-14">
          <div className="flex items-center gap-4">
            <span className="font-display font-black text-lg tracking-tighter">
              VERTIFEX_
            </span>
            <span className="hidden md:inline-block text-[10px] text-muted-foreground border border-border px-2 py-0.5">
              SYSTEM_READY // VER 4.0.2
            </span>
          </div>
          <div className="flex gap-4 md:gap-8 text-[11px] font-bold">
            <a href="#capabilities" className="hidden md:inline hover:text-primary transition-colors">
              01_CAPABILITIES
            </a>
            <a href="#systems" className="hidden md:inline hover:text-primary transition-colors">
              02_SYSTEMS
            </a>
            <a href="#contact" className="text-primary">
              [ INITIALIZE_PROJECT ]
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-14">
        {/* Hero */}
        <section className="relative border-b border-border overflow-hidden">
          <div className="grid lg:grid-cols-12 min-h-[80vh]">
            <div className="lg:col-span-7 p-8 lg:p-16 flex flex-col justify-end border-b lg:border-b-0 lg:border-r border-border">
              <div className="vx-reveal">
                <div className="mb-6 inline-flex items-center gap-2 text-primary text-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span>AUTONOMOUS_INFRASTRUCTURE</span>
                </div>
                <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] uppercase mb-8">
                  Engineered <br /> Precision.
                </h1>
                <p className="max-w-md text-muted-foreground text-sm leading-relaxed mb-12">
                  High-reliability robotics and control systems for mission-critical
                  infrastructure. Vertifex bridges the gap between physical mechanics and
                  digital intelligence.
                </p>
                <div className="flex gap-1 items-center">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-[10px] tracking-widest">SCROLL_FOR_SPECS</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 relative bg-card group min-h-[400px]">
              <img
                src={heroRobot}
                alt="Vertifex robotic arm operating in a precision manufacturing cell"
                width={1024}
                height={1280}
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 pointer-events-none lg:border-l border-border">
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-[10px] text-muted-foreground mb-1">MODULE_ID</div>
                  <div className="text-xs">VX-990-ARM</div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="text-[10px] text-muted-foreground mb-1">STATUS</div>
                  <div className="text-xs text-primary">● ONLINE</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee strip */}
        <section className="border-b border-border overflow-hidden">
          <div className="flex gap-8 py-4 px-6 text-[11px] text-muted-foreground whitespace-nowrap overflow-x-auto">
            {services.map((s) => (
              <span key={s} className="inline-flex items-center gap-2">
                <span className="text-primary">+</span>
                {s.toUpperCase()}
              </span>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section id="capabilities" className="max-w-[1440px] mx-auto">
          <div className="grid md:grid-cols-3 border-b border-border">
            {capabilities.map((c) => (
              <article
                key={c.n}
                className="p-8 md:p-10 border-b md:border-b-0 md:border-r last:border-r-0 border-border group"
              >
                <span className="text-primary text-xs mb-4 block font-bold">[ {c.n} ]</span>
                <h3 className="font-display text-2xl font-bold mb-4 uppercase tracking-tight">
                  {c.title}
                </h3>
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-card">
                  <img
                    src={c.img}
                    alt={c.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed mb-8">
                  {c.desc}
                </p>
                <div className="pt-4 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground">
                  <span>{c.meta[0]}</span>
                  <span>{c.meta[1]}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Standardized Reliability */}
        <section id="systems" className="py-24 px-6">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                  Standardized <span className="text-primary">Reliability</span>
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every installation follows the Vertifex Protocol. We don't just build
                  systems — we engineer certainty through rigorous testing and
                  stress-simulation of every mechanical joint and software line.
                </p>
              </div>
              <div className="text-left lg:text-right text-[10px] text-muted-foreground leading-loose">
                // REF_DOC: VX_ISO_9001_COMPLIANT
                <br />
                // UPDATED: 2026.05.05
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border border border-border">
              {stats.map(([label, value], i) => (
                <div
                  key={label}
                  className="bg-background p-6 aspect-square flex flex-col justify-between"
                >
                  <span className="text-[10px] text-muted-foreground">{label}</span>
                  <div
                    className={`text-4xl font-display font-bold italic ${
                      i === stats.length - 1 ? "text-primary" : ""
                    }`}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="border-t border-border">
          <div className="max-w-[1440px] mx-auto px-6 py-24 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-[10px] text-primary font-bold mb-4">
                // INITIALIZE_PROJECT
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Build the next <br />
                operating standard.
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mb-10">
                Tell us about your environment. Our engineers respond within 48 hours
                with a feasibility brief and a deployment timeline.
              </p>
              <a
                href="mailto:enquiries@vertifex.tech"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors"
              >
                Request Engagement →
              </a>
            </div>
            <div className="lg:col-span-5 border border-border p-8 space-y-4 text-xs">
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">RESPONSE_SLA</span>
                <span>≤ 48 HOURS</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">SCOPE</span>
                <span>DESIGN → MAINTAIN</span>
              </div>
              <div className="flex justify-between border-b border-border pb-3">
                <span className="text-muted-foreground">SECTORS</span>
                <span>INDUSTRIAL / ENERGY</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CONTACT</span>
                <span className="text-primary">enquiries@vertifex.tech</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2">
            <div className="font-display font-black text-2xl tracking-tighter">
              VERTIFEX_TECHNOLOGY
            </div>
            <div className="text-[10px] text-muted-foreground uppercase">
              Advancing Automation via Physical Logic
            </div>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <div className="text-[10px] text-muted-foreground mb-2">_CAPABILITIES</div>
              <ul className="text-xs font-bold space-y-1">
                <li>ROBOTICS</li>
                <li>CONTROL SYSTEMS</li>
                <li>INTEGRATION</li>
              </ul>
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground mb-2">_COMMS</div>
              <ul className="text-xs font-bold space-y-1">
                <li className="underline decoration-primary">enquiries@vertifex.tech</li>
                <li>+1 (000) 000 0000</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-[9px] text-muted-foreground">
          <span>© 2026 VERTIFEX TECHNOLOGY. ALL RIGHTS RESERVED.</span>
          <span>INFRASTRUCTURE AUTOMATION GROUP</span>
        </div>
      </footer>
    </div>
  );
}

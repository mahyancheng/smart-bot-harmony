import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/vertifex-hero.png";
import automationImage from "@/assets/vertifex-automation.png";
import substationImage from "@/assets/vertifex-substation.png";
import fieldImage from "@/assets/vertifex-field.png";
import robotUnitImage from "@/assets/vertifex-robot-unit.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — System Integration & Robotics" },
      {
        name: "description",
        content:
          "Vertifex Technology is a system integrator delivering engineering, robotics, and field-ready automation solutions across industrial and infrastructure environments.",
      },
      { property: "og:title", content: "Vertifex Technology — System Integration & Robotics" },
      {
        property: "og:description",
        content:
          "System integrators specializing in engineering, robotics, controls, installation, testing, and maintenance for automation projects.",
      },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

const serviceTags = [
  "System Integration",
  "Robotics Engineering",
  "Electrical Systems",
  "Mechanical Systems",
  "Control Panels",
  "Installation",
  "Testing & Commissioning",
  "Maintenance",
  "Asset Inspection",
  "Automation Support",
];

const capabilities = [
  {
    index: "01",
    title: "Robotics Deployment",
    description:
      "We integrate mobile and autonomous robotic systems into real operating environments with the mechanical, electrical, and software stack aligned from day one.",
    note: "SITE_READY // INTEGRATED",
    image: automationImage,
    alt: "Autonomous mobile robot operating inside an industrial facility",
  },
  {
    index: "02",
    title: "Infrastructure Engineering",
    description:
      "From substations and utility assets to inspection routes and field equipment, we engineer practical automation systems that improve visibility, safety, and uptime.",
    note: "GRID / FIELD / PLANT",
    image: substationImage,
    alt: "Electrical substation infrastructure representing engineered industrial systems",
  },
  {
    index: "03",
    title: "Operational Support",
    description:
      "Our scope extends through installation, testing, commissioning, maintenance, and technical support so every deployment performs reliably in live conditions.",
    note: "DEPLOY // TEST // MAINTAIN",
    image: fieldImage,
    alt: "Field technician inside an industrial tunnel environment",
  },
];

const metrics = [
  ["DISCIPLINES", "05"],
  ["DELIVERY", "END-TO-END"],
  ["FOCUS", "AUTOMATION"],
  ["SYSTEMS", "ROBOTIC + CONTROL"],
];

const sectors = [
  "Industrial Plants",
  "Utilities & Substations",
  "Infrastructure Assets",
  "Energy Operations",
  "Inspection & Maintenance Programs",
  "Automation Retrofits",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg font-black tracking-tight">VERTIFEX_</span>
            <span className="hidden border border-border px-2 py-0.5 text-[10px] text-muted-foreground md:inline-block">
              SYSTEMS INTEGRATOR // ONLINE
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-bold md:gap-8">
            <a href="#capabilities" className="hidden transition-colors hover:text-primary md:inline">
              01_CAPABILITIES
            </a>
            <a href="#sectors" className="hidden transition-colors hover:text-primary md:inline">
              02_SECTORS
            </a>
            <a href="#contact" className="text-primary">
              [ START_PROJECT ]
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-14">
        <section className="border-b border-border">
          <div className="grid min-h-[86vh] lg:grid-cols-12">
            <div className="flex flex-col justify-end border-b border-border p-8 lg:col-span-5 lg:border-r lg:border-b-0 lg:p-16">
              <div className="vx-reveal">
                <div className="mb-6 inline-flex items-center gap-2 text-sm text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>INTEGRATED_AUTOMATION_SYSTEMS</span>
                </div>
                <h1 className="mb-8 font-display text-5xl font-black uppercase leading-[0.84] tracking-tight md:text-7xl lg:text-8xl">
                  Systems built for
                  <br />
                  real operations.
                </h1>
                <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                  Vertifex Technology is a system integrator specialized in system integration,
                  engineering, and robotics for automation. We connect mechanical, electrical,
                  software, and control systems into dependable solutions for industrial and
                  infrastructure environments.
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

            <div className="relative min-h-[440px] lg:col-span-7">
              <img
                src={heroImage}
                alt="Engineer inspecting industrial piping and systems from above"
                width={1688}
                height={950}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/18 to-transparent" />
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

        <section id="capabilities" className="mx-auto max-w-[1440px]">
          <div className="border-b border-border px-6 py-16 md:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 text-[10px] font-bold text-primary">// CAPABILITY_STACK</div>
              <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
                System integration with engineering discipline.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Our background is system integration. That means every project is treated as one
                connected operating system — hardware, controls, software, field execution, and
                long-term support working together instead of in isolation.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3">
            {capabilities.map((item, index) => (
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
                    height={720}
                    loading={index === 0 ? "eager" : "lazy"}
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
        </section>

        <section id="sectors" className="border-b border-t border-border">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-12">
            <div className="border-b border-border p-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-10">
              <div className="text-[10px] font-bold text-primary">// APPLICATION_ENVIRONMENTS</div>
              <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
                Built for harsh, technical, and live environments.
              </h2>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {sectors.map((sector) => (
                  <li key={sector} className="flex items-start gap-3 border-b border-border/70 pb-3">
                    <span className="mt-1 text-primary">+</span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid lg:col-span-8 md:grid-cols-2">
              <div className="border-b border-border md:border-r md:border-b-0">
                <img
                  src={robotUnitImage}
                  alt="Quadruped robotic inspection unit on a neutral background"
                  width={569}
                  height={569}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover bg-card"
                />
              </div>
              <div className="grid gap-px bg-border">
                <div className="bg-background p-6">
                  <div className="mb-4 text-[10px] text-muted-foreground">DISCIPLINE_MATRIX</div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    We bridge robotics, controls, software, electrical integration, and field
                    execution to deliver automation systems that can be deployed, supported, and
                    scaled in operational settings.
                  </p>
                </div>
                <div className="bg-background p-6">
                  <div className="mb-4 text-[10px] text-muted-foreground">INTEGRATION_PRIORITY</div>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    Reliability matters as much as innovation. We focus on maintainable system
                    architecture, clear testing workflows, and practical support after handover.
                  </p>
                </div>
                <div className="bg-background p-0">
                  <img
                    src={substationImage}
                    alt="High-voltage infrastructure representing automation-ready utility assets"
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 text-[10px] font-bold text-primary">// WHY_VERTIFEX</div>
              <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-5xl">
                Integration first. Execution always.
              </h2>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
              <div className="bg-background p-6">
                <div className="text-[10px] text-muted-foreground">ENGINEERING</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  System architecture, controls thinking, and practical engineering coordination.
                </p>
              </div>
              <div className="bg-background p-6">
                <div className="text-[10px] text-muted-foreground">INSTALLATION</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  On-site deployment, setup, and integration of the full automation stack.
                </p>
              </div>
              <div className="bg-background p-6">
                <div className="text-[10px] text-muted-foreground">VALIDATION</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Structured testing, commissioning, and readiness checks before handover.
                </p>
              </div>
              <div className="bg-background p-6">
                <div className="text-[10px] text-muted-foreground">SUPPORT</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Maintenance and project support to keep systems stable after deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20 md:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="mb-4 text-[10px] font-bold text-primary">// START_PROJECT</div>
              <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
                Let’s engineer the automation layer properly.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
                If you need a system integrator for robotics, engineering, automation, testing, or
                field deployment support, Vertifex can help structure the solution from concept to
                operational delivery.
              </p>
              <a
                href="mailto:enquiries@vertifex.tech"
                className="mt-10 inline-flex items-center gap-3 bg-primary px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request Engagement →
              </a>
            </div>

            <div className="grid gap-px border border-border bg-border lg:col-span-5">
              <div className="bg-background p-5 text-xs">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">SCOPE</span>
                  <span>INTEGRATE → DEPLOY</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">SPECIALTY</span>
                  <span>ENGINEERING / ROBOTICS</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-b border-border pb-3">
                  <span className="text-muted-foreground">FOCUS</span>
                  <span>AUTOMATION SYSTEMS</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-muted-foreground">CONTACT</span>
                  <span className="text-primary">enquiries@vertifex.tech</span>
                </div>
              </div>
              <img
                src={fieldImage}
                alt="Field technician working inside an industrial operations tunnel"
                width={1200}
                height={800}
                loading="lazy"
                className="h-full max-h-[280px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="font-display text-2xl font-black tracking-tight">VERTIFEX_TECHNOLOGY</div>
            <div className="mt-2 text-[10px] uppercase text-muted-foreground">
              System Integration / Engineering / Robotics for Automation
            </div>
          </div>
          <div className="text-[10px] uppercase text-muted-foreground">
            © 2026 Vertifex Technology. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

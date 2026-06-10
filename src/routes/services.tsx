import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vertifex Technology" },
      {
        name: "description",
        content:
          "Five service lines from Vertifex Technology: Integrated Infrastructure, Automation & SCADA, Energy, Facility Maintenance, and Engineering Consultancy.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
              <span>// SERVICES</span>
            </div>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Five solution lines.
              <br />
              <span className="vx-gradient-text">One delivery model.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Integrated infrastructure, automation and SCADA, energy, facility maintenance, and
              engineering consultancy — engineered, integrated, and supported as a single outcome.
            </p>
          </div>
        </section>

        {/* SERVICE DETAIL CARDS — anchor links match each /services#slug */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-16">
            <div className="grid gap-12">
              {services.map((s, i) => (
                <article
                  key={s.code}
                  id={s.slug}
                  className="grid gap-8 border-b border-border pb-12 last:border-b-0 last:pb-0 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <div className="text-sm font-bold text-primary">[ {s.code} ]</div>
                    <h2 className="mt-3 font-display text-3xl font-black uppercase leading-tight tracking-tight md:text-4xl">
                      {s.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                      {s.desc}
                    </p>
                    <div className="mt-8 text-xs font-bold uppercase tracking-widest text-primary/70">
                      [ {String(i + 1).padStart(2, "0")} of {String(services.length).padStart(2, "0")} ]
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="rounded-sm border border-border bg-card p-7 md:p-8">
                      <div className="text-sm font-bold uppercase tracking-widest text-primary">
                        Capabilities
                      </div>
                      <ul className="mt-5 grid gap-3 md:grid-cols-2">
                        {s.capabilities.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-3 border-b border-border/60 pb-3 text-sm last:border-b-0 md:text-base"
                          >
                            <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                            <span className="text-foreground/90">{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-b border-border bg-card/30 px-4 py-14 sm:px-6 md:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <h2 className="font-display text-2xl font-black uppercase tracking-tight sm:text-3xl md:text-4xl">
                  Have a project in mind?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Walk us through your operational environment and we'll come back with an
                  engineered, integrated proposal.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  to="/contact"
                  className="vx-glow inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

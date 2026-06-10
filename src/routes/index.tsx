import { createFileRoute, Link } from "@tanstack/react-router";
import transportImage from "@/assets/v2/cap-transport.png";
import cityImage from "@/assets/v2/cap-city.png";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import {
  services,
  industries,
  whyChoose,
  contactDetails,
} from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vertifex Technology — Smart Integration Solutions" },
      {
        name: "description",
        content:
          "Smart integration solutions for infrastructure and industrial environments — integrated smart technologies, infrastructure systems, automation, and engineering solutions for connected and sustainable operations.",
      },
      { property: "og:title", content: "Vertifex Technology — Smart Integration Solutions" },
      {
        property: "og:description",
        content:
          "Solution developer for infrastructure modernization and industrial digitalization through integrated technologies and engineering expertise.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* ── HERO with the 3D Operations Control Centre ── */}
        <section className="border-b border-border">
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

          {/* Hero copy */}
          <div className="bg-background px-6 py-12 sm:px-10 md:py-16 lg:px-16">
            <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
                  <span>VERTIFEX TECHNOLOGY · SOLUTION PROVIDER</span>
                </div>
                <h1 className="mb-6 font-display text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem]">
                  Systems built
                  <br />
                  for <span className="vx-gradient-text">real</span>
                  <br />
                  operations.
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Smart integration solutions for infrastructure and industrial environments —
                  connected technologies, automation, and engineering delivered as a single
                  operational outcome.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase">
                  <Link
                    to="/contact"
                    className="vx-glow inline-flex items-center gap-2 bg-primary px-5 py-3 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Start a Project →
                  </Link>
                  <Link
                    to="/profile"
                    className="inline-flex items-center gap-2 border border-border px-5 py-3 tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    Company Profile
                  </Link>
                </div>
              </div>

              <aside className="lg:col-span-5">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-primary">
                    Empowering Businesses Through Integrated Digital Solutions &amp; Smart Systems
                  </p>
                </div>
                <ul className="mt-6 grid gap-3 text-sm">
                  {[
                    "Infrastructure modernization",
                    "Industrial digitalization",
                    "Sustainable green technologies",
                    "Engineering consultation & long-term support",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-b-0">
                      <span className="text-primary">+</span>
                      <span className="text-foreground/85">{line}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        {/* ── SERVICES (5 cards, link to /services) ── */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-primary">// SERVICES</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Five solution lines.
                  <br />
                  <span className="vx-gradient-text">One delivery model.</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Integrated infrastructure, automation &amp; SCADA, energy, facility maintenance,
                  and engineering consultancy — engineered, integrated, and supported.
                </p>
                <Link
                  to="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
                >
                  View all services →
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link
                  key={s.code}
                  to="/services"
                  hash={s.slug}
                  className="group block bg-card p-7 transition-colors hover:bg-card/60 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-primary">[ {s.code} ]</div>
                    <div className="vx-gradient-bar h-px w-10 transition-all group-hover:w-14" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-black uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.desc}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary/80 transition-colors group-hover:text-primary">
                    Read more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── DEPLOYMENT DOMAINS (visual split) ── */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 pt-14 pb-8 sm:px-6 md:pt-20">
            <div className="max-w-3xl">
              <div className="text-sm font-bold text-primary">// WHERE WE DEPLOY</div>
              <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                Two deployment domains.
                <br />
                <span className="vx-gradient-text">One integrator.</span>
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            {[
              {
                title: "Infrastructure Solutions",
                d: "Transportation, utilities & water, public infrastructure, and energy infrastructure.",
                image: transportImage,
                alt: "Smart transportation corridor with data overlays",
              },
              {
                title: "Industrial & Commercial",
                d: "Industrial facilities, commercial buildings, smart buildings, and green city developments.",
                image: cityImage,
                alt: "Aerial view of smart city at twilight",
              },
            ].map((c) => (
              <article key={c.title} className="group relative aspect-[16/10] overflow-hidden border-t border-border md:border-t-0 md:border-l md:first:border-l-0">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 text-white">
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight md:text-4xl">
                    {c.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
                    {c.d}
                  </p>
                  <Link
                    to="/profile"
                    hash="capabilities"
                    className="mt-5 inline-flex w-fit items-center gap-2 border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  >
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── INDUSTRIES PREVIEW ── */}
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20">
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="text-sm font-bold text-primary">// INDUSTRIES</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                  Six sectors.
                  <br />
                  <span className="vx-gradient-text">One integrated approach.</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Built for complex, connected, live environments across mobility, urban,
                  public, commercial, energy, and industrial sectors.
                </p>
                <Link
                  to="/industries"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
                >
                  View all industries →
                </Link>
              </div>
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, idx) => (
                <Link
                  key={ind.t}
                  to="/industries"
                  className="group block bg-card p-6 transition-colors hover:bg-card/70 md:p-8"
                >
                  <div className="text-sm font-bold text-primary">[ I.{String(idx + 1).padStart(2, "0")} ]</div>
                  <h3 className="mt-3 font-display text-lg font-black uppercase tracking-tight md:text-xl">
                    {ind.t}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY VERTIFEX (3 selected from whyChoose) ── */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 md:py-20">
            <div className="text-sm font-bold text-primary">// WHY VERTIFEX</div>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
              Engineered, integrated,
              <br />
              <span className="vx-gradient-text">operationally grounded</span>.
            </h2>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {whyChoose.slice(0, 3).map((w) => (
                <article key={w.n} className="bg-card p-7 md:p-8">
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

            <div className="mt-8">
              <Link
                to="/profile"
                hash="approach"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80"
              >
                See all six reasons →
              </Link>
            </div>
          </div>
        </section>

        {/* ── COMMITMENT BAND ── */}
        <section className="relative border-b border-border bg-card/40 px-4 py-14 sm:px-6 md:py-20">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px]">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div className="text-sm font-bold text-primary">// OUR COMMITMENT</div>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl md:text-[3rem]">
                  Reliable. Practical.{" "}
                  <span className="vx-gradient-text">Future-ready</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Committed to delivering reliable, practical, and future-ready solutions that
                  support sustainable operations and long-term customer success.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <Link
                  to="/profile"
                  className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  Full Profile
                </Link>
                <Link
                  to="/contact"
                  className="vx-glow inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT FOOTER STRIP ── */}
        <section className="px-4 py-12 sm:px-6 md:py-16">
          <div className="mx-auto grid max-w-[1440px] gap-8 text-sm md:grid-cols-3">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</div>
              <a href={`mailto:${contactDetails.email}`} className="mt-2 block font-bold text-primary hover:underline">
                {contactDetails.email}
              </a>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Web</div>
              <span className="mt-2 block font-bold">{contactDetails.website}</span>
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">LinkedIn</div>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block font-bold text-primary hover:underline"
              >
                Vertifex Technology ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

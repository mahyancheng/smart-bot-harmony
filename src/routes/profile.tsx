import { createFileRoute, Link } from "@tanstack/react-router";
import transportImage from "@/assets/v2/cap-transport.png";
import cityImage from "@/assets/v2/cap-city.png";
import commitmentImage from "@/assets/v2/commitment.png";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import {
  aboutCards,
  services,
  capabilities,
  industries,
  whyChoose,
  techPillars,
  contactDetails,
} from "@/lib/content";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Company Profile — Vertifex Technology" },
      {
        name: "description",
        content:
          "Official company profile of Vertifex Technology — smart infrastructure modernization and industrial digitalization through integrated technologies and engineering expertise.",
      },
      { property: "og:title", content: "Company Profile — Vertifex Technology" },
      {
        property: "og:description",
        content:
          "Company profile of Vertifex Technology: about, vision, mission, solutions, industries we support, and what we offer.",
      },
    ],
  }),
  component: ProfilePage,
});

const imageMap = {
  transport: transportImage,
  city: cityImage,
} as const;

function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
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

          <div className="bg-background px-6 py-12 sm:px-10 md:py-16 lg:px-16">
            <div className="mx-auto max-w-[1440px]">
              <div className="vx-reveal">
                <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
                  <span>COMPANY_PROFILE / 2026 / REV.04</span>
                </div>
                <h1 className="mb-6 font-display text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem]">
                  Systems built
                  <br />
                  for <span className="vx-gradient-text">real</span>
                  <br />
                  operations.
                </h1>
                <p className="max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Smart integration solutions for infrastructure and industrial
                  environments — integrated smart technologies, infrastructure
                  systems, automation, and engineering solutions for connected
                  and sustainable operational environments.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold uppercase">
                  <Link to="/contact" className="vx-glow inline-flex items-center gap-2 bg-primary px-5 py-3 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                    Start a Project →
                  </Link>
                  <Link to="/services" className="inline-flex items-center gap-2 border border-border px-5 py-3 tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary">
                    Explore Services
                  </Link>
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

        {/* 01 ABOUT */}
        <section id="about" className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="text-sm font-bold text-primary">// 01_ABOUT</div>
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

        {/* 02 TYPES OF SOLUTIONS */}
        <section id="solutions" className="border-b border-border">
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
                  Integrated infrastructure, automation and SCADA, energy, facility maintenance,
                  and engineering consultancy — engineered, integrated, and supported as a single outcome.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <Link key={s.code} to="/services" hash={s.slug} className="block bg-card p-7 transition-colors hover:bg-card/70 md:p-8">
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
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 03 WHERE WE DEPLOY */}
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
                    src={imageMap[item.imageKey]}
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

          {/* Technology stack */}
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
                  Four cross-cutting technology themes spanning integrated infrastructure,
                  sensing &amp; building systems, automation &amp; SCADA, and energy &amp; sustainability.
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
              <Link to="/industries" className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary transition-colors hover:text-primary/80">
                View all industries →
              </Link>
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

        {/* 05 WHAT WE OFFER */}
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

        {/* 07 CONTACT TEASER */}
        <section id="contact-teaser" className="relative overflow-hidden px-4 py-14 sm:px-6 md:py-24">
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
                <Link
                  to="/contact"
                  className="vx-glow inline-flex items-center gap-3 bg-primary px-7 py-4 tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Contact Us →
                </Link>
                <a
                  href={contactDetails.linkedin}
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
                  <span className="text-right font-bold">{contactDetails.entity}</span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">ADDRESS</span>
                  <span className="text-right leading-relaxed">
                    {contactDetails.address}
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">REGION</span>
                  <span>{contactDetails.region}</span>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-b border-border pb-3">
                  <span className="text-muted-foreground">EMAIL</span>
                  <a href={`mailto:${contactDetails.email}`} className="text-primary">
                    {contactDetails.email}
                  </a>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-muted-foreground">WEB</span>
                  <span>{contactDetails.website}</span>
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

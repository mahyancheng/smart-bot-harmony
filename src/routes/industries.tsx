import { createFileRoute, Link } from "@tanstack/react-router";
import cityImage from "@/assets/v2/cap-city.png";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { industries } from "@/lib/content";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Support — Vertifex Technology" },
      {
        name: "description",
        content:
          "Six sectors served by Vertifex Technology: Smart Transportation, Smart Cities, Government & Public Sector, Commercial & Smart Buildings, Energy & Utilities, and Industrial & Manufacturing.",
      },
    ],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="relative border-b border-border">
          <div className="absolute inset-0">
            <img
              src={cityImage}
              alt="Smart city aerial view"
              className="h-full w-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
          </div>
          <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
              <span>// INDUSTRIES WE SUPPORT</span>
            </div>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Six sectors.
              <br />
              <span className="vx-gradient-text">One integrator.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              The same engineered, integrated approach across mobility, urban, public,
              commercial, energy, and industrial environments.
            </p>
          </div>
        </section>

        {/* INDUSTRY GRID */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 md:py-20">
            <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, idx) => (
                <article
                  key={ind.t}
                  className="group bg-card p-7 transition-colors hover:bg-card/70 md:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-primary">
                      [ I.{String(idx + 1).padStart(2, "0")} ]
                    </div>
                    <div className="vx-gradient-bar h-px w-10" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-black uppercase tracking-tight md:text-2xl">
                    {ind.t}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {ind.d}
                  </p>
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
                  Working in a sector we serve?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Explore the full service lines or talk to us about your specific operational
                  environment.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-border bg-background px-5 py-3 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  View Services
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
      </main>

      <SiteFooter />
    </div>
  );
}

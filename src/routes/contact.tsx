import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { contactDetails } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vertifex Technology" },
      {
        name: "description",
        content:
          "Partner with Vertifex Technology to build smarter and more sustainable operational environments through integrated technologies and engineering expertise.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Build a mailto: link from the form values — works without any backend.
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const subject = encodeURIComponent(`Project enquiry — ${fd.get("company") || fd.get("name")}`);
    const bodyLines = [
      `Name: ${fd.get("name") || ""}`,
      `Company: ${fd.get("company") || ""}`,
      `Email: ${fd.get("email") || ""}`,
      `Phone: ${fd.get("phone") || ""}`,
      `Industry: ${fd.get("industry") || ""}`,
      "",
      "Project description:",
      String(fd.get("message") || ""),
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("idle"), 600);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <main className="overflow-x-hidden pt-14">
        {/* HERO */}
        <section className="relative border-b border-border overflow-hidden">
          <div className="vx-grid pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24">
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
              <span className="vx-gradient-bar h-2.5 w-2.5 rounded-full" />
              <span>// CONTACT</span>
            </div>
            <h1 className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Build smarter,
              <br />
              <span className="vx-gradient-text">more sustainable</span> operations.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Partner with Vertifex Technology to build smarter and more sustainable operational
              environments through integrated technologies and engineering expertise.
            </p>
          </div>
        </section>

        {/* CONTACT — form + details */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-[1440px] gap-px border-x border-border bg-border md:grid-cols-12">
            {/* Form */}
            <div className="bg-background p-6 sm:p-10 md:col-span-7 md:p-12">
              <div className="text-sm font-bold uppercase tracking-widest text-primary">
                // ENQUIRY
              </div>
              <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                Tell us about your project.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We'll route your enquiry to the right engineering team and come back with a scoped proposal.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label="Full Name" required />
                  <Field name="company" label="Company / Organization" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="email" label="Email" type="email" required />
                  <Field name="phone" label="Phone (optional)" type="tel" />
                </div>
                <Field name="industry" label="Industry / Sector" placeholder="e.g. Smart Transportation, Energy, Manufacturing" />

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Project Description <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Briefly describe your operational environment, scope, and timeline…"
                    className="mt-2 w-full resize-y border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="vx-glow inline-flex items-center gap-3 bg-primary px-7 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Opening email…" : "Send Enquiry →"}
                  </button>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                  >
                    Or email us directly ↗
                  </a>
                </div>
              </form>
            </div>

            {/* Details */}
            <aside className="bg-card p-6 sm:p-10 md:col-span-5 md:p-12">
              <div className="text-sm font-bold uppercase tracking-widest text-primary">
                // CONTACT INFORMATION
              </div>
              <h2 className="mt-3 font-display text-2xl font-black uppercase tracking-tight md:text-3xl">
                Get in touch.
              </h2>

              <dl className="mt-8 grid gap-6 text-sm">
                <DetailRow label="Entity">{contactDetails.entity}</DetailRow>
                <DetailRow label="Address">
                  16-1, Jalan SS19/6, SS19,
                  <br />
                  47500 Subang Jaya, Selangor.
                </DetailRow>
                <DetailRow label="Region">{contactDetails.region}</DetailRow>
                <DetailRow label="Email">
                  <a href={`mailto:${contactDetails.email}`} className="text-primary hover:underline">
                    {contactDetails.email}
                  </a>
                </DetailRow>
                <DetailRow label="Website">{contactDetails.website}</DetailRow>
                <DetailRow label="LinkedIn">
                  <a
                    href={contactDetails.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Vertifex Technology ↗
                  </a>
                </DetailRow>
              </dl>

              <div className="mt-10 border-t border-border pt-6">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Operating hours
                </p>
                <p className="mt-2 text-sm text-foreground/85">
                  Monday – Friday · 09:00 – 18:00 (MYT)
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  Explore Services
                </Link>
                <Link
                  to="/profile"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
                >
                  Company Profile
                </Link>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-border/60 pb-3">
      <dt className="font-bold uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="text-right leading-relaxed text-foreground/90">{children}</dd>
    </div>
  );
}

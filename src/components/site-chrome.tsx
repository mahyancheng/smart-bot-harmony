import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/profile", label: "Company Profile" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="flex items-center gap-2">
            <span className="vx-gradient-bar inline-block h-3.5 w-3.5 rounded-sm" />
            <span className="font-display text-lg font-black tracking-tight md:text-xl">
              VERTIFEX<span className="text-primary">_</span>
            </span>
          </span>
          <span className="hidden whitespace-nowrap border border-border bg-card/60 px-2.5 py-1 text-xs font-bold uppercase text-muted-foreground xl:inline-block">
            Solution Provider // Online
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-bold md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hidden whitespace-nowrap uppercase tracking-wider transition-colors hover:text-primary lg:inline-block [&.active]:text-primary"
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="hidden whitespace-nowrap border border-primary bg-primary/5 px-4 py-2 uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            [ Start Project ]
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center border border-border text-primary lg:hidden"
          >
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-4 bg-current" />
              <span className="block h-[2px] w-4 bg-current" />
              <span className="block h-[2px] w-4 bg-current" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/97 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-2 text-sm font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 uppercase tracking-wider transition-colors hover:text-primary [&.active]:text-primary"
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="py-3 text-primary"
            >
              [ Start Project ]
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto grid max-w-[1440px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="vx-gradient-bar inline-block h-3.5 w-3.5 rounded-sm" />
            <div className="font-display text-2xl font-black tracking-tight md:text-3xl">
              VERTIFEX<span className="text-primary">_TECHNOLOGY</span>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Smart integration solutions for infrastructure and industrial environments —
            integrated technologies, automation, and engineering for connected operations.
          </p>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Site</div>
          <ul className="mt-4 grid gap-2 text-sm font-bold">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="uppercase tracking-wider transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Contact</div>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="text-foreground/85">
              16-1, Jalan SS19/6, SS19,<br />
              47500 Subang Jaya, Selangor.
            </li>
            <li>
              <a href="mailto:info@vertifextechnology.com" className="text-primary normal-case hover:underline">
                info@vertifextechnology.com
              </a>
            </li>
            <li className="text-muted-foreground">www.vertifextechnology.com</li>
            <li>
              <a
                href="https://www.linkedin.com/company/vertifex-technology/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1440px] flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        <span>© 2026 Vertifex Technology Sdn. Bhd. All rights reserved.</span>
        <span>Empowering Businesses Through Integrated Digital Solutions &amp; Smart Systems</span>
      </div>
    </footer>
  );
}

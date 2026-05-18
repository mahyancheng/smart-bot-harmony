import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { href: "#profile", label: "01_PROFILE" },
  { href: "#services", label: "02_SERVICES" },
  { href: "#capabilities", label: "03_CAPABILITIES" },
  { href: "#industries", label: "04_INDUSTRIES" },
  { href: "#portfolio", label: "06_PORTFOLIO" },
  { href: "#contact", label: "09_CONTACT" },
];

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
            Solution Developer // Online
          </span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-bold md:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-primary lg:inline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="hidden whitespace-nowrap border border-primary bg-primary/5 px-4 py-2 uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-block"
          >
            [ Start Project ]
          </a>
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="py-3 text-primary"
            >
              [ Start Project ]
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/50 px-6 py-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="vx-gradient-bar inline-block h-3.5 w-3.5 rounded-sm" />
            <div className="font-display text-2xl font-black tracking-tight md:text-3xl">
              VERTIFEX<span className="text-primary">_TECHNOLOGY</span>
            </div>
          </div>
          <div className="mt-4 max-w-xl text-sm font-bold uppercase leading-relaxed text-muted-foreground">
            Solution Developer · Integrated Systems · Engineering Delivery · Project Management ·
            Operational Support · Technical Advisory · Automation · Robotics · ICT · IoT · Smart
            Infrastructure
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold uppercase text-muted-foreground md:items-end">
          <span>16-1, Jalan SS19/6, SS19, 47500 Subang Jaya, Selangor.</span>
          <span>
            <a href="mailto:yc@vertifextechnology.com" className="text-primary normal-case">
              yc@vertifextechnology.com
            </a>
            <span className="mx-2">·</span>
            www.vertifextechnology.com
          </span>
          <span>© 2026 Vertifex Technology Sdn. Bhd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

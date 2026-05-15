import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { href: "#profile", label: "01_PROFILE" },
  { href: "#capabilities", label: "02_CAPABILITIES" },
  { href: "#platform", label: "03_PLATFORM" },
  { href: "#portfolio", label: "04_PORTFOLIO" },
  { href: "#contact", label: "05_CONTACT" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 min-w-0">
          <span className="font-display text-base font-black tracking-tight md:text-lg">VERTIFEX_</span>
          <span className="hidden border border-border px-2 py-0.5 text-[10px] text-muted-foreground md:inline-block">
            SOLUTION DEVELOPER // ONLINE
          </span>
        </Link>
        <div className="flex items-center gap-3 text-[11px] font-bold md:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden transition-colors hover:text-primary lg:inline"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="hidden text-primary sm:inline">
            [ START_PROJECT ]
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
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-2 text-[12px] font-bold">
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
              [ START_PROJECT ]
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-display text-xl font-black tracking-tight md:text-2xl">VERTIFEX_TECHNOLOGY</div>
          <div className="mt-2 text-[10px] uppercase text-muted-foreground">
            Solution Developer / System Integration / Engineering / Robotics / Smart Solutions / ICT / IoT / Consultation / Specialist & Engineering Support
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[10px] uppercase text-muted-foreground md:items-end">
          <span>16-1, Jalan SS19/6, SS19, 47500 Subang Jaya, Selangor.</span>
          <span>yc@vertifextechnology.com</span>
          <span>© 2026 Vertifex Technology Sdn. Bhd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-4">
          <span className="font-display text-lg font-black tracking-tight">VERTIFEX_</span>
          <span className="hidden border border-border px-2 py-0.5 text-[10px] text-muted-foreground md:inline-block">
            SYSTEMS INTEGRATOR // ONLINE
          </span>
        </Link>
        <div className="flex items-center gap-4 text-[11px] font-bold md:gap-6">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="hidden transition-colors hover:text-primary md:inline [&.active]:text-primary"
          >
            01_INDEX
          </Link>
          <Link
            to="/about"
            className="hidden transition-colors hover:text-primary md:inline [&.active]:text-primary"
          >
            02_PROFILE
          </Link>
          <Link
            to="/portfolio"
            className="hidden transition-colors hover:text-primary md:inline [&.active]:text-primary"
          >
            03_PORTFOLIO
          </Link>
          <a href="mailto:enquiries@vertifex.tech" className="text-primary">
            [ START_PROJECT ]
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-display text-2xl font-black tracking-tight">VERTIFEX_TECHNOLOGY</div>
          <div className="mt-2 text-[10px] uppercase text-muted-foreground">
            System Integration / Engineering / Robotics / Smart Solutions / ICT / IoT
          </div>
        </div>
        <div className="flex flex-col gap-1 text-[10px] uppercase text-muted-foreground md:items-end">
          <span>enquiries@vertifex.tech</span>
          <span>© 2026 Vertifex Technology Sdn. Bhd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

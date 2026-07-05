"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/experiencia", label: "Experiencia" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/about", label: "Sobre mí" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-paper">
      <div className="flex h-16 items-center justify-between px-4 md:px-12">
        <Link
          href="/"
          className="font-ui text-sm font-medium uppercase tracking-[0.08em]"
          onClick={() => setOpen(false)}
        >
          Santiago Zin
        </Link>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-transform duration-100",
              open && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-opacity duration-100",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-ink transition-transform duration-100",
              open && "-translate-y-2 -rotate-45"
            )}
          />
        </button>

        <nav
          className={cn(
            "font-ui text-sm font-medium uppercase tracking-[0.06em]",
            open
              ? "fixed inset-0 top-16 z-40 flex flex-col bg-paper"
              : "hidden md:flex md:items-center md:gap-10"
          )}
        >
          {open && (
            <>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b-[3px] border-ink px-4 py-6 text-4xl font-display md:hidden",
                    pathname === link.href && "bg-signal text-paper"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contacto"
                className="border-b-[3px] border-ink px-4 py-6 text-4xl font-display md:hidden"
                onClick={() => setOpen(false)}
              >
                Contacto
              </a>
            </>
          )}

          {!open &&
            links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link hidden md:block",
                  pathname === link.href && "nav-link-active text-signal"
                )}
              >
                {link.label}
              </Link>
            ))}

          <a href="#contacto" className="nav-link hidden md:block">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

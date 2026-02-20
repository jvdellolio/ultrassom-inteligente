"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/maquinas", label: "Máquinas" },
  { href: "/sobre", label: "Sobre" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Fecha o menu quando mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Trava o scroll do body quando o menu estiver aberto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <span className="text-sm font-bold tracking-tight">UI</span>
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              Ultrassom <span className="text-blue-700">Inteligente</span>
            </p>
            <p className="text-xs text-slate-500">Orçamento por e-mail</p>
          </div>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contato"
            className="ml-2 inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
          >
            Solicitar orçamento
          </Link>
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {/* Ícone hambúrguer */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Overlay + Drawer mobile */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Fundo escuro */}
          <button
            className="absolute inset-0 bg-slate-900/40"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />

          {/* Painel */}
          <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl ring-1 ring-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <span className="text-sm font-bold tracking-tight">UI</span>
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-slate-900">
                    Ultrassom <span className="text-blue-700">Inteligente</span>
                  </p>
                  <p className="text-xs text-slate-500">Menu</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                aria-label="Fechar"
              >
                {/* X */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <nav className="px-3 py-3">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                      active
                        ? "bg-blue-50 text-blue-800 ring-1 ring-blue-100"
                        : "text-slate-800 hover:bg-slate-50"
                    )}
                  >
                    <span>{item.label}</span>
                    <span className="text-slate-400">›</span>
                  </Link>
                );
              })}

              <Link
                href="/contato"
                className="mt-3 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Solicitar orçamento
              </Link>

              <p className="mt-4 px-2 text-xs text-slate-500">
                Orçamentos e dúvidas são respondidos por e-mail.
              </p>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
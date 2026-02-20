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

  // Trava o scroll quando o menu abre (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        {/* MOBILE: flex (logo esquerda | botão direita) */}
        <div className="flex items-center justify-between md:hidden">
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

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* DESKTOP: grid (logo esquerda | nav centro | botão direita) */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
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

          <nav className="flex items-center gap-2">
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
          </nav>

          <div className="flex justify-end">
            <Link
              href="/contato"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>
      </div>

      {/* MENU MOBILE: FULL SCREEN, SEM VAZAR O SITE */}
      {open && (
        <div className="fixed inset-0 z-9999 md:hidden">
          {/* backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/50"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />

          {/* painel branco cobrindo a tela toda */}
          <div className="absolute inset-0 bg-white">
            {/* topo do menu */}
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
                className="rounded-lg border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50"
                aria-label="Fechar"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* links (lista limpa, sem “cartões” sobrepondo) */}
            <nav className="px-5 py-4">
              <ul className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
                {nav.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center justify-between px-4 py-4 text-base font-medium",
                          active ? "bg-blue-50 text-blue-800" : "bg-white text-slate-900"
                        )}
                      >
                        <span>{item.label}</span>
                        <span className="text-slate-400">›</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <Link
                href="/contato"
                className="mt-4 flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-4 text-base font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Solicitar orçamento
              </Link>

              <p className="mt-4 text-sm text-slate-500">
                Orçamentos e dúvidas são respondidos por e-mail.
              </p>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
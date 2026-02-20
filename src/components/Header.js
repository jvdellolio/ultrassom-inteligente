"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Sobre", href: "/sobre" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <Link href="/" className="text-base font-semibold tracking-tight text-slate-900">
        Ultrassom <span className="text-blue-600">Inteligente</span>
      </Link>

        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
          className={[
            "text-sm transition-colors",
            isActive
              ? "font-semibold text-blue-600"
              : "text-slate-600 hover:text-slate-900",
          ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contato"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Fazer orçamento
        </Link>

      </div>
    </header>
  );
}

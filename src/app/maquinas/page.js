import Image from "next/image";
import Link from "next/link";
import { machines } from "@/data/machines";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Máquinas
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Explore nossos modelos de ultrassom. Passe o mouse sobre um card para
          ver uma descrição rápida e acessar os detalhes.
        </p>
      </header>

      <section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((machine) => (
            <article
              key={machine.id}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              {/* Imagem */}
              <div className="relative aspect-4/3 bg-slate-50">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>

              {/* Nome (sempre visível) */}
              <div className="p-4">
                <h2 className="text-base font-semibold text-slate-900">
                  {machine.name}
                </h2>
              </div>

              {/* Overlay do hover (desktop). No mobile a gente resolve depois */}
              <div className="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-0 transition-opacity duration-200 md:group-hover:opacity-100">
                <div className="pointer-events-auto w-full p-4">
                  <p className="text-sm text-slate-100">
                    {machine.shortDescription}
                  </p>

                  <Link
                    href={`/maquinas/${machine.id}`}
                    className="mt-3 inline-block rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

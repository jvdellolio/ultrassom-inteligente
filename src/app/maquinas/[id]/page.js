import { machines } from "@/data/machines";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = await params;
  const machine = machines.find((m) => m.id === id);

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {machine?.name || "Máquina não encontrada"}
      </h1>

      <p className="mt-2 max-w-2xl text-slate-600">
        {machine?.shortDescription}
      </p>

      {/* Layout “produto”: imagem + texto lado a lado */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-start">
        {/* Imagem com “frame” (parece integrada, não um bloco solto) */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
          {machine?.image ? (
            <Image
              src={machine.image}
              alt={machine.name}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          ) : null}
        </div>

        {/* Conteúdo (card mais compacto e “comercial”) */}
        <section className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:max-w-md">
          <p className="text-sm leading-relaxed text-slate-600">
            {machine?.description || "Descrição não disponível"}
          </p>

          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {(machine?.highlights || []).map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`/contato?machine=${encodeURIComponent(machine?.name ?? "")}`}
              className="inline-block rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Fazer orçamento
            </a>

            <a
              href="/maquinas"
              className="inline-block rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
            >
              Voltar
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            Orçamentos via e-mail. Resposta rápida com opções adequadas à sua necessidade.
          </p>
        </section>
      </div>
    </main>
  );
}

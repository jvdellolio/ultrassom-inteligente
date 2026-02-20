export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">
      {/* Wrapper que garante simetria e espaçamento igual entre os blocos */}
      <div className="py-10 space-y-10">
        {/* HERO */}
        <section>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <p className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              Equipamentos de ultrassom • Orçamento por e-mail
            </p>

            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              {/* Texto */}
              <div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900">
                  Ultrassom Inteligente
                </h1>

                <p className="mb-8 max-w-xl text-lg text-slate-600">
                  Soluções em equipamentos de ultrassom com tecnologia,
                  confiabilidade e suporte especializado para clínicas e
                  profissionais da saúde.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="/maquinas"
                    className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Ver máquinas
                  </a>

                  <a
                    href="/contato"
                    className="rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50"
                  >
                    Solicitar orçamento
                  </a>
                </div>
              </div>

              {/* Placeholder visual (sem imagem ainda) */}
              <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
                <p className="mb-2 text-sm font-semibold text-slate-900">
                  Atendimento focado em orçamento
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Resposta rápida por e-mail</li>
                  <li>• Equipamentos com suporte e orientação</li>
                  <li>• Opções para diferentes necessidades</li>
                </ul>

                <div className="mt-6 rounded-lg bg-white p-4 ring-1 ring-slate-200">
                  <p className="text-xs font-medium text-slate-500">Exemplo</p>
                  <p className="mt-1 text-sm text-slate-700">
                    “Quero orçamento do modelo X para clínica Y…”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section>
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
            <h2 className="mb-4 text-2xl font-semibold text-slate-900">
              Sobre a Ultrassom Inteligente
            </h2>

            <p className="max-w-3xl text-slate-600">
              A Ultrassom Inteligente atua na comercialização de equipamentos de
              ultrassom, oferecendo soluções modernas, confiáveis e adequadas às
              necessidades de cada cliente. Nosso compromisso é entregar
              qualidade, suporte técnico e transparência em todo o processo de
              compra.
            </p>

            {/* (Opcional) Um preenchimento leve pra ficar mais “completo” sem virar textão */}
            <ul className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-3">
              <li className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                Atendimento consultivo
              </li>
              <li className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                Transparência no orçamento
              </li>
              <li className="rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                Suporte e orientação
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

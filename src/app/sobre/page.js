export const metadata = {
  title: "Sobre nós | Ultrassom Inteligente",
  description:
    "Conheça a Ultrassom Inteligente e nossa proposta de valor em equipamentos de ultrassom.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Sobre nós
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          A Ultrassom Inteligente atua na comercialização de equipamentos de
          ultrassom com foco em tecnologia, confiabilidade e suporte ao cliente.
          Este conteúdo é provisório e pode ser ajustado conforme as
          informações oficiais da empresa.
        </p>
      </div>

      {/* Hero card */}
      <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-10">
        <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
          Qualidade • Suporte • Transparência
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Nossa proposta
            </h2>
            <p className="mt-3 text-slate-600">
              Nosso objetivo é facilitar a escolha do equipamento ideal para
              cada necessidade, com orientações claras e um processo de
              orçamento simples. Trabalhamos para que clínicas e profissionais
              da saúde tenham acesso a soluções modernas e confiáveis.
            </p>

            <p className="mt-4 text-slate-600">
              Acreditamos que um bom atendimento começa com informação: por isso
              organizamos os modelos de forma objetiva e oferecemos um canal de
              contato direto para orçamento e dúvidas.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200">
            <h3 className="text-sm font-semibold text-slate-900">
              O que você pode esperar
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>Orientação para escolher o modelo mais adequado</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>Processo de orçamento simples, com retorno por e-mail</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-600" />
                <span>Atendimento claro e transparente do início ao fim</span>
              </li>
            </ul>

            <div className="mt-6 rounded-lg bg-white p-4 ring-1 ring-slate-200">
              <p className="text-xs font-medium text-slate-500">
                Observação
              </p>
              <p className="mt-1 text-sm text-slate-700">
                Este texto é genérico e pode ser adaptado com os dados reais da
                empresa (história, missão, localidade, diferenciais, etc.).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Missão",
            text: "Oferecer soluções em ultrassom com foco em qualidade, suporte e clareza no atendimento.",
          },
          {
            title: "Visão",
            text: "Ser referência em confiança e tecnologia na comercialização de equipamentos de ultrassom.",
          },
          {
            title: "Valores",
            text: "Transparência, responsabilidade, respeito ao cliente e compromisso com bons resultados.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <h3 className="text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Quer um orçamento?
          </h2>
          <p className="mt-2 text-slate-600">
            Envie sua solicitação e responderemos por e-mail.
          </p>
        </div>

        <a
          href="/contato"
          className="mt-5 inline-flex w-full justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 md:mt-0 md:w-auto"
        >
          Solicitar orçamento
        </a>
      </section>
    </main>
  );
}

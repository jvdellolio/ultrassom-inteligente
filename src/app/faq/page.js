export const metadata = {
  title: "Perguntas frequentes | Ultrassom Inteligente",
  description:
    "Respostas rápidas sobre orçamento, atendimento e equipamentos de ultrassom.",
};

const faqs = [
  {
    q: "Como funciona o orçamento?",
    a: "Você escolhe um modelo (ou descreve sua necessidade) e envia sua solicitação pelo formulário de contato. Retornaremos por e-mail com as informações e próximos passos.",
  },
  {
    q: "Preciso escolher uma máquina antes de pedir orçamento?",
    a: "Não. Você pode solicitar orçamento sem escolher um modelo específico. Se preferir, descreva sua necessidade e podemos orientar a melhor opção.",
  },
  {
    q: "Vocês oferecem suporte e orientação?",
    a: "Sim. Nosso atendimento é focado em orientar a escolha do equipamento e esclarecer dúvidas sobre aplicação e recursos. Detalhes específicos podem variar conforme o modelo.",
  },
  {
    q: "Em quanto tempo recebo retorno?",
    a: "Normalmente respondemos em curto prazo. Em períodos de alta demanda, o retorno pode levar um pouco mais. Se o assunto for urgente, mencione isso na mensagem.",
  },
  {
    q: "Vocês vendem para clínicas e profissionais autônomos?",
    a: "Sim. Atendemos clínicas, consultórios e profissionais, de acordo com a necessidade e o modelo de equipamento.",
  },
  {
    q: "Os valores ficam no site?",
    a: "No momento, os valores são tratados por orçamento (por e-mail) para garantir que a proposta considere a necessidade, disponibilidade e condições comerciais.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Perguntas frequentes
        </h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Aqui você encontra respostas rápidas sobre orçamento e atendimento.
          Este conteúdo é genérico e pode ser ajustado conforme a política da
          empresa.
        </p>
      </div>

      {/* FAQ list */}
      <section className="grid gap-4">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 open:ring-blue-200"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="text-base font-semibold text-slate-900">
                {item.q}
              </span>

              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 group-open:bg-blue-50 group-open:ring-blue-100">
                <span className="text-slate-700 group-open:text-blue-700">
                  +
                </span>
              </span>
            </summary>

            <div className="mt-3 text-sm leading-relaxed text-slate-600">
              {item.a}
            </div>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Não achou sua dúvida?
          </h2>
          <p className="mt-2 text-slate-600">
            Envie sua pergunta pelo formulário e responderemos por e-mail.
          </p>
        </div>

        <a
          href="/contato"
          className="mt-5 inline-flex w-full justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 md:mt-0 md:w-auto"
        >
          Falar com a equipe
        </a>
      </section>
    </main>
  );
}

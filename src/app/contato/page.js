import ContactForm from "./ContactForm";

export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const machine = sp?.machine ? decodeURIComponent(sp.machine) : "";

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold">Solicitar orçamento</h1>
      <p className="mt-2 text-slate-600">
        Envie sua solicitação e responderemos por e-mail.
      </p>

      {machine ? (
        <div className="mt-6 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Máquina selecionada:</span> {machine}
          </p>
        </div>
      ) : null}

      <ContactForm machine={machine} />
    </main>
  );
}

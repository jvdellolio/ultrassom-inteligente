"use client";

import { useActionState, useEffect, useMemo, useState } from "react";
import { useFormStatus } from "react-dom";
import { machines } from "@/data/machines";
import { sendBudgetEmail } from "./actions";

const initialState = { ok: null, message: "" };

function buildTemplate(selectedMachineName) {
  const header = selectedMachineName
    ? `Olá! Gostaria de solicitar orçamento para: ${selectedMachineName}`
    : "Olá! Gostaria de solicitar um orçamento.";

  const machineLine = selectedMachineName
    ? `Máquina: ${selectedMachineName}`
    : "Máquina de interesse: (selecione acima)";

  return `${header}

Informações:
- ${machineLine}
- Quantidade:
- Tipo de uso (clínica/hospital/outro):
- Cidade/Estado:
- Prazo:

Mensagem:
`;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-60"
    >
      {pending ? "Enviando..." : "Enviar orçamento"}
    </button>
  );
}

export default function ContactForm({ machine }) {
  const [state, formAction] = useActionState(sendBudgetEmail, initialState);

  // opções automáticas a partir do seu data/machines.js
  const machineOptions = useMemo(() => {
    return machines.map((m) => ({ id: m.id, name: m.name }));
  }, []);

  // máquina selecionada (começa com a que veio pela URL, se veio)
  const [selectedMachine, setSelectedMachine] = useState(machine || "");

  // mensagem controlada para atualizar quando trocar a máquina
  const [message, setMessage] = useState(() => buildTemplate(machine || ""));

  // se o usuário mexeu na mensagem manualmente, não sobrescrever automaticamente
  const [messageDirty, setMessageDirty] = useState(false);

  // se a prop "machine" mudar (ex: navegação), sincroniza seleção e template
  useEffect(() => {
    setSelectedMachine(machine || "");
    setMessageDirty(false);
    setMessage(buildTemplate(machine || ""));
  }, [machine]);

  // quando trocar a máquina no select:
  // - se o usuário não mexeu na mensagem, atualiza template
  useEffect(() => {
    if (!messageDirty) {
      setMessage(buildTemplate(selectedMachine));
    }
  }, [selectedMachine, messageDirty]);

  return (
    <form
      action={formAction}
      className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
    >
      {/* Feedback do servidor */}
      {state.ok === true && (
        <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm text-green-800 ring-1 ring-green-100">
          {state.message}
        </div>
      )}

      {state.ok === false && (
        <div className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-800 ring-1 ring-red-100">
          {state.message}
        </div>
      )}

      <label className="block">
        <span className="text-sm font-medium text-slate-900">Seu nome</span>
        <input
          name="name"
          required
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
          placeholder="Ex: João Vitor"
        />
      </label>

      <label className="mt-5 block">
        <span className="text-sm font-medium text-slate-900">Seu e-mail</span>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
          placeholder="voce@exemplo.com"
        />
      </label>

      {/* Select automatizado */}
      <label className="mt-5 block">
        <span className="text-sm font-medium text-slate-900">Máquina</span>
        <select
          name="machine"
          value={selectedMachine}
          onChange={(e) => setSelectedMachine(e.target.value)}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900"
        >
          <option value="">— Selecione uma máquina —</option>
          {machineOptions.map((m) => (
            <option key={m.id} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>

        {selectedMachine ? (
          <p className="mt-2 text-xs text-slate-500">
            Selecionada: <span className="font-medium">{selectedMachine}</span>
          </p>
        ) : (
          <p className="mt-2 text-xs text-slate-500">
            Se você veio da página de detalhes, a máquina aparece aqui automaticamente.
          </p>
        )}
      </label>

      {/* Mensagem com template automático */}
      <label className="mt-5 block">
        <span className="text-sm font-medium text-slate-900">Mensagem</span>
        <textarea
          name="message"
          required
          rows={9}
          value={message}
          onChange={(e) => {
            setMessageDirty(true);
            setMessage(e.target.value);
          }}
          className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2"
        />

        {!messageDirty ? (
          <p className="mt-2 text-xs text-slate-500">
            Template automático. Se você editar, ele não será sobrescrito ao trocar a máquina.
          </p>
        ) : (
          <button
            type="button"
            onClick={() => {
              setMessageDirty(false);
              setMessage(buildTemplate(selectedMachine));
            }}
            className="mt-2 text-xs font-medium text-blue-700 hover:text-blue-800"
          >
            Restaurar template automático
          </button>
        )}
      </label>

      <div className="mt-6 flex gap-3">
        <SubmitButton />
        <a
          href="/maquinas"
          className="rounded-md border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
        >
          Voltar
        </a>
      </div>
    </form>
  );
}

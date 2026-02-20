"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBudgetEmail(prevState, formData) {
  try {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const machine = String(formData.get("machine") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      return { ok: false, message: "Preencha todos os campos obrigatórios." };
    }

    const subject = machine
      ? `Orçamento - ${machine}`
      : "Solicitação de orçamento - Ultrassom Inteligente";

    const text = `
Nova solicitação de orçamento

Nome: ${name}
E-mail: ${email}
Máquina: ${machine || "Não informada"}

Mensagem:
${message}
    `.trim();

    await resend.emails.send({
      from: process.env.ORCAMENTO_FROM_EMAIL,
      to: process.env.ORCAMENTO_TO_EMAIL,
      replyTo: email,
      subject,
      text,
    });

    return { ok: true, message: "Orçamento enviado com sucesso!" };
  } catch (error) {
    return {
      ok: false,
      message: "Erro ao enviar o e-mail. Tente novamente.",
    };
  }
}

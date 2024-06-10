"use client";

import { FormEvent, useState } from "react";
import LoadingSpinner from "./loadingSpinner";

export default function ContactForm() {
  const [from, setFrom] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [text, setText] = useState<string>("");
  let [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const contactInfo = {
      name,
      from,
      subject,
      contact,
      text,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(contactInfo),
      });

      if (!response.ok) {
        console.log(response.body);
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Sua mensagem foi enviada com sucesso!");
      setLoading(false);
    } catch (error) {
      console.log(error);
      alert("Sua mensagem não foi enviada, por favor, tentar novamente!");
    }
  }

  return (
    <div className="flex flex-col justify-items-center items-center py-4 pb-8 md:pb-12 md:py-4  bg-slate-300/60">
      <div className="flex flex-col justify-center items-center px-2 mb-8">
        <div
          className="text-2xl p-4 md:text-4xl md:p-8 font-semibold text-primary "
          id="vamosconversar"
        >
          Vamos Conversar
        </div>
        <p className="text-center md:text-2xl">
          Estamos apenas a uma mensagem de distância.
        </p>
        <p className="text-center md:text-2xl">
          Preencha os campos ou mande um alô no Whatsapp!
        </p>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <form
            onSubmit={handleSubmit}
            id="formContact"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xl "
          >
            <input
              className="p-2 rounded-lg"
              type="text"
              name="name"
              value={name}
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="p-2 rounded-lg"
              type="email"
              name="email"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              className="p-2 rounded-lg"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              placeholder="Assunto da mensagem"
            />
            <input
              className="p-2 rounded-lg"
              type="text"
              required
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              name="contato"
              placeholder="Contato"
            />
            <textarea
              className="p-2 rounded-lg resize-none md:col-span-2"
              name="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              cols={30}
              rows={4}
              placeholder="Mensagem"
            ></textarea>
            <button
              className="justify-self-center md:col-span-2 px-12 py-4 bg-secundary text-slate-100 font-bold text-xl rounded-xl"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const userName = process.env.NEXT_PUBLIC_EMAIL_USER;
const userPassword = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
const emailHost = process.env.NEXT_PUBLIC_EMAIL_HOST;
const emailPort = Number(process.env.NEXT_PUBLIC_EMAIL_PORT);
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO;

const emailLayout = () => {};

export async function POST(req: NextRequest) {
  const {
    name,
    from: email,
    subject,
    contact,
    text: message,
  } = await req.json();

  const transporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: true,
    auth: {
      user: userName,
      pass: userPassword,
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: userName,
      to: userName,
      envelope: {
        from: email,
        to: emailTo
      },
      subject: `${name} entrou em contato pelo site! - ${subject}`,
      html: `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Contato do Site</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background-color: #0098DA;
                  color: #fff;
                  padding: 10px 20px;
                  text-align: center;
              }
              .content {
                  padding: 20px;
              }
              .content p {
                  margin: 0 0 10px;
              }
              .footer {
                  text-align: center;
                  padding: 10px;
                  font-size: 12px;
                  color: #777;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>Contato do Site</h1>
              </div>
              <div class="content">
                  <p><strong>Nome:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Assunto:</strong> ${subject}</p>
                  <p><strong>Contato:</strong> ${contact}</p>
                  <p><strong>Mensagem:</strong></p>
                  <p>${message}</p>
              </div>
              <div class="footer">
                  <p>Este é um e-mail automático enviado pelo site.</p>
              </div>
          </div>
      </body>
      </html>
        `,
    });

    return NextResponse.json(
      { message: "Email enviado com sucesso!", mailResponse: mail.response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      {
        error: "Erro ao enviar e-mail. Por favor, tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}

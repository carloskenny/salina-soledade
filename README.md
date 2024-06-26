# Site Institucional - Salina Soledade

O repositório é um projeto desenvolvido para atender a empresa Salina Soledade. Site Institucional, desenvolvido em NextJS utilizando alguns elementos do AntDesign e Tailwind na estilização.

## Visão Geral

O site tem uma página principal no modelo landingpage e outras páginas de apoio sobre a empresa e produtos. Tem um formulário de envio de contato pelo site e link para entrar em contato pelo whatsapp.

## Pré-requisitos

É importante ter as informações de e-mail para configuração:

- USERNAME
- PASSWORD
- URL SMTP
- PORT SMTP
- TELEFONE WHATSAPP

## Instalação

- Clonar o repositório:
- Crie o arquivo .env na raiz do projeto com as variáveis iguais ao arquivo .env.example
  
      - NEXT_PUBLIC_EMAIL_HOST: servidor smtp
          ex.: smtp.dominio.com
      - NEXT_PUBLIC_EMAIL_PORT: porta do servidor smtp (465 ou 587)
          ex.: 465
      - NEXT_PUBLIC_EMAIL_USER: email/user a ser utlizado para enviar as informações do formulário (Remetente)
          ex.: username@dominio.com.br
      - NEXT_PUBLIC_EMAIL_PASSWORD: senha do email/user
          ex.:
      - NEXT_PUBLIC_EMAIL_TO: endereços de email a enviar as informações (Destinatário) separado por vírgulas sem espaço.
          ex.: username1@dominio.com.br,username2@dominio.com.br

- Realizar a build do proejto
    docker compose build
- Iniciar o projeto em produção:
    docker compose up

## Contribuindo

Carlos Kenny
Jhunior Santos
Joe Silva
Vinicius Gonçalves

## Licença

Todos os Direitos Reservados
Salidade Soledade
CK Tecnologia e Gestão

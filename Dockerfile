# Usa a imagem oficial do Node.js versão LTS como base
FROM node:lts-alpine

# Diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de package.json e package-lock.json
COPY package.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os outros arquivos do projeto
COPY . .

# Compila o projeto Next.js para produção
RUN npm run build

# Expõe a porta 3000 usada pelo servidor Next.js
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start"]
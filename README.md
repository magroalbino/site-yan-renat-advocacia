# Yan Renat Advocacia e Consultoria Jurídica

## 📌 Descrição do Projeto
Site institucional do **Yan Renat Advocacia e Consultoria Jurídica**, desenvolvido com **HTML5, CSS3 e JavaScript puro**. O projeto tem como objetivo apresentar o escritório, suas áreas de atuação, artigos informativos e um canal de contato funcional.

O layout é **moderno, responsivo e otimizado para desktop e dispositivos móveis**, contando com menu hamburger em telas menores e botão flutuante de WhatsApp para contato rápido.

Os artigos jurídicos são carregados dinamicamente a partir de um **backend separado**, garantindo escalabilidade e facilidade de atualização de conteúdo.

---

## 🎯 Objetivos do Site
- Apresentar o escritório e sua proposta profissional
- Divulgar áreas de atuação e produtos jurídicos
- Publicar artigos jurídicos de forma dinâmica
- Facilitar o contato com clientes e interessados
- Garantir navegação simples, rápida e responsiva

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **HTML5** – Estrutura semântica do site
- **CSS3** – Estilização e responsividade
  - Estilos inline
  - Arquivo externo `styles.css`
- **JavaScript (Vanilla)**
  - Menu mobile (toggle)
  - Carregamento dinâmico de artigos
  - Feedback visual de envio do formulário

### Bibliotecas e Serviços
- **Font Awesome** – Ícones sociais e WhatsApp
- **Google Fonts** – Oswald, Roboto e Poppins
- **Formspree** – Envio de formulário de contato sem backend próprio

### Backend (Separado)
- **Node.js + MongoDB**
- Hospedado no **Vercel**
- Responsável por fornecer os artigos jurídicos via API REST

---

## 📂 Estrutura do Projeto

```
site-yan-renat-advocacia/
├── index.html       # Página inicial
├── artigos.html     # Página de leitura de artigos
├── scripts.js       # Menu, listagem de artigos e formulário de contato
├── styles.css       # Estilos globais
├── images/          # Imagens e favicon
├── vite.config.js   # Configuração do servidor e build multipágina
└── package.json     # Scripts e dependências
```

---

## ⚙️ Funcionalidades Principais

- Navegação suave por âncoras:
  - `#home`, `#sobre`, `#areas`, `#produtos`, `#artigos`, `#contato`
- Logo clicável com retorno ao topo da página
- Menu responsivo com botão hamburger em telas menores
- Banner principal (hero) com imagem de fundo e overlay
- Seções institucionais:
  - Sobre o escritório
  - Áreas de atuação
  - Produtos jurídicos
  - Artigos jurídicos
  - Contato
- Carregamento dinâmico de artigos via **fetch API**
- Formulário de contato funcional integrado ao **Formspree**
- Mensagem de sucesso após envio do formulário
- Botão flutuante de WhatsApp com link direto

---

## 🔗 Integrações

### API de Artigos Jurídicos
Os artigos são carregados dinamicamente a partir do backend:

```
GET https://site-backend-yan-renat-advocacia.vercel.app/api/artigos
```

Essa abordagem permite atualizar conteúdos jurídicos sem necessidade de alterações no frontend.

### Formulário de Contato
- Envio de mensagens via **Formspree**
- Destinatário: `yanrenat@gmail.com`
- Não requer backend próprio para o formulário

---

## 📱 Responsividade
- Layout adaptado para diferentes resoluções
- Menu mobile com toggle
- Botões e textos ajustados para leitura confortável em smartphones

---

## 🚀 Como Executar o Projeto Localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor local:

```bash
npm run dev
```

Para gerar os arquivos de publicação, execute:

```bash
npm run build
```

O Vite gera as duas páginas (`index.html` e `artigos.html`) na pasta `dist/`.

---

## 📄 Licença
Projeto de uso institucional e privado. Todos os direitos reservados ao **Yan Renat Advocacia e Consultoria Jurídica**.

---

## ✍️ Autor

**Yan Renat**  
Advocacia e Consultoria Jurídica

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

## 📂 Estrutura de Pastas

A estrutura do projeto foi organizada para manter clareza, escalabilidade e fácil manutenção:

```
site-yan-renat-advocacia/
├── public/
│   ├── index.html              # Página principal do site
│   ├── artigo.html             # Página individual de artigo
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css      # Estilos globais
│   │   ├── js/
│   │   │   └── scripts.js      # Scripts JavaScript
│   │   └── images/
│   │       ├── logo-yan-renat3.jpg
│   │       ├── banner-juridico3.jpg
│   │       └── favicon.ico
│   └── fonts/                  # (Opcional) Fontes locais
│
├── README.md                   # Documentação do projeto
└── .gitignore                  # Arquivos ignorados pelo Git
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
GET https://backend-yan-renat-advocacia.vercel.app/api/artigos
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

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/site-yan-renat-advocacia.git
```

2. Acesse a pasta do projeto:

```bash
cd site-yan-renat-advocacia
```

3. Abra o arquivo `index.html` no navegador

> Não é necessário servidor local para o frontend.

---

## 📄 Licença
Projeto de uso institucional e privado. Todos os direitos reservados ao **Yan Renat Advocacia e Consultoria Jurídica**.

---

## ✍️ Autor

**Yan Renat**  
Advocacia e Consultoria Jurídica


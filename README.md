# Portfolio — Next.js + Tailwind

Portfolio pessoal inspirado no estilo do Sawad.framer.website.

## Estrutura

```
portfolio/
├── app/
│   ├── globals.css       ← estilos globais + fontes
│   ├── layout.tsx        ← root layout (edite o <title>)
│   └── page.tsx          ← monta todos os componentes
├── components/
│   ├── Navbar.tsx        ← navegação fixa com scroll effect
│   ├── Hero.tsx          ← seção principal com nome + tagline
│   ├── About.tsx         ← sobre mim + foto + stats
│   ├── Projects.tsx      ← grid de projetos
│   ├── Skills.tsx        ← stack de tecnologias
│   ├── Contact.tsx       ← formulário de contato
│   └── Footer.tsx        ← rodapé
├── public/               ← coloque suas imagens aqui
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Como rodar

```bash
# 1. Instale as dependências
npm install

# 2. Rode em modo dev
npm run dev

# 3. Acesse http://localhost:3000
```

## Como personalizar

### 1. Seus dados pessoais

Faça busca global por `"Seu Nome"` e `"seuperfil"` e substitua pelos seus dados.

### 2. Projetos — `components/Projects.tsx`

Edite o array `projects` no topo do arquivo:

```ts
const projects = [
  {
    id: "01",
    title: "Nome do Projeto",
    category: "Categoria",
    description: "Descrição curta do projeto.",
    tags: ["React", "TypeScript"],
    link: "https://seu-projeto.com",
    image: "/project-1.jpg", // coloque em /public/
  },
  // ...
];
```

### 3. Skills — `components/Skills.tsx`

Edite o array `skillGroups`.

### 4. Estatísticas — `components/About.tsx`

Edite o array `stats` e a foto (descomente o `<img />`).

### 5. Links sociais

Atualize GitHub, LinkedIn, Twitter e Email no Navbar, Hero, Contact e Footer.

### 6. Formulário de contato

O formulário atualmente só faz `console.log`. Integre com:

- **Resend** (recomendado): https://resend.com
- **EmailJS**: https://emailjs.com
- **Formspree**: https://formspree.io

### 7. Cores

Edite `tailwind.config.js` — a cor de destaque é `#D094EA` (amarelo-limão).
Para mudar para azul, roxo, etc., substitua `#D094EA` globalmente.

### 8. Fontes

As fontes estão em `app/globals.css`. Atualmente: **Syne** (display) + **DM Sans** (corpo).
Para trocar, substitua o import do Google Fonts e as variáveis CSS.

## Deploy

```bash
# Vercel (recomendado — zero config)
npx vercel

# Ou build estático
npm run build
npm start
```

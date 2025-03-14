# NexoVendas - Sistema de Gestão Comercial

## 📋 Visão Geral
NexoVendas é um sistema moderno de gestão comercial desenvolvido com React e TypeScript, focado em proporcionar uma experiência completa de PDV (Ponto de Venda) com recursos fiscais integrados.

## 🚀 Tecnologias Utilizadas

### Core
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.2

### Estilização
- Tailwind CSS 3.4.1
- PostCSS 8.4.35
- Autoprefixer 10.4.18

### Roteamento
- React Router DOM 6.22.3

### Ícones
- Lucide React 0.344.0

### Fonte
- Inter (via Google Fonts)
  - Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## 🎨 Design System

### Cores
```css
/* Gradientes */
- Principal: from-violet-400 to-blue-500
- Botões: from-violet-500 to-blue-500
- Hover: from-violet-600 to-blue-600

/* Cores Sólidas */
- Texto Principal (Light): text-gray-900
- Texto Principal (Dark): text-white
- Texto Secundário (Light): text-gray-600
- Texto Secundário (Dark): text-gray-400
- Background (Light): bg-white
- Background (Dark): bg-gray-900
- Cards (Light): bg-white
- Cards (Dark): bg-gray-800/50
```

### Componentes Principais

#### Botão Primário
```css
.btn-primary {
  @apply px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg font-medium 
         hover:from-violet-600 hover:to-blue-600 transition-all duration-300 text-white;
}
```

#### Cards
```css
.feature-card {
  @apply p-6 rounded-xl bg-gray-800/50 border border-gray-700 
         hover:border-violet-500/50 transition-all duration-300;
}
```

#### Texto Gradiente
```css
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-blue-500;
}
```

### Logo
- Ícone: Zap do Lucide React
- Animação de pulso personalizada
- Efeito de brilho com gradiente

## 🗂 Estrutura do Projeto
```
src/
├── components/
│   └── ThemeToggle.tsx
├── hooks/
│   └── useTheme.tsx
├── pages/
│   ├── Home.tsx
│   ├── Login.tsx
│   └── Register.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🌙 Sistema de Temas
- Tema escuro como padrão
- Alternância suave entre temas
- Persistência da preferência do usuário
- Implementado via Context API

## 📱 Responsividade
- Design mobile-first
- Breakpoints principais:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px

## 🔧 Configuração e Instalação

1. Clone o repositório
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Build para produção
```bash
npm run build
```

## 🚢 Deploy

O sistema está configurado para deploy via Docker. Use o Dockerfile fornecido para criar a imagem.

```bash
# Build da imagem
docker build -t nexovendas .

# Executar o container
docker run -p 80:80 nexovendas
```
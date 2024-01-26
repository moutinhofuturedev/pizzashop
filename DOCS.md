# Doc de instalações do Pizza.shop Web

## Criando App React com Vite

```npm create vite@latest```

## Instalação do Shadcn/ui

Frameworks - **Vite**

1 - Instalando tailwindcss
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
2 - Editar tsconfig.json adcionando código
```{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```
3 - Atualiza arquivo vite.config.ts

```npm i -D @types/node```

```
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```
4 - Rodar CLI ( logo após será feita perguntas para configurar )

```
npx shadcn-ui@latest init
```

## Configurando ESLint e Prettier

Instale dependência do ESLint

```npm i -D eslint @rocketseat/eslint-config```

No arquivo .eslintrc acresente:

```
{
  "extends": [
    "@rocketseat/eslint-config/next", 
    "next/core-web-vitals"
  ]
}
```

Instale plugin do tailwind com prettier

```npm install -D prettier prettier-plugin-tailwindcss```

Crie o arquivo prettier.config.cjs

```
// prettier.config.cjs
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}
```

Instale plugin de ordenação de importação

```npm i -D eslint-plugin-simple-import-sort```

Acresente no arquivo .eslintrc.json:

```
"plugins": ["simple-import-sort"], 
    "rules": {
        "simple-import-sort/imports": "error"
    }
```
# QA Automation Engineer Portfolio

A single-page portfolio for a QA Automation Engineer—React, Vite, Tailwind CSS. Deploy-ready (static export).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`. Serve with any static host or:

```bash
npm run preview
```

## Hosting (free)

### Option 1: Vercel (recommended)

1. Create a free account at [vercel.com](https://vercel.com) (e.g. sign in with GitHub).
2. In the project folder, run:
   ```bash
   npx vercel
   ```
3. When prompted, log in in the browser if needed. Accept the default project settings (Vercel will detect Vite and use `dist`).
4. After deploy you’ll get a URL like `https://qa-portfolio-xxx.vercel.app`. Run `npx vercel --prod` to deploy to production.

### Option 2: Netlify

1. Create a free account at [netlify.com](https://netlify.com).
2. Either:
   - **Drag & drop:** Run `npm run build`, then drag the `dist` folder into [app.netlify.com/drop](https://app.netlify.com/drop), or
   - **CLI:** Run `npx netlify deploy --prod --dir=dist` and follow the prompts.
3. Set build command to `npm run build` and publish directory to `dist` if you connect a Git repo later.

## Edit content

- **[src/data/content.js](src/data/content.js)** — Projects, awards, skills, contact (email, LinkedIn). Update these with your real details.

## Features

- Hero, About/Skills, Projects, How I Test, Awards, Contact
- Dark/light theme (toggle in header)
- Responsive layout and mobile nav
- DM Sans + JetBrains Mono typography
- No lorem ipsum; all copy from your brief

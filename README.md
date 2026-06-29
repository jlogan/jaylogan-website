# Jay Logan — Portfolio

Personal portfolio site for [jaylogan.dev](https://jaylogan.dev), highlighting selected case studies, web leadership experience, and hands-on React/WordPress work.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) and Radix UI primitives
- [React Router](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Local development

Requirements: Node.js 18+ and npm.

```sh
git clone git@github.com:jlogan/jaylogan-website.git
cd jaylogan-website
npm install
npm run dev
```

The Vite dev server runs at `http://localhost:8080`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run build:dev` | Create a development-mode build |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
src/
  assets/       # Images and static media
  components/   # Reusable UI and page sections
  hooks/        # Shared React hooks
  lib/          # Utility helpers
  pages/        # Route-level pages and case studies
public/         # Static files served directly
```

## Deployment

Build the site with:

```sh
npm run build
```

Deploy the generated `dist/` directory to any static hosting provider.

## License

Private portfolio project. All rights reserved unless otherwise noted.

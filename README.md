# Landunika Rasadhi — Portfolio

Personal portfolio site for **Landunika Rasadhi**, Software Engineer (AI & Full-Stack).

Built with React, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router, and Lucide.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Update your personal links

Edit `src/data/site.ts`:

- `github` — replace `YOUR_GITHUB_USERNAME`
- `linkedin` — replace `YOUR_LINKEDIN_USERNAME`
- `email` — already set from your local git identity; change if needed

Project GitHub and demo URLs live in `src/data/projects.ts`. Leave them unset until you have real links. The UI will show “URL pending” instead of inventing addresses.

Replace `public/Landunika-Rasadhi-CV.pdf` with your designed CV when ready. Regenerate the included draft with:

```bash
python scripts/generate-cv.py
```

## Contact form

The form validates in the browser.

- **Default:** opens the visitor’s email client (`mailto:`) with the message filled in.
- **Optional backend-less delivery:** create a form at [Formspree](https://formspree.io), copy `.env.example` to `.env`, and set `VITE_FORMSPREE_ID`.

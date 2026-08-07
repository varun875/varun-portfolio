# Varun P — Writer Portfolio

Personal portfolio website for **Varun P**, Senior Content Writer at [GizmoGeekHub](https://gizmogeekhub.com/).

**Live site:** [varun875.github.io/varun-portfolio](https://varun875.github.io/varun-portfolio/)

## Tech Stack

- **React 18** with Vite
- **Lucide React** icons
- **Google Fonts** (Playfair Display, Plus Jakarta Sans, Newsreader)
- **GitHub Pages** via GitHub Actions

## Features

- Dark / Paper theme toggle with localStorage persistence
- Featured article spotlight with cover images
- Searchable article grid with category badges
- Article reader modal with table of contents
- Contact / commission request modal
- Bookmark system with localStorage sync
- Floating scroll-to-top button
- Responsive design (mobile, tablet, desktop)
- OpenGraph & Twitter Card social previews

## Development

```bash
npm install
npm run dev       # Start dev server on port 3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages automatically.

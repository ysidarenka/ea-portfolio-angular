# Enterprise Architect — Angular Portfolio (Static Site)

A modern, clean, JSON-driven personal website for an Enterprise Architect.  
Built with **Angular standalone components**, **Tailwind CSS**, and **Azure Storage Static Website** hosting in mind.

## Quick start
```bash
# 1) Install Node 18+ and npm
# 2) In this folder:
npm install
npm run start    # dev server on http://localhost:4200
# or build
npm run build    # output in dist/ea-portfolio-angular
```

## Update your content
Edit files in `src/assets/`:
- `site.json` — site-wide settings (name, role, links, theme).
- `resume.json` — summary, experience, education, skills, certifications.
- `achievements.json` — awards, talks, publications, patents.
- `projects.json` — featured projects / case studies.
- Put images into `src/assets/images/` and reference them in JSON via `./assets/images/...`.

## Azure Storage Static Website
1. Build the app: `npm run build`.
2. In your Storage Account → **Static website** → Enable. Set:
   - **Index document name**: `index.html`
   - **Error document path**: `404.html`
3. Upload the contents of `dist/ea-portfolio-angular/browser/` to `$web` container.
4. (Optional) Add Azure CDN/Front Door and custom domain + HTTPS.

> SPA routing note: we include `404.html` to safely route deep links back to your Angular app.

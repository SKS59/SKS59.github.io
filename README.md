# Sohil Sarode · Portfolio

Static portfolio for GitHub Pages. No build step.

## Structure

```
sohil-portfolio/
├── index.html        # Page structure and section shells
├── css/style.css     # Editorial dark theme, layout, motion
├── js/data.js        # ALL content (edit this to change text, links, projects)
├── js/main.js        # Renders data.js into the page, scroll reveals, active nav
└── assets/profile.png
```

## Edit content

Open `js/data.js`. Experience, skills, projects, education, certifications,
awards, languages and social links are all arrays there.

Tech logos come from [Simple Icons](https://simpleicons.org) via `cdn.simpleicons.org`.
Set `logo` to the slug shown on the Simple Icons site, or `null` for text only.

## Deploy to GitHub Pages

1. Create a repo named `SKS59.github.io` (public).
2. Upload everything in this folder to the **root** of the repo.
   Keep `index.html` at the top level, not inside a subfolder.
3. Settings → Pages → Source: **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → Save.
4. Visit https://sks59.github.io after a minute or two.

Command-line alternative:

```bash
cd sohil-portfolio
git init && git add . && git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/SKS59/SKS59.github.io.git
git push -u origin main
```

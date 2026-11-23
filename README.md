# LEXA Connective Commons

Single-page company site for LEXA: introduction, solutions, founders and contact, as anchored sections on one page.

## Stack

React 19 + Vite, Tailwind CSS v4, lucide-react icons. Client-side rendered; the page title and share-preview tags are in `index.html`.

## Getting started

Requires Node.js 22+ (or Bun).

```sh
npm install      # or: bun install
npm run dev      # → http://localhost:5173
```

| Script            | What it does                                       |
| ----------------- | -------------------------------------------------- |
| `dev`             | Start the dev server                               |
| `build`           | Production build into `dist/` (plain static files) |
| `preview`         | Serve the production build locally                 |
| `typecheck`       | TypeScript check                                   |
| `test`            | Run the tests once                                 |
| `lint` / `format` | ESLint / Prettier                                  |

Deploy the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel...).

## Images

Put these files in `src/assets/` (imported by `src/App.tsx`):

| File                      | Used for                        |
| ------------------------- | ------------------------------- |
| `lexa-logo.png`           | Logo (header and footer)        |
| `gracious-opara.png`      | Founder photo, Gracious Opara   |
| `emmanuel-ndon.png`       | Founder photo, Emmanuel Ndon    |
| `teams-contact-qr.png`    | Microsoft Teams contact QR code |
| `whatsapp-contact-qr.png` | WhatsApp contact QR code        |

## Contact links

- Teams: https://teams.live.com/l/invite/FEAtn8-biVSW5U43g?v=g1
- WhatsApp: https://wa.me/message/HPVPMZBC2SY3J1

## Where things are

- `src/App.tsx`: all page content and sections
- `src/styles.css`: colour tokens and custom styles
- `src/components/Button.tsx`: the button / link-button styles
- `index.html`: title, description, social tags, favicon

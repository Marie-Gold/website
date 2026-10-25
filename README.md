# Marie-Gold — website

Source of [marie-gold.com](https://marie-gold.com). Next.js, deployed on Vercel. French and English.

![marie-gold.com](docs/screenshot.jpg)

## Sections

| Section | Route | What it shows |
|---|---|---|
| Home | `/` | Hero, socials, latest release pop-up |
| Bio | `/bio` | Biography |
| Music | `/musique` | Albums, singles, where to listen |
| Shows | `/spectacles` | Past and upcoming shows |
| Video | `/video` | Clips, short films, rap battles |
| Press | `/presse` | Press quotes, mentions, press kit |
| Recognition | `/reconnaissance` | Awards, grants, partners |
| Writing | `/ecriture` | Poems, Substack |

Text and links live in `src/data/` (`content.ts`, `translations.ts`). Pages are in `src/app/`, sections in `src/components/`.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

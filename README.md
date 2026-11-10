# Manash Khati: case study site

Swiss-style case study site built with Next.js (App Router), TypeScript and Tailwind CSS. No UI library. The only extra package is [Lenis](https://lenis.darkroom.engineering) for smooth scroll (`components/SmoothScroll.tsx`); it switches itself off for visitors who prefer reduced motion. To remove it, delete that component, its line in `app/layout.tsx` and the `lenis` dependency.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Edit content

All text lives in **`content/projects.ts`**:

- `site`: your email, the About paragraphs (`about`), social links, the "More projects" URL and the meta description.
- `projects`: one object per case study. Add, remove or reorder objects and the home list, detail pages and "Next project" links update on their own. `slug` becomes the URL (`/work/<slug>`).

### Placeholders

Any value in `[BRACKETS]` shows on the site as red dashed text, so you can spot it. Replace the whole bracketed text with your real value. To find what is left, search the file for `[`.

All placeholders are filled. Optional: add screenshots (below). If you add a new project, copy an existing object and replace its values; any `[BRACKETED]` value you leave in will show as red dashed text.

### Screenshots

Put images in `public/screenshots/`, then add them to a project:

```ts
screenshots: [
  { src: "/screenshots/shopqr-1.png", alt: "ShopQR catalog on a phone", width: 1440, height: 900 },
],
```

The Screenshots section only appears when a project has at least one.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New, Project**, import the repository. Framework preset: Next.js. Keep the defaults.
3. Under **Environment Variables** add `NEXT_PUBLIC_SITE_URL` with your live address, for example `https://your-site.vercel.app`. It is used for Open Graph and canonical URLs.
4. Click **Deploy**. Every push to `main` redeploys.

## Checks before launch

- Search `content/projects.ts` for `[` and fill every placeholder.
- Run Lighthouse in Chrome DevTools on the home page and one case study, in mobile mode.
- Test at 360px width and with the keyboard (Tab to move, focus ring should always be visible).

## License

MIT

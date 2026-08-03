# Field & Form — starter storefront

A Next.js ecommerce catalog: browse products, filter by category, add to a
cart. No payment/checkout wired up yet — that's intentional, add it once
you're ready.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you should see the store running.

## What's inside

- `app/` — pages (App Router): home, `/products`, `/products/[slug]`, `/cart`, `/about`
- `components/` — Header, Footer, ProductCard, CartProvider (cart state)
- `lib/products.ts` — **your product catalog**. Right now it's 6 placeholder
  products with Unsplash stock photos. Replace with your real products,
  prices, and photos.
- `lib/types.ts` — the `Product` and `CartItem` shapes

The cart is currently in-memory (React state) — it resets on page refresh.
That's fine for a demo/catalog stage; once you add real checkout you'll want
to persist it (e.g. localStorage, or a backend cart).

## Customize it

- **Products**: edit `lib/products.ts` directly, or swap it for data fetched
  from a headless CMS / database later.
- **Branding**: site name is "Field & Form" in `components/Header.tsx`,
  `components/Footer.tsx`, and `app/layout.tsx` — search-and-replace it.
- **Colors/fonts**: see the token comments in `tailwind.config.ts`
  (`ink`, `gold`, `mist`, etc.) and the font imports in `app/layout.tsx`.
- **Images**: currently pointed at `images.unsplash.com` as placeholders —
  replace with your own product photos (add them to `public/` and update
  `lib/products.ts`, or use another image host and add its domain to
  `next.config.mjs`).

## Deploy to Vercel (free)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com, sign in with GitHub, click "Add New Project."
3. Select the repo — Vercel auto-detects Next.js, no config needed.
4. Click Deploy. You'll get a live `your-project.vercel.app` URL in about a
   minute.

## Connect your domain later

Once you buy a domain (Namecheap, Cloudflare Registrar, etc.):

1. In your Vercel project → Settings → Domains, add your domain.
2. Vercel gives you an A record or CNAME to add in your domain registrar's
   DNS settings.
3. Add that record in Namecheap's DNS panel. Propagation usually takes
   anywhere from a few minutes to a few hours.

## What's NOT included (on purpose)

- Payment/checkout — the cart page has a disabled "Checkout" button as a
  placeholder. Add Paymob, Fawry, or Stripe when you're ready to charge
  people.
- A real backend/database — products live in a TypeScript file for now.
  Fine for a small catalog; move to a database (or Medusa.js, or a headless
  CMS) once your product count or team grows.
- User accounts / order history — not needed until checkout exists.

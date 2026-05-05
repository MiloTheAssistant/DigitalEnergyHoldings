# Digital Energy Holdings

Digital Energy Holdings is the asset, intellectual property, digital rights,
contracts, brand systems, AI workflow, shared-services, and digital asset
infrastructure company for the Digital Energy operating ecosystem.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel
- Microsoft Graph for contact mail delivery

## Current Scope

Phase 1 is a Vercel-hosted corporate website with:

- Boardroom Vault homepage art direction
- Operating architecture and asset-layer positioning
- Public d/b/a ecosystem lanes
- Dedicated d/b/a landing pages for Compute Solutions, AI Concepts, Media, and St. Louis Creations
- Dedicated `/digital-assets` landing page
- Contact form with Microsoft Graph delivery path
- Privacy, terms, legal, thank-you, sitemap, robots, and Open Graph metadata

## Public Contact

- Email: `Contact@DigitalEnergyHoldings.Com`
- Phone: `(573) 500-0064`
- Domain: `https://digitalenergyholdings.com`

## Environment Variables

The contact form expects these Vercel environment variables:

```txt
MS_TENANT_ID=
MS_CLIENT_ID=
MS_CLIENT_SECRET=
MS_FROM_EMAIL=
LEAD_TO_EMAIL=
```

A non-secret reference template is available at `docs/environment.example.txt`.

If Graph mail is not configured, the form returns a safe fallback message that
directs visitors to the public contact email.

Vercel currently needs these variables added in Production, Preview, and
Development if the form should deliver mail in all environments:

```bash
npx vercel env add MS_TENANT_ID production preview development
npx vercel env add MS_CLIENT_ID production preview development
npx vercel env add MS_CLIENT_SECRET production preview development
npx vercel env add MS_FROM_EMAIL production preview development
npx vercel env add LEAD_TO_EMAIL production preview development
```

## Local Commands

```bash
npm run dev
npm test
npm run lint
npm run build
```

## Deployment

Primary production domain: `https://digitalenergyholdings.com`

Source repo: `https://github.com/MiloTheAssistant/DigitalEnergyHoldings`

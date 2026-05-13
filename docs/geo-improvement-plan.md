# GEO Improvement Plan: Digital Energy Holdings

## Objective

Improve Digital Energy Holdings visibility and citability across ChatGPT, Claude, Perplexity, Gemini, Google AI Overview, and traditional search without creating thin SEO pages or exposing private operating details.

## Phase 1: Technical And Entity Foundations

- Align canonical URLs, sitemap URLs, robots sitemap reference, and llms.txt links to the live production host.
- Publish `llms.txt` and `llms-full.txt` with factual public page guidance.
- Add Organization and WebSite JSON-LD globally.
- Add Service JSON-LD to the public ecosystem lane pages.
- Keep AI/search crawlers explicitly allowed in `robots.txt`.

## Phase 2: Citation-Ready Content

- Add a practical FAQ page for bankers, CPAs, vendors, partners, and operating-company inquiries. **Implemented May 13, 2026.**
- Add one deeper explanation section per lane with direct answers, definitions, boundaries, and examples. **Implemented May 13, 2026.**
- Add concise page summaries near the top of each key page so AI systems can extract complete answers without stitching unrelated sections together. **Implemented on lane pages May 13, 2026.**

## Phase 3: Authority Signals

- Add stable public social/profile URLs to schema `sameAs` only after the profiles are final and approved.
- Add approved brand media assets with descriptive filenames, alt text, and usage notes.
- Add dated context pages when DEH has durable public milestones worth citing.

## Expected Tests

- `python C:\Users\JDSDirectLLC\.codex\skills\geo-seo-auditor\scripts\geo_quick_audit.py https://www.digitalenergyholdings.com --pretty`
- `python C:\Users\JDSDirectLLC\.codex\skills\geo-seo-auditor\scripts\llmstxt_generator.py https://www.digitalenergyholdings.com validate`
- `npm run lint`
- `npm run test`
- `npm run build`
- Fetch production `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt`, `/`, `/digital-assets`, `/compute-solutions`, `/ai-concepts`, `/media`, and `/st-louis-creations`.

## Success Criteria

- `/llms.txt` returns 200 and validates with a title, description, sections, and links.
- `robots.txt` returns 200, references the www sitemap, and allows major AI/search crawler tokens.
- `sitemap.xml` returns 200 and uses the same canonical host as live production.
- Rendered HTML includes JSON-LD schema on the homepage and ecosystem lane pages.
- Lint, tests, and production build pass.

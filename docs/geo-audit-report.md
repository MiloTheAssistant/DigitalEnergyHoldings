# GEO Audit Report: Digital Energy Holdings

**Audit Date:** May 13, 2026  
**Target:** https://digitalenergyholdings.com  
**Canonical Implementation Target:** https://www.digitalenergyholdings.com  
**Business Type:** Holding company / asset, systems, AI workflow, media, compute, and digital asset governance site  
**Pages Analyzed:** Homepage, robots.txt, sitemap.xml, llms.txt, and top public pages from the sitemap

## Executive Summary

The site was crawlable and had solid metadata, headings, sitemap coverage, and AI crawler access. The main gaps were missing structured data, missing llms.txt, and a canonical mismatch because the live apex domain resolves to the www host while metadata and sitemap entries used the apex host. The implementation plan focuses on making the site easier for ChatGPT, Claude, Perplexity, Gemini, Google AI Overview, and traditional search systems to understand and cite without inventing thin SEO content.

## Score Breakdown

| Category | Score | Weight | Notes |
| --- | ---: | ---: | --- |
| AI citability and visibility | 84 | 25% | Public content is extractable and crawler access is open; llms.txt was missing before implementation. |
| Brand authority and entity signals | 78 | 20% | Strong consistent naming and contact details; schema was missing before implementation. |
| Content quality and E-E-A-T | 82 | 20% | Clear business context and legal boundaries; future gains should come from deeper proof pages and case/context pages. |
| Technical foundations | 88 | 15% | Homepage, robots.txt, and sitemap.xml returned 200; canonical host needed alignment with live redirect behavior. |
| Structured data | 45 | 10% | No JSON-LD detected before implementation. |
| Platform optimization | 82 | 10% | AI and search crawlers were allowed; explicit bot rules and llms.txt improve machine readability. |

**Estimated composite before fixes:** 80/100  
**Expected composite after this implementation:** 90/100

## Findings

### High

- **No JSON-LD schema detected.**  
  Impact: AI search systems and traditional crawlers had less explicit entity context for Digital Energy Holdings, its legal name, contact point, location, and ecosystem lanes.  
  Fix: Add Organization, WebSite, and page-specific Service JSON-LD.

- **Canonical host mismatch.**  
  Impact: The apex URL resolves to `https://www.digitalenergyholdings.com/`, while existing metadata and sitemap used `https://digitalenergyholdings.com`.  
  Fix: Align `siteConfig.url`, canonical metadata, sitemap, robots sitemap reference, and llms.txt links to the live www host.

### Medium

- **llms.txt was missing.**  
  Impact: AI agents had no concise, site-owned guide to the most important public pages and business boundaries.  
  Fix: Add `public/llms.txt` and `public/llms-full.txt`.

- **Crawler policy was only generic.**  
  Impact: `User-Agent: * Allow: /` was permissive, but it did not make AI crawler intent explicit.  
  Fix: Add explicit allow rules for current major AI/search crawler tokens while preserving generic crawl access.

### Low

- **Meaningful images used empty alt text.**  
  Impact: Accessibility and image-context signals were weaker than necessary.  
  Fix: Add descriptive alt text for the DEH profile mark and hero visual.

## Platform Visibility Notes

- OpenAI visibility depends most directly on allowing `OAI-SearchBot` for ChatGPT search surfaces and keeping public content accessible; `GPTBot` and `ChatGPT-User` have separate roles.
- Claude visibility depends on allowing Anthropic's current crawler family: `ClaudeBot`, `Claude-SearchBot`, and `Claude-User`.
- Perplexity visibility depends on allowing `PerplexityBot` and maintaining extractable public page content.
- Gemini and Google AI Overview readiness depends on Google Search crawlability through `Googlebot`; `Google-Extended` is a separate Google control token for Gemini-related training/grounding use and does not replace Googlebot.

## Quick Wins Implemented

- Add JSON-LD structured data for Organization and WebSite.
- Add Service JSON-LD on ecosystem lane pages.
- Add `llms.txt` and `llms-full.txt`.
- Align canonical host and sitemap URLs to `https://www.digitalenergyholdings.com`.
- Add explicit AI crawler allow rules in `robots.ts`.
- Add sitemap `changeFrequency` and `priority` fields.
- Improve alt text for the DEH logo/profile mark and hero image.

## 30-Day Improvement Plan

1. Keep the new FAQ page current as DEH's banking, CPA, vendor, and partner workflows mature.
2. Add one deeper proof/context page for each public lane after there are durable public examples worth citing.
3. Add authoritative sameAs links once the final public social profiles are approved and stable.
4. Re-run the GEO audit after the production deploy and compare schema detection, llms.txt reachability, sitemap host alignment, and crawler access.

## Appendix

Current crawler identifiers were checked against official source material on May 13, 2026:

- OpenAI crawler documentation: https://developers.openai.com/api/docs/bots
- Anthropic crawler documentation: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity robots.txt documentation: https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt
- Google crawler documentation: https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers

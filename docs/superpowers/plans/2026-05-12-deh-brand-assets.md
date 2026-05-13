# DEH Brand Assets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce revised DEH website and social media image assets that match the approved human-centered profile and clean photoreal background direction.

**Architecture:** Generated master images live in `public/brand/masters/`; platform-ready exports live under `public/brand/<platform>/`. The spec and plan live under `docs/superpowers/` so future brand work has a durable source of truth.

**Execution adjustment:** Generate a small coherent family of source images and derive platform-specific files from them where formats overlap. This keeps the brand system consistent instead of producing unrelated scenes for each platform.

**Tech Stack:** Built-in image generation, PowerShell, System.Drawing for deterministic crop/export checks, PNG assets in the existing Next.js public folder.

---

## File Structure

- Modify: `.gitignore` to ignore `.superpowers/`.
- Create: `docs/superpowers/specs/2026-05-12-deh-branding-design.md` for approved visual rules.
- Create: `docs/superpowers/plans/2026-05-12-deh-brand-assets.md` for this compact implementation plan.
- Modify: `public/brand/README.md` to document the revised asset set.
- Create/update: `public/brand/masters/*.png` with the approved raw generated masters.
- Create/update: `public/brand/website-profile/*.png` with human-centered profile stamp options.
- Create/update: `public/brand/facebook/*.png`, `public/brand/instagram/*.png`, `public/brand/tiktok/*.png`, `public/brand/linkedin/*.png`, and `public/brand/x/*.png` with platform-ready exports.

### Task 1: Repo Hygiene And Design Records

**Files:**
- Modify: `.gitignore`
- Create: `docs/superpowers/specs/2026-05-12-deh-branding-design.md`
- Create: `docs/superpowers/plans/2026-05-12-deh-brand-assets.md`

- [x] **Step 1: Ignore local companion artifacts**

Add `.superpowers/` under the misc ignore section in `.gitignore`.

- [x] **Step 2: Save the design spec**

Create `docs/superpowers/specs/2026-05-12-deh-branding-design.md` with the approved direction, quality rules, asset roles, and GEO/SEO out-of-scope note.

- [x] **Step 3: Save this compact implementation plan**

Create `docs/superpowers/plans/2026-05-12-deh-brand-assets.md`.

### Task 2: Generate Revised Masters

**Files:**
- Create/update: `public/brand/masters/deh-human-profile-master.png`
- Create/update: `public/brand/masters/deh-clean-command-center-master.png`
- Create/update: `public/brand/masters/deh-clean-infrastructure-master.png`

- [x] **Step 1: Generate human-centered profile master**

Use a prompt that specifies anonymous executive presence, premium profile stamp composition, no readable text, no logos, no watermark, and circular-crop safety.

- [x] **Step 2: Generate clean wide background master**

Use a prompt that specifies a clean photoreal command center scene with safe negative space and no baked-in copy.

- [x] **Step 3: Generate clean vertical background master**

Use a prompt that specifies photoreal digital energy infrastructure with safe negative space for mobile overlays.

### Task 3: Export Platform Assets

**Files:**
- Create/update: all PNG files under `public/brand/website-profile/`, `public/brand/facebook/`, `public/brand/instagram/`, `public/brand/tiktok/`, `public/brand/linkedin/`, and `public/brand/x/`.

- [x] **Step 1: Export profile images**

Create 1080 x 1080 profile assets using the human-centered master for website, Facebook, Instagram, TikTok, LinkedIn, and X.

- [x] **Step 2: Export wide backgrounds**

Create Facebook cover 1640 x 924, LinkedIn cover 1128 x 191, X header 1500 x 500, and feed/link variants from the clean wide background master.

- [x] **Step 3: Export vertical backgrounds**

Create Instagram story 1080 x 1920 and TikTok vertical images from the clean vertical background master.

### Task 4: Documentation And Verification

**Files:**
- Modify: `public/brand/README.md`

- [x] **Step 1: Update asset documentation**

Document the final asset filenames and the quality rules in `public/brand/README.md`.

- [x] **Step 2: Verify dimensions**

Run a System.Drawing dimension check over `public/brand/**/*.png` and confirm each platform file matches its filename dimensions.

- [x] **Step 3: Verify git scope**

Run `git status --short` and confirm the diff contains only brand assets, brand docs, and `.gitignore`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static, single-page marketing website for Red Giant Media Agency (a Nairobi-based experiential marketing / audio-visual production agency). There is no build system, package manager, or server-side code — it's plain HTML/CSS opened directly in a browser or served as static files.

## Development

There are no build, lint, or test commands — this is a static site with no `package.json`. To preview changes, open `index.html` directly in a browser, or serve the directory with any static file server (e.g. `npx serve .` or the VS Code Live Server extension).

## Architecture

- **`index.html`** — the entire site. It's a single-page application: all seven "pages" (Home, About Us, Services, Portfolio, Brand Clients, Contact, plus a video modal) are `<section id="page-*" class="page-content">` elements in one document, toggled via JavaScript rather than real page navigation/routing.
  - `navigateTo(pageId)` (inline `<script>` at the bottom of `index.html`) shows/hides sections by toggling the `.active` class, updates the corresponding nav link's active state, scrolls to top, and collapses the mobile navbar. All nav links and CTA buttons call this via inline `onclick` handlers rather than `href`/anchor navigation.
  - `openVideoModal(videoUrl)` sets the Bootstrap modal's iframe `src` and shows it; the `hidden.bs.modal` event clears the iframe `src` on close (stops video playback).
  - `handleFormSubmit(event)` on the contact form just prevents default, shows an `alert()`, and resets the form — there is no real backend/submission endpoint wired up.
  - **`script.js` is currently empty** — all JS lives inline in `index.html`. If adding non-trivial JS, consider whether it belongs in `script.js` instead, and update the `<script src="script.js">` tag placement accordingly (there currently isn't one).
- **`style.css`** — all custom styling, layered on top of Bootstrap 5. Uses CSS custom properties defined in `:root` (`--primary-red`, `--dark-red`, `--accent-gold`, `--bg-black`, `--bg-card`, `--text-main`, `--text-muted`, `--border-color`) for the dark/red brand theme — reuse these rather than hardcoding colors.
- **`images/`** — local brand/client logo images referenced by relative path (e.g. `images/citizen.jpg`). Other imagery throughout the site is hotlinked from Unsplash/Wikimedia via absolute URLs — follow this existing pattern (local file for brand assets, hotlinked stock photo URLs for generic imagery) if adding new sections rather than mixing conventions.

## External dependencies (all via CDN, no local copies)

- Bootstrap 5.3.2 (CSS + bundled JS, includes Popper) — layout grid, navbar, carousel, modal
- Font Awesome 6.4.0 — icons
- Google Fonts: Poppins (body) and Syne (headings, set via the `h1, h2, h3, h4, .font-heading` rule)

## Conventions to follow when editing

- New "pages" should follow the existing pattern: a `<section id="page-X" class="page-content container py-5">`, a matching `<li>` nav item with `id="nav-X"` calling `onclick="navigateTo('X')"`, and content built from Bootstrap grid + the `.custom-card` / `.brand-badge` component classes already defined in `style.css`.
- The brand carousel (`#brandCarousel`) inside the Home page hero and the static client ticker below it both list the same set of client logos (Netflix, Citizen TV, BIC, Serena Hotels, Showmax, Tech Laptops, Java House, Safaricom) — keep both in sync if adding/removing a client.

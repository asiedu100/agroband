# Natura Agrobrand — Website

A plain HTML/CSS/JavaScript website. No build step, no framework, no dependencies to install — open a file and it works.

## What's here

```
index.html              Home
about.html               About
products.html            Products
services.html            Services
how-we-work.html         How We Work
global-markets.html      Global Markets
team.html                 Our Team
contact.html              Contact

css/style.css            All styles — colors, type, spacing, every component
js/main.js                Mobile nav toggle, contact form, Impact stat count-up animation
images/                   All photos used on the site, already sized for the web
favicon.svg / favicon.ico
robots.txt, sitemap.xml  SEO files

source-assets/           Original, full-size photos as supplied — not used directly by the site
archive-astro-prototype/ An earlier version built with a different tool (Astro) — kept for reference, not live
```

## Previewing it

No installation needed. Either:

- Double-click `index.html` to open it in a browser, or
- Run a local server from this folder (needed for the contact form to work correctly during testing):
  ```
  python3 -m http.server 8080
  ```
  then open `http://localhost:8080/`.

## Editing content

There's no CMS and no build step — content lives directly in each `.html` file. To change text, find it in the relevant page and edit it directly (it's plain HTML, readable top to bottom). Every page repeats the same navigation menu and footer near the top/bottom of the file; if you change one (e.g. adding a page), update it in all 8 files.

To swap or add a photo: put the image file in `images/`, then reference it as `images/your-file.jpg` in the relevant `<img src="...">` tag.

## What's confirmed and live

- **Team** (`team.html` + homepage preview): Dr. Boakye Danquah Oliver (Co-Founder & CEO), Ing. Adomako Yaw Benajah (Co-Founder & Chairman), Lawrencia Asieduah Osei (CFO), David Etim (Europe Presiding Representative, Germany), Daniella Afrakumah Danquah (Administrator).
- **Impact stats** (homepage): 1,000+ Farmers Empowered, 50,000+ Tons Exported, 25+ Export Destinations, 100% Sustainable, 3+ Years Experience, 5K Hectares, 100% Traceable — each animates in as you scroll to it.
- **Location**: Tesano, Accra — shown in every page footer (linked to Google Maps) and embedded as an interactive map on `contact.html`.
- **Global Markets**: 13 countries across Africa, Europe and the Americas, each with a flag, shown on both the homepage and the dedicated Global Markets page.

## Before this goes live — still needs your input

- **Contact form**: `contact.html` posts to a placeholder Formspree address (`https://formspree.io/f/REPLACE_WITH_REAL_FORM_ID`). Create a free form at [formspree.io](https://formspree.io), and replace that URL with your real one, or the form won't deliver messages.
- **Domain**: `sitemap.xml`, `robots.txt`, and the `<link rel="canonical">` / Open Graph tags in every page currently assume `https://www.naturaagrobrand.com/`. Update these once your real production domain is confirmed.
- **Product certifications**: not shown anywhere yet (e.g. "Organic," "Non-GMO") since none were confirmed — add them to `products.html` once you have a certifying body to name.
- **Daniella's bio**: her name and title are live on `team.html`; her bio line was never supplied.
- **Phone / WhatsApp / social media**: not shown anywhere — only email, address and hours are listed as contact methods, since no working numbers or social handles were confirmed.
- **Global Markets country list**: the 13 countries listed (with flags) are carried over from the previous website — worth a quick review to confirm they're still accurate.
- **David Etim's team photo**: color-adjusted with CSS to sit closer to the other four, but a true match would need a replacement headshot shot the same way as the others (same background, same studio lighting).

## Deployment

This is a static site — it deploys as-is to any static host, no server or database required. The simplest options are [Vercel](https://vercel.com), [Netlify](https://netlify.com), or GitHub Pages: point any of them at this folder and it will work with zero configuration.

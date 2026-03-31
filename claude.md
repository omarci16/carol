Carol Gasztromühely — Website Redesign Project
Project Overview
Full redesign and rebuild of carol-gasztromuhely.hu — a Hungarian gastro-restaurant/canteen.
The goal is an elegant, distinctive, NON-GENERIC website. No AI slop. No template feel.
Every design decision must be intentional, refined, and true to the brand's character.
Working Directory
OneDrive/Marton-personal/Carol/
All output files go here. Keep the folder structure clean:
Carol/
├── CLAUDE.md              ← this file
├── index.html             ← main site
├── styles/
├── scripts/
├── assets/
│   ├── fonts/
│   └── images/
└── menu/
    └── menu-widget.html   ← embeddable weekly menu

Step 1 — Content Scraping (do this first, every session)
Scrape ALL content from https://carol-gasztromuhely.hu/ before doing anything design-related.
Use a headless browser or fetch + parse strategy to extract:

Every page and subpage (check sitemap.xml and nav links)
All text: headings, body copy, labels, CTAs, footer text
All menu/food content
Contact info, address, opening hours
Any embedded images (note their filenames and context)
The weekly menu image (screenshot or download it; we will replace this with a live widget)
Meta tags and SEO data (title, description, keywords)

Save extracted content to: Carol/content/scraped-content.md

Design Direction
Tone & Aesthetic

Elegant, warm, artisanal — feels like a real place, not a SaaS product
Inspired by high-end European bistro / canteen editorial design
Think: French brasserie menu cards, Hungarian folk geometry as subtle texture, linen & terracotta palette
NOT: purple gradients, glassmorphism, generic food-delivery-app vibes

Visual Guidelines
The brand has a Figma visual guideline file with exact:

Fonts (use ONLY these — embed via Google Fonts or self-host)
Colors (use ONLY these — define as CSS variables immediately)
Spacing / sizing rules if present

→ See Carol/assets/brand-guidelines.[format] (exported from Figma — see Figma Export Instructions below)
Design Skills to Follow
Read and apply both of these skill files before writing any CSS or layout code:

Frontend Design Skill — /mnt/skills/public/frontend-design/SKILL.md
(or fetch raw: https://github.com/anthropics/skills/tree/main/skills/frontend-design)
Taste Skill — fetch and read: https://github.com/Leonxlnx/taste-skill
Apply its principles for food/hospitality aesthetic sensibility.

Both skills must be consulted BEFORE making any visual decisions.

Weekly Menu Widget
Current State
The current site shows the weekly menu (3-course lunch menu, Mon–Fri) as a static image.
This must be replaced with a dynamic, beautiful menu widget.
New Implementation

Data source: Google Sheets (public, no auth required)

Sheet URL to be provided: [INSERT GOOGLE SHEET URL HERE]
Expected columns: Day | Leves (Soup) | Főétel (Main) | Desszert (Dessert) | Price (optional)


Widget: A standalone menu/menu-widget.html that:

Fetches the sheet data via Google Sheets JSON API (no API key needed for public sheets)
Renders a beautiful, on-brand weekly menu card
Highlights today's menu automatically
Is embeddable as an <iframe> or inline include on the main site
Follows all brand fonts and colors from the visual guidelines
Works on mobile



Google Sheet Setup (tell the client)

Create a Google Sheet with columns: Day, Leves, Főétel, Desszert
File → Share → "Anyone with the link can view"
Get the Sheet ID from the URL: https://sheets.google.com/d/[SHEET_ID]/edit
Paste the Sheet ID into the widget config variable at the top of menu-widget.html


Tech Stack

Pure HTML/CSS/JS (no framework unless complexity demands it)
CSS custom properties for all brand tokens
Vanilla JS for menu widget fetch
Google Fonts or self-hosted fonts (from brand guidelines)
No build tools required — must open directly from file system or simple hosting


Quality Bar
Before considering any page done, check:

 Does it look like it was designed by a human who cares?
 Are the fonts exactly from the brand guidelines?
 Are the colors exactly from the brand guidelines?
 Is the weekly menu pulling live data from Google Sheets?
 Does today's menu get highlighted?
 Is it mobile-responsive?
 Is all scraped content present and accurate?
 Zero generic AI-slop patterns (Inter font, purple gradients, card-grid-with-icons layouts)
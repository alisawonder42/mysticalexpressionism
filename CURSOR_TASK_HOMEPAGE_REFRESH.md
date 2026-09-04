# Cursor task — homepage/content/artworks refresh

Use **Claude Opus** for this task.

Work from `main`. Keep the existing site architecture and dark contemporary-gallery feel, but make the homepage follow the structure of the current Wix site more closely.

## 1. Homepage first impression

Do **not** open the homepage with a painting.

The first visual/hero should be **Mladen Ilic himself**, using the existing Mladen portrait/studio image already sourced from Wix or another existing Mladen studio image in the project. The homepage should feel artist-first, like the Wix layout, not artwork-first.

Use this order on the homepage:

1. Header / MLADEN ILIC
2. Large Mladen portrait or studio image
3. About text
4. Paintings / latest works
5. Process section
6. Contact / existing collector CTA content as appropriate

Do not copy Wix styling literally; keep the current premium dark museum/editorial visual direction. The request is mainly about the **layout/order and artist-first opening**.

## 2. Typography

Change the typography to a more refined contemporary editorial/gallery system.

Use:
- **Cormorant Garamond** for large headings, artwork titles and major editorial statements
- **Inter** for body copy, navigation, metadata, prices, buttons and forms

Use `next/font/google`. Keep typography restrained and readable. Avoid fashion-brand excess, gold styling, huge letter spacing, rounded cards or decorative effects.

## 3. About copy — use exactly this text

Do not rewrite or expand it:

> Mladen Ilic is a Serbian painter and professor of Serbian language and literature, based in Novi Sad, Serbia.
> Alongside his academic career, he has developed an independent painting practice rooted in intuition, emotional experience and the relationship between gesture and material.

Use the same copy anywhere the homepage/About section needs this biography. Remove conflicting invented/expanded biography text.

## 4. Process copy — use exactly this text

Do not rewrite or expand it:

> My practice is intuitive and material-driven. I work primarily in oil on canvas, combining oil paint with oil pastel, gesso, and, at times, materials such as rice, earth, and other found elements.
>
> I do not begin with a fixed image or a predetermined technique. The painting determines what comes next. I follow gesture, texture, accident, resistance and instinct, allowing the material to become part of the process.
>
> Technique is never the starting point. It is subordinate to the inner world of the painting.
>
> Each work develops through a process of discovery. Layers are built, altered, covered and revealed until the painting reaches a point where it no longer asks to be explained.

## 5. Process video

Prepare the Process section/page to use:

`/public/mladen-process.mp4`

The user will add the file manually if it is not already present.

Video requirements:
- responsive
- large editorial presentation
- muted by default
- `playsInline`
- controls enabled
- `preload="metadata"`
- no autoplay with sound
- no rounded corners
- page must still render if the file is temporarily missing

Use a restrained label: `Studio / Process`.

## 6. Artfinder — latest 10 artworks

Use the public Artfinder profile:

https://www.artfinder.com/en-GB/artist/mladen-ilic/

Scrape/import the **10 newest/current latest artworks**, not the most popular works.

For each artwork collect only verified public data:
- title
- year
- status / availability
- Artfinder price
- main image
- additional images when accessible
- width / height / depth where available
- medium
- surface/material
- ready-to-hang/framing if available
- signed status if available
- description
- Artfinder URL

Do not invent missing information.

Keep artwork data in one typed data source, not scattered through components.

## 7. Pricing rule

Website price = `Artfinder price × 0.80`.

Show only the final website price publicly. Do not show discount badges, crossed-out prices, or "20% off" language. Keep the source Artfinder price in the data model for maintenance.

## 8. Artwork descriptions

Use the current Artfinder descriptions for these works. Do not generate replacement poetic descriptions just to fill space.

## 9. Works display

Homepage Paintings section should show the newest works after the About section, similar in sequence to Wix but with the current premium dark visual language.

Works page should show the 10 newest artworks with:
- image
- title
- year if available
- dimensions if available
- website price
- availability

Keep it editorial, not ecommerce-card-like.

Artwork detail pages should retain the inquiry-first flow:
- Acquire this work
- Ask about this work

No cart/quantity UI.

## 10. Preserve / clean up

Keep:
- Home
- Works
- About
- Process
- Private Commissions
- Contact
- responsive navigation
- SEO/sitemap foundation
- inquiry-first acquisition flow

Remove conflicting placeholder/demo artwork data and conflicting About/Process copy.

Do not invent exhibitions, awards, formal art education or press.

## 11. Validate

Run install, lint, Next.js build and vinext/Cloudflare build if configured. Check desktop/mobile and all 10 artwork routes.

Do **not deploy** yet. Open a PR against `main` and include a concise summary with:
- the 10 imported Artfinder works
- Artfinder price and calculated website price for each
- any missing fields
- changed files
- test/build results
- confirmation that the homepage now opens with Mladen, not a painting
- confirmation that the expected video path is `public/mladen-process.mp4`

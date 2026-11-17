# Ynotdecants

A static fragrance storefront built with HTML, CSS and JavaScript, using a black and copper palette.

## Run locally

Open `index.html` in a browser. No build step or installation is required.

Pages: `index.html`, `men.html`, `women.html`, `unisex.html`, `fragrance-quiz.html`, `contact.html`, `terms.html`, `privacy.html`, `shipping.html`, and `returns.html`.

## Catalogue and images

`catalog.js` contains 352 fragrance entries imported from the supplied workbook. Prices are estimates in USD; missing or conflicting prices are awaiting confirmation. The site supports 2ml, 5ml, 10ml and 30ml decant options where pricing is available.

Generated fragrance images are temporary placeholders. To use a real product image, put the file in `assets/` and add an `image` path to that product in `catalog.js`.

## Store preview

The shopping bag and favourites are stored in the visitor's browser. Checkout, payments, shipping, contact messages and newsletter submissions are not connected to live services. Testimonials are clearly labelled sample content. Policy pages are pre-launch drafts with unconfirmed business and fulfilment details explicitly identified.

Shop all navigation links point to the existing GHL shop preview. Local changes to GHL source files do not automatically update the live GHL editor.

## Validation

Run `node home-qa.cjs` to check catalogue integrity, size pricing, cart totals, search and local page assets.

Run `node contact-qa.cjs` to check contact links, form labels, enquiry topics and preview feedback.

## Main files

- `styles.css`: shared styling and responsive layouts.
- `script.js`: catalogue controls, product dialogs, bag, search and fragrance quiz.
- `catalog.js`: fragrance data and size prices.
- `contact.js`: contact form preview behaviour.
- `ghl-product-grid-theme.html`: prepared styling for native GHL product lists.
- `ghl-shop-native-header.html` and `ghl-shop-native-footer.html`: GHL custom-code sources.
- `assets/`: images and artwork.
- `BRANDING.md`: project branding notes.

## Fragrance quiz

`fragrance-quiz.html` provides a six-question quiz with collection, scent-family, occasion, season, excluded-note and 2ml budget preferences. `fragrance-quiz.js` ranks catalogue entries using their notes, accords and wear schedules and shows up to three matches. Budget and excluded-note choices are enforced without relaxing them silently. Answers stay in page memory; no sign-up or external API is required.

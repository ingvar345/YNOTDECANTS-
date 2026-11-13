# Ynotdecants

A static fragrance storefront built with HTML, CSS and JavaScript, using a black and copper palette.

## Run locally

Open `index.html` in a browser. No build step or installation is required.

Pages: `index.html`, `men.html`, `women.html`, and `about.html`.

## Catalogue and images

`catalog.js` contains 352 fragrance entries imported from the supplied workbook. Prices are estimates in USD; missing or conflicting prices are awaiting confirmation. The site supports 2ml, 5ml, 10ml and 30ml decant options where pricing is available.

Generated fragrance images are temporary placeholders. To use a real product image, put the file in `assets/` and add an `image` path to that product in `catalog.js`.

## Store preview

The shopping bag and favourites are stored in the visitor's browser. Checkout, payments, shipping and newsletter submissions are not connected to live services. Testimonials are clearly labelled sample content.

## Validation

Run `node home-qa.cjs` to check catalogue integrity, size pricing, cart totals, search and local page assets.

## Main files

- `styles.css`: shared styling and responsive layouts.
- `script.js`: catalogue controls, product dialogs, bag, search and fragrance quiz.
- `catalog.js`: fragrance data and size prices.
- `assets/`: images and artwork.
- `BRANDING.md`: project branding notes.

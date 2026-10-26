# Car Choice Bhopal

Premium, responsive pre-owned car dealership website for Car Choice Bhopal.

## Features

- Original dealership logo with the black background blended away in the website
- Animated hero and scroll reveals
- Steering-wheel-controlled car category gallery, with swipe and keyboard controls
- Budget, body-style and transmission preferences
- Browser-local saved categories
- Interactive EMI estimator
- WhatsApp enquiries for stock, test drives, finance and selling or exchanging a car
- Showroom directions, phone links and FAQs
- Reduced-motion support

## Run locally

Requires Node.js. No dependency installation or build is needed.

```sh
node preview.mjs
```

Open http://127.0.0.1:4173.

## Deploy

Serve the `dist/` directory on a static web host. The website consists of HTML, CSS, JavaScript and image assets.

The `.openai/hosting.json` file records the existing Sites project. GitHub updates do not automatically republish that Sites deployment.

## Content notes

Car photos are representative category imagery, not a live inventory feed. Current stock, prices and test-drive appointments must be confirmed by the showroom. The EMI calculator is an estimate, not a loan offer. Enquiry forms open a pre-filled WhatsApp message for the visitor to review and send; this site has no form submission server.

`finalize.mjs` was a one-time content preparation helper. Do not rerun it as a build step.

## Assets

The business logo and showroom photo were sourced from the dealership's public Google listing. Representative vehicle photography comes from Unsplash. Business branding and photos belong to their respective owners.

# Image assets

Drop self-hosted, optimized images here (prefer `.webp`) with descriptive
filenames, e.g. `lef-signature-hero.webp`, `engineering-services.webp`.

The site currently references the reference-design imagery via the Google CDN,
centralized in `src/data/images.ts`. To move to self-hosted assets, place the
files in this folder and update the paths in that single file — no component
changes are required.

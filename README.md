# Academic homepage

A small static Astro homepage with IBM Plex Mono typography. Requires Node.js 22.12 or newer.

## Local development

```sh
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

```sh
npm run build   # Type-check and build into dist/
npm run preview # Preview the production build
```

## Edit content

- `src/data/profile.ts`: name, biography, affiliation, links, and publications. All bracketed text and example publications are placeholders, not real biographical claims.
- Set profile link `href` values to enable them. For email use `mailto:you@example.edu`; for a CV put the file in `public/` and use `/cv.pdf`.
- Each publication accepts links such as `{ label: 'Paper', href: 'https://...' }`. Remove `placeholder: true` after replacing an example with a real publication.
- `src/styles/global.css`: colors, spacing, and typography.
- `src/pages/index.astro`: page structure and metadata.

This initial version is local only; no deployment workflow is installed. The Astro `site` setting is prepared for `https://wthe2004.github.io`.

## Font attribution

Typeset in [IBM Plex Mono](https://github.com/IBM/plex), distributed under the SIL Open Font License. Regular and bold Latin fonts are self-hosted through `@fontsource/ibm-plex-mono`; the license is also included in `public/fonts/LICENSE.txt`.

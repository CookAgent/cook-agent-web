# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌐 Internationalization & Analytics

- **Translations:** All UI strings live in `src/i18n/translations.ts`. The app uses `data-i18n` attributes in components and a small runtime script (in `src/layouts/Layout.astro`) which populates elements and meta tags. To add new text: add a key to `translations.ts` for each language and then add `data-i18n="your.key"` (or `data-i18n-html="true"` when HTML is required) to the element.
- **Language selection:** The language selector in the header (`#language-selector`) and mobile selector (`#language-selector-mobile`) persist the choice to `localStorage` under `reciplab-lang` and update the page at runtime.
- **Google Analytics:** To enable Analytics, set `PUBLIC_GA_ID` in your environment to your `G-XXXXXXX` Measurement ID (see `.env.example`). When set, `gtag.js` will be injected via `src/layouts/Layout.astro` and the selected language will be sent as a user property.

Example `.env` (do not commit real keys):

```
PUBLIC_GA_ID=G-XXXXXXXXXX
```

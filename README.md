# Spot it

A geography guessing game built on Google Street View.

Spot it shows a Street View panorama and a small map. You click on the map to place a guess, and the app keeps the guess and the actual position of the panorama side by side as markers. It is an early version, meant for people who want to play a GeoGuessr-style game in the browser.

## Table of contents

- [Spot it](#spot-it)
	- [Table of contents](#table-of-contents)
	- [How it works](#how-it-works)
	- [Tech stack](#tech-stack)
	- [Repository structure](#repository-structure)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Configuration](#configuration)
	- [Running locally](#running-locally)
	- [Useful scripts](#useful-scripts)
	- [Tests and quality](#tests-and-quality)
	- [License](#license)

## How it works

1. **Map**: a map is displayed in the bottom-right corner. Clicking on it sets the guess marker.
2. **Panorama**: pressing a key asks the Street View service for a panorama within 1 km of the guess marker and displays it full screen.
3. **Position tracking**: when the user moves inside the panorama, the actual marker follows the new position.
4. **State**: the actual and guess locations, and the Street View service instance, are kept in Zustand stores shared by both components.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | Next.js 14 (App Router), React 18, Tailwind CSS 3 |
| Maps | Google Maps JavaScript API, Street View, `@react-google-maps/api` |
| State | Zustand |
| Validation | Zod, `@t3-oss/env-nextjs` (environment variables) |
| Tooling | pnpm, TypeScript, ESLint (`@maxencebonamy/eslint-config`) |

## Repository structure

```
.
├── src/
│   ├── app/             Next.js entry point (layout, page, global styles)
│   ├── components/
│   │   ├── loader/      Loading indicator
│   │   ├── map-view/    Guess map with the actual and guess markers
│   │   ├── spinner/     Spinner
│   │   └── street-view/ Street View panorama
│   ├── lib/
│   │   ├── street-view/ Random panorama lookup
│   │   └── utils/       Environment validation, colors, map types, random helpers
│   └── stores/
│       ├── location/    Actual and guess locations
│       └── street-view/ Street View service instance
├── .env.example         Environment variable template
├── LICENSE
└── package.json
```

Each component and store lives in its own folder, with an `index.ts` for exports, a `.type.ts` file for its types and, where needed, a `.util.ts` file for constants. The `@/` alias points to `src/`.

## Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later (required by Next.js 14)
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)
- A Google Maps API key with the Maps JavaScript API enabled, created in the [Google Cloud console](https://console.cloud.google.com/google/maps-apis)

## Installation

```bash
git clone git@github.com:maxencebonamy/Spot-it.git
cd Spot-it
pnpm install
```

## Configuration

Copy the example file and fill in the value.

```bash
cp .env.example .env
```

| Variable | Description | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_MAPS_API_KEY` | Google Maps API key, exposed to the browser | |

The variable is validated at startup with Zod: the app fails to start if it is missing.

## Running locally

```bash
pnpm dev
```

The app is available at <http://localhost:3000>.

To run a production build:

```bash
pnpm build
pnpm start
```

## Useful scripts

| Command | Effect |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Build the application for production |
| `pnpm start` | Start the production server |
| `pnpm lint` | Lint the repository with ESLint |
| `pnpm lint:fix` | Lint the repository and fix what can be fixed |

## Tests and quality

```bash
pnpm lint
```

The project has no automated tests. Code is checked with ESLint and TypeScript.

## License

This project is licensed under the [MIT License](LICENSE).

# Project name

One sentence on what this is and who it is for.

Live site: https://example.com

<!-- Screenshot. Keep a light and a dark capture in .github/ and use a <picture>
     element so GitHub swaps them with the viewer's theme. -->

## Overview

Two or three sentences on the problem and what the project does about it. Link
to the case study if there is one.

### Stack

- Next.js 16 (App Router), React 19
- Tailwind CSS 4
- shadcn/ui on Base UI

### Features

- First thing worth calling out
- Second thing worth calling out

## Development

Requires Node 24 (pinned in `.nvmrc`) and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The site runs at http://localhost:3000.

| Script              | What it does               |
| ------------------- | -------------------------- |
| `pnpm dev`          | Dev server                 |
| `pnpm build`        | Production build           |
| `pnpm start`        | Serve the production build |
| `pnpm lint`         | ESLint                     |
| `pnpm check-types`  | `tsc --noEmit`             |
| `pnpm format:write` | Prettier                   |

CI runs lint, format check, build, and typecheck on every pull request. The
same checks run on staged files at commit time.

Design decisions live in `plans/` as numbered docs.

## License

[MIT](./LICENSE).

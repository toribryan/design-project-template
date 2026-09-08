# Project name

One paragraph on what this is and who it is for.

Next.js 16 (App Router), React 19, Tailwind CSS 4, shadcn/ui on Base UI, TypeScript, pnpm.

## Commands

```
pnpm dev            # dev server on :3000
pnpm build          # production build
pnpm lint           # eslint
pnpm lint:fix       # eslint --fix
pnpm check-types    # tsc --noEmit
pnpm format:check   # prettier --check
pnpm format:write   # prettier --write
```

Node is pinned in `.nvmrc`. Before calling work done, run `build` and then
`check-types`: typed routes only exist after `next build` regenerates
`.next/types`, so a bare `tsc` on a clean tree reports false route errors.

## Layout

| Path                 | Holds                                               |
| -------------------- | --------------------------------------------------- |
| `src/app/`           | Routes, layouts, route handlers                     |
| `src/components/ui/` | shadcn components, added with `pnpm dlx shadcn add` |
| `src/components/`    | Shared components written for this project          |
| `src/config/site.ts` | Site name, description, canonical URL               |
| `src/lib/`           | Utilities                                           |
| `src/hooks/`         | Hooks                                               |
| `plans/`             | Numbered design docs, see `plans/README.md`         |

Import alias is `@/*` for `./src/*`.

## Conventions

- kebab-case file names. Components export a PascalCase name.
- Tailwind 4 syntax. Every screen supports light and dark.
- Comments explain why, never what. No comments about removed or changed code.
- Sentence case for headings in markdown and UI copy.
- No emojis in code, comments, or commit messages.
- Prettier and ESLint run on staged files at commit through husky. If a commit
  is rejected, fix the file rather than skipping the hook.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

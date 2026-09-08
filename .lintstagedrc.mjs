import path from "path"

const eslint = (files) =>
  `eslint --fix ${files.map((f) => `"${path.relative(process.cwd(), f)}"`).join(" ")}`

/** @type {import('lint-staged').Configuration} */
const config = {
  "*.{js,jsx,mjs,ts,tsx}": [eslint, "prettier --write"],
  "*.{css,md,mdx,json}": "prettier --write",
}

export default config

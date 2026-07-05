import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["**/*.md", ".claude/**", "docs/**"],
  },
  lint: {
    ignorePatterns: ["**/*.md", ".claude/**", "docs/**"],
    plugins: ["oxc", "typescript", "unicorn", "react", "nextjs", "jsx-a11y"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    "*.{ts,tsx,js,jsx}": "vp check --fix",
  },
});

import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {
    ignorePatterns: ["**/*.md", ".claude/**"],
  },
  lint: {
    ignorePatterns: ["**/*.md", ".claude/**"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  staged: {
    "*.{ts,tsx,js,jsx}": "vp check --fix",
  },
});

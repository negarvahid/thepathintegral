import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:       "#0a0a0a",
        purple:   "#a78bfa",
        purple2:  "#c084fc",
        pink:     "#e879f9",
        muted:    "#a1a1aa",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body":        theme("colors.zinc.300"),
            "--tw-prose-headings":    theme("colors.white"),
            "--tw-prose-lead":        theme("colors.zinc.400"),
            "--tw-prose-links":       theme("colors.violet.400"),
            "--tw-prose-bold":        theme("colors.white"),
            "--tw-prose-counters":    theme("colors.zinc.400"),
            "--tw-prose-bullets":     theme("colors.zinc.500"),
            "--tw-prose-hr":          theme("colors.zinc.700"),
            "--tw-prose-quotes":      theme("colors.zinc.100"),
            "--tw-prose-quote-borders": theme("colors.violet.500"),
            "--tw-prose-captions":    theme("colors.zinc.400"),
            "--tw-prose-code":        theme("colors.violet.300"),
            "--tw-prose-pre-code":    theme("colors.zinc.100"),
            "--tw-prose-pre-bg":      "rgba(15,23,42,0.8)",
            "--tw-prose-th-borders":  theme("colors.zinc.600"),
            "--tw-prose-td-borders":  theme("colors.zinc.700"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};

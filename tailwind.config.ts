import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        ["fem-11px"]: "0.688rem",
        ["fem-13px"]: "0.813rem",
        ["fem-20px"]: "1.25rem",
        ["fem-28px"]: "1.75rem",
      },
      colors: {
        ["fem-blue-violet"]: "#733FC8",
        ["fem-tropical-indigo"]: "#A775F1",
        ["fem-paynes-gray"]: "#48556A",
        ["fem-white-smoke"]: "#F2F2F2",
      },
    },
  },
  plugins: [],
}
export default config

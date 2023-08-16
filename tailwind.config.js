/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        lightgrey: "#e9e8ef",
        white: "#fff",
        orange: "#f7931e",
        gray: "#212121",
        ghostwhite: "#f1f3ff",
        darkgrey: "#86848c",
      },
      fontFamily: {
        "bold-2": "Mulish",
        "semibold-11": "Lora",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      mid: "17px",
      base: "16px",
      xl: "20px",
      "71xl": "90px",
      lg: "18px",
      "21xl": "40px",
      "11xl": "30px",
      "7xl": "26px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

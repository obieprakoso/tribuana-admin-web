/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "0.5rem",
        sm: "1rem",
        lg: "2.5rem",
        xl: "3.5rem",
        "2xl": "5rem",
      },
    },
    extend: {
      screens: {
        "max-mobile": { max: "560px" },
        "min-mobile": { min: "560px" },
        "max-ipad": { max: "840px" },
        "min-ipad": { min: "840px" },
        lg: { max: "1080px" },
        "min-lg": { min: "1080px" },
      },
    },
  },
  plugins: [],
  corePlugins: { preflight: false },
  // corePlugins: [],
};

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#5C6D7E",
        secondary: "#F9F4E5",
        accent: "#D9CAB3",
        palewhite: "#F6F6F6",
        choco: "#7C8996",
        button: "#000",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        typography: ["Dancing Script"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

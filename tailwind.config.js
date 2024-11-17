/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        texteGris: "#303030",
        texteBlanc: "#FFFFFF",
        buttonBackground: "#FFFFFF",
        buttonActif: "#303030",
        buttonHover: "#999999",
      },
      backgroundImage: {
        imageJourTable: "url('../assets/desktop/bg-image-daytime.jpg')",
        imageJourTablette: "url('../assets/desktop/bg-image-daytime.jpg')",
        imageJourMobile: "url('../assets/mobile/bg-image-daytime.jpg')",

        imageNuitTable: "url('../assets/desktop/bg-image-nighttime.jpg')",
        imageNuitTablette: "url('../assets/desktop/bg-image-nighttime.jpg')",
        imageNuitMobile: "url('../assets/mobile/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};

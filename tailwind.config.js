/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        texteGris: "#303030",
        texteBlanc: "#FFFFFF",
      },
      backgroundImage: {
        imageJourTable: "url('../assets/desktop/bg-image-daytime.jpg')",
        imageJourMobile: "url('../assets/mobile/bg-image-daytime.jpg')",

        imageNuitTable: "url('../assets/desktop/bg-image-nighttime.jpg')",
        imageNuitMobile: "url('../assets/mobile/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};

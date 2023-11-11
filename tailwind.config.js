/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C827A",
        secondary: "#F3EEEA",
        third: '#767395',
        fourth: '#999EFF',
        dimPrimary: "rgba(108, 130, 122, .5)",
        dimPrimary1: "rgba(108, 130, 122, .3)",
        dimPrimary2: "rgba(108, 130, 122, .8)",
        dimSecondary: "rgba(241, 237, 255, 0.1)",
        dimWhite: "rgba(255, 255, 255, 0.9)",
        dimWhite2: "rgba(255, 255, 255, 0.3)",
        dimBlack: "rgba(0, 0, 0, 0.8)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your file structure
  ],
  theme: {
    extend: {
      colors: {
        primary_background: "#f9fafb",
        primary_button_color: "#5e01d6",
        secondary_button_color: "#ebe4ff",
        header_border: "#eaecf0",
        primary_text_color: "#344054",
        active_text_color: "#6f00ff",
      },
      screens: {
        "max-custom": { max: "941px" },
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        "circle-outline": "0 0 0 0.85px #d9cdff",
      },
    },
  },
  plugins: [],
};

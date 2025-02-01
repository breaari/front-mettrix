/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violeta: "#3D0046",
      },
      screens: {
        mq1024: {
          raw: "screen and (max-width: 1024px)",
        },
        mq980: {
            raw: "screen and (max-width: 980px)",
          },
        mq780: {
          raw: "screen and (max-width: 780px)",
        }
      }
    },
  },
  plugins: [],
}

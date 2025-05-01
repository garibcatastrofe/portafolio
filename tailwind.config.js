/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        gradient: "gradient 10s ease infinite",
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        navbar: "#18a436",
        verde1: "#90C285",
        verde2: "#61985D",
        verde3: "#316D35",
        verde4: "#14591D",
        verde5: "#0F3D16",
        verde6: "#0D2F13",
        verde7: "#0A210F",
        verde8: "#091E0E",
        blanco1: "#FBFBEF",
      },
    },
  },
  plugins: [],
};

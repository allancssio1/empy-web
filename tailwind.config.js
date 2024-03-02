/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", 'sans-serif']
      },
      backgroundColor: {
        "primary": "#FFFFFF",
        "secondary": "#D9D9D9"
      },
      colors: {
        "button-primary": "#00BDFF",
        "button-primary-hover": "#00B0FF",
        "button-positive": "#5E17F5",
        "button-positive-hover": "#5E16A5",
        "button-negative": "#FF4E3A",
        "button-negative-hover": "#FF4011",
        "button-cancel": "#F2F2F2",
        "button-cancel-hover": "#D9D9D9",
      },
    },
  },
  plugins: [],
}


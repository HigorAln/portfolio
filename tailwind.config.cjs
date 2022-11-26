/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // criar o css necessario somente para oque a sua aplicacao precisa
  content: ["./src/components/**/*.tsx", "./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        style: {
          w: "#ffffff",
          background: "#161616",

          "g-3": "#333333",
          "g-ed": "#ededed",
          "g-e6": "#6e6e6e",

          "g-0": "#ffffff12",
          "g-2": "#1c1c1c",
        },
      },
      fontFamily: {
        title: ["Dancing Script"],
        poppins: ["Poppins"],
        cutive: ["Cutive Mono"],
        poiret: ["Poiret One"],
      },
      keyframes: {
        bye: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20% ": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marqueeAnimateIn: {
          "100%": { transform: "translate(-100%, 0)" },
        },
        marqueeAnimateOut: {
          "100%": { transform: "translate(100%, 0)" },
        },
      },
      animation: {
        bye: "bye 2.5s ease infinite",
        marqueeIn: "marqueeAnimateIn 240s linear infinite",
        marqueeOut: "marqueeAnimateOut 240s linear infinite",
      },
    },
  },
  plugins: [],
};

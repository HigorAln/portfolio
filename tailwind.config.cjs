/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // criar o css necessario somente para oque a sua aplicacao precisa
  content: ["./src/components/**/*.tsx", "./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      title: ["Dancing Script"],
      poppins: ["Poppins"],
      cutive: ["Cutive Mono"],
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
    },

    animation: {
      bye: "bye 2.5s ease infinite",
    },
  },
  plugins: [],
};

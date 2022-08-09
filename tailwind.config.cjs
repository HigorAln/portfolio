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
  },
  plugins: [],
};

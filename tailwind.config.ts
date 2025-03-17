// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/_components/**/*.{js,ts,jsx,tsx}",
    "./src/_layout/**/*.{js,ts,jsx,tsx}",
    "./src/_containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});

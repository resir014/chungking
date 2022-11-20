/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: [
    './node_modules/@resir014/chungking-react/**/*.{js,jsx,ts,tsx}',
    './node_modules/@chungking-ui/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('./packages/tailwindcss-plugin/src')],
};

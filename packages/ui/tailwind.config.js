const sharedConfig = require("tailwind-config/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts,tsx,js,jsx}'],
  prefix: "vers-",
  presets: [sharedConfig],
}


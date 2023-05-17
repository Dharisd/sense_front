/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sensor-blue': '#dbf6fd',
        'sensor-purple':'#e9e7fd',
        'sensor-orange':'#FEE4CB',
        
      },
  },
  plugins: [require('flowbite/plugin')],
}
}
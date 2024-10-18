/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        joti: ['"Joti One"', 'cursive'],        // Joti One
        jim: ['"Jim Nightshade"', 'cursive'],   // Jim Nightshade
        itim: ['Itim', 'sans-serif'],   
        kantumruy: ['"Kantumruy Pro"', 'sans-serif'],
        joan: ['"Joan"', 'serif'],            // Itim
      },
      colors: {
        primaryred: '#DE2C4D', 
        primaryyel:'#FB923C',
      },
    },
  },
  plugins: [],
}
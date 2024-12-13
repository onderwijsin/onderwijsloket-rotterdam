/** @type {import('tailwindcss').Config} */

const main = {
  '50': '#EDFAF6', 
  '100': '#DFF7F0', 
  '200': '#AEE8D5', 
  '300': '#84DBBB', 
  '400': '#3CC286', 
  '500': '#01a74f', 
  '600': '#029645', 
  '700': '#017D35', 
  '800': '#016325', 
  '900': '#004A19', 
  '950': '#00300F'
}


export const theme = {
  extend: {
    fontFamily: {
      sans: ['Akrobat', 'sans-serif'],
    },
    colors: {
      main,

      start: main[300],
      end: main[600],
    }
  }
}

export default {
  theme,
};
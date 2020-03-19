module.exports = {
  theme: {
    colors: {
      green: {
        '600': '#4A5950',
        '500': '#798672',
        '400': '#85907E',
        '300': '#9DA698', 
        '200': '#B5BBB1',
        '100': '#D9DCD8'
      },
      red: {
        '600': '#D37757',
        '500': '#E2AE94',
        '400': '#E3B49D',
        '300': '#E6C2B0', 
        '200': '#E9CFC2',
        '100': '#EEE3DE'
      },
      black: '#000',
      white: '#fff', 
    },
    screens: {
        'xs': '420px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '830px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  },
  
  variants: {
    cursor: ['responsive', 'hover', 'focus'],
  },
  plugins: [require("@tailwindcss/custom-forms")]
}

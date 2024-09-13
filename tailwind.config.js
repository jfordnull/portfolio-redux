/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        'body': ['aileron']
      },
      extend: {
        keyframes: {
            fadeIn: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
            moveUp: {
              '0%': { transform: 'translateY(20px)' },
              '100%': { transform: 'translateY(0)' },
            },
        },
        animation: {
            'fade-up': 'fadeIn 1s ease-in-out, moveUp 1s ease-in-out',
            'fade-up-1s-delay': 'fadeIn 1s ease-in-out 1s forwards, moveUp 1s ease-in-out 1s forwards',
            'fade-up-2s-delay': 'fadeIn 1s ease-in-out 2s forwards, moveUp 1s ease-in-out 2s forwards',
        },
      },
    },
    plugins: [],
  }
  
  
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        'body': ['aileron'],
        'body-bold': ['aileron-bold'],
        'body-italic': ['aileron-ital']
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
            scaleLine: {
              '0%': { transform: 'scaleX(0)', transformOrigin: 'right' },
              '100%': { transform: 'scaleX(1)', transformOrigin: 'right' },
            },
        },
        animation: {
            'fade-up': 'fadeIn 1s ease-in-out forwards, moveUp 1s ease-in-out forwards',
            'fade-in-med-delay': 'fadeIn 1s ease-in-out 1s forwards',
            'fade-in-max-delay': 'fadeIn 1s ease-in-out 1.5s forwards',
            'fade-up-max-delay': 'fadeIn 1s ease-in-out 1.5s forwards, moveUp 1s ease-in-out 1.5s forwards',
            'fade-in-slow': 'fadeIn 3s ease-in-out forwards',
            'scale-line-in': 'scaleLine 3s ease-out forwards',
        },
      },
    },
    plugins: [],
  }
  
  
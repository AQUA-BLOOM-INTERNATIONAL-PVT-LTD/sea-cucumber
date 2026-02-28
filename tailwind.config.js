/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        floatX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-8px)' },
        },
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '50%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        mailSend: {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '40%': { transform: 'scale(1.15) rotate(-10deg)', opacity: '1' },
          '60%': { transform: 'translateY(-6px) rotate(10deg)', opacity: '0.9' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
      },
      animation: {
        floatX: 'floatX 2s ease-in-out infinite',
        ring: 'ring 1s ease-in-out infinite',
        mailSend: 'mailSend 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [flowbite],
};
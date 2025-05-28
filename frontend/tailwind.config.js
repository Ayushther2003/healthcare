 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F7FF',
        primary: '#3D56F0',         // Active calendar dot/date
        secondary: '#1E2EFF',       // Dentist appointment card
        softPurple: '#E6E8FF',      // Physiotherapy card
        lightGray: '#E2E8F0',       // Borders and lines
        textGray: '#7E88A0',        // Calendar text
        buttonPurple: '#3B3FEC',    // Top-right circle button
        cardBg: '#F1F4FF',          // Upcoming schedule cards
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

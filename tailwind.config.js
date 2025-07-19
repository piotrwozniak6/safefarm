/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        safefarm: {
          green: '#234F1E', // CCOF-like deep green
          gold: '#C9A14A',  // CCOF gold
          charcoal: '#22292F', // dark gray/charcoal
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.75rem', // more rounded
        lg: '1rem',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(34, 41, 47, 0.08)', // soft card shadow
      },
    },
  },
  plugins: [],
}; 
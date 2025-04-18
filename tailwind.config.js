module.exports = {
  darkMode: 'class',
  content: [ './src/**/*.{html,js}' ],
  theme: {
    extend: {
      colors: {
        accent: '#4F46E5',
        background: {
          light: '#F9FAFB',
          dark:  '#111827'
        }
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: [],
};

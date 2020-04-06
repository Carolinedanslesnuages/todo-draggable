module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {},
    'postcss-nested-ancestors': {},
    'postcss-nested': {},
    'postcss-current-selector': {},
    'postcss-apply': {},
    'vue-cli-plugin-tailwind/purgecss': {
      content: [
        './src/**/*.html',
        './src/**/*.vue'
      ],
      whitelistPatterns: [
        /html/
      ]
    }
  }
}

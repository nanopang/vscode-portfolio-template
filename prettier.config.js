module.exports = {
  trailingComma: "none",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  printWidth: 150,
  // plugins: [require('prettier-plugin-tailwindcss')],
  pluginSearchDirs: false,
  overrides: [
    {
      "files": ["*.json", "*.js"],
      "options": {
        "tabWidth": 2
      }
    }
  ],
  arrowParens: "avoid"
}
module.exports = {
  // Tailwind Paths
  configJS: './tailwind.config.js',
  sourceCSS: './src/tailwind.css',
  outputCSS: './src/styles.css',
  watchRelatedFiles: [],
  // Sass
  sass: true,
  // PurgeCSS Settings
  purge: false,
  keyframes: false,
  fontFace: false,
  rejected: false,
  whitelist: [], // Problem solved
  whitelistPatterns: [], // overkill, but also works
  whitelistPatternsChildren: [],
  extensions: ['.ts', '.html', '.js'],
  content: []
}

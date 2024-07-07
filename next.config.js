const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js'
  extension: /\.mdx?$/
});
module.exports = withNextra();

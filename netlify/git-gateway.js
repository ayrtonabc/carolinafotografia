// Habilitar Git Gateway para Netlify CMS
module.exports = {
  resolve: 'gatsby-plugin-netlify-cms',
  options: {
    modulePath: `${__dirname}/src/cms/cms.js`,
    enableIdentityWidget: true,
    publicPath: 'admin',
    htmlTitle: 'Admin - Carolina Fotografía',
    includeRobots: false,
    htmlFavicon: '/static/favicon.ico',
    manualInit: true,
  },
};

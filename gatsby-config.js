const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Learning Firebase`,
    description: `Learning how to use firebase`,
    author: `Moshe Morris`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-root-import',
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-svgr',

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/img/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: '/src/assets/img/',
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),

        // Main Folders
        assets: path.join(__dirname, 'src/assets'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        styles: path.join(__dirname, 'src/styles'),

        // Site
        Auth: path.join(__dirname, 'src/components/Auth'),
        Dashboard: path.join(__dirname, 'src/components/Dashboard'),
        Elements: path.join(__dirname, 'src/components/Elements'),
        Layouts: path.join(__dirname, 'src/components/Layouts'),
        Utilities: path.join(__dirname, 'src/components/Utilities'),

        // Src
        Images: path.join(__dirname, 'src/assets/img'),

        // Styles
        Global: path.join(__dirname, 'src/styles/global'),
        Helpers: path.join(__dirname, 'src/styles/helpers'),
        Brands: path.join(__dirname, 'src/styles/helpers/brands'),
        Elevation: path.join(__dirname, 'src/styles/helpers/elevation'),
        Material: path.join(__dirname, 'src/styles/helpers/material-colors'),
        Responsive: path.join(__dirname, 'src/styles/helpers/responsive'),
        Theme: path.join(__dirname, 'src/styles/theme'),
        Variables: path.join(__dirname, 'src/styles/variables'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
  ],
}

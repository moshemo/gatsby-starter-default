const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Young Starup`,
    description: `Young Startup Description...`,
    author: `Young Startup`,
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
        site: path.join(__dirname, 'src/site'),
        styles: path.join(__dirname, 'src/styles'),

        // Site
        Ads: path.join(__dirname, 'src/site/Ads'),
        Elements: path.join(__dirname, 'src/site/Elements'),
        Forms: path.join(__dirname, 'src/site/Forms'),
        Layouts: path.join(__dirname, 'src/site/Layouts'),
        Lists: path.join(__dirname, 'src/site/Lists'),
        Pages: path.join(__dirname, 'src/site/Pages'),
        SEO: path.join(__dirname, 'src/site/SEO'),
        Structure: path.join(__dirname, 'src/site/Structure'),
        Utilities: path.join(__dirname, 'src/site/Utilities'),

        // Src
        Images: path.join(__dirname, 'src/assets/img'),

        // Styles
        Global: path.join(__dirname, 'src/styles/global'),
        Helpers: path.join(__dirname, 'src/styles/helpers'),
        Brands: path.join(__dirname, 'src/styles/Helpers/brands'),
        Elevation: path.join(__dirname, 'src/styles/Helpers/elevation'),
        Material: path.join(__dirname, 'src/styles/Helpers/material-colors'),
        Responsive: path.join(__dirname, 'src/styles/Helpers/responsive'),
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `news`,
        path: `${__dirname}/src/news`,
      },
    },
    // {
    //   resolve: `gatsby-source-graphql`,
    //   options: {
    //     typeName: 'WORDPRESS',
    //     fieldName: 'wordpress',
    //     url: 'http://wordpress-285784-939255.cloudwaysapps.com/graphql',
    //     refetchInterval: 60,
    //   },
    // },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://news.google.com/rss/search?q=medtech+venture&hl=en-US&gl=US&ceid=US:en`,
        name: `MedTechVenture`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ['itunes:duration'],
          },
        },
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'wordpress-285784-939255.cloudwaysapps.com',
        protocol: 'http',
        hostingWPCOM: false,
        useACF: true,
        verboseOutput: true,
        perPage: 100,
        concurrentRequests: 10,
        // See: https://github.com/isaacs/minimatch
        includedRoutes: [
          '**/categories',
          '**/posts',
          '**/pages',
          '**/article',
          '**/test',
          '**/media',
          '**/tags',
          '**/taxonomies',
          '**/users',
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

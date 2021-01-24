module.exports = {
  siteMetadata: {
    title: `Elliot Sharpe - Personal Portfolio`,
    description: `A personal website showcasing my developer projectss`,
    author: `@elliotsharpe`,
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elliot Sharpe - Portfolio Website`,
        short_name: `Elliot Sharpe Website`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#1b1b1b`,
        display: `minimal-ui`,
        icon: `src/images/e-icon-29.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

  ],
}

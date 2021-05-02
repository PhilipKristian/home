/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clients`,
        path: `${__dirname}/src/clients/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Playfair Display`, `Fira Sans`],

        display: "swap",
      },
    },
  ],
  siteMetadata: {
    title: "Philipp Kristian",
    description:
      "create a state-of-art website MVP that inspires users to start a conversation  ",
    copyright: "This website is copyright 2021 Philipp Kristian",
    contact: "hi@philippkristian.com",
    phone: "+65 8742 9582",
  },
};

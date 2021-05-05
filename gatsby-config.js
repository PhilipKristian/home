/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-remark-embed-video",
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
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled. //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              /* urlOverrides: [
                {
                  id: "vimeo",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], */ containerClass:
                "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            },
          },
        ],
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

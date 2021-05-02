const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Clients {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/clients/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/client-details.js"),
      context: { slug: node.frontmatter.slug },
    });
  });
};

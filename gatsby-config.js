module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /public/
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    }
  ]
};

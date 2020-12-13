module.exports = {
  siteMetadata: {
    title: `4Cavaleiros`,
    description: `A trama de 4Cavaleiros começa quando Baal, um ser do Inferno, resolve trazer o Apocalipse à Terra, antes do previsto pelo acordo entre Paraíso e Inferno (No caso o Paraíso ganhou no Jo Ken Po do Inferno e decidiu deixar o Apocalipse para um outro milênio`,
    author: `Cesar Augusto, Leandro G. Ganth, Rafael Torres, Victor Borborema, Yuri Faccioli, Thiago Madeira`,
    keywords: `4Cavaleiros, 4 Cavaleiros, 4 Horsemen, four horsemen, four horsemen game, the four horsemen of apocalypse, game, video game, indie, indie game, apocalypse game, darksiders`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: 'pt',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-49475328-1"]
      }
    },
    `gatsby-plugin-offline`,
  ],
}

module.exports = {
  title: "Train Empire Communauté",
  tagline:
    "Un regroupement d'outils et d'éléments fait par la communauté pour la communauté Attention, ce site n'est pas affilié au jeu",
  url: "http://train-empire.com",
  baseUrl: "/",
  favicon: "https://train-empire.com/fr/images/logo.png",
  organizationName: "Non afilié à Train Empire", // Usually your GitHub org/user name.
  projectName: "TE-Community", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "TE Community",
      logo: {
        alt: "My Site Logo",
        src: "https://train-empire.com/fr/images/logo.png"
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Tutos",
          position: "left"
        },
        { to: "blog", label: "Outils", position: "left" },
        {
          href: "https://train-empire.com",
          label: "Train Empire",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Tutos",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Nous rejoindre",
          items: [
            {
              label: "Jeu Train Empire",
              href: "https://train-empire.com"
            },
            {
              label: "Discord",
              href: "https://discord.gg/K9ja4UKWaR"
            }
          ]
        },
        {
          title: "Pour participer",
          items: [
            {
              label: "Envoyez votre tuto/outil à",
              to: "Tibo#4872"
            },
            {
              label: "GitHub",
              href: "https://github.com/Cyber-Thibaut/TE-community"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thibaut et la communauté TE`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};

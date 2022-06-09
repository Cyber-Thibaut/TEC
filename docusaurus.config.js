module.exports = {
  title: "Les Tutos MyLines",
  tagline:
    "Tout pour utiliser au maximum les capacités du moulin. Attention, ce site n'est pas affilié au jeu",
  url: "http://mylines.fr",
  baseUrl: "/",
  favicon: "img/logo.png",
  organizationName: "Non afilié à MyLines", // Usually your GitHub org/user name.
  projectName: "Les Tutos MyLines", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Tutos MyLines",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png"
      },
      links: [
        {
          to: "docs/introduction",
          activeBasePath: "docs",
          label: "Tutos",
          position: "left"
        },
        { to: "blog", label: "Change-log", position: "left" },
        {
          href: "https://mylines.fr",
          label: "MyLines",
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
              label: "Inscription",
              to: "docs/inscription"
            }
          ]
        },
        {
          title: "Nous rejoindre",
          items: [
            {
              label: "MyLines",
              href: "https://mylines.fr"
            },
            {
              label: "Discord",
              href: "https://discord.gg/AfMzyPHDq5"
            }
          ]
        },
        {
          title: "Pour participer",
          items: [
            {
              label: "Envoyez votre tuto/outil à Tibo#4872"
            },
            {
              label: "GitHub",
              href: "https://github.com/Cyber-Thibaut/TutoMylines"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Thibaut et la communauté MyLines`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Cyber-Thibaut/TutoMylines"
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Cyber-Thibaut/TutoMylines"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '2491 NoMythic Robotics',
  tagline: 'Documentation is cool (robots are cooler)',
  url: 'https://2491nomythic-docs.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'NoMythic',
        logo: {
          alt: 'NoMythic Site Logo',
          src: 'img/nomythic_unicorn.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/2491-NoMythic',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@2491nomythic',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/2491nomythic/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/2491nomythic',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Tech Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/2491-NoMythic',
              },
              { 
                label: 'Website', 
                href: 'http://2491nomythic.com/'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - 2491 NoMythic. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

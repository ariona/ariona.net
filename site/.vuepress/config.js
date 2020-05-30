const Critters = require('critters-webpack-plugin');

module.exports = {
  title: 'ariona.net', // Title for the site. This will be displayed in the navbar.
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }]
  ],
  themeConfig: {
    summaryLength: 200,
    paginationComponent: 'SimplePagination',
    authorBio: 'Papah nya azka, Front end developer dari Bandung – Indonesia. Suka terjemahin Photoshop ke HTML & CSS, Suka main vue.js sama React Native juga 😉',
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Blog",
        link: "/blog/"
      },
      {
        text: "Portfolio",
        link: "/projects/"
      },
      {
        text: "Contact",
        link: "/contact/"
      }
    ],
    smoothScroll: true,
    footer: {
      copyright: 'Coded with <span style="color:red">❤️</span> by Rian Ariona, Powered by <a href="https://vuepress.vuejs.org/">VuePress</a>',
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
          text: 'GitHub'
        },
        {
          type: 'codepen',
          link: 'https://codepen.io/ariona',
          text: 'Codepen'
        },
        {
          type: 'linkedin',
          link: 'https://www.linkedin.com/in/ariona/',
          text: 'LinkedIn'
        },
        {
          type: 'mail',
          link: 'mailto:helloariona@gmail.com',
          text: 'helloariona@gmail.com'
        }
      ]
    }
  },
  plugins: [
    'demo-block',
    'img-lazy',
    ['vuepress-plugin-reading-time'],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/blog/',
            itemPermalink: '/blog/:slug',
            pagination: {
              lengthPerPage: 10,
              prevText: 'Sebelumnya',
              nextText: 'Selanjutnya'
            },
          },
          {
            id: 'project',
            dirname: '_projects',
            path: '/projects/',
            layout: 'Projects',
            itemPermalink: '/project/:slug',
            itemLayout: 'Project',
            pagination: {
              lengthPerPage: 5,
              prevText: 'Sebelumnya',
              nextText: 'Selanjutnya'
            }
          }
        ],
        // frontmatters: [
        //   {
        //     id: 'tag',
        //     keys: ['tag','tags'],
        //     path: '/tag/',
        //     layout: 'Tags',
        //     scopeLayout: 'Tag'
        //   },
        // ],
        sitemap: {
          hostname: 'https://ariona.net'
        },
        feed: {
          canonical_base: 'https://ariona.net',
        },
        comment: {
          // Which service you'd like to use
          service: 'disqus',
          // The owner's name of repository to store the issues and comments.
          shortname: 'ariona',
        },
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.content-wrap p img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#fff',
          scrollOffset: 0,
        },
      },
    ],
    ['minimal-analytics', {ga: 'UA-22811026-1'}]
  ],
}
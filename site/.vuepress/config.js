module.exports = {
  title: 'ariona.net', // Title for the site. This will be displayed in the navbar.
  // theme: '@vuepress/theme-blog',
  themeConfig: {
    summaryLength: 300,
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
        text: "Let's work together",
        link: "/contact/",
        style: "button"
      }
    ],
    smoothScroll: true,
    footer: {
      copyright: '2020 &copy; Rian Ariona',
      contact: [
        {
          type: 'github',
          link: 'https://github.com/vuejs/vuepress',
        },
        {
          type: 'twitter',
          link: 'https://github.com/vuejs/vuepress',
        },
      ]
    }
  },
  head: [
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }],
    // ['script', { src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" }],
    // ['script', {}, '(adsbygoogle = window.adsbygoogle || []).push({  google_ad_client: "ca-pub-4513514396693466",  enable_page_level_ads: true });'],
  ],
  plugins: [
    'demo-block',
    ['check-md'],
    ['vuepress-plugin-reading-time'],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/blog/',
            itemPermalink: '/:slug',
            pagination: {
              lengthPerPage: 10,
              prevText: 'Sebelumnya',
              nextText: 'Selanjutnya'
            },
          },
          {
            id: 'page',
            dirname: '_pages',
            path: '/pages/',
            itemPermalink: '/page/:slug',
            itemLayout: 'Page',
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
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag','tags'],
            path: '/tag/',
            layout: 'Tags',
            scopeLayout: 'Tag'
          },
        ],
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
        selector: '.content-wrap img',
        delay: 1000,
        options: {
          margin: 24,
          background: '#fff',
          scrollOffset: 0,
        },
      },
    ],
  ]
}
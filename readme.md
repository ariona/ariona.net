# ariona.net

<p>
  <a href="https://app.netlify.com/sites/elegant-ptolemy-bc0766/deploys"><img src="https://api.netlify.com/api/v1/badges/06fb15a4-5c8d-4048-9f84-3d2c50111f20/deploy-status" alt="Netlify"></a>
  <a href="https://github.com/ariona/rn-utility-style/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/rn-utility-style.svg" alt="License"></a>
</p>

------

This is the repository for [my website](https://ariona.net), fully open sourced, so you can learn or contribute to it if there is mistakes on some of my articles.

The site was built using [VuePress](https://vuepress.vuejs.org/) and hosted on [Netlify](https://netlify.com). This site was migrated from WordPress using [WordPress-export-to-markdown](https://github.com/lonekorean/wordpress-export-to-markdown) tool.

## Running Locally
If you want to run the site locally you can do it by cloning this repository first:

```bash
git clone https://github.com/ariona/ariona.net.git

#or

git clone git@github.com:ariona/ariona.net.git
```

Next, move working directory to the project folder and start installing dependency using yarn/node install command.

```bash
npm install
#or
yarn install
```

Last, is running the site using below command

```bash
yarn site:dev
#or
npm run site:dev
```

## Directory Structures

The site contents is placed inside `site` directory.

```bash
📦 site
├── 📂 .vuepress
│   ├── 📂 components  # this hold global component for markdown file
│   ├── 📂 dist # compiled pages, it's the end result from building the project and the one that will be hosted
│   ├── 📂 public # this hold some assets
│   ├── 📂 theme # the theme used for the site
│   ├── 📜 config.js # VuePress & Theme configuration file
│   └── 📜 enhanceApp.js # used for redirection in my case
├── 📂 _pages # used for pages, currently not used
├── 📂 _posts # blog posting directory
├── 📂 _projects # project directory
├── 📂 contact # Contact page
├── 📂 ebook-belajar-html-dan-css #ebook-belajar-html-dan-css
└── 📜 index.md # Homepage, use .vuepress/theme/layouts/Homepage.vue
```

## Contribution
Contribution are welcome, if you found some bug in layout, some mistakes in the blog posts please create an issue or make a pull request for it :)

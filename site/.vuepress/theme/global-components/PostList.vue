<template>
  <div class="post-index" id="js-scroll">

    <div class="hero" data-scroll-section v-if="$pagination._currentPage.path == '/blog/'">
      <div class="hero-container">
        <div class="hero-image">
          <div class="image-wrapper" style="padding-bottom:115.6%">
            <img src="../../../assets/images/cover-pat.png">
          </div>
        </div>
        <div class="hero-detail">
          <span>Download Ebook Gratis</span>
          <h2>Belajar HTML & CSS<br/><small>"Tutorial Fundamental dalam Mempelajari HTML & CSS"</small></h2>
          <a href="#">Baca Selengkapnya </a>
        </div>
      </div>
    </div>

    <!-- <pre v-html="$pagination"></pre> -->
    <div data-scroll-section class="post-list" itemscope itemtype="http://schema.org/Blog">
      
      <div class="post-list-header">
        <h2 class="section-title">Blog & Tutorial</h2>
      </div>

      <article
        :key="page.key"
        v-for="page in pages"
        class="post"
        itemprop="blogPost"
        itemtype="https://schema.org/BlogPosting">
        <meta itemprop="mainEntityOfPage" :content="page.path" />

        <!-- <figure v-if="!page.frontmatter.thumbnail" class="featured-image" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
          <NavLink :link="page.path" style="padding-bottom:62.8%">
            <img class="lazyload loaded" :src="page.frontmatter.thumbnail" :alt="page.title" itemprop="image" width="250" height="157" data-was-processed="true">
          </NavLink>
          <meta itemprop="url" content="page.frontmatter.thumbnail">
          <meta itemprop="width" content="250">
          <meta itemprop="height" content="194">
        </figure> -->

        <div class="post-detail">
          <h1 class="post-title" itemprop="name headline">
            <NavLink :link="page.path">{{page.title}}</NavLink>
          </h1>

          <div class="post-summary" itemprop="description">
            <p>{{ page.frontmatter.summary || page.summary }}</p>
          </div>
          <PostMeta
            :author="page.frontmatter.author"
            :authorEmail="page.frontmatter.email"
            :date="page.frontmatter.date"/>
        </div>

        <NavLink :link="page.path" class="more-link">Baca selengkapnya</NavLink>
      </article>
    </div>

    <div data-scroll-section class="post-pagination">
      <component :is="paginationComponent" v-if="$pagination.length > 1 && paginationComponent" />
      
      <div class="pagination-select">
        <span>Halaman ke </span>
        <select :value="$pagination._currentPage.path" @change="changePage">
          <option v-for="(page, index) in $pagination._paginationPages" :value="page.path">{{index+1}}</option>
        </select>
        <span> dari {{$pagination.length}}</span>
      </div>
    </div>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */
import 'dayjs/locale/id'
import Vue from 'vue'
import dayjs from 'dayjs'
import PostMeta from '@theme/components/PostMeta.vue'
import { NavigationIcon, ClockIcon, TagIcon } from 'vue-feather-icons'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

dayjs.locale('id')

export default {
  components: { PostMeta, NavigationIcon, ClockIcon, TagIcon },

  data() {
    return {
      paginationComponent: null,
    }
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },


  computed: {
    pages() {
      return this.$pagination.pages
    }
  },

  methods: {

    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },

    resolvePostDate(date) {
      return dayjs(date).format(
        this.$themeConfig.dateFormat || 'DD MMM YYYY'
      )
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },

    changePage(e) {
      // console.log(this.$pagination)
      this.$router.push({path:`${e.target.value}`}).catch(e => {})
    }
  },
}
</script>

<style lang="scss">
body:not(.scrolled) .blog-index .site-header{
  --contentColor: white;
}

.post-list {
  max-width: var(--contentMaxWidth);
  margin: 60px auto 0;
  padding-left: 15px;
  padding-right: 15px;

  .page-blog & {
    padding-top: 80px;
  }

  &-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }
}

.hero {
  background-color: var(--accentColor);
  color: white;
  margin-bottom: 30px;
  padding-top: 80px;

  &-container {
    max-width: 990px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 40px 15px;

    @media screen and (max-width: 768px) {
      display: block;
      text-align: center;
      padding-bottom: 60px;
    }
  }

  .hero-image {
    width: 500px;
    max-width: 100%;
    order: 1;

    @media screen and (max-width: 768px) {
      order: 0;
    }
  }

  .hero-detail{
    flex: 1;
    span{
      font-size: 24px;
    }
    h2{
      font-size: 40px;
      color: inherit;
      font-weight: 900;
      margin: 10px 0 40px;
      line-height: 1;
    }
    small {
      font-weight: 400;
      font-size: 24px;
      line-height: 1;
      font-style: italic;
    }
  }

  img{
    margin-right: -40px;
  }

  a {
    display: inline-block;
    border: 2px solid white;
    padding: 10px 30px;
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }
}
.post {
  box-shadow: 0px 1px 2px rgba(46,41,51,0.08), 0px 2px 4px rgba(71,63,79,0.08);
  transition: transform .3s ease, box-shadow .3s ease;
  position: relative;
  padding: 40px;
  color: #78757a;
  background: white;
  border-radius: 4px;

  &:not(:last-child){ margin-bottom: 2em; }

  &:hover{
    box-shadow: 0px 4px 8px rgba(46,41,51,0.08), 0px 8px 16px rgba(71,63,79,0.16);
    transform: translate3d(0, -0.25px, 0);
  }

  &-title {
    margin: 0 0 15px;
    font-size: 1.5em;
    font-weight: 700;

    a {
      color: #000;
      text-decoration: none;
    }
  }

  .more-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-indent: -9999px;
    overflow: hidden;
  }
}
.post-pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--contentMaxWidth);
  margin: 0 auto;
  padding: 40px;
}
.pagination-select {
  select {
    height: 2em;
    width: 3em;
    background-color: #fbfbfb;
    border: none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
    padding: 0 5px;
  }
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    border: none;
    color: var(--accentColor);
    background: transparent;

    &:hover {
      border: none;
      background-color: transparent;
      color: var(--accentColor);
    }
  }
}
</style>
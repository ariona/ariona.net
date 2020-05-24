<template>
  <div class="post-index">

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
          <a href="/ebook-belajar-html-dan-css">Baca Selengkapnya </a>
        </div>
      </div>
    </div>

    <!-- <pre v-html="$pagination"></pre> -->
    <div data-scroll-section class="post-list" itemscope itemtype="http://schema.org/Blog">
      
      <div class="post-list-header">
        <h2 class="section-title">Blog & Tutorial</h2>
      </div>

      <PostItem
        :key="page.key"
        v-for="page in pages"
        :data="page"
      />

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
import PostItem from '@theme/components/PostItem'

import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'

dayjs.locale('id')

export default {
  components: { PostItem },

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
  max-width     : var(--contentMaxWidth);
  margin        : 60px auto 0;
  padding-left  : 15px;
  padding-right : 15px;

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
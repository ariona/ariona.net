<template>
  <article
    class="post"
    itemprop="blogPost"
    itemtype="https://schema.org/BlogPosting">
    <meta itemprop="mainEntityOfPage" :content="data.path" />

    <!-- <figure v-if="!data.frontmatter.thumbnail" class="featured-image" itemprop="image" itemscope="" itemtype="https://schema.org/ImageObject">
      <NavLink :link="data.path" style="padding-bottom:62.8%">
        <img class="lazyload loaded" :src="data.frontmatter.thumbnail" :alt="data.title" itemprop="image" width="250" height="157" data-was-processed="true">
      </NavLink>
      <meta itemprop="url" content="data.frontmatter.thumbnail">
      <meta itemprop="width" content="250">
      <meta itemprop="height" content="194">
    </figure> -->

    <div class="post-detail">
      <h1 class="post-title" itemprop="name headline">
        <NavLink :link="data.path">{{data.title}}</NavLink>
      </h1>

      <div class="post-summary" itemprop="description">
        <p>{{ data.frontmatter.summary || data.summary }}</p>
      </div>
      <PostMeta
        :author="data.frontmatter.author"
        :authorEmail="data.frontmatter.email"
        :date="data.frontmatter.date"/>
    </div>

    <NavLink :link="data.path" class="more-link">Baca selengkapnya</NavLink>
  </article>
</template>

<script>
import PostMeta from '@theme/components/PostMeta'

export default {
  components: { PostMeta },
  props: {
    data: Object
  }
}
</script>

<style lang="scss">
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
</style>
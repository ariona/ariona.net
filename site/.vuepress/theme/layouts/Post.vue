<template>
  <div class="post-single-page">
    <article
      class="post-single"
      itemscope
      itemtype="https://schema.org/BlogPosting">
      <div class="post-single-wrap">
        <header>
          <PostMeta
            :author="$frontmatter.author"
            :authorEmail="$frontmatter.email"
            :showBio="true"
            :avatarSize="64"
            :date="$frontmatter.date"
          />
          <h1 class="post-title" itemprop="name headline">
            {{ $frontmatter.title }}
          </h1>
        </header>
        <div class="content-wrap">
          <Toc />
          <Content itemprop="articleBody" />
        </div>
        <footer class="post-footer">
          <Newsletter v-if="$service.email.enabled" />

          <Comment />
        </footer>
      </div>
    </article>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc.vue'
import PostMeta from '@theme/components/PostMeta.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
export default {
  
  components: {
    Toc,
    PostMeta,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },
}
</script>

<style lang="scss">
.post-single-wrap {
  max-width: var(--contentMaxWidth);
  margin: 0 auto;
  color: #36313d;
  padding: 0 15px;
  margin-top: 160px;
}
.post-single {
  .post-title{
    font-size: 48px;
    margin-top: 0;
    margin-bottom: 40px;
  }
  .content-wrap {
    .sticker {
      padding-top: 140px;
      width: 300px;

      a {
        font-size: .9em;
        white-space: pre-wrap;
      }

      @media screen and (max-width: 1300px) {
        display: block;
        position: relative;
        padding-top: 0;
        margin: 30px 0;
        left: 0;
        max-width: none;
      }
    }

    img {
      margin: 0 auto;
      max-width: 100%;
      display: block;
    }
  }
}
.codepen-iframe{
  width: 100%;
  padding-bottom: 75%;
  position: relative;

  iframe{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.post-footer {
  margin-top: 120px;
}
@media screen and (max-width: 419px){
  .content__default div[class*="language-"] {
    margin: 30px -15px;
  }

}
</style>

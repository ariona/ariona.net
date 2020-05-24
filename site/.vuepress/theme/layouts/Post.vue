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
          
          <div class="github-edit">
            <NavLink class="edit-on-github" :link="createEditLink ('https://github.com/ariona/ariona.net', 'https://github.com/ariona/ariona.net', 'site', 'master', '/'+$page.relativePath)">Edit artikel ini di GitHub</NavLink>
            
            <div class="last-updated" v-if="lastUpdated">
              <span class="prefix">{{ lastUpdatedText }}: </span>
              <span class="time">{{ lastUpdated }}</span>
            </div>
          </div>
          
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
import { outboundRE, endingSlashRE } from '@theme/components/util'
import 'dayjs/locale/id'
import dayjs from 'dayjs'
dayjs.locale('id')

export default {
  
  components: {
    Toc,
    PostMeta,
    Comment,
    Newsletter: () => import('@theme/components/Newsletter.vue'),
  },

  computed: {
    lastUpdated () {
      if (this.$page.lastUpdated) {
        return dayjs(this.$page.lastUpdated).format('DD MMM YYYY')
      }
    },
    lastUpdatedText () {
      if (typeof this.$themeLocaleConfig.lastUpdated === 'string') {
        return this.$themeLocaleConfig.lastUpdated
      }
      if (typeof this.$site.themeConfig.lastUpdated === 'string') {
        return this.$site.themeConfig.lastUpdated
      }
      return 'Terakhir diperbarui'
    },
  },

  methods: {
    createEditLink (repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo)
          ? docsRepo
          : repo
        return (
          base.replace(endingSlashRE, '') +
           `/${docsBranch}` +
           (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
           path +
           `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        )
      }
      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`
      return (
        base.replace(endingSlashRE, '') +
        `/edit/${docsBranch}` +
        (docsDir ? '/' + docsDir.replace(endingSlashRE, '') : '') +
        path
      )
    }
  }
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

.github-edit{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  padding: 15px;
  background-color: #fbfbfb;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
}
.edit-on-github {
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
}
</style>

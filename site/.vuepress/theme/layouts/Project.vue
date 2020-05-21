<template>
  <div class="project-single-page" id="js-scroll">
    <article
      class="project-single"
      itemscope
      itemtype="https://schema.org/BlogPosting">
      <div class="project-single-wrap">
        <header>
          <h1 class="project-title" itemprop="name headline">
            {{ $frontmatter.title }}
          </h1>

          <dl class="project-meta">
            <div>
              <dt>Role</dt>
              <dd>
                <ul><li v-for="role in $frontmatter.role">{{role}}</li></ul>
              </dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{{resolvedDate}}</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>{{$frontmatter.client}}</dd>
            </div>
            <div>
              <dt>URL</dt>
              <dd><a :href="$frontmatter.url" target="_blank" rel="nofollow">{{$frontmatter.url}}</a></dd>
            </div>
          </dl>

        </header>
        <div class="content-wrap">
          <Content itemprop="articleBody" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  computed: {
    resolvedDate() {
      return dayjs(this.date).format( 'YYYY' )
    },
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
</style>

<template>
  <div class="project-single-page">
    <article
      class="project-single"
      itemscope
      itemtype="https://schema.org/BlogPosting">
      <div class="project-single-wrap">
        <header :style="{
          backgroundColor:$page.frontmatter.coverColor,
          '--contentColor': $page.frontmatter.coverTextColor,
          }">
          <div class="project-bg" :class="{'scroller':$page.frontmatter.scroller}" :style="{backgroundImage:`url(${$frontmatter.cover})`}"></div>
          <div class="project-data">
            <div class="project-detail">
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
            </div>
          </div>
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
.project-single {
  header{
    padding: 160px 15px 0;
    margin-bottom: 60px;
    position: relative;
    z-index: 1;
  }

  .project-bg{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    mix-blend-mode: multiply;
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom right;
    opacity: 0.5;
    z-index: -1;

    &.scroller {
      animation: scrollerRight 50s linear alternate;

      @media screen and (max-width: 768px) {
        animation: none;
      }
    }
  }

  .project-data {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  .project-detail {
    flex: 1;
    padding: 30px 30px 30px 0;
  }

  img {
    mix-blend-mode: multiply;
  }

  .project-title {
    margin-top: 0;
    margin-bottom: 60px;
    font-size: 4em;
    text-align: left;

    color: var(--contentColor, #000)
  }

  .project-meta{
    display: flex;
    flex-wrap: wrap;

    div {
      width: 50%;
      margin-bottom: 30px;
    }
    dt{
      font-weight: 700;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--contentColor, #000)
    }
    dd {
      margin-left: 0;
      color: var(--contentColor, currentColor);

      a { color: inherit; }
    }
    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;
    }
  }

  .content-wrap {
    padding-left: 15px;
    padding-right: 15px;
    p {
      max-width: 768px;
      margin-left: auto;
      margin-right: auto;
    }
  }
}
@keyframes scrollerRight {
  0% {
    background-position: top right;
  }
  50% {
    background-position: bottom right;
  }
  100% {
    background-position: top right;
  }
}
</style>

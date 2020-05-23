<template>
  <div class="site-wrap" :class="pageClass">
    <Header />
    <transition name="fade">
      <GlobalLayout />
    </transition>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'

export default {
  components: { GlobalLayout },

  mounted() {
    window.addEventListener('scroll', this.scrollMonitor )
  },

  computed: {

    pageClass() {
      const path = this.$page.path.replace(/\//g," ").trim().split(" ");

      if ( this.$page.frontmatter.layout == "Post" ) return

      if ( path.length > 1 ) {
        return `page-${path[0]} `
      }
      return path[0] + ` ${path[0]}-index`;
    }

  },

  destroyed() {
    window.removeEventListener('scroll', this.scrollMonitor )
  },

  methods: {
    scrollMonitor() {
      if ( window.scrollY > 100 ) {
        document.body.classList.add('scrolled')
      } else {
        document.body.classList.remove('scrolled')
      }
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  // transform: translate3d(0,50px,0);
}

.image-wrapper{
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.section-title {
  margin: 0;
  border-bottom: none;
  font-size: 3em;
  font-weight: 900;

  // &:before{
  //   content: "/ ";
  //   color: var(--accentColor);
  // }
}
.section-subtitle {
  text-transform: uppercase;
  letter-spacing: 4px;
}

.spacer {
  height: 100px;
}
.flex {
  display: flex;
}
.items-center{
  align-items: center;
}
.container {
  max-width: 990px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
}
</style>

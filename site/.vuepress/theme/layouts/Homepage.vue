<template>
  <div class="homepage" data-scroll-container>
    <!-- <div class="cursor"></div> -->
    <div data-scroll-section class="homepage-hero">
      <span class="hello-bg">HELLO</span>
      <div class="container">
        <div class="hero-text">I am a Frontend developer who loves to translate designs files into Web Application <br/>– Based in Bandung - Indonesia</div>
      </div>
    </div>

    <div data-scroll-section class="projects --featured">
      <div class="container">

        <div class="section-subtitle">Selected projects</div>
        <h2 class="section-title">Projects</h2>

        <Project :data="project" v-for="project in projects" />

      </div>
    </div>

    <div class="spacer"></div>

    <div data-scroll-section class="projects --personal">
      <div class="container">
        <div class="section-subtitle">Library & Experiments</div>
        <h2 class="section-title">Personal Project</h2>

        <div class="project" data-scroll>
          <div class="project-detail">
            <h2 class="project-title">RN Utility Style</h2>
            <div class="project-desc">
              <p>It's an <strong>Utility Style Framework</strong> for rapidly building React Native's User Interface. You now can style your React Native App with utility class just like tailwind.css</p>
            </div>
            <a class="project-link" target="_blank" rel="noreferrer" href="https://ariona.github.io/rn-utility-style/">Learn more <span class="screen-reader-text">about RN Utility Style</span></a>
          </div>
          <figure class="project-image">
            <img-lazy src="/assets/img/projects/rn-utility-style.webp" alt="RN Utility Style" />
          </figure>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Project from '@theme/components/ProjectItem'

export default {

  components: {Project},

  mounted() {
    window.addEventListener( 'load', this.itsLoaded )
  },

  destroyed() {
    window.removeEventListener( 'load', this.itsLoaded )
  },

  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      projects: [
        {
          frontmatter: {
            title: 'Tanzil',
            date: '2018-08-78',
            summary: 'Tanzil is an Al-Qur\'an for Android built with React Native Framework. It has beautiful and functional User interface and shipped with features that will help user read and memorise Al-Quran easily.',
            cover: '/assets/img/projects/tanzil.webp'
          },
          path: '/project/tanzil',
        },
        {
          frontmatter: {
            title: 'UKM Digital',
            date: '2020-08-78',
            summary: 'UKM Digital is a website builder platform for small to medium size business. With it\'s block based editor it\'s never been easy to create a website. Just select block design, edit the content and publish it.',
            cover: '/assets/img/projects/ukm.webp',
            style: "margin-left: -40px"
          },
          path: '/project/ukm',
        },
        {
          frontmatter: {
            title: 'Themezy',
            date: '2015-08-78',
            summary: 'Themezy is a HTML & CSS Website Templates provider that be downloaded for free',
            cover: '/assets/img/projects/themezy.webp',
            scroller: true
          },
          path: '/project/themezy',
        },

      ]
    }
  },

  methods: {
    itsLoaded() {
      document.body.classList.add('loaded')
    }
  }

}
</script>

<style lang="scss">
.cursor, .cursor-main{
  background-color: var(--accentColor);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  transform: translate3d(-50%,-50%,0);
  will-change: left, top;
  pointer-events: none;
  opacity: 0;
  transition: opacity .3s ease;

  &.visible {
    opacity: 1
  }
}
.cursor-main {
  width: 40px;
  height: 40px;
  background: white;
  mix-blend-mode: difference;
  z-index: 70
}
.homepage {
  background-color: white;
  // overflow-x: hidden;
}

.homepage-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  // overflow: hidden;
  position: relative;
  z-index: 1;

  .hero-text {
    text-align: center;
    font-size: 3em;
    font-weight: 400;
    margin: 0;
    border-bottom: none;
    padding-bottom: 0;
    user-select: none;
    color: var(--darkTextColor);

    @media screen and (max-width: 768px) {
      font-size: 1.5em;
      text-align: left;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: auto;
    padding: 200px 0 160px;
  }
}
.hello-bg{
  font-size: 30vw;
  white-space: nowrap;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 0;
  z-index: -1;
  color: white;
  line-height: 100vh;
  font-weight: 900;
  text-shadow: 0 30px 100px rgba(0,0,0,.08);
  user-select: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s ease;

  .loaded & {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
}
</style>
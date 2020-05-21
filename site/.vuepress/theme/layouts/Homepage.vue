<template>
  <div class="homepage" id="js-scroll" data-scroll-container>
    <!-- <div class="cursor"></div> -->
    <div data-scroll-section class="homepage-hero">
      <span class="hello-bg">HELLO</span>
      <div class="container">
        <h2 class="hero-text">I am a Frontend developer who loves to translate designs files into Web Application <br/>– Based in Bandung - Indonesia</h2>
        
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
            <div class="project-link">Learn more</div>
          </div>
          <figure class="project-image">
            <img src="../../../images/rn-utility-style.png" alt="">
          </figure>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { ArrowRightIcon } from 'vue-feather-icons'
import Project from '@theme/components/ProjectItem'

export default {

  components: {ArrowRightIcon, Project},

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
            path: '/project/tanzil',
            cover: '/images/tanzil.png'
          }
        },
        {
          frontmatter: {
            title: 'UKM Digital',
            date: '2020-08-78',
            summary: 'UKM Digital is a website builder platform for small to medium size business. With it\'s block based editor it\'s never been easy to create a website. Just select block design, edit the content and publish it.',
            path: '/project/ukm',
            cover: '/images/ukm.png',
            style: "margin-left: -40px"
          }
        },
        {
          frontmatter: {
            title: 'Themezy',
            date: '2015-08-78',
            summary: 'Themezy is a HTML & CSS Website Templates provider that be downloaded for free',
            path: '/project/themezy',
            cover: '/images/themezy.jpg',
            scroller: true
          }
        },

      ]
    }
  },


  methods: {
    onMouseMove( event ){
      this.mouseX = event.pageX;
      this.mouseY = event.pageY;
    },
    followCursor( element, speed ) {

      const cursor = document.querySelector( element );

      let elementX = 0;
      let elementY = 0;

      let cSpeed = speed || 0.5;

      const animate = () => {
        let distanceX = this.mouseX - elementX
        let distanceY = this.mouseY - elementY

        // Let slowdown the speed
        elementX = elementX + ( distanceX * cSpeed );
        elementY = elementY + ( distanceY * cSpeed );

        cursor.style.left = elementX + 'px';
        cursor.style.top  = elementY + 'px';

        requestAnimationFrame( animate );
      }
      animate();
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
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 69;
}
.site-brand h1{
  margin : 0;
  font-weight: 900;
}
.site-brand small {
  font-size: 1em
}
.site-navigation {
  font-weight: 700;
  a {
    color: #333;
    text-decoration: none;
    padding: 10px 15px;
    &:last-child { padding-right: 0; }

    &:hover{
      // color: var(--accentColor);
    }
  }
}
.container {
  max-width: 990px;
  margin: 0 auto;
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
</style>
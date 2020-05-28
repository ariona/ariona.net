<template>
  <footer class="footer">
    <NavLink aria-label="Contact Me" link="/contact/" class="fab contact-button"><i class="icon-mail"></i></NavLink>
    <div @click="backToTop" class="fab back-2-top"><i class="icon-arrow-up"></i></div>
    <div @click="toggleMobileMenu" class="fab mobile-menu-button">
      <i class="icon-align-right icon-menu" v-if="!mobileMenuActive"></i>
      <i class="icon-x" v-else></i>
    </div>
    <div v-if="copyright" class="copyright" v-html="copyright"></div>

    <MobileMenu v-if="mobileMenuActive" />
  </footer>
</template>

<script>
import MobileMenu from '@theme/components/MobileMenu'

export default {
  components: { MobileMenu },

  data(){
    return {
      mobileMenuActive: false
    }
  },

  computed: {

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || ""
      )
    },
  },

  mounted() {
    this.$router.afterEach(() => {
      this.mobileMenuActive = false
    })
  },

  methods: {
    backToTop() {
      window.scrollTo(0, 0);
    },
    toggleMobileMenu() {
      this.mobileMenuActive = !this.mobileMenuActive
    },

  },
}
</script>

<style lang="scss">
.footer{
  padding: 60px 30px;
  text-align: center;

  .fab {
    position: fixed;
    bottom: 30px;
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 50%;
    box-shadow:  0 1px 1px rgba(0,0,0,.1), 0 2px 4px rgba(0,0,0,.1);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 24px;

    &.contact-button{
      left: 30px;
      &.router-link-exact-active.router-link-active {
        display: none;
      }
    }
    &.back-2-top, &.mobile-menu-button{ 
      right: 30px;
    }
    &.back-2-top {
      opacity: 0;
      visibility: hidden;
      transition: .3s ease;

      .scrolled &{
        opacity: 1;
        visibility: visible;
      }

      @media screen and (max-width: 990px) { display: none }

    }
    &.mobile-menu-button{
      z-index: 72;
      @media screen and (min-width: 991px) { display: none }
    }
  }
}
</style>
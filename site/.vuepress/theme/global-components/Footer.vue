<template>
  <footer class="footer">
    <a href="/contact.html" class="fab contact-button"><mail-icon size="1.5x" class="custom-class"></mail-icon></a>
    <div @click="backToTop" class="fab back-2-top"><arrow-up-icon size="1.5x" class="custom-class"></arrow-up-icon></div>
    <div v-if="copyright" class="copyright" v-html="copyright"></div>
  </footer>
</template>

<script>
import {
  MailIcon,
  ArrowUpIcon
} from 'vue-feather-icons'

export default {
  components: {
    MailIcon,
    ArrowUpIcon
  },

  computed: {

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || ""
      )
    },
  },

  methods: {
    backToTop() {

    }
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

    &.contact-button{ left: 30px; }
    &.back-2-top{ right: 30px; }
  }
}
</style>
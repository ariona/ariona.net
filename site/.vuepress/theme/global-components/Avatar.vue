<template>
  <img class="avatar" :src="getAvatar()" alt="Avatar" :width="size" :height="size">
</template>

<script>
import md5 from 'md5'
export default {
  props: {
    email: String,
    size: Number
  },
  methods: {
    getAvatar() {
      let url = `https://www.gravatar.com/avatar/${ md5( this.email ) }`
      if ( this.size ) url += `?s=${this.size}`

      return url
    }
  }
}
</script>
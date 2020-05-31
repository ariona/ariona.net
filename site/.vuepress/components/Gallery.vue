<template>
  <div class="gallery">
    <figure v-for="image in pictures">
      <a target="_blank" :href="image.src">
        <img-lazy :src="image.thumbnail" :alt="image.filename"/>
      </a>
    </figure>
  </div>
</template>

<script>
// import VuePictureSwipe from 'vue-picture-swipe';
export default {
  // components: { VuePictureSwipe },
  props: {
    images: Array,
    thumbnail: Boolean,
    frame: String
  },
  computed: {
    pictures() {
      return this.images.map( ({filename, w, h}) => {
        return {
          src: `/assets/img/${filename}`,
          thumbnail: this.thumbnail ? `/assets/img/thumb-${filename}` : `/assets/img/${filename}`,
          w,
          h
        }
      } )
    }
  }
}

</script>
<style lang="scss">
.gallery{
  display: flex;
  flex-wrap: wrap;
  margin: 60px -10px;

  figure {
    width: 20%;
    margin: 0;
    padding: 10px;

    @media screen and (max-width: 768px) {
      width: 33.3333%;
    }
    @media screen and (max-width: 640px) {
      width: 50%;
    }

    img {
      width: 100%;
      display: block;
    }
  }
}
</style>
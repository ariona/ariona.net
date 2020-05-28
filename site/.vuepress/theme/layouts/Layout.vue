<template>
  <div class="site-content">
    <PostList v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import PostList from '@theme/components/PostList'
export default {
  components: { PostList }
}
</script>
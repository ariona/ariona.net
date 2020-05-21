<template>
  <div class="site-content">
    <PostList v-if="$pagination" />
    <Content v-else />
  </div>
</template>
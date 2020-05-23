<template>
  <div v-if="$pagination" class="project-list">
    <Project
      v-for="project in $pagination.pages"
      :data="project"
    />
  </div>
</template>

<script>
import ProjectItem from '@theme/components/ProjectItem'
export default {
  components: { Project: ProjectItem }
}
</script>

<style lang="scss">
.project-list{
  max-width: 990px;
  padding: 0 15px;
  margin: 160px auto 0;
}
</style>
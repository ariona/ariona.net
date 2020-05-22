<template>
  <div class="post-meta" v-if="!showBio">
    <span class="byline"
      v-if="author"
      itemprop="publisher author"
      itemtype="http://schema.org/Person"
      itemscope
      >
      <Avatar :email="authorEmail" :size="avatarSize || 32" />
      <span itemprop="name">{{ author }}</span>
    </span> —
    <span v-if="date" class="ui-post-meta ui-post-date">
      <time
        pubdate
        itemprop="datePublished"
        :datetime="date"
      >
        {{ resolvedDate }}
      </time>
    </span>
  </div>
  <div class="post-meta with-bio" v-else>
    <Avatar :email="authorEmail || 'helloariona@gmail.com'" :size="avatarSize || 32" />
    <div class="post-meta-detail">
      <strong class="byline"
        v-if="author"
        itemprop="publisher author"
        itemtype="http://schema.org/Person"
        itemscope
        >
        <span itemprop="name">{{ author }}</span>
      </strong>
      <div class="author-bio" v-if="$themeConfig.authorBio">{{ $themeConfig.authorBio }}</div>
      <span>{{readingTime}}</span> – 
      <span v-if="date" class="ui-post-meta ui-post-date">
        <time
          pubdate
          itemprop="datePublished"
          :datetime="date"
          >
          {{ resolvedDate }}
        </time>
      </span>
    </div>
  </div>

</template>

<script>
import 'dayjs/locale/id'
import dayjs from 'dayjs'
import PostTag from './PostTag.vue'

dayjs.locale('id')

export default {
  name: 'PostMeta',
  props: {
    author: String,
    authorEmail: String,
    date: String,
    avatarSize: Number,
    showBio: Boolean
  },
  computed: {
    readingTime(){
      const { minutes } = this.$page.readingTime
      return `Bacaan ${ Math.round( minutes ) } Menit`
    },
    resolvedDate() {
      return dayjs(this.date).format(
        this.$themeConfig.dateFormat || 'DD MMM YYYY'
      )
    },
  },
}
</script>

<style lang="scss">
.post-meta, .byline{
  display: flex;
  align-items: center;
}
.post-meta .avatar{
  border-radius: 50%;
  margin-right: .5em;
  flex-shrink: 0;
}
.with-bio {
  align-items: flex-start;
  margin-bottom: 60px;
  color: #777;

  .post-meta-detail {
    padding-left: 15px;
    font-size: .9em;
  }
  .byline{ 
    font-size: 18px;
    margin-bottom: 5px;
    color: #333;
  }
  .author-bio {
    margin-bottom: 10px;
  }
}
</style>
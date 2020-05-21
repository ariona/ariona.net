<template>
  <SimpleNewsletter v-slot="{ slotProps }">
    <div class="newsletter__wrap">
      <div class="newsletter__title">{{ slotProps.title }}</div>
      <div class="newsletter__content">{{ slotProps.content }}</div>
      <div class="newsletter__fields">
        <input
          v-model="slotProps.mail"
          class="newsletter__input"
          type="email"
          name="email"
          aria-label="Email"
          placeholder="Email"
          required
          autocapitalize="off"
          autocorrect="off"
          data-cy="email"
        />
        <button type="submit" class="newsletter__button" data-cy="submit">
          {{ slotProps.submitText }}
        </button>
      </div>
    </div>
  </SimpleNewsletter>
</template>

<script>
import SimpleNewsletter from 'vuepress-plugin-mailchimp/src/components/SimpleNewsletter'
export default {
  components: { SimpleNewsletter },
}
</script>

<style lang="scss">
</style>
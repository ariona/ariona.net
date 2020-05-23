<template>
  <div class="page-404">
    <div class="container">
      <h1 class="bg-404">404</h1>

      <blockquote class="error-message">{{ getMsg() }}</blockquote>

      <RouterLink class="btn" to="/">
        Take me home.
      </RouterLink>
    </div>

    <Footer />
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="scss">
.page-404 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
  z-index: 1;
  text-align: center;

  .container {
    max-width: 990px;
  }
  .bg-404{
    font-size: 30vw;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
    line-height: 100vh;
    color: white;
    text-shadow: 0 30px 100px rgba(0,0,0,.08);
    z-index: -1;
    letter-spacing: -.1em;
    user-select: none;
    height: 100vh;
    margin: 0;
  }
  .error-message{
    border: none;
    font-size: 3em;
    font-weight: 700;
    padding: 0;
    color: #000;
    margin-bottom: 30px;
  }

  .btn {
    text-decoration: none;
    background-color: var(--accentColor);
    color: white;
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: 700;
  }

  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
}
</style>
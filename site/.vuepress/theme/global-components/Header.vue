<template>
  <div class="site-header" :style="{'--contentColor': $page.frontmatter.coverTextColor}">
    <div class="site-brand">
      <img class="site-logo" src="/assets/img/alogo.svg" alt="ariona.net">
      <div class="site-title">
        <h1>Rian Ariona</h1>
        <small>Frontend Web Developer</small>
      </div>
    </div>
    
    <nav v-if="$themeConfig.nav" class="site-navigation">
      <NavLink
        v-for="item in $themeConfig.nav"
        class="nav-item"
        :key="item.text"
        :class="item.style"
        :link="item.link">{{ item.text }}</NavLink>
    </nav>
  </div>
</template>

<style lang="scss">
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 69;
  // mix-blend-mode: difference;
  transition: background .3s ease, padding .3s ease, backdrop-filter .3s ease;

  .scrolled &{
    background: rgba(255,255,255,.9);
    padding: 10px 30px;
    color: #333;
    // backdrop-filter: blur(2px);
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 3px 10px rgba(0,0,0,.06);

    --contentColor: #000!important;

    // h1, a{ color: inherit; }
    .site-brand h1{ font-size: 1.5em }
    .site-brand small{ font-size: .8em }
  }
}
.site-brand {
  display: flex;
}
.site-logo {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  background-color: white;
  border-radius: 50%;
  padding: 1px;
}
.site-brand h1{
  margin : 0;
  font-weight: 700;
  font-size: 1.8em;
  color: var(--contentColor, #000);
}
.site-brand small {
  font-size: 1em;
  font-weight: 400;
  opacity: 0.7;
  color: var(--contentColor, #000);
}
.site-navigation {
  font-weight: 700;
  a {
    color: #333;
    color: var(--contentColor, #000);
    text-decoration: none;
    padding: 10px 15px;
    &:last-child { padding-right: 0; }

    &:hover{
      // color: var(--accentColor);
    }

    &.router-link-exact-active.router-link-active{
      border-bottom: 2px solid
    }
  }
}
</style>
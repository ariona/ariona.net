<template>
  <nav v-if="$themeConfig.nav" class="mobile-menu">
    <NavLink
      v-for="item in $themeConfig.nav"
      class="nav-item"
      :key="item.text"
      :class="item.style"
      :link="item.link">{{ item.text }}</NavLink>
  </nav>
</template>

<style lang="scss">
.mobile-menu {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: var(--accentColor);
  z-index: 70;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: white;
    font-size: 2em;
    text-decoration: none;
    display: block;
    padding: 15px;
    position: relative;
    text-shadow: 2px 2px 0 var(--accentColor), -2px -2px 0 var(--accentColor), -2px 2px 0 var(--accentColor), 2px -2px 0 var(--accentColor);

    &.router-link-active{
      &:before{
        content: " ";
        width: 100%;
        height: 3px;
        background-color: currentColor;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        z-index: -1;
      }
    }
  }
}
</style>
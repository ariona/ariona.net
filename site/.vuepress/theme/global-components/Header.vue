<template>
  <div class="site-header" :style="{'--contentColor': $page.frontmatter.coverTextColor}">
    <a class="site-brand" href="/">
      <img class="site-logo" src="/assets/img/alogo.svg" alt="ariona.net">
      <div class="site-title">
        <h1>Rian Ariona</h1>
        <small>Frontend Web Developer</small>
      </div>
    </a>
    
    <nav v-if="$themeConfig.nav" class="site-navigation">
      <NavLink
        v-for="item in $themeConfig.nav"
        class="nav-item"
        :key="item.text"
        :class="item.style"
        :link="item.link">{{ item.text }}</NavLink>
    </nav>
    <SearchBox/>
  </div>
</template>

<script>
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox }
}
</script>

<style lang="scss">
.site-header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: 69;
  transition: background .3s ease, padding .3s ease, backdrop-filter .3s ease;
  padding-right: 30px;

  .scrolled &{
    background: rgba(255,255,255,.9);
    color: #333;
    box-shadow: 0 1px 2px rgba(0,0,0,.1), 0 3px 10px rgba(0,0,0,.06);

    --contentColor: #000!important;

    // h1, a{ color: inherit; }
    .site-brand { font-size: 12px }
    .site-logo {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 15px 15px 15px 0!important;
  }
}
.site-brand {
  display: flex;
  align-items: center;
  transition: .3s ease;
  text-decoration: none;
  padding: 15px 30px;

  @media screen and (max-width: 768px) {
    padding: 15px!important;
  }
}
.site-logo {
  width: 60px;
  height: 60px;
  margin-right: 15px;
  background-color: white;
  border-radius: 50%;
  padding: 1px;
  transition: .3s ease;
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
  margin-left: auto;
  display: flex;


  @media screen and (max-width: 990px){
    display: none;
  }

  a {
    color: #333;
    color: var(--contentColor, #000);
    text-decoration: none;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    &:last-child { padding-right: 0; }

    &:hover{
      // color: var(--accentColor);
    }

    &.router-link-exact-active.router-link-active{
      border-bottom: 2px solid
    }
  }
}
.search-box {
  margin-left: 30px;
  display: none;
  position: relative;

  .blog-index &,
  .page-blog &,
  .page-post-single &{
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 990px) {
    display: none;
  }
  input {
    border-color: #999;
    border-radius: 4px;
  }
  .suggestions {
    top: 100%;
    right: 0;
    color: #000;
    width: 400px;
    max-width: 320px;
    a {
      text-decoration: none;
      color: inherit;
    }
    .header{
      display: none;
    }

    li:not(:last-child) {
      border-bottom: 1px solid #e3e3e3;
    }
  }
}
</style>
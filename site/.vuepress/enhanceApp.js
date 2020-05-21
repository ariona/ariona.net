export default ({ router }) => {
  router.addRoutes([
    { path: '/foo/', redirect: '/_5-permasalahan-yang-membingungkan-bagi-css-newbie/' },
    { path: '/bar/', redirect: '/' }
  ])
}
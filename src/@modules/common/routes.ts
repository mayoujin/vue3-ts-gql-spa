const About = () =>
  import(/* webpackChunkName: "About" */ '@modules/common/pages/About.vue')
const Home = () =>
  import(/* webpackChunkName: "Home" */ '@modules/common/pages/Home/index')

const ROUTE_ABOUT = {
  path: '/about',
  name: 'about',
  component: About,
}

const ROUTE_HOME = {
  path: '/home',
  name: 'home',
  component: Home,
}

export const ROUTES = {
  ABOUT: ROUTE_ABOUT,
  HOME: ROUTE_HOME,
}

export const routes = [ROUTE_ABOUT, ROUTE_HOME]

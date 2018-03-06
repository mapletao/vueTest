// const App = r => require.ensure([], () => r(require('../App')), 'App')
const Home = r => require.ensure([], () => r(require('../page/Home')), 'Home')
const User = r => require.ensure([], () => r(require('../page/User')), 'User')
export default [{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  component: Home
}, {
  path: '/user',
  component: User
}]

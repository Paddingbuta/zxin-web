
const routes = [
  {
    path: '/',
    component: () => import('pages/Index.vue')
  },
  {
    path: '/about',
    component: () => import('pages/About_2.vue')
  },
  {
    path: '/contact',
    component: () => import('pages/Contact.vue')
  },
  {
    path: '/news',
    component: () => import('pages/Error404.vue')
  },
  {
    path: '/products',
    component: () => import('pages/Products.vue')
  },
  {
    path: '/eg',
    component: () => import('pages/Eg.vue')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

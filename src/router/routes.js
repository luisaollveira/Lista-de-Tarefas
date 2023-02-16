
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/agenda.vue') },
      { path: 'help', component: () => import('pages/cuidados.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import("pages/agenda.vue")
  }
]

export default routes

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home - DuniaPoke',
      metaTags: [
        {
          name: 'title',
          content: 'Home - DuniaPoke'
        },
        {
          name: 'description',
          content: 'Search your favorite pokemon. | DuniaPoke'
        },
        {
          property: 'og:description',
          content: 'Search your favorite pokemon. | DuniaPoke'
        },
      ]
    }
  },
  {
    path: '/about',
    name: 'about',
    component: ()=>import('../views/AboutView.vue'),
    meta: {
      title: 'About - DuniaPoke',
      metaTags: [
        {
          name: 'title',
          content: 'About - DuniaPoke'
        },
        {
          name: 'description',
          content: 'Welcome to my first Project DuniaPoke. DuniaPoke comes from two words, namely Dunia and Poke or Pokemon, which means "Earth" and "Pokemon". | DuniaPoke'
        },
        {
          property: 'og:description',
          content: 'Welcome to my first Project DuniaPoke. DuniaPoke comes from two words, namely Dunia and Poke or Pokemon, which means "Earth" and "Pokemon". | DuniaPoke'
        },
      ]
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));
  if(!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    return tag;
  })
  .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router

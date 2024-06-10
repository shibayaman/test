import { createRouter, createWebHistory } from 'vue-router'
import First from '../views/First.vue';
import Second from '../views/Second.vue';
import Third from '../views/Third.vue';
import Fourth from '../views/Fourth.vue';
import { useGlobalStore } from '@/stores/global';
import { nextTick } from 'vue';

const history = createWebHistory(import.meta.env.BASE_URL);
history.listen((to, from, information) => {
  if (information.direction === "back") {
    useGlobalStore().setIsHistoryBack(true);
  }
});

const router = createRouter({
  history, 
  routes: [
    {
      path: '/1',
      name: 'First',
      component: () => import('../views/First.vue')
    },
    {
      path: '/2',
      name: 'Second',
      component: () => import('../views/Second.vue')
    },
    {
      path: '/3',
      name: 'Third',
      component: () => import('../views/Third.vue')
    },
    {
      path: '/4',
      name: 'Fourth',
      component: () => import('../views/Fourth.vue')
    },
  ]
})

router.beforeResolve(() => {
  const store = useGlobalStore();
  store.setBackHandler(() => {});

});

let isFirst = true;
router.beforeEach(async ({ to, from }) => {
  const store = useGlobalStore();
  if (isFirst) {
    isFirst = false;
    await router.push({ path: location.pathname, force: true })
    await router.push({ path: location.pathname, force: true })
    await router.push({ path: location.pathname, force: true })
  }

  if (store.isHistoryBack) {
    store.setIsHistoryBack(false)
    await nextTick(() => { store.backHandler() });
  }
})

export default router

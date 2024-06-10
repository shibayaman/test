import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', () => {
  const backHandler = ref(() => {});
  const setBackHandler = payload => backHandler.value = payload;

  const isExecuteRouterBack = ref(false)
  const setIsExecuteRouterBack = payload => isExecuteRouterBack.value = payload

  const isHistoryBack = ref(false)
  const setIsHistoryBack = payload => isHistoryBack.value = payload

  return { backHandler, setBackHandler, isExecuteRouterBack, setIsExecuteRouterBack, isHistoryBack, setIsHistoryBack }
})

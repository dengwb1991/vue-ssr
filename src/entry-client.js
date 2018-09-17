import { createApp } from './main'
const { app, router } = createApp()

// wait until router has resolved all async before hooks
// and async components...
router.onReady(() => {
  app.$mount('#app')
})
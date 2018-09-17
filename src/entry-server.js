import { createApp } from './main'

export default context => {
  // This exported function will be called by `bundleRenderer`.
  // This is where we perform data-prefetching to determine the
  // state of our application before actually rendering it.
  // Since data fetching is async, this function is expected to
  // return a Promise that resolves to the app instance.
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // set router's location
    const { url } = context
    // const { fullPath } = router.resolve(url).route

    // if (fullPath !== url) {
    //   return reject({ url: fullPath })
    // }
    console.log(url)
    router.push(url)

    // wait until router has resolved possible async hooks
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()

      // no matched routes
      if (!matchedComponents.length) {
        // eslint-disable-next-line
        return reject({ code: 404 })
      }

      resolve(app)
    }, reject)
  })
}
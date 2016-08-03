
import createStore from './create-store'
import update from 'morphdom'

const createApp = (reducer, renderer) => {
  const render = () => {
    const next = renderer(store)
    update(app, next)
  }

  const store = createStore(reducer, render)
  const app = renderer(store)

  app.mount = (el) => {
    el.appendChild(app)
  }

  app.store = store

  return app
}

export { default as h } from './h'
export { default as cxs } from 'cxs'

export default createApp


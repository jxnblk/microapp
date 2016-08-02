
import h0 from 'h0'
import cxs from 'cxs'
import { update } from 'yo-yo'

export const h = (tag) => (...args) => {
  if (typeof args[0] !== 'object' || typeof args[0].className !== 'object' || args[0].className === null) {
    return h0(tag)(...args)
  }

  args[0].class = cxs(args[0].className)
  delete args[0].className

  return h0(tag)(...args)
}

const createStore = (reducer, listener = () => {}) => {
  let _ = reducer(undefined, {})
  return {
    get state(){ return _ },
    dispatch: (a) => {
      _ = reducer(_,a)
      listener()
    }
  }
}

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

export default createApp



import h from 'h0'
// import h, { cxs } from 'hyp'
import { update } from 'yo-yo'

export h from 'hyp'

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


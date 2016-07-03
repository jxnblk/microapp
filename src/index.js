
import { update } from 'yo-yo'
import { createElement } from 'bel'
import hyperx from 'hyperx'
import prefixer from 'inline-style-prefixer/static'
import cxs from 'cxs'

const createEl = (tag, props, children) => {
  if (props.className && typeof props.className === 'object') {
    const prefixed = prefixer({...props.className})
    props.className = cxs(prefixed)
  }
  return createElement(tag, props, children)
}

export const h = hyperx(createEl)

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
    cxs.attach()
  }

  const store = createStore(reducer, render)
  const app = renderer(store)

  app.mount = (el) => {
    el.appendChild(app)
    cxs.attach()
  }

  app.store = store

  return app
}

export cxs from 'cxs'
export default createApp


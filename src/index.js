
import { update } from 'yo-yo'
import { createElement } from 'bel'
import hyperx from 'hyperx'
// import cxs from 'cxs/src/jss/jsscxs'
import cxs from 'cxs'

const createEl = (tag, props, children) => {
  if (props.className && typeof props.className === 'object') {
    props.className = cxs(props.className)
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


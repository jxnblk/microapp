
// (reducer, renderer) => app

import h0 from 'h0'
import createApp, { h } from '../src'

const div = document.getElementById('app')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state = {
  count: 0
}, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case DECREMENT:
      if (state.count < 1) {
        return state
      }
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state
  }
}

const App = ({ state, dispatch }) => {
  const { count } = state
  const orange = '#f80'
  const blue = '#0cf'
  const green = '#0fa'

  const colors = [
    orange,
    green,
    blue
  ]


  const color = colors[count % colors.length]

  const cx = {
    root: {
      padding: 48,
      '@media (min-width: 48em)': {
        padding: 64
      }
    },
    counter: {
      padding: 48,
      fontSize: 48,
      color,
      backgroundColor: '#222',
      transition: 'transform .2s ease-out',
      // ':hover': {
        // filter: 'blur(4px)',
      // }
    },
    buttons: {
      display: 'flex'
    },
    button: {
      display: 'inline-block',
      flex: '1 1 auto',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      padding: 8,
      border: 0,
      backgroundColor: color,
      appearance: 'none'
    }
  }


  return h('div')({ className: cx.root })(
    h('h1')({
      className: cx.counter
    })('hello microapp'),
    h('samp')(count),
    h('div')({ className: cx.buttons })(
      h('button')({
        className: cx.button,
        onclick: e => dispatch({ type: DECREMENT })
      })('-'),
      h('button')({
        className: cx.button,
        onclick: e => dispatch({ type: INCREMENT })
      })('+')
    )
  )
}

const app = createApp(reducer, App)

app.mount(document.body)


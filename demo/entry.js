
import createApp, { h, cxs } from '../src'

const div = document.getElementById('app')

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const reducer = (state = {
  count: 0
}, action) => {
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

  console.log(cxs.css.length, 'bytes')
  console.log(cxs.css)

  return h`
    <div css=${cx.root}>
      <h1>Hello</h1>
      <div css=${cx.counter}>
        ${count}
      </div>
      <div css=${cx.buttons}>
        <button
          css=${cx.button}
          onclick=${e => dispatch({ type: DECREMENT })}>
          -1
        </button>
        <button
          css=${cx.button}
          onclick=${e => dispatch({ type: INCREMENT })}>
          +1
        </button>
      </div>
    </div>
  `
}

const app = createApp(reducer, App)

// (reducer, renderer) => app

app.mount(document.body)



import createApp, { h } from '../src'

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
      padding: 48
    },
    counter: {
      padding: 48,
      fontSize: 48,
      color,
      backgroundColor: '#222'
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

  return h`
    <div className=${cx.root}>
      <h1>Hello</h1>
      <div className=${cx.counter}>
        ${count}
      </div>
      <div className=${cx.buttons}>
        <button
          className=${cx.button}
          onclick=${e => dispatch({ type: DECREMENT })}>
          -1
        </button>
        <button
          className=${cx.button}
          onclick=${e => dispatch({ type: INCREMENT })}>
          +1
        </button>
      </div>
    </div>
  `
}

const app = createApp(reducer, App)

console.log(app.outerHTML)

app.mount(document.body)


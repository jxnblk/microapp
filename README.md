
# microapp

Minimal functional application creator.
A demonstration of basic functional UI principles.

```sh
npm i microapp
```


## Usage:

```js
import createApp, { h } from 'microapp'

// Redux-like reducer for application state
const reducer = (state = {
  count: 0
}, action) => {
  switch (action.type) {
    case: 'dec':
      const count = state.count - 1
      return { ...state, count }
    case: 'inc':
      const count = state.count + 1
      return { ...state, count }
    default:
      return state
  }
}

// Functional UI component
const App = ({ state, dispatch }) => {
  return h`
    <div>
      <h1>Count: ${state.count}</h1>
      <button
        onclick=${e => dispatch({ type: 'dec' })}>
        - Decrement
      </button>
      <button
        onclick=${e => dispatch({ type: 'inc' })}>
        + Increment
      </button>
    </div>
  `
}

const app = createApp(reducer, App)

app.mount(document.body)
```

## Features
- Redux-like store with a single reducer
- ES2015 template literal functions based on bel
- DOM update using morphdom and yo.update
- cxs className helper for functional styles


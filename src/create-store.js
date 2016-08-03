
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

export default createStore


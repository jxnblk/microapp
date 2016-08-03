
import h0 from 'h0'
import cxs from 'cxs'

const h = (tag) => (...args) => {
  if (typeof args[0] !== 'object' || typeof args[0].className !== 'object' || args[0].className === null) {
    return h0(tag)(...args)
  }

  args[0].class = cxs(args[0].className)
  delete args[0].className

  return h0(tag)(...args)
}

export default h


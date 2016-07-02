
const config = {
  entry: './demo/entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      // { test: /\.json$/, loader: 'json' },
    ]
  }
}

module.exports = config


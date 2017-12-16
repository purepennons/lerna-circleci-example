const path = require('path');

module.exports = {
  // require: [path.join(__dirname, 'src/index.css')],
  components: 'src/react-component-node-modules/**/[A-Z]*.js',
  webpackConfig(env) {
    if (env === 'production')
      return require('./node_modules/akiya-react-component-scripts/config/webpack.config.prod.js');
    else
      return require('./node_modules/akiya-react-component-scripts/config/webpack.config.dev.js');
  },
};

const { environment } = require('@rails/webpacker')
const path = require('path')
const merge = require('webpack-merge')
const vue =  require('./loaders/vue')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

environment.loaders.append('vue', vue)

environment.plugins.append(
  'PrerenderSpaPlugin',
  new PrerenderSpaPlugin(
    // Absolute path to compiled SPA
    path.join(__dirname, '../../public/packs'),
    // List of routes to prerender
    [ '/' ]
  )
)

module.exports = merge(environment.toWebpackConfig(), {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
})



// module.exports = {
//   // ...
//   plugins: [
//     new PrerenderSpaPlugin(
//       // Absolute path to compiled SPA
//       path.join(__dirname, '../dist'),
//       // List of routes to prerender
//       [ '/', '/about', '/contact' ]
//     )
//   ]
// }

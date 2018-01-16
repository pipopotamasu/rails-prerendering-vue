const { environment } = require('@rails/webpacker')
const merge = require('webpack-merge')
const vue =  require('./loaders/vue')

environment.loaders.append('vue', vue)
module.exports = merge(environment.toWebpackConfig(), {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
})

var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  FB_API_KEY: '"xxxxxx"',
  FB_AUTH_DOMAIN: '"xxxxxx"',
  FB_DATABASE_URL: '"xxxxx"',
  DB_NAME: '"xxxx"',
  HOST: '"http://localhost:8080"'
})

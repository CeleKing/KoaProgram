var gravatar = require('gravatar')
var moment = require('moment')
var md = require('markdown-it')()
var pkg = require('../package')

moment.locale(pkg.locale)

module.exports = {
    get fromNow() {
        return function(date) {
            
        }
    },
}
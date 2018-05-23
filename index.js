const utils = require('loader-utils')
const ejs = require('ejs')
const path = require('path')

module.exports = function (source) {
  this.cacheable && this.cacheable()
  var options = utils.getOptions(this) || {}

  options.filename = path.relative(process.cwd(), this.resourcePath)

  let compileFn = ejs.compile(source, options)

  return 'module.exports = ' + JSON.stringify(compileFn({}))
}
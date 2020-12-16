const path = require('path')
module.exports.getPath = (cpath) => {
  return path.resolve(__dirname, cpath)
}
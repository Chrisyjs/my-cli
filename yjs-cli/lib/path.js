const path = require('path')
module.exports.getPath = (cpath) => {
  return path.resolve(__dirname, cpath)  // 本地
  // return path.resolve('./', cpath)  // 发布到 npm
}
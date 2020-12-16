const {promisify} = require('util')

module.exports.clone = async function(repo, desc) {
  const download = promisify(require('download-git-repo'))  // clone 代码
  const ora = require('ora')  // 进度条 loading 状态
  const process = ora(`下载......${repo}`)
  process.start()
  await download(repo, desc)
  process.succeed()
}
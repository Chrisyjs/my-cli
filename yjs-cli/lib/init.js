const {promisify} = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')  // 粉笔
const log = content => console.log(chalk.green(content))  // 输出字符颜色为绿色
const {clone} = require('./download')
const open = require('open')

const spawn = async (...args) => {
  const {spawn} = require('child_process')  // 插水管
  return new Promise(resolve => {
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)  // 子进程输出插入主进程
    proc.stderr.pipe(process.stderr)
    proc.on('close', () => {
      resolve()
    })
  })
}

module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('Yjs Welcome')
  log(data)

  // clone
  // log(`🚀创建项目：${name}`)
  // await clone(`github:Chrisyjs/vue-sample`, name)

  // 自动安装依赖
  // log(`安装依赖`)
  // await spawn('npm', ['install'], {cwd: `./${name}`})
  // log(`ok!安装完成`)

  // 启动
  open(`http://localhost:8080`)  // 自动打开浏览器
  await spawn('npm', ['run', 'serve'], {cwd: `./${name}`})
}
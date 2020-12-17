const { getPath } = require('./path')
const handlebars = require('handlebars')
const chalk = require('chalk')
const fs = require('fs')

module.exports = async (name) => {
  const srcPath = getPath(`../${name}/src`)
  const templatePath = getPath(`../${name}/templates`)

  // 发布到 npm
  // const srcPath = getPath(`./${name}/src`)  
  // const templatePath = getPath(`./${name}/templates`)
  
  // 获取列表
  const list = fs.readdirSync(`${srcPath}/views`)
    .filter(v => v !== 'Home.vue')
    .map(v => ({
      name: v.replace('.vue', '').toLowerCase(),
      file: v
    }))

  // 生成路由定义
  compile({list}, `${srcPath}/router/index.js`, `${templatePath}/router.js.hbs`)
  
  // 生成菜单
  compile({list}, `${srcPath}/App.vue`, `${templatePath}/App.vue.hbs`)

  /**
   * 模板编译
   * @param {*} meta 数据定义
   * @param {*} filePath 目标文件
   * @param {*} templatePath 模板文件
   */
  function compile(meta, filePath, templatePath) {
    if(fs.existsSync(templatePath)) {
      const content = fs.readFileSync(templatePath).toString()
      const result = handlebars.compile(content)(meta)
      fs.writeFileSync(filePath, result)
      console.log(`🚀${filePath} 创建成功`)
    }
  }
}
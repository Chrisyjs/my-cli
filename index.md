#### 如何实现一个脚手架？（ https://juejin.cn/post/6844903896163303438 ）
- 实现功能
  - 根据远程模板，初始化项目
  - 一键打包部署
  - 查看信息及修改配置信息

- 具体实现
  - bin 文件，npm link 链接命令到全局
  - 处理命令行（commander），例如 init 命令
  - 下载模板（download-git-repo）
  - 命令行交互（inquirer）：例如输入描述、作者信息、模板中是否使用 eslint 等
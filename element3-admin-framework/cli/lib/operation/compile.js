const { spawn } = require("../api/process");
const path = require('path');
module.exports = async (basePath = path.resolve(__dirname, '../../../framework')) => {
  console.log("编译组件....");
  // 安装Framework依赖
  await spawn("npm", ["install"], { cwd: `${basePath}/packages` });

  // Rollup打包
  await spawn("npm", ["run", "build"], { cwd: `${basePath}/packages` });

  // 安装模块
  await spawn("sudo", ["npm", "link", "./packages"], {  // 模块和项目在同一目录（ https://www.cnblogs.com/mengff/p/11743145.html ）
    cwd: `${basePath}`,
  });
};

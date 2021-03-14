
const path = require('path')
const config = require('./plop-demo/template/form-page/config')

module.exports = function(plop) {
  plop.setGenerator("test", {
    description: "generate a test",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "view name please",
      },
    ],
    actions: (data) => {
      const name = "{{name}}";
      const pName = "{{properCase name}}"
      const actions = [
        {
          type: "add",
          path: path.join(__dirname, `./src/views/${pName}/index.vue`),
          templateFile: "./plop-demo/template/form-page/index.hbs",
          data: {
            name: name,
            formConfigList: config.formConfigList,
            tableConfig: config.tableConfig 
          },
        },
        {
          type: "add",
          path: path.join(__dirname, `./src/views/${pName}/table.vue`),
          templateFile: "./plop-demo/template/form-page/table.hbs",
          data: {
            tableConfig: config.tableConfig
          }
        },
        {
          type: "add",
          path: path.join(__dirname, `./src/views/${pName}/column-data.js`),
          templateFile: "./plop-demo/template/form-page/column-data.hbs",
          data: {
            columnData: config.tableConfig.columnData
          }
        },
      ];
      return actions;
    },
  });

  plop.setHelper('setData', function (text, defaultData) {
    return text ? text : defaultData;
    // 使用方法：{{ setData width 130 }}
	});

  // plop.setPartial('myTitlePartial', '<h1>{{titleCase name}}</h1>');
};

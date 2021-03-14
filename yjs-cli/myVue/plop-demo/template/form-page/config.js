module.exports = {
  formConfigList: [
    {
      type: 'select',
      isSelect: true,
      label: '所属校区',
      prop: 'schoolId',
      option: 'schoolList',
      fromRemote: true
    },
    {
      type: 'input',
      isInput: true,
      label: '班级名称',
      prop: 'className'
    }
  ],
  tableConfig: {
    columnData: [
      {
        prop: 'name',
        label: '姓名'
      },
      {
        prop: 'age',
        label: '年龄'
      },
      {
        prop: 'gender',
        label: '性别'
      }
    ]
  }
}
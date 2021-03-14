#### 根据配置生成搜索页面
- 搜索配置项 
```
[
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
]
```

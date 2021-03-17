import Keyboard from '../src/components/Charts/Keyboard.vue'

// 组件库
const AdminCommon = {
  Keyboard,
  install: app => {
    app.use(Keyboard)
  },
}

export { Keyboard }

export default AdminCommon

import { Loading } from 'element-ui'

export default (ctx, inject) => {
  let loadingInstance1
  const setLoader = () => {
    loadingInstance1 = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  const offLoader = () => {
    if (loadingInstance1) {
      loadingInstance1.close()
    }
  }
  inject('setLoader', setLoader)
  inject('offLoader', offLoader)
}

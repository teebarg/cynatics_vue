import { Message } from 'element-ui'

export default (ctx, inject) => {
  const notify = (message = 'Requested action Successful', type = 'success') => {
    Message({
      type,
      showClose: true,
      message,
      duration: 5000
    })
  }
  inject('showSnackbar', notify)
}

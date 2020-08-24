import { IMAGE } from '~/services/mutants'
import { ApiEndPoint } from '~/services/constants'
import { Utility } from '~/services/utility'

export const state = () => ({})

export const actions = {
  async [IMAGE.CREATE_IMAGE] ({ commit }, { formData, action }) {
    const { data } = await this.$axios.$post(ApiEndPoint.IMAGE, formData, {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    })
    commit(action, data, {root: true})
    this.$showSnackbar('Action Successful')
  },
  async [IMAGE.UPDATE_IMAGE] ({ commit }, { formData, imageId }) {
    await this.$axios.$post(`${ApiEndPoint.IMAGE}/${imageId}${Utility.getQueryParams({ _method : 'PUT' })}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    this.$showSnackbar()
  }
}

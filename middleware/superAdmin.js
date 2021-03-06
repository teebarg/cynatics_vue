import { Roles } from '../services/constants'

export default function ({ $auth, redirect }) {
  const result = $auth.user.roles.find(checkAdult)
  if (!result) {
    return redirect('/admin')
  }
}

function checkAdult (item) {
  return item.name === Roles.SUPER_ADMIN
}

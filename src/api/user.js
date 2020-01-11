import {http, getOptions} from './index'

export const login = ({email, password}) => {
  return http.post('/api/session/signin', {
    email,
    password
  }, getOptions())
    .then(resp => resp.data.Authorization)
}

export const logout = () => {
  return http.post('/api/session/signout', {}, getOptions())
}

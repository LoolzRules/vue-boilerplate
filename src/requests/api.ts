import axios from 'axios'
import store from '../store'

const api = axios.create( {
  baseURL: '/api/v1',
  timeout: 10000,
} )

api.interceptors.request.use( config => {
  const locale = store.state.locales[store.state.localeIndex]
  config.baseURL += `/${locale}`
  config.headers['Accept'] = 'application/json'
  config.headers['Content-Type'] = 'application/json'
  return config
} )

api.interceptors.response.use( response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject( error.response )
} )

export default api

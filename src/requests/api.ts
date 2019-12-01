import axios from 'axios'

const api = axios.create( {
  timeout: 10000,
} )

api.interceptors.response.use( response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.error( error )
  return Promise.reject( error )
} )

export default api

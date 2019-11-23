import api from './api'
import { AxiosResponse } from 'axios'

export const getSomething = (): Promise<AxiosResponse> => {
  return api.get( '/something' )
    .then( response => {
      return response.data
    } )
}

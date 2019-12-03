import api from './api'
import { SomethingResponseData } from '@/requests/responses'

export const getSomething = (): Promise<SomethingResponseData> => {
  return api.get( '/something' )
    .then( response => {
      return response.data
    } )
}

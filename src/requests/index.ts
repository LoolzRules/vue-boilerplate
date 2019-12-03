import api from './api'

export const getSomething = (): Promise<SomethingResponseData> => {
  return api.get( '/something' )
    .then( response => {
      return response.data
    } )
}

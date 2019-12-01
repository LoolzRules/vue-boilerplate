export class CoreState {
  // initialise properties from localStorage (or use default values)
  localStorageKeys = Object.freeze( {
    locale: 'localeIndex',
    theme: 'themeIsDark',
  } )

  localeIndex: number = localStorage.getItem( this.localStorageKeys.locale )
    ? parseInt( <string> localStorage.getItem( this.localStorageKeys.locale ), 10 )
    : 0

  locales: Array<string> = [
    'en',
    'ru',
  ]

  themeIsDark: boolean = localStorage.getItem( this.localStorageKeys.theme )
    ? JSON.parse( <string> localStorage.getItem( this.localStorageKeys.theme ) )
    : false
}

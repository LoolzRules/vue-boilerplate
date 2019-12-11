const express = require( 'express' )
const apiRouter = express.Router()

apiRouter.get( '/:lang/something', ( req, res ) => {
  let message
  switch ( req.params.lang ) {
    case 'ru':
      message = 'Вы великолепны!'
      break

    case 'en':
    default:
      message = 'You are awesome!'
      break
  }

  res.json( { message, } )
} )

apiRouter.get( '*', ( req, res ) => {
  res
    .status( 404 )
    .json( { error: 'Unknown API request', } )
} )

module.exports = apiRouter

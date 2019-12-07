const express = require( 'express' )
const apiRouter = express.Router()

apiRouter.get( '/something', ( req, res ) => {
  res.json( { message: 'You are awesome!', } )
} )

apiRouter.get( '*', ( req, res ) => {
  res
    .status( 404 )
    .json( { error: 'Unknown API request', } )
} )

export default apiRouter

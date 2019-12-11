const path = require( 'path' )
const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const compression = require( 'compression' )
const apiRouter = require( './_api' )
const http = require( 'http' )
const https = require( 'https' )

const app = express()
const staticDir = path.join( __dirname, 'dist' )

// redirect to https
app.use( function( req, res, next ) {
  if ( req.secure ) {
    next()
  } else {
    res.redirect( 'https://' + req.headers.host + req.url )
  }
} )

// use middleware to compress all files
app.use( compression() )

// use middleware to serve static files
app.use( serveStatic( staticDir ) )

// process API requests
app.use( '/api/v1', apiRouter )

// Send index page for anything
// not matching the requests above,
// vue-router will handle 404 error
app.get( '*', ( req, res ) => {
  res.sendFile( path.join( staticDir, 'index.html' ) )
} )

http
  .createServer( app )
  .listen( process.env.PORT )

if ( process.env.NODE_ENV === 'production' ) {
  https
    .createServer( app )
    .listen( process.env.PORT_HTTPS )
}

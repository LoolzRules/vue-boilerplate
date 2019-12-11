const path = require( 'path' )
const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const compression = require( 'compression' )
const apiRouter = require( './_api' )

const app = express()
const staticDir = path.join( __dirname, 'dist' )

// redirect to https
app.use( function( req, res, next ) {
  // https://community.pivotal.io/s/article/Purpose-of-the-X-Forwarded-Proto-HTTP-Header
  if ( req.headers['x-forwarded-proto'] === 'https' ) {
    next()
  }
  res.redirect( 301, 'https://' + req.headers.host + req.url )
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

app.listen( process.env.PORT )

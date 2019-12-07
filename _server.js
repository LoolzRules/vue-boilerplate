const path = require( 'path' )
const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const compression = require( 'compression' )
const apiRouter = require( './_api' )

const app = express()
const port = process.env.PORT
const staticDir = path.join( __dirname, 'dist' )

// use middleware to compress all files
app.use( compression() )

// use middleware to serve static files
app.use( serveStatic( staticDir ) )

// process API requests
app.get( '/api/v1', apiRouter )

// Send index page for anything
// not matching the requests above,
// vue-router will handle 404 error
app.get( '*', ( req, res ) => {
  res.sendFile( path.join( staticDir, 'index.html' ) )
} )

console.info( process.env )
console.info( port )
app.listen( port )

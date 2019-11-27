const path = require( 'path' )
const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const compression = require( 'compression' )

const app = express()
const defaultPort = 80
const port = process.env.PORT || defaultPort
const staticDir = path.join( __dirname, 'dist' )

app.use( compression() )
app.use( serveStatic( staticDir ) )
app.get( '*', ( req, res ) => {
  res.sendFile( path.join( staticDir, 'index.html' ) )
} )
app.listen( port )

const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const path = require( 'path' )

const app = express()
const defaultPort = 80
const port = process.env.PORT || defaultPort
const staticDir = path.join( __dirname, 'dist' )

app.use( serveStatic( staticDir ) )
app.get( '*', ( req, res ) => {
  res.sendFile( path.join( staticDir, 'index.html' ) )
} )
app.listen( port )

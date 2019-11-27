const express = require( 'express' )
const serveStatic = require( 'serve-static' )
const path = require( 'path' )

const app = express()
const defaultPort = 80
const port = process.env.PORT || defaultPort

app.use( serveStatic( path.join( __dirname, 'dist' ) ) )
app.listen( port )

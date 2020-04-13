const express = require('express')
const nunjuks = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjuks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log('Server is running on port: 5000!')
    console.log('Application can be accessed at the address: http://localhost:5000')
})
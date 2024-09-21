// Imports
const express  = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
const port = 3000


//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/DOM',express.static(__dirname + 'public/DOM'))
app.use('/html',express.static(__dirname + 'public/html'))

//set views
app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req, res) => {
    res.render('page1')
})




// List on port 3000
app.listen(port,() => console.info('Listening on port ${port}'))
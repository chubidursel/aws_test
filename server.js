const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    console.log('You got it!  😉')
    res.send('Hey from nodeJs')
})


app.listen(8080)
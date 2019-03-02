const express = require('express')
const app = express()

const jwt = require('bycjwt')

const data =
    {
      "id": 1,
      "username": "user",
      "password": "1",
      "email": "bunting@ngesot.com",
      "phone": "08918191819"
    }

app.use(express.json())

app.post('/signin', function(req, res) {
    if(req.body.username == data.username && req.body.password == data.password) {
        let token = jwt.jwtencode({
            id: data.id,
            username: data.username
        })
        res.status(200).json({
            msg: 'Sukses Login',
            token
        })
    } else {
        res.status(500).json({
            msg: 'failed Login'
        })
    }
})

app.listen(3000, function() {
    console.log('http://localhost:3000')
})
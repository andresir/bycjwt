const express = require('express')
const app = express()
const Crypto = require('crypto')

const jwt = require('bycjwt')


const data =
    {
      "id": 1,
      "username": "user",
      "password": "1",
      "email": "bunting@ngesot.com",
      "phone": "08918191819"
    }

var oldpass = Crypto.createHmac('sha256', "abcd123")
.update(data.password).digest('hex');
// console.log(oldpass)

app.use(express.json())

app.post('/signin', function(req, res) {
    const hashPassword = Crypto.createHmac('sha256', "abcd123")
        .update('1').digest('hex');
    if(req.body.username == data.username && hashPassword) {
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
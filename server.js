// console.log("This is my first Node JS ");


//Node js file stucture
//1.Import Area.
var express = require('express')

var app = express();

app.get('/', function (req, res) {
    res.send('hello world')
})
app.get('/hello', function (req, res) {
    res.send('Good Morning')
})

app.get('/santosh', function (req, res) {
    res.send('Good afternoon')
})

app.get('/onkar', function (req, res) {
    res.send('Good evening')
})

app.listen(4000)

const express = require ('express')
const app = express ();

app.get('/test',function(req,res){
    res.send('abcdefgh')
})

app.listen('12345');
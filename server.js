const express = require('express')

const app = express()
app.get('/', (req, res) =>{
    res.write('<h1> Test Deployment </h1>')
    res.end()
})
app.listen(3000, (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('LIstening to Port 3000')
    }
})
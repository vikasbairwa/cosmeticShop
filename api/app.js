const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())
const fetch = require('node-fetch');
const axios = require('axios')
const port = 8080;
app.get('/cors', async (request, response) => {
    
    const resDior = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=dior')
    const jsonDior = await resDior.json()
    const resCli = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=clinique')
    const jsonCli = await resCli.json()
    const resNyx = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=nyx')
    const jsonNyx = await resNyx.json()
    jsonDior.forEach(element => {
        if(element.rating===null){
            element.rating=0
        }
        if(element.price===null){
            element.price=0
        }
    });
    jsonCli.forEach(element => {
        if(element.rating===null){
            element.rating=0
        }
        if(element.price===null){
            element.price=0
        }
    });
    jsonNyx.forEach(element => {
        if(element.rating===null){
            element.rating=0
        }
        if(element.price===null){
            element.price=0
        }
    });
    const r = {dior: jsonDior,cli: jsonCli, nyx: jsonNyx}
    response.send(r);
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
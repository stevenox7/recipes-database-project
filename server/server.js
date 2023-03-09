const path = require('path')
const express = require('express');
const app = express();
const scrapeRecipes  = require('../scraper')

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded()); // for parsing application/x-www-form-urlencoded

app.use('/', express.static(path.join(__dirname, '../dist')))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname, './dist/index.html')
// })
app.post('/insertRecipe', async (req, res) => {
    console.log(req.body.url)
    const data = await scrapeRecipes.scrapeRecipes(req.body.url);
    
    // res.s()
});

app.listen(3000, () => { console.log('server is running')})
module.exports = app;
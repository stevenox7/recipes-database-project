const path = require('path')
const express = require('express');
const app = express();
const scrapeRecipes  = require('../scraper')
const recipeController = require('./recipeController')

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded()); // for parsing application/x-www-form-urlencoded

app.use('/', express.static(path.join(__dirname, '../dist')))

// app.get('/', (req, res) => {
//     res.sendFile(__dirname, './dist/index.html')
// })
app.post('/insertRecipe', recipeController.getRecipeInfo, recipeController.createRecipe, (req, res) => {
    // console.log(res.locals.recipes.instructions)
    res.status(200).send('Good Job')
})
// app.post('/insertRecipe', async (req, res) => {
//     // console.log(req.body.url)
//     const data = await scrapeRecipes.scrapeRecipes(req.body.url);
//     console.log(data);
// });

app.listen(3000, () => { console.log('server is running')})
module.exports = app;
const models = require('./recipeModels')
const recipeController = {};
const scrapeRecipes  = require('../scraper')

recipeController.getRecipeInfo = async (req, res, next) => {
    const data = await scrapeRecipes.scrapeRecipes(req.body.url);
    res.locals.recipes = data
    res.locals.recipeName = req.body.name
    return next();
}
recipeController.createRecipe = async (req, res, next) => {
    const {ingredients, instructions} = res.locals.recipes
    const name = res.locals.recipeName
    const createdRecipe = await models.Recipe.create({name, ingredients, instructions})
    console.log(createdRecipe)
    return next()
}
recipeController.pullData = async (req, res, next) => {
    const recipes = await models.Recipe.find({})
    console.log(recipes)
    res.locals.allRecipes = recipes
    return next();
}

module.exports = recipeController
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://steve:go@recipescraper.4hoslun.mongodb.net/test';

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'recipeScraper'
  });


const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: String,
    ingredients: String,
    instructions: String,
});
const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = {Recipe};
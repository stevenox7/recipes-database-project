let puppeteer = require('puppeteer');
// let pluginStealth = require('puppeteer-extra-plugin-stealth');
// puppeteer.use(pluginStealth());

async function scrapeRecipes(url) {
    //load up the website 
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    //extract the recipeID from the divs
    const [id] = await page.$x('//*[@id="content"]/article/div[1]/a');
    const idItem = await id.getProperty('href');
    const idItemJson = await idItem.jsonValue();
    const recipeId = await idItemJson.substring(idItemJson.length - 5)
    //use that ID to find the recipeContainer for ingredients and instructions
    const [el1] = await page.$x(`//*[@id="tasty-recipes-${recipeId}"]/div/div[2]/div[2]`)
    const ingredientsList = await el1.getProperty('textContent')
    const ingredients = await ingredientsList.jsonValue()

    const [el2] = await page.$x(`//*[@id="tasty-recipes-${recipeId}"]/div/div[3]`)
    const instructionsList = await el2.getProperty('textContent')
    const instructions = await instructionsList.jsonValue()
    await browser.close()
    
    console.log({ingredients, instructions})
    //*[@id="tasty-recipes-81678"]/div/div[3]

}
module.exports = {
    scrapeRecipes
}
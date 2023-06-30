const getAllRecipesController = require("../controllers/getAllRecipesController");

const getAllRecipesHandler = async (req, res) => {
  try {
    const allRecipes = await getAllRecipesController();

    res.status(200).json(allRecipes);
  } catch (error) {
    res.status(400).json("hola");
  }
};

module.exports = getAllRecipesHandler;

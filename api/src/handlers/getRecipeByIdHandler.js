const getRecipeByIdController = require("../controllers/getRecipeByIdController");

const getRecipeByIdHandler = async (req, res) => {
  const { id } = req.params;

  const recipeById = await getRecipeByIdController(id);
  try {
    res.status(200).json(recipeById);
  } catch (error) {
    res.status(400).json("hola");
  }
};

module.exports = getRecipeByIdHandler;

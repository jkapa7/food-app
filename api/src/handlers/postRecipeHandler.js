const postRecipeController = require("../controllers/postRecipeController");

const postRecipeHandler = async (req, res) => {
  try {
    const { name, image, summary, health_score, step_by_step, diet } = req.body;

    const newRecipe = await postRecipeController(
      name,
      image,
      summary,
      health_score,
      step_by_step,
      diet
    );

    res.status(200).json(newRecipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postRecipeHandler;

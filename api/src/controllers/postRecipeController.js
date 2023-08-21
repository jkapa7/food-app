const { Recipe, Diet } = require("../db");

const postRecipeController = async (
  name,
  image,
  summary,
  health_score,
  step_by_step,
  diet
) => {
  let newRecipe = await Recipe.create({
    name,
    image,
    summary,
    health_score,
    step_by_step,
  });

  let dietDb = await Diet.findAll({
    where: {
      name: diet,
    },
  });

for

  if (dietDb) {
    await newRecipe.addDiet(dietDb.name);
  } else {
    console.log(`Diet '${diet_type}' not found.`);
  }

  return newRecipe;
};

module.exports = postRecipeController;

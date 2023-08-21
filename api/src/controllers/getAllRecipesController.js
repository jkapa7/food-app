const axios = require("axios");
const { Recipe, Diet } = require("../db");

const getAllRecipesController = async () => {
  //BUSCAR EN LA BASE DE DATOS
  const databaseRecipes = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
    },
  });

  //BUSCAR EN LA API, NOS TRAE TODA LA INFO
  const apiRecipesInformation = await axios.get(
    "http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=accadb79b0774cef88d5954ebed0a9d9"
  );

  //TOMAMOS EL RESULTS DE LA DATA DE LA INFO
  const apiRecipesData = apiRecipesInformation.data.results;

  //FILTRAR LOS DATOS DE LA API, SOLO QUEREMOS LOS QUE USAMOS EN EL MODELO
  const apiRecipesFiltered = apiRecipesData.map((recipe) => {
    return {
      id: recipe.id,
      name: recipe.title,
      image: recipe.image,
      summary: recipe.summary,
      step_by_step: recipe.analyzedInstructions[0]?.steps.map((steps) => {
        return {
          number: steps.number,
          steps: steps.step,
        };
      }),
      diet: recipe.diets,
      health_score: recipe.healthScore,
    };
  });

  //JUNTAR LOS RESULTADOS DE LA API Y DE LA BASE DE DATOS
  const allRecipes = [...apiRecipesFiltered, ...databaseRecipes];

  return allRecipes;
};

module.exports = getAllRecipesController;

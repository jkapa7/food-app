const axios = require("axios");
const { API_KEY } = process.env;
const { Diet_type } = require("../db");

const getAllDietsController = async () => {
  //TRAERNOS TODAS LAS DIETAS DE LA API
  const apiInformation = await axios.get(
    `http://localhost:8080/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=accadb79b0774cef88d5954ebed0a9d9`
  );

  const apiInformationResults = apiInformation.data.results;

  //TODAS LAS DIETAS DE LA API, MUCHAS REPETIDAS
  const allDietsApi = apiInformationResults.flatMap((data) => data.diets);

  //FUNCION PARA ELIMINAR LAS DIETS REPETIDAS
  const removeDuplicateDiets = (arr) => {
    return Array.from(new Set(arr));
  };

  //TODAS LAS DIETS, UNICAS, SIN ESTAR REPETIDAS
  const dietsApi = removeDuplicateDiets(allDietsApi);

  dietsApi.forEach(async (diet) => {
    const findInDb = await Diet_type.findOne({ where: { name: diet } });
    //Si no encuetra...
    if (!findInDb) {
      //Los crea todos en la DB
      await Diet_type.create({ name: diet });
    }
  });

  return await Diet_type.findAll();
};

module.exports = getAllDietsController;

const { Router } = require("express");
const getAllRecipesHandler = require("../handlers/getAllRecipesHandler");
const postRecipeHandler = require("../handlers/postRecipeHandler");
const getRecipeByIdHandler = require("../handlers/getRecipeByIdHandler");

const recipesRouter = Router();

//POST PARA CREAR RECIPE
recipesRouter.post("/", postRecipeHandler);
//GET PARA TRAER TODAS LAS RECIPES
recipesRouter.get("/", getAllRecipesHandler);
//GET PARA TRAER LAS RECETAS POR ID
recipesRouter.get("/:id", getRecipeByIdHandler);
//GET PARA TRAER LAS RECETAS POR NOMBRE
module.exports = recipesRouter;

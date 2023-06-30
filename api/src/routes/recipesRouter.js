const { Router } = require("express");
const getAllRecipesHandler = require("../handlers/getAllRecipesHandler");
const postRecipeHandler = require("../handlers/postRecipeHandler");

const recipesRouter = Router();

recipesRouter.post("/", postRecipeHandler);
recipesRouter.get("/", getAllRecipesHandler);

module.exports = recipesRouter;

const { Router } = require("express");
const getDietsHandler = require("../handlers/getDietsHandler");

const dietsRouter = Router();

dietsRouter.get("/", getDietsHandler);

module.exports = dietsRouter;

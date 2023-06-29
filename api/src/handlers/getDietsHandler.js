const getAllDietsController = require("../controllers/getDietsController");

const getDietsHandler = async (req, res) => {
  try {
    const allDiets = await getAllDietsController();
    res.status(200).json(allDiets);
  } catch (error) {
    res.status(400).json({ error: "Hola" });
  }
};

module.exports = getDietsHandler;

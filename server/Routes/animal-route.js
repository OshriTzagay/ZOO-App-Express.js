const express = require("express");
const AnimalsCRUD = require("../Controllers/animal-ctrl");
const animalsRouter = express.Router();

animalsRouter.get("/", AnimalsCRUD.GetAnimals);

animalsRouter.get("/:id", AnimalsCRUD.GetAnimalById);

animalsRouter.post("/", AnimalsCRUD.AddAnimal);

animalsRouter.put("/:id", AnimalsCRUD.UpdateAnimal);

animalsRouter.delete("/:id", AnimalsCRUD.DeleteAnimal);

module.exports = animalsRouter;

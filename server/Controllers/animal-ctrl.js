const Animals = require("../Models/animals-model");

const GetAnimals = (req, res) => {
  Animals.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const GetAnimalById = (req, res) => {
  Animals.findById({ _id: req.params.id })
    .then((animal) => res.status(200).send({ ChosenAnimal: animal }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const AddAnimal = (req, res) => {
  Animals.create(req.body)
    .then((animalToAdd) => res.status(200).send({ ADDED_ANIMAL: animalToAdd }))
    .catch((err) => res.status(400).send({ errMessage: err }));
};

const UpdateAnimal = (req, res) => {
  Animals.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((EditedAnimal) => res.send({ EditedSuccessfuly: EditedAnimal }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const DeleteAnimal = (req, res) => {
  Animals.findByIdAndRemove({ _id: req.params.id })
    .then((animalToDelete) => res.send({ DeletedAnimal: animalToDelete }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

module.exports = {
  GetAnimals,
  GetAnimalById,
  AddAnimal,
  UpdateAnimal,
  DeleteAnimal,
};

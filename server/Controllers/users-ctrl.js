const Users = require("../Models/users-model")

const GetUsers = (req, res) => {
  Users.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const GetUserById = (req, res) => {
  Users.findById({ _id: req.params.id })
    .then((User) => res.status(200).send({ ChosenUser: User }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const AddUser = (req, res) => {
  Users.create(req.body)
    .then((UserToAdd) => res.status(200).send({ Added_User: UserToAdd }))
    .catch((err) => res.status(400).send({ errMessage: err }));
};

const UpdateUser = (req, res) => {
  Users.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((EditedUser) => res.send({ EditedSuccessfuly: EditedUser }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const DeleteUser = (req, res) => {
  Users.findByIdAndRemove({ _id: req.params.id })
    .then((userTODelete) => res.send({ DeletedUser: userTODelete }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

module.exports = {
  GetUsers,
  GetUserById,
  AddUser,
  UpdateUser,
  DeleteUser,
};

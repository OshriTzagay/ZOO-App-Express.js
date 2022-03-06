const Users = require("../Models/users-model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const GetUsers =async (req, res) => {
 await Users.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};

const GetUserById =async (req, res) => {
 await Users.findById({ _id: req.params.id })
    .then((User) => res.status(200).send({ ChosenUser: User }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const AddUser = async (req, res) => {
  await Users.create(req.body)
    .then((UserToAdd) => res.status(200).send({ Added_User: UserToAdd }))
    .catch((err) => res.status(400).send({ errMessage: err }));
};

const UpdateUser = async (req, res) => {
  await Users.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((EditedUser) => res.send({ EditedSuccessfuly: EditedUser }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const DeleteUser = async (req, res) => {
 await Users.findByIdAndRemove({ _id: req.params.id })
    .then((userTODelete) => res.send({ DeletedUser: userTODelete }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const Register = async (req, res) => {
  if (await Users.exists({ Email: req.body.Email })) return res.status(400).send({ Message: "~~Email Already Used~~" });
  

  bcrypt.hash(req.body.Password, 10, async (err, hasedPassword) => {
    console.log(hasedPassword);
    if (err) return res.status(500).json({ Message: err });
    req.body.Password = hasedPassword;
    await Users.create(req.body)
      .then((result) =>
        res.status(200).send({ Message: "User Added Successfully", result })
      )
      .catch((err) => res.status(500).send(err));
  });
};
////////////////!!!!!!!!!!!!!!!!
const Login  = async (req, res) => {
  // if (Users.exists(req.body.Email) == false)
  //   return res.status(400).json({ message: "Email not found" });
  try {
    const user = await Users.findOne({ Email: req.body.Email });
    bcrypt.compare(req.body.Password, user.Password, (err, isMatch) => {
      if (err) return res.status(500).json({ message: "Error" });
      if (!isMatch)
        return res.status(400).json({ message: "Password incorrect" });
      const token = jwt.sign({ user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful", token });
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};
module.exports = {
  GetUsers,
  GetUserById,
  AddUser,
  UpdateUser,
  DeleteUser,
  Login,
  Register,
};

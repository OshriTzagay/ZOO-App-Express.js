const Employees = require("../Models/employees-model");

const GetEmployees = (req, res) => {
    Employees.find()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send(err));
};

const GetEmployeeById = (req, res) => {
    Employees.findById({ _id: req.params.id })
    .then((employee) => res.status(200).send({ ChosenEmployee: employee }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const AddEmployee = (req, res) => {
    Employees.create(req.body)
    .then((EmployeeToAdd) => res.status(200).send({ EmployeeAdded: EmployeeToAdd }))
    .catch((err) => res.status(400).send({ errMessage: err }));
};

const UpdateEmployee = (req, res) => {
    Employees.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then((EditedAnimal) => res.send({ EditedSuccessfuly: EditedAnimal }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

const DeleteEmployee = (req, res) => {
    Employees.findByIdAndRemove({ _id: req.params.id })
    .then((EmployeeToRemove) => res.send({ DeletedEmployee: EmployeeToRemove }))
    .catch((err) => res.status(400).send({ ERROR: err }));
};

module.exports = {
  GetEmployees,
  GetEmployeeById,
  AddEmployee,
  UpdateEmployee,
  DeleteEmployee,
};
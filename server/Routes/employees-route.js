const express = require("express");
const EmployeeCRUD = require("../Controllers/employees-ctrl");
const employeeRouter = express.Router();

employeeRouter.get("/", EmployeeCRUD.GetEmployees);

employeeRouter.get("/:id", EmployeeCRUD.GetEmployeeById);

employeeRouter.post("/", EmployeeCRUD.AddEmployee);

employeeRouter.put("/:id", EmployeeCRUD.UpdateEmployee);

employeeRouter.delete("/:id", EmployeeCRUD.DeleteEmployee);

module.exports = employeeRouter;

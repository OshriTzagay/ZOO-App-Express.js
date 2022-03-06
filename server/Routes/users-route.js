const UsersCRUD = require("../Controllers/users-ctrl");
const UserRouter = require("express").Router();

UserRouter.get("/", UsersCRUD.GetUsers);

UserRouter.get("/:id", UsersCRUD.GetUserById);

UserRouter.post("/register", UsersCRUD.Register);
UserRouter.post("/login",UsersCRUD.Login);

UserRouter.put("/:id", UsersCRUD.UpdateUser);

UserRouter.delete("/:id", UsersCRUD.DeleteUser);


module.exports = UserRouter;

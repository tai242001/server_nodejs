const UserController = require("../controller/UserController");

const routeruser = require("express").Router();


//add user
routeruser.post("/register", UserController.addUser);

//get all user
routeruser.get("/", UserController.getallUser);

//get an user
routeruser.get("/:id", UserController.getanUser);

module.exports = routeruser;
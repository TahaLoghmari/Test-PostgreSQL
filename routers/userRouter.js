const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/userController");

userRouter.get("/", userController.getUsers);
userRouter.get("/new", userController.getNewUser);
userRouter.post("/new", userController.postNewUser);
userRouter.get("/delete", userController.deleteUsers);

module.exports = userRouter;

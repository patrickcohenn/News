const route = require("express").Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", userController.findById);
route.patch("/:id", userController.update); //put e patch são parecidos porem o put vai atualizaro todos os dados e patch somente o cammpo que atulziar

module.exports = route;

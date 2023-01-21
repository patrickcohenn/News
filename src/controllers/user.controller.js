const { default: mongoose } = require("mongoose");
const userService = require("../services/user.service");
//Criando User.
const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body; //destructuring the object just open {} and put all the filds

  //doing data checks (user information)
  //Validation before arriving at the date base helps in the speed of the aplication
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all filds for registration" });
  } //first verification of user data. return error 400 Bad Request

  const user = await userService.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro creating User" });
  }

  res.status(201).send({
    message: "User created successfully",
    user: {
      id: user._id,
      name,
      username,
      email,
      //password,
      avatar,
      background,
    }, // send only necessary or what I want to the user
  });

  //res.json("Hello Word")
};

//Criadno Bucar todos Usuarios
const findAll = async (req, res) => {
  //este findAll esta em Controller
  const users = await userService.findAllService(); //Este findAll e do Service o await e para esperar que seja executado primeiro.

  if (users.length === 0) {
    return res.status(400).send({ message: "There are no registered users" });
  }

  res.send(users);
};

//Func para buscar um usuaio e
const findById = async (req, res) => {
  const id = req.params.id; // Parametro de Busca

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  res.send(user);
};

//atauzalido de dados
const update = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name && !username && !email && !password && !avatar && !background) {
    res.status(400).send({ message: "Submit at least one filde for update" });
  }

  //Verificando se tem um id no BD
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID" });
  }

  const user = await userService.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }

  await userService.updateService(
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
  );

  res.send({ message: "user Successfully update!" });
};

module.exports = { create, findAll, findById, update };

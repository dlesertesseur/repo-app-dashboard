import {
  getAllUsers,
  findUserById,
  insertUser,
  updateUser,
  deleteUser,
} from "../services/user.service.js";

const getAll = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findById = async (req, res) => {
  const uid = req.params.uid;
  try {
    const user = await findUserById(uid);
    if(!user){
      res.status(404).send({ errorMessage: error.message });
    }else{
      res.send(user);
    }
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
};

const insert = async (req, res) => {
  try {
    const ret = await insertUser(req.body);
    res.send(ret);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const update = async (req, res) => {
  const pid = req.params.pid;

  if (pid) {
    try {
      const user = await updateUser(pid, req.body);
      res.send(user);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(400).send({ message: "Bad request" });
  }
};

const remove = async (req, res) => {
  const pid = req.params.pid;

  if (pid) {
    try {
      const user = await deleteUser(pid);
      res.send(user);
    } catch (error) {
      console.log(error)
      res.status(500).send({ message: error.message });
    }
  } else {
    res.status(400).send({ message: "Bad request" });
  }
};

export { getAll, findById, update, insert, remove };

import UserDao from "../persistence/nomgoDb/user.dao.js";

const dao = new UserDao();

const getAllUsers = async (email) => {
  const users = await dao.getAll(email);
  return users;
};

const findByEmail = async (email) => {
  const user = await dao.findByEmail(email);
  return user;
};

const findUserById = async (id) => {
  const user = await dao.findByIdComplete(id);
  const ret = {
    id: user._id,
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    role: user.role,
    organization: {
      id: user.organization._id,
      name: user.organization.name,
      description: user.organization.description,
      logo: user.organization.logo,
    },
    photo: user.photo,
  };
  return ret;
};

const updateUser = async (uid, user) => {
  await dao.update(uid, user);
};

const insertUser = async (uid, user) => {
  await dao.insert(uid, user);
};

const deleteUser = async (uid, user) => {
  await dao.delete(uid, user);
};

export {
  getAllUsers,
  findByEmail,
  findUserById,
  updateUser,
  insertUser,
  deleteUser,
};

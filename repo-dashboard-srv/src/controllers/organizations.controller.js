import {
  getAll,
} from "../services/organizarions.service.js";

const getAllOrganizations = async (req, res) => {
  try {
    const list = await getAll();
    res.send(list);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getAllOrganizations };

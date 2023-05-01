import {
  getAll,
} from "../services/retailers.service.js";

const getAllRetailers = async (req, res) => {
  try {
    const list = await getAll();
    res.send(list);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getAllRetailers };

import { getAll } from "../services/workingInStore.service.js";

const getAllWorkersInStores = async (req, res) => {
  try {
    const ret = await getAll();
    res.send(ret);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export { getAllWorkersInStores };

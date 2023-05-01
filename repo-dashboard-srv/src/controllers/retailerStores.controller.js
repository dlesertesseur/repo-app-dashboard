import {
  getAllStoresByRetailId,
} from "../services/retailerStores.service.js";

const getAllByRetailerId = async (req, res) => {
  const uid = req.params.rid;
  try {
    const list = await getAllStoresByRetailId(uid);
    res.send(list);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
};

export { getAllByRetailerId };

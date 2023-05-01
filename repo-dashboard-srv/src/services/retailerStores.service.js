import RetailerStoresDao from "../persistence/nomgoDb/retailerStores.dao.js";

const dao = new RetailerStoresDao();

const getAllStoresByRetailId = async (id) => {
  const stores = await dao.getAllByRetailId(id);

  const list = stores.map((store) => {
    const ret = {
      id: store._id.toString(),
      name: store.name,
      address: store.address
    };
    return ret;
  });

  return list;
};

export { getAllStoresByRetailId};

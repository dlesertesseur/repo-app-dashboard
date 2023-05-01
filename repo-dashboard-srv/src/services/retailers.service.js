import RetailersDao from "../persistence/nomgoDb/retailers.dao.js";

const dao = new RetailersDao();

const getAll = async () => {
  const retailers = await dao.getAll();

  const list = retailers.map((retailer) => {
    const ret = {
      id: retailer._id.toString(),
      name: retailer.name,
      logo: retailer.image,
    };
    return ret;
  });
  return list;
};

export { getAll };

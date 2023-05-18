import WorkingInSToreDao from "../persistence/nomgoDb/workingInStore.dao.js";

const dao = new WorkingInSToreDao();

const getAll = async () => {
  const indicators = await dao.getAll();
  return indicators;
};

const getByName = async (name) => {
  const indicator = await dao.getByName(name);
  return indicator;
};

const create = async (payload) => {
  const obj = await dao.create(payload);
  return obj;
};

export { getAll, getByName, create };

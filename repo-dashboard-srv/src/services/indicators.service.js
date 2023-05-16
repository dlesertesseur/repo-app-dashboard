import IndicatorsDao from "../persistence/nomgoDb/indicators.dao.js";

const dao = new IndicatorsDao();

const getAll = async () => {
  const indicators = await dao.getAll();
  return indicators;
};

const getByName = async (name) => {
  const indicator = await dao.getByName(name);
  return indicator;
};

export { getAll, getByName };

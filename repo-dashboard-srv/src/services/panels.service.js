import panelsSchema from "../models/panels.model.js";
import PanelsDao from "../persistence/nomgoDb/panels.dao.js";

const dao = new PanelsDao("panels", panelsSchema);

const getAll = async () => {
  const panels = await dao.getAll();
  return panels;
};

const getByName = async (name) => {
  const panel = await dao.getByName(name);
  return panel;
};

export { getAll, getByName };

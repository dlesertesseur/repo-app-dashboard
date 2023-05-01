import OrganizationsDao from "../persistence/nomgoDb/organizations.dao.js";

const dao = new OrganizationsDao();

const getAll = async () => {
  const panels = await dao.getAll();
  return panels;
};

const getByName = async (name) => {
  const panel = await dao.getByName(name);
  return panel;
};

export { getAll, getByName };

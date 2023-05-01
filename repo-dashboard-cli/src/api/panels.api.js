import { API } from "../config/Api";

const getAllPanels = async () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  };

  const url = API.data.getAllPanels;
  const res = await fetch(url, requestOptions);
  const data = await res.json();

  const panels = data.map((panel) => {
    return {
      name: panel.name,
      data: panel.data,
      lastUpdate: panel.lastUpdate,
    };
  });
  return panels;
};

const getPanelByName = async (parameters) => {
  const queryParams = `?organization=${parameters.organization}&date=${parameters.date[0]}&retailer=${parameters.retailer}&store=${parameters.store}`;
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include"
  };

  const url = API.data.getByName + "/" + parameters.name + queryParams;
  const res = await fetch(url, requestOptions);
  const data = await res.json();

  return(data);
};

export { getAllPanels, getPanelByName };

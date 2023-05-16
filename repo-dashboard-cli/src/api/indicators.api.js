import { API } from "../config/Api";

const getAllIndicators = async () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  };

  const url = API.indicators.getAll;
  const res = await fetch(url, requestOptions);
  const data = await res.json();

  // const panels = data.map((indicator) => {
  //   return {
  //     descripcion: indicator.descripcion,
  //     indicador: indicator.indicador,
  //     cantidad: indicator.cantidad,
  //   };
  // });
  return data;
};

const getIndicatorByName = async (parameters) => {
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

export { getAllIndicators, getIndicatorByName };

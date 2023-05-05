import { API } from "../config/Api";

const getAllRetailers = async () => {
  
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
  
    const url = API.retailers.getAll;
    const res = await fetch(url, requestOptions);
    const data = await res.json();

    return (data);
  };

  const getStoresByRetailId = async (parameters) => {
  
    const requestOptions = {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
  
    const url = API.retailers.getStoresByRetailId + "/" + parameters.id;
    const res = await fetch(url, requestOptions);
    const data = await res.json();
  
    return (data);
  };


  export {getAllRetailers, getStoresByRetailId}
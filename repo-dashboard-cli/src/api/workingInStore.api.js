import { API } from "../config/Api";

const getWorkingInStore = async () => {
  const requestOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    credentials: "include",
  };

  const url = API.workingInStore.getAll;
  const res = await fetch(url, requestOptions);
  const data = await res.json();

  return data;
};


export { getWorkingInStore };

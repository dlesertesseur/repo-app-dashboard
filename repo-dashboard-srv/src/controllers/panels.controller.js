import {
  getAll,
  getByName
} from "../services/panels.service.js";

const getAllPanels = async (req, res) => {
  try {
    const panels = await getAll();
    res.send(panels);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getRandomValue = (min, max) => {
  const ret = Math.floor(Math.random() * max) + min;
  return(ret);
}

const getPanelByName = async (req, res) => {
  const pName = req.params.pName;
  const {date, organization, retailer, store} = req.query;

  const panel = { 
    "KPI1": getRandomValue(0, 100),
    "KPI2": getRandomValue(0, 100),
    "KPI3": getRandomValue(0, 100),
    "KPI4": getRandomValue(0, 100),
    "KPI5": getRandomValue(0, 100),
    "KPI6": getRandomValue(0, 100),
    "KPI7": getRandomValue(0, 100),
    "KPI8": getRandomValue(0, 100),
    "KPI9": getRandomValue(0, 100),
    "KPI10": getRandomValue(0, 100),
  }
  try {
    
    if(!panel){
      res.status(404).send({ errorMessage: error.message });
    }else{
      res.send(panel);
    }
  } catch (error) {
    res.status(500).send({ errorMessage: error.message });
  }
};

export { getAllPanels, getPanelByName };

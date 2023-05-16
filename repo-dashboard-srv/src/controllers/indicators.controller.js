import {
  getAll,
} from "../services/indicators.service.js";

const getAllIndicators = async (req, res) => {
  try {
    const panels = await getAll();
    res.send(panels);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getIndicatorByName = async (req, res) => {
  const pName = req.params.pName;
  const {date, organization, retailer, store} = req.query;

  const panel = { }
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

export { getAllIndicators, getIndicatorByName };

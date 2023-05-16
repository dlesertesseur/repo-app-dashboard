import mongoose from "mongoose";
import config from "../../config/config.js";
import indicatorsSchema from "../../models/indicators.model.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME }, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

class IndicatorsDao {
  constructor() {   
    this.collection = mongoose.model("indicators", indicatorsSchema);
  }

  async getAll() {
    let ret = null;

    try {
      ret = await this.collection.find().lean();

      return ret;
    } catch (error) {
      throw error;
    }
  }

  async getByName(name) {
    try {
      let ret = await this.collection.findOne({ name: name }).lean();
      return ret;
    } catch (error) {
      throw error;
    }
  }
}

export default IndicatorsDao;

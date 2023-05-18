import mongoose from "mongoose";
import config from "../../config/config.js";
import retailersSchema from "../../models/retailers.model.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME }, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

class RetailersDao{
  constructor() {
    this.collection = mongoose.model("retailers", retailersSchema);
  }

  async getAll() {
    let ret = await this.collection.find().lean();
    return ret;
  }

  async findById(id) {
    try {
      let ret = await this.collection.findById(id).lean();
      return ret;
    } catch (error) {
      throw error;
    }
  }

}



export default RetailersDao;

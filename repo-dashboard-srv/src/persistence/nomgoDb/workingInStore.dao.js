import mongoose from "mongoose";
import config from "../../config/config.js";
import workingInStoreSchema from "../../models/workingInStore.model.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME }, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

class WorkingInStoreDao {
  constructor() {
    this.collection = mongoose.model("workingInStore", workingInStoreSchema);
  }

  async getAll() {
    let ret = null;
    ret = await this.collection.find().lean();
    return ret;
  }

  async getByName(name) {
    let ret = await this.collection.findOne({ name: name }).lean();
    return ret;
  }

  async create(payload) {
    let ret = await this.collection.create(payload);
    return ret;
  }
}

export default WorkingInStoreDao;

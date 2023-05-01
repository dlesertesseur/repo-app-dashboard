import mongoose from "mongoose";
import config from "../../config/config.js";
import retailerStoresSchema from "../../models/retailerStores.model.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME }, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

class RetailerStoresDao {
  constructor() {
    this.collection = mongoose.model("retailerStores", retailerStoresSchema);
  }

  async getAllByRetailId(id) {
    const query = { retailer: new mongoose.Types.ObjectId(id) }
    let ret = await this.collection.find(query).lean();
    return ret;
  }
}

export default RetailerStoresDao;

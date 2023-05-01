import mongoose from "mongoose";
import config from "../../config/config.js";
import organizationsSchema from "../../models/organizations.model.js";

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, { dbName: config.DB_NAME }, (error) => {
  if (error) {
    console.log("Cannot connect to db");
    process.exit();
  }
});

class OrganizationsDao {
  constructor() {
    this.collection = mongoose.model("organizations", organizationsSchema);
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

export default OrganizationsDao;

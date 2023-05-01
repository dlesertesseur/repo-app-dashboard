import mongoose from "mongoose";

const panelsSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastUpdate: { type: String, required: true },
  data: { type: Object },
});

export default panelsSchema;
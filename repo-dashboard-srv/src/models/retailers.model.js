import mongoose from "mongoose";

const retailersSchema = mongoose.Schema({
  name: { type: String, required: true },
  timestamp: { type: Date, required: true },
  image: { type: String, required: false },
});

export default retailersSchema;
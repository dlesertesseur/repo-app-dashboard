import mongoose from "mongoose";

const organizationsSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: Boolean },
  creation_date: {type: Date, required: true},
  code: {type:String, required: true},
  logo: {type:String, required: false},
});

export default organizationsSchema;
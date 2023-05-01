import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true , default: "user" },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: "organizations" },
  photo: { type: String, required: true , default: "no-photo.png" },
});

export default userSchema;
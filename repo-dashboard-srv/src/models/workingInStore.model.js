import mongoose from "mongoose";

const workingInStoreSchema = mongoose.Schema({
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  country: { type: String, required: true },
  province: { type: String, required: true },
  city: { type: String, required: true },
  type: { type: String, required: true },
  radius_in_meters: { type: Number, required: true },
  retailer: { type: mongoose.Schema.Types.ObjectId, ref: "retailers" },
  operators: { type: Object },
  timestamp: { type: String, required: true },
  monday: { type: String, required: true },
  tuesday: { type: String, required: true },
  wednesday: { type: String, required: true },
  thursday: { type: String, required: true },
  friday: { type: String, required: true },
  saturday: { type: String, required: true },
  sunday: { type: String, required: true },
  status: { type: String, required: true },
  name: { type: String, required: true },
  phones: { type: String, required: true },
});

export default workingInStoreSchema;

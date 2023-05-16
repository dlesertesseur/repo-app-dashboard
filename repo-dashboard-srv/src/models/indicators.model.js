import mongoose from "mongoose";

const indicatorsSchema = mongoose.Schema({
  indicador: { type: String, required: true },
  descripcion: { type: String, required: true },
  cantidad: { type: Number, required: true },
});

export default indicatorsSchema;

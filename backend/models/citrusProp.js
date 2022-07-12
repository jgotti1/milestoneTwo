import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  name: { type: String, required: true },
});

const CitrusProperty = mongoose.model("CitrusProperty", propertySchema);

export default CitrusProperty;

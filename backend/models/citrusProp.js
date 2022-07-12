import mongoose from "mongoose";

const propertySchema = mongoose.Schema({
  property_name: { type: String, required: true },
  property_address: { type: String, required: true },
  property_size: { type: String, required: true },
});

const CitrusProperty = mongoose.model("CitrusProperty", propertySchema);

export default CitrusProperty;

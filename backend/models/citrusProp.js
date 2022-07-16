import mongoose from "mongoose";
//schema for project
const propertySchema = mongoose.Schema({
  state: { type: String, required: true },
  city: { type: String, required: true },
  street: { type: String, required: true },
  apartmentNum: { type: Number, required: false },
  size: { type: Number, required: true },
  rent: { type: String, required: true },
  occupied: { type: String, required: true },
  tenantName: { type: String, required: false },
  occupiedDate: { type: Date, required: false },
  numOccupants: { type: Number, required: false },
  pets: { type: String, required: false },
  latePayment: { type: String, required: false },
  tenantRequests: { type: String, required: false },
  tenantNotes: { type: String, required: false },
});

const CitrusProperty = mongoose.model("CitrusProperty", propertySchema);

export default CitrusProperty;

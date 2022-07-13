import mongoose from "mongoose";

const propertySchema = mongoose.Schema({ 
  property_name: { type: String, required: true },
  property_address: {type: String, required:true},
  property_apartment_num: {type:Number, required:true},
  property_size: {type:Number, required:true},
  property_rent: {type:Number, required:true},
  occupied: {type:Boolean, required:true},
  tenant_name: {type:String, required:false},
  date_occupied: {type:Date, required:false},
  num_of_occupants: {type:Number, required:false},
  pets: {type:Boolean, required:true},
  late_payment: {type:Boolean, required:false},
  tenant_comments: {type:String, required:false}
});

const CitrusProperty = mongoose.model("CitrusProperty", propertySchema);

export default CitrusProperty;

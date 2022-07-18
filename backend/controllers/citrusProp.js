const CitrusProperty = require("../models/citrusProp.js");

const getData = async (req, res) => {
  try {
    const allData = await CitrusProperty.find();
    res.status(200).json(allData);
    console.log(allData);
    return allData;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
const createData = async (req, res) => {
  const data = req.body;
  const newData = new CitrusProperty(data);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const editData = async (req, res) => {
  const data = req.body;
  const newData = new CitrusProperty(data);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
const deleteData = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    await CitrusProperty.findByIdAndRemove(id).exec();
    res.send("Record Deleted Successfully!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getData,
  createData,
  deleteData,
  editData,
};

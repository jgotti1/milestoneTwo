import CitrusPropData from "../models/citrusProp.js";

export const getData = async (req, res) => {
  try {
    const allData = await CitrusPropData.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createData = async (req, res) => {
  const data = req.body;
  const newData = new CitrusPropData(data);
  try {
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    await CitrusPropData.findByIdAndRemove(id).exec();
    res.send("Record Deleted Successfully!");
  } catch (error) {
    console.log(error);
  }
};

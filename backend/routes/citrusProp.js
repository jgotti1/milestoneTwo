const { Router } = require("express");
const { getData, createData, deleteData, editData } = require("../controllers/citrusProp.js");

const router = Router();

router.get("/citrus", getData);
router.post("/citrus", createData);
router.put("/citrus/:id", editData);
router.delete("/citrus/:id", deleteData);

module.exports = router;

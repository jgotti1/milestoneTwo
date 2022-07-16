const { Router } = require("express");
const { getData, createData, deleteData } = require("../controllers/citrusProp.js");

const router = Router();

router.get("/citrus", getData);
router.post("/citrus", createData);
router.delete("/citrus:id", deleteData);

module.exports = router;

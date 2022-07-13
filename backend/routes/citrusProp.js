import express from "express";
import { getData, createData, deleteData } from "../controllers/citrusProp.js";

const router = express.Router();

router.get("/", getData);
router.post("/", createData);
router.delete("/:id", deleteData);

export default router;

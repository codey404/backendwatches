import express from "express";
import {
  createWatch,
  getWatches,
  getWatch,
  deleteWatch,
  updateWatch,
} from "../controller/watchController.js";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.post("/", upload.array("images"), createWatch);
router.get("/", getWatches);
router.get("/:id", getWatch);
router.put("/:id", updateWatch);
router.delete("/:id", deleteWatch);

export default router;

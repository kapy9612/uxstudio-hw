import express from "express";
import contactController from "../controllers/contactController";

const router = express.Router();

router.post("/", contactController.create);
router.get("/", contactController.getAll);
router.get("/:id", contactController.getById);
router.put("/:id", contactController.update);
router.delete("/:id", contactController.delete);

export default router;

import express from "express";
import {
  createNotification,
  updateNotification,
  deleteNotification,
  getNotifications,
} from "../controllers/notificationController.js";

const router = express.Router();

router.get("/", getNotifications);
router.post("/", createNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

export default router;

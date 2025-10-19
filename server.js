import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./config/db.js";
import notificationRoutes from "./routes/notificationRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// ROUTE UTAMA
app.use("/api/notifications", notificationRoutes);

// START SERVER
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

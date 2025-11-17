import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db/index.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: "http://localhost:5173", // your frontend URL
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Start server + DB connection
const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`🔥 Server running on port ${PORT}`);
  } catch (err) {
    console.error("❌ DB connection failed:", err);
  }
});

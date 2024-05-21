import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoute from "./routes/authRoute.js";
import crudRoute from "./routes/crudRoute.js";
import profileRoute from "./routes/profileRoute.js";
import verifyRoute from "./routes/verifyRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5055;
const corsOptions = {
  origin: process.env.FRONTEND_HOST,
  // origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoute);
app.use("/crud", crudRoute);
app.use("/profile", profileRoute);
app.use("/verify", verifyRoute);

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("Connect db success"))
  .catch((err) => console.error("Error connecting to MongoDB", err));

app.listen(port, () => {
  console.log("Server is running at localhost: " + port);
});

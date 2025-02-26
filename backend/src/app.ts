import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
import authRouter from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors({ origin: "http://localhost:5050", credentials: true }));

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

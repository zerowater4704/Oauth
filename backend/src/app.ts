import express from "express";
import dotenv from "dotenv";
import connectDB from "./db";
import cookieParser from "cookie-parser";
import passport from "passport";
import cors from "cors";
import authRouter from "./routes/auth";

const envFile =
  process.env.NODE_ENV === "production"
    ? "/home/ec2-user/Oauth/.env.prod"
    : "Oauth/backend/.env.prod";
dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5050",
    credentials: true,
  })
);

app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});

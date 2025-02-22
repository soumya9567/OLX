import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongodb.js";
import route from "./routes/authroute.js";
import cors from "cors";
import { signIn, signUp } from "./controller/authcontroller.js";

const app = express();
dotenv.config();

const port = process.env.PORT || 4000;
app.use(express.json());
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.post("/api/signup", signUp);
app.post("/api/signin", signIn);

// app.set("view engine","ejs")

app.use("/auth", route);

app.listen(port, () => {
  console.log("server host",port);
});

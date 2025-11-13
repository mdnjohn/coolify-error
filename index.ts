import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.listen(7000, () => {
  console.log("Basic app running on port 7000");
});

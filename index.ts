import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.get("/health", (req: Request, res: Response) => {
  console.log("Health endpoint hit");
  res.status(200).send("OK");
});

app.listen(7000, () => {
  console.log("Basic app running on port 7000");
});

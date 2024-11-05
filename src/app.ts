import { config } from "dotenv";
import express, { Request, Response } from "express";

config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, GhostLink!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

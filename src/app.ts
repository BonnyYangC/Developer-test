import { config } from "dotenv";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";

config();
const app = express();
const port = process.env.PORT || 3000;

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, GhostLink!");
});

// Define a route
app.post('/api/data', (req: Request, res: Response) => {
  console.log(req.body); // Parsed data from body
  res.send('Data received');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

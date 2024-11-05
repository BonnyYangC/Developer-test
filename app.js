import express from "express";
import { config } from "dotenv";

const app = express();
config();

//body parer middleware
app.use(express.json());  // can use raw json in body of post request
app.use(express.urlencoded({ extended: false })); // can use www-form-urlencoded in body of post request

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
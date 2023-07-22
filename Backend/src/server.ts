import "dotenv/config";
import express from "express";

const app = express();
app.use(express.json());

const { SERVER_PORT } = process.env;

app.get("/test", (_req, res) => {
  console.log("Someone is here!");
  res.send("Hi!");
});

app.listen(SERVER_PORT, () => console.log(`Server on port ${SERVER_PORT}`));

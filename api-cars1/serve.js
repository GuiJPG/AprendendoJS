import express, { application } from "express";
import {
  myReadFile,
  createdCar,
  updateCar,
  deleteCar,
  findOne,
} from "./repository.js";
const app = express();
app.use(express.json());
const port = 3000;

app.get("/api/cars/all", (req, res) => {
  return res.send(myReadFile("cars.json"));
});

app.get("/api/cars/:id", (req, res) => {
  const id = req.params.id;
  const response = findOne("cars.json",id);
  res.send(response);
});
app.post("/api/cars", (req, res) => {
  const data = req.body;
  const response = createdCar("cars.json", data);
  res.send(response);
});

app.put("/api/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const response = updateCar("cars.json", data, id);
  res.send(response);
});

app.delete("/api/:id", (req, res) => {
  const id = req.params.id;
  const response = deleteCar("cars.json", id);
  res.send(response);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

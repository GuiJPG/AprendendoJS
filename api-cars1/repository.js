import fs from "fs";

export function myReadFile(filePath) {
  const ext = filePath.split("."); // [nome, extenção]
  if (ext[1] !== "json") {
    throw new Error("Arquivo não suportado");
  }
  const data = fs.readFileSync(filePath, "utf-8");
  const response = JSON.parse(data);
  return response;
}

export function findOne(filePath, id) {
  const data = myReadFile(filePath);
  return data[id];
}
export function createdCar(filePath, data) {
  const base = myReadFile(filePath);
  const lastId = Object.keys(base).pop();
  const nextId = Number(lastId) + 1;

  base[nextId] = data;
  save(base);
  return base;
}

function save(base) {
  const baseUpdated = JSON.stringify(base);
  console.log(baseUpdated);
  fs.writeFileSync("cars.json", baseUpdated, "utf-8");
}

export function updateCar(filePath, data, id) {
  const base = myReadFile(filePath);
  base[id] = data;
  save(base);
  return base;
}

export function deleteCar(filePath, id) {
  const base = myReadFile(filePath);
  delete base[id];
  save(base);
  return base;
}


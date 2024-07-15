import express from "express";
import router from "./routes/routes.js";
import { dbConnection } from "./database/db.js";

const app = express();
const port = 8000;

app.use("/", router);

dbConnection();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

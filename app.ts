import lodash from "lodash";
import fs from "fs";
// import express, { Response, Request } from "express";
import express from "express";
import booksRouter from "./routing/books-routing";

// fs.writeFileSync("text.txt", "Testiramo app.ts");

const app = express();

// RUTIRANJE SERVERA
const router = express.Router();

// Da apk zna koji router da koristi
app.use(booksRouter);

// PROGRAMIRANJE SERVERA
app.listen(4000, () => {
  console.log("server is listening at port 4000");
});

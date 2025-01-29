import lodash from "lodash";
import fs from "fs";
// import express, { Response, Request } from "express";
import express from "express";
import booksRouter from "./routing/books-routing";
import "reflect-metadata";
import dbConnection from "./common/db-connection";
import authorsRouter from "./routing/author-routing";
import cors from "cors";
import additionalRouter from "./routing/additional-routing";
import path from "path";
import fileUploadRouter from "./common/file-upload";

// fs.writeFileSync("text.txt", "Testiramo app.ts");

const mysql = require("mysql2");
const app = express();

// RUTIRANJE SERVERA
const router = express.Router();

// Da apk zna koji router da koristi
app.use(express.json());
app.use(cors());
// Koristi public folder za slike
app.use(express.static(path.join(__dirname, "public")));

app.use("/books", booksRouter);
app.use("/authors", authorsRouter);
app.use("/additionals", additionalRouter);
app.use(fileUploadRouter);

// PROGRAMIRANJE SERVERA
app.listen(4000, () => {
  console.log("server is listening at port 4000");
});

dbConnection
  .initialize()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err: any) => {
    console.log(err);
  });

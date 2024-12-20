import { DataSource } from "typeorm";

const dbConnection = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "books",
});

export default dbConnection;

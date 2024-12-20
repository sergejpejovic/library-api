import { DataSource } from "typeorm";

const dbConnection = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root1234",
  database: "books2",
});

export default dbConnection;

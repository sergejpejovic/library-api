import express, { Request, Response } from "express";
import booksController from "../controllers/books-controller";
import authMiddleWare from "../middleware/auth-middleware";

const booksRouter = express.Router();

booksRouter
  .route("/")
  .get(authMiddleWare, booksController.getAllBooksDetailed)
  .post(booksController.createNewBook);

booksRouter
  .route("/:id")
  .get(booksController.getBookById)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);

export default booksRouter;

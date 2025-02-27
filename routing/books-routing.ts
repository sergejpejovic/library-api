import express, { Request, Response } from "express";
import booksController from "../controllers/books-controller";
import authMiddleWare from "../middleware/auth-middleware";

const booksRouter = express.Router();

booksRouter
  .route("/")
  .get(booksController.getAllBooksDetailed)
  .post(authMiddleWare, booksController.createNewBook);

booksRouter
  .route("/:id")
  .get(booksController.getBookById)
  .put(authMiddleWare, booksController.updateBook)
  .delete(authMiddleWare, booksController.deleteBook);

export default booksRouter;

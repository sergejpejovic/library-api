import express, { Request, Response } from "express";
import booksController from "../controllers/books-controller";

const booksRouter = express.Router();

booksRouter
  .route("/")
  .get(booksController.getAllBooks)
  .post(booksController.createNewBook);

booksRouter
  .route("/:id")
  .get(booksController.getBookById)
  .put(booksController.updateBook)
  .delete(booksController.deleteBook);

// booksRouter.get("/", (req: Request, res: Response) => {
//   //   console.log("Our first request");
//   // res.send({ msg: "Getting all books" });
//   booksController.getAllBooks;
// });

// booksRouter.get("/:id", (req: Request, res: Response) => {
//   // const id = req.params.id;
//   // res.send({ msg: `Getting book with ID: ${id}` });
//   booksController.getBookById;
// });

// booksRouter.post("/", (req: Request, res: Response) => {
//   // res.send({ msg: `Creating new book` });
//   booksController.createNewBook;
// });

// booksRouter.put("/:id", (req: Request, res: Response) => {
//   // const id = req.params.id;
//   // res.send({ msg: `Updating book with id: ${id}` });
//   booksController.updateBook;
// });

// booksRouter.delete("/:id", (req: Request, res: Response) => {
//   // const id = req.params.id;
//   // res.send({ msg: `Deleting book with id: ${id}` });
//   booksController.deleteBook;
// });

export default booksRouter;

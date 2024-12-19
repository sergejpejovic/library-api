import express, { Request, Response } from "express";

const booksRouter = express.Router();

booksRouter.get("/books", (req: Request, res: Response) => {
  //   console.log("Our first request");
  res.send({ msg: "Getting all books" });
});

booksRouter.get("/books/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send({ msg: `Getting book with ID: ${id}` });
});

booksRouter.post("/book", (req: Request, res: Response) => {
  res.send({ msg: `Creating new book` });
});

export default booksRouter;

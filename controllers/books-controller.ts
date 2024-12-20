import { Response, Request } from "express";
import booksService from "../services/books-service";

const getAllBooks = (req: Request, res: Response) => {
  const data = booksService.getAllBooks();
  res.send(data);
};

const getBookById = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = booksService.getBookById(parseInt(id));
  res.send(data);
};

const createNewBook = (req: Request, res: Response) => {
  const data = booksService.createNewBook();
  res.send(data);
};

const updateBook = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = booksService.updateBook(parseInt(id));
  res.send(data);
};

const deleteBook = (req: Request, res: Response) => {
  const id = req.params.id;
  const data = booksService.deleteBook(parseInt(id));
  res.send(data);
};

export default {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

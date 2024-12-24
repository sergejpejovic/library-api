import { Response, Request } from "express";
import booksService from "../services/books-service";

const getAllBooks = async (req: Request, res: Response) => {
  const data = await booksService.getAllBooks();
  res.send(data);
};

const getBookById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await booksService.getBookById(parseInt(id));
  res.send(data);
};

const createNewBook = async (req: Request, res: Response) => {
  const data = await booksService.createNewBook(req.body);
  res.send(data);
};

const updateBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await booksService.updateBook(parseInt(id), req.body);
  res.send(data);
};

const deleteBook = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await booksService.deleteBook(parseInt(id));
  res.send(data);
};

export default {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

import { Response, Request } from "express";
import authorsService from "../services/authors-service";

const getAllAuthors = async (req: Request, res: Response) => {
  const data = await authorsService.getAllAuthors();
  res.send(data);
};

const getAuthorById = async (req: Request, res: Response) => {
  const authorId = req.params.id;
  const data = await authorsService.getAuthorById(parseInt(authorId));
  res.send(data);
};

const createAuthor = async (req: Request, res: Response) => {
  const data = await authorsService.createAuthor(req.body);
  res.send(data);
};

const updateAuthor = async (req: Request, res: Response) => {
  const data = await authorsService.updateAuthor(req.body);
  res.send(data);
};

const deleteAuthor = async (req: Request, res: Response) => {
  const authorId = req.params.id;
  const data = await authorsService.deleteAuthor(parseInt(authorId));
  res.send(data);
};

const getBooksByAuthorId = async (req: Request, res: Response) => {
  const authorId = req.params.id;
  const data = await authorsService.getBooksByAuthorId(parseInt(authorId));
  res.send(data);
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthorId,
};

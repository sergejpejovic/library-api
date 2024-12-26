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

export default { getAllAuthors, getAuthorById };

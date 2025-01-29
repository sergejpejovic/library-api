import dbConnection from "../common/db-connection";
import authorsRepository from "../repositories/authors-repository";

const getAllAuthors = async () => {
  const data = await authorsRepository.getAllAuthors();
  const result: any = [];

  data.forEach((author: any) => {
    result.push({
      id: author.id,
      imePrezime: author.ime_prezime,
      biografija: author.biografija,
    });
  });

  return result;
};

const getAuthorById = async (id: number) => {
  const data = await authorsRepository.getAuthorById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      imePrezime: data[0].ime_prezime,
      biografija: data[0].biografija,
    };
  }
  return null;
};

const createAuthor = async (author: any) => {
  const data = await authorsRepository.createAuthor(author);
  return data;
};

const updateAuthor = async (author: any) => {
  const data = await authorsRepository.updateAuthor(author);
  return data;
};

const deleteAuthor = async (authorId: number) => {
  const data = await authorsRepository.deleteAuthor(authorId);
  return data;
};

const getBooksByAuthorId = async (authorId: number) => {
  const data = await authorsRepository.getBooksByAuthorId(authorId);
  return data;
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthorId,
};

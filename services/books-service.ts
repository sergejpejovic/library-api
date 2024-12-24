import dbConnection from "../common/db-connection";
import booksRepository from "../repositories/books-repository";

const getAllBooks = async () => {
  const data = await booksRepository.getAllBooks();
  const result: any = [];

  data.forEach((book: any) => {
    result.push({
      id: book.id,
      title: book.title,
      description: book.description,
      category: book.category,
      available: book.availability,
      published: book.published,
      updated: book.updated,
      created: book.created,
    });
  });
  return result;
};

const getBookById = async (id: number) => {
  const data = await booksRepository.getBookById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      title: data[0].title,
      description: data[0].description,
      category: data[0].category,
      available: data[0].availability,
      published: data[0].published,
      updated: data[0].updated,
      created: data[0].created,
    };
  }
  return null;
};

const createNewBook = async (book: any) => {
  const data = await booksRepository.createNewBook(book);
  return data;
};

const updateBook = async (id: number, book: any) => {
  const data = await booksRepository.updateBook(id, book);
  return data;
};

const deleteBook = async (id: number) => {
  const data = await booksRepository.deleteBook(id);
  return data;
};

export default {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

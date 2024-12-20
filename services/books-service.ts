const getAllBooks = () => {
  return { msg: "Getting all books" };
};

const getBookById = (id: number) => {
  return { msg: `Getting book with ID: ${id}` };
};

const createNewBook = () => {
  return { msg: `Creating new book` };
};

const updateBook = (id: number) => {
  return { msg: `Updating book with id ${id}` };
};

const deleteBook = (id: number) => {
  return { msg: `Book with id: ${id} is deleted` };
};

export default {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

import dbConnection from "../common/db-connection";

const getAllBooks = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM book");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getBookById = async (id: number) => {
  try {
    const data = await dbConnection.query("SELECT * FROM book WHERE id = ?", [
      id,
    ]);
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const createNewBook = async (book: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO book (title, author, category, description, availability, published, updated, created)
           VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
      [
        book.title,
        book.author,
        book.category,
        book.description,
        book.available,
        book.published,
      ]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const updateBook = async (id: number, book: any) => {
  try {
    const data = await dbConnection.query(
      `UPDATE book SET title = ?, author = ?, category = ?, description = ?, availability = ?, published = ? WHERE id = ?`,
      [
        book.title,
        book.author,
        book.category,
        book.description,
        book.available,
        book.published,
        id,
      ]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const deleteBook = async (id: number) => {
  try {
    const data = dbConnection.query("DELETE FROM book WHERE id = ?", [id]);
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default {
  getAllBooks,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

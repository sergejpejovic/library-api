import dbConnection from "../common/db-connection";

// Prikazi sve pisce
const getAllAuthors = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Autor");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

// Dovuci pisca po ID
const getAuthorById = async (id: number) => {
  try {
    const data = await dbConnection.query("SELECT * FROM Autor WHERE id = ?", [
      id,
    ]);
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

// Kreiraj pisca
const createAuthor = async (author: any) => {
  try {
    const data = await dbConnection.query(
      `INSERT INTO Autor (ime_prezime, biografija, imagePath)
      VALUES (?, ?, ?)`,
      [author.imePrezime, author.biografija, author.imagePath]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

// Update-uj pisca (osnovni podaci)
const updateAuthor = async (author: any) => {
  try {
    const data = await dbConnection.query(
      `
      UPDATE Autor SET ime_prezime = ?, biografija = ?, imagePath =? WHERE id = ?
      `,
      [author.imePrezime, author.biografija, author.imagePath, author.id]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

// Izbrisi pisca
const deleteAuthor = async (authorId: number) => {
  try {
    const data = await dbConnection.query(`DELETE FROM Autor WHERE id = ?`, [
      authorId,
    ]);
    return { success: true };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

// Dovuci sve knjige autora po njegovom ID-u
const getBooksByAuthorId = async (authorId: number) => {
  try {
    const data = await dbConnection.query(
      `SELECT k.* FROM Knjiga k
       JOIN KnjigaAutor ka ON k.id = ka.KnjigaId WHERE ka.AutorId = ?`,
      [authorId]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthorId,
};

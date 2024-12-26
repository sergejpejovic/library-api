import dbConnection from "../common/db-connection";

const getAllBooks = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Knjiga");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllBooksDetailed = async () => {
  try {
    const data =
      await dbConnection.query(`SELECT k.id, k.naslov, k.broj_strana, p.naziv AS Pismo, j.naziv AS Jezik, f.naziv AS Format, pv.naziv AS Povez, i.naziv AS Izdavac, k.datum_izdavanja, k.ISBN, k.ukupno_primjeraka, k.izdato_primjeraka, k.rezervisano_primjeraka, k.sadrzaj FROM Knjiga k 
      LEFT JOIN Pismo p ON k.pismo_id = p.id
      LEFT JOIN Jezik j ON k.jezik_id = j.id
      LEFT JOIN Format f ON k.format_id = f.id
      LEFT JOIN Povez pv ON k.povez_id = pv.id
      LEFT JOIN Izdavac i ON k.izdavac_id = i.id`);
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getBookById = async (id: number) => {
  try {
    const data = await dbConnection.query("SELECT * FROM Knjiga WHERE id = ?", [
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
      `INSERT INTO Knjiga (title, author, category, description, availability, published, updated, created)
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
      `UPDATE Knjiga SET title = ?, author = ?, category = ?, description = ?, availability = ?, published = ? WHERE id = ?`,
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
    const data = dbConnection.query("DELETE FROM Knjiga WHERE id = ?", [id]);
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
  getAllBooksDetailed,
};

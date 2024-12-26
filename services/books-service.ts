import dbConnection from "../common/db-connection";
import booksRepository from "../repositories/books-repository";

const getAllBooks = async () => {
  const data = await booksRepository.getAllBooks();
  const result: any = [];

  data.forEach((book: any) => {
    result.push({
      id: book.id,
      naslov: book.naslov,
      pismoId: book.pismo_id,
      jezikId: book.jezik_id,
      formatId: book.format_id,
      published: book.published,
      povezId: book.povez_id,
      izdavacId: book.izdavac_id,
      datumIzdavanja: book.datum_izdavanja,
      ISBN: book.ISBN,
      ukupnoPrimjeraka: book.ukupno_primjeraka,
      izdatoPrimjeraka: book.izdato_primjeraka,
      rezervisanoPrimjeraka: book.rezervisano_primjeraka,
      sadrzaj: book.sadrzaj,
    });
  });
  return result;
};

const getAllBooksDetailed = async () => {
  const data = await booksRepository.getAllBooksDetailed();
  const result: any = [];

  data.forEach((knjiga: any) => {
    result.push({
      id: knjiga.id,
      naslov: knjiga.naslov,
      brojStrana: knjiga.broj_strana,
      pismo: knjiga.Pismo,
      jezik: knjiga.Jezik,
      format: knjiga.Format,
      povez: knjiga.Povez,
      izdavac: knjiga.izdavac,
      datumIzdavanja: knjiga.datum_izdavanja,
      ISBN: knjiga.ISBN,
      ukupnoPrimjeraka: knjiga.ukupno_primjeraka,
      izdatoPrimjeraka: knjiga.izdato_primjeraka,
      rezervisanoPrimjeraka: knjiga.rezervisano_primjeraka,
      sadrzaj: knjiga.sadrzaj,
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
  getAllBooksDetailed,
};

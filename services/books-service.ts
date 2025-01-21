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
      naslov: data[0].naslov,
      brojStrana: data[0].broj_strana,
      pismoId: data[0].pismo_id,
      jezikId: data[0].jezik_id,
      formatId: data[0].format_id,
      published: data[0].published,
      povezId: data[0].povez_id,
      izdavacId: data[0].izdavac_id,
      datumIzdavanja: data[0].datum_izdavanja,
      ISBN: data[0].ISBN,
      ukupnoPrimjeraka: data[0].ukupno_primjeraka,
      izdatoPrimjeraka: data[0].izdato_primjeraka,
      rezervisanoPrimjeraka: data[0].rezervisano_primjeraka,
      sadrzaj: data[0].sadrzaj,
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

import booksRepository from "../repositories/books-repository";

const getAllBooks = async () => {
  const data = await booksRepository.getAllBooks();
  const result: any = [];

  data.forEach((book: any) => {
    const datumIzdavanja = book.datum_izdavanja
      ? new Date(book.datum_izdavanja).toISOString().split("T")[0]
      : null; // Ako je datum null, dodeljujemo null

    result.push({
      id: book.id,
      naslov: book.naslov,
      brojStrana: book.broj_strana,
      pismoId: book.pismo_id,
      jezikId: book.jezik_id,
      formatId: book.format_id,
      povezId: book.povez_id,
      izdavacId: book.izdavac_id,
      datumIzdavanja: datumIzdavanja,
      ISBN: book.ISBN,
      ukupnoPrimjeraka: book.ukupno_primjeraka,
      izdatoPrimjeraka: book.izdato_primjeraka,
      rezervisanoPrimjeraka: book.rezervisano_primjeraka,
      sadrzaj: book.sadrzaj,
      imagePath: book.image_path,
    });
  });
  return result;
};

const getAllBooksDetailed = async () => {
  const data = await booksRepository.getAllBooksDetailed();
  const result: any = [];

  data.forEach((knjiga: any) => {
    const datumIzdavanja = knjiga.datum_izdavanja
      ? new Date(knjiga.datum_izdavanja).toISOString().split("T")[0]
      : null; // Ako je datum null, dodeljujemo null

    result.push({
      id: knjiga.id,
      naslov: knjiga.naslov,
      brojStrana: knjiga.broj_strana,
      pismo: knjiga.Pismo,
      jezik: knjiga.Jezik,
      format: knjiga.Format,
      povez: knjiga.Povez,
      izdavac: knjiga.Izdavac,
      datumIzdavanja: datumIzdavanja,
      ISBN: knjiga.ISBN,
      ukupnoPrimjeraka: knjiga.ukupno_primjeraka,
      izdatoPrimjeraka: knjiga.izdato_primjeraka,
      rezervisanoPrimjeraka: knjiga.rezervisano_primjeraka,
      sadrzaj: knjiga.sadrzaj,
      imagePath: knjiga.image_path,
    });
  });
  return result;
};

const getBookById = async (id: Number) => {
  const data = await booksRepository.getBookById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      naslov: data[0].naslov,
      brojStrana: data[0].broj_strana,
      pismo: data[0].pismo_id,
      jezik: data[0].jezik_id,
      format: data[0].format_id,
      povez: data[0].povez_id,
      izdavac: data[0].izdavac_id,
      datumIzdavanja: data[0].datum_izdavanja.toISOString().split("T")[0],
      ISBN: data[0].ISBN,
      ukupnoPrimjeraka: data[0].ukupno_primjeraka,
      izdatoPrimjeraka: data[0].izdato_primjeraka,
      rezervisanoPrimjeraka: data[0].rezervisano_primjeraka,
      sadrzaj: data[0].sadrzaj,
      imagePath: data[0].image_path,
    };
  }
  return null;
};

const createNewBook = async (book: any) => {
  const data = await booksRepository.createNewBook(book);
  return data;
};

const updateBook = async (id: Number, book: any) => {
  const data = await booksRepository.updateBook(id, book);
  return data;
};

const deleteBook = async (id: Number) => {
  const data = await booksRepository.deleteBook(id);
  return data;
};

export default {
  getAllBooks,
  getAllBooksDetailed,
  getBookById,
  createNewBook,
  updateBook,
  deleteBook,
};

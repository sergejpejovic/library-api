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
      imagePath: author.imagePath,
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
      imagePath: data[0].imagePath,
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
      izdavac: knjiga.Izdavac,
      datumIzdavanja: knjiga.datum_izdavanja.toISOString().split("T")[0],
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

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  getBooksByAuthorId,
};

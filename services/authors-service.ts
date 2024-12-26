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

export default { getAllAuthors, getAuthorById };

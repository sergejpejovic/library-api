import dbConnection from "../common/db-connection";

const getAllAuthors = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Autor");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

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

export default { getAllAuthors, getAuthorById };

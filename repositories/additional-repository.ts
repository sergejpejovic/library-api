import dbConnection from "../common/db-connection";

const getLanguages = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Jezik");
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getPublishers = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Izdavac");
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getPismo = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Pismo");
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getFormat = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Format");
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getPovez = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM Povez");
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default { getLanguages, getPublishers, getPismo, getFormat, getPovez };

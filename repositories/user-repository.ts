import dbConnection from "../common/db-connection";

const register = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `INSERT INTO users (username, 
            hashed_password, is_admin) VALUES (?, ?, 0)`,
      [user.username, user.hashedPassword]
    );
    return result;
  } catch (error: any) {
    return {
      success: false,
      msg: error.message,
    };
  }
};

const login = async (user: any) => {
  try {
    const result = await dbConnection.query(
      `SELECT * FROM users WHERE 
            username =? AND hashed_password = ?`,
      [user.username, user.hashedPassword]
    );

    return result;
  } catch (error: any) {
    return {
      success: false,
      msg: error.message,
    };
  }
};

export default { register, login };

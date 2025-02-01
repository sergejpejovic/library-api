import userRepository from "../repositories/user-repository";
import crypto from "crypto";
import jwt from "jsonwebtoken";

const register = async (user: any) => {
  //od passworda dobijemo hashedPassword, ovdje hashiramo password
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");
  const result: any = await userRepository.register(user);

  //dodati token

  if (result.affectedRows > 0) {
    //user je kreiran, kreiraj i token za njega i posalji u odgovor
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false, result };
  }
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.password)
    .digest("hex");

  const result = await userRepository.login(user);

  if (result && result.length > 0) {
    //znaci da je ulogovan
    const token = jwt.sign(
      {
        username: user.username,
        isAdmin: result[0].is_admin == 1 ? true : false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false, msg: "Not able to login" };
  }
};

export default { register, login };

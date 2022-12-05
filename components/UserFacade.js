import jwt from "jsonwebtoken";

export const userDetails =  () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (token != null) {
        let jwtSecretKey = "gfg_jwt_secret_key";
        const user = jwt.verify(token, jwtSecretKey);
       return user;
      } else {
        console.log("not log");
      }
    } catch (err) {
      console.log(err);
    }
  };
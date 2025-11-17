import jwt from "jsonwebtoken";

const tokenGenerator = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1y",
  });
};

export default tokenGenerator;

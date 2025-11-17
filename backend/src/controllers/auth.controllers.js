import User from "../models/users.models.js"
import bcrypt from "bcrypt";
import tokenGenerator from "../utils/token.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, userName, password } = req.body;

    // email exist?
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already exists!" });

    // username exist?
    if (await User.findOne({ userName }))
      return res.status(400).json({ message: "Username already exists!" });

    // hash password
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      userName,
      password: hashed,
    });

    const token = tokenGenerator(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
      sameSite: "Strict",
      secure: false,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Signup error: ${error.message}` });
  }
};

export const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (!user) return res.status(400).json({ message: "User not found!" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.status(400).json({ message: "Incorrect password!" });

    const token = tokenGenerator(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 365 * 24 * 60 * 60 * 1000,
      sameSite: "Strict",
      secure: false,
    });

    return res.status(200).json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Signin error: ${error.message}` });
  }
};

export const signOut = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
      secure: false,
    });

    return res.status(200).json({ message: "Signed out successfully!" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Signout error: ${error.message}` });
  }
};

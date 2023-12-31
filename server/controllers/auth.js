import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* REGISTER USER */

export const verifyEmail = async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    if (await User.findOne({ email })) {
      return res.status(409).json({ msg: "Email already exists." });
    } else {
      res.status(202).json({ msg: "Valid email address" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    // Encrypt Password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // Create User
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000), // Random value!
      impressions: Math.floor(Math.random() * 10000), // Random value!
    });
    const savedUser = await newUser.save();
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET);
    res.status(201).json({ token, savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    // Sign user to Local Storage
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Delete password so it does not get sent to Frontend
    delete user.password;

    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

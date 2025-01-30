import user from "./models/user.js";
import bcrypt from "bcrypt";

const userRegister = async () => {
  try {
    const hashPassword = await bcrypt.hash("admin", 10);
    const newUser = new user({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashPassword,
      role: "admin",
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};

userRegister();

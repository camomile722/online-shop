import bcrypt from "bcryptjs";

export const users = [
  {
    name: "Admin User",
    email: "admin1@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    avatar: "https://bit.ly/dan-abramov",
  },
  {
    name: "John Doe",
    email: "john@doe.email.com",
    password: bcrypt.hashSync("123456", 10),
    avatar: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Jim Doe",
    email: "jim@email.com",
    password: bcrypt.hashSync("123456", 10),
    avatar: "https://bit.ly/ryan-florence",
  },
];

const bcrypt = require("bcrypt");

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hashedPw) => {
  const result = await bcrypt.compare(pw, hashedPw);
  if (result) {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
};

hashPassword("fiesta"); // $2b$12$lOotnlsWOUOfXZFXEVjsy.4bYQBGufLs89R5yyb/iLV5P3gJX6pRW
login("fiesta", "$2b$12$6uvuKXBMbUw89Wef8KZzQ.Eemkf3uBxVk7.cOTVdemF8q5WZamJTu");

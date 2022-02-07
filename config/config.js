require("dotenv").config();

module.exports = {
  development: {
    username: "materia",
    password: "materia",
    database: "materia",
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  },
  production: {
    username: "fdhkwiylphogup",
    password: "3b66696e62ca127d5a592a5a09a9bf84b11ce7f285d88e4e9750594db588e435",
    database: "d6p3ir43lhm4nq",
    host: "ec2-184-73-243-101.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    } 
  }
};

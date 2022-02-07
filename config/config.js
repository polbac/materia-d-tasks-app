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
    username: "jfcpieftyzalwd",
    password: "c88b4d56e3a7d8c2129e9fbf2754ad3aa32cf79225e677539d08d074c045afdb",
    database: "d9i0afbc1g2gcb",
    host: "ec2-34-230-110-100.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5433,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
};

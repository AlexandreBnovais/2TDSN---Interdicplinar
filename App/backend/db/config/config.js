require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "PORT": process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "PORT": process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_BASE,
    "PORT": process.env.DB_PORT,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  }
}

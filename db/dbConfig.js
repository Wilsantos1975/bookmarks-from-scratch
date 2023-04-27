// this is where we will configure our database connection details
const pgp = require("pg-promise")();

require("dotenv").config();

// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER } = process.env; //

// const cn = pgp({  //cn is short for connection object
//     host: PG_HOST,
//     port: PG_PORT,
//     database: PG_DATABASE,
//     user: PG_USER,
//   });


// not destructured below

const cn = {                   //cn is short for connection object
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER
};

const db = pgp(cn);

module.exports = db;

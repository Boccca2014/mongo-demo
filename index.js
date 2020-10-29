require("dotenv").config();
const mongoose = require("mongoose");

const password = process.env.DB_ADMIN_PASSWORD;
const dbname = "younote-db";
const URI = `mongodb+srv://younote-admin:${password}@younote-api.cwpws.mongodb.net/${dbname}?retryWrites=true&w=majority`;

console.log(password);

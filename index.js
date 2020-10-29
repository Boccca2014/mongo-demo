require("dotenv").config();
const mongoose = require("mongoose");
const faker = require("faker");

const password = process.env.DB_ADMIN_PASSWORD;
const dbname = "younote-db";
const URI = `mongodb+srv://younote-admin:${password}@younote-api.cwpws.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

/*
mongoose
  .connect(URI, option)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
*/

mongoose.connect(URI, option);

mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String },
});

const User = mongoose.model("User", UserSchema);

User.create(
  {
    username: faker.internet.userName(),
    password: faker.internet.password(),
  },
  (err, user) => {
    if (err) console.log(err);
    console.log(user);
  }
);

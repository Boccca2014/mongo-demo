require("dotenv").config();
const mongoose = require("mongoose");
const faker = require("faker");

const password = process.env.DB_ADMIN_PASSWORD;
const dbname = "younote-db";
const URI = `mongodb+srv://younote-admin:${password}@younote-api.cwpws.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
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

/*
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
*/

/*
User.create({
  username: faker.internet.userName(),
  password: faker.internet.password(),
})
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
async function createUser(username, password) {
  try {
    const user = await User.create({
      username,
      password,
    });
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

createUser(faker.internet.userName(), faker.internet.password());
*/

/*
const user = new User({
  username: faker.internet.userName(),
  password: faker.internet.password(),
});

console.log(user);

user.save((err, user) => {
  if (err) console.log(err);
  console.log(user);
});
*/

/*
User.find()
  .then((users) => console.log(users))
  .catch((err) => console.log(err));

// TODO: change the ID below to one that exists in your DB.
User.findById("5f9a1d156e848f06c458f5f4")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
*/

/*
User.findByIdAndDelete("5f9a1d156e848f06c458f5f4")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
*/

/*
User.findByIdAndUpdate("5f9a157610bf5e86746c8eb9", {
  username: "username-updated",
})
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
*/

User.findByIdAndUpdate(
  "5f9a157610bf5e86746c8eb9",
  {
    username: "username-updated-again",
  },
  { new: true }
)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

const mongoose = require("mongoose");

// connect to online mongoDB server
mongoose.connect(process.env.DATABASE_URL);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

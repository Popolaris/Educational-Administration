const mongoose = require("mongoose");

mongoose
  .connect("mongodb://172.21.2.236:27017/190110910340", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("database is connected"));

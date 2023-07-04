const mongoose = require("mongoose");

const DB = "mongodb+srv://karunyapurasaloor:karunya@cluster0.71qdbnq.mongodb.net/PasswordResetFlow?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected Successfully!!!"))
  .catch((errr) => {
    console.log(errr);
  });

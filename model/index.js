require('dotenv').config()
const mongoose = require("mongoose");

// Connect to MongoDB --- Replace this with your Connection String
CONNECTION_STRING = "mongodb+srv://ziheng:<PASS_WORD>@iepp.brcjuom.mongodb.net/?retryWrites=true&w=majority";
MONGO_URL =
    CONNECTION_STRING.replace("<PASS_WORD>",process.env["PASS_WORD"]);
mongoose.connect(MONGO_URL || "mongodb://localhost:3000", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "IEPP"
});
const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" +
        db.port);
});
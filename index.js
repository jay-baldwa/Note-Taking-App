require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true, // Add this line for new MongoDB driver
});
const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to Database Successfully"));

// Importing and using noteRouter
app.use(express.json());
const userNotesRouter = require("./routes/noteRouter");
app.use("/noteList", userNotesRouter);

app.listen(port, () => console.log(`Server running at: ${port}`));

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectedDB = require("./config/connectionDb");

const app = express();
const PORT = process.env.PORT || 3000;
const Contact = require("./models/contactSchema"); // adjust path

const allowedOrigins = [
    "https://portfolio-pi-swart-k9xipfhiwj.vercel.app",
    "https://portfolio-l9hka0663-mdhamizs-projects.vercel.app",
    "http://localhost:5173"
]

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));
app.use(express.json()); 
app.use(express.static("public"));


connectedDB();


app.get("/", (req, res) => {
    res.send("hello server start");
});



app.use("/api/contact", require("./routes/contactRoutes"));



app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});

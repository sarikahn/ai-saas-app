const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* ========================
   MIDDLEWARE
======================== */

// CORS (IMPORTANT for frontend connection)
app.use(cors({
  origin: "*", // allow all (for now)
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// JSON parser
app.use(express.json());

/* ========================
   DATABASE CONNECTION
======================== */

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Error:", err));

/* ========================
   ROUTES
======================== */

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/workspace", require("./routes/workspace"));
app.use("/api/ai", require("./routes/ai"));

/* ========================
   HEALTH CHECK ROUTE
======================== */

app.get("/", (req, res) => {
  res.send("🚀 AI SaaS Backend Running Successfully");
});

/* ========================
   PORT CONFIG (IMPORTANT FOR RENDER)
======================== */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
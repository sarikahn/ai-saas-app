const router = require("express").Router();
const Note = require("../models/Note");

// Create note

// Make note public
router.put("/share/:id", async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { isPublic: true },
    { new: true }
  );
  res.json(note);
});

// Get public note
router.get("/public/:id", async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note.isPublic) return res.status(403).send("Private");
  res.json(note);
});








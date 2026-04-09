const express = require("express");
const router = express.Router();

// TEMP STORAGE
let notes = [];

/* CREATE NOTE */
router.post("/", (req, res) => {
  const { title, content } = req.body;

  const note = {
    id: Date.now(),
    title,
    content
  };

  notes.push(note);
  res.json(note);
});

/* GET ALL NOTES */
router.get("/", (req, res) => {
  res.json(notes);
});

/* UPDATE NOTE */
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  notes = notes.map(note =>
    note.id == id ? { ...note, title, content } : note
  );

  res.json({ message: "Note updated" });
});

/* DELETE NOTE */
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  notes = notes.filter(note => note.id != id);

  res.json({ message: "Note deleted" });
});

module.exports = router;








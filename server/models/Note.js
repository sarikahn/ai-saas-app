const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userId: String,
  workspaceId: String,
  content: String,
  isPublic: { type: Boolean, default: false }
});

module.exports = mongoose.model("Note", NoteSchema);
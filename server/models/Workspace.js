const mongoose = require("mongoose");

const WorkspaceSchema = new mongoose.Schema({
  userId: String,
  name: String
});

module.exports = mongoose.model("Workspace", WorkspaceSchema);
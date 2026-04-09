const router = require("express").Router();
const Workspace = require("../models/Workspace");

// Create workspace
router.post("/", async (req, res) => {
  const ws = await Workspace.create(req.body);
  res.json(ws);
});

// Get user workspaces
router.get("/:userId", async (req, res) => {
  const ws = await Workspace.find({ userId: req.params.userId });
  res.json(ws);
});

module.exports = router;
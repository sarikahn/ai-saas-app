const express = require("express");
const router = express.Router();

let workspaces = [];

/* CREATE WORKSPACE */
router.post("/", (req, res) => {
  const { name } = req.body;

  const workspace = {
    id: Date.now(),
    name
  };

  workspaces.push(workspace);
  res.json(workspace);
});

/* GET WORKSPACES */
router.get("/", (req, res) => {
  res.json(workspaces);
});

module.exports = router;
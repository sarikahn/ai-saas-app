const express = require("express");
const router = express.Router();

/* AI GENERATE (DUMMY FOR NOW) */
router.post("/generate", (req, res) => {
  const { prompt } = req.body;

  const response = `AI Response for: ${prompt}`;

  res.json({ result: response });
});

module.exports = router;
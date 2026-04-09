const router = require("express").Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.prompt }]
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      }
    }
  );

  res.json(response.data.choices[0].message);
});

module.exports = router;
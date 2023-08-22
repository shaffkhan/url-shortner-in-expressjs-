const shortId = require("shortid");
const url = require("../models/url");

async function handleShortUrlGenerator(req, res) {
  const shortURL = shortId();
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url feild is required!" });
  }
  url.create({
    shortId: shortURL,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.status(201).json({ id: shortURL });
}

module.exports = { handleShortUrlGenerator };

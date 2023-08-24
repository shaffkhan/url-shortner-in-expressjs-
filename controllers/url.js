const shortId = require("shortid");
const url = require("../models/url");

async function handleShortUrlGenerator(req, res) {
  const shortURL = shortId();
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url feild is required!" });
  }
  await url.create({
    shortId: shortURL,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.status(201).json({ id: shortURL });
}
async function getAnaytics(req, res) {
  const Id = req.params.id;
 
  const result = await url.findOne({ shortId :Id});
  console.log(result)
  res.json({
    total_clicks: result?.visitHistory.length,
    analytics: result?.visitHistory,
  });
}

module.exports = { handleShortUrlGenerator, getAnaytics };

const express = require("express");
const app = express();
const port = 8001;
const URLrouter = require("./routes/url");
const url = require("./models/url");
const { ConnectToMongodb, connectToMongodb } = require("./connection");
connectToMongodb("mongodb://localhost:27017/short-url");
app.use(express.json());
app.use("/url", URLrouter);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});
app.listen(port, () => {
  console.log("app is running on port 8001");
});

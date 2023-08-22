const express = require("express");
const app = express();
const port = 8001;
const URLrouter = require("./routes/url");
const { ConnectToMongodb, connectToMongodb } = require("./connection");
connectToMongodb("mongodb://localhost:27017/short-url");
app.use(express.json())
app.use("/url", URLrouter);

app.get('/url/')
app.listen(port, () => {
  console.log("app is running on port 8001");
});

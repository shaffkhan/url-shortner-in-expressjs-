const express = require("express");
const router = express.Router();
const { handleShortUrlGenerator, getAnaytics } = require("../controllers/url");
router.post("/", handleShortUrlGenerator);
router.get("/analytics/:id", getAnaytics);
module.exports = router;

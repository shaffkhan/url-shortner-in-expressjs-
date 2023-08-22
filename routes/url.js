const express = require("express");
const router = express.Router();
const { handleShortUrlGenerator } = require("../controllers/url");
router.post("/", handleShortUrlGenerator);

module.exports = router;

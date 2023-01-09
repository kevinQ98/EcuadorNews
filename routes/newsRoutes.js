const express = require("express");
const router = express.Router();

const { getNews, getNewsBySearch } = require("../controllers/newsController");

router.route("/").get(getNews);
router.route("/search").get(getNewsBySearch);

module.exports = router;

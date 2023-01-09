const asyncHandler = require("express-async-handler");
const {
  getComercioLastNews,
  getLaHoraLastNews,
  getMetroNews,
  getExtraNews,
  getExpresoNews,
  getUniversoNews,
  getMercurioNews,
  getAllNews,
  getSearchNews,
} = require("../methods/getNews");

// @desc Get News
// @route GET /api/news
// @access Public
const getNews = asyncHandler(async (req, res) => {
  const response = await getAllNews();
  if (!response) {
    res.status(400).json("Error API, try later");
  }
  console.log(response.length); //TOTAL NEWS
  res.status(200).json(response);
});

// @desc Get News by Search Value
// @route GET /api/news/search?q=''
// @access Public
const getNewsBySearch = asyncHandler(async (req, res) => {
  if (!req.query.q) {
    res
      .status(400)
      .json(
        "Error API, expect a query (q) value. Example: /api/news/search?q=ecuador"
      );
  }
  const response = await getSearchNews(req.query.q);
  if (!response) {
    res.status(400).json("Error API, try later");
  }

  res.status(200).json(response);
});

module.exports = {
  getNews,
  getNewsBySearch,
};

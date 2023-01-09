const axios = require("axios");
const cheerio = require("cheerio");

// @desc GET LAST NEWS: EL COMERCIO
const getComercioLastNews = async () => {
  let lastNews = [];
  await axios.get("https://www.elcomercio.com/ultima-hora/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".list-item__content")
      .each(function () {
        // TITLE NEW
        const titleNew =
          $(this).find(".list-item__title").text().trim() || "Not available";
        // SOURCE NEW
        const sourceNew =
          $(this).find(".list-item__title a").attr("href") || "Not available";
        // IMG NEW
        const imgNew =
          $(this).find(".list-item__media a img").attr("src") ||
          "Not available";
        // DESC NEW
        const descNew =
          $(this).find(".list-item__body p").text() || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "El Comercio",
        });
      });
  });
  return lastNews;
};

// @desc GET LAST NEWS: LA HORA
const getLaHoraLastNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios.get("https://www.lahora.com.ec/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".posts-section .row .col-12 .main-story")
      .each(function () {
        // TITLE NEW
        const titleNew = $(this).find("h3").text().trim() || "Not available";
        // SOURCE NEW
        const sourceNew = $(this).find("h3 a").attr("href") || "Not available";
        // IMG NEW
        const imgNew =
          $(this).find("figure a img").attr("src") || "Not available";
        // DESC NEW
        const descNew = $(this).find("p").text() || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "La Hora",
        });
      });
  });
  // COLUMN LEFT
  await axios.get("https://www.lahora.com.ec/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".posts-section .row .col-md-8 .main-story")
      .each(function () {
        // TITLE NEW
        const titleNew = $(this).find("h3").text().trim() || "Not available";
        // SOURCE NEW
        const sourceNew = $(this).find("h3 a").attr("href") || "Not available";
        // IMG NEW
        const imgNew =
          $(this).find("figure a img").attr("src") || "Not available";
        // DESC NEW
        const descNew = $(this).find("p").text() || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "La Hora",
        });
      });
  });
  // COLUMN RIGHT
  await axios.get("https://www.lahora.com.ec/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".posts-section .row .col-md-4 .side-story")
      .each(function () {
        // TITLE NEW
        const titleNew = $(this).find("h3").text().trim() || "Not available";
        // SOURCE NEW
        const sourceNew = $(this).find("h3 a").attr("href") || "Not available";
        // IMG NEW
        const imgNew =
          $(this).find("figure a img").attr("src") || "Not available";
        // DESC NEW
        const descNew =
          $(this).find("h3").text().trim() + "..." || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "La Hora",
        });
      });
  });

  return lastNews;
};

// @desc GET LAST NEWS: METRO
const getMetroNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios.get("https://www.metroecuador.com.ec/noticias/").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".results-list-container .list-item")
      .each(function () {
        // TITLE NEW
        const titleNew =
          $(this)
            .find(".results-list--headline-container a h2")
            .text()
            .trim() || "Not available";
        // SOURCE NEW
        const sourceNew =
          "https://www.metroecuador.com.ec" +
            $(this).find(".results-list--headline-container a").attr("href") ||
          "Not available";
        // IMG NEW
        const imgNew =
          $(this)
            .find(".results-list--image-container a picture source")
            .attr("srcset") || "Not available";
        // DESC NEW
        const descNew =
          $(this).find(".results-list--headline-container a h2").text().trim() +
            "..." || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "Metro Ecuador",
        });
      });
  });

  return lastNews;
};

// @desc GET LAST NEWS: EXTRA
const getExtraNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios.get("https://www.extra.ec/actualidad").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".list li")
      .each(function () {
        // TITLE NEW
        const titleNew =
          $(this).find(".title").text().trim() || "Not available";
        // SOURCE NEW
        const sourceNew =
          "https://www.extra.ec" + $(this).find(".title a").attr("href") ||
          "Not available";
        // IMG NEW
        const imgNew =
          $(this).find(".image-container a source").attr("srcset") ||
          "Not available";
        // DESC NEW
        const descNew =
          $(this).find(".epigraph").text().trim() + "..." || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "Extra",
        });
      });
  });

  return lastNews;
};

// @desc GET LAST NEWS:  EXPRESO
const getExpresoNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios.get("https://www.expreso.ec/actualidad").then((res) => {
    const html = res.data;
    const $ = cheerio.load(html);
    $("body")
      .find(".list li")
      .each(function () {
        // TITLE NEW
        const titleNew =
          $(this).find(".article-details .title").text().trim() ||
          "Not available";
        // SOURCE NEW
        const sourceNew =
          "https://www.expreso.ec" +
            $(this).find(".article-details .title a").attr("href") ||
          "Not available";
        // IMG NEW
        const imgNew =
          $(this)
            .find(".image-container a picture source")
            .attr("data-srcset") || "Not available";
        // DESC NEW
        const descNew = $(this).find(".text").text().trim() || "Not available";
        // DATE NEW
        // const dateNew = new Date().toISOString().slice(0, 10);
        lastNews.push({
          title: titleNew,
          media: imgNew,
          description: descNew,
          source: sourceNew,
          journal: "Expreso",
        });
      });
  });

  return lastNews;
};

// @desc GET LAST NEWS:  EXPRESO
const getUniversoNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios
    .get("https://www.eluniverso.com/ultimas-noticias/")
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("body")
        .find(".results .feed li")
        .each(function () {
          // TITLE NEW
          const titleNew =
            $(this).find(".card-content h2").text().trim() || "Not available";
          // SOURCE NEW
          const sourceNew =
            "https://www.eluniverso.com" +
              $(this).find(".card-content h2 a").attr("href") ||
            "Not available";
          // IMG NEW
          const imgNew =
            $(this).find(".card-image a figure div picture img").attr("src") ||
            "Not available";
          // DESC NEW
          const descNew =
            $(this).find(".card-content .summary").text().trim() ||
            "Not available";
          // DATE NEW
          // const dateNew = new Date().toISOString().slice(0, 10);
          lastNews.push({
            title: titleNew,
            media: imgNew,
            description: descNew,
            source: sourceNew,
            journal: "El Universo",
          });
        });
    });

  return lastNews;
};

// @desc GET LAST NEWS:  MERCURIO
const getMercurioNews = async () => {
  let lastNews = [];
  // COLUMN TOP
  await axios
    .get("http://www.elmercurio.com.ec/category/actualidad/")
    .then((res) => {
      const html = res.data;
      const $ = cheerio.load(html);
      $("body")
        .find(".td-block-span6")
        .each(function () {
          // TITLE NEW
          const titleNew =
            $(this).find(".td_module_1 h3").text().trim() || "Not available";
          // SOURCE NEW
          const sourceNew =
            $(this).find(".td_module_1 h3 a").attr("href") || "Not available";
          // IMG NEW
          const imgNew =
            $(this).find(".td-module-image div a img").attr("src") ||
            "Not available";
          // DESC NEW
          const descNew =
            $(this).find(".td_module_1 h3").text().trim() + "..." ||
            "Not available";
          // DATE NEW
          // const dateNew = new Date().toISOString().slice(0, 10);
          lastNews.push({
            title: titleNew,
            media: imgNew,
            description: descNew,
            source: sourceNew,
            journal: "El Mercurio",
          });
        });
    });

  return lastNews;
};

// @desc GET ALL LAST NEWS
const getAllNews = async () => {
  const comercioNews = await getComercioLastNews();
  const laHoraNews = await getLaHoraLastNews();
  const metroNews = await getMetroNews();
  const extraNews = await getExtraNews();
  const expresoNews = await getExpresoNews();
  const universoNews = await getUniversoNews();
  const mercurioNews = await getMercurioNews();

  const response = [
    ...comercioNews,
    ...laHoraNews,
    ...metroNews,
    ...extraNews,
    ...expresoNews,
    ...universoNews,
    ...mercurioNews,
  ];
  return response;
};

// @desc SEARCH IN ALL NEWS
const getSearchNews = async (searchValue) => {
  let searchArray = [];
  let allNews = await getAllNews();
  for (const iterator of allNews) {
    if (
      removeAccents(iterator.title.toUpperCase()).includes(
        removeAccents(searchValue.toUpperCase())
      ) |
      removeAccents(iterator.journal.toUpperCase()).includes(
        removeAccents(searchValue.toUpperCase())
      )
    ) {
      searchArray.push(iterator);
    }
  }
  return searchArray;
};

const removeAccents = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

module.exports = {
  getComercioLastNews,
  getLaHoraLastNews,
  getMetroNews,
  getExtraNews,
  getExpresoNews,
  getUniversoNews,
  getMercurioNews,
  getAllNews,
  getSearchNews,
};

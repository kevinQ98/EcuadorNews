const express = require("express");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res
    .status(200)
    .json(
      "Bienvenido a la API de noticias más recientes de Ecuador con los 7 Diarios mas reconocidos del país."
    );
});

app.use("/api/news", require("./routes/newsRoutes"));

app.get("*", (req, res) => {
  res.status(404).json("Not Found");
});

app.listen(PORT, () => {
  console.log("Server running in: " + PORT);
});

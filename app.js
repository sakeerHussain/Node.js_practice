const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");


const app = express();

// app.set('view engine', 'pug');// setting pug as the view engine
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// ); // setting handlebars as view engine

// app.set("view engine", "hbs");
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { title } = require("process");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  express.static(path.join(__dirname, "public"))
); /* serves static files from the public directory, here css file */

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.render("not-found", { pageTitle: "Not Found!!", path:"" });
});

app.listen(3000);

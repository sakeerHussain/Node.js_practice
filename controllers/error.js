exports.get404 = (req, res, next) => {
    res.render("not-found", { pageTitle: "Not Found!!", path:"" });
  }
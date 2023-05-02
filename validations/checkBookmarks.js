//middleware will be written here

const checkRequest = (req, res, next) => {
  if (
    req.body &&
    req.body.name &&
    req.body.url &&
    req.body.category &&
    req.body.is_favorite
  ) {
   return next();
  } else {
    res.status(400).json({ error: "Missing fields in the body" });
  }
};

const checkId = (req, res, next) => {
  if (req.params.id) {
     return next();
  } else {
    res.status(400).json({ error: "Missing id in the params" });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
   return next();
  } else {
    res.status(400).json({ error: "Invalid URL" });
  }
};

module.exports = { checkRequest, checkId, validateURL };

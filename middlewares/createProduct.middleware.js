const createProductMiddleware = (req, res, next) => {
  const { title, price, description } = req.body;

  if (!(title, price, description)) {
    return res.json({ message: `Validation error` });
  }
  next();
};

module.exports = createProductMiddleware;

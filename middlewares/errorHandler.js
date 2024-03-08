"use strict";

module.exports = (err, req, res, next) => {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    let errors = err.errors.map((el) => el.message);
    res.status(400).json({
      status: "Bad Request",
      errors,
    });
  } else {
    res.status(err.status || 500).json({
      status: err.status,
      message: err.message || "Internal Server Error",
    });
  }
};

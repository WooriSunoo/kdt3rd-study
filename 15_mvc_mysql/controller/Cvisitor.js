const visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  console.log(visitor.getVisitors());
  res.render("visitor", { data: visitor.getVisitors() });
};

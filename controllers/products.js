const Product = require("../model/product.js");

const getAllProducts = async (req, res) => {
  const {company, name, price, feature, sort, select} = req.query;
  
  const queryObj = {};

  if(company) {
    queryObj.company = company;
  }
  if(name) {
    queryObj.name = {$regex: name, $options: "i"};
    // ye i case sensitive wala kam kre ga mazedd google se dekho
  }
  if(price) {
    queryObj.price = price;
  }
  if(feature) {
    queryObj.feature = feature;
  }
  
  let apiData = Product.find(queryObj);
  if(sort) {
    let sortFix = sort.replace(",", "");
    apiData = apiData.sort(sortFix);
  }

  if(select) {
    // let selectFix = select.replace(",", "");
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  const myData = await apiData;
  res.status(200).json(myData);
}

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json(myData);
}

module.exports = {getAllProducts, getAllProductsTesting}; 
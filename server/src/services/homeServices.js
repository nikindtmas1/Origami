const Home = require('../models/homeModel');


async function getAll(){

    let results = await Home.find({}).lean();
  console.log(results);
    return results;
  };

  module.exports = {
    getAll

  }
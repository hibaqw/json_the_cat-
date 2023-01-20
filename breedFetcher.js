const fetchBreedDescription = function(breedName, callback) {
  const request = require('request');
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    console.log(body);
    const data= JSON.parse(body);
    try{
      callback(error, data[0].description);
    }catch{
    callback(error,data);
    }
  });
};
module.exports = { fetchBreedDescription };
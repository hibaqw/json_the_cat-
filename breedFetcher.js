

const makeRequest= function(){
   return new Promise((resolve, reject) => {
    const argv = process.argv;
    const request = require('request');
    request(`https://api.thecatapi.com/v1/breeds/search?q=${argv[2]}`, (error, response, body) => {
        if(error){
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //   console.log('body:', body); // Print the HTML for the Google homepage.
        //   console.log(typeof body);
        return reject();
        }
        return resolve(body);

   });
});
}

const returnBreedDescription = function(body){
    const data = JSON.parse(body);
        try{
            console.log(data[0].description);
        }catch{
            console.log("Breed Not Found.")
        }
}

makeRequest()
    .then((body) => returnBreedDescription(body))
    .catch((error) => console.log(error));

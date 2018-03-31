const request = require('request');
const api = '6bb5939bd1d5ab337e7b39033d8ebd36';
const apiURI = 'https://api.darksky.net/forecast/6bb5939bd1d5ab337e7b39033d8ebd36/37.8267,-122.4233'

let geocodeAddress = (address,callback) => {

    let encodedAddress = encodeURIComponent(address);

    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAnBxm2645hhBTIG8VKkFEjrLmDLL8Ch2w`,
        json:true
    }, (error, response,body)=>{
        if(error){
            callback('Unable to connect TO GOOGLE API');
        } else if (body.status === "INVALID_REQUEST") {
            callback('Unable to find address, please check this');
        } else if (body.status === "OK"){
            callback(undefined,{
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            })
            //  console.log(JSON.stringify(body, undefined,2));
        }
    });
}

module.exports.geocodeAddress = geocodeAddress;
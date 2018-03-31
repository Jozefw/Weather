const request = require('request');


let getWeather = (lat, lng, callback) => {

    request({
        url:`https://api.darksky.net/forecast/6bb5939bd1d5ab337e7b39033d8ebd36/${lat},${lng}`,
        json:true
    }, (error,response,body) => {
        if(!error && response.statusCode === 200 ){
           callback(undefined,{
               temp: body.currently.temperature,
               apparentTemp: body.currently.apparentTemperature
           })
        } else { callback("Cannot connect to server")}
    })

}

module.exports.getWeather = getWeather;
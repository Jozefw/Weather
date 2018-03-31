
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const localWeather = require('./temperature/weather.js');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'address of user',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
    if(errorMessage){
        console.log(errorMessage);
    } else {
        console.log(results.address);
        localWeather.getWeather(results.latitude,results.longitude, (errMessage,weatherResults) => {
        console.log(weatherResults.address);
            if (errMessage){
                console.log(errMessage)
            } else {
                console.log(`Its currently ${weatherResults.temp}, but feels like ${weatherResults.apparentTemp}`);
            }
        })
    }
})

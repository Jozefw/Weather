const request = require('request');

let geocode2 = (address) => {
    return new Promise((resolve,reject) => {

        let encodedAddress = encodeURIComponent(address);

        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAnBxm2645hhBTIG8VKkFEjrLmDLL8Ch2w`,
            json: true
        }, (error, response, body) => {
            if (error) {
                console.log(error);
                reject('Unable to connect TO GOOGLE API');
            } else if (body.status === "INVALID_REQUEST") {
                reject('Unable to find address, please check this');
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            } else {console.log('buncha errors ........')}
        });
    });
};

geocode2('94520').then((locationData) => {
    console.log(JSON.stringify(locationData, undefined, 2))
}, (errMessage) => {
    console.log(errMessage);
});
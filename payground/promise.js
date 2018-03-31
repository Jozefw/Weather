let somePromise = new Promise((resolve,reject)=>{
    // resolve("The promise was resolved")
    reject("Everything went bad...")
});

somePromise.then(function(message){
    console.log("Success Message: " + message )
},(errMessage) => {
    console.log("Error Message: " + errMessage)
})
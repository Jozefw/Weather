let getUser = (id,cb) => {
let user = {
    id: 37,
    name:'Wendy'
};
    setTimeout(()=>{
        cb(user);
    },3000);
}

getUser(37,(userData)=>{
    console.log(userData);
})
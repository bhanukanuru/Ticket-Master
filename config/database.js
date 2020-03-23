const mongoose=require('mongoose')
// db configuration
const setUpDB=()=>{
    mongoose.connect('mongodb://localhost:27017/bhanu-1ticket-master')
    .then(()=>{
        console.log('connected to db')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=setUpDB

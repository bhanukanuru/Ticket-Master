const mongoose= require('mongoose')
const Schema= mongoose.Schema
const departmentsSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
})
const Departments= mongoose.model('Departments',departmentsSchema)

module.exports=Departments
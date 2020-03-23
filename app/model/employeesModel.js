const mongoose= require('mongoose')
const Schema= mongoose.Schema

const employeesSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Departments'
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
})

const Employees= mongoose.model('Employees',employeesSchema)
module.exports=Employees
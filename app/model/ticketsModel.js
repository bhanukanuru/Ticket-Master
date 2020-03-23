const mongoose= require('mongoose')
const Schema= mongoose.Schema

const ticketsSchema = new Schema({
    code:{
        type:String,
        required:true
    },
    customer:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Customer'
    },
    department:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Departments'
    },
    employees:[{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Employees'
    }],
    message:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    isResolved:{
        type:Boolean,
        default:false
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    }
})

const Tickets=mongoose.model('Tickets',ticketsSchema)
module.exports=Tickets
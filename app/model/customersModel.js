const mongoose= require('mongoose')

// schema

const Schema= mongoose.Schema
const customersSchema= new Schema({
   name:{
       type:String,
       required:true
   },
   email:{
       type:String,
       required:true
   },
   mobile:{
       type:Number,
       required:true
   },
   user:{
    type:Schema.Types.ObjectId,
    required:true,
    ref: 'User'
}
})

// model
const Customer=mongoose.model('Customer',customersSchema)

module.exports=Customer
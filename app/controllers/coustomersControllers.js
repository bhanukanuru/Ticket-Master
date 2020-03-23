const Customer=require('../model/customersModel')

module.exports.list=(req,res)=>{
    //console.log(req.user)
    Customer.find({user:req.user._id})
    .then((customer)=>{
        console.log(customer)
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
    
}

module.exports.create=(req,res)=>{
    const body=req.body
    const customer= new Customer(body)
    customer.user = req.user._id
    customer.save()
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Customer.findOne({
        _id:id,
        user:req.user._id
    })
    .then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.json({})
        }
        
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.update=(req,res)=>{
    const id=req.params.id
    const body=req.body
    Customer.findOneAndUpdate({_id:id,user:req.user._id},body,{new:true})
    .then((customer)=>{
        res.json(customer)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.destroy=(req,res)=>{
    const id= req.params.id
    Customer.findOneAndDelete({_id:id,user:req.user._id})
    .then((customer)=>{
        if(customer){
            res.json(customer)
        }
        else{
            res.json({})
        }
       
    })
    .catch((err)=>{
        res.json(err)
    })
}


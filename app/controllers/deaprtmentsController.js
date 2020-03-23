const Department= require('../model/departmentsModel')

module.exports.list=(req,res)=>{
    Department.find({user:req.user._id})
    .then((department)=>{
        res.json(department)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.create=(req,res)=>{
    const body= req.body
    const dept= new Department(body)
    dept.user = req.user._id
    dept.save()
    .then((dept)=>{
        res.json(dept)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Department.findOne({_id:id, user:req.user._id})
    .then((department)=>{
        if(department){
            res.json(department)
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
    Department.findOneAndUpdate({_id:id, user:req.user._id},body,{new:true})
    .then((department)=>{
        res.json(department)
    })
    .catch((err)=>{
        res.json(err)
    })
    
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Department.findOneAndDelete({_id:id, user:req.user._id})
    .then((department)=>{
        if(department){
            res.json(department)
        }
        else{
            res.json({})
        }
    })
    .catch((err)=>{
        res.json(err)
    })
}


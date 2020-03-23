const Employees=require('../model/employeesModel')

module.exports.list=(req,res)=>{
    Employees.find({user:req.user._id}).populate('department')
        .then((employees)=>{
            res.json(employees)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
  const body=req.body
  const Emp= new Employees(body)
  Emp.user = req.user._id
  Emp.save()
    .then((emp)=>{
        console.log(emp.email)
        res.json(emp)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports.show=(req,res)=>{
    const id=req.params.id
    Employees.findOne({_id:id,user:req.user._id})
        .then((employee)=>{
            if(employee){
                res.json(employee)
            }
            else{
                res.json({})
            }
           
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id=req.params.id
    Employees.findOneAndDelete({_id:id, user:req.user._id})
      .then((employee)=>{
            res.json(employee)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.update=(req,res)=>{
    const id= req.params.id
    const body= req.body
    Employees.findByIdAndUpdate({_id:id, use:req.user._id},body,{new:true, runValidators:true})
    .then((employee)=>{
        res.json(employee)
    })
    .catch((err)=>{
        res.json(err)
    })
}
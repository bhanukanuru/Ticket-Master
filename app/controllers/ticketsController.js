const Tickets= require('../model/ticketsModel')

module.exports.list=(req,res)=>{
    Tickets.find({user:req.user._id}).populate('department').populate('employees').populate('customer')
        .then((tickets)=>{
            res.json(tickets)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.create=(req,res)=>{
    const body=req.body
    const tickets= new Tickets(body)
    tickets.user= req.user._id
    tickets.save()
        .then((ticket)=>{
            res.json(ticket)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.show=(req,res)=>{
    const id= req.params.id
   // const body=req.body
    Tickets.findOne({_id:id, user:req.user._id})
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
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
    const body= req.body
    Tickets.findOneAndUpdate({_id:id, user:req.user._id},body,{new:true, runValidators:true})
        .then((ticket)=>{
            res.json(ticket)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports.destroy=(req,res)=>{
    const id= req.params.id
    Tickets.findOneAndDelete({_id:id, user:req.user._id})
        .then((ticket)=>{
            if(ticket){
                res.json(ticket)
            }
            else{
                res.json({})
            }
           
        })
        .catch((err)=>{
            res.json(err)
        })
}

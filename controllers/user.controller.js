const users= require('../data/users');

exports.getallusers=(req,res)=>{
  res.json(users)
};

exports.getuserid = (req,res)=>{
  const user = users.find(u => u.id ===  +req.params.id);
  if(!user){
    return res.status(404).json({message:"user not found"});
  }
  res.json(user);
}

exports.createuser =(req,res)=>{
    console.log(req.body)
  const newuser={
    id: users.length+1,
    name:req.body.name,
    :req.file ? req.file.path : null
  }

  users.push(newuser);
  res.status(201).json(newuser);
}
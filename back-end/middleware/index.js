exports.protect = async(req,res,next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const user = await JWT.verify(token, process.env.JWT_SECRET_KEY)
       
        if(!user)
        throw new Error()
        
        req.user = user
        next();
    }catch(e){
        res.status(404).send({error:"error in Authentication"})
    }
  }
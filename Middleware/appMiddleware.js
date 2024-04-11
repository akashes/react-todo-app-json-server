const jwtMiddleware=(req,res,next)=>{
    const token = req.headers['authorization']
    
    const user = jwt.verify(token,secretkey,"",(err,token))

}

module.exports = jwtMiddleware
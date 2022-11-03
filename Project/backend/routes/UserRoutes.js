const router = require("express").Router();
let User = require('../models/User');

router.post("/register",async(req,res)=>{
    const newuser = new User(req.body)
    try {
        const user = await newuser.save()
        res.send('User registered Successfully')
    } catch (error) {
        return res.status(400).json({error})
    }
});

router.post("/login",async(req,res)=>{
    console.log(req.body)
    const {email , password} = req.body.user
    try {
        
        //console.log(email)
        //console.log(password)
        const user =await User.findOne({email : email, password :password})
        
        //console.log(user)
        if(user){
            const temp ={
               name :user.name,
               email : user.email,
               isAdmin : user.isAdmin,
               _id : user._id

            }
            res.send(temp) 
            console.log(temp)
        }
        else{
           // return res.status(400).json({message : 'login failed.'})
            res.send({message: "Login failed"})
        }
    } catch (error) {
       // return res.status(400).json({ error })
            res.send({message:"User not found"})
    }
        
        
    }
);
module.exports = router;
 
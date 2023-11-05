const User = require('../model/User');

const bcrypt = require('bcryptjs');   // TO avoid password duplicancy between users
                                   
const jwt = require('jsonwebtoken');// after password is correct we generate token to the user using JWT


const JWT_SECRET_KEY = "MyKey"; //secret key

const signup = async(req, res, next) => {
    const {name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email:email});
    }
    catch(err){
        console.log(err);
    }
    if(existingUser){
        return res.status(400).json({message:"USER already Exists"})
    }
 
    const hashedPassword = bcrypt.hashSync(password);


    const user = new User({
        name,
        email,
        password:hashedPassword
    });
    
    try{
        await user.save();
    }
    catch(err){
        console.log(err);
    }
    return res.status(201).json({message:user})
};


const login = async(req,res,next)=>{
    const {email,name,password} = req.body;

    let existingUser;
    try{
        existingUser = await User.findOne({email : email});
 }
 catch(err){
    return new Error(err);
 }
 if(!existingUser){
    return res.status(400).json({message:"USER Not found,.. signup please"})
 }
  const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);

  if(!isPasswordCorrect)
  {
    return res.status(400).json({message:"Invalid Email / password"});
  }
 const token = jwt.sign({id:existingUser._id},JWT_SECRET_KEY,{
    expiresIn : "1hr"
 });
 
 return res.status(200)
 .json({message:"Successfully logged in",user:existingUser,token});
};


const verifyToken =   (req,res,next) => {
    const headers = req.headers[`authorization`];
    console.log(headers);

}

exports.signup= signup;
exports.login=login;
exports.verifyToken=verifyToken;

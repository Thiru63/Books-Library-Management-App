const User=require('../models/user.model.js')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const { generateToken } = require('../utils/commonFunctions.js')


// user register

const userRegister= async (req,res)=>{
   
    try {
        
        let {name,email,password,phone_number}=req.body
        
        if(!name||!email||!password||!phone_number){
            return res.status(400).send({
                message:"Please Fill All Fields"
            })
        }
       
        let existUserEmail=await User.findOne({email:email})
        if(existUserEmail){
            return res.status(400).send({
                message:"user already exists so please login"
            })
        }
        let existUserPhone=await User.findOne({phone_number:phone_number})
        if(existUserPhone){
            return res.status(400).send({
                message:"this phone number is already registered"
            })
        }

        const salt = await bcrypt.genSalt(6)
        const hashedpassword = await bcrypt.hash(password, salt)


        let user=await User.create({
            name,
            email,
            password:hashedpassword,
            phone_number,
    
        })


        
            let token=generateToken(user._id)
            return res.status(201).json({
                message:"Registration Successfull",
                user:{
                    name,
                    email,
                    phone_number,
                    
                },
                
                token:token,
            })
        

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
        
    }

}

// user login

const userLogin= async (req,res)=>{
   
    try {
        
        let {email,password}=req.body
        
        if(!email||!password){
            return res.status(400).send({
                message:"Please Fill All Fields"
            })
        }
       
        let user=await User.findOne({email:email})
        


        if(user){
           
            if(await bcrypt.compare(password, user.password)){
                let token=generateToken(user._id)
              return res.status(201).json({
                message:"Login Successfull",
                user:{
                    name:user.name,
                email:user.email,
                phone_number:user.phone_number,
                department:user.department,

                },
                
                token:token,
            })
            }else{
                return res.status(400).send({
                    message:"Invalid credentials"
                })
            }

            
        }else{
            return res.status(404).send({
                message:"user not exists so please register"
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"Something error occured so please try again later"
        })
        
    }

}

module.exports= {userRegister,userLogin}
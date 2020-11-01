var { Db ,User } =  require('../modal/connection')
var bcryptjs = require('bcryptjs')
var jwt = require('jsonwebtoken');

const user_controller = {}

user_controller.create_user = async(req,res,next)=>{

    const { name,email } = req.body

    try {
        const salt =await bcryptjs.genSalt(10)
        const hash_password = await bcryptjs.hash(req.body.password,salt)
        const user = await User.create({name:name,email:email,password:hash_password})
        res.status(200).send(user)
    } catch (error) {
        console.log('err in creating user',error)
        if(error.name === "SequelizeUniqueConstraintError"){
            res.status(422).send("email already exist")
        }
        else{

            res.status(400).send(error)
        }
    }
}

user_controller.user_login = async(req,res,next)=>{
    const { email,password } = req.body
    try {
        const user = await User.findAll({where:{email:email}})
        user.length===0?
        res.status(403).send("user not found"):""
        const user_auth = await bcryptjs.compare(password,user[0].password)
        if(user_auth){
            const data = {
                id:user[0].id,
                name:user[0].name
            }
            const token = await jwt.sign(data,"disaster")
            console.log(token)
            res.status(200).send({user:user,token:token})
        }
        else{

            res.status(401).send('invalid credential')
        }
        
    } catch (error) {
        console.log("error in find user",error)
        res.status(404).send("someting went qrong")
    }
}

module.exports = user_controller
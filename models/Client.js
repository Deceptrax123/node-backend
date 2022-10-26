const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");
const jwt=require("jsonwebtoken");

const clientSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    verified:{
        type:Boolean,
        required:true,
        default:false
    }
});

clientSchema.plugin(passportLocalMongoose);
clientSchema.methods.generateVerificationToken=()=>{
    const payload={
        id:this._id,
        username:this.username,
        name:this.name,
    }
    
    const verificationToken=jwt.sign(payload,process.env.USER_VERIFICATION_TOKEN,{
        expiresIn:"7d"
    });
    return verificationToken;
}

const Client=mongoose.model("Client",clientSchema);
module.exports=Client;
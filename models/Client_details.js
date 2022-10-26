const mongoose=require("mongoose");

const clientdetailSchema=new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        houseNo:{
            type:String,
            required:true
        },
        streetDetails:{
            type:String,
            required:true
        }
    },
    verificationImage:{
        data:{
            type:Buffer,
            required:true
        },
        content:{
            type:String,
            required:true
        },
    }
});

const clientDetail=mongoose.model("clientDetail",clientdetailSchema);
module.exports=clientDetail;
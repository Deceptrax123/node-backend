const mongoose=require("mongoose");

const donationSchema=new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    items:[{
        itemName:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true
        }
    }],
    completed:{
        type:Boolean,
        required:true,
        default:false
    }
})

const Donation=mongoose.model("Donation",donationSchema);
module.exports=Donation;

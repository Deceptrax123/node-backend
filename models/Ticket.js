const mongoose=require("mongoose");

const ticketSchema=new mongoose.Schema({
    orgId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    requestType:{
        volunteering:{
            service:{
                type:String,
            },
            minHours:{
                type:String,
            },
            details:{
                type:String,
            },
        },
    },
    status:{
        type:Boolean,
        required:true,
        default:false,
    }
});

const Ticket=mongoose.model("Ticket",ticketSchema);
module.exports=Ticket;
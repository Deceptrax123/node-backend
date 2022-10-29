const mongoose=require("mongoose");

const volSchema=new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    ngoId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    ticketId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        required:true
    },
});

const volRequest=mongoose.model("Volrequest",volSchema);
module.exports=volRequest;
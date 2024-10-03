import mongoose from "mongoose";
const memberSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        membershipStatus:{
            type:Boolean
        }
    }
);
const Member = mongoose.model("Member", memberSchema)

export default Member;
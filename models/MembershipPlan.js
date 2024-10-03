import mongoose from "mongoose";
const membershipplanSchema = new mongoose.Schema(
    {
        planName:{
            type:String,
            required:true
        },
        durationMonths:{
            type:Number,
            required:true
        },
        price:{
            type:String,
            required:true
        },
    }
);
const MembershipPlan = mongoose.model("MembershipPlan", membershipplanSchema)

export default MembershipPlan;
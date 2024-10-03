import mongoose from "mongoose";
const subscriptionSchema = new mongoose.Schema(
    {
        memberName:{
            type:String,
            required:true
        },
        planName:{
            type:String,
            required:true
        },
        startDate:{
            type:String,
            required:true
        },
        endDate:{
            type:String,
            required:true
        }
    }
);
const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;
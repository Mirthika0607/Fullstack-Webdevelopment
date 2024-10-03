import  Router from "express";
import Member from "../../models/Member.js";
import MembershipPlan from "../../models/MembershipPlan.js";
import Subscription from "../../models/Subscription.js";

const router=Router();
router.post("/go",async(req,res)=>{
    try{
        const member=Member(req.body);
        await member.save();
        res.send("created");
    }
    catch(error){
        res.send("error");
    }
});
router.get("/go",async(req,res)=>{
    try{
    const member = await Member.find();
    res.send(member);
}catch(error){
        res.send(error)
    }
});

router.post("/goes",async(req,res)=>{
    try{
      const membershipplan = MembershipPlan(req.body);
      await membershipplan.save();
      res.send("created");
    }
    catch(error){
      res.send("error");
    }
  });
  router.get("/goes",async(req,res)=>{
    try{
    const membershipplan = await MembershipPlan.find();
    res.send(membershipplan);
}catch(error){
        res.send(error)
    }
});
router.put("/goes/:id", async (req, res) => {
    try {
      const membershipplan = await MembershipPlan.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!membershipplan) res.send("Not found");
      res.send(membershipplan);
    } catch (error) {
      res.send("Error: " + error);
    }
  });
  router.delete("/goes/:id", async (req, res) => {
    try {
      const membershipplan = await MembershipPlan.findByIdAndDelete(req.params.id);
      if (!membershipplan) res.send("Not found");
      res.send(membershipplan);
    } catch (error) {
      res.send("Error: " + error);
    }
  });
  router.post("/ok",async(req,res)=>{
    try{
      const subscription = Subscription(req.body);
      await subscription.save();
      res.send("created");
    }
    catch(error){
      res.send("error");
    }
  });
  router.get("/ok",async(req,res)=>{
    try{
    const subscription = await Subscription.find();
    res.send(subscription);
  }catch(error){
        res.send(error)
    }
  });
export default router;
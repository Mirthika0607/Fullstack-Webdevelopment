import  Router from "express";
import Member from "../../models/Member.js";
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
export default router;
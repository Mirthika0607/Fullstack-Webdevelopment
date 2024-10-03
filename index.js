import express from "express";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import crudRoutes from "./routes/crudRoutes/index.js";

const app=express();

dotenv.config();
const PORT =process.env.PORT;
app.use(bodyparser.json());

app.use("/members",crudRoutes);

app.use("/membershipplan",crudRoutes);

app.use("/subscription",crudRoutes);

mongoose.connect("mongodb+srv://newuser123:newuser123@bluedata.fvthu.mongodb.net/gymMember").then(()=>{
  console.log("Mongodb connected")
  app.listen(PORT, ()=>{
     console.log("Server starting "+PORT);
  });
  });
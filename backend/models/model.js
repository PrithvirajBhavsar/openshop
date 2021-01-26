import mongoose from "mongoose";

 const mySchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    address:String,
    pincode:String,
});

const myModel = mongoose.model("myModel",mySchema);

export default myModel;
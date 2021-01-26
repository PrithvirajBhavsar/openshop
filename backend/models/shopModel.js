import mongoose from "mongoose";

const shopSchema = mongoose.Schema({
    fName:String,
    lName:String,
    cardHolder:String,
    cardNo:String,
    cvv:String,
    shopName:String,
    shopDetail:String,
    email:String,
    phone:String,
    address:String,
    pincode:String,
});

const shopModel = mongoose.model("myShops",shopSchema);

export default shopModel;

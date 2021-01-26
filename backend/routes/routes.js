import express from "express";
import myModel from "../models/model.js"
import shopModel from "../models/shopModel.js"

const routes = express.Router();

routes.get("/",async(req,res)=>{
    try {
        const getUsers = await myModel.find();
        res.status(201).json(getUsers);
    } catch (error) {
        res.send(error);
    }
})

routes.post("/",async(req,res)=>{
    const user = req.body;
    const newUser = new myModel(user);
    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.send(error);
    }
})

routes.get("/openshop",async(req,res)=>{
    try {
        const getShops = await shopModel.find();
        res.status(201).json(getShops);
    } catch (error) {
        res.send(error);
    }
})

routes.post("/openshop",async (req,res)=>{
    const shop = req.body;
    const newShop = new shopModel(shop);
    // console.log(newShop);
    try {
        await newShop.save();
        res.status(201).json(newShop);
    } catch (error) {
        res.send(error);
    }
})

export default routes;
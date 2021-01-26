import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import routes from "./routes/routes.js";

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use(('/'),routes);

const CONNECTION_URL = 'mongodb://localhost:27017/Practise';

const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(app.listen(port,()=>console.log(`server started at port ${port}`)))
.catch((error)=>{console.log(error)});

mongoose.set("useFindAndModify",false);

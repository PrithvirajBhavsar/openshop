import React,{useState} from 'react';
import {Switch} from "react-router-dom";
import Form from '../Form/Form';
import Signup from '../Signup/Signup';
import {Route} from "react-router-dom"
import OpenShop from '../OpenShop/OpenShop';
import Shop from '../Shop/Shop';
import ShopInfo from '../OpenShop/ShopInfo';


const Home = ()=>{

    const [storeInfo,setStoreInfo] = useState({
        fName:"",lName:"",cardHolder:"",cardNo:"",
        cvv:"",shopName:"",shopDetail:"",phone:"",
        address:"",pincode:""
    })

    const style={
        display:"flex",
        padding:"1rem",
        justifyContent:"space-around",
    }

return(
    <>
    <Switch>
        <Route exact path="/">
        <div id="home" style={style}>
            <div style={{width:"40%"}}>
                <p style={{fontWeight:"bold"}}>The illustration illustration illustration illustration (examples) paragraph paragraph is useful when we want to explain or clarify something, such as an object, a person we want to explain or clarify something, such as an object, a we want to explain or clarify something, such as an object, a person we want to explain or clarify something, such as an object, a person we want to explain or clarify something, such as an object, a person we want to explain or clarify something, such as an object, a person we want to explain or clarify something, such as an object, a person person, a concept, or a situation.The illustration (examples) paragraph is useful when we want to explain or clarify something, such as an object, a person, a concept, or a situation.</p>
            </div>
        <Form/>
        </div>
    </Route>
    <Route exact path="/Signup">
        <Signup/>
    </Route>
    <Route exact path="/OpenShop">
        <OpenShop storeInfo={storeInfo} setStoreInfo={setStoreInfo}/>
    </Route>
    <Route exact path="/Shop">
        <Shop/>
    </Route>
    <Route exact path="/OpenShop/1">
        <ShopInfo storeInfo={storeInfo} setStoreInfo={setStoreInfo}/>
    </Route>
    </Switch>
    </>
    );
}
export default Home
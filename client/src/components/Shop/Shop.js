import React from 'react';
import Card,{ShopCard} from "./Card";
import {useSelector} from "react-redux";
import "./Shop.css";
const Shop = ()=>{

    const shopsArray = useSelector(state => state.openShopReducer)
    const style={
        border:"1px solid black",
        padding:"1rem",
        display:"flex",
        justifyContent:"space-around"
    }
return(<>
    <div style={style}>
        <div style={{width:"70%"}}>
            <input style={{width:"70%",border:"2px solid black",padding:"0.1rem",marginRight:"0.2rem"}} type="search" defaultValue=""/>
            <button className="btn" style={{backgroundColor:"rgb(70,70,200)",borderRadius:"0",width:"20%",padding:"0.25rem"}} type="button">Search</button>
        </div>
        <div style={{width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
        </div>
    </div>
    <div id="shopbody" style={{margin:"2rem 0",display:"flex"}}>
        <div id="cards" style={{width:"70%"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div id="shops">
            <p style={{borderBottom:"2px solid rgb(200,200,200)"}}>Shops</p>
            {shopsArray.map((data)=>{
                return <ShopCard key={data._id} shopName={data.shopName} shopDetail={data.shopDetail}/>
            })
            }
        </div>
    </div>
</>);
}
export default Shop
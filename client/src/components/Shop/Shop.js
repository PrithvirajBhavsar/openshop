import React from 'react';
import Card from "./Card";
import "./Shop.css"
const Shop = ()=>{

    const style={
        border:"1px solid black",
        padding:"1rem",
        display:"flex",
        justifyContent:"space-around"
    }
return(<>
    <div style={style}>
        <div style={{width:"70%"}}>
            <input style={{width:"70%",border:"2px solid black",padding:"0.1rem"}} type="search" defaultValue=""/>
            <button className="btn" style={{backgroundColor:"rgb(70,70,200)",borderRadius:"0",width:"20%",padding:"0.2rem"}} type="button">Search</button>
        </div>
        <div style={{width:"20%",display:"flex",justifyContent:"space-around",alignItems:"center"}}>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
            <i style={{fontSize:"1.5rem",cursor:"pointer"}} className="fas fa-bell"></i>
        </div>
    </div>
    <div id="shopbody" style={{margin:"2rem 0"}}>
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
            
        </div>
    </div>
</>);
}
export default Shop
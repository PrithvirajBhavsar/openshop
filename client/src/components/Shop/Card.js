import React from 'react';
import photo from "../../now.jpg";
import "./Card.css";

const style={
    border:"1px solid rgb(200,200,200)",
    display:"inline-flex",
    flexDirection:"column",
}

const Card = ()=>{

return(<>
    <div style={style} className="card">
        <h1>Card</h1>
        <p>Shop name</p>
        <img style={{height:"15rem",width:"13rem"}} src={photo} alt="" />
        <p>Price</p>    
    </div>
</>);
}
const ShopCard = (props)=>{
    return(
        <>
            <div style={{padding:"0.5rem",borderBottom:"2px solid rgb(200,200,200)",display:"flex"}}>
                <p style={{width:"50%",textAlign:"left",fontSize:"0.8rem"}}>{props.shopName}</p>
                <p style={{width:"50%",textAlign:"right",fontSize:"0.8rem"}}>{props.shopDetail}</p>
            </div>
        </>
    )
}

export default Card;
export {ShopCard};
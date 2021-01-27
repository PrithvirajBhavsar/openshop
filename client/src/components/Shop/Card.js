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
export default Card;
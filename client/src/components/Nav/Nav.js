import React from 'react';
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = (props)=>{
    console.log(props);
    const image="";
        return(<>
        <nav>
            <div id="cname">    
                <p>OpenYourShop</p> 
            </div>
            <div  id="auth"> 
            <div>
                <Link to="/"><button type="button" className="btn">Login</button></Link>
            </div>
            <div>
                <Link to="/Signup"><button type="button" className="btn">Signup</button></Link>
            </div>
            <div >
                <Link to="/Shop"><button type="button" className="btn">Visit Shop</button></Link>
            </div>
            <div>
                <Link to="/OpenShop"><button type="button" className="btn">Open Shop</button></Link>
            </div>
            <div>
                <img src={image} alt="" />
            </div>
            </div>
        </nav>
    </>
)}

export default Nav;
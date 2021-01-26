import React from 'react';
import {useSelector} from "react-redux";
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = ()=>{
    const user = useSelector(state => state.apiReducer);
    console.log(user);  

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
            </div>
        </nav>
    </>
)}

export default Nav;
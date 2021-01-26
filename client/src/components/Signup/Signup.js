import React, { useState } from 'react';
import "./Signup.css";
import {useDispatch} from "react-redux";
import { postUser } from '../../actions/action';

const Signup = ()=>{

    const [user,setUser] = useState({
        firstName:"",lastName:"",email:"",phone:"",address:"",pincode:""
    })

    const dispatch = useDispatch();

    const onSubmit = (e)=>{
        e.preventDefault();
        dispatch(postUser(user));
    }
    const style = {
        display:"flex",
        height:"27rem",
        flexDirection:"column",
        justifyContent:"space-around",
        padding:"1rem 5rem",
        margin:"auto",
        width:"70%",
        backgroundColor:"rgb(70,77,150)",
        borderRadius:"0.3rem",
    }

return(
    <>
        <h1 style={{padding:"1rem", textAlign:"center" ,fontSize:"2rem"}}>Signup</h1>
        <div id="signupform">
            <form onSubmit={(e)=>{onSubmit(e)}} style={style}>
                <div>
                    <p>Name</p>
                    <input onChange={(e)=>{setUser({...user,firstName:e.target.value})}} type="" value={user.firstName}/>
                </div>
                <div>
                    <p>Surname</p>
                    <input onChange={(e)=>{setUser({...user,lastName:e.target.value})}} type="" value={user.lastName}/>
                </div>
                <div>
                    <p>Email</p>
                    <input onChange={(e)=>{setUser({...user,email:e.target.value})}} type="" value={user.email}/>
                </div>
                <div>
                    <p>Phone</p>
                    <input onChange={(e)=>{setUser({...user,phone:e.target.value})}} type="" value={user.phone}/>
                </div>
                <div>
                    <p>Address</p>
                    <input onChange={(e)=>{setUser({...user,address:e.target.value})}} type="" value={user.address}/>
                </div>
                <div>
                    <p>Pincode</p>
                    <input onChange={(e)=>{setUser({...user,pincode:e.target.value})}} type="" value={user.pincode}/>
                </div>
                <div>
                    <button style={{width:"100%"}} className="btn" type="Submit">Signup</button>
                </div>
            </form>
        </div>
    </>);
}
export default Signup
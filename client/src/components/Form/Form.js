import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { postUser } from '../../actions/action';
import "./Form.css";

const Form = ()=>{

const [user,setUser] = useState({
    email:"",password:""
})

const dispatch = useDispatch();
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
    dispatch(postUser(user))
}

const style = {
    display:"flex",
    height:"12rem",
    flexDirection:"column",
    justifyContent:"space-around",
    padding:"1rem",
    width:"35%",
    backgroundColor:"rgb(70,77,150)",
    borderRadius:"0.3rem",
}

return(   
    <>
        <form style={style} onSubmit={(e)=>{handleSubmit(e)}}>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <span>Email</span>
                <input type="email" onChange={(e)=>{setUser({...user,email:e.target.value})}} value={user.email} />
            </div>
            <div>
                <span>Password</span>
                <input type="password" onChange={(e)=>{setUser({...user,password:e.target.value})}} value={user.password} />
            </div>
            <button className="btn" type="submit">Submit</button>
        </form>
    </>);
}
export default Form
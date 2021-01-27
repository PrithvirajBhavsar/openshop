import React from 'react';
import {Link} from 'react-router-dom';
import "./Individual.css"
import {useDispatch} from "react-redux";
import { postShop } from '../../actions/action';

const ShopInfo = (props)=>{

    const dispatch = useDispatch();

    const storeInfo =  props.storeInfo;
    const setStoreInfo = props.setStoreInfo;

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(postShop(storeInfo));
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
        <h1 style={{padding:"1rem", textAlign:"center" ,fontSize:"2rem"}}>Open Shop - Shop Information</h1>
        <div id="openshopform">
            <form onSubmit={(e)=>{handleSubmit(e)}} style={style}>
                <div>
                    <p>Shop Name</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,shopName:e.target.value})}} type="" value={storeInfo.shopName}/>
                </div>
                <div>
                    <p>Shop Detail</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,shopDetail:e.target.value})}} type="" value={storeInfo.shopDetail}/>
                </div>
                <div>
                    <p>Phone</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,phone:e.target.value})}} type="" value={storeInfo.phone}/>
                </div>
                <div>
                    <p>Address</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,address:e.target.value})}} type="" value={storeInfo.address}/>
                </div>
                <div>
                    <p>Pincode</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,pincode:e.target.value})}} type="" value={storeInfo.pincode}/>
                </div>
                <div>
                    <Link to="/OpenShop" style={{width:"30%"}}><button style={{width:"100%"}} className="btn" type="Submit">Back</button></Link>
                    <button style={{width:"30%"}} className="btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </>);
}
export default ShopInfo
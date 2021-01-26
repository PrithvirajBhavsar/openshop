import React from 'react';
import { Link } from 'react-router-dom';
import "./Individual.css";

const Individual = (props)=>{

    const storeInfo = props.storeInfo;
    const setStoreInfo = props.setStoreInfo;

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
        <h1 style={{padding:"1rem", textAlign:"center" ,fontSize:"2rem"}}>Open Shop - Individual</h1>
        <div id="openshopform">
            <form style={style}>
                <div>
                    <p>Name</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,fName:e.target.value})}} type="" value={storeInfo.fName}/>
                </div>
                <div>
                    <p>Surname</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,lName:e.target.value})}} type="" value={storeInfo.lName}/>
                </div>
                <div>
                    <p>Card Holder</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,cardHolder:e.target.value})}} type="" value={storeInfo.cardHolder}/>
                </div>
                <div>
                    <p>Card No.</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,cardNo:e.target.value})}} type="" value={storeInfo.cardNo}/>
                </div>
                <div>
                    <p>Cvv</p>
                    <input onChange={(e)=>{setStoreInfo({...storeInfo,cvv:e.target.value})}} type="" value={storeInfo.cvv}/>
                </div>
                <div>
                    <Link to="/OpenShop/1" style={{width:"100%"}}><button style={{width:"100%"}} className="btn" type="Submit">Next</button></Link> 
                </div>
            </form>
        </div>
    </>);
}
export default Individual
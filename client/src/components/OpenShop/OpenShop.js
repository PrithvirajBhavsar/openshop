import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Individual from './Individual';

const OpenShop = (props)=>{

return(
<>
    <Switch>
        <Route exact path="/OpenShop/">
            <Individual storeInfo={props.storeInfo} setStoreInfo={props.setStoreInfo}/>
        </Route>
    </Switch>
</>);
}
export default OpenShop;
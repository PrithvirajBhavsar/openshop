const openShopReducer = (state=[],action)=>{
    switch(action.type){
        // case "getUser":
            // return action.data;
        case "postShop":
            return [...state,action.psdata]
        default :
            return state
    }
}

export default openShopReducer;
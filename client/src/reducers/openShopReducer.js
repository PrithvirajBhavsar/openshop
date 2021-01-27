const openShopReducer = (state=[],action)=>{
    switch(action.type){
        // case "getUser":
            // return action.data;
        case "getShop":
            return action.data
        case "postShop":
            return [...state,action.data]
        default :
            return state
    }
}

export default openShopReducer;
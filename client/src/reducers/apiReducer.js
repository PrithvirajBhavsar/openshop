const apiReducer = (state=[],action)=>{
    switch(action.type){
        case "getUser":
            return action.data;
        case "postUser":
            return [...state,action.data]
        default :
            return state
    }
}

export default apiReducer;
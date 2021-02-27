const stateReducer = (state=[],action)=>{
    switch(action.type){
        case "cImg":
            return [...state,action.data]
        case "gImg":
            return state
        default:
            return state
    }
}

export default stateReducer;
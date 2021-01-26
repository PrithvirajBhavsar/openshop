const stateReducer = (state=[],action)=>{
    switch(action.type){
        case "state":
            return state
        default:
            return state
    }
}

export default stateReducer;
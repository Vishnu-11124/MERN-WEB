 const initialState = {count : 0}

 function counterReducer(state, action ){
    switch (action.type) {
        case 'increase':
            return {count : state.count + 1}
        case 'decrease':
            return {count : state.count - 1} 
        case "incrementByValue":
            return {count : state.count + action.value}
        case "decrementByValue":
            return {count : state.count - action.value}
        case "reset":
            return initialState;
        default:
            return state
    
    }
 }

 export {counterReducer, initialState}


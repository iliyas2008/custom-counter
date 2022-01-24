
export const initialState = {
    counter:0
  }
  export const counterReducer = (state, action) =>{
    switch (action.type) {
        case "increment":
            return {counter: state.counter<20 ? state.counter+1 : 0};
        case "decrement":
            return {counter: state.counter>0 ? state.counter-1 : 0};
  
        default:
            throw new Error("No action type found.")
    }
  }
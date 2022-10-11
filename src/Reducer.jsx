import { useGlobalContext } from "./context";

const Reducer = (state, action) => {
  const evaluate = ({currentOperand, previousOperand, operation}) =>{
    const previous = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if(isNaN(previous) || isNaN(current)){
      return ""
    }
    let computation = "";
    switch(operation){

      case "+":
        computation = current + previous;
        break;
      case "-": 
        computation = previous - current;
        break;
      case "/":
        computation = previous / current;
        break;
      case "*":
        computation = previous * current;
        break;
      case "%":
        computation = previous % current;
    }
    return computation.toString() 
    
  }
  
  switch(action.type){
    
    case "ADD_DIGITS" : 
      if(state.afresh){
        return{
          ...state,
          afresh: false,
          currentOperand: action.payload
        }
      }
      if(action.payload === "0" && state.currentOperand === "0")         return state
      if(action.payload === "." && state.currentOperand.includes(".")) return state
      return { ...state, currentOperand:`${state.currentOperand}${action.payload}`};
    
    case "CLEAR" :
      return {...state, currentOperand: "", previousOperand: "", operation: ""};
    
    case "CHOOSE_OPERATION":
      if(state.currentOperand === "" && state.previousOperand === ""){
        return state;
      }
      if(state.currentOperand !== "" && state.previousOperand == ""){
        return{...state, previousOperand: state.currentOperand, currentOperand: "", operation: action.payload}
      }
      if(state.currentOperand === "" && state.previousOperand !== ""){
        return state
      }
      return{ ...state,
             operation: action.payload,
             currentOperand: "",
             previousOperand: evaluate(state)
            };
      
      case "EVALUATE":
      if(state.currentOperand === "" || state.previousOperand === "" || state.operation === ""){
        return state
      } 
      return {
        ...state,
        operation: "",
        currentOperand: evaluate(state),
        previousOperand: "",
        afresh: true
      }
      
    case "DELETE": 
      if(state.currentOperand === ""){
        return{
          ...state,
          previousOperand: "",
          operation: "",
        }
      }
      return{
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }
  }
              }
export default Reducer;
import React, {useReducer, useContext} from "react";
const AppContext = React.createContext();
import Reducer from "./Reducer";

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
  afresh: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  const HandleClick = (e) =>{
    const value = e.target.innerText;
    if(e.target.classList.contains("operand")){
        dispatch({type: "CHOOSE_OPERATION", payload: value })
    } else if(value ==="AC"){
      dispatch({type: "CLEAR"})
    }else if(!e.target.classList.contains("operand") && value !=="AC"){
      dispatch({ type: "ADD_DIGITS", payload: value })
    }
  }

  const handleEvaluate = () =>{
    dispatch({type: "EVALUATE"})
  }

  const handleDelete = () =>{
    dispatch({type: "DELETE"})
  }
  
  return (
    <AppContext.Provider
      value={{
        ...state,
      HandleClick,
      handleEvaluate,
      handleDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
import React from "react"
import { useReducer } from "react"
import { useEffect }  from "react"

import { createContext } from "react"

export const StoreContext = createContext()

export const ACTIONS = {
  PLUS:    "PLUS",
  MINUS:   "MINUS",
  RESET:   "RESET"
}

const reducer = (state, action) => {
  // console.log("state: ", state)
  // console.log("action: ", action)

  switch (action.type) {
    
    case ACTIONS.PLUS:
      return {
        counter: state.counter + action.payload,
      }

    case ACTIONS.MINUS:
      return {
        counter: state.counter - action.payload,
      }

    case ACTIONS.RESET:
      return {
        counter: action.payload,
      }

    default:
      throw new Error("Action.Type muss definiert sein")
  }
}

const initialState = {
  version: "0.1.190424.05",
  loading: "true",
  counter: 0,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

useEffect(() => {
  // setState({...state, loading: false})
}, []);

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store

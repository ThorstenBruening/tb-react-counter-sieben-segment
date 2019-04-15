import React from "react"
import { useReducer } from "react"

import { createContext } from "react"

export const StoreContext = createContext()

export const ACTIONS = {
  INCREMENT:    "INCREMENT",
  DECREMENT:    "DECREMENT",
  RESET:        "RESET"
}

const reducer = (state, action) => {
  // console.log("state: ", state)
  // console.log("action: ", action)

  switch (action.type) {
    
    case ACTIONS.INCREMENT:
      return {
        counter: state.counter + action.payload,
      }

    case ACTIONS.DECREMENT:
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
  version: "0.190304.01",
  loading: "true",
  counter: 0,
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      {children}
    </StoreContext.Provider>
  )
}

export default Store

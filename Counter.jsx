import React from "react"
import { useContext } from "react"

import { StoreContext, ACTIONS } from "./Store"

const Counter = props => {
  const [state, dispatch] = useContext(StoreContext)

  const handleClear = () => {
    const action = { type: ACTIONS.RESET, payload: 0 }
    dispatch(action)
  }

  const handlePlus = () => {
    const action = { type: ACTIONS.PLUS, payload: 1 }
    dispatch(action)
  }

  const handleMinus = () => {
    const action = { type: ACTIONS.MINUS, payload: 1 }
    dispatch(action)
  }

  return (
    <div className="Counter">
      <h3>Counter</h3>    
      {state.counter}
          
      <br />
      <br />
      <button name="clear"  onClick={handleClear}>  Clear </button>
      <button name="minus"  onClick={handleMinus}>  Minus </button>
      <button name="plus"   onClick={handlePlus}>   Plus  </button>
    </div>
  )
}

export default Counter

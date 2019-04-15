import React from "react"
import { useContext } from "react"

import { StoreContext, ACTIONS } from "./Store"

const Counter = props => {
  const [state, dispatch] = useContext(StoreContext)

  const handleClear = () => {
    const action = { type: ACTIONS.RESET, payload: 0 }
    dispatch(action)
  }

  const handleIncrement = () => {
    const action = { type: ACTIONS.INCREMENT, payload: 1 }
    dispatch(action)
  }

  const handleDecrement = () => {
    const action = { type: ACTIONS.DECREMENT, payload: 1 }
    dispatch(action)
  }

  return (
    <div className="Counter">
      <h3>Counter</h3>    
      {state.counter}
          
      <br />
      <br />
      <button name="clear"      onClick={handleClear}>    Clear </button>
      <button name="decrement"  onClick={handleDecrement}>Minus </button>
      <button name="increment"  onClick={handleIncrement}>Plus  </button>
    </div>
  )
}

export default Counter

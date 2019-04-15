import React from "react"
import { useContext } from "react"

import { StoreContext, ACTIONS } from "./Store"
import SevenSegmentDisplay from 'react-seven-segment-display'
import Ziffer from "./Ziffer"

const Ziffern = (props) => {
  const [state, dispatch] = useContext(StoreContext)
    
  const style = {
    // color:            "white",
    backgroundColor:  "black",
    margin:           "1rem",
    padding:          "2rem 2rem",
  }

  const zahl   = state.counter
  const absZahl=Math.abs(zahl)
  const sign=Math.sign(zahl)
  console.log("zahl: ", zahl)
  console.log("absZahl: ", absZahl)
  console.log("sign: ", sign)
 
  const hunderter = parseInt((absZahl / 100) % 10)
  const zehner    = parseInt((absZahl /  10) % 10)
  const einer     = parseInt((absZahl /   1) % 10)

  let onColor 
  let offColor

  if (zahl>0) {
    onColor  = "rgba(0,255,0,1.0)"
    offColor = "rgba(0,255,0,0.2)"
  }
  else if (zahl<0) {
    onColor  = "rgba(255,0,0,1.0)"
    offColor = "rgba(255,0,0,0.2)"
  }
  else {
    onColor  = "rgba(255,255,0,1.0)"
    offColor = "rgba(255,255,0,0.2)"
  }
    
return (
    <div style={style} >
  
  {/* 
    <Ziffer wert={hunderter} />
    { "xxx" }
    <Ziffer wert={zehner} />
    { "xxx" }
    <Ziffer wert={einer} />
   */}
   
       <SevenSegmentDisplay  
        // value    = {Math.abs(hunderter % 10)} 
        value    = {hunderter.toString()} 
        onColor  = {onColor} 
        offColor = {offColor}
        />

        { "xxx" }

       <SevenSegmentDisplay  
        // value    = {Math.abs(zehner % 10)} 
        value    = {zehner.toString()} 
        onColor  = {onColor} 
        offColor = {offColor}
        />

        { "xxx" }
        
       <SevenSegmentDisplay  
        // value    = {Math.abs(einer % 10)} 
        value    = {einer.toString()} 
        onColor  = {onColor} 
        offColor = {offColor}
        />


    </div>
  )
}

export default Ziffern

import React from "react"

import SevenSegmentDisplay from 'react-seven-segment-display'

const Ziffer = props => {
  // console.log("props: ", props)
  const {wert = 0} = props

  const onColor   = wert<0 ? "rgba(255, 0, 0, 1.0)" : "rgba(255, 255, 0, 1.0)"
  const offColor  = wert<0 ? "rgba(255, 0, 0, 0.2)" : "rgba(255, 255, 0, 0.2)"
    
  return (
    <SevenSegmentDisplay
      value = {wert<0 ? -wert : wert}
      onColor  = {onColor} 
      offColor = {offColor}
    />
    
  )
}

export default Ziffer

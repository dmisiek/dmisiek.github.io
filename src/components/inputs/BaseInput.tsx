import React from "react";
import './inputs.scss'

interface value{
  value?: string;
  label?: string;
}

const BaseInput = function(props:value){

  return(
    <div className="baseInput">
      { props.label && <label className="baseInput_label">{props.label}</label> }
      <input 
        className="baseInput_input"
        type="text" 
        
        />
    </div>
  )

}

export default BaseInput
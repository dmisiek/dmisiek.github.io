import React from "react";
import './inputs.scss'

interface value{
  value?: string;
  label?: string;
}

const BaseTextarea = function(props:value){

  return(
    <div className="baseInput">
      { props.label && <label className="baseInput_label">{props.label}</label> }
      <textarea 
        className="baseInput_input"
        
        />
    </div>
  )

}

export default BaseTextarea
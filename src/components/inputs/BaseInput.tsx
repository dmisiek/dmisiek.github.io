import React from "react";
import './inputs.scss'

interface value{
  value?: string;
  handler: any;
  label?: string;
  type?: string;
  error?: string;
}

const BaseInput = function(props:value){

  return(
    <div className="baseInput">
      { props.label && <label className="baseInput_label">{props.label}</label> }
      <input 
        className="baseInput_input"
        type={props.type ? props.type : "text"}
        onChange={props.handler}  
      />
      <p className="baseInput_error">{props.error}</p>
    </div>
  )

}

export default BaseInput
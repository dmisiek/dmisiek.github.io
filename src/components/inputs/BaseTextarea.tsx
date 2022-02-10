import React from "react";
import './inputs.scss'

interface value{
  handler: any;
  label?: string;
  error?: string;
  id?:string;
}

const BaseTextarea = function(props:value){

  return(
    <div className="baseInput" id={props.id}>
      { props.label && <label className="baseInput_label">{props.label}</label> }
      <textarea 
        className="baseInput_input"
        onChange={props.handler}  
      />
      <p className="baseInput_error">{props.error}</p>
    </div>
  )

}

export default BaseTextarea
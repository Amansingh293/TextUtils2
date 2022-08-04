import { useState } from "react"
import React from 'react'

export default function About(props) {

 
  // const[setText, setTextBtn] = useState("Enable Dark mode")

  return(
    <>
    <div className="container " style={{backgroundColor: props.mode === "light"?"white":"rgb(64, 64, 64)",color: props.mode === "light"?"black":"white"}}>
      <h1>About Us</h1>
    <div className="accordion" id="accordionExample" style={props.setStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button style={props.setStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        <strong>Analyse your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div style={props.setStyle} className="accordion-body">
        <p>Here you can play with your text. Like editing and stuff.</p>
      </div>
    </div>
  </div>
  <div style={props.setStyle} className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button style={props.setStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div style={props.setStyle} className="accordion-body">
        <p>Its totaly free!! no need to worry about paid editing.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingThree">
      <button style={props.setStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div style={props.setStyle} className="accordion-body">
        <p>its very compatible friendly too.</p>
      </div>
    </div>
  </div>
</div>
{/* <button className="btn btn-primary btn-large my-3" onClick={toggleStyle}>{setText}</button> */}
    </div>
    </>
  )
  
}
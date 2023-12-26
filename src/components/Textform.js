import React, {useState} from "react";

export default function TextForm(props){
const[text, setText] = useState('');


const handleOnClick = ()=>{
    const newText = text.toUpperCase();
    setText(newText);
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    props.showAlert("has been upercased", "success")
}} 

const handleLoClick = () =>{
    const loText = text.toLowerCase();
    setText(loText);
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    props.showAlert("has been lowercased", "success")}
}

const handleClrClick = () =>{
    setText("");
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    props.showAlert("text cleared", "success")
}}

const handleCapClick = () =>{
    const capCase = text.charAt(0).toUpperCase() + text.slice(1);
    setText(capCase);
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    props.showAlert("First letter is capitilized", "success")
}}

const handleCopy = ()=>{
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied to clipboard", "success")
}}

const handleTrim = (event)=>{
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
        setText(text.replace(/\s+/g,' ').trim())
}}

const handleOnChange = (event)=>{
    // console.log(event);
    setText(event.target.value);
}

const reversedOnClick = () => {
    if(text.length === 0){
        props.showAlert("Please enter some text.", "danger");
    }else{
    let splitWord = text.split("");
    let reverseWord = splitWord.reverse("");
    let joinedWords = reverseWord.join("");
    let newText = joinedWords
    setText(newText);
  }};

return(
<>
<div style={{color: props.mode === "light"?"black":"white"}}>

<h1 style={{fontSize: "2rem"}}>{props.heading}</h1>

<div className="mb-3"/>

  <label htmlFor="myBox" className="form-label ">{props.label}</label>

  <textarea className="form-control"  style={{backgroundColor: props.mode === "light"?"white":"	rgb(101 101 101)",color: props.mode === "light"?"black":"white"}} value={text} onChange={handleOnChange} placeholder="Enter text here"  placeholdertextcolor="white" id="myBox" rows="8"></textarea>
  
  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleOnClick}>convert text to upper case</button>

  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleLoClick}>convert text to lower case</button>

  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleClrClick}>Clear Text</button>

  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleCapClick}>Capitilise first Character</button>

  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleCopy}>Copy Text</button>

  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={reversedOnClick}>Reverse Text</button>
   
  <button disabled={text.length === 0} className={`btn btn-info my-3 mx-2`} onClick={handleTrim}>Remove extra space between words</button>

</div>

<div style={{color: props.mode === "light"?"black":"white"}} className="container">

    <h2>Your Summery</h2>

    <p> {text.length>0 ? text.trim().split(" ").length : 0} Words and {text.length} Characters typed</p>

    <h2>Preview</h2>

    <p>{text.length>0?text:"Nothing to preview!"}</p>

</div>
</>
    )
}

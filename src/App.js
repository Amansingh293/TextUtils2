// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, changeMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const [btnColor, setBtnColor] = useState("info");
  const [setStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })


  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
  })
  setTimeout(()=>{
    setAlert(null);},
    1500
  )

  }

  const toggleMode = ()=>{
    if(mode === "light" ){
      changeMode("dark");
      document.body.style.backgroundColor=("rgb(64,64,64)")
      showAlert("Dark mode has been enabled", "success")
      setBtnColor("info")
    }else{
      changeMode("light")
      document.body.style.backgroundColor=("white")
      showAlert("Dark mode has been Disabled", "success");
      setBtnColor("dark")
    }
  }

  const toggleStyle = ()=>{
    if(setStyle.color === "black"){
      setMyStyle({
        color: "white",
        backgroundColor: "rgb(47, 48, 53)",
        border: "0.07rem solid white"
      })
    }else{
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
    }
  }

  return (
    <>
    <BrowserRouter>
  <Navbar about="About Us" mode={mode} toggleMode={toggleMode} btnColor={btnColor} toggleStyle={toggleStyle} />
  <Alert alert={alert}/>
 <div className="container my-3">

    <Routes>
      <Route path="/" element={
      <TextForm heading= "Try TextUtils - Convert lowercase to uppercase, Convert uppercase to lowercase, Remove extra spaces from text and much more" mode={mode} toggleMode={toggleMode}  alert={alert} showAlert={showAlert} btnColor={btnColor} setBtnColor={setBtnColor}/>
      }/>
      <Route path="/About" element={
    <About setStyle={setStyle} mode={mode}/>
      } />
    </Routes>

 </div>
 </BrowserRouter>
  </>
  );
}

export default App;
{/* // greenMode={greenMode} btncolour={btncolour} redMode={redMode} blueMode={blueMode} darkMode={darkMode} */}

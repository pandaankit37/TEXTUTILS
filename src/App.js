// import About from "./components/About";
// import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react' ;
// import { Routes ,Route } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert = (message,type)=>{
     setAlert({
        msg:message,
        type:type
     })
     setTimeout(() => {
        setAlert(null);
     }, 3000);
    }
    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode ('dark');
            document.body.style.backgroundColor ='#070951' ;
            showAlert("Dark mode has been enabled","success");
            document.title ='TextUtils - Dark Mode';
            // setInterval(() => {
            //     document.title ='TextUtils is Amazing Mode';
            // }, 2000);
            // setInterval(() => {
            //     document.title =' Install TextUtils ';
            // }, 1500);
        }
        else{
            setMode  ('light');
            document.body.style.backgroundColor ='white' ;
            showAlert("light mode has been enabled","success");
            document.title ='TextUtils - Light Mode';
        }
    }
return(
<>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Switch> */}
    </div>
{/* // </Router>     */}

</>
);
}

export default App;



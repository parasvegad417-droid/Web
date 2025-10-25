import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{useState} from "react";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";


function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message:message,
      type:type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  // const removeBodyClass=()=>{
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-warning');
  //   document.body.classList.remove('bg-primary');
  // }

  const toggleMode = (cls) => {
    // removeBodyClass();
    // document.body.classList.add('bg-'+cls)
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#33496bff";
      showAlert("Dark mode has been Enabled", "success");
      // setTimeout(()=>{
      //      document.title='TextUtils-Dark Mode'
      // },2000)
      // setTimeout(() => {
      //   document.title='Installing Virus Now'
      // },1500);
      // document.title = "TextUtils-Dark Mode ";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
      // document.title = "TetxUtil  s-Light Mode";~
    }
  };
  return (
    <>
    <BrowserRouter>
        <Navbar
          title="TextUtils"
          Mode={Mode}
          toggleMode={toggleMode}
          link="My-link"
        />
        <Alert alert={alert}/>
       <Routes>
          <Route exact path="/About" element={<About mode={Mode}/>}>
          </Route>
          <Route exact path="/"
          element={
               <TextForm
             Mode={Mode}
             heading="Enter the text to Analayze"
             showAlert={showAlert}
           />
            }>
            </Route>
            </Routes>
        <div className="container my-3">
        </div>
        </BrowserRouter>
    </>
  );
}

export default App;

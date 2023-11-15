
import React from "react";
import Home from "./pages/Home";
import "./App.css";





const BASE_URL= "http://localhost:8000/api"; 

function App() {
  return (
    <div >
      


      <Home BASE_URL={BASE_URL}/>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

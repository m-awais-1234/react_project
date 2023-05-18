import React, { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";
// import { useEffect } from "react";
//  import "./components/Data.css";
import Task1 from "./components/task1";
import Navbar from "./components/Navbar";
import {Routing} from "./components/Routing";
import Task1 from "./components/task1";
// import Task2 from "./components/task2";
// import "./components/Data2.css"




function App() {

  return (
    <div>
      {/* <Task2/> */}
      <Task1/>
        <Navbar />
        <Routing/>

    </div>
  );
}

export default App;

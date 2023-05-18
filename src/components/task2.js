import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
//  import "./components/Data2.css";
// import "../components/data.css"





function Task2() {

  const [data, setData] = useState([]);

  useEffect(() => { axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setData(res.data)) }, [])

  console.log(data);



  return (
    <div classNameName='grid'>
    
        
        

      {/* <h1>Axios Tutorial</h1> */}
      {data.map((item) => { const { userId, id, title,body } = item;
      return (
        <div classNameName='card' style={{backgroundImage:"url('https://img.freepik.com/premium-vector/abstract-color-background-website-banner-poster-card-modern-graphic-design-decoration_120819-934.jpg')"}} key={userId}>
          <h1>{id}</h1>
          <h2>{title}</h2>
          <p>{body}</p>

        </div>
          
          );
       
     }
     )
     }
      
              
        
  
    </div>
  );
}



export default Task2;
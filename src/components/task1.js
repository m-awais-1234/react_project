import React from 'react'
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";
// import "./components/Data.css";
// import "../components/data.css"




function Task1() {

  const [data, setData] = useState([]);

  useEffect(() => { axios.get("https://jsonplaceholder.typicode.com/users").then((res) => setData(res.data)) }, [])

  console.log(data);



  return (
    <div>
      <div>
        <table classNameName="table">
          <h2 classNameName="heading">User List Data</h2>
          <tr classNameName="tablerows">
            <th classNameName="h">Name</th>
            <th classNameName="h">Email</th>
            <th classNameName="h">Street</th>
            <th classNameName="h">Suit</th>
            <th classNameName="h">City</th>
            <th classNameName="h">Zipcode</th>
            <th classNameName="h">Lat</th>
            <th classNameName="h">Lng</th>
            <th classNameName="h">Comname</th>
          </tr>

      {/* <h1>Axios Tutorial</h1> */}
      {data.map((item) => { const { id, name, username, email, address:{street,suite,city,zipcode,geo:{lat,lng}}, phone, website, company:{name:comname,catchPhrase,bs} } = item;
      return (
          <tr>
            <th classNameName="d">{name}</th>
            <th classNameName="d">{email}</th>
            <th classNameName="d">{street}</th>
            <th classNameName="d">{suite}</th>
            <th classNameName="d">{city}</th>
            <th classNameName="d">{zipcode}</th>
            <th classNameName="d">{lat}</th>
            <th classNameName="d">{lng}</th>
            <th classNameName="d">{comname}</th>
          </tr>)
       
     }
     )
     }
      </table>
              
              </div>
  
    </div>
  );
}



export default Task1;
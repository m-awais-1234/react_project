import React from 'react'
import About from "../components/About";
import  Services from "../components/Services";
import Home from "../components/Home";
import {
  Route,
  Routes
} from "react-router-dom";
import Contact from "../components/Contact";
import Forms from "../components/Forms";

export const Routing = () => {
    return (
        <div>
            <Routes>

                {/* <Task1/> */}

                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact us" element={<Contact />} />
                <Route path="/form" element={<Forms />} />
                <Route path="/" element={<Home />} />


            </Routes>


        </div>
    )
}


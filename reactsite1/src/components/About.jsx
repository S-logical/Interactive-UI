import React from "react";
import web from "../image/s2.jpg";
import Common from "./common";

const About = () =>{
  return (
    <>
      <Common 
        name="Welcome to about page"
        img = {web}
        visit="/contact"
        btnname="Contact Now"
        
        />

    </>
  );
}

export default About;
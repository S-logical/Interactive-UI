import React from "react";
//import { NavLink } from "react-router-dom";
import web from "../image/s1.jpg";
import Common from "./common";

const Home = () => {
    return (
        <>
        <Common 
        name="Grow your Skills with"
        img = {web}
        visit="/about"
        btnname="Get Started"
        />

        </>
    );
}

export default Home;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages 
import Home from "../../Pages/Home/home"
import Login from "../../Pages/Login/login";
import Signup from "../../Pages/Signup/signup";

export default function Container() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
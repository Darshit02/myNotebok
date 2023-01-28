import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";

const App = () =>{
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}  />
              <Route path="/login" element={<Login />}  />
              <Route path="/signup" element={<Signup />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
};

export default App;

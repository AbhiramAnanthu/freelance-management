import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/authorization/login";
import FreeHome from "./components/freelancer/freeHome";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/freeHome" element={<FreeHome />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

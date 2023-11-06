import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Kindergarten from "./page/Kindergarten";
import HolyKids from "./page/HolyKids";
import PaulCommunity from "./page/PaulCommunity";
import Joshua from "./page/Joshua";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/kindergarten" element={<Kindergarten />}></Route>
          <Route path="/holykids" element={<HolyKids />}></Route>
          <Route path="/paul-community" element={<PaulCommunity />}></Route>
          <Route path="/joshua" element={<Joshua />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

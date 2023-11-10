import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import Kindergarten from "../page/personnel-info/Kindergarten";
import HolyKids from "../page/personnel-info/HolyKids";
import PaulCommunity from "../page/personnel-info/PaulCommunity";
import Joshua from "../page/personnel-info/Joshua";

export default () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/kindergarten" element={<Kindergarten />}></Route>
      <Route path="/holykids" element={<HolyKids />}></Route>
      <Route path="/paul-community" element={<PaulCommunity />}></Route>
      <Route path="/joshua" element={<Joshua />}></Route>
    </Routes>
  </BrowserRouter>
);

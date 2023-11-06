import * as React from "react";
import "./App.css";
import FirstDepartment from "./component/Departments";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Kindergarten from "./list/Kindergarten";
import HolyKids from "./list/HolyKids";
import PaulCommunity from "./list/PaulCommunity";
import Joshua from "./list/Joshua";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstDepartment />}></Route>
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

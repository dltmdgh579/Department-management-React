import * as React from "react";
import "./App.css";
import FirstDepartment from "./department/FirstDepartment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./ListPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstDepartment />}></Route>
          <Route path="/list" element={<ListPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

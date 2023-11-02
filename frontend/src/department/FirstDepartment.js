import * as React from "react";
import { useNavigate } from "react-router-dom";

const FirstDepartment = () => {
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate("/list");
  };

  return (
    <div>
      <button onClick={navigateToList}>영유치부</button>
      <button onClick={navigateToList}>홀리키즈</button>
      <button onClick={navigateToList}>바울공동체</button>
      <button onClick={navigateToList}>여호수아 청년부</button>
    </div>
  );
};

export default FirstDepartment;

import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const FirstDepartment = () => {
  // navigate
  const navigate = useNavigate();

  const navigateToKindergarten = () => {
    navigate("/kindergarten");
  };

  const navigateToHolykids = () => {
    navigate("/holykids");
  };

  const navigateToPaulCommunity = () => {
    navigate("/paul-community");
  };

  const navigateToJoshua = () => {
    navigate("/joshua");
  };

  return (
    <div>
      <></>
      <button onClick={navigateToKindergarten}>영유치부</button>
      <button onClick={navigateToHolykids}>홀리키즈</button>
      <button onClick={navigateToPaulCommunity}>바울공동체</button>
      <button onClick={navigateToJoshua}>여호수아 청년부</button>
    </div>
  );
};

export default FirstDepartment;

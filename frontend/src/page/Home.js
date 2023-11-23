import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const FirstDepartment = () => {
  // navigate
  const navigate = useNavigate();

  // 부서 별 상세
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

  // 전체 인원 리스트
  const navigateToAllList = () => {
    navigate("/list");
  };

  // 부서 별 인원 리스트
  const navigateToKindergartenInfo = () => {
    navigate("/kindergarten/info");
  };
  const navigateToHolykidsInfo = () => {
    navigate("/holykids/info");
  };
  const navigateToPaulCommunityInfo = () => {
    navigate("/paul-community/info");
  };
  const navigateToJoshuaInfo = () => {
    navigate("/joshua/info");
  };

  return (
    <div>
      <div>
        <div onClick={navigateToAllList}>전체 인원</div>
      </div>
      <div>
        <div onClick={navigateToKindergarten}>영유치부</div>
        <div onClick={navigateToHolykids}>홀리키즈</div>
        <div onClick={navigateToPaulCommunity}>바울공동체</div>
        <div onClick={navigateToJoshua}>여호수아 청년부</div>
      </div>
      <div>
        <button onClick={navigateToKindergartenInfo}>info</button>
        <button onClick={navigateToHolykidsInfo}>info</button>
        <button onClick={navigateToPaulCommunityInfo}>info</button>
        <button onClick={navigateToJoshuaInfo}>info</button>
      </div>
    </div>
  );
};

export default FirstDepartment;

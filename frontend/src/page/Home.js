import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../css/Home.module.css";

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
        <div className={styles.whole_personnel} onClick={navigateToAllList}>
          전체 인원
        </div>
      </div>
      <div className={styles.departments_parent}>
        <div className={styles.departments} onClick={navigateToKindergarten}>
          <div className={styles.departments_img_kindergarten}></div>
          <div className={styles.departments_text}>영유치부</div>
        </div>
        <div className={styles.departments} onClick={navigateToHolykids}>
          <div className={styles.departments_img_holykids}></div>
          <div className={styles.departments_text}>홀리키즈</div>
        </div>
        <div className={styles.departments} onClick={navigateToPaulCommunity}>
          <div className={styles.departments_img_paulcommunity}></div>
          <div className={styles.departments_text}>바울공동체</div>
        </div>
        <div className={styles.departments} onClick={navigateToJoshua}>
          <div className={styles.departments_img_joshua}></div>
          <div className={styles.departments_text}>여호수아 청년부</div>
        </div>
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

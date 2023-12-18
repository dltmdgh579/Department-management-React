import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../css/personnel/post/Personnel_post.module.css";
import { useNavigate } from "react-router-dom";

const PersonnelPost = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: "",
    departmentType: "",
    dateOfBirth: "",
    phone: "",
    email: "",
    workSpace: "",
    address: "",
    family: "",
  });

  const changeValue = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const postRequest = async (e) => {
    await axios({
      method: "post",
      url: "http://dnch-edu.com:8080/personnel/post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify(info),
    }).then((response) => {
      navigate("/list");
      console.log(response.data);
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
          className={styles.profile_image}
        ></img>
        사진을 업로드 해주세요
      </div>
      <div>이름</div>
      <input
        placeholder="내용을 입력해 주세요."
        onChange={changeValue}
        name="name"
      ></input>
      <div>소속</div>
      <input
        placeholder="소속 구분"
        onChange={changeValue}
        name="departmentType"
      ></input>
      <div>생년월일</div>
      <input
        placeholder="날짜 선택"
        onChange={changeValue}
        name="dateOfBirth"
      ></input>
      <div>연락처</div>
      <input
        placeholder="01012345678"
        onChange={changeValue}
        name="phone"
      ></input>
      <div>이메일</div>
      <input
        placeholder="example@domain.com"
        onChange={changeValue}
        name="email"
      ></input>
      <div>학교/직장</div>
      <input
        placeholder="학교/직장 명을 입력해 주세요."
        onChange={changeValue}
        name="workSpace"
      ></input>
      <div>주소</div>
      <input
        placeholder="주소를 입력해 주세요."
        onChange={changeValue}
        name="phone"
      ></input>
      <div>가족 관계</div>
      <input
        placeholder="가족 구분"
        onChange={changeValue}
        name="family"
      ></input>
      <div className={styles.submit} onClick={postRequest}>
        완료
      </div>
    </div>
  );
};

export default PersonnelPost;

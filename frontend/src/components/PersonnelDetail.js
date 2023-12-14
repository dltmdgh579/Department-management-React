import React from "react";
import styles from "../css/Personnel_detail.module.css";

const PersonnelDetail = (props) => {
  const {
    id,
    name,
    dateOfBirth,
    phone,
    email,
    profileImage,
    address,
    departmentType,
  } = props.info;

  return (
    <div className={styles.detail}>
      <div>사진 - profileImage</div>
      <div>이름 : {name}</div>
      <div>소속 : {departmentType}</div>
      <div>생년월일 : {dateOfBirth}</div>
      <div>휴대전화 : {phone}</div>
      <div>이메일 : {email}</div>
      <div>주소 : {address}</div>
      <div>가족관계 : 준비중</div>
      <br />
      <hr />
      <br />
    </div>
  );
};

export default PersonnelDetail;

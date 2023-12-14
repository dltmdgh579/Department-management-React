import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/Personnel_list.module.css";

const PersonnelList = (props) => {
  const {
    id,
    name,
    dateOfBirth,
    phone,
    address,
    profileImage,
    departmentType,
  } = props.info;

  return (
    <div>
      <Link to={"/detail/" + id} className={styles.link}>
        <div>사진 - {profileImage}</div>
        <div>이름 : {name}</div>
        <div>생년월일 : {dateOfBirth}</div>
        <div>휴대전화 : {phone}</div>
        <div>주소 : {address}</div>
        <br />
        <hr />
        <br />
      </Link>
    </div>
  );
};

export default PersonnelList;

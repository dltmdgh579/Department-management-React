import React from "react";
import styles from "../../../css/Personnel_detail.module.css";

const PersonnelDetail = (props) => {
  const {
    id,
    name,
    dateOfBirth,
    phone,
    email,
    workSpace,
    profileImage,
    address,
    departmentType,
  } = props.info;

  return (
    <div className={styles.detail}>
      <div className={styles.info_container}>
        <img
          src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
          className={styles.profile_image}
        ></img>
        <div className={styles.text_container}>
          <div className={styles.text_name}>{name}</div>
          <div>{departmentType}</div>
          <div>{dateOfBirth}</div>
          <div>{phone}</div>
        </div>
      </div>
      <div className={styles.detail_container}>
        <div>{email}</div>
        <div>{workSpace}</div>
        <div>{address}</div>
      </div>
      <hr />
      <div>가족관계 : 준비중</div>
    </div>
  );
};

export default PersonnelDetail;

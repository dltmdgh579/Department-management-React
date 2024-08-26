import React from "react";
import styles from "../../../../css/personnel/all-list/Personnel_list.module.css";

const Personnel = (props) => {
  const { name, dateOfBirth, phone, address, profileImage } = props.info;
  const isAdd = props.isAdd;

  const overlay = (
    <div className={styles.overlay}>
      <span className={styles.overlay_text}>추가</span>
    </div>
  );

  return (
    <div className={styles.attendance_container}>
      {isAdd ? <div>{overlay}</div> : null}
      <div className={styles.info_container}>
        <img
          src={
            profileImage
              ? "https://dnch-edu.com/profile-image/" + profileImage
              : "https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
          }
          className={styles.profile_image}
        ></img>
        <div className={styles.text_container}>
          <div className={styles.text_name}>{name}</div>
          <div>{dateOfBirth}</div>
          <div>{phone}</div>
          <div>{address}</div>
        </div>
      </div>
    </div>
  );
};

export default Personnel;

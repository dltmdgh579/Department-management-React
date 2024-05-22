import React from "react";
import styles from "../../../css/personnel/list/Personnel_list.module.css";

const Personnel = (props) => {
  const { name, dateOfBirth, phone, address, profileImage, attendanceCheck } =
    props.info;
  const isAdd = props.isAdd;
  const isAttendance = props.isAttendance;
  const telLink = "tel:" + phone;

  const overlay = (
    <div className={styles.overlay}>
      <span className={styles.overlay_text}>{isAdd ? "추가" : "출석"}</span>
    </div>
  );

  return (
    <div className={styles.attendance_container}>
      {isAttendance || isAdd ? <div>{overlay}</div> : null}
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
          <div>
            {isAdd || isAttendance ? (
              <a href={telLink}>{phone}</a>
            ) : (
              <div>{phone}</div>
            )}
          </div>
          <div>{address}</div>
        </div>
      </div>
    </div>
  );
};

export default Personnel;

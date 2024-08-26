import React, { useEffect, useState } from "react";
import styles from "../../../css/personnel/all-list/Personnel_Attendance.module.css";

const PersonnelAttendance = (props) => {
  const { id, name } = props.info;
  const isAttendance = props.isAttendance;
  let attendanceCheck = props.attendanceCheck;
  const checkAttendanceMemberInfo = props.attendanceCheckFunction;

  const [attendance, setAttendance] = useState(false);

  useEffect(() => {
    setAttendance(attendanceCheck);
  }, [attendanceCheck]);

  const checkAttendanceMember = () => {
    attendanceCheck = !attendanceCheck;
    const attendanceStatus = attendanceCheck === true ? "ATTENDANCE" : "ABSENT";

    setAttendance(attendanceCheck);
    checkAttendanceMemberInfo({ id, name, attendanceStatus });
  };

  const overlay = (
    <div className={styles.overlay}>
      <span className={styles.overlay_text}>출석</span>
    </div>
  );

  return (
    <div className={styles.container}>
      {attendance ? <div>{overlay}</div> : null}
      <div className={styles.info_container} onClick={checkAttendanceMember}>
        <img
          src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
          className={styles.profile_image}
        ></img>
        <div className={styles.text_container}>
          <div className={styles.text_name}>{name}</div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PersonnelAttendance;

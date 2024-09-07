import React, { useEffect, useState } from "react";
import styles from "../../../css/personnel/all-list/Personnel_Attendance.module.css";

const PersonnelAttendance = (props) => {
  const { id, name } = props.info;
  let attendanceCheckInit = props.attendanceCheck;
  const checkAttendanceMemberInfo = props.attendanceCheckFunction;

  const [attendance, setAttendance] = useState(attendanceCheckInit);

  useEffect(() => {
    setAttendance(attendanceCheckInit);
  }, [attendanceCheckInit]);

  useEffect(() => {
    const attendanceStatus = attendance === true ? "ATTENDANCE" : "ABSENT";
    checkAttendanceMemberInfo({ id, name, attendanceStatus });
  }, [attendance]);

  const checkAttendanceMember = () => {
    setAttendance(!attendance);
  };

  const overFiveWords = (name) => {
    return name.length > 5 ? name.substring(0, 5) + ".." : name;
  };

  const overlay = (
    <div className={styles.overlay}>
      <span className={styles.overlay_text}>✔</span>
    </div>
  );

  return (
    <div className={styles.container} onClick={checkAttendanceMember}>
      <div className={styles.info_container}>
        {attendance ? <div>{overlay}</div> : null}
        <img
          src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
          className={styles.profile_image}
        />
        <div className={styles.text_container}>
          <div className={styles.text_name}>
            {overFiveWords(name)}
            {attendance}
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default PersonnelAttendance;

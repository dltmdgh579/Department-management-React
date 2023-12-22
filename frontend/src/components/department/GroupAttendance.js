import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/department/Department_info.module.css";

const GroupAttendance = (props) => {
  const attendance = props.info[0];
  const enrollment = props.info[1];

  return (
    <div className={styles.attendance}>
      이번 주 출석 : {attendance}명 (총 재적 {enrollment}
      명)
    </div>
  );
};

export default GroupAttendance;

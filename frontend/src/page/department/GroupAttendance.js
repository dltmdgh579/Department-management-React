import React from "react";
import styles from "../../css/department/Department_info.module.css";
import { Link } from "react-router-dom";

const GroupAttendance = (props) => {
  const attendance = props.info[0];
  const enrollment = props.info[1];
  const departmentName = props.departmentName;
  const state = props.state;

  return (
    <Link to={`/${departmentName}/list`} state={{ state }}>
      <div className={styles.attendance}>
        이번 주 출석 : {attendance}명 (총 재적 {enrollment}
        명)
      </div>
    </Link>
  );
};

export default GroupAttendance;

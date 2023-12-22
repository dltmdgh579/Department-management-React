import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../../css/department/group/Group_info_header.module.css";

const GroupInfoHeader = (props) => {
  const departmentId = props.params[0];
  const groupId = props.params[1];

  return (
    <div className={styles.container}>
      <div className={styles.add_personnel}>
        <Link
          to="/list/add"
          state={{ departmentId: departmentId, groupId: groupId }}
        >
          추가
        </Link>
      </div>
      <div className={styles.long_term_absentee}>장기 결석자</div>
      <div className={styles.absentee}>
        <Link
          to={`/${props.params[0]}/${props.params[1]}/absent`}
          className={styles.absentee_link}
        >
          결석인원
        </Link>
      </div>
    </div>
  );
};

export default GroupInfoHeader;

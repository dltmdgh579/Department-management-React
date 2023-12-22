import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/department/Department_info.module.css";
import GroupAttendance from "./GroupAttendance";

const GroupList = (props) => {
  const smallGroup = props.smallGroup;
  const id = props.id;

  return (
    <div>
      <Link to={"/" + id + "/" + smallGroup.id} className={styles.link}>
        <div
          className={styles.group}
          smallGroup={smallGroup}
          key={smallGroup.name}
        >
          <div className={styles.group_name}>{smallGroup.name}</div>
        </div>
      </Link>
    </div>
  );
};

export default GroupList;

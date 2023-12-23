import React, { useState } from "react";
import styles from "../../css/department/Department_info.module.css";

const GroupList = (props) => {
  const name = props.smallGroupName;

  return (
    <div>
      <div className={styles.group}>
        <div className={styles.group_name}>{name}</div>
      </div>
    </div>
  );
};

export default GroupList;

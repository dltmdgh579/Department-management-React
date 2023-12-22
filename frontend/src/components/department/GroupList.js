import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/department/Department_info.module.css";
import GroupAttendance from "./GroupAttendance";

const GroupList = (props) => {
  const smallGroupInfoList = props.info.smallGroupInfoList;
  const { id, name } = props.state;

  return (
    <div className={styles.department_info}>
      <div className={styles.groups}>
        {smallGroupInfoList ? (
          <div>
            {smallGroupInfoList.map((smallGroup) => (
              <Link to={"/" + id + "/" + smallGroup.id} className={styles.link}>
                <div
                  className={styles.group}
                  smallGroup={smallGroup}
                  key={smallGroup.name}
                >
                  <div className={styles.group_name}>{smallGroup.name}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GroupList;

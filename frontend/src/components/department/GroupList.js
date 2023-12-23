import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/department/Department_info.module.css";
import Group from "./Group";

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
                <Group smallGroupName={smallGroup.name} />
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GroupList;

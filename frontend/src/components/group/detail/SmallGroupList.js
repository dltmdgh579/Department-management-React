import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/Department_info.module.css";

const SmallGroupList = (props) => {
  return (
    <div className={styles.department_info}>
      <div className={styles.groups}>
        {props.info.smallGroupInfoList ? (
          <div>
            {props.info.smallGroupInfoList.map((smallGroup) => (
              <Link
                to={"/" + props.state.id + "/" + smallGroup.id}
                className={styles.link}
              >
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
      <div className={styles.attendance}>
        이번 주 출석 : {props.info.attendance}명 (총 재적{" "}
        {props.info.enrollment}명)
      </div>
    </div>
  );
};

export default SmallGroupList;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../css/Department_info.module.css";

const SmallGroupList = (props) => {
  // const { id, name, dateOfBirth, phone, email, profileImage, address } = props;

  console.log(props);

  return (
    <div className={styles.department_info}>
      <div className={styles.groups}>
        {props.info.smallGroupInfoList ? (
          <div>
            {/* <Link to={"/joshua/" + props.info.name.toLowerCase().replace(/ /g, "-")}> */}
            {props.info.smallGroupInfoList.map((smallGroup) => (
              <div
                className={styles.group}
                smallGroup={smallGroup}
                key={smallGroup.name}
              >
                <div className={styles.group_name}>{smallGroup.name}</div>
              </div>
            ))}
          </div>
        ) : null}
        {/* </Link> */}
      </div>
      <div className={styles.attendance}>
        이번 주 출석 : {props.info.attendance}명 (총 재적{" "}
        {props.info.enrollment}명)
      </div>
    </div>
  );
};

export default SmallGroupList;

import React, { useState } from "react";
import styles from "../../css/department/Department_info.module.css";

const GroupList = (props) => {
  const id = props.smallGroupName.id;
  const name = props.smallGroupName.name;
  const isModify = props.isModify;
  const clickGroupModifySub = props.modifyFunction;

  const [clickGroupModify, setClickGroupModify] = useState(false);

  const modifyGroup = (e) => {
    e.preventDefault();
    const clickGroupModifyCopy = !clickGroupModify;
    clickGroupModifySub([clickGroupModifyCopy, id]);
  };

  return (
    <div>
      <div className={styles.group}>
        {isModify ? (
          <div className={styles.group_modify} onClick={modifyGroup}></div>
        ) : null}
        <div className={styles.group_name}>{name}</div>
      </div>
    </div>
  );
};

export default GroupList;

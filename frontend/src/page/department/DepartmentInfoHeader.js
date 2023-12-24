import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../css/department/group/Group_info_header.module.css";

const GroupInfoHeader = (props) => {
  const addGroup = props.addFunction;
  const modifyGroup = props.modifyFunction;

  const [isAddGroup, setAddGroup] = useState(false);
  const [isModifyGroup, setModifyGroup] = useState(false);

  const addGroupSub = () => {
    const isAddGroupCopy = !isAddGroup;
    setAddGroup(isAddGroupCopy);
    addGroup(isAddGroupCopy);
  };

  const modifyGroupSub = () => {
    const isModifyGroupCopy = !isModifyGroup;
    setModifyGroup(isModifyGroupCopy);
    modifyGroup(isModifyGroupCopy);
  };

  return (
    <div className={styles.container}>
      <div className={styles.add_personnel} onClick={addGroupSub}>
        추가
      </div>
      <div className={styles.add_personnel} onClick={modifyGroupSub}>
        수정
      </div>
    </div>
  );
};

export default GroupInfoHeader;

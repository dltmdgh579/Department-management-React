import React, { useState } from "react";
import styles from "../../../../css/personnel/all-list/Personnel_list.module.css";
import Personnel from "./Personnel";

const PersonnelList = (props) => {
  const { id, name } = props.info;

  const checkAddMemberInfo = props.checkFunction;

  const [added, setAdded] = useState(false);

  const checkAddMember = () => {
    const isAddMember = !added;
    setAdded(isAddMember);
    checkAddMemberInfo({ id, name, isAddMember });
  };

  return (
    <div className={styles.container}>
      <div onClick={checkAddMember}>
        <Personnel info={props.info} isAdd={added} />
        <hr />
      </div>
    </div>
  );
};

export default PersonnelList;

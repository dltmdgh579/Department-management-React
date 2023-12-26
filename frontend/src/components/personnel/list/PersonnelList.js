import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list.module.css";
import Personnel from "./Personnel";

const PersonnelList = (props) => {
  const {
    id,
    name,
    dateOfBirth,
    phone,
    address,
    profileImage,
    departmentType,
  } = props.info;

  const isAddPage = props.add;
  const checkAddMemberInfo = props.checkFunction;

  const [added, setAdded] = useState(false);

  const checkAddMember = () => {
    const isAddMember = !added;
    setAdded(isAddMember);
    checkAddMemberInfo({ id, name, isAddMember });
  };

  return (
    <div className={styles.container}>
      {isAddPage ? (
        <div onClick={checkAddMember}>
          <Personnel info={props.info} isAdd={added} />
          <hr />
        </div>
      ) : (
        <Link to={"/detail/" + id} className={styles.link}>
          <Personnel info={props.info} />
          <hr />
        </Link>
      )}
    </div>
  );
};

export default PersonnelList;

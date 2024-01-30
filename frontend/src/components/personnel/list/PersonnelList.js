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
  const isAbsentCheckPage = props.check;
  const checkAddMemberInfo = props.checkFunction;
  const checkAbsentMemberInfo = props.absentCheckFunction;

  const [added, setAdded] = useState(false);
  const [absent, setAbsent] = useState(false);

  const checkAddMember = () => {
    const isAddMember = !added;
    setAdded(isAddMember);
    checkAddMemberInfo({ id, name, isAddMember });
  };

  const checkAbsentMember = () => {
    const isAbsentMember = !absent;
    setAbsent(isAbsentMember);
    checkAbsentMemberInfo({ id, name, isAbsentMember });
  };

  let personnel = (
    <Link to={"/detail/" + id} className={styles.link}>
      <Personnel info={props.info} />
      <hr />
    </Link>
  );

  if (isAddPage) {
    personnel = (
      <div onClick={checkAddMember}>
        <Personnel info={props.info} isAdd={added} />
        <hr />
      </div>
    );
  }

  if (isAbsentCheckPage) {
    personnel = (
      <div onClick={checkAbsentMember}>
        <Personnel info={props.info} isAbsent={absent} />
        <hr />
      </div>
    );
  }

  return <div className={styles.container}>{personnel}</div>;
};

export default PersonnelList;

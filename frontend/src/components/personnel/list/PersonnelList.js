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
  const isAttendanceCheckPage = props.attendance;
  const checkAddMemberInfo = props.checkFunction;
  const checkAttendanceMemberInfo = props.absentCheckFunction;

  const [added, setAdded] = useState(false);
  const [attendance, setAttendance] = useState(false);

  const checkAddMember = () => {
    const isAddMember = !added;
    setAdded(isAddMember);
    checkAddMemberInfo({ id, name, isAddMember });
  };

  const checkAttendanceMember = () => {
    const isAttendanceMember = !attendance;
    setAttendance(isAttendanceMember);
    checkAttendanceMemberInfo({ id, name, isAttendanceMember });
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

  if (isAttendanceCheckPage) {
    personnel = (
      <div onClick={checkAttendanceMember}>
        <Personnel info={props.info} isAttendance={attendance} />
        <hr />
      </div>
    );
  }

  return <div className={styles.container}>{personnel}</div>;
};

export default PersonnelList;

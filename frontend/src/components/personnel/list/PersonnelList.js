import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list.module.css";

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
          <div
            className={
              added ? styles.info_container_add : styles.info_container
            }
          >
            <img
              src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
              className={styles.profile_image}
            ></img>
            <div className={styles.text_container}>
              <div className={styles.text_name}>{name}</div>
              <div>{dateOfBirth}</div>
              <div>{phone}</div>
              <div>{address}</div>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <Link to={"/detail/" + id} className={styles.link}>
          <div className={styles.info_container}>
            <img
              src="https://d1qll2sj38w7uy.cloudfront.net/member/default/1.jpg"
              className={styles.profile_image}
            ></img>
            <div className={styles.text_container}>
              <div className={styles.text_name}>{name}</div>
              <div>{dateOfBirth}</div>
              <div>{phone}</div>
              <div>{address}</div>
            </div>
          </div>
          <hr />
        </Link>
      )}
    </div>
  );
};

export default PersonnelList;

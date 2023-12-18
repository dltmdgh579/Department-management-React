import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list.module.css";

const PersonnelListHeader = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <Link to="/personnel/post">추가</Link>
      </div>
      <div>필터</div>
      <div>검색</div>
      {/* <Link to="/personnel" className={styles.link}>
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
      </Link> */}
    </div>
  );
};

export default PersonnelListHeader;

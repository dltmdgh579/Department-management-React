import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list_header.module.css";

const PersonnelListHeader = (props) => {
  const isAddPage = props.add;

  return (
    <div className={styles.container}>
      {isAddPage ? null : (
        <div className={styles.post}>
          <Link to="/personnel/post" className={styles.post_link}>
            추가
          </Link>
        </div>
      )}
      <div className={styles.filter}>필터</div>
      <div className={styles.search_container}>
        <input className={styles.search}></input>
      </div>
    </div>
  );
};

export default PersonnelListHeader;

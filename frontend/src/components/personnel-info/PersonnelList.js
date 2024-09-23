import React from "react";
import { Link } from "react-router-dom";
import styles from "../../css/personnel/all-list/Personnel_list.module.css";
import Personnel from "./Personnel";

const PersonnelList = (props) => {
  const infoList = props.infoList;

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        {infoList
          ? infoList.map((info) => (
              <Link to={"/detail/" + info.id} className={styles.link}>
                <Personnel key={info.id} info={info} />
                <hr />
              </Link>
            ))
          : null}
      </div>
    </div>
  );
};

export default PersonnelList;

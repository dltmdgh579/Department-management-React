import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list_header.module.css";

const PersonnelListHeader = (props) => {
  const isAddPage = props.add;

  const departmentList = props.department;
  const filterFunction = props.filterFunction;

  const [isCheck, setCheck] = useState(false);

  const checkFilter = (department) => {
    const isCheckCopy = !isCheck;
    setCheck((isCheck) => !isCheck);
    filterFunction({ department, isCheckCopy });
  };

  return (
    <div>
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
      <div>
        {isAddPage ? null : (
          <div className={styles.department_container}>
            {departmentList.map((department) => (
              <div
                className={styles.department}
                onClick={() => checkFilter(department)}
              >
                {department.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonnelListHeader;

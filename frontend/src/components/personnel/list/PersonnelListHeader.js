import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list_header.module.css";

const PersonnelListHeader = (props) => {
  const isAddPage = props.add;

  const departmentList = props.department;
  const filterFunction = props.filterFunction;

  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [isCheck, setCheck] = useState(false);

  useEffect(() => {
    filterFunction(selectedDepartment);
  }, [selectedDepartment]);

  const findAndSetDepartment = (department) => {
    for (let i = 0; i < selectedDepartment.length; i++) {
      if (selectedDepartment[i].name === department.name) {
        let copy = [...selectedDepartment];
        copy[i].isCheck = !copy[i].isCheck;
        setSelectedDepartment(copy);
        return;
      }
    }

    const newDepartment = {
      name: department.name,
      isCheck: !department.isCheck,
    };

    setSelectedDepartment(selectedDepartment.concat(newDepartment));
  };

  const checkFilter = (department) => {
    setCheck((isCheck) => !isCheck);
    findAndSetDepartment(department);
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
        <div className={styles.filter}>정렬</div>
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
            <div className={styles.department}>남자</div>
            <div className={styles.department}>여자</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonnelListHeader;

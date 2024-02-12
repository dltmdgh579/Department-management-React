import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../../css/personnel/list/Personnel_list_header.module.css";

const PersonnelListHeader = (props) => {
  const isAddPage = props.add;

  const departmentList = props.department;
  const departmentFilterFunction = props.departmentFilterFunction;

  const [selectedDepartment, setSelectedDepartment] = useState([]);

  useEffect(() => {
    departmentFilterFunction(selectedDepartment);
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
      isCheck: true,
    };

    setSelectedDepartment(selectedDepartment.concat(newDepartment));
  };

  const checkDepartmentFilter = (department) => {
    findAndSetDepartment(department);
  };

  const checkGenderFilter = (gender) => {
    findAndSetDepartment(gender);
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
          <div className={styles.filter_container}>
            {departmentList.map((department) => (
              <div
                className={styles.filter}
                onClick={() => checkDepartmentFilter(department)}
              >
                {department.name}
              </div>
            ))}
            <div
              className={styles.filter}
              onClick={() => checkGenderFilter("M")}
            >
              남자
            </div>
            <div
              className={styles.filter}
              onClick={() => checkGenderFilter("W")}
            >
              여자
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonnelListHeader;

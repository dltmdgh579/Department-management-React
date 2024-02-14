import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../../../css/department/group/Other_department_header.module.css";

const OtherGroupHeader = (props) => {
  const departmentId = props.state?.currentDepartment.id;
  const departmentList = props.state?.departmentList.filter(
    (item) => item.id !== departmentId,
  );
  console.log(departmentList);

  const navigate = useNavigate();

  const navigateToOtherDepartment = (currentDepartment) => {
    navigate("/joshua", {
      state: {
        currentDepartment: currentDepartment,
        departmentList: props.state?.departmentList,
      },
    });
  };

  const otherDepartmentDisplay = (selectedDepartment) => {
    if (selectedDepartment === "KINDERGARTEN") return "영유치부";
    else if (selectedDepartment === "HOLYKIDS") return "홀리키즈";
    else if (selectedDepartment === "PAULCOMMUNITY") return "바울공동체";
    else if (selectedDepartment === "JOSHUA") return "여호수아 청년부";
  };

  return (
    <div className={styles.container}>
      {departmentList.map((department) => (
        <div
          className={styles.other_department}
          onClick={() => navigateToOtherDepartment(department)}
        >
          {otherDepartmentDisplay(department.name)}
        </div>
      ))}
    </div>
  );
};

export default OtherGroupHeader;

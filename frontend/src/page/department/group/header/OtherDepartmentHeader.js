import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../css/department/group/Other_department_header.module.css";

const OtherDepartmentHeader = (props) => {
  const departmentId = props.state?.currentDepartment.id;
  const departmentList = props.state?.departmentList.filter(
    (item) => item.id !== departmentId
  );

  const navigate = useNavigate();

  const navigateToOtherDepartment = (currentDepartment) => {
    navigate(`/${currentDepartment.name}`, {
      state: {
        currentDepartment: currentDepartment,
        departmentList: props.state?.departmentList,
      },
    });
  };

  const checkDepartmentColor = (selectedDepartment) => {
    if (selectedDepartment === "KINDERGARTEN")
      return styles.other_department_kindergarten;
    else if (selectedDepartment === "HOLYKIDS")
      return styles.other_department_holykids;
    else if (selectedDepartment === "PAULCOMMUNITY")
      return styles.other_department_paulcommunity;
    else if (selectedDepartment === "JOSHUA")
      return styles.other_department_joshua;
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
          className={checkDepartmentColor(department.name)}
          onClick={() => navigateToOtherDepartment(department)}
        >
          {otherDepartmentDisplay(department.name)}
        </div>
      ))}
    </div>
  );
};

export default OtherDepartmentHeader;

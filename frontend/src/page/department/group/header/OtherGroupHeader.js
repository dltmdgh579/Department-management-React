import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../css/department/group/Other_group_header.module.css";

const OtherGroupHeader = (props) => {
  const currentDepartmentId = props.currentDepartmentId;
  const currentGroupId = props.state?.currentGroupId;
  const smallGroupList = props.state?.smallGroupList.filter(
    (item) => item.id !== currentGroupId,
  );

  const navigate = useNavigate();

  const navigateToOtherGroup = (currentGroupId) => {
    navigate(`/${currentDepartmentId}/${currentGroupId}`, {
      state: {
        currentGroupId: currentGroupId,
        smallGroupList: props.state?.smallGroupList,
      },
    });
  };

  return (
    <div className={styles.container}>
      {smallGroupList.map((group) => (
        <div
          className={styles.other_group}
          onClick={() => navigateToOtherGroup(group.id)}
        >
          {group.name}
        </div>
      ))}
    </div>
  );
};

export default OtherGroupHeader;

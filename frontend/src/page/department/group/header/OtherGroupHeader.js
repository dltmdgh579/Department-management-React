import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../../../css/department/group/Other_group_header.module.css";

const OtherGroupHeader = (props) => {
  const currentDepartmentId = props.currentDepartmentId;
  const currentGroupId = props.state?.currentGroup.id;
  const smallGroupList = props.state?.smallGroupList.filter(
    (item) => item.id !== currentGroupId
  );

  const navigate = useNavigate();

  const navigateToOtherGroup = (currentGroup) => {
    navigate(`/${currentDepartmentId}/${currentGroup.id}`, {
      state: {
        currentGroup: currentGroup,
        smallGroupList: props.state?.smallGroupList,
      },
    });
  };

  return (
    <div className={styles.container}>
      {smallGroupList.map((group) => (
        <div
          className={styles.other_group}
          onClick={() => navigateToOtherGroup(group)}
        >
          {group.name}
        </div>
      ))}
    </div>
  );
};

export default OtherGroupHeader;

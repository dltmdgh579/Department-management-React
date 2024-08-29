import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupList from "./GroupList";
import { useLocation } from "react-router-dom";
import GroupUpdate from "./GroupUpdate";
import GroupAttendance from "./GroupAttendance";
import AddGroup from "./AddGroup";
import ModifyGroup from "./ModifyGroup";
import styles from "../../css/department/Department_info.module.css";
import OtherGroupHeader from "./OtherDepartmentHeader";
import NameHeader from "../../components/NameHeader";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const DepartmentInfo = (props) => {
  const location = useLocation();
  const state = location.state;
  const departmentId = state?.currentDepartment.id;
  const departmentName = state?.currentDepartment.name;

  const [info, setInfo] = useState([]);
  const [isAddGroup, setAddGroup] = useState(false);
  const [isModifyGroup, setModifyGroup] = useState(false);
  const [isModifyGroupName, setModifyGroupName] = useState(false);
  const [groupId, setGroupId] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/${departmentId}`);
      return res.data;
    };

    infoData().then((res) => setInfo(res));
    setAddGroup(false);
    setModifyGroupName(false);
  }, [location]);

  const addGroup = (isAdd) => {
    setAddGroup(isAdd);
  };

  const modifyGroup = (isModify) => {
    setModifyGroup(isModify);
  };

  const modifyGroupName = ([clickGroupModifyCopy, id]) => {
    setModifyGroupName(clickGroupModifyCopy);
    setGroupId(id);
  };

  return (
    <div>
      <NameHeader pageName={departmentName} />
      <OtherGroupHeader state={state} />
      <GroupUpdate addFunction={addGroup} modifyFunction={modifyGroup} />
      <div className={styles.content}>
        {isAddGroup ? <AddGroup state={state} /> : null}
        {isModifyGroupName ? (
          <ModifyGroup state={state} groupId={groupId} />
        ) : null}
        <GroupList
          key={info.id}
          info={info}
          state={state}
          isModify={isModifyGroup}
          modifyFunction={modifyGroupName}
        />
        <GroupAttendance
          info={[info.attendance, info.enrollment]}
          departmentName={departmentName}
          state={state}
        />
      </div>
    </div>
  );
};

export default DepartmentInfo;

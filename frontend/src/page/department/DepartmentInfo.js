import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupList from "../../components/department/GroupList";
import { Link, useLocation } from "react-router-dom";
import DepartmentInfoHeader from "./DepartmentInfoHeader";
import GroupAttendance from "../../components/department/GroupAttendance";
import AddGroup from "../../components/department/AddGroup";
import ModifyGroup from "../../components/department/ModifyGroup";
import styles from "../../css/department/Department_info.module.css";
import OtherGroupHeader from "./group/header/OtherDepartmentHeader";
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
      <DepartmentInfoHeader
        addFunction={addGroup}
        modifyFunction={modifyGroup}
      />
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
      <Link
        to={`/${departmentName}/list`}
        state={{ departmentId: departmentId, departmentName: departmentName }}
        className={styles.attendance_link}
      >
        <GroupAttendance info={[info.attendance, info.enrollment]} />
      </Link>
    </div>
  );
};

export default DepartmentInfo;

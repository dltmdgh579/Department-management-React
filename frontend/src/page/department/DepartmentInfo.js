import React, { useState, useEffect } from "react";
import axios from "axios";
import GroupList from "../../components/department/GroupList";
import { useLocation } from "react-router-dom";
import DepartmentInfoHeader from "./DepartmentInfoHeader";
import GroupAttendance from "../../components/department/GroupAttendance";
import AddGroup from "../../components/department/AddGroup";
import ModifyGroup from "../../components/department/ModifyGroup";

const DepartmentInfo = (props) => {
  const { state } = useLocation();
  const departmentId = state?.id;
  const departmentName = state?.name;
  const [info, setInfo] = useState([]);
  const [isAddGroup, setAddGroup] = useState(false);
  const [isModifyGroup, setModifyGroup] = useState(false);
  const [isModifyGroupName, setModifyGroupName] = useState(false);
  const [groupId, setGroupId] = useState([]);

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("http://dnch-edu.com:8080/" + departmentId);
      return res.data;
    };

    infoData().then((res) => setInfo(res));
  }, []);

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
      <GroupAttendance info={[info.attendance, info.enrollment]} />
    </div>
  );
};

export default DepartmentInfo;

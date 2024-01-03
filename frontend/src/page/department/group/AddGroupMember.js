import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import PersonnelListHeader from "../../../components/personnel/list/PersonnelListHeader";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../css/department/group/Group_add_member.module.css";
import moment from "moment";

const AddGroupMember = (props) => {
  const location = useLocation();
  const departmentId = location.state?.departmentId;
  const groupId = location.state?.groupId;

  const [infoList, setInfoList] = useState([]);
  const [addMemberList, setAddMemberList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get("https://dnch-edu.com/api/list");
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  const checkAddMemberInfo = (addMemberInfo) => {
    const id = addMemberInfo.id;
    const name = addMemberInfo.name;
    const addDate = moment().format("YYYY-MM-DD");
    const isAddMember = addMemberInfo.isAddMember;
    if (isAddMember === true) {
      setAddMemberList([...addMemberList, { id, name, addDate }]);
    } else if (isAddMember === false) {
      setAddMemberList(addMemberList.filter((member) => member.id != id));
    }
  };

  const sendAddMemberList = async () => {
    await axios({
      method: "post",
      url: "https://dnch-edu.com/api/" + departmentId + "/" + groupId + "/add",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ addMemberList: addMemberList }),
    }).then((response) => {
      navigate(`/${departmentId}/${groupId}`);
    });
  };

  return (
    <div className={styles.parent_container}>
      <PersonnelListHeader add={true} />
      {infoList.map((info) => (
        <PersonnelList
          key={info.id}
          info={info}
          add={true}
          checkFunction={checkAddMemberInfo}
        />
      ))}
      <div className={styles.done_check} onClick={sendAddMemberList}>
        ✔
      </div>
    </div>
  );
};

export default AddGroupMember;

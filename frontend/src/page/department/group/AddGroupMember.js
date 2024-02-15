import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../../../css/department/group/Group_add_member.module.css";
import moment from "moment";
import GroupAddPersonnelHeader from "../../../components/personnel/list/GroupAddPersonnelHeader";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const AddGroupMember = (props) => {
  const location = useLocation();
  const departmentId = location.state?.departmentId;
  const groupId = location.state?.groupId;
  const currentGroup = location.state?.groupState.currentGroup;
  const smallGroupList = location.state?.groupState.smallGroupList;

  const [infoList, setInfoList] = useState([]);
  const [addMemberList, setAddMemberList] = useState([]);
  const [gender, setGender] = useState("");
  const [order, setOrder] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/list`, {
        params: {
          genderFilter: gender,
          order: order,
        },
      });
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, [gender, order]);

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
      url: `${API_ROOT}/${departmentId}/${groupId}/add`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ addMemberList: addMemberList }),
    }).then((response) => {
      navigate(`/${departmentId}/${groupId}`, {
        state: {
          currentGroup: currentGroup,
          smallGroupList: smallGroupList,
        },
      });
    });
  };

  const setGenderFunction = (selectedGender) => {
    const updated = selectedGender.filter((item) => item.isCheck !== false);
    const gender = updated.map((item) => {
      return item.gender;
    });
    return gender;
  };

  const genderCheckFilter = (selectedGender) => {
    const gender = setGenderFunction(selectedGender);
    setGender(gender);
  };

  const checkOrder = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  return (
    <div className={styles.parent_container}>
      <GroupAddPersonnelHeader
        add={true}
        genderFilterFunction={genderCheckFilter}
        orderFunction={checkOrder}
      />
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

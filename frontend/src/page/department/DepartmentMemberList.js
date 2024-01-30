import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../css/department/Department_attendance.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import PersonnelList from "../../components/personnel/list/PersonnelList";
import moment from "moment";

const DepartmentInfo = (props) => {
  const location = useLocation();
  const departmentId = location.state?.departmentId;
  const departmentName = location.state?.departmentName;

  const [infoList, setInfoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);
  const [absentMemberList, setAbsentMemberList] = useState([]);

  // setSelectedDate(moment().format("yyyy-MM-DD"));
  const date = moment().format("yyyy-MM-DD");
  const navigate = useNavigate();

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(
        "https://dnch-edu.com/api/" + departmentId + "/list/" + date,
      );
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  const checkAbsentMemberInfo = (absentMemberInfo) => {
    const id = absentMemberInfo.id;
    const name = absentMemberInfo.name;
    const attendanceDate = moment().format("YYYY-MM-DD");
    const isAbsentMember = absentMemberInfo.isAbsentMember;
    if (isAbsentMember === true) {
      setAbsentMemberList([...absentMemberList, { id, name, attendanceDate }]);
    } else if (isAbsentMember === false) {
      setAbsentMemberList(absentMemberList.filter((member) => member.id != id));
    }
  };

  const sendAbsentMemberList = async () => {
    await axios({
      method: "post",
      url: "https://dnch-edu.com/api/" + departmentId + "/attendance",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ absentMemberList: absentMemberList }),
    }).then((response) => {
      navigate(`/${departmentId}`, {
        state: { id: departmentId, name: departmentName },
      });
    });
  };

  return (
    <div className={styles.parent_container}>
      {infoList &&
        infoList.map((info) => (
          <PersonnelList
            key={info.id}
            info={info}
            check={true}
            absentCheckFunction={checkAbsentMemberInfo}
          />
        ))}

      <div className={styles.done_check} onClick={sendAbsentMemberList}>
        ✔
      </div>
    </div>
  );
};

export default DepartmentInfo;

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
  const [attendanceMemberList, setAttendanceMemberList] = useState([]);

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

  const checkAttendanceMemberInfo = (attendanceMemberInfo) => {
    const id = attendanceMemberInfo.id;
    const name = attendanceMemberInfo.name;
    const attendanceDate = moment().format("YYYY-MM-DD");
    const isAttendanceMember = attendanceMemberInfo.isAttendanceMember;
    if (isAttendanceMember === true) {
      setAttendanceMemberList([
        ...attendanceMemberList,
        { id, name, attendanceDate },
      ]);
    } else if (isAttendanceMember === false) {
      setAttendanceMemberList(
        attendanceMemberList.filter((member) => member.id != id),
      );
    }
  };

  const sendAttendanceMemberList = async () => {
    await axios({
      method: "post",
      url: "https://dnch-edu.com/api/" + departmentId + "/attendance",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ attendanceMemberList: attendanceMemberList }),
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
            attendance={true}
            absentCheckFunction={checkAttendanceMemberInfo}
          />
        ))}

      <div className={styles.done_check} onClick={sendAttendanceMemberList}>
        ✔
      </div>
    </div>
  );
};

export default DepartmentInfo;

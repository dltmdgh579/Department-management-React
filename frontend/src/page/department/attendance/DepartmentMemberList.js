import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../css/department/attendance/Department_attendance.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import NameHeader from "../../../components/NameHeader";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import PersonnelAttendance from "./PersonnelAttendance";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const DepartmentInfo = (props) => {
  const location = useLocation();
  const departmentId = location.state?.state.currentDepartment.id;
  const departmentName = location.state?.state.currentDepartment.name;

  const [infoList, setInfoList] = useState([]);
  const [attendanceMemberList, setAttendanceMemberList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  useEffect(() => {
    const searchDate = format(selectedDate, "yyyy-MM-dd");
    const infoData = async () => {
      const res = await axios.get(
        `${API_ROOT}/${departmentId}/attendance/${searchDate}`,
      );
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, [selectedDate]);

  const checkAttendanceMemberInfo = (attendanceMemberInfo) => {
    const id = attendanceMemberInfo.id;
    const name = attendanceMemberInfo.name;
    const attendanceStatus = attendanceMemberInfo.attendanceStatus;
    setAttendanceMemberList((prevList) => {
      const memberIndex = prevList.findIndex((member) => member.id == id);
      if (memberIndex != -1) {
        const updatedList = [...prevList];
        updatedList[memberIndex] = {
          ...updatedList[memberIndex],
          attendanceStatus: attendanceStatus,
        };
        return updatedList;
      } else {
        return [...prevList, { id, name, attendanceStatus }];
      }
    });
  };

  const sendAttendanceMemberList = async () => {
    const searchDate = format(selectedDate, "yyyy-MM-dd");
    await axios({
      method: "post",
      url: `${API_ROOT}/${departmentId}/attendance/${searchDate}`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({ attendanceMemberList: attendanceMemberList }),
    }).then((response) => {
      navigate(`/${departmentId}`, {
        state: {
          currentDepartment: location.state?.state.currentDepartment,
          departmentList: location.state?.state.departmentList,
        },
      });
    });
  };

  const handleSelectedDate = async (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <NameHeader pageName={"전체 출석 확인"} />
      <div className={styles.content}>
        <div className={styles.parent_container}>
          <div className={styles.date_picker}>
            <DatePicker
              showYearDropdown
              scrollableYearDropdown
              yearDropdownItemNumber={100}
              dateFormat="yyyy.MM.dd" // 날짜 형태
              shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
              minDate={new Date("1970-01-01")} // minDate 이전 날짜 선택 불가
              maxDate={new Date()} // maxDate 이후 날짜 선택 불가
              selected={selectedDate}
              locale={ko}
              onChange={(date) => handleSelectedDate(date)}
            />
          </div>
          <div className={styles.personnel_list}>
            {infoList &&
              infoList.map((info) => (
                // <PersonnelList
                //   key={info.id}
                //   info={info}
                //   attendanceCheck={
                //     info.attendanceStatus === "ATTENDANCE" ? true : false
                //   }
                //   attendanceCheckPage={true}
                //   attendanceCheckFunction={checkAttendanceMemberInfo}
                // />
                <PersonnelAttendance
                  key={info.id}
                  info={info}
                  attendanceCheck={
                    info.attendanceStatus === "ATTENDANCE" ? true : false
                  }
                  attendanceCheckFunction={checkAttendanceMemberInfo}
                />
              ))}
            {infoList.length === 0 ? <div>출석 인원이 없습니다.</div> : null}
          </div>
          <div
            className={styles.attendance_check}
            onClick={sendAttendanceMemberList}
          >
            <span className={styles.attendance_check_text}>출석체크</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentInfo;

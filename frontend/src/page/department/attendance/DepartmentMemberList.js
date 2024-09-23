import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../../css/department/attendance/Department_attendance.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import NameHeader from "../../../components/NameHeader";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import { format } from "date-fns";
import qs from "qs";
import PersonnelAttendance from "../../../components/department/attendance/PersonnelAttendance";

const API_ROOT = process.env.REACT_APP_API_ROOT;

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};

const DepartmentInfo = (props) => {
  const location = useLocation();
  const departmentId = location.state?.state.currentDepartment.id;
  const departmentName = location.state?.state.currentDepartment.name;

  const [infoList, setInfoList] = useState([]);
  const [attendanceMemberList, setAttendanceMemberList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filterToggle, setFilterToggle] = useState(false);
  const [isSumitting, setIsSumitting] = useState(false);
  const [order, setOrder] = useState("ATTENDANCE");

  const navigate = useNavigate();

  useEffect(() => {
    const searchDate = format(selectedDate, "yyyy-MM-dd");
    const infoData = async () => {
      const res = await axios.get(
        `${API_ROOT}/${departmentId}/attendance/${searchDate}`,
        {
          params: {
            order: order,
          },
        },
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
    if (isSumitting) return;
    setIsSumitting(true);
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

  const changefilterToggle = () => {
    setFilterToggle(!filterToggle);
  };

  const FilterPlate = () => {
    return (
      <div className={styles.filter_plate}>
        <div className={styles.filter_plate_title}>성별</div>
        <div className={styles.filter_plate_item}>
          <button>남자</button>
          <button>여자</button>
        </div>
        <hr />
        <div className={styles.filter_plate_title}>정렬</div>
        <div className={styles.filter_plate_item}>
          <button>출석순</button>
          <button>나이순</button>
          <button>이름순</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NameHeader pageName={"전체 출석 확인"} />
      <div className={styles.content}>
        <div className={styles.header}>
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
          <div
            className={styles.filter}
            onClick={() => changefilterToggle()}
          ></div>
          {filterToggle && <FilterPlate />}
          <div className={styles.search}>
            <input type="text" required />
            <label>이름</label>
            <span></span>
            <div className={styles.search_icon}></div>
          </div>
        </div>
        <div className={styles.filter_selected_items}></div>
        <div className={styles.personnel_list}>
          {infoList &&
            infoList.map((info) => (
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
          <span className={styles.attendance_check_text} disabled={isSumitting}>
            출석체크
          </span>
        </div>
      </div>
    </div>
  );
};

export default DepartmentInfo;

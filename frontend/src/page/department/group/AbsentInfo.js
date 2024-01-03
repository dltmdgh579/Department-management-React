import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import AbsentInfoList from "../../../components/department/group/AbsentInfoList";
import { useParams } from "react-router-dom";
import styles from "../../../css/department/group/Group_absent_info_list.module.css";
import { ko } from "date-fns/locale";
import { format } from "date-fns";

const AbsentInfo = () => {
  const departmentId = useParams().department;
  const groupId = useParams().group;

  const [infoList, setInfoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const infoData = async () => {
      const absentDate = format(selectedDate, "yyyy-MM-dd");
      const res = await axios.get(
        "https://dnch-edu.com/api" + departmentId + "/" + groupId,
        +"/absent/" + absentDate,
      );

      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  const handleSelectedDate = async (date) => {
    setSelectedDate(date);
    const absentDate = format(date, "yyyy-MM-dd");
    await axios
      .get(
        "https://dnch-edu.com/api/" +
          departmentId +
          "/" +
          groupId +
          "/absent/" +
          absentDate,
      )
      .then((res) => setInfoList(res.data));
  };

  return (
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
      {infoList &&
        infoList.map((info) => <AbsentInfoList key={info.id} info={info} />)}
    </div>
  );
};

export default AbsentInfo;

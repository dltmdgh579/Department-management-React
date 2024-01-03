import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../css/personnel/list/Personnel_list.module.css";
import Personnel from "../../components/personnel/list/Personnel";
import { useLocation } from "react-router-dom";
import PersonnelList from "../../components/personnel/list/PersonnelList";
import moment from "moment";

const DepartmentInfo = (props) => {
  const location = useLocation();
  const departmentId = location.state?.departmentId;

  console.log(departmentId);

  const [infoList, setInfoList] = useState([]);
  const [selectedDate, setSelectedDate] = useState([]);

  // setSelectedDate(moment().format("yyyy-MM-DD"));
  const date = moment().format("yyyy-MM-DD");

  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(
        "https://dnch-edu.com/api" + departmentId + "/list/" + date,
      );
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  return (
    <div className={styles.container}>
      {infoList &&
        infoList.map((info) => <PersonnelList key={info.id} info={info} />)}
    </div>
  );
};

export default DepartmentInfo;

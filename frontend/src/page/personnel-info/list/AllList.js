import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import PersonnelListHeader from "../../../components/personnel/list/PersonnelListHeader";
import { useLocation } from "react-router-dom";

const API_ROOT = process.env.REACT_APP_API_ROOT;

const ListAll = (props) => {
  const { state } = useLocation();

  // useState
  const [infoList, setInfoList] = useState([]);
  const [departmentList, setDepartmentList] = useState([]);

  // useEffect
  useEffect(() => {
    const infoData = async () => {
      const res = await axios.get(`${API_ROOT}/list`);
      return res.data;
    };

    infoData().then((res) => setInfoList(res));
  }, []);

  const setDepartmentFunction = (department, isCheck) => {
    isCheck
      ? setDepartmentList([...departmentList, department])
      : setDepartmentList(
          departmentList.filter((remainDpt) => remainDpt !== department),
        );
  };

  const checkFilter = async (filter) => {
    const department = filter.department.name;
    const isCheck = filter.isCheckCopy;

    setDepartmentFunction(department, isCheck);

    await axios
      .get(`${API_ROOT}/list2`, {
        params: { condition: departmentList.join(",") },
      })
      .then((res) => {
        // setInfoList(res.data);
      });
  };

  return (
    <div>
      <PersonnelListHeader department={state} filterFunction={checkFilter} />
      {infoList.map((info) => (
        <PersonnelList key={info.id} info={info} />
      ))}
    </div>
  );
};

export default ListAll;

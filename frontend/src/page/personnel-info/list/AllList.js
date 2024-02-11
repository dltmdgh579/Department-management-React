import React, { useState, useEffect } from "react";
import axios from "axios";
import PersonnelList from "../../../components/personnel/list/PersonnelList";
import PersonnelListHeader from "../../../components/personnel/list/PersonnelListHeader";
import { useLocation } from "react-router-dom";
import qs from "qs";

const API_ROOT = process.env.REACT_APP_API_ROOT;

axios.defaults.paramsSerializer = (params) => {
  return qs.stringify(params, { arrayFormat: "repeat" });
};

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

  const setDepartmentFunction = (selectedDepartment) => {
    const updated = selectedDepartment.filter((item) => item.isCheck !== false);
    const departmentName = updated.map((item) => {
      return item.name;
    });
    return departmentName;
  };

  const checkFilter = async (selectedDepartment) => {
    const departmentName = setDepartmentFunction(selectedDepartment);

    await axios
      .get(`${API_ROOT}/list`, {
        params: {
          departmentFilter: departmentName,
          genderFilter: "M",
          order: "AGE",
        },
      })
      .then((res) => {
        setInfoList(res.data);
      });
  };

  return (
    <div>
      <PersonnelListHeader department={state} filterFunction={checkFilter} />
      {infoList
        ? infoList.map((info) => <PersonnelList key={info.id} info={info} />)
        : null}
    </div>
  );
};

export default ListAll;
